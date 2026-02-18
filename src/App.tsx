import { useEffect, useState } from 'react';
import '@fontsource/inter/400.css';
import './App.css';
import HeroSection from './components/Hero';
import TechStack from './components/TechStack';
import WorkSection from './components/Work';
import ProjectSection from './components/Projects';
import ContactSection from './components/Contact';

function App() {
  const [theme, setTheme] = useState('light-mode');
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  return (
    <div className="root">
      <div className="fixed inset-0 -z-10 bg"></div>
      <nav className="fixed h-1/10 w-screen items-center flex justify-around bg-bg z-99 text-secondary">
        <a href="#home">Home</a>
        <a href="#tech">Tech</a>
        <a href="#work">Work</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <main>
        <HeroSection />
        <TechStack />
        <WorkSection />
        <ProjectSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
