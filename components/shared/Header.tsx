'use client';

import { useState, useEffect, FC } from 'react';
import { Link, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ModeToggle } from './ModeToggle';

const Header: FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-white py-3 shadow-md dark:bg-gray-900'
                    : 'bg-transparent py-5'
            }`}
        >
            <div className='container mx-auto px-4 md:px-8'>
                <div className='flex items-center justify-between'>
                    <motion.div
                        className='flex items-center'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link className='h-8 w-8 text-purple-600' />
                        <span className='bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-2xl font-bold text-transparent'>
                            Persona Link
                        </span>
                    </motion.div>

                    <nav className='hidden items-center space-x-8 md:flex'>
                        <motion.a
                            href='#features'
                            className='font-medium text-gray-700 transition-colors hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400'
                            whileHover={{ y: -2 }}
                            whileTap={{ y: 0 }}
                        >
                            Features
                        </motion.a>
                        <motion.a
                            href='#demo'
                            className='font-medium text-gray-700 transition-colors hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400'
                            whileHover={{ y: -2 }}
                            whileTap={{ y: 0 }}
                        >
                            Demo
                        </motion.a>
                        <motion.a
                            href='#pricing'
                            className='font-medium text-gray-700 transition-colors hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400'
                            whileHover={{ y: -2 }}
                            whileTap={{ y: 0 }}
                        >
                            Pricing
                        </motion.a>
                        <motion.a
                            href='#faq'
                            className='font-medium text-gray-700 transition-colors hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400'
                            whileHover={{ y: -2 }}
                            whileTap={{ y: 0 }}
                        >
                            FAQ
                        </motion.a>
                        <ModeToggle />
                        <motion.button
                            className='rounded-full bg-purple-600 px-6 py-2 font-medium text-white transition-colors hover:bg-purple-700'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Sign Up Free
                        </motion.button>
                    </nav>

                    <div className='flex items-center space-x-4 md:hidden'>
                        <ModeToggle />
                        <motion.button
                            className='text-gray-700 dark:text-gray-300'
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </motion.button>
                    </div>
                </div>

                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.nav
                            className='flex flex-col space-y-4 pb-2 pt-4 md:hidden'
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{
                                type: 'spring',
                                stiffness: 200,
                                damping: 20,
                            }}
                        >
                            <motion.a
                                href='#features'
                                className='py-2 font-medium text-gray-700 transition-colors hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400'
                                onClick={() => setIsMenuOpen(false)}
                                whileHover={{ x: 10 }}
                            >
                                Features
                            </motion.a>
                            <motion.a
                                href='#demo'
                                className='py-2 font-medium text-gray-700 transition-colors hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400'
                                onClick={() => setIsMenuOpen(false)}
                                whileHover={{ x: 10 }}
                            >
                                Demo
                            </motion.a>
                            <motion.a
                                href='#pricing'
                                className='py-2 font-medium text-gray-700 transition-colors hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400'
                                onClick={() => setIsMenuOpen(false)}
                                whileHover={{ x: 10 }}
                            >
                                Pricing
                            </motion.a>
                            <motion.a
                                href='#faq'
                                className='py-2 font-medium text-gray-700 transition-colors hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400'
                                onClick={() => setIsMenuOpen(false)}
                                whileHover={{ x: 10 }}
                            >
                                FAQ
                            </motion.a>
                            <motion.button
                                className='w-full rounded-full bg-purple-600 px-6 py-2 font-medium text-white transition-colors hover:bg-purple-700'
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Sign Up Free
                            </motion.button>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
};

export default Header;
