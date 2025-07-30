import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiMail, FiArrowUp } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Footer = ({ socialLinks }) => {
  // Map icon names to components
  const getIconComponent = (iconName) => {
    switch (iconName) {
      case 'github': return <FiGithub />;
      case 'linkedin': return <FiLinkedin />;
      case 'twitter': return <FiTwitter />;
      case 'instagram': return <FiInstagram />;
      case 'email': return <FiMail />;
      default: return <FiGithub />;
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-100 dark:bg-neutral-800 py-12 dark-transition">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <h2 className="text-2xl font-bold">
              <span className="text-primary-600">Port</span>
              <span className="text-accent-500">folio</span>
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 mt-2">
              Creating modern digital experiences
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex space-x-4"
          >
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-primary-500 dark:hover:bg-primary-600 hover:text-white transition-colors duration-300"
                aria-label={link.name}
              >
                {getIconComponent(link.icon)}
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-neutral-200 dark:border-neutral-700 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            © {currentYear} Portfolio. All rights reserved.
          </p>
          
          <Link
            to="hero"
            spy={true}
            smooth={true}
            duration={800}
            className="mt-4 md:mt-0 flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors cursor-pointer"
          >
            <span className="mr-2">Back to top</span>
            <FiArrowUp />
          </Link>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;