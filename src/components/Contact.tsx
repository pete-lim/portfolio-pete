import photo from '../assets/images/contact-photo.webp';
import resume from '../assets/images/Pete-Lim-Software-Engineer-CV.webp';
export default function ContactSection() {
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

      <img
        src={photo}
        alt="two dawgs"
        className=" self-center size-2/4 object-contain"
      />
    </section>
  );
}
