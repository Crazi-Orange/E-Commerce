import React from 'react';
import { motion } from "framer-motion";

export default function Marketing() {
  return (
    <div className="h-auto lg:h-[90vh] py-16 px-8 bg-gradient-to-br from-gray-300 via-gray-150 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-750 rounded-[2.5rem] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent dark:from-black/50" />
      <div className="absolute -left-24 -top-24 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30" />
      <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl opacity-30" />

      {/* Page Content (Blurred) */}
      <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8 backdrop-blur-sm">
        <div className="sm:max-w-lg">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl dark:text-white font-bold tracking-tight text-gray-900 sm:text-6xl"
          >
            Summer styles are
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              finally here
            </span>
          </motion.h1>
          <p className="mt-4 text-xl dark:text-white text-gray-500">
            This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care
            if you live or die.
          </p>
        </div>
        <div>
          <div className="mt-10">
            {/* Decorative image grid */}
            <div
              aria-hidden="true"
              className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
            >
              <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div className="flex items-center space-x-6 lg:space-x-8">
                  <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-40 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      <img
                        alt=""
                        src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                        className="size-full object-cover"
                      />
                    </div>
                    <div className="h-64 w-40 overflow-hidden rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      <img
                        alt=""
                        src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                        className="size-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-40 overflow-hidden rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      <img
                        alt=""
                        src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                        className="size-full object-cover"
                      />
                    </div>
                    <div className="h-64 w-40 overflow-hidden rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      <img
                        alt=""
                        src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                        className="size-full object-cover"
                      />
                    </div>
                    <div className="h-64 w-40 overflow-hidden rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      <img
                        alt=""
                        src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                        className="size-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-40 overflow-hidden rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      <img
                        alt=""
                        src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                        className="size-full object-cover"
                      />
                    </div>
                    <div className="h-64 w-40 overflow-hidden rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      <img
                        alt=""
                        src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                        className="size-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#"
              className="bg-white px-8 py-4 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold text-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl focus:ring-4 focus:ring-gray-300/50 dark:focus:ring-gray-700"
            >
              Shop now →
            </a>
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
    </div>
  );
}