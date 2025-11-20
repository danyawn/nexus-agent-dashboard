'use client';

import React, { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import SplashScreen from '@/components/SplashScreen';
import DashboardLayout from '@/components/DashboardLayout';

interface LayoutClientProps {
  children: ReactNode;
}

export default function LayoutClient({ children }: LayoutClientProps) {
  const pathname = usePathname();
  const isLandingPage = pathname === '/landing';

  return (
    <>
      {!isLandingPage && <SplashScreen />}
      {isLandingPage ? children : <DashboardLayout>{children}</DashboardLayout>}
    </>
  );
}
