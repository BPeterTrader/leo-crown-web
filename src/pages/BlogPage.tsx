import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Dubai Real Estate Market Outlook 2025",
      excerpt: "Discover the latest trends and predictions for Dubai's luxury real estate market in the coming year.",
      date: "January 15, 2025",
      author: "Drupad Shah",
      image: "/placeholder.svg",
      category: "Market Insights"
    },
    {
      id: 2,
      title: "Top 5 Investment Areas in Dubai",
      excerpt: "Explore the most promising neighborhoods for real estate investment with high ROI potential.",
      date: "January 10, 2025",
      author: "Leo Crown Team",
      image: "/placeholder.svg",
      category: "Investment Guide"
    },
    {
      id: 3,
      title: "Understanding Dubai's Golden Visa Program",
      excerpt: "Learn how property investment can lead to long-term residency in the UAE.",
      date: "January 5, 2025",
      author: "Drupad Shah",
      image: "/placeholder.svg",
      category: "Legal & Residency"
    },
    {
      id: 4,
      title: "Luxury Living: Downtown Dubai Penthouses",
      excerpt: "An exclusive look at the most prestigious penthouse properties in the heart of Dubai.",
      date: "December 28, 2024",
      author: "Leo Crown Team",
      image: "/placeholder.svg",
      category: "Luxury Properties"
    },
    {
      id: 5,
      title: "Off-Plan vs Ready Properties: Which is Better?",
      excerpt: "A comprehensive comparison to help you make the right investment decision.",
      date: "December 20, 2024",
      author: "Drupad Shah",
      image: "/placeholder.svg",
      category: "Investment Guide"
    },
    {
      id: 6,
      title: "Financing Your Dubai Property: A Complete Guide",
      excerpt: "Everything you need to know about mortgages and financing options in the UAE.",
      date: "December 15, 2024",
      author: "Leo Crown Team",
      image: "/placeholder.svg",
      category: "Finance"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Real Estate Insights & News
            </h1>
            <p className="text-xl text-center text-muted-foreground max-w-2xl mx-auto mb-8">
              Stay informed with the latest trends, market insights, and expert advice from Leo Crown
            </p>
            
            {/* Social Media Links */}
            <div className="flex justify-center gap-4 mt-8">
              <Button 
                variant="outline" 
                size="lg"
                className="gap-2"
                onClick={() => window.open('https://instagram.com/leocrown', '_blank')}
              >
                <Instagram className="h-5 w-5" />
                Follow on Instagram
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="gap-2"
                onClick={() => window.open('https://linkedin.com/company/leocrown', '_blank')}
              >
                <Linkedin className="h-5 w-5" />
                Connect on LinkedIn
              </Button>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl hover:text-primary transition-colors cursor-pointer">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {post.author}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <Button variant="link" className="p-0 h-auto font-semibold">
                      Read More →
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Subscribe to our newsletter for the latest market insights, property listings, and investment opportunities
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2 rounded-md border border-input bg-background"
              />
              <Button variant="premium">Subscribe</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
