import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-purple-600">Etherglade</Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-600 hover:text-purple-600 transition duration-300">Home</Link>
          <Link to="/businesses" className="text-gray-600 hover:text-purple-600 transition duration-300">Our Businesses</Link>
          <Link to="/about" className="text-gray-600 hover:text-purple-600 transition duration-300">About</Link>
          <Link to="/contact" className="text-gray-600 hover:text-purple-600 transition duration-300">Contact</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <ShoppingCart className="text-gray-600 hover:text-purple-600 cursor-pointer" />
          <Menu className="md:hidden text-gray-600 hover:text-purple-600 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;