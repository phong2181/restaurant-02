import React from 'react';
import { Dish } from '../types/Dish';

interface DishCardProps {
  dish: Dish;
  onViewDetails: (dish: Dish) => void;
}

const DishCard: React.FC<DishCardProps> = ({ dish, onViewDetails }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
      <div className="relative h-48 overflow-hidden">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full font-bold">
          ${dish.price}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {dish.name}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {dish.description}
        </p>
        
        <button
          onClick={() => onViewDetails(dish)}
          className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200"
        >
          🔍 View Details
        </button>
      </div>
    </div>
  );
};

export default DishCard;