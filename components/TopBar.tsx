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
    <div className="sticky top-0 z-10 h-20 glass-panel border-b border-white/10">
      <div className="h-full flex items-center justify-end px-8 py-3">
        <div className="flex flex-1 justify-end gap-6 items-center">
          {/* Metrics */}
          <div className="flex items-center gap-8">
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

          {/* Divider */}
          <div className="h-8 w-px bg-white/10"></div>

          {/* Right - Actions */}
          <div className="flex items-center gap-4">
            <button className="flex items-center justify-center rounded-full h-10 w-10 bg-white/5 text-white/80 hover:text-[var(--primary)] hover:bg-[var(--primary)]/20 transition-colors">
              <Bell size={20} />
            </button>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--neon-purple)] flex items-center justify-center border-2 border-[var(--primary)] glow-border-primary cursor-pointer">
              <User size={18} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;