import { useEffect, useState } from 'react';
import '@fontsource/inter/400.css';
import './App.css';
import HeroSection from './components/Hero';
import TechStack from './components/TechStack';
function App() {
  const [theme, setTheme] = useState('light-mode');
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  return (
    <div className="root">
      <div className="fixed inset-0 -z-10 bg"></div>
      <span className="fixed w-screen h-1/10 flex justify-around">
        <button>Home</button>
        <button>Tech</button>
        <button>Work</button>
        <button>Projects</button>
        <button>Contact</button>
      </span>
      <HeroSection />
      <TechStack />
    </div>
  );
}

export default App;
