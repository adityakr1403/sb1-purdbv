import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-purple-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Etherglade</h3>
            <p className="text-purple-200">Enhancing lives through our diverse portfolio of businesses.</p>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Our Businesses</h4>
            <ul className="space-y-2">
              <li><span className="text-purple-200">The Indian Trends (FMCG)</span></li>
              <li><span className="text-purple-200">Cozy (Hotels)</span></li>
              <li><span className="text-purple-200">Lifeline (Hospitals)</span></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-purple-200 hover:text-white transition duration-300">Home</Link></li>
              <li><Link to="/businesses" className="text-purple-200 hover:text-white transition duration-300">Our Businesses</Link></li>
              <li><Link to="/about" className="text-purple-200 hover:text-white transition duration-300">About Us</Link></li>
              <li><Link to="/contact" className="text-purple-200 hover:text-white transition duration-300">Contact</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-purple-200 hover:text-white transition duration-300"><Facebook /></a>
              <a href="#" className="text-purple-200 hover:text-white transition duration-300"><Twitter /></a>
              <a href="#" className="text-purple-200 hover:text-white transition duration-300"><Instagram /></a>
              <a href="#" className="text-purple-200 hover:text-white transition duration-300"><Linkedin /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-purple-700 mt-8 pt-8 text-center">
          <p className="text-purple-200">&copy; 2023 Etherglade. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;