import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const reviews = [
  {
    name: 'Samuel Ajetunborin',
    text: 'The food was delicious, the food delivery was quick, plus I got added value which was a sweet. Nice place to eat.',
    rating: 5,
  },
  {
    name: 'Japhet Adaji',
    text: 'Their food is very good and it has a nice taste.',
    rating: 5,
  },
  {
    name: 'Jude Wanrin',
    text: 'The food is very sweet and delicious. Their customer relationship is top-notch. I will definitely patronize them more often.',
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section className="py-20 bg-deep-green text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <h3 className="text-royal-gold font-bold tracking-wider uppercase text-sm">Testimonials</h3>
          <h2 className="text-3xl md:text-5xl font-display font-bold">What Our Customers Say</h2>
          <div className="flex flex-col items-center pt-2">
            <div className="flex space-x-1 mb-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={20} className="fill-royal-gold text-royal-gold" />
              ))}
            </div>
            <p className="font-medium text-royal-gold">4.8/5 from 304+ Reviews</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                  <div className="p-4">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-3xl relative">
                      <Quote className="absolute top-8 left-8 text-royal-gold/20 w-16 h-16" />
                      <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                        <div className="flex space-x-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} size={16} className="fill-royal-gold text-royal-gold" />
                          ))}
                        </div>
                        <p className="text-xl md:text-2xl italic leading-relaxed text-gray-200">
                          "{review.text}"
                        </p>
                        <h4 className="text-lg font-bold text-royal-gold">— {review.name}</h4>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 space-x-4">
              <CarouselPrevious className="relative translate-y-0 left-0 bg-white/10 text-white hover:bg-royal-gold hover:text-deep-green border-none" />
              <CarouselNext className="relative translate-y-0 right-0 bg-white/10 text-white hover:bg-royal-gold hover:text-deep-green border-none" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
