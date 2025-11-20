"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
// Icons removed - using simple text-based logs

interface LogEntry {
  id: string;
  timestamp: string;
  level: "INFO" | "WARN" | "ERROR";
  message: string;
  source?: string;
}

const TerminalFeed: React.FC = () => {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const logContainerRef = useRef<HTMLDivElement>(null);

  const logMessages = useMemo(
    () => [
      {
        level: "INFO" as const,
        message: "Optimizing neural weights...",
        source: "Agent Alpha",
      },
      {
        level: "INFO" as const,
        message: "Database connection established",
        source: "System",
      },
      {
        level: "WARN" as const,
        message: "Latency spike detected in Network Interface",
        source: "Monitor",
      },
      {
        level: "INFO" as const,
        message: "Task queue processed 42 items",
        source: "Scheduler",
      },
      {
        level: "ERROR" as const,
        message: "Memory threshold exceeded in Agent Gamma",
        source: "Agent Gamma",
      },
      {
        level: "INFO" as const,
        message: "Backup completed successfully",
        source: "System",
      },
      {
        level: "WARN" as const,
        message: "CPU temperature above normal range",
        source: "Hardware",
      },
      {
        level: "INFO" as const,
        message: "New agent deployment initiated",
        source: "Deployer",
      },
      {
        level: "ERROR" as const,
        message: "Connection timeout to external API",
        source: "Network",
      },
      {
        level: "INFO" as const,
        message: "Cache cleared and optimized",
        source: "System",
      },
      {
        level: "WARN" as const,
        message: "Disk space running low",
        source: "Storage",
      },
      {
        level: "INFO" as const,
        message: "Security scan completed - no threats found",
        source: "Security",
      },
      {
        level: "INFO" as const,
        message: "Model training progress: 67%",
        source: "ML Pipeline",
      },
      {
        level: "ERROR" as const,
        message: "Failed to load configuration file",
        source: "Config",
      },
      {
        level: "INFO" as const,
        message: "Service restart completed",
        source: "Agent Beta",
      },
    ],
    []
  ); // Empty dependency array since logMessages is static

  const generateLog = useCallback((): LogEntry => {
    const randomIndex = Math.floor(Math.random() * logMessages.length);
    const randomMessage = logMessages[randomIndex];
    const timestamp = new Date().toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    return {
      id: `${timestamp}-${Math.random().toString(36).substring(2, 11)}`,
      timestamp,
      level: randomMessage.level,
      message: randomMessage.message,
      source: randomMessage.source,
    };
  }, [logMessages]); // Include logMessages as dependency

  useEffect(() => {
    // Create initial logs with a single state update
    const initialLogs: LogEntry[] = [];
    for (let i = 0; i < 5; i++) {
      initialLogs.push(generateLog());
    }

    // Use requestAnimationFrame to avoid synchronous setState
    requestAnimationFrame(() => {
      setLogs(initialLogs);
    });

    // Add new log every 1.5 seconds
    const interval = setInterval(() => {
      setLogs((prevLogs) => {
        const newLog = generateLog();
        const updatedLogs = [newLog, ...prevLogs];
        // Keep only last 50 logs
        return updatedLogs.slice(0, 50);
      });
    }, 1500);

    return () => clearInterval(interval);
  }, [generateLog]);

  useEffect(() => {
    // Auto-scroll to top when new logs are added
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = 0;
    }
  }, [logs]);

  const getLevelColor = (level: LogEntry["level"]) => {
    switch (level) {
      case "INFO":
        return "text-emerald-500";
      case "WARN":
        return "text-yellow-400";
      case "ERROR":
        return "text-red-500";
      default:
        return "text-[var(--primary)]";
    }
  };

  // Removed clearLogs and pause functionality for simpler UI

  return (
    <div className="glass-panel rounded-xl p-6 h-full flex flex-col">
      {/* Header */}
      <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] mb-4">
        Real-time Log Feed
      </h2>

      {/* Log Container */}
      <div
        ref={logContainerRef}
        className="font-mono text-xs text-white/70 space-y-1 overflow-y-auto h-full pr-2"
      >
        {logs.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            No logs to display...
          </div>
        ) : (
          <>
            {logs.slice(0, 6).map((log) => (
              <p key={log.id} className="animate-fade-in">
                <span className={getLevelColor(log.level)}>[{log.level}]</span>{" "}
                {log.message}
              </p>
            ))}
          </>
        )}
      </div>

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: var(--primary);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: var(--neon-purple);
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default TerminalFeed;
