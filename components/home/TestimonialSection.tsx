"use client"

import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Alex Morgan',
    role: 'Content Creator',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=150',
    content: 'Persona Link transformed my online presence. I\'ve seen a 40% increase in followers since I started using it for my content links.',
    rating: 5
  },
  {
    id: 2,
    name: 'Jennifer Liu',
    role: 'Digital Marketer',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=150',
    content: 'As a marketer, I need tools that provide analytics and optimization. Persona Link delivers exactly that, plus an amazingly clean design.',
    rating: 5
  },
  {
    id: 3,
    name: 'Marcus Johnson',
    role: 'Musician',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=150',
    content: 'I use Persona Link to promote my music releases and tour dates. The custom themes perfectly match my brand aesthetic.',
    rating: 4
  }
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-purple-900/20">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            Trusted by Thousands
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Join the community of creators, influencers, and businesses who\'ve transformed their online presence with Persona Link.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-14 w-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold dark:text-white">{testimonial.name}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 dark:text-gray-600'}
                  />
                ))}
              </div>
              
              <p className="text-gray-700 dark:text-gray-300">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-purple-600 dark:text-purple-400 font-medium mb-4">Join over 10,000 happy users</p>
          <motion.button 
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium transition-colors shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};