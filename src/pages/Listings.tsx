
import React from 'react';

const Listings = () => {
  // Placeholder property listings
  const listings = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Eco Property ${i + 1}`,
    price: 450000 + (i * 25000),
    address: "456 Green Ave, EcoTown",
    zoning: i % 3 === 0 ? "Residential" : i % 3 === 1 ? "Mixed Use" : "Commercial",
    size: `${1200 + (i * 200)} sq ft`,
    type: i % 4 === 0 ? "Land" : i % 4 === 1 ? "Home" : i % 4 === 2 ? "Condo" : "Townhouse",
    images: ["/api/placeholder/400/300"]
  }));

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-playfair font-bold text-earth mb-4">Property Listings</h1>
          <p className="text-lg text-charcoal/80">Find your place in our sustainable community</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {listings.map((listing) => (
            <div key={listing.id} className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video bg-gradient-natural flex items-center justify-center text-ivory/80">
                <span className="text-4xl">🏡</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h2 className="text-xl font-playfair font-semibold text-earth">
                    {listing.name}
                  </h2>
                  <span className="text-2xl font-bold text-forest">
                    ${listing.price.toLocaleString()}
                  </span>
                </div>
                
                <div className="space-y-2 text-sm text-charcoal/80 mb-4">
                  <div>📍 {listing.address}</div>
                  <div className="flex justify-between">
                    <span>🏗️ {listing.zoning}</span>
                    <span>📐 {listing.size}</span>
                  </div>
                  <div>🏠 {listing.type}</div>
                </div>
                
                <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-forest transition-colors">
                  View Details
                </button>
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

export default Listings;
