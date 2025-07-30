import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedTabs = ({ tabs, defaultIndex = 0, onChange }) => {
  const [selectedTab, setSelectedTab] = useState(defaultIndex);

  const handleTabChange = (index) => {
    setSelectedTab(index);
    if (onChange) {
      onChange(index);
    }
  };

  return (
    <div className="w-full mb-8">
      <div className="relative flex border-b border-neutral-200 dark:border-neutral-700">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabChange(index)}
            className={`px-4 py-2 font-medium transition-colors relative z-10 ${
              selectedTab === index 
                ? 'text-primary-600 dark:text-primary-400' 
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
            }`}
          >
            {tab.label}
            {selectedTab === index && (
              <motion.div
                layoutId="tabs-indicator"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 dark:bg-primary-400"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
      <div className="mt-4">
        <motion.div
          key={selectedTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {tabs[selectedTab].content}
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedTabs;