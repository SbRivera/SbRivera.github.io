import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './i18n';
import './styles/index.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ExperienceSection from './components/sections/ExperienceSection';
import ProjectsSection from './components/sections/ProjectsSection';
// GitHub repos carousel — disabled for now (repos aren't representative yet). See GitHubReposSection.tsx.
// import GitHubReposSection from './components/sections/GitHubReposSection';
import CertificatesSection from './components/sections/CertificatesSection';
import TechnologySection from './components/sections/TechnologySection';
import ContactSection from './components/sections/ContactSection';
import AppDownload from './components/AppDownload';

const SECTION_IDS = ['hero', 'about', 'experience', 'projects', 'certificates', 'technologies', 'contact'];

const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of SECTION_IDS) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        {/* <GitHubReposSection /> */}
        <CertificatesSection />
        <TechnologySection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

const App: React.FC = () => (
  <div className="app">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/app" element={<AppDownload />} />
    </Routes>
  </div>
);

export default App;
