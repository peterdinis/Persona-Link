'use client';

import React from 'react';
import { Link, Twitter, Instagram, Youtube, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
    return (
        <footer className='bg-gray-900 pb-8 pt-16 text-white'>
            <div className='container mx-auto px-4 md:px-8'>
                <div className='mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.div
                            className='mb-4 flex items-center'
                            whileHover={{ scale: 1.05 }}
                        >
                            <Link className='mr-2 h-8 w-8 text-purple-400' />
                            <span className='text-2xl font-bold'>
                                Persona Link
                            </span>
                        </motion.div>
                        <p className='mb-4 text-gray-400'>
                            The all-in-one platform for creators to share
                            everything they do in one simple link.
                        </p>
                        <div className='flex space-x-4'>
                            {[Twitter, Instagram, Youtube, Facebook].map(
                                (Icon, index) => (
                                    <motion.a
                                        key={index}
                                        href='#'
                                        className='text-gray-400 transition-colors hover:text-white'
                                        whileHover={{ scale: 1.2, rotate: 5 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Icon size={20} />
                                    </motion.a>
                                ),
                            )}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h4 className='mb-4 text-lg font-bold'>Product</h4>
                        <ul className='space-y-2'>
                            {[
                                'Features',
                                'Pricing',
                                'Examples',
                                'Case Studies',
                                'Integrations',
                            ].map((item, index) => (
                                <motion.li key={index} whileHover={{ x: 5 }}>
                                    <a
                                        href='#'
                                        className='text-gray-400 transition-colors hover:text-white'
                                    >
                                        {item}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h4 className='mb-4 text-lg font-bold'>Resources</h4>
                        <ul className='space-y-2'>
                            {[
                                'Blog',
                                'Help Center',
                                'Tutorials',
                                'API Docs',
                                'Community',
                            ].map((item, index) => (
                                <motion.li key={index} whileHover={{ x: 5 }}>
                                    <a
                                        href='#'
                                        className='text-gray-400 transition-colors hover:text-white'
                                    >
                                        {item}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h4 className='mb-4 text-lg font-bold'>Company</h4>
                        <ul className='space-y-2'>
                            {[
                                'About Us',
                                'Careers',
                                'Press',
                                'Contact',
                                'Partners',
                            ].map((item, index) => (
                                <motion.li key={index} whileHover={{ x: 5 }}>
                                    <a
                                        href='#'
                                        className='text-gray-400 transition-colors hover:text-white'
                                    >
                                        {item}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                <motion.div
                    className='flex flex-col items-center justify-between border-t border-gray-800 pt-8 md:flex-row'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <p className='mb-4 text-sm text-gray-400 md:mb-0'>
                        © {new Date().getFullYear()} Persona Link. All rights
                        reserved.
                    </p>
                    <div className='flex space-x-6'>
                        {[
                            'Privacy Policy',
                            'Terms of Service',
                            'Cookie Policy',
                        ].map((item, index) => (
                            <motion.a
                                key={index}
                                href='#'
                                className='text-sm text-gray-400 transition-colors hover:text-white'
                                whileHover={{ y: -2 }}
                            >
                                {item}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};
