
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  
  // Placeholder blog post data
  const post = {
    id: id || '1',
    title: `Sustainable Living Tip #${id || '1'}`,
    content: `This is the full content of blog post #${id || '1'}. Here you would find detailed information about sustainable living practices, community initiatives, and ways to reduce your environmental impact while building stronger community connections.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
    date: new Date(2024, 0, parseInt(id || '1')).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }),
    image: "/api/placeholder/800/400"
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-primary hover:text-forest mb-8 transition-colors"
          >
            ← Back to Blog
          </Link>
          
          <article className="bg-card rounded-2xl overflow-hidden shadow-lg">
            <div className="aspect-video bg-gradient-warm flex items-center justify-center text-ivory/80">
              <span className="text-6xl">📝</span>
            </div>
            
            <div className="p-8">
              <div className="text-sm text-muted-foreground mb-4">{post.date}</div>
              <h1 className="text-4xl font-playfair font-bold text-earth mb-6">
                {post.title}
              </h1>
              
              <div className="prose prose-lg max-w-none text-charcoal/80 leading-relaxed">
                {post.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
