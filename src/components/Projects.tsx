import useEmblaCarousel from 'embla-carousel-react';
import sortedBeans from '../assets/images/sorted-beans-thumbnail.svg';
import bullDog from '../assets/images/bulldog-thumbnail.svg';
import vuePlatform from '../assets/images/vue-platform-thumbnail.svg';
import { FiChevronDown } from 'react-icons/fi';

export default function ProjectSection() {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <div className="section">
      <header>Projects</header>
      <div className="embla mt-10 grow" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide text-primary flex flex-col">
            <span className="flex items-end gap-2">
              <h3>Sorted Beans</h3> <h2> - Personal</h2>
            </span>
            <img src={sortedBeans} alt="" className="project-thumbnail" />
            <h3 className="project-text">
              Minimalist productivity-focused day planner with real-time
              scheduling, cloud-synced task management, and an adaptive UI
              featuring custom themes, weather integration, and GitHub OAuth
              authentication
            </h3>
            <h2 className="text-base/7! mt-2">
              React, TypeScript, Zustand, Supabase (PostgreSQL, Auth), GitHub
              OAuth, TailwindCSS, REST APIs, Geolocation API, Responsive UI/UX
            </h2>
          </div>
          <div className="embla__slide text-primary flex flex-col">
            <span className="flex items-end gap-2">
              <h3>Vue Platform</h3>
              <h2> - Vue Reality Labs</h2>
            </span>
            <img src={vuePlatform} alt="" className="project-thumbnail" />
            <h3 className="project-text">
              Immersive Media Streaming Prototype built with a full
              client–server architecture, featuring secure authentication,
              dynamic content pipelines, and modular UI/UX
            </h3>
            <h2 className="text-base/7! mt-2">
              Unity, C#, Node.js, Express, REST API, JWT, bcrypt, Redis,
              PostgreSQL, AWS S3
            </h2>
          </div>
          <div className="embla__slide text-primary flex flex-col">
            <span className="flex items-end gap-2">
              <h3>BullDog Cafe</h3>
              <h2> - Vue Reality Labs</h2>
            </span>
            <img src={bullDog} alt="" className="project-thumbnail" />
            <h3 className="project-text">
              Cross-headset VR cognitive stimulation game featuring fully
              interactive hand-tracking mechanics, optimised XR-ready 3D asset
              pipelines, and performance-tuned immersive environments for
              healthcare deployment
            </h3>
            <h2 className="text-base/7! mt-2">
              Unity, C#, OpenXR, Hand Tracking APIs, UI/UX for XR, Blender,
              Photogrammetry, VR Performance Profiling, Interaction Systems
            </h2>
          </div>
        </div>
      </div>
      <button className="bottom-chevron">
        <FiChevronDown className="text-xl text-accent" />
      </button>
    </div>
  );
}
