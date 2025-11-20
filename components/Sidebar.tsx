"use client";

import React from "react";
import {
  LayoutDashboard,
  Bot,
  Terminal,
  ChartBar,
  Settings,
} from "lucide-react";

const Sidebar: React.FC = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: Bot, label: "Agents", active: false },
    { icon: Terminal, label: "Logs", active: false },
    { icon: ChartBar, label: "Analytics", active: false },
    { icon: Settings, label: "Settings", active: false },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-black/30 border-r border-white/10 z-20">
      <div className="flex flex-col h-full p-4">
        {/* Logo/Brand */}
        <div className="flex items-center gap-3 px-3 py-2 mb-6">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--neon-purple)] flex items-center justify-center">
            <span className="text-white font-bold text-lg">N</span>
          </div>
          <div>
            <h1 className="text-white text-base font-bold leading-normal">
              AetherCorp
            </h1>
            <p className="text-white/60 text-sm font-normal leading-normal">
              AI Agent Console
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 flex flex-col gap-2 mt-6">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  item.active
                    ? "text-[var(--primary)] bg-[var(--primary)]/20 shadow-[inset_2px_0_0_0_var(--primary)]"
                    : "text-white/80 hover:text-[var(--primary)]"
                }`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Bottom Status - Optional */}
      </div>
    </div>
  );
};

export default Sidebar;
