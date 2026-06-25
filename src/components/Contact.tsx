import React from 'react';
import { Phone, MapPin, Clock, MessageSquare, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-royal-gold font-bold tracking-wider uppercase text-sm">Get in Touch</h3>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-deep-green">
                Order Your Favorite Meals Today
              </h2>
              <p className="text-gray-600 text-lg">
                We are ready to serve you the best Nigerian delicacies. Reach out to us for orders, delivery, or reservations.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-3">
                <div className="bg-deep-green/5 w-12 h-12 rounded-full flex items-center justify-center">
                  <MapPin className="text-deep-green" />
                </div>
                <h4 className="font-bold text-deep-green">Our Location</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  16B Oba Daudu Street, Beside Onyems B Hospital, Iyana, Ojo, Lagos 102113, Nigeria
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-3">
                <div className="bg-deep-green/5 w-12 h-12 rounded-full flex items-center justify-center">
                  <Phone className="text-deep-green" />
                </div>
                <h4 className="font-bold text-deep-green">Call Us</h4>
                <p className="text-gray-600 text-sm">
                  +234 812 817 6870
                </p>
                <p className="text-gray-600 text-sm">
                  Available for phone orders
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-3">
                <div className="bg-deep-green/5 w-12 h-12 rounded-full flex items-center justify-center">
                  <Clock className="text-deep-green" />
                </div>
                <h4 className="font-bold text-deep-green">Opening Hours</h4>
                <p className="text-gray-600 text-sm">
                  Open Daily
                </p>
                <p className="text-gray-600 text-sm">
                  Closes at 7:00 PM
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-3">
                <div className="bg-deep-green/5 w-12 h-12 rounded-full flex items-center justify-center">
                  <MessageSquare className="text-deep-green" />
                </div>
                <h4 className="font-bold text-deep-green">WhatsApp Order</h4>
                <p className="text-gray-600 text-sm">
                  Fast & convenient ordering
                </p>
                <p className="text-gray-600 text-sm">
                  Direct to Madam Whyte
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-deep-green text-white hover:bg-deep-green/90 px-8 h-14 rounded-full font-bold shadow-lg"
                onClick={() => window.open('https://wa.me/2348128176870', '_blank')}
              >
                <MessageSquare className="mr-2" />
                Order on WhatsApp
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-deep-green text-deep-green hover:bg-deep-green hover:text-white px-8 h-14 rounded-full font-bold"
                onClick={() => window.location.href = 'tel:+2348128176870'}
              >
                <Phone className="mr-2" />
                Call Now
              </Button>
            </div>
          </div>

          <div className="bg-gray-200 rounded-3xl overflow-hidden shadow-xl aspect-square md:aspect-video lg:aspect-auto lg:h-full min-h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.55184650645!2d3.2132715!3d6.4515514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b879a8e0e9647%3A0xc3f1d8c1c5b8b9a!2s16B%20Oba%20Daudu%20St%2C%20Ojo%20102113%2C%20Lagos!5e0!3m2!1sen!2sng!4v1709400000000!5m2!1sen!2sng" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
