'use client';

import React, { useState } from 'react';
import { Activity, AlertCircle, Zap } from 'lucide-react';

interface AgentMetrics {
  knowledgeBase: number;
  uptime: number;
  dailyCost: number;
}

interface Agent {
  id: string;
  name: string;
  role: string;
  model: string;
  status: 'active' | 'idle' | 'training';
  metrics: AgentMetrics;
}

const mockAgents: Agent[] = [
  {
    id: 'unit-734',
    name: 'Unit-734',
    role: 'Sentiment Analysis',
    model: 'GPT-4-Turbo',
    status: 'active',
    metrics: { knowledgeBase: 128, uptime: 2847, dailyCost: 15.42 }
  },
  {
    id: 'logic-9',
    name: 'Logic-9',
    role: 'Crypto Trader',
    model: 'Claude-3-Opus',
    status: 'active',
    metrics: { knowledgeBase: 256, uptime: 3156, dailyCost: 22.87 }
  },
  {
    id: 'cipher-42',
    name: 'Cipher-42',
    role: 'Data Encryption',
    model: 'GPT-4-Turbo',
    status: 'training',
    metrics: { knowledgeBase: 64, uptime: 156, dailyCost: 8.23 }
  },
  {
    id: 'nexus-7',
    name: 'Nexus-7',
    role: 'Network Monitor',
    model: 'Claude-3-Opus',
    status: 'idle',
    metrics: { knowledgeBase: 192, uptime: 1842, dailyCost: 12.15 }
  },
  {
    id: 'vortex-11',
    name: 'Vortex-11',
    role: 'Pattern Recognition',
    model: 'GPT-4-Turbo',
    status: 'active',
    metrics: { knowledgeBase: 320, uptime: 2941, dailyCost: 18.95 }
  },
  {
    id: 'phoenix-88',
    name: 'Phoenix-88',
    role: 'System Recovery',
    model: 'Claude-3-Opus',
    status: 'training',
    metrics: { knowledgeBase: 96, uptime: 287, dailyCost: 9.67 }
  }
];

type FilterType = 'all' | 'active' | 'training';

const AgentFleet: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredAgents = mockAgents.filter(agent => {
    if (filter === 'all') return true;
    return agent.status === filter;
  });

  const getStatusIcon = (status: Agent['status']) => {
    switch (status) {
      case 'active':
        return <Activity size={14} className="text-[var(--emerald)]" />;
      case 'training':
        return <Zap size={14} className="text-[var(--neon-purple)]" />;
      case 'idle':
        return <AlertCircle size={14} className="text-white/50" />;
    }
  };

  const getStatusColor = (status: Agent['status']) => {
    switch (status) {
      case 'active':
        return 'text-[var(--emerald)]';
      case 'training':
        return 'text-[var(--neon-purple)]';
      case 'idle':
        return 'text-white/50';
    }
  };

  return (
    <div className="w-full">
      {/* Filter Bar - Horizontally scrollable on mobile */}
      <div className="flex gap-3 mb-6 md:mb-8 overflow-x-auto pb-2 scrollbar-hide">
        {(['all', 'active', 'training'] as const).map((filterOption) => (
          <button
            key={filterOption}
            onClick={() => setFilter(filterOption)}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 flex-shrink-0 whitespace-nowrap ${
              filter === filterOption
                ? 'bg-[var(--primary)] text-black shadow-[0_0_15px_rgba(13,242,242,0.3)]'
                : 'bg-white/5 text-white/70 border border-white/10 hover:border-[var(--primary)]/50 hover:text-white'
            }`}
          >
            {filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}
          </button>
        ))}
      </div>

      {/* Agent Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAgents.map((agent) => (
          <div
            key={agent.id}
            className="group rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-[var(--primary)] hover:bg-white/10 hover:shadow-[0_0_20px_rgba(13,242,242,0.2)]"
          >
            {/* Card Header */}
            <div className="p-4 md:p-5 border-b border-white/5">
              <div className="flex items-start justify-between gap-2 md:gap-3 mb-2 flex-wrap">
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-bold text-base md:text-lg break-words">{agent.name}</h3>
                  <p className="text-white/60 text-xs md:text-sm">{agent.role}</p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <div className={`w-2 h-2 rounded-full ${
                    agent.status === 'active'
                      ? 'bg-[var(--emerald)] pulse-dot'
                      : agent.status === 'training'
                      ? 'bg-[var(--neon-purple)]'
                      : 'bg-white/30'
                  }`}></div>
                </div>
              </div>
              <p className="text-white/50 text-xs font-mono">{agent.model}</p>
            </div>

            {/* Card Body - Metrics Grid */}
            <div className="p-4 md:p-5">
              <div className="grid grid-cols-2 gap-3 lg:gap-4">
                <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                  <p className="text-white/50 text-xs font-mono mb-1">KNOWLEDGE</p>
                  <p className="text-[var(--primary)] font-mono font-bold text-base md:text-lg">
                    {agent.metrics.knowledgeBase}
                  </p>
                  <p className="text-white/40 text-xs font-mono">GB</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                  <p className="text-white/50 text-xs font-mono mb-1">UPTIME</p>
                  <p className="text-[var(--primary)] font-mono font-bold text-base md:text-lg">
                    {agent.metrics.uptime}
                  </p>
                  <p className="text-white/40 text-xs font-mono">HRS</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3 border border-white/5 col-span-2">
                  <p className="text-white/50 text-xs font-mono mb-1">DAILY COST</p>
                  <p className="text-[var(--primary)] font-mono font-bold text-base md:text-lg">
                    ${agent.metrics.dailyCost.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>

            {/* Card Footer - Responsive button layout */}
            <div className="p-4 md:p-5 border-t border-white/5 flex flex-col gap-2 lg:flex-row lg:gap-3">
              <button className="w-full px-3 py-2 rounded-lg bg-transparent border border-white/20 text-white/70 text-xs md:text-sm font-bold hover:border-white/40 hover:text-white transition-all duration-200">
                Diagnostics
              </button>
              <button className="w-full px-3 py-2 rounded-lg bg-transparent border border-red-500/50 text-red-500/70 text-xs md:text-sm font-bold hover:border-red-500 hover:text-red-500 transition-all duration-200">
                Reboot System
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentFleet;
