import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail, Phone, MapPin } from "lucide-react";

const teamMembers = [
  {
    name: "Dhru Bhatt",
    role: "Founder & Investment Advisor",
    location: "Dubai | London",
    phone: "+971 52 642 9766",
    email: "dhrubhatt@leo-crown.com",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-muted-foreground">
            Dedicated professionals committed to helping you achieve your real estate investment goals.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-[0_20px_60px_-10px_hsl(30,48%,56%/0.4)] transition-all duration-300 border-border hover:border-primary/40"
            >
              <CardContent className="p-10 text-center">
                {/* Profile placeholder with initials */}
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary to-[hsl(35,58%,62%)] flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform shadow-[0_10px_40px_-10px_hsl(30,48%,56%/0.4)]">
                  <span className="text-5xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                
                <h3 className="text-3xl font-bold mb-3">{member.name}</h3>
                <p className="text-primary font-semibold text-xl mb-6">{member.role}</p>
                
                <div className="space-y-3 mb-8 text-muted-foreground">
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-lg">{member.location}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <a href={`tel:${member.phone}`} className="text-lg hover:text-primary transition-colors">
                      {member.phone}
                    </a>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href={`mailto:${member.email}`} className="text-lg hover:text-primary transition-colors">
                      {member.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex justify-center gap-4">
                  <a 
                    href={`mailto:${member.email}`}
                    className="w-12 h-12 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                  <a 
                    href={`tel:${member.phone}`}
                    className="w-12 h-12 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                  >
                    <Phone className="h-5 w-5" />
                  </a>
                  <button className="w-12 h-12 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center">
                    <Linkedin className="h-5 w-5" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
