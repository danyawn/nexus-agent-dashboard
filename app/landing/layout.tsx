import React, { ReactNode } from 'react';

export default function LandingLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <>{children}</>;
}
