import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import { MapPin, Bed, Bath, Square } from "lucide-react";

const properties = [
  {
    image: property1,
    title: "Luxury Downtown Residence",
    location: "Downtown District",
    price: "$2,450,000",
    beds: 3,
    baths: 3,
    sqft: "2,400",
    status: "Featured",
  },
  {
    image: property2,
    title: "Penthouse with Infinity Pool",
    location: "Marina Heights",
    price: "$5,800,000",
    beds: 4,
    baths: 4,
    sqft: "3,800",
    status: "Premium",
  },
  {
    image: property3,
    title: "Modern Villa Estate",
    location: "Luxury Hills",
    price: "$3,200,000",
    beds: 5,
    baths: 4,
    sqft: "4,200",
    status: "New",
  },
];

const Properties = () => {
  return (
    <section id="properties" className="py-24 bg-accent/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured Properties
          </h2>
          <p className="text-xl text-muted-foreground">
            Discover our hand-picked selection of premium properties in prime locations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <Card 
              key={index} 
              className="overflow-hidden group hover:shadow-[0_20px_50px_-10px_hsl(30,48%,56%/0.3)] transition-all duration-300 border-border"
            >
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                  {property.status}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {property.title}
                  </h3>
                  <span className="text-2xl font-bold text-primary">{property.price}</span>
                </div>
                
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4 pb-4 border-b border-border">
                  <div className="flex items-center gap-1">
                    <Bed className="h-4 w-4" />
                    <span>{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="h-4 w-4" />
                    <span>{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Square className="h-4 w-4" />
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="premium" size="lg">
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Properties;
