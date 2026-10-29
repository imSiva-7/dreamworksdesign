import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const anton = localFont({
  src: "./fonts/anton-latin.woff2",
  weight: "400",
  display: "swap",
  variable: "--font-anton",
});

const poppins = localFont({
  src: [
    { path: "./fonts/poppins-regular-latin.woff2", weight: "400" },
    { path: "./fonts/poppins-medium-latin.woff2", weight: "500" },
    { path: "./fonts/poppins-semibold-latin.woff2", weight: "600" },
    { path: "./fonts/poppins-bold-latin.woff2", weight: "700" },
  ],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Forma Studio - Digital Design Agency",
  description: "We craft bold digital experiences that turn ideas into brands people remember.",
  keywords: ["web design", "branding", "UI/UX design", "digital marketing", "creative agency"],
  authors: [{ name: "Forma Studio" }],
  openGraph: {
    title: "Forma Studio - Digital Design Agency",
    description: "We craft bold digital experiences that turn ideas into brands people remember.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-accent focus:text-ink focus:font-semibold focus:rounded-full focus:shadow-lg font-[family-name:var(--font-poppins)]"
        >
          Skip to main content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
