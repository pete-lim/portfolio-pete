import heroPhoto from '../assets/images/hero-photo.png';
import { HiLocationMarker } from 'react-icons/hi';
import { FiChevronDown } from 'react-icons/fi';
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
      className={`distort-word ${className}`}
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
    <section className="section" id="home">
      <span className="flex gap-2 mb-4">
        <DistortText tag="header">Hi,</DistortText>
        <DistortText tag="header">I'm</DistortText>
        <DistortText tag="header">Pete</DistortText>
      </span>
      <span className="flex gap-4">
        <DistortText>A</DistortText>
        <DistortText>Graduate</DistortText>
        <DistortText tag="h3">Software</DistortText>
        <DistortText tag="h3">Engineer,</DistortText>
      </span>
      <span className="flex items-center gap-4">
        <DistortText>South</DistortText>
        <DistortText>Australia,</DistortText>
        <DistortText>Adelaide</DistortText>
        <HiLocationMarker className="ml-1 text-red-500" />
      </span>
      <img
        src={heroPhoto}
        alt=""
        className="mix-blend-darken mt-10 w-full h-5/10 object-cover"
      />
      <button className="bottom-chevron">
        <FiChevronDown className="text-xl text-accent" />
      </button>
    </section>
  );
}
