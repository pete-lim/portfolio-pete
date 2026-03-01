import heroPhoto from '../assets/images/hero-photo.webp';
import { HiLocationMarker } from 'react-icons/hi';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import type { ElementType, ReactNode } from 'react';

type prop = {
  children: ReactNode;
  tag?: ElementType;
  className?: string;
};
function DistortText({ children, tag = 'h2', className = '' }: prop) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 12 });
  const springY = useSpring(y, { stiffness: 150, damping: 12 });

  function onMove(e: React.MouseEvent<HTMLHeadingElement, MouseEvent>) {
    const box = e.currentTarget.getBoundingClientRect();
    const relX = e.clientX - (box.left + box.width / 2);
    const relY = e.clientY - (box.top + box.height / 2);
    x.set(relX * 0.4);
    y.set(relY * 0.4);
  }
  type allowedTags = 'header' | 'h2' | 'h3';
  const MotionTag = motion[tag as allowedTags];
  return (
    <MotionTag
      className={`distort-word lg:text-shadow-black lg:text-shadow-2xs  ${className}`}
      onMouseMove={onMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x: springX, y: springY }}
    >
      {children}
    </MotionTag>
  );
}

export default function HeroSection() {
  return (
    <section className={`section lg:h-screen lg:items-center`} id="home">
      <div className="hero-parallax max-lg:bg-none! lg:mb-8 lg:flex flex-col lg:h-7/12 items-center ">
        <span className="flex gap-2 lg:mt-80 mb-4">
          <DistortText tag="header" className="lg:text-9xl! lg:text-white!">
            Hi,
          </DistortText>
          <DistortText tag="header" className="lg:text-9xl! lg:text-white!">
            I'm
          </DistortText>
          <DistortText tag="header" className="lg:text-9xl! lg:text-white!">
            Pete
          </DistortText>
        </span>
        <span className="flex gap-4">
          <DistortText className="lg:text-gray-200!">A</DistortText>
          <DistortText className="lg:text-white!" tag="h3">
            Software
          </DistortText>
          <DistortText tag="h3" className="lg:text-white!">
            Engineer,
          </DistortText>
        </span>
        <span className="flex items-center gap-4">
          <DistortText className="lg:text-gray-200!">South</DistortText>
          <DistortText className="lg:text-gray-200!">Australia,</DistortText>
          <DistortText className="lg:text-gray-200!">Adelaide</DistortText>
          <DistortText>
            <HiLocationMarker className="ml-1 text-red-500" />
          </DistortText>
        </span>

        <img
          src={heroPhoto}
          alt="photo of me and my dogs"
          className="lg:hidden my-10 w-full h-90 object-cover"
        />
      </div>
      <p className="lg:w-7/10 xl:w-5/10 text-primary!">
        A Flinders University, Bachelor of Computer Science Graduate, with a
        2025 New Colombo Plan Scholarship and completed an international
        internship in Singapore, developing scalable Full-Stack systems and
        application for healthcare industries.
      </p>
    </section>
  );
}
