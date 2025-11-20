'use client';

import React, { useEffect, useRef } from 'react';
import TerminalUI from '@/components/ui/TerminalUI';

export default function TerminalBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Set fixed dimensions after mount to ensure proper rendering
    const setDimensions = () => {
      if (containerRef.current) {
        containerRef.current.style.width = window.innerWidth + 'px';
        containerRef.current.style.height = window.innerHeight + 'px';
      }
    };

    setDimensions();

    const handleResize = () => {
      setDimensions();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        overflow: 'hidden',
        over
      }}
    >
      <TerminalUI
        scale={2.4}
        gridMul={[2, 1]}
        digitSize={1.2}
        timeScale={0.5}
        pause={false}
        scanlineIntensity={0.5}
        glitchAmount={1}
        flickerAmount={1}
        noiseAmp={1}
        chromaticAberration={0}
        dither={0}
        curvature={0.1}
        tint="#a7ef9e"
        mouseReact={false}
        mouseStrength={0.5}
        pageLoadAnimation={false}
        brightness={0.6}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
    </div>
  );
}
