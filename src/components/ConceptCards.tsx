
import React from 'react';
import { Link } from 'react-router-dom';

const ConceptCards = () => {
  const concepts = [
    {
      title: "Car-Free Living",
      description: "Wide bike lanes, walking paths, and electric shuttles connect every corner of our community. Experience the peace of streets designed for people, not traffic.",
      image: "/api/placeholder/400/300",
      link: "/blog/car-free-living"
    },
    {
      title: "Urban Agriculture",
      description: "Community gardens, rooftop farms, and food forests integrate seamlessly with residential areas. Grow your own food steps from your front door.",
      image: "/api/placeholder/400/300", 
      link: "/blog/urban-agriculture"
    },
    {
      title: "Maker Community",
      description: "Shared workshops, artist studios, and maker spaces foster creativity and entrepreneurship. Turn your passion into your livelihood within our supportive ecosystem.",
      image: "/api/placeholder/400/300",
      link: "/blog/maker-community"
    },
    {
      title: "Regenerative Design",
      description: "Every building and space is designed to give back to the environment. Solar power, rainwater collection, and native landscaping create a net-positive impact.",
      image: "/api/placeholder/400/300",
      link: "/blog/regenerative-design"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-earth mb-6">
            Life by Design
          </h2>
          <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">
            Discover the principles that shape our community and create a better way of living
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {concepts.map((concept, index) => (
            <Link
              key={concept.title}
              to={concept.link}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-video bg-gradient-warm flex items-center justify-center text-ivory/80">
                <span className="text-6xl">📸</span>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-playfair font-semibold text-earth mb-3 group-hover:text-primary transition-colors">
                  {concept.title}
                </h3>
                <p className="text-charcoal/80 leading-relaxed">
                  {concept.description}
                </p>
                <div className="mt-4 text-primary font-medium text-sm group-hover:text-forest transition-colors">
                  Learn More →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConceptCards;
