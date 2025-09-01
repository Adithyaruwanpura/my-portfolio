'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaGraduationCap, FaTools, FaPaintBrush, FaLaptopCode, FaRocket } from 'react-icons/fa';
import { useMode } from '../context/ModeContext'; // adjust import path

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

const currentStepIndex = 3;

export default function Timeline() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { mode } = useMode();
  const isBackendMode = mode === 'backend';

  return (
    <section
      className={`w-full py-16 px-4 md:px-12  bg-transparent ${
        isBackendMode ? 'bg-[#0A0A23] text-green-400' : 'bg-bgNavy text-white'
      }`}
    >
      <h2
        className={`text-3xl font-bold text-center mb-12 text-white`}
      >
        🚀 My Journey
      </h2>

      <div className="relative max-w-6xl mx-auto flex justify-between items-center px-10">
        {/* Dark Track Line */}
        <div
          className={`absolute top-1/2 left-0 right-0 h-1 rounded-full -translate-y-1/2 ${
            isBackendMode ? 'bg-green-900' : 'bg-white opacity-20'
          }`}
          style={{ zIndex: 0 }}
        ></div>

        {/* Progress Fill */}
        <motion.div
          className={`absolute top-1/2 left-0 h-1 rounded-full -translate-y-1/2 ${
            isBackendMode ? 'bg-green-600' : 'bg-gradient-to-r from-neon to-primaryBlue'
          }`}
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
            <span
              className={`text-sm mb-2 text-white ${
                isBackendMode ? 'font-mono' : ''
              }`}
            >
              {item.year}
            </span>

            {/* Icon Circle */}
            <motion.div
              whileHover={{
                scale: 1.15,
                rotate: 8,
                boxShadow: isBackendMode
                  ? '0 0 8px 3px rgba(34,197,94,0.4)'
                  : '0 0 12px 6px rgba(0, 216, 255, 0.5)',
              }}
              className={`text-2xl p-4 rounded-full ${
                isBackendMode
                  ? 'bg-[#101225] border-2 border-green-600 text-green-400 shadow-green-600/40'
                  : 'bg-bgNavy border-2 border-neon text-neon'
              }`}
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
                  className={`absolute top-[-110px] w-56 rounded-2xl p-5 text-sm font-semibold z-20 backdrop-blur-md ${
                    isBackendMode
                      ? 'bg-black/70 border border-green-600 text-green-400'
                      : 'bg-white/10 border border-neon text-white'
                  }`}
                >
                  <div
                    className={`absolute -bottom-3 left-1/2 w-4 h-4 -translate-x-1/2 rotate-45 border ${
                      isBackendMode ? 'border-green-600 bg-black/70' : 'border-neon bg-neon'
                    }`}
                  />
                  {item.title}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
