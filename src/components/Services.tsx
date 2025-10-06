import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Calculator, Landmark, PlaneTakeoff, TrendingUp, Shield } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Property Investment Strategy",
    description: "Customized property portfolios designed for your investment goals and risk profile.",
  },
  {
    icon: Calculator,
    title: "Financing & Mortgages",
    description: "Access to exclusive financing options and competitive mortgage rates for international investors.",
  },
  {
    icon: Landmark,
    title: "International Banking",
    description: "Streamlined banking solutions and account setup for seamless property transactions.",
  },
  {
    icon: PlaneTakeoff,
    title: "Tax & Relocation",
    description: "Expert guidance on tax optimization and relocation services for new residents.",
  },
  {
    icon: TrendingUp,
    title: "Portfolio Management",
    description: "Professional management of your real estate investments for optimal returns.",
  },
  {
    icon: Shield,
    title: "Legal & Compliance",
    description: "Comprehensive legal support and compliance guidance throughout your investment journey.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Services We Offer
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive property investment services tailored to your unique goals and circumstances.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-[0_10px_40px_-10px_hsl(30,48%,56%/0.3)] transition-all duration-300 border-border hover:border-primary/40"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-[hsl(35,58%,62%)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
