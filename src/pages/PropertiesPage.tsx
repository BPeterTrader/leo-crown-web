import Header from "@/components/Header";
import Properties from "@/components/Properties";
import Footer from "@/components/Footer";

const PropertiesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Premium Properties
            </h1>
            <p className="text-xl text-center text-muted-foreground max-w-2xl mx-auto">
              Explore our curated selection of luxury real estate investments in Dubai's most prestigious locations
            </p>
          </div>
        </div>
        <Properties />
      </main>
      <Footer />
    </div>
  );
};

export default PropertiesPage;
