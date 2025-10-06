import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Landmark, Calculator, FileText, Shield, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FinancingSolutions = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Landmark className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Financing Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Access competitive mortgage options and flexible financing solutions to make your Dubai property investment a reality.
              </p>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Comprehensive Financing Support</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Navigating the UAE mortgage market can be complex. Leo Crown's financing solutions service 
                connects you with the best lenders and structures the optimal financing package for your investment. 
                We work with leading banks and financial institutions to secure competitive rates and favorable terms.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <Card>
                  <CardHeader>
                    <Calculator className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Mortgage Calculation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Detailed mortgage calculations and affordability assessments to determine your optimal 
                      loan amount and monthly payment structure.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Landmark className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Lender Connections</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Access to our network of trusted banks and financial institutions offering 
                      competitive rates for both UAE residents and foreign investors.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <FileText className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Application Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Complete assistance with mortgage application process, documentation preparation, 
                      and submission to ensure smooth approval.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Shield className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Best Rate Guarantee</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We negotiate on your behalf to secure the most competitive interest rates 
                      and favorable loan terms available in the market.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Financing Options */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Financing Services</h2>
              
              <div className="space-y-4">
                {[
                  "Mortgage pre-qualification and pre-approval assistance",
                  "Competitive rate comparisons from multiple lenders",
                  "Fixed and variable rate mortgage options",
                  "Financing for UAE residents and foreign investors",
                  "Off-plan payment plan structuring",
                  "Refinancing and equity release solutions",
                  "Buy-to-let mortgage arrangements",
                  "Documentation preparation and submission",
                  "Credit score improvement guidance",
                  "Mortgage insurance and protection advice",
                  "Payment holiday and flexible payment options",
                  "Sharia-compliant financing solutions"
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

        {/* Typical Financing Structure */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Typical Financing Structure</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="text-center">
                  <CardHeader>
                    <CardTitle className="text-4xl font-bold text-primary">75-80%</CardTitle>
                    <CardDescription className="text-base">Loan to Value (Residents)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      UAE residents can typically finance up to 80% of property value for properties under AED 5M
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <CardTitle className="text-4xl font-bold text-primary">60-75%</CardTitle>
                    <CardDescription className="text-base">Loan to Value (Non-Residents)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Foreign investors can access financing of 60-75% depending on the property type
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <CardTitle className="text-4xl font-bold text-primary">3-5%</CardTitle>
                    <CardDescription className="text-base">Competitive Interest Rates</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Access competitive interest rates through our banking partnerships
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Need Financing Assistance?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let our experts help you secure the best financing package for your property investment.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="premium" size="lg">
                    Get Financing Quote
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

export default FinancingSolutions;
