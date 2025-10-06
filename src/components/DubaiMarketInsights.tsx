import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, Building2, DollarSign, Users } from "lucide-react";

const priceGrowthData = [
  { year: "2020", price: 850 },
  { year: "2021", price: 920 },
  { year: "2022", price: 1050 },
  { year: "2023", price: 1180 },
  { year: "2024", price: 1320 },
];

const rentalYieldData = [
  { area: "Dubai Marina", yield: 6.5 },
  { area: "Downtown", yield: 5.8 },
  { area: "JBR", yield: 6.2 },
  { area: "Business Bay", yield: 7.1 },
  { area: "Palm Jumeirah", yield: 5.5 },
];

const propertyTypeData = [
  { name: "Apartments", value: 45, color: "#c98b50" },
  { name: "Villas", value: 25, color: "#a57142" },
  { name: "Townhouses", value: 20, color: "#8b5e34" },
  { name: "Penthouses", value: 10, color: "#6d4a29" },
];

const DubaiMarketInsights = () => {
  return (
    <section id="market-insights" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold mb-4">Dubai Market Insights</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-time data and statistics to help you understand the Dubai property market
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="border-primary/20">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <TrendingUp className="h-4 w-4 text-primary" />
                Avg. Price Growth
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">+15.2%</p>
              <p className="text-xs text-muted-foreground mt-1">Year over year</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Building2 className="h-4 w-4 text-primary" />
                Total Transactions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">127,456</p>
              <p className="text-xs text-muted-foreground mt-1">In 2024</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <DollarSign className="h-4 w-4 text-primary" />
                Avg. Rental Yield
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">6.3%</p>
              <p className="text-xs text-muted-foreground mt-1">Across all areas</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Users className="h-4 w-4 text-primary" />
                Foreign Investors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">68%</p>
              <p className="text-xs text-muted-foreground mt-1">Of total buyers</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle>Average Property Prices (AED/sqft)</CardTitle>
              <CardDescription>Historical price trends in Dubai</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={priceGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="year" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="price" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                    name="Price (AED)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle>Rental Yields by Area</CardTitle>
              <CardDescription>Average annual rental yields across popular areas</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={rentalYieldData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="area" className="text-xs" angle={-45} textAnchor="end" height={80} />
                  <YAxis className="text-xs" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}
                  />
                  <Legend />
                  <Bar dataKey="yield" fill="hsl(var(--primary))" name="Yield (%)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <Card className="border-primary/20 max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Property Type Distribution</CardTitle>
            <CardDescription>Market share by property type in Dubai</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={propertyTypeData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {propertyTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DubaiMarketInsights;