import { useEffect, useState } from 'react';
import '@fontsource/inter/400.css';
import './App.css';
import NavigationBar from './components/Navigation';
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
      <NavigationBar />
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
