import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp, RefreshCw, Eye, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PortfolioManagement = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Portfolio Management
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Professional management and optimization of your real estate portfolio to maximize returns and minimize hassles.
              </p>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Comprehensive Portfolio Management</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Managing a real estate portfolio requires expertise, time, and constant attention to market dynamics. 
                Leo Crown's portfolio management service provides hands-on oversight of your investments, ensuring 
                optimal performance, proper maintenance, and strategic growth aligned with your financial objectives.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <Card>
                  <CardHeader>
                    <Eye className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Performance Monitoring</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Continuous tracking of property values, rental yields, and market conditions with 
                      detailed quarterly performance reports and insights.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <TrendingUp className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Value Enhancement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Strategic recommendations for property improvements and upgrades that 
                      increase value and rental income potential.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <RefreshCw className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Asset Rebalancing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Regular portfolio reviews and rebalancing recommendations to maintain 
                      optimal diversification and risk-adjusted returns.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <BarChart3 className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Financial Reporting</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Comprehensive financial reports including income statements, cash flow analysis, 
                      and ROI tracking for tax and planning purposes.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* What We Manage */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">What We Manage</h2>
              
              <div className="space-y-4">
                {[
                  "Property performance tracking and analysis",
                  "Rental income collection and management",
                  "Tenant screening, placement, and relations",
                  "Property maintenance coordination and oversight",
                  "Lease agreement management and renewals",
                  "Market rent analysis and optimization",
                  "Vacancy minimization strategies",
                  "Property inspection and condition reports",
                  "Budget planning and expense management",
                  "Insurance and compliance management",
                  "Renovation and upgrade project management",
                  "Exit strategy planning and execution",
                  "Tax documentation and reporting support",
                  "Emergency response and issue resolution"
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

        {/* Benefits Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Benefits of Professional Management</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle>Maximize Returns</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Professional oversight ensures optimal rental rates, minimized vacancies, and 
                      strategic improvements that enhance property value and income.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardHeader>
                    <CardTitle>Save Time</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Free yourself from day-to-day property management tasks while experts 
                      handle tenant issues, maintenance, and administrative duties.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardHeader>
                    <CardTitle>Reduce Risk</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Professional management reduces risks through proper tenant screening, 
                      legal compliance, and proactive property maintenance.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardHeader>
                    <CardTitle>Expert Guidance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Benefit from our market expertise and network to make informed decisions 
                      about acquisitions, dispositions, and portfolio optimization.
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
              <h2 className="text-3xl font-bold mb-4">Let Us Manage Your Portfolio</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Focus on growing your wealth while we handle the complexities of property management.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="premium" size="lg">
                    Get Started
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

export default PortfolioManagement;
