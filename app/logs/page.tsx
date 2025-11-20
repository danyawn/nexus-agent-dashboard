'use client';

import React from 'react';
import Sidebar from '@/components/Sidebar';
import TopBar from '@/components/TopBar';
import { Lock } from 'lucide-react';

export default function PlaceholderPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#0A0A0F]">
      <div className="flex h-full w-full">
        <Sidebar />
        <main className="flex-1 pl-64">
          <TopBar />
          <div className="p-8 h-[calc(100vh-5rem)] flex items-center justify-center">
            <div className="text-center space-y-4 opacity-50">
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto border border-white/10">
                <Lock className="text-[var(--primary)]" size={32} />
              </div>
              <h2 className="text-2xl font-bold text-white">RESTRICTED ACCESS</h2>
              <p className="text-white/60 font-mono">User Level 5 Clearance Required for this module.</p>
              <div className="inline-block px-3 py-1 rounded border border-white/20 text-xs font-mono text-white/40 mt-4">
                SYSTEM_LOCK_ERR_403
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}