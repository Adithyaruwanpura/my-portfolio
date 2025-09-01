'use client';

import { motion } from 'framer-motion';
import BackgroundCanvas from './BackgroundCanvas';
import TimelineSection from './TimelineSection';
import { useMode } from '../context/ModeContext'; 

export default function About() {
  const { mode } = useMode();
  const isBackendMode = mode === 'backend';

  const frontendCards = [
    { title: 'Problem Solver', color: 'from-blue-500 to-cyan-400' },
    { title: 'Team Player', color: 'from-purple-500 to-blue-500' },
    { title: 'Creative Thinker', color: 'from-pink-500 to-yellow-300' },
    { title: 'UI/UX Focused', color: 'from-neon to-blue-400' },
  ];

  const backendCards = [
    { title: 'Problem Solver' },
    { title: 'Team Player' },
    { title: 'Creative Thinker' },
    { title: 'UI/UX Focused' },
  ];

  return (
    <section
      id="about"
      className="relative w-full min-h-screen px-6 md:px-20 py-24 overflow-hidden"
    >
   
      <div className="absolute inset-0 rounded-3xl pointer-events-none -z-10">
        <BackgroundCanvas />
      </div>

     
      <div
        className={`relative rounded-3xl px-8 py-12 transition-colors duration-500 ${
          isBackendMode
            ? 'bg-gradient-to-b from-[#0A0A23] to-[#000000]'
            : 'bg-bgNavy'
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

      
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 space-y-6"
          >
            <h2
              className={`text-4xl md:text-5xl font-bold drop-shadow-lg ${
                isBackendMode ? 'text-green-400 font-mono' : 'text-titleText'
              }`}
            >
              About{' '}
              <span className={isBackendMode ? 'text-green-400 font-mono' : 'text-neon'}>
                Me
              </span>
            </h2>

            <p
              className={`leading-relaxed text-lg max-w-2xl ${
                isBackendMode ? 'text-white' : 'text-textMain'
              }`}
            >
              I’m{' '}
              <span className={isBackendMode ? 'text-green-400 font-mono font-semibold' : 'text-neon font-semibold'}>
                Adithya Ruwanpura
              </span>
              , a passionate{' '}
              <span className={isBackendMode ? 'text-green-400 font-mono font-semibold' : 'text-primaryBlue font-semibold'}>
                Fullstack Developer
              </span>{' '}
              and{' '}
              <span className={isBackendMode ? 'text-green-400 font-mono font-semibold' : 'text-secondaryBlue font-semibold'}>
                UI/UX Designer
              </span>{' '}
              who blends code and creativity to build stunning, user-friendly digital experiences.
            </p>

            <p className={`text-base max-w-xl ${isBackendMode ? 'text-white font-mono' : 'text-textMain'}`}>
              With a love for clean design and an eye for detail, I thrive on solving real-world problems with elegant and innovative digital solutions.
            </p>

            <p
              className={`italic text-lg pl-4 border-l-4 ${
                isBackendMode ? 'border-green-400 text-green-400 font-mono' : 'border-neon text-neon'
              }`}
            >
              “Design with purpose, code with passion.”
            </p>

            <p className={`text-base max-w-xl pt-4 ${isBackendMode ? 'text-white font-mono' : 'text-textMain'}`}>
              Outside of development, I enjoy exploring the ocean of creative design ideas, watching animated films, sketching, and learning how technology can inspire young minds. I believe great software starts with empathy — and a bit of imagination.
            </p>
          </motion.div>

     
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {(isBackendMode ? backendCards : frontendCards).map((card, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className={`rounded-xl p-6 shadow-md backdrop-blur-md transition duration-300 ${
                  isBackendMode
                    ? 'bg-[#101225] text-green-400 font-mono shadow-green-600/40'
                    : `bg-bgNavy border border-divider hover:shadow-[0_0_20px_rgba(0,216,255,0.3)] text-white`
                }`}
              >
                <h3
                  className={`text-lg font-semibold text-center ${
                    isBackendMode
                      ? ''
                      : 'bg-clip-text text-transparent bg-gradient-to-r ' + frontendCards[index].color
                  }`}
                >
                  {card.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>

       
        <TimelineSection />
      </div>
    </section>
  );
}
