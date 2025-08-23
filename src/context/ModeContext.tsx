'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type ModeType = 'frontend' | 'backend';

interface ModeContextProps {
  mode: ModeType;
  toggleMode: () => void;
}

const ModeContext = createContext<ModeContextProps | undefined>(undefined);

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ModeType>('frontend');

  const toggleMode = () => {
    setMode(prev => (prev === 'frontend' ? 'backend' : 'frontend'));
    document.body.classList.toggle('backend-mode'); // keep body class toggle here too
  };

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const context = useContext(ModeContext);
  if (!context) throw new Error('useMode must be used within ModeProvider');
  return context;
}
