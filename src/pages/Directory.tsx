
import React from 'react';

const Directory = () => {
  // Placeholder directory entries
  const entries = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Green Business ${i + 1}`,
    address: "123 Sustainable St, EcoTown",
    phone: "(555) 123-4567",
    website: "www.greenbusiness.com",
    email: "info@greenbusiness.com",
    instagram: "@greenbusiness",
    description: "A local business committed to sustainable practices and community engagement.",
    image: "/api/placeholder/300/200"
  }));

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-playfair font-bold text-earth mb-4">Business Directory</h1>
          <p className="text-lg text-charcoal/80">Discover local businesses that share our values</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {entries.map((entry) => (
            <div key={entry.id} className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video bg-gradient-earth flex items-center justify-center text-ivory/80">
                <span className="text-4xl">🏪</span>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-playfair font-semibold text-earth mb-3">
                  {entry.title}
                </h2>
                <div className="space-y-2 text-sm text-charcoal/80 mb-4">
                  <div>📍 {entry.address}</div>
                  <div>📞 {entry.phone}</div>
                  <div>🌐 <a href={`http://${entry.website}`} className="text-primary hover:text-forest transition-colors">{entry.website}</a></div>
                  <div>✉️ <a href={`mailto:${entry.email}`} className="text-primary hover:text-forest transition-colors">{entry.email}</a></div>
                  <div>📱 <a href={`https://instagram.com/${entry.instagram.slice(1)}`} className="text-primary hover:text-forest transition-colors">{entry.instagram}</a></div>
                </div>
                <p className="text-charcoal/80 text-sm leading-relaxed">
                  {entry.description}
                </p>
              </div>
            </div>
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

export default Directory;
