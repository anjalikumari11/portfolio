import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const ProjectCard = ({ project, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        delay: index * 0.1 
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="card p-6 overflow-hidden group"
    >
      {/* Project Image with Overlay */}
      <div className="relative overflow-hidden rounded-lg mb-4">
        <div className="aspect-w-16 aspect-h-9 bg-neutral-200 dark:bg-neutral-700 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
          <div className="flex gap-3">
            {project.demoUrl && (
              <a 
                href={project.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white dark:bg-neutral-800 rounded-full text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-neutral-700 transition-colors"
                aria-label="View live demo"
              >
                <FiExternalLink size={20} />
              </a>
            )}
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white dark:bg-neutral-800 rounded-full text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-neutral-700 transition-colors"
                aria-label="View source code"
              >
                <FiGithub size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
      
      {/* Project Meta */}
      <div className="mb-3 flex flex-wrap gap-2">
        {project.tags.map((tag, tagIndex) => (
          <span 
            key={tagIndex}
            className="text-xs font-medium px-2 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
          >
            {tag}
          </span>
        ))}
      </div>
      
      {/* Project Details */}
      <h3 className="text-lg font-bold mb-2 text-neutral-900 dark:text-white">
        {project.title}
      </h3>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm">
        {project.description}
      </p>
    </motion.div>
  );
};

export default ProjectCard;