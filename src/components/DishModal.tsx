import React from 'react';
import { X } from 'lucide-react';
import { Dish } from '../types/Dish';

interface DishModalProps {
  dish: Dish;
  onClose: () => void;
}

export default function DishModal({ dish, onClose }: DishModalProps){
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-64 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full transition-colors duration-200"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="absolute bottom-4 right-4 bg-amber-600 text-white px-4 py-2 rounded-full font-bold text-lg">
            ${dish.price}
          </div>
        </div>
        
        <div className="p-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {dish.name}
          </h2>
          
          <p className="text-lg text-gray-700 mb-6">
            {dish.description}
          </p>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Ingredients:
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {dish.ingredients.map((ingredient, index) => (
                <li 
                  key={index}
                  className="flex items-center text-gray-700"
                >
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={onClose}
              className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};