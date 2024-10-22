import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-100 to-blue-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="About FreshGoods"
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-4xl font-bold mb-6 text-purple-800">About FreshGoods</h2>
            <p className="text-lg mb-6 text-gray-700">
              At FreshGoods, we're committed to providing high-quality FMCG products that enhance your daily life. Our mission is to deliver fresh, innovative, and sustainable goods that meet the evolving needs of our customers.
            </p>
            <ul className="space-y-4">
              {['Quality Assurance', 'Sustainable Practices', 'Innovation', 'Customer Satisfaction'].map((item, index) => (
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