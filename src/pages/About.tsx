import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-100 to-blue-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-purple-800">About Etherglade</h1>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
              alt="About Etherglade"
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <p className="text-lg mb-6 text-gray-700">
              Etherglade is a dynamic conglomerate that celebrates the essence of India through its diverse portfolio of businesses. From FMCG products to luxury hotels and healthcare services, we strive to enhance the lives of our customers in various sectors.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              Founded with a vision to create a positive impact across multiple industries, Etherglade has grown into a nationwide powerhouse. Our success is built on our commitment to quality, innovation, and customer satisfaction.
            </p>
            <h2 className="text-2xl font-bold mb-4 text-purple-800">Our Core Values</h2>
            <ul className="space-y-4">
              {['Excellence', 'Innovation', 'Customer-Centric', 'Integrity', 'Sustainability'].map((item, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <CheckCircle className="text-green-500 mr-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;