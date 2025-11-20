'use client';

import React, { useLayoutEffect, useRef, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (containerRef.current) {
        // Animate from initial state to target state
        gsap.fromTo(
          containerRef.current,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power3.out',
          }
        );
      }
    });

    return () => ctx.revert();
  }, [pathname]);

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
}
