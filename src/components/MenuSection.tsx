import React from 'react';
import { menuItems } from '../data/menu';
import { Dish } from '../types/Dish';
import DishCard from './DishCard';

interface MenuSectionProps {
  onViewDetails: (dish: Dish) => void;
}

const MenuSection: React.FC<MenuSectionProps> = ({ onViewDetails }) => {
  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully crafted selection of American classics, 
            made with the finest local ingredients and time-honored techniques.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {menuItems.map((dish) => (
            <DishCard 
              key={dish.id} 
              dish={dish} 
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
        
        <div className="mt-16 bg-amber-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Beverages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <h4 className="font-semibold text-gray-900">Fresh Lemonade</h4>
              <p className="text-amber-600 font-bold">$4</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-gray-900">Craft IPA (Local)</h4>
              <p className="text-amber-600 font-bold">$6</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-gray-900">Oregon Pinot Noir</h4>
              <p className="text-amber-600 font-bold">$8</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-gray-900">Cold Brew Coffee</h4>
              <p className="text-amber-600 font-bold">$4</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;