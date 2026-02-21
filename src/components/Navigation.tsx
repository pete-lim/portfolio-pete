import Hamburger from 'hamburger-react';
import { useState } from 'react';

export default function NavigationBar() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <nav
        className={`fixed w-screen items-center flex bg-bg z-99 text-secondary ${isOpen ? 'h-screen flex-col justify-center gap-12 text-4xl!' : 'h-1/10 justify-around max-lg:hidden'}`}
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
      <div className="absolute top-8 right-8 text-secondary z-99 lg:hidden">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
    </div>
  );
}
