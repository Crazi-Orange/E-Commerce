import React from 'react';
import { motion } from "framer-motion";

export default function Marketing() {
  return (
    <div className="h-auto lg:h-[90vh] py-16 px-8 bg-gradient-to-br from-gray-300 via-gray-150 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-750 rounded-[2.5rem] relative overflow-hidden">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
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
      </div>
    </div>
  )
}
