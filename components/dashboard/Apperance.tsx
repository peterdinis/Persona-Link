'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Palette, Layout, Type, Image } from 'lucide-react';

export const Appearance: React.FC = () => {
    const [theme, setTheme] = useState('default');
    const [layout, setLayout] = useState('grid');
    const [font, setFont] = useState('inter');
    const [buttonStyle, setButtonStyle] = useState('rounded');

    const themes = [
        { id: 'default', name: 'Default', color: 'bg-purple-600' },
        { id: 'dark', name: 'Dark', color: 'bg-gray-900' },
        { id: 'light', name: 'Light', color: 'bg-gray-100' },
        {
            id: 'gradient',
            name: 'Gradient',
            color: 'bg-gradient-to-r from-purple-600 to-blue-500',
        },
    ];

    const layouts = [
        { id: 'grid', name: 'Grid' },
        { id: 'list', name: 'List' },
        { id: 'minimal', name: 'Minimal' },
    ];

    const fonts = [
        { id: 'inter', name: 'Inter' },
        { id: 'roboto', name: 'Roboto' },
        { id: 'poppins', name: 'Poppins' },
    ];

    const buttonStyles = [
        { id: 'rounded', name: 'Rounded' },
        { id: 'square', name: 'Square' },
        { id: 'pill', name: 'Pill' },
    ];

    return (
        <div className='space-y-8'>
            <div className='rounded-lg bg-white p-6 dark:bg-gray-800'>
                <div className='mb-6 flex items-center gap-3'>
                    <Palette
                        className='text-purple-600 dark:text-purple-400'
                        size={24}
                    />
                    <h2 className='text-2xl font-bold dark:text-white'>
                        Theme
                    </h2>
                </div>

                <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
                    {themes.map((t) => (
                        <motion.button
                            key={t.id}
                            className={`rounded-lg border-2 p-4 transition-colors ${
                                theme === t.id
                                    ? 'border-purple-600 dark:border-purple-400'
                                    : 'border-gray-200 dark:border-gray-700'
                            }`}
                            onClick={() => setTheme(t.id)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div
                                className={`h-20 rounded-md ${t.color} mb-2`}
                            />
                            <span className='text-sm font-medium dark:text-white'>
                                {t.name}
                            </span>
                        </motion.button>
                    ))}
                </div>
            </div>

            <div className='rounded-lg bg-white p-6 dark:bg-gray-800'>
                <div className='mb-6 flex items-center gap-3'>
                    <Layout
                        className='text-purple-600 dark:text-purple-400'
                        size={24}
                    />
                    <h2 className='text-2xl font-bold dark:text-white'>
                        Layout
                    </h2>
                </div>

                <div className='grid grid-cols-3 gap-4'>
                    {layouts.map((l) => (
                        <motion.button
                            key={l.id}
                            className={`rounded-lg border-2 p-4 transition-colors ${
                                layout === l.id
                                    ? 'border-purple-600 dark:border-purple-400'
                                    : 'border-gray-200 dark:border-gray-700'
                            }`}
                            onClick={() => setLayout(l.id)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className='text-sm font-medium dark:text-white'>
                                {l.name}
                            </span>
                        </motion.button>
                    ))}
                </div>
            </div>

            <div className='rounded-lg bg-white p-6 dark:bg-gray-800'>
                <div className='mb-6 flex items-center gap-3'>
                    <Type
                        className='text-purple-600 dark:text-purple-400'
                        size={24}
                    />
                    <h2 className='text-2xl font-bold dark:text-white'>
                        Typography
                    </h2>
                </div>

                <div className='grid grid-cols-3 gap-4'>
                    {fonts.map((f) => (
                        <motion.button
                            key={f.id}
                            className={`rounded-lg border-2 p-4 transition-colors ${
                                font === f.id
                                    ? 'border-purple-600 dark:border-purple-400'
                                    : 'border-gray-200 dark:border-gray-700'
                            }`}
                            onClick={() => setFont(f.id)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className='text-sm font-medium dark:text-white'>
                                {f.name}
                            </span>
                        </motion.button>
                    ))}
                </div>
            </div>

            <div className='rounded-lg bg-white p-6 dark:bg-gray-800'>
                <div className='mb-6 flex items-center gap-3'>
                    <Image
                        className='text-purple-600 dark:text-purple-400'
                        size={24}
                    />
                    <h2 className='text-2xl font-bold dark:text-white'>
                        Button Style
                    </h2>
                </div>

                <div className='grid grid-cols-3 gap-4'>
                    {buttonStyles.map((b) => (
                        <motion.button
                            key={b.id}
                            className={`rounded-lg border-2 p-4 transition-colors ${
                                buttonStyle === b.id
                                    ? 'border-purple-600 dark:border-purple-400'
                                    : 'border-gray-200 dark:border-gray-700'
                            }`}
                            onClick={() => setButtonStyle(b.id)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className='text-sm font-medium dark:text-white'>
                                {b.name}
                            </span>
                        </motion.button>
                    ))}
                </div>
            </div>

            <div className='flex justify-end'>
                <motion.button
                    className='rounded-lg bg-purple-600 px-6 py-2 text-white transition-colors hover:bg-purple-700'
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    Save Changes
                </motion.button>
            </div>
        </div>
    );
};
