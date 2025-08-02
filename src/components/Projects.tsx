'use client';

import { motion } from 'framer-motion';
import BackgroundCanvas from './BackgroundCanvas';

const projects = [
  {
    title: 'Unishop',
    description:
      'A modern eCommerce platform built with PHP and MySQL, featuring real-time stock tracking and user-friendly UX.',
    tags: ['PHP', 'MySQL', 'Bootstrap', 'Admin Panel'],
    image: '/projects/unishop.png',
    live: 'https://unishop.example.com',
    code: 'https://github.com/Adithya/unishop',
  },
  {
    title: 'POS Dashboard',
    description:
      'A professional POS system with HRM, payroll, attendance and customer management built in Figma.',
    tags: ['Figma', 'UI/UX', 'Dashboard'],
    image: '/projects/pos-ui.png',
    live: 'https://adithya-portfolio.vercel.app',
    code: 'https://github.com/Adithya/portfolio',
  },
  {
    title: 'Portfolio Website',
    description:
      'My personal developer portfolio built with Next.js, Tailwind CSS, and Framer Motion.',
    tags: ['Next.js', 'Tailwind', 'Framer Motion'],
    image: '/projects/portfolio.png',
    live: 'https://adithya-portfolio.vercel.app',
    code: 'https://github.com/Adithya/portfolio',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full min-h-screen px-6 md:px-20 py-24 overflow-hidden"
    >
      {/* Canvas Background */}
      <div className="absolute inset-y-0 left-6 right-6 md:left-20 md:right-20 rounded-3xl pointer-events-none -z-10">
        <BackgroundCanvas />
      </div>

      {/* Wrapper */}
      <div className="relative bg-bgNavy text-white rounded-3xl px-8 py-12">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-bold text-titleText text-center drop-shadow-lg"
          >
            My <span className="text-neon">Projects</span>
          </motion.h2>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative bg-[#0A0A23]/70 border border-divider rounded-2xl overflow-hidden shadow-lg backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,216,255,0.3)]"
              >
                {/* Neon Border */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon to-transparent opacity-0 group-hover:opacity-100 animate-pulse"></div>

                {/* Image */}
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Shine on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-titleText">
                    {project.title}
                  </h3>
                  <p className="text-textMain text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 text-sm">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-divider text-white px-2 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="pt-4 flex gap-4">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neon text-sm hover:underline transition-all"
                      >
                        Live Site
                      </a>
                    )}
                    {project.code && (
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primaryBlue text-sm hover:underline transition-all"
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
