import Header from "@/components/Header";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              About Leo Crown
            </h1>
            <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto mb-8">
              Your trusted partner in building wealth through strategic real estate investments. 
              We pride ourselves on delivering personalized guidance from experienced property advisors 
              with proven expertise in the Dubai real estate market.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
              <div className="text-center p-6 bg-card rounded-lg border border-border">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border border-border">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Properties Sold</div>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border border-border">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
