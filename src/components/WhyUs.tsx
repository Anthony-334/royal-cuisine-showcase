import React from 'react';
import { Utensils, Truck, DollarSign, Sparkles, Heart, Users } from 'lucide-react';

const whyUsData = [
  {
    icon: <Utensils className="w-8 h-8 text-royal-gold" />,
    title: 'Delicious Food',
    description: 'Freshly prepared meals with authentic Nigerian flavors that keep you coming back.',
  },
  {
    icon: <Truck className="w-8 h-8 text-royal-gold" />,
    title: 'Fast Delivery',
    description: 'We ensure your food reaches you hot and fresh, right at your doorstep.',
  },
  {
    icon: <DollarSign className="w-8 h-8 text-royal-gold" />,
    title: 'Affordable Prices',
    description: 'Quality meals that won’t break the bank. Best value in Lagos.',
  },
  {
    icon: <Sparkles className="w-8 h-8 text-royal-gold" />,
    title: 'Clean Environment',
    description: 'We maintain the highest standards of hygiene and cleanliness in our kitchen.',
  },
  {
    icon: <Heart className="w-8 h-8 text-royal-gold" />,
    title: 'Friendly Service',
    description: 'Our team treats every customer like royalty with top-notch relationships.',
  },
  {
    icon: <Users className="w-8 h-8 text-royal-gold" />,
    title: 'Complimentary Treats',
    description: 'Enjoy little surprises and added value with your favorite meals.',
  },
];

const WhyUs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h3 className="text-royal-gold font-bold tracking-wider uppercase text-sm">Our Excellence</h3>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-deep-green">
            Why Customers Love Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyUsData.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center space-y-4"
            >
              <div className="bg-deep-green/5 p-4 rounded-full">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-deep-green">{item.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
