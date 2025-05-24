"use client"

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
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">Account Settings</h2>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bell className="text-purple-600 dark:text-purple-400" />
              <div>
                <h3 className="font-medium dark:text-white">Email Notifications</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Receive updates about your account</p>
              </div>
            </div>
            <motion.button
              className={`relative w-12 h-6 rounded-full transition-colors ${
                settings.emailNotifications ? 'bg-purple-600' : 'bg-gray-300 dark:bg-gray-600'
              }`}
              onClick={() => toggleSetting('emailNotifications')}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute w-5 h-5 bg-white rounded-full top-0.5 left-0.5"
                animate={{ x: settings.emailNotifications ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </motion.button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Globe className="text-purple-600 dark:text-purple-400" />
              <div>
                <h3 className="font-medium dark:text-white">Browser Notifications</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Get real-time updates in your browser</p>
              </div>
            </div>
            <motion.button
              className={`relative w-12 h-6 rounded-full transition-colors ${
                settings.browserNotifications ? 'bg-purple-600' : 'bg-gray-300 dark:bg-gray-600'
              }`}
              onClick={() => toggleSetting('browserNotifications')}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute w-5 h-5 bg-white rounded-full top-0.5 left-0.5"
                animate={{ x: settings.browserNotifications ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </motion.button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Lock className="text-purple-600 dark:text-purple-400" />
              <div>
                <h3 className="font-medium dark:text-white">Private Profile</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Make your profile visible to only you</p>
              </div>
            </div>
            <motion.button
              className={`relative w-12 h-6 rounded-full transition-colors ${
                settings.privateProfile ? 'bg-purple-600' : 'bg-gray-300 dark:bg-gray-600'
              }`}
              onClick={() => toggleSetting('privateProfile')}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute w-5 h-5 bg-white rounded-full top-0.5 left-0.5"
                animate={{ x: settings.privateProfile ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </motion.button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Eye className="text-purple-600 dark:text-purple-400" />
              <div>
                <h3 className="font-medium dark:text-white">Analytics Tracking</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Track visits and interactions</p>
              </div>
            </div>
            <motion.button
              className={`relative w-12 h-6 rounded-full transition-colors ${
                settings.analyticsEnabled ? 'bg-purple-600' : 'bg-gray-300 dark:bg-gray-600'
              }`}
              onClick={() => toggleSetting('analyticsEnabled')}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute w-5 h-5 bg-white rounded-full top-0.5 left-0.5"
                animate={{ x: settings.analyticsEnabled ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </motion.button>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold dark:text-white">Your Public URL</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Share your LinkFolio with others</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            <Share2 size={18} />
            <span>Share</span>
          </button>
        </div>
        
        <div className="flex items-center gap-2">
          <input
            type="text"
            value="linkfolio.com/yourusername"
            readOnly
            className="flex-1 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg px-4 py-2 text-gray-700 dark:text-gray-300"
          />
          <button className="px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            Copy
          </button>
        </div>
      </div>
    </div>
  );
};