import Hero from "@/components/Hero";
import AwardsRow from "@/components/AwardsRow";
import Services from "@/components/Services";
import FeatureRow from "@/components/FeatureRow";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <AwardsRow />
      <Services />
      <FeatureRow />
      <Portfolio /> 
      <Contact />
     
    </main>
  );
}