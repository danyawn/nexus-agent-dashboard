'use client';

import React from 'react';
import TopBar from '@/components/TopBar';
import AgentFleet from '@/components/AgentFleet';
import PageTransition from '@/components/PageTransition';
import { Bot, Plus } from 'lucide-react';

export default function AgentsPage() {
  return (
    <PageTransition>
      <div className="relative flex h-auto w-full flex-col">
        <TopBar />
        <div className="p-8">
          {/* Header Section */}
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                <Bot className="text-[var(--primary)]" size={32} />
                Fleet Command
              </h1>
              <p className="text-white/60 font-mono">
                Manage autonomous unit configurations & neural weights.
              </p>
            </div>

            {/* Manual "Add New" Button (Reuse style from dashboard) */}
            <button className="flex items-center gap-2 bg-[var(--primary)] text-black px-4 py-2 rounded-lg hover:bg-[#00e8e8] hover:shadow-[0_0_15px_rgba(13,242,242,0.4)] transition-all font-bold text-sm">
              <Plus size={18} />
              <span>PROVISION NEW UNIT</span>
            </button>
          </div>

          {/* The Fusion Component */}
          <div className="min-h-[500px]">
            <AgentFleet />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
