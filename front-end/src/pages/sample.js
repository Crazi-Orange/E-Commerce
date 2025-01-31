import React from 'react';
import { motion } from 'framer-motion';

const Marketing = () => {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="sm:max-w-lg"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Summer styles are finally here
            </h1>
            <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
              This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care
              if you live or die.
            </p>
          </motion.div>

          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8"
                >
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    {[
                      ['/api/placeholder/176/256', '/api/placeholder/176/256'],
                      ['/api/placeholder/176/256', '/api/placeholder/176/256', '/api/placeholder/176/256'],
                      ['/api/placeholder/176/256', '/api/placeholder/176/256']
                    ].map((column, columnIndex) => (
                      <div key={columnIndex} className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        {column.map((src, imageIndex) => (
                          <motion.div
                            key={`${columnIndex}-${imageIndex}`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 * (columnIndex + imageIndex) }}
                            className="h-64 w-44 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
                          >
                            <img
                              src={src}
                              alt=""
                              className="h-full w-full object-cover transform hover:scale-105 transition-transform duration-300"
                            />
                          </motion.div>
                        ))}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-10 flex gap-4"
              >
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg md:px-10"
                >
                  Shop Collection
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 md:text-lg md:px-10"
                >
                  Learn More
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;