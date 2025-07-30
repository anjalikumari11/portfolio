import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);
  const [portfolioData, setPortfolioData] = useState(null);

  useEffect(() => {
    // Fetch portfolio data
    const fetchData = async () => {
      try {
        const response = await fetch('/src/data/portfolio-data.json');
        const data = await response.json();
        setPortfolioData(data);
        
        // Simulate loading to ensure smooth transitions
        setTimeout(() => {
          setLoading(false);
        }, 800);
      } catch (error) {
        console.error('Error fetching portfolio data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading || !portfolioData) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col min-h-screen dark-transition">
      <Header navItems={portfolioData.navItems} />
      
      <main className="flex-grow">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero heroData={portfolioData.hero} />
          <About aboutData={portfolioData.about} />
          <Skills skillsData={portfolioData.skills} />
          <Projects projectsData={portfolioData.projects} />
          <Contact contactData={portfolioData.contact} />
        </motion.div>
      </main>
      
      <Footer socialLinks={portfolioData.socialLinks} />
    </div>
  );
}

export default App;