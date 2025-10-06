import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, LineChart, PieChart, Target, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const InvestmentStrategy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Investment Strategy
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Tailored real estate investment strategies designed to maximize your returns and build long-term wealth in Dubai's dynamic property market.
              </p>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Strategic Investment Planning</h2>
              <p className="text-lg text-muted-foreground mb-8">
                At Leo Crown, we understand that every investor has unique goals, risk tolerance, and financial capabilities. 
                Our investment strategy service provides comprehensive analysis and personalized planning to ensure your 
                real estate portfolio aligns perfectly with your wealth-building objectives.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <Card>
                  <CardHeader>
                    <LineChart className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Market Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      In-depth analysis of Dubai's real estate market trends, growth areas, and emerging opportunities 
                      to identify the best investment prospects.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <PieChart className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Portfolio Diversification</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Strategic property portfolio construction across different asset types and locations 
                      to minimize risk and maximize potential returns.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Target className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Goal-Oriented Planning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Customized investment roadmaps tailored to your specific financial goals, whether it's 
                      rental income, capital appreciation, or residency through property ownership.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <TrendingUp className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>ROI Optimization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Data-driven strategies to maximize your return on investment through careful property 
                      selection, timing, and value-add opportunities.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">What We Offer</h2>
              
              <div className="space-y-4">
                {[
                  "Comprehensive market research and area analysis",
                  "Property value assessment and appreciation forecasts",
                  "Risk analysis and mitigation strategies",
                  "Investment timeline planning and milestones",
                  "Off-plan vs ready property investment guidance",
                  "Capital growth vs rental yield optimization",
                  "Exit strategy planning for maximum profitability",
                  "Regular portfolio performance reviews and adjustments",
                  "Access to exclusive off-market opportunities",
                  "Tax-efficient investment structuring advice"
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

        {/* CTA Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Build Your Investment Strategy?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss your investment goals and create a customized strategy to achieve them.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="premium" size="lg">
                    Schedule Consultation
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

export default InvestmentStrategy;
