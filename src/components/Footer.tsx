'use client';

import { motion } from 'framer-motion';
import {
  FaLinkedinIn,
  FaGithub,
  FaDribbble,
  FaArrowUp,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
} from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="w-full bg-bgNavy border-t border-divider text-white
                 py-4 px-6 md:px-12 lg:px-24 flex flex-col"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
     
        <div className="text-center md:text-left space-y-1 flex-1">
          <h2 className="text-lg font-bold text-white">Adithya Ruwanpura</h2>
          <p className="text-sm text-white/80">
            Crafting code with creativity. Designing experiences with purpose.
          </p>
        </div>

       
        <div className="flex items-center gap-6 flex-1 justify-end">
          
          <div className="flex items-center gap-3 md:gap-4">
            {[
              {
                icon: <FaGithub />,
                href: 'https://github.com',
                label: 'GitHub',
              },
              {
                icon: <FaLinkedinIn />,
                href: 'https://linkedin.com',
                label: 'LinkedIn',
              },
              {
                icon: <FaTwitter />,
                href: 'https://twitter.com',
                label: 'Twitter',
              },
              {
                icon: <FaInstagram />,
                href: 'https://instagram.com',
                label: 'Instagram',
              },
              {
                icon: <FaFacebookF />,
                href: 'https://facebook.com',
                label: 'Facebook',
              },
              {
                icon: <FaDribbble />,
                href: 'https://dribbble.com',
                label: 'Dribbble',
              },
            ].map((item, idx) => (
              <motion.a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="p-2 rounded-full bg-divider text-white hover:text-neon hover:bg-bgNavy transition-all duration-300"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>

         
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -6, rotate: -15 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="p-2 rounded-full border border-neon text-neon hover:bg-neon hover:text-bgNavy transition"
            aria-label="Back to top"
          >
            <FaArrowUp className="text-lg animate-bounce-slow" />
          </motion.button>
        </div>
      </div>

     
      <div className="mt-6 text-center text-white text-sm select-none">
        © {new Date().getFullYear()} Adithya Ruwanpura. All rights reserved.
      </div>
    </footer>
  );
}
