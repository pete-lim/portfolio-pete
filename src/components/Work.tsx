import workPhoto from '../assets/images/work-photo.png';
import { FiChevronDown } from 'react-icons/fi';

export default function WorkSection() {
  return (
    <div className="section">
      <header className="mb-8">Work</header>
      <div className="h-4/10 flex flex-col gap-8 overflow-hidden overflow-y-auto p-4 scrollbar">
        <ul>
          <span className="flex justify-between">
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
        </ul>
        <ul className="self-center m-10">--- Soft Experience ---</ul>
        <ul>
          <span className="flex justify-between">
            <h3 className="text-shadow-xs text-2xl!">Sales Associate</h3>
            <h2>07/24-08/25</h2>
          </span>
          <h2 className="mb-4!">Dyson, Australia</h2>
        </ul>
        <ul>
          <span className="flex justify-between">
            <h3 className="text-shadow-xs text-2xl!">Assistant Manager</h3>
            <h2>10/20-08/25</h2>
          </span>
          <h2 className="mb-4!">Dominos, Australia</h2>
        </ul>
        <ul>
          <span className="flex justify-between">
            <h3 className="text-shadow-xs text-2xl!">Retail Sales Assistant</h3>
            <h2>06/22-07/24</h2>
          </span>
          <h2 className="mb-4!">JD Sports, Australia</h2>
        </ul>
        <ul>
          <span className="flex justify-between">
            <h3 className="text-shadow-xs text-2xl!">Administration</h3>
            <h2>03/20-06/20</h2>
          </span>
          <h2 className="mb-4!">Dyson, Australia</h2>
        </ul>
      </div>
      <button className="bottom-chevron">
        <FiChevronDown className="text-xl text-accent" />
      </button>
      <img
        src={workPhoto}
        className="mix-blend-darken object-cover absolute bottom-0 left-0"
      ></img>
    </div>
  );
}
