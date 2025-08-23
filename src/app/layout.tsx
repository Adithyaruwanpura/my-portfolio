import type { Metadata } from "next";
import './globals.css';
import { ModeProvider } from '@/context/ModeContext';

export const metadata: Metadata = {
  title: "Adithya Ruwanpura | Portfolio",
  description: "Front-End Developer & UI/UX Designer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased font-poppins bg-bgNavy text-textMain">
        <ModeProvider>
          {children}
        </ModeProvider>
      </body>
    </html>
  );
}
