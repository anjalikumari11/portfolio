import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { FiDownload } from 'react-icons/fi';

const About = ({ aboutData }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
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
    <section id="about" className="py-20 bg-white dark:bg-neutral-900">
      <div className="container">
        <SectionTitle subtitle={aboutData.subtitle} title={aboutData.title} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image with decoration */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 md:w-32 md:h-32 bg-primary-200 dark:bg-primary-900/20 rounded-lg -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 md:w-32 md:h-32 bg-accent-200 dark:bg-accent-900/20 rounded-lg -z-10"></div>
            <img 
              src={aboutData.image} 
              alt="About me" 
              className="w-full h-auto rounded-lg shadow-soft relative z-10"
            />
          </motion.div>
          
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold mb-4"
            >
              {aboutData.heading}
            </motion.h3>
            
            {aboutData.paragraphs.map((paragraph, index) => (
              <motion.p 
                key={index}
                variants={itemVariants}
                className="mb-4 text-neutral-700 dark:text-neutral-300"
              >
                {paragraph}
              </motion.p>
            ))}
            
            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-8"
            >
              {aboutData.stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                  <span className="block text-3xl font-bold text-primary-600 dark:text-primary-400">
                    {stat.value}
                  </span>
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
            
            {/* Resume Button */}
            {aboutData.resumeUrl && (
              <motion.a
                variants={itemVariants}
                href={aboutData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline inline-flex items-center mt-2"
              >
                <FiDownload className="mr-2" />
                Download Resume
              </motion.a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;