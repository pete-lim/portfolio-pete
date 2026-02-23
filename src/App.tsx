import { useEffect, useState } from 'react';
import '@fontsource/inter/400.css';
import './App.css';
import NavigationBar from './components/Navigation';
import FancyToggle from './utils/ToggleSwitch';
import HeroSection from './components/Hero';
import TechStack from './components/TechStack';
import WorkSection from './components/Work';
import ProjectSection from './components/Projects';
import ContactSection from './components/Contact';
function App() {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const theme = isDark ? 'dark-mode' : 'light-mode';
    document.documentElement.setAttribute('data-theme', theme);
  }, [isDark]);
  return (
    <div className="root">
      <div className="fixed inset-0 -z-10 bg"></div>
      <NavigationBar />
      <FancyToggle isDark={isDark} setIsDark={setIsDark} />
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
