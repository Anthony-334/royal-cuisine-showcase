import React from 'react';
import { Star, Phone, MessageSquare, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/3aae6906-04fb-4da1-aada-2b49c98f3f9b/hero-bg-becbc564-1782385303990.webp"
          alt="Royal Dishes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white">
        <div className="flex flex-col items-center max-w-4xl mx-auto space-y-6">
          <div className="flex items-center space-x-1 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/20 mb-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={14} className="fill-royal-gold text-royal-gold" />
              ))}
            </div>
            <span className="text-sm font-medium">4.8/5 Stars (304+ Reviews)</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
            Experience Authentic <span className="text-royal-gold">Nigerian Flavours</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Freshly prepared local dishes served daily with exceptional customer service and fast delivery at Royal Dishes by Madam Whyte.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-royal-gold text-deep-green hover:bg-royal-gold/90 font-bold px-8 h-12"
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Menu
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-deep-green font-bold px-8 h-12"
              onClick={() => window.open('https://wa.me/2348128176870', '_blank')}
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              WhatsApp Order
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-deep-green font-bold px-8 h-12"
              onClick={() => window.location.href = 'tel:+2348128176870'}
            >
              <Phone className="mr-2 h-4 w-4" />
              Call Restaurant
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
