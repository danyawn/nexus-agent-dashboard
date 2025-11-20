"use client";

import React from "react";
import { Clock, CheckCircle, AlertCircle, RotateCcw } from "lucide-react";

interface Task {
  id: string;
  name: string;
  status: "pending" | "running" | "completed" | "failed";
  progress: number;
  priority: "low" | "medium" | "high" | "critical";
  agent: string;
  estimatedTime: string;
  createdAt: string;
}

const TaskQueue: React.FC = () => {
  const tasks: Task[] = [
    {
      id: "task-1",
      name: "Neural Network Training",
      status: "running",
      progress: 67,
      priority: "high",
      agent: "Agent Alpha",
      estimatedTime: "12 min",
      createdAt: "14:32",
    },
    {
      id: "task-2",
      name: "Data Processing Pipeline",
      status: "completed",
      progress: 100,
      priority: "medium",
      agent: "Agent Beta",
      estimatedTime: "Completed",
      createdAt: "14:28",
    },
    {
      id: "task-3",
      name: "Security Scan",
      status: "running",
      progress: 45,
      priority: "critical",
      agent: "Agent Gamma",
      estimatedTime: "8 min",
      createdAt: "14:35",
    },
    {
      id: "task-4",
      name: "Model Optimization",
      status: "pending",
      progress: 0,
      priority: "medium",
      agent: "Agent Delta",
      estimatedTime: "15 min",
      createdAt: "14:40",
    },
    {
      id: "task-5",
      name: "System Backup",
      status: "failed",
      progress: 23,
      priority: "low",
      agent: "Agent Alpha",
      estimatedTime: "Failed",
      createdAt: "14:15",
    },
  ];

  const getStatusIcon = (status: Task["status"]) => {
    switch (status) {
      case "pending":
        return <Clock size={20} className="text-white/40" />;
      case "running":
        return <RotateCcw size={20} className="text-[var(--primary)]" />;
      case "completed":
        return <CheckCircle size={20} className="text-emerald-500" />;
      case "failed":
        return <AlertCircle size={20} className="text-red-500" />;
      default:
        return <Clock size={20} className="text-white/40" />;
    }
  };

  // Simplified - removed unused functions for cleaner UI

  return (
    <div className="glass-panel rounded-xl p-6 h-full">
      {/* Header */}
      <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] mb-4">
        Task Queue
      </h2>

      {/* Task List - Simple version */}
      <div className="flex flex-col gap-2">
        {tasks.slice(0, 4).map((task) => (
          <div key={task.id} className="flex items-center gap-3">
            {getStatusIcon(task.status)}
            <p className="text-sm text-white/80 font-mono">
              {task.status.toUpperCase()}: {task.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskQueue;
