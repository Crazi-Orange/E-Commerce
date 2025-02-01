import React from 'react';
import speaker from '../assets/speaker.png';
import smartwatch from '../assets/smartwatch.png';
import laptop from '../assets/laptop.png';
import camera from '../assets/camera.png';
import iphone from '../assets/iphone.png';

const Marketing_3 = () => {
  return (
    <section className="h-auto lg:h-[90vh] py-16 px-8 bg-gradient-to-br from-gray-300 via-gray-150 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-750 rounded-[2.5rem] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent dark:from-black/50" />
      <div className="absolute -left-24 -top-24 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30" />
      <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl opacity-30" />

      {/* Page Content (Blurred) */}
      <div className="mx-auto max-w-screen-xl px-8 grid md:grid-cols-12 lg:gap-12 xl:gap-0 relative z-10 h-full backdrop-blur-sm">
        {/* Content Side */}
        <div className="md:col-span-6 lg:col-span-7 flex flex-col justify-center z-10">
          <div className="mb-6 inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
            <span className="animate-pulse w-2 h-2 bg-blue-600 rounded-full mr-2" />
            <span className="text-blue-600 dark:text-blue-400 font-medium">New Arrivals</span>
          </div>

          <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl xl:text-6xl">
            Explore Our Latest Collection
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Up to 30% OFF!
            </span>
          </h1>
          <p className="mb-8 text-gray-600 dark:text-gray-400 md:text-lg lg:text-xl max-w-2xl leading-relaxed">
            Upgrade your lifestyle with our newest arrivals. From smart gadgets to powerful devices, we have it all.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="bg-white px-8 py-4 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold text-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl focus:ring-4 focus:ring-gray-300/50 dark:focus:ring-gray-700"
            >
              Shop now →
            </a>
          </div>
        </div>

        {/* Image Layout */}
        <div className="md:col-span-6 lg:col-span-5 relative h-[600px] mt-12 md:mt-0">
          {/* Main center image */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 transform transition-all duration-300 hover:scale-105">
            <div className="relative">
              <div className="absolute" />
              <img
                src={speaker}
                alt="Wireless Speaker"
                className="w-[400px] md:w-96 h-auto relative z-10 p-4"
              />
            </div>
          </div>

          {/* Surrounding images */}
          <div className="absolute right-8 top-4 z-10 w-[250px] md:w-64 transform transition-all duration-300 hover:scale-105">
            <img
              src={smartwatch}
              alt="Smartwatch"
              className="backdrop-blur-sm p-3"
            />
          </div>
          <div className="absolute left-8 bottom-8 z-10 w-[250px] md:w-64 transform transition-all duration-300 hover:scale-105">
            <img
              src={laptop}
              alt="Laptop"
              className="backdrop-blur-sm p-3"
            />
          </div>
          <div className="absolute left-4 top-12 z-0 w-[200px] md:w-56 transform transition-all duration-300 hover:scale-105 opacity-90">
            <img
              src={camera}
              alt="Camera"
              className="backdrop-blur-sm p-3"
            />
          </div>
          <div className="absolute right-5 bottom-20 z-10 w-[200px] md:w-56 transform transition-all duration-300 hover:scale-105 opacity-90">
            <img
              src={iphone}
              alt="iPhone"
              className="backdrop-blur-sm p-3"
            />
          </div>
        </div>
      </div>

      {/* Coming Soon Overlay */}
      <div className="absolute inset-0 flex items-center justify-center backdrop-blur-md z-20">
        <div className="text-center bg-white/80 dark:bg-gray-900/80 p-12 rounded-3xl shadow-2xl border border-white/20 dark:border-gray-800/20">
          <h1 className="text-6xl md:text-8xl font-extrabold text-gray-900 dark:text-white mb-8">
            Coming Soon
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We're working on something amazing! Stay tuned for updates and be the first to know when we launch.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl focus:ring-4 focus:ring-blue-300/50"
            >
              Notify Me →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marketing_3;