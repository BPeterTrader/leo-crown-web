import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Properties from "@/components/Properties";
import InvestmentCalculator from "@/components/InvestmentCalculator";
import DubaiMarketInsights from "@/components/DubaiMarketInsights";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Properties />
        <InvestmentCalculator />
        <DubaiMarketInsights />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
