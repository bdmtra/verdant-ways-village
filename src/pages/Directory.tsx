import React, { useMemo, useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
const Directory = () => {
  const categories = ["All", "Cafe", "Artisan", "Agriculture", "Wellness", "Services", "Retail"];
  const dirImages = ["/images/directory-business.jpg", "/images/concept-agriculture.jpg", "/images/concept-maker.jpg"];
  // Placeholder directory entries with categories
  const entries = Array.from({
    length: 12
  }, (_, i) => {
    const category = categories[i % (categories.length - 1) + 1];
    return {
      id: i + 1,
      title: `Green Business ${i + 1}`,
      category,
      address: "123 Sustainable St, EcoTown",
      phone: "(555) 123-4567",
      website: "www.greenbusiness.com",
      email: "info@greenbusiness.com",
      instagram: "@greenbusiness",
      description: "A local business committed to sustainable practices and community engagement.",
      image: "/api/placeholder/300/200"
    };
  });
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const filteredEntries = useMemo(() => entries.filter(e => selectedCategory === "All" ? true : e.category === selectedCategory), [entries, selectedCategory]);
  return <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-playfair font-bold text-foreground mb-4">Business Directory</h1>
          <p className="text-lg text-charcoal/80">Discover local businesses that share our values</p>
        </div>
        
        <div className="mb-8">
          <div className="bg-card border rounded-xl p-0 flex flex-col gap-4">
            
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="w-full flex flex-wrap gap-2 bg-secondary/40 p-0 rounded-lg border border-border">
            {categories.map(cat => <TabsTrigger key={cat} value={cat} className="px-4 py-2 rounded-full text-foreground hover:bg-accent/20 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow">
                {cat}
              </TabsTrigger>)}
              </TabsList>
            </Tabs>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredEntries.map(entry => <div key={entry.id} className="bg-card/95 border border-border/60 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img src={dirImages[(entry.id - 1) % dirImages.length]} alt={`${entry.title} storefront`} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-6">
            <h2 className="text-xl font-playfair font-semibold text-foreground mb-3">
                  {entry.title}
                </h2>
                <div className="space-y-2 text-sm text-charcoal/80 mb-4">
                  <div>📍 {entry.address}</div>
                  <div>📞 {entry.phone}</div>
                  <div>🌐 <a href={`http://${entry.website}`} className="text-primary hover:text-accent transition-colors">{entry.website}</a></div>
                  <div>✉️ <a href={`mailto:${entry.email}`} className="text-primary hover:text-accent transition-colors">{entry.email}</a></div>
                  <div>📱 <a href={`https://instagram.com/${entry.instagram.slice(1)}`} className="text-primary hover:text-accent transition-colors">{entry.instagram}</a></div>
                </div>
                <p className="text-charcoal/80 text-sm leading-relaxed">
                  {entry.description}
                </p>
              </div>
            </div>)}
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
    </div>;
};
export default Directory;