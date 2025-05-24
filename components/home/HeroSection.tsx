"use client"

import { FC } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection: FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="block dark:text-white">One Link to</span>
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                Share Everything
              </span>
            </motion.h1>
            <motion.p 
              className="text-gray-600 dark:text-gray-300 text-lg md:text-xl mb-8 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Create a beautiful, customizable link page that brings together all your important content, social profiles, and offers in one place.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.button 
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
              <motion.button 
                className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 px-8 py-3 rounded-full font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See Examples
              </motion.button>
            </motion.div>
          </div>
          
          <motion.div 
            className="relative mx-auto lg:mx-0 max-w-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-4 transform rotate-3 scale-[0.97] translate-y-4 translate-x-2 z-10 opacity-70">
              <div className="rounded-2xl bg-gray-100 dark:bg-gray-700 h-[500px]"></div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-4 transform -rotate-2 scale-[0.97] translate-y-2 translate-x-1 absolute top-0 left-0 right-0 z-20 opacity-80">
              <div className="rounded-2xl bg-gray-100 dark:bg-gray-700 h-[500px]"></div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-4 absolute top-0 left-0 right-0 z-30">
              <div className="rounded-2xl bg-gradient-to-b from-purple-100 to-blue-50 dark:from-purple-900 dark:to-blue-900 overflow-hidden h-[500px]">
                <div className="p-4">
                  <div className="flex items-center justify-center mb-6 pt-4">
                    <div className="h-20 w-20 rounded-full bg-purple-600 flex items-center justify-center mb-2">
                      <span className="text-white text-xl font-bold">JP</span>
                    </div>
                  </div>
                  <h3 className="text-center text-xl font-bold mb-1 dark:text-white">Jane Peterson</h3>
                  <p className="text-center text-gray-600 dark:text-gray-300 mb-6">Digital Creator & Designer</p>
                  
                  {[1, 2, 3, 4].map((item) => (
                    <motion.div 
                      key={item}
                      className="bg-white dark:bg-gray-800 rounded-xl p-3 mb-3 shadow-sm flex items-center transition-transform hover:scale-[1.02] cursor-pointer"
                      whileHover={{ scale: 1.02, x: 10 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="h-10 w-10 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-3">
                        <div className="h-5 w-5 bg-purple-500 rounded-md"></div>
                      </div>
                      <span className="font-medium dark:text-white">Link {item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-200 dark:bg-purple-900 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-200 dark:bg-blue-900 rounded-full opacity-20 blur-3xl"></div>
    </section>
  );
};

export default HeroSection