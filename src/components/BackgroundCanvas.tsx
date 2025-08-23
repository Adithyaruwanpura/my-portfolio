'use client';

import { useRef, useEffect } from 'react';
import { useMode } from '@/context/ModeContext';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export default function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { mode } = useMode();
  const isBackendMode = mode === 'backend';

  const particles: Particle[] = [];
  const numParticles = 100;
  const maxDistance = 120;
  const radius = 2;
  const mouse = { x: -1000, y: -1000 };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      if (isBackendMode) {
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, '#0A0A23');
        gradient.addColorStop(1, '#000000');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (!isBackendMode && dist < 80) {
          p.vx -= dx * 0.0005;
          p.vy -= dy * 0.0005;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        if (isBackendMode) {
          ctx.fillStyle = '#1E293B';
          ctx.shadowBlur = 0;
        } else {
          ctx.fillStyle = '#59C3FF';
          ctx.shadowColor = '#59C3FF';
          ctx.shadowBlur = 10;
        }
        ctx.fill();
        ctx.closePath();

        if (!isBackendMode) {
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < maxDistance) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(89, 195, 255, ${1 - distance / maxDistance})`;
              ctx.lineWidth = 1;
              ctx.shadowColor = '#59C3FF';
              ctx.shadowBlur = 4;
              ctx.stroke();
              ctx.shadowBlur = 0;
              ctx.closePath();
            }
          }
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isBackendMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
}
