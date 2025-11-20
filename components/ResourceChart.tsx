'use client';

import React, { useMemo } from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Cpu, HardDrive, Zap, Activity } from 'lucide-react';

interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    color: string;
  }>;
  label?: string;
}

// Move CustomTooltip outside of component to avoid recreation during render
const CustomTooltip: React.FC<TooltipProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-panel rounded-lg p-3 border border-[var(--glass-border)]">
        <p className="text-sm text-gray-300 mb-2">{`Time: ${label}`}</p>
        {payload.map((entry, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value}%`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const ResourceChart: React.FC = () => {
  // Generate mock time series data using useMemo to avoid impure function calls
  const timeSeriesData = useMemo(() => {
    const data = [];
    const now = new Date();

    // Use a simple deterministic function instead of Math.random
    const seededRandom = (index: number) => {
      const x = Math.sin(index) * 10000;
      return x - Math.floor(x);
    };

    for (let i = 23; i >= 0; i--) {
      const time = new Date(now.getTime() - i * 60 * 60 * 1000);
      data.push({
        time: time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }),
        cpu: Math.floor(seededRandom(i + 1) * 30) + 40 + (i === 0 ? 20 : 0), // Spike at current time
        memory: Math.floor(seededRandom(i + 2) * 25) + 45,
        network: Math.floor(seededRandom(i + 3) * 40) + 20,
        disk: Math.floor(seededRandom(i + 4) * 15) + 60,
      });
    }

    return data;
  }, []); // Empty dependency array means this runs once on mount

  const currentMetrics = timeSeriesData[timeSeriesData.length - 1];

  const metricCards = [
    {
      name: 'CPU Usage',
      value: currentMetrics?.cpu || 0,
      icon: Cpu,
      color: 'text-[var(--primary)]',
      bgColor: 'bg-[var(--primary)]/20',
      borderColor: 'border-[var(--primary)]/30',
    },
    {
      name: 'Memory',
      value: currentMetrics?.memory || 0,
      icon: Activity,
      color: 'text-[var(--emerald)]',
      bgColor: 'bg-[var(--emerald)]/20',
      borderColor: 'border-[var(--emerald)]/30',
    },
    {
      name: 'Network',
      value: currentMetrics?.network || 0,
      icon: Zap,
      color: 'text-[var(--neon-purple)]',
      bgColor: 'bg-[var(--neon-purple)]/20',
      borderColor: 'border-[var(--neon-purple)]/30',
    },
    {
      name: 'Disk I/O',
      value: currentMetrics?.disk || 0,
      icon: HardDrive,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/20',
      borderColor: 'border-yellow-500/30',
    },
  ];

  return (
    <div className="glass-panel rounded-xl p-6 h-full">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white mb-1">Resource Utilization</h2>
        <p className="text-xs text-gray-500">Real-time system metrics</p>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {metricCards.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div
              key={index}
              className={`glass-panel rounded-lg p-4 border ${metric.borderColor} ${metric.bgColor}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon size={16} className={metric.color} />
                  <span className="text-xs text-gray-300">{metric.name}</span>
                </div>
                <span className={`text-lg font-bold ${metric.color}`}>
                  {metric.value}%
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Chart */}
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={timeSeriesData}>
            <defs>
              <linearGradient id="cpuGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0df2f2" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#0df2f2" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="memoryGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00FF7F" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#00FF7F" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="networkGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#9D00FF" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#9D00FF" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.05)" />
            <XAxis
              dataKey="time"
              stroke="#9CA3AF"
              fontSize={10}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#9CA3AF"
              fontSize={10}
              tickLine={false}
              axisLine={false}
              domain={[0, 100]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="cpu"
              stroke="#0df2f2"
              fillOpacity={1}
              fill="url(#cpuGradient)"
              strokeWidth={2}
              name="CPU"
            />
            <Area
              type="monotone"
              dataKey="memory"
              stroke="#00FF7F"
              fillOpacity={1}
              fill="url(#memoryGradient)"
              strokeWidth={2}
              name="Memory"
            />
            <Area
              type="monotone"
              dataKey="network"
              stroke="#9D00FF"
              fillOpacity={1}
              fill="url(#networkGradient)"
              strokeWidth={2}
              name="Network"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[var(--primary)]"></div>
          <span className="text-xs text-gray-400">CPU</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[var(--emerald)]"></div>
          <span className="text-xs text-gray-400">Memory</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[var(--neon-purple)]"></div>
          <span className="text-xs text-gray-400">Network</span>
        </div>
      </div>
    </div>
  );
};

export default ResourceChart;