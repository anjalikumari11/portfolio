import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';
import AnimatedTabs from '../components/AnimatedTabs';

const Skills = ({ skillsData }) => {
  const [activeCategory, setActiveCategory] = useState(0);
  
  const tabs = skillsData.categories.map(category => ({
    label: category.name,
    content: (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {category.skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} index={index} />
        ))}
      </div>
    )
  }));

  return (
    <section id="skills" className="py-20 bg-neutral-50 dark:bg-neutral-800">
      <div className="container">
        <SectionTitle 
          subtitle={skillsData.subtitle} 
          title={skillsData.title} 
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="text-center max-w-3xl mx-auto mb-12 text-neutral-700 dark:text-neutral-300">
            {skillsData.description}
          </p>
          
          <AnimatedTabs 
            tabs={tabs} 
            defaultIndex={activeCategory}
            onChange={(index) => setActiveCategory(index)}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;