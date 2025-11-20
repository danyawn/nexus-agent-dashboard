'use client';

import React from 'react';
import { Bell, User } from 'lucide-react';

const TopBar: React.FC = () => {
  const metrics = [
    { label: 'Active Agents', value: '128', color: 'text-[var(--emerald)]' },
    { label: 'CPU Load', value: '72%', color: 'text-[var(--primary)]' },
    { label: 'Network', value: '1.2 Gbps', color: 'text-[var(--neon-purple)]' },
  ];

  return (
    <div className="sticky top-0 z-10 h-auto md:h-20 glass-panel border-b border-white/10">
      <div className="h-full flex flex-col md:flex-row items-center justify-end px-4 md:px-8 py-3 md:py-3 gap-4 md:gap-6">
        <div className="flex flex-1 justify-end gap-4 md:gap-6 items-center w-full md:w-auto">
          {/* Metrics - Hidden on mobile, visible on md and up */}
          <div className="hidden md:flex items-center gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <p className="text-white/60 text-xs font-medium uppercase tracking-wider">
                  {metric.label}
                </p>
                <p className="text-white font-bold text-lg">{metric.value}</p>
              </div>
            ))}
            <div className="text-center">
              <p className="text-white/60 text-xs font-medium uppercase tracking-wider">
                Network I/O
              </p>
              <p className="text-white font-bold text-lg">1.2 Gbps</p>
            </div>
          </div>

          {/* Divider - Hidden on mobile */}
          <div className="hidden md:block h-8 w-px bg-white/10"></div>
        </div>

        {/* Right - Actions */}
        <div className="flex items-center gap-3 md:gap-4">
          <button className="flex items-center justify-center rounded-full h-9 md:h-10 w-9 md:w-10 bg-white/5 text-white/80 hover:text-[var(--primary)] hover:bg-[var(--primary)]/20 transition-colors">
            <Bell size={18} className="md:w-5 md:h-5" />
          </button>
          <div className="w-9 md:w-10 h-9 md:h-10 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--neon-purple)] flex items-center justify-center border-2 border-[var(--primary)] glow-border-primary cursor-pointer">
            <User size={16} className="md:w-4.5 md:h-4.5 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
