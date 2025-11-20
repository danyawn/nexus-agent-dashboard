'use client';

import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface Agent {
  id: string;
  name: string;
  status: 'active' | 'error' | 'idle';
  cpu: number;
  memory: number;
  uptime: string;
  tasks: number;
}

const AgentGrid: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const agents: Agent[] = [
    {
      id: 'alpha-001',
      name: 'Agent-Alpha-001',
      status: 'active',
      cpu: 85,
      memory: 62,
      uptime: '24h 15m',
      tasks: 42,
    },
    {
      id: 'beta-007',
      name: 'Agent-Beta-007',
      status: 'active',
      cpu: 92,
      memory: 128,
      uptime: '18h 32m',
      tasks: 28,
    },
    {
      id: 'gamma-003',
      name: 'Agent-Gamma-003',
      status: 'idle',
      cpu: 5,
      memory: 11,
      uptime: '18h 32m',
      tasks: 0,
    },
    {
      id: 'delta-004',
      name: 'Agent-Delta-004',
      status: 'error',
      cpu: 0,
      memory: 0,
      uptime: '2h 45m',
      tasks: 0,
    },
    {
      id: 'epsilon-002',
      name: 'Agent-Epsilon-002',
      status: 'active',
      cpu: 45,
      memory: 45,
      uptime: '36h 10m',
      tasks: 67,
    },
  ];

  const filteredAgents = agents.filter(agent =>
    agent.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: Agent['status']) => {
    switch (status) {
      case 'active':
        return 'bg-emerald-500';
      case 'error':
        return 'bg-red-500';
      case 'idle':
        return 'bg-yellow-400';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusText = (status: Agent['status']) => {
    switch (status) {
      case 'active':
        return 'text-emerald-500';
      case 'error':
        return 'text-red-500';
      case 'idle':
        return 'text-yellow-400';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="glass-panel rounded-xl p-6 h-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
          Agent Status
        </h2>
        <div className="flex items-center gap-2 text-white/60 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg max-w-xs w-full">
          <Search className="text-lg" size={18} />
          <input
            type="text"
            placeholder="Search agents, logs, task..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent border-0 focus:ring-0 focus:outline-none text-sm text-white placeholder:text-white/60 p-0"
          />
        </div>
      </div>

      {/* Agents List */}
      <div className="space-y-3">
        {filteredAgents.map((agent) => (
          <div key={agent.id} className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-200">
            {/* Left Side - Agent Info */}
            <div className="flex items-center gap-4">
              <div className={`w-2.5 h-2.5 rounded-full ${getStatusColor(agent.status)} ${agent.status === 'active' ? 'pulse-dot glow-border-green' : ''}`}></div>
              <div>
                <h3 className="font-medium text-white text-base">{agent.name}</h3>
                <p className="text-white/60 text-sm font-mono mt-0.5">
                  {agent.status === 'active' && agent.id === 'alpha-001' && 'Task: Data-Parsing-7B'}
                  {agent.status === 'active' && agent.id === 'epsilon-002' && 'Task: Code-Review-PR-451'}
                  {agent.status === 'error' && 'Task: Failed - OutOfMemory'}
                  {agent.status === 'idle' && 'Task: None'}
                </p>
              </div>
            </div>
            
            {/* Right Side - Metrics */}
            <div className="flex items-center gap-6 text-sm text-white/80">
              <span className="font-mono">CPU: {agent.cpu}%</span>
              <span className="font-mono">MEM: {agent.memory > 20 ? `${(agent.memory * 0.1).toFixed(1)}GB` : `${(agent.memory / 10).toFixed(1)}GB`}</span>
              <span className={`font-mono font-semibold ${getStatusText(agent.status)}`}>
                STATUS: {agent.status === 'active' ? 'ACTIVE' : agent.status === 'error' ? 'ERROR' : 'IDLE'}
              </span>
            </div>
          </div>
        ))}
      </div>

      {filteredAgents.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-400">No agents found matching &quot;{searchTerm}&quot;</p>
        </div>
      )}
    </div>
  );
};

export default AgentGrid;