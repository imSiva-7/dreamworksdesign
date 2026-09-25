import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio /> 
      <Contact />
    </main>
  );
}