'use client';

import { useState, useEffect, useRef } from 'react';
import { BsRobot, BsX } from 'react-icons/bs';
import { useMode } from '@/context/ModeContext';

type Message = {
  from: 'bot' | 'user';
  text: string;
};

const FAQ = [
  { q: 'Who are you?', a: "I'm Adithya Ruwanpura, Fullstack Developer & UI/UX Designer." },
  { q: 'What skills do you have?', a: 'React, Next.js, JavaScript, UI/UX, animations.' },
  { q: 'Can I see your projects?', a: 'Check the Projects section below.' },
  { q: 'How can I contact you?', a: 'Scroll to Contact section.' },
  { q: 'Can you teach me?', a: 'Yes! Follow simple steps below.' },
];

const GUIDE = [
  'Plan your portfolio structure.',
  'Design UI first (Figma).',
  'Code with React/Next.js.',
  'Add light animations.',
  'Deploy on Vercel.',
];

const QUOTES = [
  "✨ You're awesome!",
  "💖 Keep building!",
  "🐾 Stay consistent",
  "🌸 Learn every day",
];

export default function FloatingBot() {
  const { mode } = useMode();
  const isBackendMode = mode === 'backend';

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: 'bot', text: 'Hi! I’m AdhiBot 🤖' },
  ]);

  const [typing, setTyping] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);

  const chatRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const soundRef = useRef<HTMLAudioElement | null>(null);

  // lazy load sound
  useEffect(() => {
    soundRef.current = new Audio('/pop.mp3');
  }, []);

  // AUTO SCROLL (lightweight)
  useEffect(() => {
    if (!chatRef.current) return;
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages]);

  // QUOTES ONLY WHEN OPEN (IMPORTANT OPTIMIZATION)
  useEffect(() => {
    if (!open) return;

    intervalRef.current = setInterval(() => {
      setQuoteIndex((p) => (p + 1) % QUOTES.length);
    }, 25000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [open]);

  const send = (text: string, from: 'bot' | 'user') => {
    setMessages((p) => [...p, { text, from }]);
  };

  const handleFAQ = (item: (typeof FAQ)[number]) => {
    soundRef.current?.play();

    send(item.q, 'user');
    setTyping(true);

    setTimeout(() => {
      setTyping(false);
      send(item.a, 'bot');

      if (item.q.includes('teach')) {
        GUIDE.forEach((step, i) => {
          setTimeout(() => send(step, 'bot'), i * 800);
        });
      }
    }, 800);
  };

  return (
    <>
      {/* FLOAT BUTTON (NO FRAMER MOTION) */}
      <button
        onClick={() => setOpen(!open)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition
          ${isBackendMode ? 'bg-green-500' : 'bg-cyan-500'}`}
      >
        <BsRobot className="text-2xl text-white" />

        {/* SIMPLE QUOTE (NO ANIMATION LIB) */}
        {open && (
          <div className="absolute right-0 px-2 py-1 text-xs text-white rounded -top-10 bg-black/70">
            {QUOTES[quoteIndex]}
          </div>
        )}
      </button>

      {/* CHAT WINDOW */}
      {open && (
        <div
          className={`fixed bottom-20 right-6 z-50 w-80 rounded-xl border flex flex-col
            ${isBackendMode ? 'bg-black text-green-400 border-green-700' : 'bg-[#0A0A23] text-white'}`}
        >
          {/* HEADER */}
          <div className="flex items-center justify-between p-3 border-b border-gray-700">
            <span>AdhiBot 🤖</span>
            <button onClick={() => setOpen(false)}>
              <BsX />
            </button>
          </div>

          {/* FAQ */}
          <div className="p-2 space-y-2">
            {FAQ.map((f, i) => (
              <button
                key={i}
                onClick={() => handleFAQ(f)}
                className="w-full p-2 text-sm text-left rounded bg-white/10 hover:bg-white/20"
              >
                💬 {f.q}
              </button>
            ))}
          </div>

          {/* CHAT */}
          <div
            ref={chatRef}
            className="p-3 space-y-2 overflow-y-auto text-sm max-h-64"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`p-2 rounded max-w-[75%] ${m.from === 'user'
                    ? 'ml-auto bg-cyan-500 text-black'
                    : 'bg-gray-800'
                  }`}
              >
                {m.text}
              </div>
            ))}

            {typing && <div className="text-gray-400">typing...</div>}
          </div>
        </div>
      )}
    </>
  );
}