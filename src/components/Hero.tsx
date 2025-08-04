'use client';

import BackgroundCanvas from './BackgroundCanvas';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isBackendMode, setIsBackendMode] = useState(false);

  // Detect backend mode by body class
  useEffect(() => {
    const updateMode = () => {
      setIsBackendMode(document.body.classList.contains('backend-mode'));
    };
    updateMode();

    const observer = new MutationObserver(updateMode);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        backgroundColor: isBackendMode ? '#0A0A23' : 'transparent', // Navy background in backend mode
      }}
    >
      {/* Background Canvas: Only in frontend mode */}
      {!isBackendMode && (
        <div className="absolute inset-0 -z-10">
          <BackgroundCanvas />
        </div>
      )}

      {/* Foreground Content */}
      <div className="relative z-10 flex justify-center items-center min-h-screen px-6 md:px-20 py-24">
        {/* Glass-effect wrapper */}
        <div className="w-full max-w-7xl bg-bgNavy/75 backdrop-blur-sm rounded-2xl shadow-lg border border-[#59C3FF]/30 p-10 md:p-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">

            {/* Left Side Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="flex-1 text-center md:text-left space-y-6"
            >
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-3xl md:text-6xl leading-tight tracking-tight"
              >
                <span className="block font-light text-gray-300">Hello, I’m</span>
                <span className="text-neon font-extrabold drop-shadow-md">
                  Adithya <span className="text-neon">Ruwanpura</span>
                </span>
              </motion.h1>

              <h2 className="text-xl md:text-2xl font-semibold text-textMain">
                <TypeAnimation
                  sequence={[
                    'Fullstack Developer', 2000,
                    'UI/UX Designer', 2000,
                    'Creative Thinker', 2000,
                    'Tech Enthusiast', 2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-white"
                />
              </h2>

              <p className="text-textMain text-base max-w-md mx-auto md:mx-0 leading-relaxed">
                Undergraduate Software Engineering student with a passion for building clean, user-friendly digital experiences — where design meets functionality.
              </p>

              <div className="flex gap-4 justify-center md:justify-start mt-6">
                <motion.a
                  href="#projects"
                  whileHover={{ y: -3, boxShadow: "0 0 20px rgba(2, 76, 170, 0.5)" }}
                  className="bg-primaryBlue hover:bg-hoverBlue text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-md"
                >
                  View Projects
                </motion.a>
                <motion.a
                  href="/assets/resume.pdf"
                  download
                  whileHover={{ y: -3 }}
                  className="border border-neon text-white px-6 py-3 rounded-lg hover:bg-hoverBlue transition-all duration-300"
                >
                  Download Resume
                </motion.a>
              </div>
            </motion.div>

            {/* Right Side Image with Neon Ring */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="flex-1 flex justify-center items-center relative"
            >
              <div
                className="absolute w-[520px] h-[520px] rounded-full border-[18px] border-[#00D8FF] opacity-100 z-0"
                style={{
                  // Glow only in frontend mode
                  boxShadow: isBackendMode
                    ? 'inset 0 0 30px #00D8FF'
                    : 'inset 0 0 30px #00D8FF, 0 0 40px #00D8FF',
                  transition: '0.3s ease-in-out',
                }}
              />
              <motion.div
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="relative w-[380px] md:w-[500px] z-10"
              >
                <Image
                  src="/Adithya.png"
                  alt="Adithya Ruwanpura"
                  width={500}
                  height={500}
                  className="w-full h-auto object-contain"
                  priority
                />
              </motion.div>
            </motion.div>

          </div>

          {/* Scroll Down Icon */}
          <motion.div
            animate={{
              y: [0, 10, 0],
              boxShadow: [
                "0 0 0px rgba(2, 76, 170, 0.4)",
                "0 0 12px rgba(2, 76, 170, 0.8)",
                "0 0 0px rgba(2, 76, 170, 0.4)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
          >
            <svg className="w-6 h-6 text-primaryBlue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
