import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ subtitle, title, alignment = 'center' }) => {
  const alignmentClasses = {
    center: 'text-center mx-auto',
    left: 'text-left',
    right: 'text-right ml-auto',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`max-w-2xl mb-12 ${alignmentClasses[alignment]}`}
    >
      {subtitle && (
        <span className="text-sm uppercase tracking-wider text-primary-500 dark:text-primary-400 font-semibold mb-2 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {title}
      </h2>
      <div className={`h-1 w-16 bg-accent-500 rounded ${
        alignment === 'center' ? 'mx-auto' : 
        alignment === 'right' ? 'ml-auto' : ''
      }`}></div>
    </motion.div>
  );
};

export default SectionTitle;