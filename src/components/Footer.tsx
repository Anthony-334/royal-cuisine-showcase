import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-deep-green text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-display font-bold text-royal-gold">Royal Dishes</h2>
            <p className="text-gray-300 leading-relaxed">
              Experience the true taste of authentic Nigerian cuisine, served with love and excellence by Madam Whyte.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-royal-gold transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-royal-gold transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-royal-gold transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-300 hover:text-royal-gold transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-royal-gold transition-colors">About Us</a></li>
              <li><a href="#menu" className="text-gray-300 hover:text-royal-gold transition-colors">Menu</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-royal-gold transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-royal-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold">Our Menu</h3>
            <ul className="space-y-4">
              <li><a href="#menu" className="text-gray-300 hover:text-royal-gold transition-colors">Swallows</a></li>
              <li><a href="#menu" className="text-gray-300 hover:text-royal-gold transition-colors">Rice Dishes</a></li>
              <li><a href="#menu" className="text-gray-300 hover:text-royal-gold transition-colors">Protein</a></li>
              <li><a href="#menu" className="text-gray-300 hover:text-royal-gold transition-colors">Specials</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-royal-gold shrink-0 mt-1" />
                <span className="text-gray-300">16B Oba Daudu Street, Iyana, Ojo, Lagos 102113</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-royal-gold shrink-0" />
                <span className="text-gray-300">+234 812 817 6870</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-royal-gold shrink-0" />
                <span className="text-gray-300">info@royaldishes.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center md:flex md:justify-between md:items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2026 Royal Dishes by Madam Whyte. All Rights Reserved.
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
