import React from 'react';

const Events = () => {
  // Placeholder events
  const events = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    name: `Community Event ${i + 1}`,
    image: "/api/placeholder/300/200",
    startDateTime: new Date(2024, 2, i + 5, 10, 0),
    endDateTime: new Date(2024, 2, i + 5, 15, 0),
    address: "Community Center, EcoTown",
    description: "Join us for this wonderful community gathering celebrating sustainable living and local connections.",
    venue: "EcoTown Community Center"
  }));

  const formatDateTime = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-playfair font-bold text-earth mb-4">Upcoming Events</h1>
          <p className="text-lg text-charcoal/80">Connect, learn, and grow with your community</p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6 mb-12">
          {events.map((event) => (
            <div key={event.id} className="bg-card/95 border border-border/60 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-48 flex-shrink-0">
                  <div className="aspect-video bg-gradient-warm rounded-lg flex items-center justify-center text-ivory/80">
                    <span className="text-4xl">📅</span>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h2 className="text-2xl font-playfair font-semibold text-earth mb-2">
                    {event.name}
                  </h2>
                  
                  <div className="space-y-2 text-sm text-charcoal/80 mb-4">
                    <div>🕐 <strong>Start:</strong> {formatDateTime(event.startDateTime)}</div>
                    <div>🕐 <strong>End:</strong> {formatDateTime(event.endDateTime)}</div>
                    <div>📍 <strong>Address:</strong> {event.address}</div>
                    <div>🏢 <strong>Venue:</strong> {event.venue}</div>
                  </div>
                  
                  <p className="text-charcoal/80 leading-relaxed">
                    {event.description}
                  </p>
                </div>
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
        </div>
      </div>
    </div>
  );
};

export default Events;
