import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import MenuSection from '../components/MenuSection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import DishModal from '../components/DishModal';
import { Dish } from '../types/Dish';

export default function HomePage() {
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);

  const handleViewDetails = (dish: Dish) => {
    setSelectedDish(dish);
  };

  const handleCloseModal = () => {
    setSelectedDish(null);
  };

  return (
    <div className="min-h-screen bg-cream-50">
      <Header />
      <Hero />
      <About />
      <MenuSection onViewDetails={handleViewDetails} />
      <Contact />
      <Footer />
      {selectedDish && (
        <DishModal dish={selectedDish} onClose={handleCloseModal} />
      )}
    </div>
  );
}