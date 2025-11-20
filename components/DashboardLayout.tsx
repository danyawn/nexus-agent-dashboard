"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Bot,
  Terminal,
  ChartBar,
  Settings,
  Menu,
  X,
  Bell,
  User,
} from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/" },
    { icon: Bot, label: "Agents", href: "/agents" },
    { icon: Terminal, label: "Logs", href: "/logs" },
    { icon: ChartBar, label: "Analytics", href: "/analytics" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ];

  const SidebarContent = () => (
    <>
      {/* Logo/Brand - Hidden on mobile (already in header), visible on desktop */}
      <div className="hidden md:flex items-center gap-3 px-3 py-2 mb-6 flex-shrink-0">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--neon-purple)] flex items-center justify-center shadow-[0_0_15px_rgba(13,242,242,0.3)]">
          <span className="text-black font-bold text-lg font-mono">N</span>
        </div>
        <div>
          <h1 className="text-white text-base font-bold leading-normal tracking-wide">
            NEXUS
          </h1>
          <p className="text-white/60 text-[10px] font-normal leading-normal uppercase tracking-wider">
            Command Center
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col gap-2 mt-6 overflow-y-auto pr-2 min-h-0">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={index}
              href={item.href}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group ${
                isActive
                  ? "text-[var(--primary)] bg-[var(--primary)]/10 border border-[var(--primary)]/20 shadow-[inset_0_0_10px_rgba(13,242,242,0.1)]"
                  : "text-white/60 hover:text-white hover:bg-white/5 border border-transparent"
              }`}
            >
              <Icon
                size={20}
                className={`transition-transform duration-200 ${
                  isActive ? "scale-110" : "group-hover:scale-105"
                }`}
              />
              <span>{item.label}</span>

              {/* Active Indicator */}
              {isClient && isActive && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[var(--primary)] shadow-[0_0_5px_var(--primary)] animate-pulse"></div>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Status */}
      <div className="pt-4 border-t border-white/10 flex-shrink-0">
        <div className="px-3 py-2 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-xs text-white/60 font-mono">
              SYSTEM ONLINE
            </span>
          </div>
          <span className="text-[10px] text-white/30 font-mono">v2.4.0</span>
        </div>
      </div>
    </>
  );

  return (
    <div className="flex min-h-screen bg-[#0A0A0F]">
      {/* Mobile Header - Visible only on mobile (md:hidden) */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 z-30 bg-black/50 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-4">
        {/* Logo on Mobile Header */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--neon-purple)] flex items-center justify-center shadow-[0_0_15px_rgba(13,242,242,0.3)]">
            <span className="text-black font-bold text-sm font-mono">N</span>
          </div>
          <span className="text-white font-bold text-sm">NEXUS</span>
        </div>

        {/* Right Side Actions - Notification & Avatar */}
        <div className="flex items-center gap-3">
          {/* Notification Bell */}
          <button className="flex items-center justify-center rounded-full h-9 w-9 bg-white/5 text-white/80 hover:text-[var(--primary)] hover:bg-[var(--primary)]/20 transition-colors">
            <Bell size={18} />
          </button>

          {/* User Avatar */}
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--neon-purple)] flex items-center justify-center border-2 border-[var(--primary)] glow-border-primary cursor-pointer">
            <User size={16} className="text-white" />
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-[var(--primary)]/30 transition-all"
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* Backdrop Overlay - Mobile Only */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Desktop Sidebar - Hidden on mobile, visible on md and up */}
      <aside className="hidden md:flex fixed left-0 top-0 h-screen w-64 bg-black/30 border-r border-white/10 z-20 backdrop-blur-md flex-col p-4">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar - Slide-over Drawer */}
      <aside
        className={`md:hidden fixed inset-y-0 left-0 z-40 w-64 bg-black/30 border-r border-white/10 backdrop-blur-md flex flex-col p-4 transition-transform duration-300 ease-in-out pt-20 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Mobile Close Button - Top Right */}
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all"
          aria-label="Close menu"
        >
          <X size={20} />
        </button>

        {/* Mobile Sidebar Content (Navigation only) */}
        <nav className="flex-1 flex flex-col gap-2 overflow-y-auto pr-2 min-h-0">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={index}
                href={item.href}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group ${
                  isActive
                    ? "text-[var(--primary)] bg-[var(--primary)]/10 border border-[var(--primary)]/20 shadow-[inset_0_0_10px_rgba(13,242,242,0.1)]"
                    : "text-white/60 hover:text-white hover:bg-white/5 border border-transparent"
                }`}
              >
                <Icon
                  size={20}
                  className={`transition-transform duration-200 ${
                    isActive ? "scale-110" : "group-hover:scale-105"
                  }`}
                />
                <span>{item.label}</span>

                {/* Active Indicator */}
                {isClient && isActive && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[var(--primary)] shadow-[0_0_5px_var(--primary)] animate-pulse"></div>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Status */}
        <div className="pt-4 border-t border-white/10 flex-shrink-0 mt-4">
          <div className="px-3 py-2 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-xs text-white/60 font-mono">
                SYSTEM ONLINE
              </span>
            </div>
            <span className="text-[10px] text-white/30 font-mono">v2.4.0</span>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 w-full md:ml-64 min-h-screen bg-[#0A0A0F] pt-16 md:pt-0">
        {children}
      </main>
    </div>
  );
}
