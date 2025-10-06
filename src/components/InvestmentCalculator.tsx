import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, TrendingUp, Home, DollarSign } from "lucide-react";

const InvestmentCalculator = () => {
  const [propertyPrice, setPropertyPrice] = useState(1000000);
  const [downPayment, setDownPayment] = useState(250000);
  const [rentalYield, setRentalYield] = useState(6);
  const [appreciationRate, setAppreciationRate] = useState(5);
  const [years, setYears] = useState(5);

  const loanAmount = propertyPrice - downPayment;
  const annualRent = (propertyPrice * rentalYield) / 100;
  const monthlyRent = annualRent / 12;
  const futureValue = propertyPrice * Math.pow(1 + appreciationRate / 100, years);
  const totalAppreciation = futureValue - propertyPrice;
  const totalRentalIncome = annualRent * years;
  const totalROI = ((totalAppreciation + totalRentalIncome - downPayment) / downPayment) * 100;

  return (
    <section id="calculator" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold mb-4">Investment Calculator</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Calculate your potential returns and make informed investment decisions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Calculator Inputs */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5 text-primary" />
                Property Details
              </CardTitle>
              <CardDescription>Adjust the values to see your investment potential</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="price">Property Price (AED)</Label>
                <Input
                  id="price"
                  type="number"
                  value={propertyPrice}
                  onChange={(e) => setPropertyPrice(Number(e.target.value))}
                  className="text-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="downpayment">Down Payment (AED)</Label>
                <Input
                  id="downpayment"
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="text-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="yield">Expected Rental Yield (%)</Label>
                <Input
                  id="yield"
                  type="number"
                  step="0.1"
                  value={rentalYield}
                  onChange={(e) => setRentalYield(Number(e.target.value))}
                  className="text-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="appreciation">Annual Appreciation (%)</Label>
                <Input
                  id="appreciation"
                  type="number"
                  step="0.1"
                  value={appreciationRate}
                  onChange={(e) => setAppreciationRate(Number(e.target.value))}
                  className="text-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="years">Investment Period (Years)</Label>
                <Input
                  id="years"
                  type="number"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="text-lg"
                />
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="space-y-4">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Total ROI
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-primary">{totalROI.toFixed(2)}%</p>
                <p className="text-sm text-muted-foreground mt-2">Over {years} years</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Home className="h-5 w-5 text-primary" />
                  Monthly Rental Income
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">AED {monthlyRent.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <DollarSign className="h-5 w-5 text-primary" />
                  Total Rental Income
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">AED {totalRentalIncome.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                <p className="text-sm text-muted-foreground mt-1">Over {years} years</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Property Appreciation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">AED {totalAppreciation.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Future value: AED {futureValue.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentCalculator;