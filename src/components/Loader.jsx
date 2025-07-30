import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-neutral-900 z-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center"
      >
        <div className="relative w-20 h-20">
          <motion.div
            className="absolute inset-0 border-4 border-transparent border-t-primary-500 border-r-primary-500 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 1.2, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
          <motion.div
            className="absolute inset-2 border-4 border-transparent border-t-accent-500 border-r-accent-500 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ 
              duration: 1.8, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
        </div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-neutral-600 dark:text-neutral-300 font-semibold"
        >
          Loading...
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Loader;