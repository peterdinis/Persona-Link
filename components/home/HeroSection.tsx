'use client';

import { FC } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection: FC = () => {
    return (
        <section className='relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40'>
            <div className='container mx-auto px-4 md:px-8'>
                <div className='grid grid-cols-1 items-center gap-12 lg:grid-cols-2'>
                    <div className='text-center lg:text-left'>
                        <motion.h1
                            className='mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className='block dark:text-white'>
                                One Link to
                            </span>
                            <span className='bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent'>
                                Share Everything
                            </span>
                        </motion.h1>
                        <motion.p
                            className='mx-auto mb-8 max-w-lg text-lg text-gray-600 dark:text-gray-300 md:text-xl lg:mx-0'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Create a beautiful, customizable link page that
                            brings together all your important content, social
                            profiles, and offers in one place.
                        </motion.p>
                        <motion.div
                            className='flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 lg:justify-start'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <motion.button
                                className='flex transform items-center justify-center rounded-full bg-purple-600 px-8 py-3 font-medium text-white shadow-lg transition-colors hover:-translate-y-1 hover:bg-purple-700 hover:shadow-xl'
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get Started Free
                                <ArrowRight className='ml-2 h-5 w-5' />
                            </motion.button>
                            <motion.button
                                className='rounded-full border border-gray-300 bg-white px-8 py-3 font-medium text-gray-800 transition-colors hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700'
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                See Examples
                            </motion.button>
                        </motion.div>
                    </div>

                    <motion.div
                        className='relative mx-auto max-w-md lg:mx-0'
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className='z-10 translate-x-2 translate-y-4 rotate-3 scale-[0.97] transform rounded-3xl bg-white p-4 opacity-70 shadow-2xl dark:bg-gray-800'>
                            <div className='h-[500px] rounded-2xl bg-gray-100 dark:bg-gray-700'></div>
                        </div>
                        <div className='absolute left-0 right-0 top-0 z-20 translate-x-1 translate-y-2 -rotate-2 scale-[0.97] transform rounded-3xl bg-white p-4 opacity-80 shadow-2xl dark:bg-gray-800'>
                            <div className='h-[500px] rounded-2xl bg-gray-100 dark:bg-gray-700'></div>
                        </div>
                        <div className='absolute left-0 right-0 top-0 z-30 rounded-3xl bg-white p-4 shadow-2xl dark:bg-gray-800'>
                            <div className='h-[500px] overflow-hidden rounded-2xl bg-gradient-to-b from-purple-100 to-blue-50 dark:from-purple-900 dark:to-blue-900'>
                                <div className='p-4'>
                                    <div className='mb-6 flex items-center justify-center pt-4'>
                                        <div className='mb-2 flex h-20 w-20 items-center justify-center rounded-full bg-purple-600'>
                                            <span className='text-xl font-bold text-white'>
                                                JP
                                            </span>
                                        </div>
                                    </div>
                                    <h3 className='mb-1 text-center text-xl font-bold dark:text-white'>
                                        Jane Peterson
                                    </h3>
                                    <p className='mb-6 text-center text-gray-600 dark:text-gray-300'>
                                        Digital Creator & Designer
                                    </p>

                                    {[1, 2, 3, 4].map((item) => (
                                        <motion.div
                                            key={item}
                                            className='mb-3 flex cursor-pointer items-center rounded-xl bg-white p-3 shadow-sm transition-transform hover:scale-[1.02] dark:bg-gray-800'
                                            whileHover={{ scale: 1.02, x: 10 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <div className='mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900'>
                                                <div className='h-5 w-5 rounded-md bg-purple-500'></div>
                                            </div>
                                            <span className='font-medium dark:text-white'>
                                                Link {item}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className='absolute -right-24 -top-24 h-96 w-96 rounded-full bg-purple-200 opacity-20 blur-3xl dark:bg-purple-900'></div>
            <div className='absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-blue-200 opacity-20 blur-3xl dark:bg-blue-900'></div>
        </section>
    );
};

export default HeroSection;
