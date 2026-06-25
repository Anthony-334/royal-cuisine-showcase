import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/3aae6906-04fb-4da1-aada-2b49c98f3f9b/restaurant-interior-f7e53536-1782385304130.webp"
                alt="Restaurant Interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-deep-green text-white p-8 rounded-2xl shadow-xl hidden md:block max-w-[240px]">
              <p className="text-3xl font-display font-bold text-royal-gold">4.8/5</p>
              <p className="text-sm font-medium mt-1">Highly Rated by 304+ Happy Customers</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-royal-gold font-bold tracking-wider uppercase text-sm">Our Story</h3>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-deep-green">
                Welcome to Royal Dishes by Madam Whyte
              </h2>
            </div>
            
            <p className="text-gray-700 leading-relaxed text-lg">
              Royal Dishes by Madam Whyte is one of Lagos' favorite destinations for delicious Nigerian cuisine. Known for quality meals, affordability, excellent customer service, and a clean environment, we serve freshly prepared dishes made with love and the finest ingredients.
            </p>
            
            <p className="text-gray-700 leading-relaxed text-lg">
              Whether you are dining in, ordering takeaway, or requesting delivery, our team is committed to providing an unforgettable food experience. We believe that good food brings people together, and we take pride in serving excellence in every dish.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="border-l-4 border-royal-gold pl-4">
                <h4 className="font-bold text-deep-green">Quality Meals</h4>
                <p className="text-sm text-gray-600">Premium local ingredients</p>
              </div>
              <div className="border-l-4 border-royal-gold pl-4">
                <h4 className="font-bold text-deep-green">Excellent Service</h4>
                <p className="text-sm text-gray-600">Friendly & professional</p>
              </div>
              <div className="border-l-4 border-royal-gold pl-4">
                <h4 className="font-bold text-deep-green">Affordable</h4>
                <p className="text-sm text-gray-600">Great value for money</p>
              </div>
              <div className="border-l-4 border-royal-gold pl-4">
                <h4 className="font-bold text-deep-green">Clean Space</h4>
                <p className="text-sm text-gray-600">Hygienic environment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
