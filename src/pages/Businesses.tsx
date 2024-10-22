import React from 'react';
import { ShoppingBag, Hotel, Stethoscope } from 'lucide-react';

const businesses = [
  {
    name: 'The Indian Trends',
    description: 'Discover our wide range of authentic Indian FMCG products, from spices to personal care items.',
    icon: ShoppingBag,
    type: 'FMCG',
  },
  {
    name: 'Cozy',
    description: 'Experience unparalleled hospitality in our chain of luxury hotels across India.',
    icon: Hotel,
    type: 'Hotels',
  },
  {
    name: 'Lifeline',
    description: 'Providing top-notch healthcare services with state-of-the-art facilities and expert medical professionals.',
    icon: Stethoscope,
    type: 'Hospitals',
  },
];

const Businesses = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-purple-800">Our Businesses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businesses.map((business, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg shadow-lg p-8 transform hover:scale-105 transition duration-300">
              <business.icon className="text-purple-600 w-12 h-12 mb-4" />
              <h3 className="text-2xl font-semibold text-purple-800 mb-2">{business.name}</h3>
              <p className="text-sm text-purple-600 mb-4">{business.type}</p>
              <p className="text-gray-600 mb-4">{business.description}</p>
              <button className="bg-purple-600 text-white font-bold py-2 px-4 rounded-full hover:bg-purple-700 transition duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Businesses;