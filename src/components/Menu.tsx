import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const menuData = {
  Swallows: [
    { name: 'Pounded Yam & Egusi', price: '₦3,500', image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/3aae6906-04fb-4da1-aada-2b49c98f3f9b/swallow-egusi-2050e1db-1782385304078.webp' },
    { name: 'Fufu & Vegetable Soup', price: '₦3,000', image: 'https://images.unsplash.com/photo-1534422298391-e4f8c170db06?auto=format&fit=crop&q=80&w=400' },
    { name: 'Eba & Okra Soup', price: '₦2,800', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400' },
    { name: 'Amala & Ewedu', price: '₦3,200', image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&q=80&w=400' },
  ],
  Rice: [
    { name: 'Jollof Rice', price: '₦2,500', image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/3aae6906-04fb-4da1-aada-2b49c98f3f9b/rice-jollof-d80fc564-1782385304751.webp' },
    { name: 'Fried Rice', price: '₦2,500', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=400' },
    { name: 'Coconut Rice', price: '₦3,000', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=400' },
    { name: 'Ofada Rice', price: '₦4,500', image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/3aae6906-04fb-4da1-aada-2b49c98f3f9b/signature-ofada-da534fc3-1782385303375.webp' },
  ],
  Protein: [
    { name: 'Beef', price: '₦1,200', image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&q=80&w=400' },
    { name: 'Chicken', price: '₦1,800', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=400' },
    { name: 'Turkey', price: '₦2,500', image: 'https://images.unsplash.com/photo-1518492104633-130d0cc84637?auto=format&fit=crop&q=80&w=400' },
    { name: 'Fish', price: '₦2,000', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=400' },
  ],
  Specials: [
    { name: "Chef's Special Combo", price: '₦8,500', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=400' },
    { name: 'Family Meal Package', price: '₦15,000', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=400' },
    { name: 'Party Packs', price: 'From ₦25,000', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=400' },
  ],
};

const MenuSection = () => {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h3 className="text-royal-gold font-bold tracking-wider uppercase text-sm">Delicious Selection</h3>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-deep-green">
            Explore Our Menu
          </h2>
          <p className="text-gray-600">
            From traditional swallows to flavorful rice dishes, discover the authentic taste of Nigeria prepared with excellence.
          </p>
        </div>

        <Tabs defaultValue="Swallows" className="w-full">
          <TabsList className="flex justify-center flex-wrap h-auto p-1 bg-gray-50 mb-10 gap-2 md:gap-4">
            {Object.keys(menuData).map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="px-6 py-2.5 rounded-full data-[state=active]:bg-deep-green data-[state=active]:text-white font-medium transition-all"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(menuData).map(([category, items]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {items.map((item, index) => (
                  <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow group">
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-royal-gold text-deep-green font-bold">
                          {item.price}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader className="p-4">
                      <CardTitle className="text-lg text-deep-green">{item.name}</CardTitle>
                    </CardHeader>
                    <CardFooter className="p-4 pt-0">
                      <Button 
                        variant="ghost" 
                        className="w-full text-deep-green font-semibold hover:text-royal-gold hover:bg-gray-50 p-0 h-auto justify-start"
                        onClick={() => window.open('https://wa.me/2348128176870', '_blank')}
                      >
                        Order via WhatsApp
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default MenuSection;
