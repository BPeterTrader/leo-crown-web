import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User, Instagram, Linkedin, Facebook, Twitter, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

const BlogPage = () => {
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
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button 
                variant="outline" 
                size="lg"
                className="gap-2"
                onClick={() => window.open('https://www.facebook.com/p/Leo-Crown-Estate-61579186532142/', '_blank')}
              >
                <Facebook className="h-5 w-5" />
                Facebook
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="gap-2"
                onClick={() => window.open('https://www.instagram.com/leocrownestate/', '_blank')}
              >
                <Instagram className="h-5 w-5" />
                Instagram
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="gap-2"
                onClick={() => window.open('https://ae.linkedin.com/company/leo-crown', '_blank')}
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="gap-2"
                onClick={() => window.open('https://x.com/thecrownestate?lang=en', '_blank')}
              >
                <Twitter className="h-5 w-5" />
                X (Twitter)
              </Button>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link to={`/blog/${post.slug}`} key={post.id}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full group cursor-pointer">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="flex flex-wrap items-center gap-3 text-sm">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                      <Button variant="link" className="p-0 h-auto font-semibold group-hover:translate-x-1 transition-transform">
                        Read More →
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
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
