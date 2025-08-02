'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma, FaPhp, FaWordpress, FaGitAlt,
} from 'react-icons/fa';
import { SiTailwindcss, SiAdobephotoshop, SiMysql, SiJquery, SiNodedotjs, SiMongodb } from 'react-icons/si';

// Add 'colorCode' (hex) for progress bar fill color
const categories = [
  {
    key: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500', colorCode: '#f97316', level: 95 }, // orange-500
      { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500', colorCode: '#3b82f6', level: 90 },   // blue-500
      { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400', colorCode: '#facc15', level: 85 }, // yellow-400
      { name: 'React', icon: FaReact, color: 'text-cyan-400', colorCode: '#22d3ee', level: 80 },   // cyan-400
      { name: 'Tailwind', icon: SiTailwindcss, color: 'text-teal-400', colorCode: '#2dd4bf', level: 75 }, // teal-400
      { name: 'jQuery', icon: SiJquery, color: 'text-blue-400', colorCode: '#60a5fa', level: 70 },  // blue-400
    ],
  },
  {
    key: 'backend',
    label: 'Backend',
    skills: [
      { name: 'PHP', icon: FaPhp, color: 'text-purple-500', colorCode: '#a855f7', level: 85 }, // purple-500
      { name: 'MySQL', icon: SiMysql, color: 'text-sky-300', colorCode: '#7dd3fc', level: 80 }, // sky-300
      { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500', colorCode: '#22c55e', level: 70 }, // green-500
      { name: 'MongoDB', icon: SiMongodb, color: 'text-green-400', colorCode: '#4ade80', level: 65 }, // green-400
    ],
  },
  {
    key: 'tools',
    label: 'Tools',
    skills: [
      { name: 'Git', icon: FaGitAlt, color: 'text-red-500', colorCode: '#ef4444', level: 90 }, // red-500
      { name: 'WordPress', icon: FaWordpress, color: 'text-indigo-400', colorCode: '#818cf8', level: 70 }, // indigo-400
    ],
  },
  {
    key: 'design',
    label: 'Design',
    skills: [
      { name: 'Figma', icon: FaFigma, color: 'text-pink-500', colorCode: '#ec4899', level: 80 }, // pink-500
      { name: 'Photoshop', icon: SiAdobephotoshop, color: 'text-blue-300', colorCode: '#93c5fd', level: 75 }, // blue-300
    ],
  },
];

export default function SkillsTools() {
  const [activeTab, setActiveTab] = useState(0);

  // Auto carousel: change tab every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % categories.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentCategory = categories[activeTab];

  return (
    <section id="skills" className="relative w-full px-6 md:px-20 py-24 overflow-hidden">
      <div className="absolute inset-y-0 left-6 right-6 md:left-20 md:right-20 rounded-3xl pointer-events-none -z-10">
        {/* Optional BackgroundCanvas reuse */}
      </div>

      <div className="relative bg-bgNavy text-white rounded-3xl px-8 py-12 shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-col items-center space-y-12">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-bold text-titleText drop-shadow-lg"
          >
            My <span className="text-neon">Skills</span> & <span className="text-secondaryBlue">Tools</span>
          </motion.h2>

          {/* Tabs */}
          <nav
            aria-label="Skills categories"
            className="flex flex-wrap gap-4 justify-center"
          >
            {categories.map((cat, idx) => (
              <button
                key={cat.key}
                onClick={() => setActiveTab(idx)}
                className={`px-5 py-2 rounded-full font-semibold transition
                  ${
                    idx === activeTab
                      ? 'bg-neon text-bgNavy shadow-[0_0_12px_rgba(0,216,255,0.7)]'
                      : 'bg-divider text-textMain hover:bg-hoverBlue hover:text-white'
                  }
                `}
                aria-current={idx === activeTab ? 'true' : undefined}
              >
                {cat.label}
              </button>
            ))}
          </nav>

          {/* Skills Grid with animation */}
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
                    className="bg-bgNavy border border-divider rounded-xl p-6 flex flex-col items-center justify-center shadow-md backdrop-blur-lg hover:shadow-[0_0_20px_rgba(0,216,255,0.3)] transition"
                    title={skill.name}
                  >
                    <Icon size={36} className={`${skill.color} mb-3`} />
                    <p className="text-sm text-center text-textMain font-medium mb-2">
                      {skill.name}
                    </p>

                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-2 rounded-full"
                        style={{ width: `${skill.level}%`, backgroundColor: skill.colorCode }}
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
