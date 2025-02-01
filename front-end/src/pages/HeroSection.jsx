import React from 'react';
import {
  Laptop,
  Cpu,
  Gamepad,
  Shield,
  Headphones,
  Watch,
  Smartphone,
  TabletSmartphone
} from 'lucide-react';
import { motion } from "framer-motion";

const CategoryCard = ({ icon: Icon, title, description, comingSoon = false, releaseDate = '' }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
    className="relative flex flex-col items-center p-6 rounded-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-lg hover:shadow-2xl hover:scale-105 transition-all cursor-pointer w-full"
  >
    {comingSoon && (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="absolute inset-0 bg-black/60 backdrop-blur-lg rounded-xl flex flex-col items-center justify-center gap-2"
      >
        <span className="text-white font-semibold px-4 py-2 bg-blue-600/90 rounded-full text-sm">
          Coming Soon
        </span>
        {releaseDate && (
          <span className="text-white/80 text-sm">
            Expected: {releaseDate}
          </span>
        )}
      </motion.div>
    )}
    <Icon className={`w-10 h-10 ${comingSoon ? 'text-gray-400 dark:text-gray-600' : 'text-blue-600 dark:text-blue-400'} mb-4`} />
    <h3 className={`text-lg font-semibold ${comingSoon ? 'text-gray-400 dark:text-gray-600' : 'text-gray-900 dark:text-white'} mb-2`}>{title}</h3>
    <p className={`text-sm ${comingSoon ? 'text-gray-400 dark:text-gray-600' : 'text-gray-600 dark:text-gray-400'} text-center`}>{description}</p>
  </motion.div>
);

const HeroSection = () => {
  const laptopFeatures = [
    { 
      icon: Laptop, 
      title: 'Latest Models', 
      description: 'Featuring 13th Gen Intel & AMD Ryzen 7000 series'
    },
    { 
      icon: Cpu, 
      title: 'Performance', 
      description: 'Up to 32GB RAM & 1TB SSD for seamless multitasking'
    },
    { 
      icon: Gamepad, 
      title: 'Gaming Ready', 
      description: 'RTX 4060/4070 GPUs with DLSS 3.0 support and Radeon Graphics'
    },
    { 
      icon: Shield, 
      title: 'Warranty', 
      description: '3-year extended coverage with accidental damage protection'
    },
  ];

  const comingSoonCategories = [
    { 
      icon: Headphones, 
      title: 'Pro Audio Bundle', 
      description: 'Noise-cancelling headphones with study-optimized EQ modes',
      comingSoon: true,
      releaseDate: 'April 2025'
    },
    { 
      icon: Watch, 
      title: 'Smart Time Tracker', 
      description: 'Study session tracking & focus metrics with AI insights',
      comingSoon: true,
      releaseDate: 'April 2025'
    },
    { 
      icon: Smartphone, 
      title: 'Study Phone', 
      description: 'Built-in study modes & lecture recording features',
      comingSoon: true,
      releaseDate: 'April 2025'
    },
    { 
      icon: TabletSmartphone, 
      title: 'Note Tablet', 
      description: 'E-ink display with smart pen & cloud sync',
      comingSoon: true,
      releaseDate: 'April 2025'
    },
  ];

  return (
    <div className="h-auto lg:h-[90vh] py-16 px-8 bg-gradient-to-br from-gray-300 via-gray-150 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-750 rounded-[2.5rem] relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent dark:from-black/60" />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute -left-24 -top-24 w-96 h-96 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute -right-24 -bottom-24 w-96 h-96 bg-purple-200 dark:bg-purple-900/30 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 relative z-10 h-full">
        {/* Left Content */}
        <div className="flex flex-col justify-center space-y-8 lg:col-span-1">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full w-fit"
          >
            <span className="animate-pulse w-2 h-2 bg-blue-600 rounded-full mr-2" />
            <span className="text-blue-600 dark:text-blue-400 font-medium">Student Exclusive</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">
              Your Perfect
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Study Companion
              </span>
            </h1>
            
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-400">
              Find your ideal laptop with student-friendly prices. Complete your setup with our upcoming student-focused accessories!
            </p>
          </motion.div>
          
          <div className="flex flex-wrap gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl focus:ring-4 focus:ring-blue-300/50"
            >
              Shop Student Laptops
            </motion.button>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white px-8 py-4 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold text-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-2xl focus:ring-4 focus:ring-gray-300/50 dark:focus:ring-gray-700"
            >
              Learn More →
            </motion.a>
          </div>
        </div>

        {/* Right Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:col-span-2">
          {/* Available Features */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-8 w-full"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Laptop Features
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {laptopFeatures.map((feature, index) => (
                <CategoryCard key={index} {...feature} />
              ))}
            </div>
          </motion.div>

          {/* Coming Soon Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="p-8 w-full relative"
          >
            <h2 className="text-2xl font-bold text-gray-400 dark:text-gray-500 mb-6">
              Coming Soon
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {comingSoonCategories.map((category, index) => (
                <CategoryCard key={index} {...category} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;