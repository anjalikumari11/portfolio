import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ skill, index }) => {
  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    show: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: index * 0.05
      }
    },
    hover: { 
      scale: 1.1,
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <motion.div
      variants={iconVariants}
      initial="hidden"
      whileInView="show"
      whileHover="hover"
      viewport={{ once: true, margin: "-60px" }}
      className="flex flex-col items-center justify-center p-4"
    >
      <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-white dark:bg-neutral-800 rounded-xl shadow-soft mb-3">
        <img 
          src={skill.icon} 
          alt={skill.name} 
          className="w-8 h-8 md:w-10 md:h-10 object-contain"
        />
      </div>
      <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
        {skill.name}
      </span>
    </motion.div>
  );
};

export default SkillCard;