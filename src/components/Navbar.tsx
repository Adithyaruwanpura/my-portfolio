'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Lightbulb } from 'lucide-react';
import { useMode } from '@/context/ModeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { mode, toggleMode } = useMode();

  const menuItems = ['Home', 'About', 'Projects', 'Skills', 'Contact'];
  const isBackendMode = mode === 'backend';

  const toggleMenu = () => setIsOpen(!isOpen);


  useEffect(() => {
    const sections = menuItems.map(section => document.getElementById(section.toLowerCase()));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach(section => section && observer.observe(section));
    return () => sections.forEach(section => section && observer.unobserve(section));
  }, [menuItems]);

  const handleClick = (section: string) => {
    setActiveSection(section.toLowerCase());
    setIsOpen(false);
  };

  return (
    <header className="w-full py-4 px-6 md:px-12 lg:px-24 flex justify-between items-center fixed top-0 z-50 bg-bgNavy bg-opacity-90 backdrop-blur-sm">
      <h1 className="font-bold text-xl md:text-2xl tracking-wide text-white flex items-center gap-1">
        <span
          className={`drop-shadow-sm transition-colors duration-300
            ${isBackendMode ? 'text-green-400' : 'text-cyan-400'}
          `}
        >
          It&apos;s me
        </span>{' '}
        <span className="text-white drop-shadow-[0_1.5px_1.5px_rgba(0,255,255,0.8)] hover:drop-shadow-[0_3px_3px_rgba(0,255,255,1)] transition-all duration-300">
          Adhi.
        </span>
      </h1>

     
      <nav className="hidden md:flex gap-10 font-medium" aria-label="Main Navigation">
        {menuItems.map((section) => {
          const isActive = activeSection === section.toLowerCase();
          return (
            <a
              key={section}
              href={`#${section.toLowerCase()}`}
              onClick={() => handleClick(section)}
              className={`relative group transition-colors duration-300
                ${isBackendMode ? 'font-mono' : ''}
                ${isActive ? (isBackendMode ? 'text-green-400' : 'text-white') : 'text-textMain hover:text-white'}
              `}
            >
              {section}
              <span
                className={`absolute left-0 bottom-0 w-full h-0.5 rounded-full shadow-md transition-transform duration-300 origin-left
                  ${isBackendMode ? 'bg-green-400' : 'bg-cyan-400'}
                  ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                `}
              ></span>
            </a>
          );
        })}
      </nav>

     
      <button
        onClick={toggleMode}
        className={`hidden md:flex ml-4 p-2 rounded-full border-2 transition-all duration-300
          ${isBackendMode
            ? 'border-green-400 text-green-400 bg-transparent hover:bg-green-900/20'
            : 'border-cyan-400 bg-cyan-400 text-white shadow-[0_0_15px_#00D8FF]'
          }
        `}
      >
        <Lightbulb size={22} />
      </button>

    
      <button
        className="md:hidden text-white focus:outline-none ml-3"
        onClick={toggleMenu}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-bgNavy bg-opacity-95 backdrop-blur-sm flex flex-col items-center gap-6 py-6 md:hidden border-t border-divider z-40">
          {menuItems.map((section) => {
            const isActive = activeSection === section.toLowerCase();
            return (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                onClick={() => handleClick(section)}
                className={`text-lg font-medium transition-colors
                  ${isBackendMode ? 'font-mono' : ''}
                  ${isActive
                    ? (isBackendMode ? 'text-green-400' : 'text-cyan-400')
                    : (isBackendMode ? 'text-white hover:text-green-400' : 'text-white hover:text-cyan-400')}`}
              >
                {section}
              </a>
            );
          })}

          <button
            onClick={toggleMode}
            className={`mt-4 p-3 rounded-full border-2 transition-all duration-300
              ${isBackendMode
                ? 'border-green-400 text-green-400 bg-transparent hover:bg-green-900/20'
                : 'border-cyan-400 bg-cyan-400 text-white shadow-[0_0_15px_#00D8FF]'
              }
            `}
          >
            <Lightbulb size={24} />
          </button>
        </div>
      )}
    </header>
  );
}
