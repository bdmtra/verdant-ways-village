
import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  // Placeholder blog posts
  const posts = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Sustainable Living Tip #${i + 1}`,
    excerpt: "Discover practical ways to reduce your environmental impact while building stronger community connections through simple daily practices.",
    date: new Date(2024, 0, i + 1).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }),
    image: "/api/placeholder/300/200"
  }));

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-playfair font-bold text-earth mb-4">Community Blog</h1>
          <p className="text-lg text-charcoal/80">Stories, insights, and updates from our sustainable community</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post) => (
            <article key={post.id} className="bg-card/95 border border-border/60 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video bg-gradient-warm flex items-center justify-center text-ivory/80">
                <span className="text-4xl">📝</span>
              </div>
              <div className="p-6">
                <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                <Link to={`/blog/${post.id}`}>
                  <h2 className="text-xl font-playfair font-semibold text-earth mb-3 hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-charcoal/80 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
        
        {/* Pagination */}
        <div className="flex justify-center space-x-2">
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-forest transition-colors">
            1
          </button>
          <button className="px-4 py-2 bg-muted text-muted-foreground rounded-lg hover:bg-accent transition-colors">
            2
          </button>
          <button className="px-4 py-2 bg-muted text-muted-foreground rounded-lg hover:bg-accent transition-colors">
            3
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
