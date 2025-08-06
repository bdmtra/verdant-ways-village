
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
            <div className="aspect-video bg-gradient-natural flex items-center justify-center text-ivory/80">
              <span className="text-8xl">🗺️</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
