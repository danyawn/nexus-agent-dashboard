'use client';

import React from 'react';
import Sidebar from '@/components/Sidebar';
import TopBar from '@/components/TopBar';
import LogVault from '@/components/LogVault'; // new component

export default function LogsPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#0A0A0F]">
      <div className="flex h-full w-full">
        <Sidebar />
        <main className="flex-1 pl-64 flex flex-col h-screen overflow-hidden">
          <TopBar />
          
          {/* Full Height Container for Logs */}
          <div className="flex-1 p-6 overflow-hidden flex flex-col">
            <div className="flex items-center gap-3 mb-4">
               <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
               <h2 className="text-white font-mono text-sm tracking-widest">LIVE KERNEL STREAM // PORT 8080</h2>
            </div>
            
            {/* The Fusion Component fills the remaining space */}
            <div className="flex-1 glass-panel rounded-xl overflow-hidden border border-white/10 relative">
              <LogVault />
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}