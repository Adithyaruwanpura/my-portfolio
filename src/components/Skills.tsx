'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma, FaPhp, FaWordpress, FaGitAlt,
} from 'react-icons/fa';
import {
  SiTailwindcss, SiAdobephotoshop, SiMysql, SiJquery, SiNodedotjs, SiMongodb,
} from 'react-icons/si';
import { useMode } from '@/context/ModeContext';

const categories = [
  {
    key: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500', colorCode: '#f97316', level: 95 },
      { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500', colorCode: '#3b82f6', level: 90 },
      { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400', colorCode: '#facc15', level: 85 },
      { name: 'React', icon: FaReact, color: 'text-cyan-400', colorCode: '#22d3ee', level: 80 },
      { name: 'Tailwind', icon: SiTailwindcss, color: 'text-teal-400', colorCode: '#2dd4bf', level: 75 },
      { name: 'jQuery', icon: SiJquery, color: 'text-blue-400', colorCode: '#60a5fa', level: 70 },
    ],
  },
  {
    key: 'backend',
    label: 'Backend',
    skills: [
      { name: 'PHP', icon: FaPhp, color: 'text-purple-500', colorCode: '#a855f7', level: 85 },
      { name: 'MySQL', icon: SiMysql, color: 'text-sky-300', colorCode: '#7dd3fc', level: 80 },
      { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500', colorCode: '#22c55e', level: 70 },
      { name: 'MongoDB', icon: SiMongodb, color: 'text-green-400', colorCode: '#4ade80', level: 65 },
    ],
  },
  {
    key: 'tools',
    label: 'Tools',
    skills: [
      { name: 'Git', icon: FaGitAlt, color: 'text-red-500', colorCode: '#ef4444', level: 90 },
      { name: 'WordPress', icon: FaWordpress, color: 'text-indigo-400', colorCode: '#818cf8', level: 70 },
    ],
  },
  {
    key: 'design',
    label: 'Design',
    skills: [
      { name: 'Figma', icon: FaFigma, color: 'text-pink-500', colorCode: '#ec4899', level: 80 },
      { name: 'Photoshop', icon: SiAdobephotoshop, color: 'text-blue-300', colorCode: '#93c5fd', level: 75 },
    ],
  },
];

export default function SkillsTools() {
  const { mode } = useMode();
  const isBackendMode = mode === 'backend';
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % categories.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentCategory = categories[activeTab];

  return (
    <section id="skills" className="relative w-full px-6 md:px-20 py-24 overflow-hidden">
      <div
        className={`relative rounded-3xl px-8 py-12 shadow-lg transition-colors duration-500 ${
          isBackendMode
            ? 'bg-[#0A0A23] text-white font-mono'
            : 'bg-bgNavy text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-col items-center space-y-12">
         <motion.h2
  initial={{ opacity: 0, y: -30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className={`text-4xl md:text-5xl font-bold drop-shadow-lg ${
    isBackendMode ? 'text-green-400 font-mono' : 'text-titleText'
  }`}
>
  My{' '}
  <span className={isBackendMode ? 'text-green-400 font-mono' : 'text-neon'}>
    Skills
  </span>{' '}
  &{' '}
  <span className={isBackendMode ? 'text-green-400 font-mono' : 'text-secondaryBlue'}>
    Tools
  </span>
</motion.h2>


          {/* Tabs */}
          <nav className="flex flex-wrap gap-4 justify-center">
            {categories.map((cat, idx) => (
              <button
                key={cat.key}
                onClick={() => setActiveTab(idx)}
                className={`px-5 py-2 rounded-full font-semibold transition ${
                  idx === activeTab
                    ? isBackendMode
                      ? 'bg-green-500 text-black'
                      : 'bg-neon text-bgNavy shadow-[0_0_12px_rgba(0,216,255,0.7)]'
                    : isBackendMode
                    ? 'bg-[#101225] border border-green-400 text-white hover:bg-green-500 hover:text-black'
                    : 'bg-divider text-textMain hover:bg-hoverBlue hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </nav>

          {/* Skills Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCategory.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 w-full"
            >
              {currentCategory.skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.1, rotate: 1 }}
                    className={`rounded-xl p-6 flex flex-col items-center justify-center shadow-md transition
                      ${
                        isBackendMode
                          ? 'bg-[#101225] border border-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]'
                          : 'bg-bgNavy border border-divider hover:shadow-[0_0_20px_rgba(0,216,255,0.3)]'
                      }
                    `}
                  >
                    {/* Icons retain their original color */}
                    <Icon size={36} className={`mb-3 ${skill.color}`} />
                    <p
                      className={`text-sm text-center font-medium mb-2 ${
                        isBackendMode ? 'text-white font-mono' : 'text-textMain'
                      }`}
                    >
                      {skill.name}
                    </p>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-2 rounded-full"
                        style={{
                          width: `${skill.level}%`,
                          backgroundColor: isBackendMode
                            ? '#22c55e'
                            : skill.colorCode,
                        }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
