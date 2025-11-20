'use client';

import React from 'react';
import TopBar from '@/components/TopBar';
import SwarmVisualizer from '@/components/SwarmVisualizer';
import PageTransition from '@/components/PageTransition';

export default function AnalyticsPage() {
  return (
    <PageTransition>
      <div className="relative flex h-auto w-full flex-col">
        <TopBar />
        <div className="p-8">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-white">Swarm Intelligence Map</h1>
            <p className="text-white/60">Real-time neural density visualization</p>
          </div>

          {/* Area ini yang akan diisi Fusion */}
          <div className="w-full h-[600px] glass-panel rounded-xl overflow-hidden relative flex items-center justify-center">
            <SwarmVisualizer />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
