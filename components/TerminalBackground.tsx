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
      }}
    >
      <TerminalUI
        scale={1.0}
        gridMul={[2, 1]}
        digitSize={1.2}
        timeScale={0.8}
        pause={false}
        scanlineIntensity={0.8}
        glitchAmount={0.8}
        flickerAmount={0.6}
        noiseAmp={0.8}
        chromaticAberration={0}
        dither={0}
        curvature={0}
        tint="#00FF7F"
        mouseReact={true}
        mouseStrength={0.5}
        pageLoadAnimation={false}
        brightness={0.85}
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
