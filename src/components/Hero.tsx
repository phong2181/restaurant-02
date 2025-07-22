import React from 'react';

export default function Hero(){
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Restaurant interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Harvest & Hearth
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-delay">
          Modern American Bistro • Farm-to-Table Excellence
        </p>
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-80 animate-fade-in-delay-2">
          Experience classic American comfort food made with local, seasonal ingredients 
          in our warm, rustic atmosphere.
        </p>
        <button 
          onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg animate-fade-in-delay-3"
        >
          View Our Menu
        </button>
      </div>
    </section>
  );
};

