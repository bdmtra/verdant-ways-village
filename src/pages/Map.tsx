
import React from 'react';

const Map = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-playfair font-bold text-earth mb-4">Community Map</h1>
          <p className="text-lg text-charcoal/80">Explore our walkable, bike-friendly neighborhood</p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-card rounded-2xl overflow-hidden shadow-lg">
            {/* Map Placeholder */}
            <div className="aspect-video bg-gradient-natural flex flex-col items-center justify-center text-ivory/90 p-12">
              <span className="text-8xl mb-4">🗺️</span>
              <h2 className="text-3xl font-playfair font-semibold mb-4 text-shadow-soft">Interactive Map</h2>
              <p className="text-center text-lg max-w-md">
                An interactive map will be integrated here showing bike paths, community gardens, 
                maker spaces, and all the wonderful places that make our town special.
              </p>
            </div>
            
            {/* Map Legend */}
            <div className="p-8 bg-card">
              <h3 className="text-xl font-playfair font-semibold text-earth mb-6">Map Legend</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-forest rounded-full"></div>
                  <span className="text-sm text-charcoal/80">Community Gardens</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-terracotta rounded-full"></div>
                  <span className="text-sm text-charcoal/80">Maker Spaces</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                  <span className="text-sm text-charcoal/80">Bike Paths</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-wheat rounded-full"></div>
                  <span className="text-sm text-charcoal/80">Community Centers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
