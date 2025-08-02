'use client';

import { motion } from 'framer-motion';
import BackgroundCanvas from './BackgroundCanvas';
import TimelineSection from './TimelineSection';

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen px-6 md:px-20 py-24 overflow-hidden"
    >
      {/* Canvas Background */}
      <div className="absolute inset-y-0 left-6 right-6 md:left-20 md:right-20 rounded-3xl pointer-events-none -z-10">
        <BackgroundCanvas />
      </div>

      {/* Main Container */}
      <div className="relative bg-bgNavy text-white rounded-3xl px-8 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Text Block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-titleText drop-shadow-lg">
              About <span className="text-neon">Me</span>
            </h2>

            <p className="text-textMain leading-relaxed text-lg max-w-2xl">
              I’m <span className="text-neon font-semibold">Adithya Ruwanpura</span>, a passionate
              <span className="text-primaryBlue font-semibold"> Fullstack Developer</span> and
              <span className="text-secondaryBlue font-semibold"> UI/UX Designer</span> who blends code and creativity to build stunning, user-friendly digital experiences.
            </p>

            <p className="text-textMain text-base max-w-xl">
              With a love for clean design and an eye for detail, I thrive on solving real-world problems with elegant and innovative digital solutions.
            </p>

            {/* Personal Motto / Quote */}
            <p className="italic text-neon text-lg border-l-4 border-neon pl-4">
              “Design with purpose, code with passion.”
            </p>

            {/* Fun Facts / Interests */}
            <p className="text-textMain text-base max-w-xl pt-4">
              Outside of development, I enjoy exploring the ocean of creative design ideas, watching animated films, sketching, and learning how technology can inspire young minds. I believe great software starts with empathy — and a bit of imagination.
            </p>
          </motion.div>

          {/* Creative Skill Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {[
              { title: 'Problem Solver', color: 'from-blue-500 to-cyan-400' },
              { title: 'Team Player', color: 'from-purple-500 to-blue-500' },
              { title: 'Creative Thinker', color: 'from-pink-500 to-yellow-300' },
              { title: 'UI/UX Focused', color: 'from-neon to-blue-400' },
            ].map((card, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className={`rounded-xl p-6 bg-bgNavy border border-divider shadow-md backdrop-blur-md transition duration-300 hover:shadow-[0_0_20px_rgba(0,216,255,0.3)]`}
              >
                <h3
                  className={`text-lg font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r ${card.color}`}
                >
                  {card.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Timeline Section */}
        <TimelineSection />
      </div>
    </section>
  );
}
