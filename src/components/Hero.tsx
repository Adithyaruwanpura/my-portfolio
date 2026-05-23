'use client';

import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { useMode } from '@/context/ModeContext';

export default function Hero() {
  const { mode } = useMode();
  const isBackendMode = mode === 'backend';

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-20 py-24 bg-[#0A0A23]"
    >
      {/* SIMPLE BACKGROUND (FAST) */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0A0A23] to-black" />

      <div className="flex flex-col items-center justify-between w-full max-w-6xl gap-12 md:flex-row">

        {/* LEFT CONTENT */}
        <div className="flex-1 space-y-6 text-center md:text-left">

          <h1 className="text-3xl font-bold leading-tight md:text-6xl">
            <span className="block text-lg text-gray-300 md:text-xl">
              Hello, I’m
            </span>

            <span className={`block ${isBackendMode ? 'text-green-400' : 'text-white'}`}>
              Adithya Ruwanpura
            </span>
          </h1>

          {/* TYPE ANIMATION (KEPT BUT LIGHT) */}
          <h2 className="text-lg font-semibold md:text-2xl text-cyan-300">
            <TypeAnimation
              sequence={[
                'Fullstack Developer',
                2000,
                'UI/UX Designer',
                2000,
                'Creative Thinker',
                2000,
              ]}
              speed={40}
              repeat={Infinity}
            />
          </h2>

          <p className="max-w-md mx-auto text-sm text-gray-300 md:mx-0 md:text-base">
            Undergraduate Software Engineering student building clean, modern, and user-friendly digital experiences.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">

            <a
              href="#projects"
              className="px-6 py-3 font-semibold text-black transition rounded-lg bg-cyan-500 hover:bg-cyan-400"
            >
              View Projects
            </a>

            <a
              href="/assets/Adithya_Ruwanpura_CV.pdf"
              download
              className="px-6 py-3 text-white transition border rounded-lg border-cyan-400 hover:bg-cyan-500/10"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE (OPTIMIZED) */}
        <div className="flex justify-center flex-1">
          <div className="relative w-[260px] md:w-[380px]">

            {/* SIMPLE BORDER EFFECT (NO GLOW ANIMATION) */}
            <div className="absolute inset-0 border-4 rounded-full border-cyan-400/40" />

            <Image
              src="/Adithya1.png"
              alt="Adithya"
              width={500}
              height={500}
              priority
              className="object-cover rounded-full"
            />
          </div>
        </div>

      </div>
    </section>
  );
}