"use client"

import React from 'react';
import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

type PlanFeature = {
  title: string;
  free: boolean;
  pro: boolean;
  business: boolean;
};

const features: PlanFeature[] = [
  { title: 'Unlimited Links', free: true, pro: true, business: true },
  { title: 'Basic Analytics', free: true, pro: true, business: true },
  { title: 'Custom Domain', free: false, pro: true, business: true },
  { title: 'Remove LinkFolio Branding', free: false, pro: true, business: true },
  { title: 'Advanced Analytics', free: false, pro: true, business: true },
  { title: 'Schedule Links', free: false, pro: true, business: true },
  { title: 'Form & Email Collection', free: false, pro: false, business: true },
  { title: 'Team Collaboration', free: false, pro: false, business: true },
  { title: 'Priority Support', free: false, pro: false, business: true },
];

export const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Choose the plan that's right for you. All plans include a 14-day free trial.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <motion.div 
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <div className="p-6 border-b dark:border-gray-700">
              <h3 className="text-xl font-bold mb-2 dark:text-white">Free</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Perfect for getting started</p>
              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-bold dark:text-white">$0</span>
                <span className="text-gray-600 dark:text-gray-400 ml-1">/month</span>
              </div>
              <motion.button 
                className="w-full py-3 border border-purple-600 text-purple-600 dark:text-purple-400 rounded-lg font-medium hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </motion.button>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    {feature.free ? (
                      <Check size={18} className="text-green-500 mr-3" />
                    ) : (
                      <X size={18} className="text-gray-400 mr-3" />
                    )}
                    <span className={feature.free ? 'text-gray-700 dark:text-gray-300' : 'text-gray-400 dark:text-gray-500'}>
                      {feature.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          {/* Pro Plan */}
          <motion.div 
            className="bg-white dark:bg-gray-800 border-2 border-purple-600 rounded-2xl overflow-hidden shadow-md transform scale-105 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="absolute top-0 right-0 bg-purple-600 text-white text-sm font-bold px-4 py-1 rounded-bl-lg">
              Popular
            </div>
            <div className="p-6 border-b dark:border-gray-700">
              <h3 className="text-xl font-bold mb-2 dark:text-white">Pro</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">For creators and influencers</p>
              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-bold dark:text-white">$9</span>
                <span className="text-gray-600 dark:text-gray-400 ml-1">/month</span>
              </div>
              <motion.button 
                className="w-full py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start 14-day Trial
              </motion.button>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    {feature.pro ? (
                      <Check size={18} className="text-green-500 mr-3" />
                    ) : (
                      <X size={18} className="text-gray-400 mr-3" />
                    )}
                    <span className={feature.pro ? 'text-gray-700 dark:text-gray-300' : 'text-gray-400 dark:text-gray-500'}>
                      {feature.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          {/* Business Plan */}
          <motion.div 
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className="p-6 border-b dark:border-gray-700">
              <h3 className="text-xl font-bold mb-2 dark:text-white">Business</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">For teams and businesses</p>
              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-bold dark:text-white">$29</span>
                <span className="text-gray-600 dark:text-gray-400 ml-1">/month</span>
              </div>
              <motion.button 
                className="w-full py-3 border border-purple-600 text-purple-600 dark:text-purple-400 rounded-lg font-medium hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start 14-day Trial
              </motion.button>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    {feature.business ? (
                      <Check size={18} className="text-green-500 mr-3" />
                    ) : (
                      <X size={18} className="text-gray-400 mr-3" />
                    )}
                    <span className={feature.business ? 'text-gray-700 dark:text-gray-300' : 'text-gray-400 dark:text-gray-500'}>
                      {feature.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};