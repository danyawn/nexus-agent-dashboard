'use client';

import React from 'react';
import Sidebar from '@/components/Sidebar';
import TopBar from '@/components/TopBar';
import SettingsPanel from '@/components/SettingsPanel';
import PageTransition from '@/components/PageTransition';

export default function SettingsPage() {
  return (
    <PageTransition>
      <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#0A0A0F]">
        <div className="flex h-full w-full">
          <Sidebar />
          <main className="flex-1 pl-64">
            <TopBar />
            <div className="p-8">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-white mb-2">System Configuration</h1>
                <p className="text-white/60 font-mono">Manage neural neural parameters & security protocols</p>
              </div>

              {/* Area ini akan diisi komponen Fusion */}
              <div className="max-w-3xl">
                 <SettingsPanel />
              </div>
            </div>
          </main>
        </div>
      </div>
    </PageTransition>
  );
}
