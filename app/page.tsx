'use client';

import React from 'react';
import Sidebar from '@/components/Sidebar';
import TopBar from '@/components/TopBar';
import AgentGrid from '@/components/AgentGrid';
import TerminalFeed from '@/components/TerminalFeed';
import ResourceChart from '@/components/ResourceChart';
import TaskQueue from '@/components/TaskQueue';

export default function Home() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col">
      <div className="flex h-full w-full">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 pl-64">
          {/* Top Bar */}
          <TopBar />

          {/* Content Area */}
          <div className="p-8">
            {/* Bento Grid Layout */}
            <div className="grid grid-cols-3 gap-6">
              {/* Agent Grid - 2 columns, 2 rows */}
              <div className="col-span-2 row-span-2">
                <AgentGrid />
              </div>

              {/* Resource Chart - 1 column, 2 rows */}
              <div className="col-span-1 row-span-2">
                <ResourceChart />
              </div>

              {/* Task Queue - 1 column, 1 row */}
              <div className="col-span-1 row-span-1">
                <TaskQueue />
              </div>

              {/* Terminal Feed - 2 columns, 1 row */}
              <div className="col-span-2 row-span-1">
                <TerminalFeed />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
