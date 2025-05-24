"use client"

import React, { useState } from 'react';
import { Instagram, Twitter, Youtube, Mail, Globe, Music } from 'lucide-react';

type Theme = 'light' | 'dark' | 'gradient';

export const DemoSection: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('light');

  const getThemeStyles = () => {
    switch(theme) {
      case 'dark':
        return 'bg-gray-900 text-white';
      case 'gradient':
        return 'bg-gradient-to-b from-purple-600 to-blue-600 text-white';
      default:
        return 'bg-white text-gray-900';
    }
  };

  const getLinkStyles = () => {
    switch(theme) {
      case 'dark':
        return 'bg-gray-800 hover:bg-gray-700';
      case 'gradient':
        return 'bg-white/20 hover:bg-white/30 text-white';
      default:
        return 'bg-gray-100 hover:bg-gray-200 text-gray-800';
    }
  };

  return (
    <section id="demo" className="py-24 bg-gray-50 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See Persona Link in Action
          </h2>
          <p className="text-gray-600 text-lg">
            Customize your page with different themes and styles. Here's what your Persona Link could look like:
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="flex justify-center space-x-4 mb-8">
              <button 
                onClick={() => setTheme('light')}
                className={`px-4 py-2 rounded-full ${theme === 'light' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                Light
              </button>
              <button 
                onClick={() => setTheme('dark')}
                className={`px-4 py-2 rounded-full ${theme === 'dark' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                Dark
              </button>
              <button 
                onClick={() => setTheme('gradient')}
                className={`px-4 py-2 rounded-full ${theme === 'gradient' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                Gradient
              </button>
            </div>
            
            <p className="text-lg text-gray-600 mb-8">
              Choose from multiple themes, add animations, and customize every aspect of your page. Make it uniquely yours with just a few clicks.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <span className="text-green-600 text-xl">✓</span>
                </div>
                <span className="text-gray-700">Easy drag-and-drop customization</span>
              </div>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <span className="text-green-600 text-xl">✓</span>
                </div>
                <span className="text-gray-700">Unlimited theme options</span>
              </div>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <span className="text-green-600 text-xl">✓</span>
                </div>
                <span className="text-gray-700">Custom CSS for advanced users</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 max-w-sm mx-auto">
            <div className={`p-6 rounded-3xl shadow-lg ${getThemeStyles()} max-w-sm transition-colors duration-300`}>
              <div className="flex flex-col items-center mb-6">
                <div className="h-24 w-24 rounded-full bg-purple-200 border-4 border-white/80 shadow-inner flex items-center justify-center mb-4">
                  <span className="text-purple-700 text-2xl font-bold">SG</span>
                </div>
                <h3 className="text-xl font-bold">Sarah Greenfield</h3>
                <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-300'} text-sm`}>
                  Photographer & Digital Creator
                </p>
              </div>
              
              <div className="space-y-3">
                <a 
                  href="#" 
                  className={`flex items-center p-3 rounded-xl ${getLinkStyles()} transition-colors`}
                >
                  <Instagram size={20} className="mr-3" />
                  <span>Instagram</span>
                </a>
                <a 
                  href="#" 
                  className={`flex items-center p-3 rounded-xl ${getLinkStyles()} transition-colors`}
                >
                  <Twitter size={20} className="mr-3" />
                  <span>Twitter</span>
                </a>
                <a 
                  href="#" 
                  className={`flex items-center p-3 rounded-xl ${getLinkStyles()} transition-colors`}
                >
                  <Youtube size={20} className="mr-3" />
                  <span>YouTube Channel</span>
                </a>
                <a 
                  href="#" 
                  className={`flex items-center p-3 rounded-xl ${getLinkStyles()} transition-colors`}
                >
                  <Globe size={20} className="mr-3" />
                  <span>My Portfolio</span>
                </a>
                <a 
                  href="#" 
                  className={`flex items-center p-3 rounded-xl ${getLinkStyles()} transition-colors`}
                >
                  <Music size={20} className="mr-3" />
                  <span>Latest Album</span>
                </a>
                <a 
                  href="#" 
                  className={`flex items-center p-3 rounded-xl ${getLinkStyles()} transition-colors`}
                >
                  <Mail size={20} className="mr-3" />
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