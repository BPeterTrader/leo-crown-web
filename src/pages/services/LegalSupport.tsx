import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, FileCheck, Shield, Users, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LegalSupport = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Scale className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Legal Support
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Comprehensive legal guidance and support throughout your real estate transaction, ensuring compliance and protecting your interests.
              </p>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Expert Legal Guidance</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Real estate transactions in Dubai involve complex legal requirements, documentation, and regulatory compliance. 
                Leo Crown's legal support service provides you with expert guidance from experienced property lawyers and legal 
                consultants who specialize in UAE real estate law, ensuring your transactions are secure, compliant, and your 
                interests are fully protected.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <Card>
                  <CardHeader>
                    <FileCheck className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Contract Review</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Thorough review and explanation of all purchase agreements, sale contracts, 
                      and legal documents to ensure your rights are protected.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Shield className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Due Diligence</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Comprehensive property title verification, lien checks, and legal status 
                      confirmation to ensure clear ownership transfer.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Scale className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Regulatory Compliance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Guidance on UAE property laws, foreign ownership regulations, and all 
                      legal requirements for your specific transaction type.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Users className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Dispute Resolution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Expert mediation and legal representation in case of disputes with 
                      developers, sellers, or tenants.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Services */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Legal Services</h2>
              
              <div className="space-y-4">
                {[
                  "Sales and purchase agreement review and negotiation",
                  "Title deed verification and transfer assistance",
                  "Property registration with Dubai Land Department",
                  "Mortgage documentation review and guidance",
                  "Off-plan purchase agreement analysis",
                  "Escrow account setup and monitoring",
                  "Power of attorney preparation and execution",
                  "Tenancy contract drafting and review",
                  "Property ownership structure advice (individual vs company)",
                  "Golden Visa property investment requirements",
                  "Inheritance and estate planning for properties",
                  "Tax implications and structuring advice",
                  "Developer delay and non-delivery legal action",
                  "Property defect claims and warranty enforcement",
                  "Landlord-tenant dispute resolution",
                  "Community regulations and compliance guidance"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-card p-4 rounded-lg border border-border">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Legal Support Matters */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Why Legal Support Matters</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="text-center border-2">
                  <CardHeader>
                    <CardTitle>Protect Your Investment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Ensure all legal aspects are properly handled to protect your significant 
                      financial investment in UAE property.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center border-2">
                  <CardHeader>
                    <CardTitle>Avoid Costly Mistakes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Expert legal review prevents errors and omissions that could lead to 
                      financial losses or transaction failures.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center border-2">
                  <CardHeader>
                    <CardTitle>Peace of Mind</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Confidence that your transaction is legally sound and your interests 
                      are fully protected by qualified professionals.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Key Legal Considerations */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Key Legal Considerations in Dubai</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Foreign Ownership Laws</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Understanding designated freehold areas where foreign nationals can own property, 
                      and the specific rights and restrictions that apply to non-UAE residents.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>RERA Regulations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Compliance with Real Estate Regulatory Agency (RERA) regulations governing 
                      property transactions, rental caps, and agent licensing requirements.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Escrow Account Law</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Understanding buyer protection through mandatory escrow accounts for off-plan 
                      purchases and the release milestone procedures.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Strata Title Laws</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Knowledge of condominium ownership laws, common area responsibilities, 
                      and homeowner association regulations in Dubai.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Need Legal Guidance?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Connect with our legal experts to ensure your property transaction is secure and compliant.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="premium" size="lg">
                    Consult Our Legal Team
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" size="lg">
                    View All Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LegalSupport;
