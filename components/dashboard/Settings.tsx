'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Globe, Lock, Eye, Share2 } from 'lucide-react';

export const Settings: React.FC = () => {
    const [settings, setSettings] = useState({
        emailNotifications: true,
        browserNotifications: false,
        privateProfile: false,
        analyticsEnabled: true,
    });

    const toggleSetting = (key: keyof typeof settings) => {
        setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className='space-y-8'>
            <div className='rounded-lg bg-white p-6 dark:bg-gray-800'>
                <h2 className='mb-6 text-2xl font-bold dark:text-white'>
                    Account Settings
                </h2>

                <div className='space-y-6'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-3'>
                            <Bell className='text-purple-600 dark:text-purple-400' />
                            <div>
                                <h3 className='font-medium dark:text-white'>
                                    Email Notifications
                                </h3>
                                <p className='text-sm text-gray-500 dark:text-gray-400'>
                                    Receive updates about your account
                                </p>
                            </div>
                        </div>
                        <motion.button
                            className={`relative h-6 w-12 rounded-full transition-colors ${
                                settings.emailNotifications
                                    ? 'bg-purple-600'
                                    : 'bg-gray-300 dark:bg-gray-600'
                            }`}
                            onClick={() => toggleSetting('emailNotifications')}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                className='absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white'
                                animate={{
                                    x: settings.emailNotifications ? 24 : 0,
                                }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 500,
                                    damping: 30,
                                }}
                            />
                        </motion.button>
                    </div>

                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-3'>
                            <Globe className='text-purple-600 dark:text-purple-400' />
                            <div>
                                <h3 className='font-medium dark:text-white'>
                                    Browser Notifications
                                </h3>
                                <p className='text-sm text-gray-500 dark:text-gray-400'>
                                    Get real-time updates in your browser
                                </p>
                            </div>
                        </div>
                        <motion.button
                            className={`relative h-6 w-12 rounded-full transition-colors ${
                                settings.browserNotifications
                                    ? 'bg-purple-600'
                                    : 'bg-gray-300 dark:bg-gray-600'
                            }`}
                            onClick={() =>
                                toggleSetting('browserNotifications')
                            }
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                className='absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white'
                                animate={{
                                    x: settings.browserNotifications ? 24 : 0,
                                }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 500,
                                    damping: 30,
                                }}
                            />
                        </motion.button>
                    </div>

                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-3'>
                            <Lock className='text-purple-600 dark:text-purple-400' />
                            <div>
                                <h3 className='font-medium dark:text-white'>
                                    Private Profile
                                </h3>
                                <p className='text-sm text-gray-500 dark:text-gray-400'>
                                    Make your profile visible to only you
                                </p>
                            </div>
                        </div>
                        <motion.button
                            className={`relative h-6 w-12 rounded-full transition-colors ${
                                settings.privateProfile
                                    ? 'bg-purple-600'
                                    : 'bg-gray-300 dark:bg-gray-600'
                            }`}
                            onClick={() => toggleSetting('privateProfile')}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                className='absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white'
                                animate={{
                                    x: settings.privateProfile ? 24 : 0,
                                }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 500,
                                    damping: 30,
                                }}
                            />
                        </motion.button>
                    </div>

                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-3'>
                            <Eye className='text-purple-600 dark:text-purple-400' />
                            <div>
                                <h3 className='font-medium dark:text-white'>
                                    Analytics Tracking
                                </h3>
                                <p className='text-sm text-gray-500 dark:text-gray-400'>
                                    Track visits and interactions
                                </p>
                            </div>
                        </div>
                        <motion.button
                            className={`relative h-6 w-12 rounded-full transition-colors ${
                                settings.analyticsEnabled
                                    ? 'bg-purple-600'
                                    : 'bg-gray-300 dark:bg-gray-600'
                            }`}
                            onClick={() => toggleSetting('analyticsEnabled')}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                className='absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white'
                                animate={{
                                    x: settings.analyticsEnabled ? 24 : 0,
                                }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 500,
                                    damping: 30,
                                }}
                            />
                        </motion.button>
                    </div>
                </div>
            </div>

            <div className='rounded-lg bg-white p-6 dark:bg-gray-800'>
                <div className='mb-6 flex items-center justify-between'>
                    <div>
                        <h3 className='text-xl font-bold dark:text-white'>
                            Your Public URL
                        </h3>
                        <p className='text-sm text-gray-500 dark:text-gray-400'>
                            Share your LinkFolio with others
                        </p>
                    </div>
                    <button className='flex items-center gap-2 rounded-lg bg-purple-600 px-4 py-2 text-white transition-colors hover:bg-purple-700'>
                        <Share2 size={18} />
                        <span>Share</span>
                    </button>
                </div>

                <div className='flex items-center gap-2'>
                    <input
                        type='text'
                        value='linkfolio.com/yourusername'
                        readOnly
                        className='flex-1 rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-gray-700 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300'
                    />
                    <button className='rounded-lg border border-gray-200 px-4 py-2 text-gray-600 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700'>
                        Copy
                    </button>
                </div>
            </div>
        </div>
    );
};
