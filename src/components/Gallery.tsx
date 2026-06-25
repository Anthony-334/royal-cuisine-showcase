import React, { useState } from 'react';

const galleryCategories = [
  'All',
  'Food & Drinks',
  'Restaurant Interior',
  'Happy Customers',
  'Kitchen Preparation',
  'Signature Dishes',
];

const galleryImages = [
  { url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/3aae6906-04fb-4da1-aada-2b49c98f3f9b/hero-bg-becbc564-1782385303990.webp', category: 'Food & Drinks' },
  { url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/3aae6906-04fb-4da1-aada-2b49c98f3f9b/swallow-egusi-2050e1db-1782385304078.webp', category: 'Food & Drinks' },
  { url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/3aae6906-04fb-4da1-aada-2b49c98f3f9b/rice-jollof-d80fc564-1782385304751.webp', category: 'Signature Dishes' },
  { url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/3aae6906-04fb-4da1-aada-2b49c98f3f9b/restaurant-interior-f7e53536-1782385304130.webp', category: 'Restaurant Interior' },
  { url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/3aae6906-04fb-4da1-aada-2b49c98f3f9b/signature-ofada-da534fc3-1782385303375.webp', category: 'Signature Dishes' },
  { url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=600', category: 'Food & Drinks' },
  { url: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&q=80&w=600', category: 'Happy Customers' },
  { url: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=600', category: 'Kitchen Preparation' },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h3 className="text-royal-gold font-bold tracking-wider uppercase text-sm">Visual Experience</h3>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-deep-green">
            Our Gallery
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {galleryCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-deep-green text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {filteredImages.map((img, index) => (
            <div 
              key={index} 
              className="break-inside-avoid relative group overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all"
            >
              <img
                src={img.url}
                alt={`Gallery ${index}`}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-medium bg-deep-green/80 px-4 py-2 rounded-full text-xs">
                  {img.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
