'use client';

import { motion } from 'framer-motion';
import BackgroundCanvas from './BackgroundCanvas';
import { useMode } from '../context/ModeContext';

const projects = [
  {
    title: 'Caffeine_Brew shop',
    description:
      'A modern eCommerce platform built with PHP and MySQL, featuring real-time stock tracking and user-friendly UX.',
    tags: ['PHP', 'MySQL', 'Bootstrap', 'Admin Panel'],
    image: '/coffee.png',
    live: 'https://caffeinebrew.infinityfree.me/?i=1',
    code: 'https://github.com/ImeshGimshan/Caffeine_Brew-E-Commerce-',
  },
  {
    title: 'POS System ',
    description:
      'A professional POS system with HRM, payroll, attendance and customer management built in Figma.',
    tags: ['Figma', 'UI/UX', 'Dashboard'],
    image: '/projects/pos-ui.png',
    live: 'https://.vercel.app',
    code: 'https://github.com/Adithya/portfolio',
  },
  {
    title: 'Portfolio Website',
    description:
      'My personal developer portfolio built with Next.js, Tailwind CSS, and Framer Motion.',
    tags: ['Next.js', 'Tailwind', 'Framer Motion'],
    image: '/portfolio.png',
    live: 'https://my-portfolio-pi-ten-k0i8y8bvbc.vercel.app',
    code: 'https://github.com/adithyaruwanpura/my-portfolio',
  },
];

export default function Projects() {
  const { mode } = useMode();
  const isBackendMode = mode === 'backend';

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen px-6 py-24 overflow-hidden md:px-20"
    >

      <div className="absolute inset-y-0 pointer-events-none left-6 right-6 md:left-20 md:right-20 rounded-3xl -z-10">
        <BackgroundCanvas />
      </div>


      <div
        className={`relative rounded-3xl px-8 py-12 transition-colors duration-500
          ${isBackendMode
            ? 'bg-gradient-to-b from-[#0A0A23] to-[#000000] text-green-400 font-mono'
            : 'bg-bgNavy text-white'
          }`}
      >
        <div className="mx-auto space-y-16 max-w-7xl">


          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={`text-4xl md:text-5xl font-bold text-center drop-shadow-lg ${isBackendMode ? 'text-green-400 font-mono' : 'text-titleText'
              }`}
          >
            My{' '}
            <span className={isBackendMode ? 'text-green-400 font-mono' : 'text-neon'}>
              Projects
            </span>
          </motion.h2>


          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`group relative rounded-2xl overflow-hidden shadow-md backdrop-blur-md transition-all duration-300
                  ${isBackendMode
                    ? 'bg-[#101225] text-green-400 font-mono shadow-green-700/40 hover:shadow-green-500/60'
                    : 'bg-[#0A0A23]/70 border border-divider shadow-lg hover:shadow-[0_0_20px_rgba(0,216,255,0.3)]'
                  }`}
              >

                {!isBackendMode && (
                  <div className="absolute top-0 left-0 w-full h-1 opacity-0 bg-gradient-to-r from-transparent via-neon to-transparent group-hover:opacity-100 animate-pulse"></div>
                )}


                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105 ${isBackendMode ? 'brightness-90' : ''
                      }`}
                  />
                  {!isBackendMode && (
                    <div className="absolute inset-0 transition duration-300 opacity-0 bg-gradient-to-t from-transparent via-white/5 to-transparent group-hover:opacity-100"></div>
                  )}
                </div>

                <div className="p-6 space-y-4">
                  <h3
                    className={`text-xl font-semibold ${isBackendMode ? 'text-green-400 font-mono' : 'text-titleText'
                      }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`text-sm ${isBackendMode ? 'text-green-300 font-mono' : 'text-textMain'
                      }`}
                  >
                    {project.description}
                  </p>


                  <div className="flex flex-wrap gap-2 text-sm">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className={`px-2 py-1 rounded-full text-xs ${isBackendMode
                          ? 'bg-green-900/40 text-green-300 border border-green-700 font-mono'
                          : 'bg-divider text-white'
                          }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>


                  <div className="flex gap-4 pt-4">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-sm hover:underline transition-all ${isBackendMode ? 'text-green-400 font-mono' : 'text-neon'
                          }`}
                      >
                        Live Site
                      </a>
                    )}
                    {project.code && (
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-sm hover:underline transition-all ${isBackendMode ? 'text-green-400 font-mono' : 'text-primaryBlue'
                          }`}
                      >
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
