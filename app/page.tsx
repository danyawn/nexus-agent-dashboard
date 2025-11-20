'use client';

import React from 'react';
import TopBar from '@/components/TopBar';
import AgentGrid from '@/components/AgentGrid';
import TerminalFeed from '@/components/TerminalFeed';
import ResourceChart from '@/components/ResourceChart';
import TaskQueue from '@/components/TaskQueue';
import PageTransition from '@/components/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      <div className="relative flex h-auto w-full flex-col">
        {/* Top Bar */}
        <TopBar />

        {/* Content Area */}
        <div className="p-4 md:p-8">
          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* Agent Grid - 2 columns, 2 rows */}
            <div className="col-span-1 md:col-span-2 md:row-span-2">
              <AgentGrid />
            </div>

            {/* Resource Chart - 1 column, 2 rows */}
            <div className="col-span-1 md:row-span-2">
              <ResourceChart />
            </div>

            {/* Task Queue - 1 column, 1 row */}
            <div className="col-span-1">
              <TaskQueue />
            </div>

            {/* Terminal Feed - 2 columns, 1 row */}
            <div className="col-span-1 md:col-span-2">
              <TerminalFeed />
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
