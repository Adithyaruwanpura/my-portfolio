'use client';

import BackgroundCanvas from './BackgroundCanvas';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { useMode } from '@/context/ModeContext';

export default function Hero() {
  const { mode } = useMode();
  const isBackendMode = mode === 'backend';

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <BackgroundCanvas />
      </div>

      <div className="relative z-10 flex justify-center items-center min-h-screen px-6 md:px-20 py-24">
        <div
          className={`w-full max-w-7xl rounded-2xl shadow-lg border p-10 md:p-16 transition-all duration-500 ${
            isBackendMode
              ? 'bg-transparent border-green-500/40 backdrop-blur-none'
              : 'bg-bgNavy/75 backdrop-blur-sm border-[#59C3FF]/30'
          }`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex-1 text-center md:text-left space-y-6"
            >
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className={`text-3xl md:text-6xl leading-tight tracking-tight ${
                  isBackendMode ? 'text-green-400 font-mono' : ''
                }`}
              >
                <span
                  className={`block font-light ${
                    isBackendMode ? 'text-green-500/80' : 'text-gray-300'
                  }`}
                >
                  Hello, I’m
                </span>
                <span
                  className={`font-extrabold drop-shadow-md ${
                    isBackendMode ? 'text-green-400' : 'text-neon'
                  }`}
                >
                  Adithya{' '}
                  <span className={isBackendMode ? 'text-green-400' : 'text-neon'}>
                    Ruwanpura
                  </span>
                </span>
              </motion.h1>

              <h2
                className={`text-xl md:text-2xl font-semibold ${
                  isBackendMode ? 'text-green-400 font-mono' : 'text-textMain'
                }`}
              >
                <TypeAnimation
                  sequence={[
                    'Fullstack Developer', 2000,
                    'UI/UX Designer', 2000,
                    'Creative Thinker', 2000,
                    'Tech Enthusiast', 2000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                  className={isBackendMode ? 'text-green-400' : 'text-white'}
                />
              </h2>

              <p
                className={`text-base max-w-md mx-auto md:mx-0 leading-relaxed ${
                  isBackendMode ? 'text-green-300 font-mono' : 'text-textMain'
                }`}
              >
                Undergraduate Software Engineering student with a passion for building clean, user-friendly digital experiences — where design meets functionality.
              </p>

              <div className="flex gap-4 justify-center md:justify-start mt-6">
                <motion.a
                  href="#projects"
                  whileHover={{
                    y: -3,
                    boxShadow: isBackendMode
                      ? '0 0 20px rgba(34,197,94,0.5)'
                      : '0 0 20px rgba(2, 76, 170, 0.5)',
                  }}
                  className={`px-6 py-3 rounded-lg transition-all duration-300 shadow-md ${
                    isBackendMode
                      ? 'bg-green-600 hover:bg-green-500 text-black font-mono'
                      : 'bg-primaryBlue hover:bg-hoverBlue text-white'
                  }`}
                >
                  View Projects
                </motion.a>
                <motion.a
                  href="/assets/resume.pdf"
                  download
                  whileHover={{ y: -3 }}
                  className={`px-6 py-3 rounded-lg transition-all duration-300 border ${
                    isBackendMode
                      ? 'border-green-400 text-green-400 hover:bg-green-500 hover:text-black font-mono'
                      : 'border-neon text-white hover:bg-hoverBlue'
                  }`}
                >
                  Download Resume
                </motion.a>
              </div>
            </motion.div>

      
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="flex-1 flex justify-center items-center relative"
            >
              <div
                className="absolute w-[520px] h-[520px] rounded-full border-[25px] z-0 transition-all duration-500"
                style={{
                  borderColor: isBackendMode ? '#22c55e' : '#00D8FF',
                  boxShadow: isBackendMode
                    ? 'inset 0 0 20px #22c55e'
                    : 'inset 0 0 30px #00D8FF, 0 0 40px #00D8FF',
                }}
              />
              <motion.div
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="relative w-[380px] md:w-[500px] z-10 "
              >
                <Image
                  src="/Adithya1.png"
                  alt="Adithya Ruwanpura"
                  width={500}
                  height={500}
                  className="w-full h-auto object-contain"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
