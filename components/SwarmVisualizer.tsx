'use client';

import React, { useMemo } from 'react';

interface HexCell {
  id: number;
  heatLevel: 0 | 1 | 2 | 3;
}

const SwarmVisualizer: React.FC = () => {
  const hexCells = useMemo(() => {
    const cells: HexCell[] = [];
    
    // Generate 50 hex cells with random heat levels on mount
    for (let i = 0; i < 50; i++) {
      cells.push({
        id: i,
        heatLevel: Math.floor(Math.random() * 4) as 0 | 1 | 2 | 3,
      });
    }
    
    return cells;
  }, []);

  const getHexCellStyles = (heatLevel: 0 | 1 | 2 | 3) => {
    switch (heatLevel) {
      case 0:
        return 'bg-white/5';
      case 1:
        return 'bg-[var(--primary)]/20';
      case 2:
        return 'bg-[var(--primary)]/50';
      case 3:
        return 'bg-[var(--neon-purple)] animate-pulse';
      default:
        return 'bg-white/5';
    }
  };

  return (
    <div className="glass-panel rounded-xl p-6 h-full">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white mb-1">Swarm Visualizer</h2>
        <p className="text-xs text-gray-500">Living digital hive of AI nodes</p>
      </div>

      {/* Hexagonal Grid Container */}
      <div className="flex flex-wrap justify-center items-center gap-1">
        {hexCells.map((cell) => (
          <div
            key={cell.id}
            className={`transition-all duration-200 hover:scale-110 hover:bg-[var(--primary)] cursor-pointer ${getHexCellStyles(cell.heatLevel)}`}
            style={{
              width: '60px',
              height: '68px',
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              margin: '2px',
            }}
          />
        ))}
      </div>

      {/* Legend */}
      <div className="mt-6 flex items-center justify-center gap-6 flex-wrap">
        <div className="flex items-center gap-2">
          <div
            className="bg-white/5"
            style={{
              width: '24px',
              height: '28px',
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            }}
          ></div>
          <span className="text-xs text-gray-400">Idle</span>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="bg-[var(--primary)]/20"
            style={{
              width: '24px',
              height: '28px',
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            }}
          ></div>
          <span className="text-xs text-gray-400">Low</span>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="bg-[var(--primary)]/50"
            style={{
              width: '24px',
              height: '28px',
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            }}
          ></div>
          <span className="text-xs text-gray-400">Medium</span>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="bg-[var(--neon-purple)] animate-pulse"
            style={{
              width: '24px',
              height: '28px',
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            }}
          ></div>
          <span className="text-xs text-gray-400">High</span>
        </div>
      </div>
    </div>
  );
};

export default SwarmVisualizer;
