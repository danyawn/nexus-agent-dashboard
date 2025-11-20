'use client';

import React, { ReactNode } from 'react';
import SplashScreen from '@/components/SplashScreen';

interface LayoutClientProps {
  children: ReactNode;
}

export default function LayoutClient({ children }: LayoutClientProps) {
  return (
    <>
      <SplashScreen />
      {children}
    </>
  );
}
