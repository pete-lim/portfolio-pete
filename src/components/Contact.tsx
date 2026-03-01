import hobbs from '../assets/images/smol-hobbs.webp';
import jdawg from '../assets/images/chunk-jdawg.webp';
import { motion } from 'framer-motion';
import resume from '../assets/images/Pete-Lim-Software-Engineer-CV.webp';
import { useState } from 'react';
export default function ContactSection() {
  const [enabledHobbs, setEnabledHobbs] = useState(false);
  const [enabledJdawg, setEnabledJdawg] = useState(false);
  return (
    <section className="section flex flex-col gap-6" id="contact">
      <header className="mb-8">Contact</header>
      <h2>I love my two collies "J-Dawg" & "Hobbs"</h2>
      <h3>
        Email me
        <a
          href="mailto:petedaniel.lim@gmail.com"
          aria-label="petedaniel.lim@gmail.com"
          className="underline ml-2 hover:text-tint"
        >
          here
        </a>
      </h3>
      <h3>
        Read my
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="underline ml-2 hover:text-tint"
        >
          resume
        </a>
      </h3>
      <div className="relative">
        <div className="contact-grid">
          <div
            onMouseOver={() => setEnabledHobbs(true)}
            onMouseLeave={() => setEnabledHobbs(false)}
          ></div>
          <div></div>
          <div></div>
          <div
            onMouseOver={() => setEnabledJdawg(true)}
            onMouseLeave={() => setEnabledJdawg(false)}
          ></div>
        </div>
        <motion.img
          src={hobbs}
          alt="image of small hobbs"
          className="absolute left-0 bottom-2 z-20 w-90 border-accent border-8 drop-shadow-2xl"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={
            enabledHobbs ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }
          }
        />
        <motion.img
          src={jdawg}
          alt="image of fat jdawg"
          className="absolute top-2 right-1/12 w-70 z-20 border-accent border-8 drop-shadow-2xl"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={
            enabledJdawg ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }
          }
        />
      </div>
    </section>
  );
}
