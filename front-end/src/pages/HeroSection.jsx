import React from 'react';

import {
  Monitor,
  Gamepad,
  Tablet,
  ShoppingBag,
  Laptop,
  Watch,
  TabletSmartphone,
  Headphones,
} from 'lucide-react';

const CategoryCard = ({ icon: Icon, title }) => (
  <div className="flex flex-col items-center p-6 rounded-xl bg-gray-100 dark:bg-gray-800 shadow-lg hover:shadow-2xl hover:scale-105 transition-all cursor-pointer w-full">
    <Icon className="w-14 h-14 text-gray-700 dark:text-gray-200 mb-4" />
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
  </div>
);

const HeroSection = () => {
  const categories1 = [
    { icon: Monitor, title: 'Computers' },
    { icon: Gamepad, title: 'Gaming' },
    { icon: Tablet, title: 'Tablets' },
    { icon: ShoppingBag, title: 'Fashion' },
  ];

  const categories2 = [
    { icon: Laptop, title: 'Laptops' },
    { icon: Watch, title: 'Watches' },
    { icon: TabletSmartphone, title: 'Tablets' },
    { icon: Headphones, title: 'Accessories' },
  ];

  return (
    <div className="h-auto lg:h-[90vh] py-16 px-8 bg-gradient-to-br from-gray-300 via-gray-150 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-750 rounded-[2.5rem] relative overflow-hidden">

      {/** Background Effects */}
       <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent dark:from-black/50 -z-1" />
      <div className="absolute -left-24 -top-24 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30" />
      <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 relative z-10 h-full">
        {/* Left Content */}
        <div className="flex flex-col justify-center space-y-8 lg:col-span-1">
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">
            Don’t miss out on
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              exclusive deals.
            </span>
          </h1>
          
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl focus:ring-4 focus:ring-blue-300/50">
              Create Account
            </button>
            <a
                  href="#"
                  className="bg-white px-8 py-4 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold text-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl focus:ring-4 focus:ring-gray-300/50 dark:focus:ring-gray-700"
              >
                Shop now →
              </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:col-span-2">
          {/* Top Categories */}
          <div className="p-8 w-full">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Top categories
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {categories1.map((category, index) => (
                <CategoryCard key={index} {...category} />
              ))}
            </div>
            <a
              href="#"
              className="block mt-6 text-lg text-blue-600 dark:text-blue-400 
              font-medium hover:underline transform hover:translate-x-2 transition-transform"
            >
              Shop now →
            </a>
          </div>

          {/* Shop Consumer Electronics */}
          <div className="p-8 w-full">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Shop consumer electronics
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {categories2.map((category, index) => (
                <CategoryCard key={index} {...category} />
              ))}
            </div>
            <a
              href="#"
              className="block mt-6 text-lg text-blue-600 dark:text-blue-400 
              font-medium hover:underline transform hover:translate-x-2 transition-transform"
            >
              Shop now →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
