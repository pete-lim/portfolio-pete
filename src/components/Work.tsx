import { FiChevronDown } from 'react-icons/fi';
import { motion, useTransform, useScroll } from 'motion/react';
import { useRef, type ReactNode } from 'react';

type ExperienceCardProps = {
  children: ReactNode;
};
function ExperienceCard({ children }: ExperienceCardProps) {
  const ref = useRef<HTMLUListElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'end 20%'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  return (
    <motion.ul
      ref={ref}
      whileInView={{ scale: 1 }}
      style={{ scale }}
      className="experience-container"
    >
      {children}
    </motion.ul>
  );
}

export default function WorkSection() {
  return (
    <section className="section pb-40" id="work">
      <header className="mb-8">Work</header>
      <div className="flex flex-col gap-8 ">
        <ExperienceCard>
          <span>
            <h3 className="text-shadow-xs text-2xl!">
              Software Engineer Intern
            </h3>
            <h2>09/25-02/26</h2>
          </span>
          <h2 className="mb-4!">Vue Reality Labs, Singapore</h2>
          <li className="li-paragraph">
            Designed client-server system architecture for a VR platform
            supporting microservices, 3-tier scaling and 10+ user flows.
          </li>
          <li className="li-paragraph">
            Pioneered a Virtual Reality (VR) game with 11+ interactable
            mechanics and optimised for VR performance deployed in healthcare
            institutions.
          </li>
          <li className="li-paragraph">
            Authored a document procedure for training module used in
            professional settings.
          </li>
        </ExperienceCard>
        <p className="self-center m-10">--- Soft Experience ---</p>
        <ExperienceCard>
          <span>
            <h3 className="text-shadow-xs text-2xl!">Sales Associate</h3>
            <h2>07/24-08/25</h2>
          </span>
          <h2 className="mb-4!">Dyson, Australia</h2>
        </ExperienceCard>
        <ExperienceCard>
          <span>
            <h3 className="text-shadow-xs text-2xl!">Assistant Manager</h3>
            <h2>10/20-08/25</h2>
          </span>
          <h2 className="mb-4!">Dominos, Australia</h2>
        </ExperienceCard>
        <ExperienceCard>
          <span>
            <h3 className="text-shadow-xs text-2xl!">Retail Sales Assistant</h3>
            <h2>06/22-07/24</h2>
          </span>
          <h2 className="mb-4!">JD Sports, Australia</h2>
        </ExperienceCard>
        <ExperienceCard>
          <span>
            <h3 className="text-shadow-xs text-2xl!">Administration</h3>
            <h2>03/20-06/20</h2>
          </span>
          <h2 className="mb-4!">Dyson, Australia</h2>
        </ExperienceCard>
      </div>
      <button className="bottom-chevron">
        <FiChevronDown className="text-xl text-accent" />
      </button>
    </section>
  );
}
