import Hamburger from 'hamburger-react';
import { useState } from 'react';

export default function NavigationBar() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <nav
        id="banner"
        className={`lg:flex-row! lg:h-1/12! lg:text-xl! lg:bg-bg! lg:text-accent! lg:transition-none! ${isOpen ? 'translate-y-0 opacity-100' : 'max-lg:-translate-y-full max-lg:opacity-0'}
    z-49
  `}
      >
        <a onClick={() => setOpen(false)} href="#home">
          Home
        </a>
        <a onClick={() => setOpen(false)} href="#tech">
          Tech
        </a>
        <a onClick={() => setOpen(false)} href="#work">
          Work
        </a>
        <a onClick={() => setOpen(false)} href="#projects">
          Projects
        </a>
        <a onClick={() => setOpen(false)} href="#contact">
          Contact
        </a>
      </nav>
      <div
        className={`absolute top-5 right-8 z-99 hover:text-primary lg:hidden ${isOpen ? 'text-bg-accent' : 'text-secondary'}`}
      >
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
    </div>
  );
}
