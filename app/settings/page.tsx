'use client';

import React from 'react';
import TopBar from '@/components/TopBar';
import SettingsPanel from '@/components/SettingsPanel';
import PageTransition from '@/components/PageTransition';

export default function SettingsPage() {
  return (
    <PageTransition>
      <div className="relative flex h-auto w-full flex-col">
        <TopBar />
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              System Configuration
            </h1>
            <p className="text-white/60 font-mono">
              Manage neural parameters & security protocols
            </p>
          </div>

          {/* Area ini akan diisi komponen Fusion */}
          <div className="max-w-3xl">
            <SettingsPanel />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
