'use client';

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
    {
        title: 'Remove Persona Link Branding',
        free: false,
        pro: true,
        business: true,
    },
    { title: 'Advanced Analytics', free: false, pro: true, business: true },
    { title: 'Schedule Links', free: false, pro: true, business: true },
    {
        title: 'Form & Email Collection',
        free: false,
        pro: false,
        business: true,
    },
    { title: 'Team Collaboration', free: false, pro: false, business: true },
    { title: 'Priority Support', free: false, pro: false, business: true },
];

export const PricingSection: React.FC = () => {
    return (
        <section id='pricing' className='bg-white py-24 dark:bg-gray-900'>
            <div className='container mx-auto px-4 md:px-8'>
                <motion.div
                    className='mx-auto mb-16 max-w-3xl text-center'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className='mb-4 text-3xl font-bold dark:text-white md:text-4xl'>
                        Simple, Transparent Pricing
                    </h2>
                    <p className='text-lg text-gray-600 dark:text-gray-300'>
                        Choose the plan that's right for you. All plans include
                        a 14-day free trial.
                    </p>
                </motion.div>

                <div className='mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3'>
                    {/* Free Plan */}
                    <motion.div
                        className='overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ y: -5 }}
                    >
                        <div className='border-b p-6 dark:border-gray-700'>
                            <h3 className='mb-2 text-xl font-bold dark:text-white'>
                                Free
                            </h3>
                            <p className='mb-4 text-gray-600 dark:text-gray-400'>
                                Perfect for getting started
                            </p>
                            <div className='mb-4 flex items-baseline'>
                                <span className='text-3xl font-bold dark:text-white'>
                                    $0
                                </span>
                                <span className='ml-1 text-gray-600 dark:text-gray-400'>
                                    /month
                                </span>
                            </div>
                            <motion.button
                                className='w-full rounded-lg border border-purple-600 py-3 font-medium text-purple-600 transition-colors hover:bg-purple-50 dark:text-purple-400 dark:hover:bg-purple-900/20'
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Get Started
                            </motion.button>
                        </div>
                        <div className='p-6'>
                            <ul className='space-y-3'>
                                {features.map((feature, index) => (
                                    <li
                                        key={index}
                                        className='flex items-center'
                                    >
                                        {feature.free ? (
                                            <Check
                                                size={18}
                                                className='mr-3 text-green-500'
                                            />
                                        ) : (
                                            <X
                                                size={18}
                                                className='mr-3 text-gray-400'
                                            />
                                        )}
                                        <span
                                            className={
                                                feature.free
                                                    ? 'text-gray-700 dark:text-gray-300'
                                                    : 'text-gray-400 dark:text-gray-500'
                                            }
                                        >
                                            {feature.title}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Pro Plan */}
                    <motion.div
                        className='relative z-10 scale-105 transform overflow-hidden rounded-2xl border-2 border-purple-600 bg-white shadow-md dark:bg-gray-800'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        whileHover={{ y: -5 }}
                    >
                        <div className='absolute right-0 top-0 rounded-bl-lg bg-purple-600 px-4 py-1 text-sm font-bold text-white'>
                            Popular
                        </div>
                        <div className='border-b p-6 dark:border-gray-700'>
                            <h3 className='mb-2 text-xl font-bold dark:text-white'>
                                Pro
                            </h3>
                            <p className='mb-4 text-gray-600 dark:text-gray-400'>
                                For creators and influencers
                            </p>
                            <div className='mb-4 flex items-baseline'>
                                <span className='text-3xl font-bold dark:text-white'>
                                    $9
                                </span>
                                <span className='ml-1 text-gray-600 dark:text-gray-400'>
                                    /month
                                </span>
                            </div>
                            <motion.button
                                className='w-full rounded-lg bg-purple-600 py-3 font-medium text-white transition-colors hover:bg-purple-700'
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Start 14-day Trial
                            </motion.button>
                        </div>
                        <div className='p-6'>
                            <ul className='space-y-3'>
                                {features.map((feature, index) => (
                                    <li
                                        key={index}
                                        className='flex items-center'
                                    >
                                        {feature.pro ? (
                                            <Check
                                                size={18}
                                                className='mr-3 text-green-500'
                                            />
                                        ) : (
                                            <X
                                                size={18}
                                                className='mr-3 text-gray-400'
                                            />
                                        )}
                                        <span
                                            className={
                                                feature.pro
                                                    ? 'text-gray-700 dark:text-gray-300'
                                                    : 'text-gray-400 dark:text-gray-500'
                                            }
                                        >
                                            {feature.title}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Business Plan */}
                    <motion.div
                        className='overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ y: -5 }}
                    >
                        <div className='border-b p-6 dark:border-gray-700'>
                            <h3 className='mb-2 text-xl font-bold dark:text-white'>
                                Business
                            </h3>
                            <p className='mb-4 text-gray-600 dark:text-gray-400'>
                                For teams and businesses
                            </p>
                            <div className='mb-4 flex items-baseline'>
                                <span className='text-3xl font-bold dark:text-white'>
                                    $29
                                </span>
                                <span className='ml-1 text-gray-600 dark:text-gray-400'>
                                    /month
                                </span>
                            </div>
                            <motion.button
                                className='w-full rounded-lg border border-purple-600 py-3 font-medium text-purple-600 transition-colors hover:bg-purple-50 dark:text-purple-400 dark:hover:bg-purple-900/20'
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Start 14-day Trial
                            </motion.button>
                        </div>
                        <div className='p-6'>
                            <ul className='space-y-3'>
                                {features.map((feature, index) => (
                                    <li
                                        key={index}
                                        className='flex items-center'
                                    >
                                        {feature.business ? (
                                            <Check
                                                size={18}
                                                className='mr-3 text-green-500'
                                            />
                                        ) : (
                                            <X
                                                size={18}
                                                className='mr-3 text-gray-400'
                                            />
                                        )}
                                        <span
                                            className={
                                                feature.business
                                                    ? 'text-gray-700 dark:text-gray-300'
                                                    : 'text-gray-400 dark:text-gray-500'
                                            }
                                        >
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
