'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const CTASection: React.FC = () => {
    return (
        <section className='bg-gradient-to-r from-purple-600 to-blue-600 py-20 text-white'>
            <div className='container mx-auto px-4 md:px-8'>
                <motion.div
                    className='mx-auto max-w-3xl text-center'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className='mb-4 text-3xl font-bold md:text-4xl'>
                        Ready to Create Your Persona Link?
                    </h2>
                    <p className='mb-8 text-lg text-white/90'>
                        Join thousands of creators, influencers, and businesses
                        who've boosted their online presence with Persona Link.
                    </p>

                    <div className='flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0'>
                        <motion.button
                            className='flex items-center justify-center rounded-full bg-white px-8 py-3 font-medium text-purple-600 shadow-lg transition-colors hover:bg-gray-100'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get Started Free
                            <ArrowRight className='ml-2 h-5 w-5' />
                        </motion.button>
                        <motion.button
                            className='rounded-full border-2 border-white bg-transparent px-8 py-3 font-medium text-white transition-colors hover:bg-white/10'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            See Demo
                        </motion.button>
                    </div>

                    <p className='mt-6 text-white/80'>
                        No credit card required. Start with our free plan today.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
