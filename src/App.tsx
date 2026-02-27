import { useEffect, useState } from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
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
      <span className="absolute z-50 flex gap-4 text-4xl w-7/12 text-secondary bottom-6 left-6">
        <a
          href="https://github.com/pete-lim"
          aria-label="https://github.com/pete-lim"
          target="_blank"
        >
          <FaGithubSquare id="icon" />
        </a>
        <a
          href="https://linkedin.com/in/pete-lim/"
          aria-label="https://github.com/pete-lim"
          target="_blank"
        >
          <FaLinkedin id="icon" />
        </a>
      </span>
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
