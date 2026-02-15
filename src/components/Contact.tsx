import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import photo from '../assets/images/contact-photo.png';
import resume from '../assets/images/Pete-Lim-Software-Engineer-CV.webp';
export default function ContactSection() {
  return (
    <div className="section flex flex-col gap-6">
      <header className="mb-8">Contact</header>
      <h2>
        I developed this portfolio as memories and keepsake to my border
        collies: "J-Dawg" & "Hobbs"
      </h2>
      <h3>
        Email me
        <a
          href="mailto:petedaniel.lim@gmail.com"
          aria-label="petedaniel.lim@gmail.com"
          className="underline ml-2"
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
          className="underline ml-2"
        >
          resume
        </a>
      </h3>
      <span className="flex mt-8 text-5xl w-7/12 self-center justify-around text-secondary">
        <a
          href="https://github.com/pete-lim"
          aria-label="https://github.com/pete-lim"
          target="_blank"
          className="flex flex-col items-center gap-2"
        >
          <FaGithubSquare />
          <p>GitHub</p>
        </a>
        <a
          href="https://linkedin.com/in/pete-lim/"
          aria-label="https://github.com/pete-lim"
          target="_blank"
          className="flex flex-col items-center gap-2"
        >
          <FaLinkedin />
          <p>LinkedIn</p>
        </a>
      </span>
      <img
        src={photo}
        alt=""
        className="self-end mix-blend-multiply size-3/4 object-contain"
      />
    </div>
  );
}
