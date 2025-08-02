'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { BsRobot, BsX } from 'react-icons/bs';

type Message = {
  from: 'bot' | 'user';
  text: string;
};

const portfolioFAQ = [
  {
    question: 'Who are you?',
    answer: `I'm Adithya Ruwanpura, a passionate Fullstack Developer & UI/UX Designer.`,
  },
  {
    question: 'What skills do you have?',
    answer: `I specialize in JavaScript, React, Next.js, UI/UX design, animations, and modern web technologies.`,
  },
  {
    question: 'Can I see your projects?',
    answer: `Sure! Head to the Projects section to see my latest and greatest works.`,
  },
  {
    question: 'How can I contact you?',
    answer: `Just scroll down to the Contact section — email, socials, and forms are all there.`,
  },
  {
    question: 'Can you teach me to build a portfolio?',
    answer: `Absolutely! Let me break it into simple steps for you.`,
  },
  {
    question: 'What tools do you use?',
    answer: 'I use Figma for design, VS Code for development, and Git/GitHub for version control.',
  },
  {
    question: 'Why did you build this site?',
    answer: 'To showcase my work and help others get inspired by modern web design.',
  },
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
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      from: 'bot',
      text: 'Beep boop! I’m AdhiBot, your digital buddy 🤖\nCurious about this portfolio? ',
    },
  ]);
  const chatRef = useRef<HTMLDivElement>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [cuteQuoteIndex, setCuteQuoteIndex] = useState(0);
  const [showQuote, setShowQuote] = useState(false);

  // Create audio object once
  const popSound = useRef<HTMLAudioElement | null>(null);
  useEffect(() => {
    popSound.current = new Audio('/pop.mp3');
  }, []);

  const sendMessage = (text: string, isFromUser: boolean) => {
    setMessages(prev => [...prev, { from: isFromUser ? 'user' : 'bot', text }]);
  };

  // Auto-scroll to bottom on new message
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo({
        top: chatRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  // Handle Q&A interaction with sound
  const handleQuestionClick = (faq: (typeof portfolioFAQ)[number]) => {
    // Play pop sound on click
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

  // Cute Quotes Timer
  useEffect(() => {
    const interval = setInterval(() => {
      setCuteQuoteIndex((prev) => (prev + 1) % cuteQuotes.length);
      setShowQuote(true);
      setTimeout(() => setShowQuote(false), 4000); // Hide after 4s
    }, 20000); // Every 20s
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Floating Bot Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-10 right-8 z-50"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full p-4 shadow-xl bg-gradient-to-br from-primaryBlue to-neon hover:shadow-[0_0_30px_#00D8FF] transition-all duration-300 relative"
          aria-label="Toggle chat bot"
        >
          <BsRobot className="text-white text-2xl animate-pulse" />

          {/* Cute Quote Bubble */}
          {showQuote && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: -40 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute -top-10 right-0 text-sm px-3 py-2 rounded-xl shadow-lg bg-white/10 backdrop-blur-sm text-neon border border-neon"
              style={{
                fontFamily: 'cursive',
                boxShadow: '0 0 12px #00D8FF',
                whiteSpace: 'nowrap',
              }}
            >
              {cuteQuotes[cuteQuoteIndex]}
            </motion.div>
          )}
        </button>
      </motion.div>

      {/* Chat Popup */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="fixed bottom-24 right-8 z-50 w-80 max-w-full bg-bgNavy rounded-2xl shadow-xl border border-divider flex flex-col"
        >
          {/* Header */}
          <div className="flex justify-between items-center px-4 py-3 border-b border-divider rounded-t-2xl">
            <h3 className="text-white font-semibold text-lg flex items-center gap-2">
              Adhi <BsRobot />
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition"
              aria-label="Close chat"
            >
              <BsX size={24} />
            </button>
          </div>

          {/* Question List */}
          <div className="px-4 pt-3 pb-1 space-y-2">
            {portfolioFAQ.map((faq, i) => (
              <button
                key={i}
                onClick={() => handleQuestionClick(faq)}
                className="w-full text-left text-sm bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-lg transition"
              >
                💬 {faq.question}
              </button>
            ))}
          </div>

          {/* Messages */}
          <div
            ref={chatRef}
            className="flex-1 overflow-y-auto px-4 py-3 space-y-3 max-h-72 scrollbar-thin scrollbar-thumb-neon scrollbar-track-bgNavy"
            id="chatMessages"
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`rounded-lg px-4 py-2 max-w-[70%] ${
                    msg.from === 'user'
                      ? 'bg-primaryBlue text-white'
                      : 'bg-gradient-to-r from-neon to-primaryBlue text-bgNavy'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="rounded-lg px-4 py-2 max-w-[40%] bg-gradient-to-r from-neon to-primaryBlue text-bgNavy animate-pulse select-none">
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
