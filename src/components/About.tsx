import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Located in the heart of Portland, Oregon, <strong>Harvest & Hearth</strong> is more than just a restaurant—it's a celebration of American culinary traditions reimagined with local, seasonal ingredients.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our rustic-industrial space features exposed brick walls, reclaimed wood tables, and vintage Edison bulbs that create a warm, inviting atmosphere. Watch our chefs work their magic in our open kitchen, centered around a beautiful wood-fired oven.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Every dish tells a story of American comfort food elevated with fresh, local ingredients and artisanal techniques. We're proud to partner with local farms and craft producers to bring you the very best of the Pacific Northwest.
            </p>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Chef preparing food"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌾</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Farm-to-Table</h3>
            <p className="text-gray-600">Fresh, local ingredients sourced from Oregon's finest farms and producers.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔥</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Wood-Fired Cooking</h3>
            <p className="text-gray-600">Our wood-fired oven adds authentic smoky flavors to our signature dishes.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🍻</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Craft Beverages</h3>
            <p className="text-gray-600">Curated selection of Oregon craft beers and Pacific Northwest wines.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;