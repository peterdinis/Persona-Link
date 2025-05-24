'use client';

import React, { useState } from 'react';
import {
    Link2,
    Users,
    ChevronLeft,
    ChevronRight,
    Settings,
    BarChart2,
    Layout,
    Bell,
    HelpCircle,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface DashboardSidebarProps {
    activeView:
        | 'links'
        | 'personas'
        | 'analytics'
        | 'appearance'
        | 'notifications'
        | 'settings';
    onChangeView: (
        view:
            | 'links'
            | 'personas'
            | 'analytics'
            | 'appearance'
            | 'notifications'
            | 'settings',
    ) => void;
    onCreateLink: () => void;
    onCreatePersona: () => void;
}

export const DashboardSidebar: React.FC<DashboardSidebarProps> = ({
    activeView,
    onChangeView,
    onCreateLink,
    onCreatePersona,
}) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const menuItems = [
        { id: 'links', label: 'Links', icon: Link2 },
        { id: 'personas', label: 'Personas', icon: Users },
        { id: 'analytics', label: 'Analytics', icon: BarChart2 },
        { id: 'appearance', label: 'Appearance', icon: Layout },
        { id: 'notifications', label: 'Notifications', icon: Bell },
        { id: 'settings', label: 'Settings', icon: Settings },
    ];

    return (
        <motion.aside
            initial={false}
            animate={{ width: isCollapsed ? '80px' : '280px' }}
            className={cn(
                'relative h-[calc(100vh-64px)] border-r border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800',
                'transition-all duration-300 ease-in-out',
            )}
        >
            <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className='absolute -right-3 top-6 rounded-full border border-gray-200 bg-white p-1.5 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'
            >
                {isCollapsed ? (
                    <ChevronRight size={16} />
                ) : (
                    <ChevronLeft size={16} />
                )}
            </button>

            <div className='p-4'>
                <nav className='space-y-2'>
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => onChangeView(item.id as any)}
                            className={cn(
                                'flex w-full items-center gap-3 rounded-lg px-4 py-2.5 transition-colors',
                                activeView === item.id
                                    ? 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400'
                                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700',
                            )}
                        >
                            <item.icon size={20} />
                            <AnimatePresence>
                                {!isCollapsed && (
                                    <motion.span
                                        initial={{ opacity: 0, width: 0 }}
                                        animate={{ opacity: 1, width: 'auto' }}
                                        exit={{ opacity: 0, width: 0 }}
                                        className='whitespace-nowrap'
                                    >
                                        {item.label}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </button>
                    ))}
                </nav>

                <div className='mt-8 space-y-3'>
                    {!isCollapsed && (
                        <>
                            <button
                                onClick={onCreateLink}
                                className='flex w-full items-center justify-center gap-2 rounded-lg bg-purple-600 px-4 py-2 text-white transition-colors hover:bg-purple-700'
                            >
                                <Link2 size={18} />
                                <span>Create New Link</span>
                            </button>
                            <button
                                onClick={onCreatePersona}
                                className='flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 transition-colors hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600'
                            >
                                <Users size={18} />
                                <span>Create New Persona</span>
                            </button>
                        </>
                    )}
                </div>

                {!isCollapsed && (
                    <div className='absolute bottom-4 left-4 right-4'>
                        <div className='rounded-lg bg-purple-50 p-4 dark:bg-purple-900/30'>
                            <div className='mb-3 flex items-center gap-3'>
                                <HelpCircle
                                    size={20}
                                    className='text-purple-600 dark:text-purple-400'
                                />
                                <span className='font-medium text-purple-600 dark:text-purple-400'>
                                    Need Help?
                                </span>
                            </div>
                            <p className='text-sm text-purple-700 dark:text-purple-300'>
                                Check our documentation or contact support for
                                assistance.
                            </p>
                            <button className='mt-3 text-sm text-purple-600 hover:underline dark:text-purple-400'>
                                View Documentation
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </motion.aside>
    );
};
