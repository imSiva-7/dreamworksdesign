import type { Metadata } from "next";
import { Anton, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "DreamWorks Design - Digital Design Agency",
  description: "We craft bold digital experiences that turn ideas into brands people remember.",
  keywords: ["web design", "branding", "UI/UX design", "digital marketing", "creative agency"],
  authors: [{ name: "DreamWorks Design" }],
  openGraph: {
    title: "DreamWorks Design - Digital Design Agency",
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
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-[#A6D934] focus:text-[#0A0A0A] focus:font-semibold focus:rounded-full focus:shadow-lg font-[family-name:var(--font-poppins)]"
        >
          Skip to main content
        </a>
        <Header />
        {children}
      </body>
    </html>
  );
}
