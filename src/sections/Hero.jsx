import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Typewriter } from 'react-simple-typewriter';

const Hero = ({ heroData }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-neutral-900 dark:to-neutral-800 -z-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-200 dark:bg-secondary-900/20 rounded-full filter blur-3xl opacity-30 -z-10 transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-200 dark:bg-accent-900/20 rounded-full filter blur-3xl opacity-30 -z-10 transform -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container flex justify-center items-center">
        <motion.div
          className="max-w-3xl flex justify-center items-center flex-col"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span 
            variants={itemVariants}
            className="inline-block mb-4 py-1 px-3 rounded-full text-sm font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
          >
            {heroData.tagline}
          </motion.span>
          
          <motion.h1 
            variants={itemVariants}
            className="font-bold mb-6 leading-tight"
          >
            {heroData.title}{' '}
            {isClient && (
              <span className="text-primary-600 dark:text-primary-400">
                <Typewriter
                  words={heroData.typingText}
                  loop={0} // 0 = infinite loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            )}
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 mb-8 leading-relaxed text-center"
          >
            {heroData.description}
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            <Link
              to={heroData.primaryButton.to}
              spy={true}
              smooth={true}
              duration={800}
              offset={-70}
              className="btn btn-primary"
            >
              {heroData.primaryButton.text}
            </Link>
            
            <Link
              to={heroData.secondaryButton.to}
              spy={true}
              smooth={true}
              duration={800}
              offset={-70}
              className="btn btn-outline"
            >
              {heroData.secondaryButton.text}
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 1.5,
        }}
      >
        <span className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">Scroll Down</span>
        <motion.div 
          className="w-6 h-10 border-2 border-neutral-400 dark:border-neutral-600 rounded-full flex justify-center pt-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            repeatType: "loop" 
          }}
        >
          <div className="w-1.5 h-1.5 bg-neutral-600 dark:bg-neutral-400 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
