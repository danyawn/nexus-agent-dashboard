'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Download, ChevronDown } from 'lucide-react';

type LogLevel = 'INFO' | 'WARN' | 'ERROR' | 'CRITICAL';
type Service = 'Auth' | 'Payment' | 'Neural-Net' | 'Database';

interface LogEntry {
  id: number;
  timestamp: string;
  level: LogLevel;
  service: Service;
  message: string;
}

const generateLogEntries = (): LogEntry[] => {
  const services: Service[] = ['Auth', 'Payment', 'Neural-Net', 'Database'];
  const levels: LogLevel[] = ['INFO', 'WARN', 'ERROR', 'CRITICAL'];
  const messages = [
    'Heap overflow at 0x99F',
    'Handshake failed: timeout',
    'Memory flush complete',
    'Socket connection established',
    'Packet loss detected on link',
    'Database transaction rolled back',
    'Neural network training initiated',
    'Authentication token expired',
    'Buffer underrun on channel 7',
    'Payment gateway timeout',
    'Cache invalidation triggered',
    'SSL certificate validation failed',
    'Network interface up',
    'Disk I/O threshold exceeded',
    'Session state corrupted',
    'API rate limit reached',
    'Background task completed',
    'Memory leak detected in module',
    'Firewall rule applied',
    'Load balancer health check passed',
    'Request queue length critical',
    'Encryption key rotation started',
    'Service dependency unavailable',
    'Debug mode enabled',
    'Backup process initiated',
    'Thread pool exhausted',
    'Latency spike on primary route',
    'Configuration reload successful',
    'Warning: high CPU usage detected',
    'Critical: system resources low',
  ];

  const entries: LogEntry[] = [];
  const baseTime = new Date('2025-01-15T08:00:00Z').getTime();

  for (let i = 0; i < 30; i++) {
    const timestamp = new Date(baseTime + i * 3000).toISOString();
    const level = levels[i % levels.length];
    const service = services[i % services.length];
    const message = messages[i % messages.length];

    entries.push({
      id: i,
      timestamp,
      level,
      service,
      message,
    });
  }

  return entries;
};

const getLevelColor = (level: LogLevel): string => {
  switch (level) {
    case 'INFO':
      return 'bg-emerald text-black';
    case 'WARN':
      return 'bg-yellow-500 text-black';
    case 'ERROR':
      return 'bg-red-500 text-white';
    case 'CRITICAL':
      return 'bg-red-700 text-white';
    default:
      return 'bg-gray-500 text-white';
  }
};

export default function LogVault() {
  const [logs, setLogs] = useState<LogEntry[]>(generateLogEntries());
  const [searchQuery, setSearchQuery] = useState('');
  const [filterLevel, setFilterLevel] = useState<LogLevel | 'ALL'>('ALL');
  const [autoScroll, setAutoScroll] = useState(true);
  const logsContainerRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();

  const filteredLogs = logs.filter((log) => {
    const matchesLevel = filterLevel === 'ALL' || log.level === filterLevel;
    const matchesSearch =
      searchQuery === '' ||
      log.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.timestamp.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesLevel && matchesSearch;
  });

  const scrollToBottom = () => {
    if (logsContainerRef.current) {
      logsContainerRef.current.scrollTop = logsContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    if (autoScroll) {
      scrollToBottom();
    }
  }, [filteredLogs, autoScroll]);

  const handleScroll = () => {
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    const container = logsContainerRef.current;
    if (container) {
      const isNearBottom =
        container.scrollHeight - container.scrollTop - container.clientHeight < 50;
      setAutoScroll(isNearBottom);
    }
  };

  const downloadDump = () => {
    const logText = filteredLogs
      .map(
        (log) =>
          `[${log.timestamp}] [${log.level}] [${log.service}] ${log.message}`
      )
      .join('\n');

    const blob = new Blob([logText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `system-logs-${new Date().toISOString().slice(0, 10)}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="log-vault-container h-full flex flex-col bg-black relative">
      {/* Scanline Overlay Effect */}
      <div className="absolute inset-0 pointer-events-none bg-repeat opacity-5 z-0"
           style={{
             backgroundImage:
               'linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%, transparent)',
             backgroundSize: '100% 4px',
           }}
      ></div>

      {/* Header Section */}
      <div className="log-vault-header sticky top-0 z-10 bg-black border-b border-cyan-500/30 p-4 shadow-lg">
        <div className="mb-4">
          <h1 className="text-cyan-400 font-mono text-lg tracking-widest font-bold">
            SYSTEM KERNEL LOGS
          </h1>
        </div>

        <div className="flex flex-col gap-3">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Grep / Regex search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="log-vault-search bg-transparent text-white placeholder-gray-500 font-mono text-sm border-b border-cyan-500/50 focus:border-cyan-400 outline-none pb-2 px-1"
          />

          {/* Filter Toggles and Download Button */}
          <div className="flex items-center gap-2 justify-between">
            <div className="flex gap-2">
              <button
                onClick={() => setFilterLevel('ALL')}
                className={`filter-btn px-3 py-1 font-mono text-xs tracking-wide border transition-all ${
                  filterLevel === 'ALL'
                    ? 'border-cyan-400 bg-cyan-500/20 text-cyan-300'
                    : 'border-gray-500/50 text-gray-400 hover:border-cyan-400/50'
                }`}
              >
                [ALL]
              </button>
              <button
                onClick={() => setFilterLevel('ERROR')}
                className={`filter-btn px-3 py-1 font-mono text-xs tracking-wide border transition-all ${
                  filterLevel === 'ERROR'
                    ? 'border-red-400 bg-red-500/20 text-red-300'
                    : 'border-gray-500/50 text-gray-400 hover:border-red-400/50'
                }`}
              >
                [ERROR only]
              </button>
              <button
                onClick={() => setFilterLevel('WARN')}
                className={`filter-btn px-3 py-1 font-mono text-xs tracking-wide border transition-all ${
                  filterLevel === 'WARN'
                    ? 'border-yellow-400 bg-yellow-500/20 text-yellow-300'
                    : 'border-gray-500/50 text-gray-400 hover:border-yellow-400/50'
                }`}
              >
                [WARN only]
              </button>
            </div>

            <button
              onClick={downloadDump}
              className="download-btn flex items-center gap-1 px-3 py-1 font-mono text-xs tracking-wide border border-cyan-500/50 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all"
            >
              <Download size={14} />
              Download Dump
            </button>
          </div>
        </div>
      </div>

      {/* Logs Container */}
      <div
        ref={logsContainerRef}
        onScroll={handleScroll}
        className="log-vault-content flex-1 overflow-y-auto relative"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#0df2f2 transparent',
        }}
      >
        <div className="log-vault-entries">
          {filteredLogs.length > 0 ? (
            filteredLogs.map((log, index) => (
              <div
                key={log.id}
                className={`log-entry flex items-start gap-3 px-4 py-2 border-l-2 border-transparent font-mono text-xs transition-colors ${
                  index % 2 === 0 ? 'bg-white/[0.02]' : 'bg-white/[0.05]'
                } hover:bg-white/10 hover:border-l-cyan-500/50`}
              >
                {/* Timestamp */}
                <span className="log-timestamp text-gray-500 flex-shrink-0 w-28">
                  {log.timestamp.split('T')[1].slice(0, 8)}
                </span>

                {/* Level Badge */}
                <span
                  className={`log-level-badge inline-flex items-center justify-center px-2 py-0.5 rounded text-xs font-bold flex-shrink-0 ${getLevelColor(
                    log.level
                  )}`}
                >
                  {log.level}
                </span>

                {/* Service */}
                <span className="log-service text-cyan-400 flex-shrink-0 w-20 truncate">
                  [{log.service}]
                </span>

                {/* Message */}
                <span className="log-message text-white flex-1">
                  {log.message}
                </span>
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center h-32 text-gray-500 font-mono">
              No logs match the current filters.
            </div>
          )}
        </div>
      </div>

      {/* Auto-scroll to bottom button (floating) */}
      {!autoScroll && (
        <button
          onClick={() => {
            setAutoScroll(true);
            scrollToBottom();
          }}
          className="auto-scroll-btn absolute bottom-4 right-4 z-20 flex items-center justify-center w-10 h-10 bg-cyan-500/20 border border-cyan-400 text-cyan-400 rounded hover:bg-cyan-500/30 hover:text-cyan-300 transition-all cursor-pointer"
          title="Auto-scroll to bottom"
        >
          <ChevronDown size={18} />
        </button>
      )}
    </div>
  );
}
