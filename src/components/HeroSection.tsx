import React from 'react';
const HeroSection = () => {
  return <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background */}
      <img src="/images/hero-green.jpg" alt="Sustainable green community landscape" className="absolute inset-0 w-full h-full object-cover" />
      {/* Overlay Pattern */}
      <div className="absolute inset-0 opacity-30" style={{
      backgroundImage: `radial-gradient(circle at 25% 25%, rgba(109, 109, 97, 0.2) 0%, transparent 50%),
                         radial-gradient(circle at 75% 75%, rgba(151, 134, 113, 0.2) 0%, transparent 50%)`
    }}></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="hero-overlay rounded-2xl p-12 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 text-shadow-soft text-gray-950">
              Welcome to Our Sustainable Future
            </h1>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-slate-950">
              A car-free community where innovation meets tradition, where neighbors know each other, 
              and where the earth comes first in everything we build.
            </p>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-gentle-float">
        <div className="w-6 h-10 border-2 border-charcoal/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-charcoal/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>;
};
export default HeroSection;