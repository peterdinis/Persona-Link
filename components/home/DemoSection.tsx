'use client';

import React, { useState } from 'react';
import { Instagram, Twitter, Youtube, Mail, Globe, Music } from 'lucide-react';

type Theme = 'light' | 'dark' | 'gradient';

export const DemoSection: React.FC = () => {
    const [theme, setTheme] = useState<Theme>('light');

    const getThemeStyles = () => {
        switch (theme) {
            case 'dark':
                return 'bg-gray-900 text-white';
            case 'gradient':
                return 'bg-gradient-to-b from-purple-600 to-blue-600 text-white';
            default:
                return 'bg-white text-gray-900';
        }
    };

    const getLinkStyles = () => {
        switch (theme) {
            case 'dark':
                return 'bg-gray-800 hover:bg-gray-700';
            case 'gradient':
                return 'bg-white/20 hover:bg-white/30 text-white';
            default:
                return 'bg-gray-100 hover:bg-gray-200 text-gray-800';
        }
    };

    return (
        <section
            id='demo'
            className='bg-gray-50 bg-gradient-to-b from-white to-gray-50 py-24 transition-colors duration-300 dark:from-gray-900 dark:to-gray-800 dark:text-white'
        >
            <div className='container mx-auto px-4 md:px-8'>
                <div className='mx-auto mb-16 max-w-3xl text-center'>
                    <h2 className='mb-4 text-3xl font-bold md:text-4xl'>
                        See Persona Link in Action
                    </h2>
                    <p className='text-lg text-gray-600'>
                        Customize your page with different themes and styles.
                        Here's what your Persona Link could look like:
                    </p>
                </div>

                <div className='flex flex-col items-center gap-12 lg:flex-row'>
                    <div className='lg:w-1/2'>
                        <div className='mb-8 flex justify-center space-x-4'>
                            <button
                                onClick={() => setTheme('light')}
                                className={`rounded-full px-4 py-2 ${theme === 'light' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                            >
                                Light
                            </button>
                            <button
                                onClick={() => setTheme('dark')}
                                className={`rounded-full px-4 py-2 ${theme === 'dark' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                            >
                                Dark
                            </button>
                            <button
                                onClick={() => setTheme('gradient')}
                                className={`rounded-full px-4 py-2 ${theme === 'gradient' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                            >
                                Gradient
                            </button>
                        </div>

                        <p className='mb-8 text-lg text-gray-600'>
                            Choose from multiple themes, add animations, and
                            customize every aspect of your page. Make it
                            uniquely yours with just a few clicks.
                        </p>

                        <div className='space-y-4'>
                            <div className='flex items-center'>
                                <div className='mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-100'>
                                    <span className='text-xl text-green-600'>
                                        ✓
                                    </span>
                                </div>
                                <span className='text-gray-700'>
                                    Easy drag-and-drop customization
                                </span>
                            </div>
                            <div className='flex items-center'>
                                <div className='mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-100'>
                                    <span className='text-xl text-green-600'>
                                        ✓
                                    </span>
                                </div>
                                <span className='text-gray-700'>
                                    Unlimited theme options
                                </span>
                            </div>
                            <div className='flex items-center'>
                                <div className='mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-100'>
                                    <span className='text-xl text-green-600'>
                                        ✓
                                    </span>
                                </div>
                                <span className='text-gray-700'>
                                    Custom CSS for advanced users
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className='mx-auto max-w-sm lg:w-1/2'>
                        <div
                            className={`rounded-3xl p-6 shadow-lg ${getThemeStyles()} max-w-sm transition-colors duration-300`}
                        >
                            <div className='mb-6 flex flex-col items-center'>
                                <div className='mb-4 flex h-24 w-24 items-center justify-center rounded-full border-4 border-white/80 bg-purple-200 shadow-inner'>
                                    <span className='text-2xl font-bold text-purple-700'>
                                        SG
                                    </span>
                                </div>
                                <h3 className='text-xl font-bold'>
                                    Sarah Greenfield
                                </h3>
                                <p
                                    className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-300'} text-sm`}
                                >
                                    Photographer & Digital Creator
                                </p>
                            </div>

                            <div className='space-y-3'>
                                <a
                                    href='#'
                                    className={`flex items-center rounded-xl p-3 ${getLinkStyles()} transition-colors`}
                                >
                                    <Instagram size={20} className='mr-3' />
                                    <span>Instagram</span>
                                </a>
                                <a
                                    href='#'
                                    className={`flex items-center rounded-xl p-3 ${getLinkStyles()} transition-colors`}
                                >
                                    <Twitter size={20} className='mr-3' />
                                    <span>Twitter</span>
                                </a>
                                <a
                                    href='#'
                                    className={`flex items-center rounded-xl p-3 ${getLinkStyles()} transition-colors`}
                                >
                                    <Youtube size={20} className='mr-3' />
                                    <span>YouTube Channel</span>
                                </a>
                                <a
                                    href='#'
                                    className={`flex items-center rounded-xl p-3 ${getLinkStyles()} transition-colors`}
                                >
                                    <Globe size={20} className='mr-3' />
                                    <span>My Portfolio</span>
                                </a>
                                <a
                                    href='#'
                                    className={`flex items-center rounded-xl p-3 ${getLinkStyles()} transition-colors`}
                                >
                                    <Music size={20} className='mr-3' />
                                    <span>Latest Album</span>
                                </a>
                                <a
                                    href='#'
                                    className={`flex items-center rounded-xl p-3 ${getLinkStyles()} transition-colors`}
                                >
                                    <Mail size={20} className='mr-3' />
                                    <span>Contact Me</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
