'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaGraduationCap, FaTools, FaPaintBrush, FaLaptopCode, FaRocket } from 'react-icons/fa';

const timelineData = [
  {
    year: '2024',
    icon: <FaGraduationCap />,
    title: 'Started Software Engineering Degree (Batch 24.1)',
  },
  {
    year: '2024',
    icon: <FaTools />,
    title: 'Built First Web System – Auto Cars',
  },
  {
    year: '2024',
    icon: <FaPaintBrush />,
    title: 'Completed Figma to Lottie Course',
  },
  {
    year: '2025',
    icon: <FaLaptopCode />,
    title: 'Interned as Front-End Developer',
  },
  {
    year: 'Future',
    icon: <FaRocket />,
    title: 'Goal: World-Class Software Engineer & UI/UX Designer',
  },
];

// Your current progress step index (0-based)
const currentStepIndex = 3;

export default function Timeline() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-16 px-4 md:px-12 bg-bgNavy text-white">
      <h2 className="text-3xl font-bold text-center mb-12">🚀 My Journey</h2>

      <div className="relative max-w-6xl mx-auto flex justify-between items-center px-10">
        {/* White Track: Full width, behind everything */}
        <div
          className="absolute top-1/2 left-0 right-0 h-2 bg-white rounded-full -translate-y-1/2"
          style={{ opacity: 0.2, zIndex: 0 }}
        ></div>

        {/* Neon Blue Progress Fill */}
        <motion.div
          className="absolute top-1/2 left-0 h-2 bg-gradient-to-r from-neon to-primaryBlue rounded-full -translate-y-1/2"
          initial={{ width: 0 }}
          animate={{ width: `${(currentStepIndex / (timelineData.length - 1)) * 100}%` }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          style={{ zIndex: 1 }}
        />

        {/* Timeline Points */}
        {timelineData.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center w-1/5 cursor-pointer z-10"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Year */}
            <span className="text-sm mb-2 text-titleText">{item.year}</span>

            {/* Glowing Icon */}
            <motion.div
              whileHover={{
                scale: 1.3,
                rotate: 8,
                boxShadow: '0 0 12px 6px rgba(0, 216, 255, 0.5)',
              }}
              className={`text-2xl bg-bgNavy p-4 rounded-full border-2 border-neon text-neon`}
            >
              {item.icon}
            </motion.div>

            {/* Card Popup */}
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: -120, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.8 }}
                  transition={{ type: 'spring', stiffness: 150, damping: 15 }}
                  className="absolute top-[-110px] w-56 bg-white/10 backdrop-blur-md text-white rounded-2xl shadow-lg p-5 border border-neon z-20"
                >
                  <div
                    className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-neon rotate-45 border border-neon"
                  />
                  <p className="text-sm font-semibold">{item.title}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
