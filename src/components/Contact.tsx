import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Visit Us
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Come experience the warmth and flavors of Harvest & Hearth. 
            We're located in the heart of Portland, Oregon.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-gray-300">
              123 Northwest Burnside St<br />
              Portland, OR 97209
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-300">
              (503) 555-HEARTH<br />
              (503) 555-4327
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Hours</h3>
            <p className="text-gray-300">
              Mon-Thu: 5PM - 10PM<br />
              Fri-Sun: 4PM - 11PM
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-300">
              info@harvestandhearth.com<br />
              reservations@harvestandhearth.com
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Make a Reservation</h3>
          <p className="text-gray-300 mb-8">
            Call us or visit in person to secure your table. Walk-ins welcome based on availability.
          </p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
            Call for Reservations
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;