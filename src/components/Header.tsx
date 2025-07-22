import React, { useState } from 'react';
import { Menu, X, ChefHat } from 'lucide-react';

export default function Header(){
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <ChefHat className="h-8 w-8 text-amber-600" />
            <h1 className="text-2xl font-bold text-gray-900">Harvest & Hearth</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-amber-600 transition-colors duration-200"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-amber-600 transition-colors duration-200"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="text-gray-700 hover:text-amber-600 transition-colors duration-200"
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-amber-600 transition-colors duration-200"
            >
              Contact
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-amber-600 hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-2">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-amber-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-amber-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-amber-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-amber-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

