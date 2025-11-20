'use client';

import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const SplashScreen: React.FC = () => {
  const [isComplete, setIsComplete] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        onComplete: () => {
          // Slide the container up to reveal the app
          gsap.to(containerRef.current, {
            yPercent: -100,
            duration: 1,
            ease: 'power4.inOut',
            onComplete: () => {
              setIsComplete(true);
            },
          });
        },
      });

      // Animation sequence
      // 1. Logo fade in
      timeline.from(
        logoRef.current,
        {
          opacity: 0,
          scale: 0.8,
          duration: 0.8,
        },
        0
      );

      // 2. Progress bar animation (0 to 100% width) - 2 seconds
      timeline.to(
        barRef.current,
        {
          scaleX: 1,
          duration: 2,
          ease: 'power2.inOut',
        },
        0.5
      );

      // 3. Text animation - SYSTEM BOOTING
      timeline.from(
        textRef.current,
        {
          opacity: 0,
          duration: 0.6,
        },
        0.8
      );

      // 4. Text change to ACCESS GRANTED (at 80% through the bar animation)
      timeline.to(
        textRef.current,
        {
          opacity: 0,
          duration: 0.3,
          onStart: () => {
            if (textRef.current) {
              textRef.current.textContent = 'ACCESS GRANTED';
            }
          },
        },
        1.8
      );

      timeline.to(
        textRef.current,
        {
          opacity: 1,
          duration: 0.3,
        },
        2.1
      );

      // 5. Hold on the final state before sliding out
      timeline.to({}, { duration: 0.6 });
    });

    return () => ctx.revert();
  }, []);

  if (isComplete) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-black flex flex-col items-center justify-center"
      style={{ zIndex: 9999 }}
    >
      {/* Logo Container */}
      <div
        ref={logoRef}
        className="mb-20 flex items-center justify-center"
      >
        <div className="relative">
          {/* Cyan glow effect */}
          <div className="absolute inset-0 bg-cyan-500/30 rounded-full blur-3xl"></div>
          {/* Logo */}
          <div className="relative text-cyan-400 text-9xl font-mono font-bold tracking-tighter drop-shadow-lg"
               style={{
                 textShadow: '0 0 30px rgba(13, 242, 242, 0.8), 0 0 60px rgba(13, 242, 242, 0.4)',
               }}>
            N
          </div>
        </div>
      </div>

      {/* Text - SYSTEM BOOTING / ACCESS GRANTED */}
      <div
        ref={textRef}
        className="mb-32 font-mono text-cyan-300 text-lg tracking-widest font-light"
      >
        SYSTEM BOOTING...
      </div>

      {/* Progress Bar Container */}
      <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
        {/* Progress Bar */}
        <div
          ref={barRef}
          className="h-full bg-cyan-500 rounded-full origin-left"
          style={{
            transform: 'scaleX(0)',
            backgroundColor: '#0df2f2',
          }}
        ></div>
      </div>
    </div>
  );
};

export default SplashScreen;
