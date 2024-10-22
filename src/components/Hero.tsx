import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-purple-600 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Etherglade</h1>
          <p className="text-xl mb-8">Discover our diverse portfolio of businesses, from FMCG products to luxury hotels and healthcare services.</p>
          <div className="space-x-4">
            <Link to="/businesses" className="bg-yellow-400 text-purple-800 font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transition duration-300">
              Our Businesses
            </Link>
            <Link to="/about" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-purple-600 transition duration-300">
              About Us
            </Link>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Etherglade Businesses"
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-50 to-transparent"></div>
    </section>
  );
};

export default Hero;