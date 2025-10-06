import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight, Calendar } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Luxury city skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/60 to-secondary/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/40 backdrop-blur-sm px-4 py-2 text-sm font-semibold">
            20+ Years of Proven Expertise
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Boutique Real Estate
            <span className="block bg-gradient-to-r from-primary via-[hsl(35,58%,62%)] to-primary bg-clip-text text-transparent">
              Investment Firm
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
            Your trusted partner in building wealth through strategic real estate investments. 
            Personalized guidance from experienced property advisors.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="#contact">
              <Button variant="premium" size="lg" className="group">
                <Calendar className="mr-2 h-5 w-5" />
                Book a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#properties">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-secondary">
                View Properties
              </Button>
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">20+</div>
              <div className="text-white font-semibold mb-1">Years Experience</div>
              <div className="text-white/70 text-sm">Market Expert</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">$500M+</div>
              <div className="text-white font-semibold mb-1">Properties Managed</div>
              <div className="text-white/70 text-sm">Proven Track Record</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">95%</div>
              <div className="text-white font-semibold mb-1">Client Satisfaction</div>
              <div className="text-white/70 text-sm">Long-term Relationships</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
