"use client"

import{ useState, useEffect, FC } from 'react';
import { Link, Menu, X} from 'lucide-react';
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
      transition={{ type: "spring", stiffness: 100 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white dark:bg-gray-900 shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Persona Link
            </span>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            <motion.a 
              href="#features" 
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              Features
            </motion.a>
            <motion.a 
              href="#demo" 
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              Demo
            </motion.a>
            <motion.a 
              href="#pricing" 
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              Pricing
            </motion.a>
            <motion.a 
              href="#faq" 
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              FAQ
            </motion.a>
            <ModeToggle />
            <motion.button 
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign Up Free
            </motion.button>
          </nav>

          <div className="md:hidden flex items-center space-x-4">
            <ModeToggle />
            <motion.button 
              className="text-gray-700 dark:text-gray-300" 
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
              className="md:hidden pt-4 pb-2 flex flex-col space-y-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <motion.a 
                href="#features" 
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
                whileHover={{ x: 10 }}
              >
                Features
              </motion.a>
              <motion.a 
                href="#demo" 
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
                whileHover={{ x: 10 }}
              >
                Demo
              </motion.a>
              <motion.a 
                href="#pricing" 
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
                whileHover={{ x: 10 }}
              >
                Pricing
              </motion.a>
              <motion.a 
                href="#faq" 
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
                whileHover={{ x: 10 }}
              >
                FAQ
              </motion.a>
              <motion.button 
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-medium transition-colors w-full"
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