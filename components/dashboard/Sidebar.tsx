"use client"

import React, { useState } from 'react';
import { Link2, Users, ChevronLeft, ChevronRight, Settings, BarChart2, Layout, Bell, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface DashboardSidebarProps {
  activeView: 'links' | 'personas' | 'analytics' | 'appearance' | 'notifications' | 'settings';
  onChangeView: (view: 'links' | 'personas' | 'analytics' | 'appearance' | 'notifications' | 'settings') => void;
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
        "bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 h-[calc(100vh-64px)] relative",
        "transition-all duration-300 ease-in-out"
      )}
    >
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full p-1.5 hover:bg-gray-50 dark:hover:bg-gray-700"
      >
        {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>

      <div className="p-4">
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onChangeView(item.id as any)}
              className={cn(
                'w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors',
                activeView === item.id
                  ? 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
              )}
            >
              <item.icon size={20} />
              <AnimatePresence>
                {!isCollapsed && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 0 }}
                    className="whitespace-nowrap"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          ))}
        </nav>

        <div className="mt-8 space-y-3">
          {!isCollapsed && (
            <>
              <button
                onClick={onCreateLink}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Link2 size={18} />
                <span>Create New Link</span>
              </button>
              <button
                onClick={onCreatePersona}
                className="w-full bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Users size={18} />
                <span>Create New Persona</span>
              </button>
            </>
          )}
        </div>

        {!isCollapsed && (
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-purple-50 dark:bg-purple-900/30 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <HelpCircle size={20} className="text-purple-600 dark:text-purple-400" />
                <span className="font-medium text-purple-600 dark:text-purple-400">Need Help?</span>
              </div>
              <p className="text-sm text-purple-700 dark:text-purple-300">
                Check our documentation or contact support for assistance.
              </p>
              <button className="mt-3 text-sm text-purple-600 dark:text-purple-400 hover:underline">
                View Documentation
              </button>
            </div>
          </div>
        )}
      </div>
    </motion.aside>
  );
};