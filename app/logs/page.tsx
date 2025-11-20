'use client';

import React from 'react';
import TopBar from '@/components/TopBar';
import LogVault from '@/components/LogVault';
import PageTransition from '@/components/PageTransition';

export default function LogsPage() {
  return (
    <PageTransition>
      <div className="relative flex h-auto w-full flex-col">
        <TopBar />

        {/* Full Height Container for Logs */}
        <div className="flex-1 p-6 overflow-hidden flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <h2 className="text-white font-mono text-sm tracking-widest">
              LIVE KERNEL STREAM // PORT 8080
            </h2>
          </div>

          {/* The Fusion Component fills the remaining space */}
          <div className="flex-1 glass-panel rounded-xl overflow-hidden border border-white/10 relative">
            <LogVault />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
