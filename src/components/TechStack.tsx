import { motion } from 'motion/react';
import html5Icon from '../assets/icons/html5Icon.svg';
import javaIcon from '../assets/icons/javaIcon.svg';
import javaScriptIcon from '../assets/icons/javascriptIcon.svg';
import nodeIcon from '../assets/icons/nodeIcon.svg';
import postgreIcon from '../assets/icons/postgresqlIcon.svg';
import reactIcon from '../assets/icons/reactIcon.svg';
import tailwindIcon from '../assets/icons/tailwindIcon.svg';
import typeScriptIcon from '../assets/icons/typescriptIcon.svg';
import supabaseIcon from '../assets/icons/supabase-icon.svg';
import cSharpIcon from '../assets/icons/csharp-svgrepo-com.svg';
import netlifyIcon from '../assets/icons/netlify-svgrepo-com.svg';
import githubIcon from '../assets/icons/github-142-svgrepo-com.svg';
import redisIcon from '../assets/icons/redis-svgrepo-com.svg';
import awsIcon from '../assets/icons/aws-svgrepo-com.svg';
import unityIcon from '../assets/icons/unityIcon.svg';
export default function TechStack() {
  return (
    <section className="section" id="tech">
      <motion.div initial={{ scale: 0.5 }} whileInView={{ scale: 1 }}>
        <header className="mb-8">Tech Stack</header>
        <div className="flex flex-col w-full gap-5">
          <div className="w-full">
            <h2>Languages</h2>
            <span className="mt-4 w-full gap-5 flex flex-wrap">
              {[
                { icon: cSharpIcon, name: 'C#' },
                { icon: javaIcon, name: 'Java' },
                { icon: javaScriptIcon, name: 'JavaScript' },
                { icon: typeScriptIcon, name: 'TypeScript' },
                { icon: html5Icon, name: 'HTML 5' },
              ].map((item) => (
                <div className="skill-tag" key={item.name}>
                  {item.icon && (
                    <img
                      className="tech-icon"
                      src={item.icon}
                      alt={item.name}
                      loading="lazy"
                    />
                  )}
                  <h3 className="tech-tag-text">{item.name}</h3>
                </div>
              ))}
            </span>
          </div>
          <div className="w-full">
            <h2>Frontend</h2>
            <span className="mt-4 w-full gap-5 flex flex-wrap">
              {[
                { icon: reactIcon, name: 'React' },
                { icon: tailwindIcon, name: 'TailwindCSS' },
                { icon: unityIcon, name: 'Unity' },
              ].map((item) => (
                <div className="skill-tag" key={item.name}>
                  <img
                    className="tech-icon"
                    src={item.icon}
                    alt={item.name}
                    loading="lazy"
                  />
                  <h3 className="tech-tag-text">{item.name}</h3>
                </div>
              ))}
            </span>
          </div>
          <div className="w-full">
            <h2>Backend</h2>
            <span className="mt-4 w-full gap-5 flex flex-wrap">
              {[
                { icon: nodeIcon, name: 'Node.js' },
                { icon: postgreIcon, name: 'PostgreSQL' },
                { icon: awsIcon, name: 'S3' },
                { icon: redisIcon, name: 'Redis' },
                { icon: supabaseIcon, name: 'Supabase' },
              ].map((item) => (
                <div className="skill-tag" key={item.name}>
                  <img
                    className="tech-icon"
                    src={item.icon}
                    alt={item.name}
                    loading="lazy"
                  />
                  <h3 className="tech-tag-text">{item.name}</h3>
                </div>
              ))}
            </span>
          </div>
          <div className="w-full">
            <h2>Dev Ops & Tools</h2>
            <span className="mt-4 w-full gap-5 flex flex-wrap">
              {[
                { icon: githubIcon, name: 'Git/GitHub' },
                { icon: null, name: 'Agile' },
                { icon: null, name: 'Waterfall' },
                { icon: netlifyIcon, name: 'Netlify' },
              ].map((item) => (
                <div className="skill-tag" key={item.name}>
                  {item.icon && (
                    <img
                      className="tech-icon"
                      src={item.icon}
                      alt={item.name}
                      loading="lazy"
                    />
                  )}
                  <h3 className="tech-tag-text">{item.name}</h3>
                </div>
              ))}
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
