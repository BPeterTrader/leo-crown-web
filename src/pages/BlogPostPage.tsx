import { useParams, Link, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getBlogPostBySlug, blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import { Calendar, User, Clock, ArrowLeft, Facebook, Twitter, Linkedin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  const shareUrl = encodeURIComponent(window.location.href);
  const shareTitle = encodeURIComponent(post.title);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
            
            <div className="max-w-4xl">
              <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
                {post.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="py-12 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-8">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-8 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="prose prose-lg max-w-none">
                  {post.content.split('\n').map((paragraph, index) => {
                    if (paragraph.startsWith('# ')) {
                      return <h1 key={index} className="text-4xl font-bold mt-8 mb-4">{paragraph.slice(2)}</h1>;
                    } else if (paragraph.startsWith('## ')) {
                      return <h2 key={index} className="text-3xl font-bold mt-6 mb-3">{paragraph.slice(3)}</h2>;
                    } else if (paragraph.startsWith('### ')) {
                      return <h3 key={index} className="text-2xl font-semibold mt-4 mb-2">{paragraph.slice(4)}</h3>;
                    } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                      return <p key={index} className="font-bold text-lg mt-4">{paragraph.slice(2, -2)}</p>;
                    } else if (paragraph.startsWith('- ') || paragraph.startsWith('✓ ') || paragraph.startsWith('✅ ') || paragraph.startsWith('❌ ')) {
                      return <li key={index} className="ml-6">{paragraph.slice(2)}</li>;
                    } else if (paragraph.trim() === '') {
                      return <br key={index} />;
                    } else {
                      return <p key={index} className="text-lg leading-relaxed mb-4 text-muted-foreground">{paragraph}</p>;
                    }
                  })}
                </div>

                {/* Share Section */}
                <div className="mt-12 pt-8 border-t border-border">
                  <h3 className="text-xl font-semibold mb-4">Share this article</h3>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, '_blank')}
                    >
                      <Facebook className="h-4 w-4 mr-2" />
                      Facebook
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`, '_blank')}
                    >
                      <Twitter className="h-4 w-4 mr-2" />
                      Twitter
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, '_blank')}
                    >
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </Button>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-4">
                {/* Author Bio */}
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>About {post.author}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {post.author === "Drupad Shah" 
                        ? "Drupad Shah is the founder of Leo Crown and a leading real estate investment advisor with over 10 years of experience in the Dubai property market."
                        : "The Leo Crown team consists of experienced property professionals dedicated to helping clients achieve their real estate investment goals."}
                    </p>
                    <Link to="/contact">
                      <Button variant="outline" size="sm" className="w-full">
                        Contact {post.author}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                {/* CTA Card */}
                <Card className="mb-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                  <CardHeader>
                    <CardTitle>Ready to Invest?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Get personalized property investment advice from our expert team.
                    </p>
                    <Link to="/contact">
                      <Button variant="premium" size="sm" className="w-full">
                        Schedule Consultation
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Related Articles</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {relatedPosts.map(relatedPost => (
                          <Link 
                            key={relatedPost.id} 
                            to={`/blog/${relatedPost.slug}`}
                            className="block group"
                          >
                            <h4 className="font-semibold text-sm group-hover:text-primary transition-colors mb-1">
                              {relatedPost.title}
                            </h4>
                            <p className="text-xs text-muted-foreground">
                              {relatedPost.date}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </aside>
            </div>
          </div>
        </article>

        {/* Related Posts Grid (Mobile) */}
        {relatedPosts.length > 0 && (
          <section className="py-12 bg-gradient-to-br from-primary/5 to-accent/5 lg:hidden">
            <div className="container mx-auto px-4 lg:px-8">
              <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map(relatedPost => (
                  <Link 
                    key={relatedPost.id} 
                    to={`/blog/${relatedPost.slug}`}
                    className="block"
                  >
                    <Card className="hover:shadow-lg transition-shadow h-full">
                      <CardHeader>
                        <div className="text-xs text-primary mb-2">{relatedPost.category}</div>
                        <CardTitle className="text-lg hover:text-primary transition-colors">
                          {relatedPost.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                          {relatedPost.excerpt}
                        </p>
                        <p className="text-xs text-muted-foreground">{relatedPost.date}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Newsletter CTA */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
              <p className="text-muted-foreground mb-8">
                Subscribe to receive the latest market insights and property investment tips directly to your inbox.
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostPage;
