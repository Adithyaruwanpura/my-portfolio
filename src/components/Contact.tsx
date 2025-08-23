'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

import {
  FaLinkedinIn,
  FaInstagram,
  FaBehance,
  FaGithub,
  FaTwitter,
} from 'react-icons/fa';
import { SiThreads } from 'react-icons/si';
import BackgroundCanvas from './BackgroundCanvas';
import Image from 'next/image'; 

const socialLinks = [
  { Icon: FaLinkedinIn, href: 'https://linkedin.com/in/your-profile', label: 'LinkedIn' },
  { Icon: FaInstagram, href: 'https://instagram.com/your-profile', label: 'Instagram' },
  { Icon: FaBehance, href: 'https://behance.net/your-profile', label: 'Behance' },
  { Icon: FaGithub, href: 'https://github.com/your-profile', label: 'GitHub' },
  { Icon: FaTwitter, href: 'https://twitter.com/your-profile', label: 'Twitter' },
  { Icon: SiThreads, href: 'https://threads.net/@your-profile', label: 'Threads' },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full min-h-screen px-6 md:px-20 py-24 overflow-hidden"
    >
      
      <div className="absolute inset-y-0 left-6 right-6 md:left-20 md:right-20 rounded-3xl pointer-events-none -z-10">
        <BackgroundCanvas />
      </div>

    
      <div className="relative bg-bgNavy text-white rounded-3xl px-8 py-12 shadow-lg">
        <div className="max-w-6xl mx-auto space-y-16">
        
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-titleText drop-shadow-lg">
              Let’s <span className="text-neon">Connect</span>
            </h2>
            <p className="text-textMain mt-4 text-lg max-w-xl mx-auto">
              Whether you have an idea, a project, or just want to say hi — I’d love to hear from you!
            </p>
          </motion.div>

         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="space-y-6"
            >
            
              <div className="flex justify-center md:justify-start">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-neon shadow-lg">
                  <Image
                    src="/avatars.svg"
                    alt="Adithya Avatar"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

             
              {[
                {
                  icon: <Mail className="w-6 h-6 text-neon" />,
                  label: 'Email',
                  value: 'adithya@example.com',
                },
                {
                  icon: <Phone className="w-6 h-6 text-neon" />,
                  label: 'Phone',
                  value: '+94 77 123 4567',
                },
                {
                  icon: <MapPin className="w-6 h-6 text-neon" />,
                  label: 'Location',
                  value: 'Colombo, Sri Lanka',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <p className="text-titleText font-semibold">{item.label}</p>
                    <p className="text-textMain">{item.value}</p>
                  </div>
                </div>
              ))}

             
              <div className="mt-10 flex flex-wrap gap-6">
                {socialLinks.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-neon text-2xl hover:text-primaryBlue transition-colors duration-300"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </motion.div>

            
            <motion.form
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Form submitted ✨');
              }}
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-transparent border border-divider px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-transparent border border-divider px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon"
                required
              />
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full bg-transparent border border-divider px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-secondaryBlue to-primaryBlue text-white font-semibold py-3 px-8 rounded-xl hover:scale-105 transition transform duration-300 shadow-lg"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
