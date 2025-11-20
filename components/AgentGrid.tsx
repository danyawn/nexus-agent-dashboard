'use client';

import React, { useState } from 'react';
import { Search, Plus } from 'lucide-react'; // Tambah import Plus
import DeployAgentModal from './DeployAgentModal'; // Import Modal Fusion

interface Agent {
  id: string;
  name: string;
  status: 'active' | 'error' | 'idle';
  cpu: number;
  memory: number;
  uptime: string;
  tasks: number;
  model?: string; // Tambahan field model
}

const AgentGrid: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // State untuk Modal

  // Kita ubah agents jadi state agar bisa ditambah dinamis
  const [agents, setAgents] = useState<Agent[]>([
    {
      id: 'alpha-001',
      name: 'Agent-Alpha-001',
      status: 'active',
      cpu: 85,
      memory: 62,
      uptime: '24h 15m',
      tasks: 42,
      model: 'GPT-4o'
    },
    {
      id: 'beta-007',
      name: 'Agent-Beta-007',
      status: 'active',
      cpu: 92,
      memory: 128,
      uptime: '18h 32m',
      tasks: 28,
      model: 'Claude-3.5'
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
  ]);

  // Fungsi Menangani Submit dari Modal Fusion
  const handleDeployNewAgent = (data: { agentName: string; modelArchitecture: string }) => {
    const newAgent: Agent = {
      id: `new-${Date.now()}`,
      name: data.agentName || 'Unknown-Agent', // Fallback name
      status: 'active', // Default langsung active biar keren
      cpu: Math.floor(Math.random() * 30) + 10, // Random CPU saat start
      memory: 16,
      uptime: '0m 01s',
      tasks: 1,
      model: data.modelArchitecture
    };

    // Masukkan ke paling atas list
    setAgents([newAgent, ...agents]);
    setIsModalOpen(false); // Tutup modal
  };

  const filteredAgents = agents.filter(agent =>
    agent.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Helpers Styling (Tetap sama)
  const getStatusColor = (status: Agent['status']) => {
    switch (status) {
      case 'active': return 'bg-emerald-500';
      case 'error': return 'bg-red-500';
      case 'idle': return 'bg-yellow-400';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: Agent['status']) => {
    switch (status) {
      case 'active': return 'text-emerald-500';
      case 'error': return 'text-red-500';
      case 'idle': return 'text-yellow-400';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="glass-panel rounded-xl p-6 h-full relative">

      {/* Render Modal Fusion */}
      {/* Perhatikan kita passing isOpen dan Handler */}
      <DeployAgentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onInitialize={handleDeployNewAgent}
      />

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
          Agent Status
        </h2>

        <div className="flex gap-3">
          {/* TOMBOL PEMICU MODAL (WINNING FEATURE) */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-[var(--primary)] text-black px-4 py-1.5 rounded-lg hover:bg-[#00e8e8] hover:shadow-[0_0_15px_rgba(13,242,242,0.4)] transition-all text-sm font-bold"
          >
            <Plus size={16} strokeWidth={3} />
            <span>Deploy Swarm</span>
          </button>

          {/* Search Bar Existing */}
          <div className="flex items-center gap-2 text-white/60 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg max-w-xs w-full">
            <Search className="text-lg" size={18} />
            <input
              type="text"
              placeholder="Search agents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent border-0 focus:ring-0 focus:outline-none text-sm text-white placeholder:text-white/60 p-0"
            />
          </div>
        </div>
      </div>

      {/* Agents List */}
      <div className="space-y-3 overflow-y-auto max-h-[400px] pr-2 custom-scrollbar">
        {filteredAgents.map((agent) => (
          <div key={agent.id} className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-200 border border-transparent hover:border-white/5">
            {/* Left Side */}
            <div className="flex items-center gap-4">
              <div className={`w-2.5 h-2.5 rounded-full ${getStatusColor(agent.status)} ${agent.status === 'active' ? 'pulse-dot glow-border-green' : ''}`}></div>
              <div>
                <h3 className="font-medium text-white text-base flex items-center gap-2">
                  {agent.name}
                  {/* Tampilkan badge model jika ada (hasil dari modal) */}
                  {agent.model && (
                    <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-white/50 border border-white/5 uppercase tracking-wider">
                      {agent.model}
                    </span>
                  )}
                </h3>
                <p className="text-white/60 text-sm font-mono mt-0.5">
                  {agent.status === 'active' ? 'Processing Task...' : 'System Standby'}
                </p>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-6 text-sm text-white/80">
              <span className="font-mono text-white/50">CPU: {agent.cpu}%</span>
              <span className={`font-mono font-semibold ${getStatusText(agent.status)}`}>
                {agent.status.toUpperCase()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentGrid;