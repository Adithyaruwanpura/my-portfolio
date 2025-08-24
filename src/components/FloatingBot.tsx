'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { BsRobot, BsX } from 'react-icons/bs';
import { useMode } from '@/context/ModeContext';

type Message = {
  from: 'bot' | 'user';
  text: string;
};

const portfolioFAQ = [
  { question: 'Who are you?', answer: `I'm Adithya Ruwanpura, a passionate Fullstack Developer & UI/UX Designer.` },
  { question: 'What skills do you have?', answer: `I specialize in JavaScript, React, Next.js, UI/UX design, animations, and modern web technologies.` },
  { question: 'Can I see your projects?', answer: `Sure! Head to the Projects section to see my latest and greatest works.` },
  { question: 'How can I contact you?', answer: `Just scroll down to the Contact section — email, socials, and forms are all there.` },
  { question: 'Can you teach me to build a portfolio?', answer: `Absolutely! Let me break it into simple steps for you.` },
  { question: 'What tools do you use?', answer: 'I use Figma for design, VS Code for development, and Git/GitHub for version control.' },
  { question: 'Why did you build this site?', answer: 'To showcase my work and help others get inspired by modern web design.' },
];

const portfolioGuide = [
  'Step 1: Plan your content — About, Projects, Skills, and Contact.',
  'Step 2: Design the layout with modern UI/UX principles.',
  'Step 3: Code with React or Next.js + Tailwind CSS.',
  'Step 4: Add animations with Framer Motion for wow-effect!',
  'Step 5: Make it responsive & deploy with Vercel or Netlify.',
];

const cuteQuotes = [
  "✨ You're awesome!",
  "💖 I looking you",
  "🐾 Become software engineer",
  "🌸 Develop skills...",
];

export default function FloatingBot() {
  const { mode } = useMode();
  const isBackendMode = mode === 'backend';

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: 'bot', text: 'Beep boop! I’m AdhiBot, your digital buddy 🤖\nCurious about this portfolio?' },
  ]);
  const chatRef = useRef<HTMLDivElement>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [cuteQuoteIndex, setCuteQuoteIndex] = useState(0);
  const [showQuote, setShowQuote] = useState(false);

  const popSound = useRef<HTMLAudioElement | null>(null);
  useEffect(() => {
    popSound.current = new Audio('/pop.mp3');
  }, []);

  const sendMessage = (text: string, isFromUser: boolean) => {
    setMessages(prev => [...prev, { from: isFromUser ? 'user' : 'bot', text }]);
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo({ top: chatRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages]);

  const handleQuestionClick = (faq: (typeof portfolioFAQ)[number]) => {
    if (popSound.current) {
      popSound.current.currentTime = 0;
      popSound.current.play();
    }

    sendMessage(faq.question, true);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      sendMessage(faq.answer, false);
      if (faq.question.toLowerCase().includes('teach')) {
        portfolioGuide.forEach((step, i) => {
          setTimeout(() => {
            sendMessage(step, false);
          }, (i + 1) * 1000);
        });
      }
    }, 1200);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCuteQuoteIndex((prev) => (prev + 1) % cuteQuotes.length);
      setShowQuote(true);
      setTimeout(() => setShowQuote(false), 4000);
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
 
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="fixed bottom-10 right-8 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`rounded-full p-4 shadow-xl transition-all duration-300 relative
            ${isBackendMode
              ? 'bg-green-500 hover:shadow-[0_0_30px_#22c55e]'
              : 'bg-gradient-to-br from-primaryBlue to-neon hover:shadow-[0_0_30px_#00D8FF]'
            }`}
          aria-label="Toggle chat bot"
        >
          <BsRobot className="text-white text-2xl animate-pulse" />

          {showQuote && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: -40 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className={`absolute -top-10 right-0 text-sm px-3 py-2 rounded-xl shadow-lg backdrop-blur-sm border
                ${isBackendMode
                  ? 'bg-green-900/50 text-green-400 border-green-500 font-mono'
                  : 'bg-white/10 text-neon border-neon'
                }`}
              style={{ boxShadow: isBackendMode ? '0 0 12px #22c55e' : '0 0 12px #00D8FF', whiteSpace: 'nowrap' }}
            >
              {cuteQuotes[cuteQuoteIndex]}
            </motion.div>
          )}
        </button>
      </motion.div>


      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className={`fixed bottom-24 right-8 z-50 w-80 max-w-full rounded-2xl shadow-xl border flex flex-col
            ${isBackendMode
              ? 'bg-black border-green-700 font-mono text-green-400'
              : 'bg-bgNavy border-divider text-white'
            }`}
        >
        
          <div className={`flex justify-between items-center px-4 py-3 border-b rounded-t-2xl
            ${isBackendMode ? 'border-green-700' : 'border-divider'}`}>
            <h3 className="flex items-center gap-2">
              Adhi <BsRobot />
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className={`transition ${isBackendMode ? 'text-green-500 hover:text-green-300' : 'text-gray-400 hover:text-white'}`}
              aria-label="Close chat"
            >
              <BsX size={24} />
            </button>
          </div>

          <div className="px-4 pt-3 pb-1 space-y-2">
            {portfolioFAQ.map((faq, i) => (
              <button
                key={i}
                onClick={() => handleQuestionClick(faq)}
                className={`w-full text-left text-sm px-3 py-2 rounded-lg transition
                  ${isBackendMode
                    ? 'bg-green-900/30 hover:bg-green-700/30 text-green-400'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
              >
                💬 {faq.question}
              </button>
            ))}
          </div>

       
          <div
            ref={chatRef}
            className={`flex-1 overflow-y-auto px-4 py-3 space-y-3 max-h-72 scrollbar-thin
              ${isBackendMode
                ? 'scrollbar-thumb-green-500 scrollbar-track-black'
                : 'scrollbar-thumb-neon scrollbar-track-bgNavy'
              }`}
            id="chatMessages"
          >
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`rounded-lg px-4 py-2 max-w-[70%] ${
                    msg.from === 'user'
                      ? (isBackendMode ? 'bg-green-700 text-green-100' : 'bg-primaryBlue text-white')
                      : (isBackendMode ? 'bg-green-900/70 border border-green-500 text-green-400' : 'bg-gradient-to-r from-neon to-primaryBlue text-bgNavy')
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className={`rounded-lg px-4 py-2 max-w-[40%] animate-pulse select-none
                  ${isBackendMode ? 'bg-green-900/70 border border-green-500 text-green-400' : 'bg-gradient-to-r from-neon to-primaryBlue text-bgNavy'}`}>
                  ...
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </>
  );
}
