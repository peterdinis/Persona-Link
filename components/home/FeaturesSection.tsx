'use client';

import React from 'react';
import {
    Palette,
    Smartphone,
    BarChart3,
    Shield,
    Zap,
    Settings,
} from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        title: 'Custom Designs',
        description:
            'Personalize colors, fonts, and layouts to match your brand identity perfectly.',
        icon: Palette,
        color: 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400',
    },
    {
        title: 'Mobile Optimized',
        description:
            'Your Persona Link page works flawlessly on any device, from phones to desktops.',
        icon: Smartphone,
        color: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400',
    },
    {
        title: 'Analytics',
        description:
            'Track clicks, views, and engagement to optimize your link performance.',
        icon: BarChart3,
        color: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400',
    },
    {
        title: 'Secure & Fast',
        description:
            'Enterprise-grade security and lightning-fast loading speeds for the best experience.',
        icon: Shield,
        color: 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400',
    },
    {
        title: 'Quick Setup',
        description:
            'Create your page in minutes with our intuitive and easy-to-use interface.',
        icon: Zap,
        color: 'bg-amber-100 dark:bg-amber-900 text-amber-600 dark:text-amber-400',
    },
    {
        title: 'Advanced Options',
        description:
            'Schedule links, add forms, collect emails, and much more with powerful tools.',
        icon: Settings,
        color: 'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400',
    },
];

export const FeaturesSection: React.FC = () => {
    return (
        <section id='features' className='bg-white py-20 dark:bg-gray-900'>
            <div className='container mx-auto px-4 md:px-8'>
                <motion.div
                    className='mx-auto mb-16 max-w-3xl text-center'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className='mb-4 text-3xl font-bold dark:text-white md:text-4xl'>
                        All the Features You Need
                    </h2>
                    <p className='text-lg text-gray-600 dark:text-gray-300'>
                        Persona Link comes packed with everything you need to
                        create the perfect link page and grow your online
                        presence.
                    </p>
                </motion.div>

                <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className='rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <div
                                className={`${feature.color} mb-5 flex h-14 w-14 items-center justify-center rounded-xl`}
                            >
                                <feature.icon size={28} />
                            </div>
                            <h3 className='mb-3 text-xl font-bold dark:text-white'>
                                {feature.title}
                            </h3>
                            <p className='text-gray-600 dark:text-gray-300'>
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
