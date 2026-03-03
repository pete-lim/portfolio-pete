import { lazy, useEffect, useState } from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import '@fontsource/inter/400.css';
import './App.css';

import LazySection from './utils/LazySection';

import NavigationBar from './components/Navigation';
import FancyToggle from './utils/ToggleSwitch';
import HeroSection from './components/Hero';
const TechStack = lazy(() => import('./components/TechStack'));
const WorkSection = lazy(() => import('./components/Work'));
const ProjectSection = lazy(() => import('./components/Projects'));
const ContactSection = lazy(() => import('./components/Contact'));

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
        <LazySection>
          <TechStack />
        </LazySection>
        <LazySection>
          <WorkSection />
        </LazySection>
        <LazySection>
          <ProjectSection />
        </LazySection>
        <LazySection>
          <ContactSection />
        </LazySection>
      </main>
    </div>
  );
}

export default App;
