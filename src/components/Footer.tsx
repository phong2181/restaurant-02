import React from 'react';
import { ChefHat, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-2 mb-4">
            <ChefHat className="h-8 w-8 text-amber-600" />
            <h3 className="text-2xl font-bold">Harvest & Hearth</h3>
          </div>
          
          <p className="text-gray-300 text-center mb-6 max-w-2xl">
            A modern American bistro celebrating local ingredients, traditional techniques, 
            and the joy of sharing great food with the people you love.
          </p>
          
          <div className="flex items-center space-x-2 text-gray-400">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>in Portland, Oregon</span>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2025 Harvest & Hearth. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;