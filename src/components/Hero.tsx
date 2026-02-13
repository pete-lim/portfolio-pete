import heroPhoto from '../assets/images/hero-photo.png';
import { HiLocationMarker } from 'react-icons/hi';
import { FiChevronDown } from 'react-icons/fi';
export default function HeroSection() {
  return (
    <div className="section">
      <header className="mb-4">Hi, I'm Pete</header>
      <span className="flex">
        <h2>A Graduate</h2>
        <h2 className="text-primary! pl-1">Software Engineer,</h2>
      </span>
      <span className="flex items-center">
        <h2>South Australia, Adelaide</h2>
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
    </div>
  );
}
