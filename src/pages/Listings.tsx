import React, { useMemo, useState } from 'react';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Listings = () => {
  // Placeholder property listings
  const listings = Array.from({ length: 12 }, (_, i) => {
    const area = 1200 + (i * 200);
    const zone = `Zone ${((i % 4) + 1)}`;
    return {
      id: i + 1,
      name: `Eco Property ${i + 1}`,
      price: 450000 + (i * 25000),
      address: "456 Green Ave, EcoTown",
      zoning: i % 3 === 0 ? "Residential" : i % 3 === 1 ? "Mixed Use" : "Commercial",
      area,
      size: `${area.toLocaleString()} sq ft`,
      type: i % 4 === 0 ? "Land" : i % 4 === 1 ? "Home" : i % 4 === 2 ? "Condo" : "Townhouse",
      zone,
      images: ["/api/placeholder/400/300"]
    };
  });
  
  const [priceFrom, setPriceFrom] = useState<string>("");
  const [priceTo, setPriceTo] = useState<string>("");
  const [areaFrom, setAreaFrom] = useState<string>("");
  const [areaTo, setAreaTo] = useState<string>("");
  const [type, setType] = useState<string>("All");
  const [zone, setZone] = useState<string>("All");

  const zones = useMemo(() => Array.from(new Set(listings.map(l => l.zone))), []);
  const types = ["All", "Land", "Home", "Condo", "Townhouse"];

  const filteredListings = useMemo(() => {
    const pf = priceFrom ? parseInt(priceFrom, 10) : 0;
    const pt = priceTo ? parseInt(priceTo, 10) : Number.MAX_SAFE_INTEGER;
    const af = areaFrom ? parseInt(areaFrom, 10) : 0;
    const at = areaTo ? parseInt(areaTo, 10) : Number.MAX_SAFE_INTEGER;

    return listings.filter(l =>
      l.price >= pf &&
      l.price <= pt &&
      l.area >= af &&
      l.area <= at &&
      (type === "All" ? true : l.type === type) &&
      (zone === "All" ? true : l.zone === zone)
    );
  }, [priceFrom, priceTo, areaFrom, areaTo, type, zone]);

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-playfair font-bold text-earth mb-4">Property Listings</h1>
          <p className="text-lg text-charcoal/80">Find your place in our sustainable community</p>
        </div>
        
        <div className="mb-8">
          <div className="bg-card border rounded-xl p-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm text-muted-foreground mb-1">Price From ($)</label>
              <Input inputMode="numeric" value={priceFrom} onChange={(e) => setPriceFrom(e.target.value.replace(/\D/g, ''))} placeholder="e.g. 300000" />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-1">Price To ($)</label>
              <Input inputMode="numeric" value={priceTo} onChange={(e) => setPriceTo(e.target.value.replace(/\D/g, ''))} placeholder="e.g. 600000" />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-1">Area From (sq ft)</label>
              <Input inputMode="numeric" value={areaFrom} onChange={(e) => setAreaFrom(e.target.value.replace(/\D/g, ''))} placeholder="e.g. 1200" />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-1">Area To (sq ft)</label>
              <Input inputMode="numeric" value={areaTo} onChange={(e) => setAreaTo(e.target.value.replace(/\D/g, ''))} placeholder="e.g. 2200" />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-1">Type</label>
              <Select value={type} onValueChange={setType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  {types.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-1">Zone</label>
              <Select value={zone} onValueChange={setZone}>
                <SelectTrigger>
                  <SelectValue placeholder="Select zone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All</SelectItem>
                  {zones.map(z => <SelectItem key={z} value={z}>{z}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredListings.map((listing) => (
            <div key={listing.id} className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img src="/images/listing-property.jpg" alt="Eco property" className="w-full h-full object-cover" loading="lazy" />
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
                
                  <div className="space-y-2 text-sm text-charcoal/80">
                    <div>📍 {listing.address}</div>
                    <div className="flex justify-between">
                      <span>🏗️ {listing.zoning}</span>
                      <span>📐 {listing.size}</span>
                    </div>
                    <div>🗺️ {listing.zone}</div>
                    <div>🏠 {listing.type}</div>
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
          <button className="px-4 py-2 bg-muted text-muted-foreground rounded-lg hover:bg-accent transition-colors">
            3
          </button>
        </div>
      </div>
    </div>
  );
};

export default Listings;
