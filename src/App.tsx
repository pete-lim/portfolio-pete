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
      <span className="fixed w-8/10 justify-self-center h-1/10 flex justify-around bg-bg z-99">
        <button>Home</button>
        <button>Tech</button>
        <button>Work</button>
        <button>Projects</button>
        <button>Contact</button>
      </span>
      <HeroSection />
      <TechStack />
      <WorkSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
}

export default App;
