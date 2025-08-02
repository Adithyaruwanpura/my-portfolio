'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

  const toggleMenu = () => setIsOpen(!isOpen);

  // Intersection Observer logic
  useEffect(() => {
    const sections = menuItems.map(section => document.getElementById(section.toLowerCase()));
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6, // 60% of section visible to be considered active
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, [menuItems]);

  const handleClick = (section: string) => {
    setActiveSection(section.toLowerCase());
    setIsOpen(false);
  };

  return (
    <header className="w-full py-4 px-6 md:px-12 lg:px-24 flex justify-between items-center fixed top-0 z-50 bg-bgNavy bg-opacity-90 backdrop-blur-sm ">
      <h1 className="font-bold text-xl md:text-2xl tracking-wide text-white">
        <span className="text-cyan-400 drop-shadow-sm">It&apos;s me</span>{' '}
        <span className="text-white drop-shadow-[0_1.5px_1.5px_rgba(0,255,255,0.8)] hover:drop-shadow-[0_3px_3px_rgba(0,255,255,1)] transition-all duration-300">
          Adhi.
        </span>
      </h1>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-10 font-medium" aria-label="Main Navigation">
        {menuItems.map((section) => {
          const isActive = activeSection === section.toLowerCase();
          return (
            <a
              key={section}
              href={`#${section.toLowerCase()}`}
              onClick={() => handleClick(section)}
              className={`relative group transition-colors duration-300 ${
                isActive ? 'text-white' : 'text-textMain hover:text-white'
              }`}
            >
              {section}
              <span
                className={`absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-md transition-transform duration-300 origin-left ${
                  isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
              ></span>
            </a>
          );
        })}
      </nav>

      {/* Mobile Menu Icon */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-bgNavy bg-opacity-95 backdrop-blur-sm flex flex-col items-center gap-6 py-6 md:hidden border-t border-divider z-40">
          {menuItems.map((section) => {
            const isActive = activeSection === section.toLowerCase();
            return (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                onClick={() => handleClick(section)}
                className={`text-lg font-medium transition-colors ${
                  isActive ? 'text-cyan-400' : 'text-white hover:text-cyan-400'
                }`}
              >
                {section}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
