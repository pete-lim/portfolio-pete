import { FiChevronDown } from 'react-icons/fi';
export default function TechStack() {
  return (
    <div className="section">
      <header className="mb-8">Tech Stack</header>
      <div className="flex flex-col w-full gap-5">
        <div className="w-full">
          <h2>Languages</h2>
          <span className="w-full gap-5 flex flex-wrap">
            <h3>C#</h3>
            <h3>Java</h3>
            <h3>JavaScript</h3>
            <h3>TypeScript</h3>
            <h3>TailwindCSS</h3>
            <h3>HTML 5</h3>
          </span>
        </div>
        <div className="w-full">
          <h2>Frontend</h2>
          <span className="w-full gap-5 flex flex-wrap">
            <h3>React</h3>
            <h3>Unity</h3>
          </span>
        </div>
        <div className="w-full">
          <h2>Backend</h2>
          <span className="w-full gap-5 flex flex-wrap">
            <h3>Node.js</h3>
            <h3>PostgreSQL</h3>
            <h3>S3</h3>
            <h3>Redis</h3>
            <h3>Supabase</h3>
          </span>
        </div>
        <div className="w-full">
          <h2>Dev Ops & Tools</h2>
          <span className="w-full gap-5 flex flex-wrap">
            <h3>Git/Github</h3>
            <h3>Agile</h3>
            <h3>Waterfall</h3>
            <h3>Netlify</h3>
          </span>
        </div>
      </div>
      <button className="bottom-chevron">
        <FiChevronDown className="text-xl text-accent" />
      </button>
    </div>
  );
}
