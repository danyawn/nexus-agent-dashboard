'use client';

import React, { ReactNode } from 'react';
import SplashScreen from '@/components/SplashScreen';
import DashboardLayout from '@/components/DashboardLayout';

interface LayoutClientProps {
  children: ReactNode;
}

export default function LayoutClient({ children }: LayoutClientProps) {
  return (
    <>
      <SplashScreen />
      <DashboardLayout>{children}</DashboardLayout>
    </>
  );
}
