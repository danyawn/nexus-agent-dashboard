'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full bg-[var(--bg-dark)] text-white overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen w-full flex items-center justify-center px-4 md:px-8">
        {/* Background gradient glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary)]/5 via-transparent to-transparent pointer-events-none" />

        {/* Hero content container */}
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center space-y-8">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
            <span className="text-sm font-medium text-white/80">v2.4.0 SYSTEM ONLINE</span>
          </div>

          {/* Headline with gradient */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center leading-tight bg-gradient-to-r from-[var(--primary)] to-[var(--neon-purple)] bg-clip-text text-transparent">
            Orchestrate the Autonomous Future.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/70 text-center max-w-2xl leading-relaxed">
            The first command center designed for scaling AI agent swarms. Monitor, debug, and deploy in real-time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="px-8 py-3 bg-[var(--primary)] text-black font-semibold rounded-lg hover:bg-[var(--primary)]/90 transition-all duration-200 flex items-center gap-2 group">
              Enter Console
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-3 border border-white/30 text-white font-semibold rounded-lg hover:border-[var(--primary)]/50 hover:bg-white/5 transition-all duration-200">
              Documentation
            </button>
          </div>

          {/* Glass container placeholder */}
          <div className="w-full mt-12 perspective">
            {/* PLACEHOLDER: DASHBOARD SCREENSHOT */}
            <div className="glass-panel rounded-2xl p-8 md:p-12 transform perspective-3d hover:scale-105 transition-transform duration-300 backdrop-blur-xl border border-white/10">
              <div className="w-full h-48 md:h-64 flex items-center justify-center bg-gradient-to-br from-[var(--primary)]/10 via-transparent to-[var(--neon-purple)]/10 rounded-xl border border-[var(--primary)]/20">
                <div className="text-center">
                  <div className="text-sm text-white/50 font-mono mb-2">[DASHBOARD_PREVIEW]</div>
                  <div className="text-white/30 text-sm">Dashboard visualization will appear here</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE SHOWCASE SECTION */}
      <section className="relative w-full py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section title */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
              Powered by <span className="text-[var(--primary)]">Fusion Engine</span>
            </h2>
            <p className="text-white/60 text-center max-w-2xl mx-auto">
              Experience the next generation of AI command and control
            </p>
          </div>

          {/* Bento grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* Card 1: Real-time Neural Density (col-span-2) */}
            <div className="md:col-span-2 glass-panel rounded-2xl p-6 md:p-8 flex flex-col border border-white/10">
              <div className="mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-white">Real-time Neural Density</h3>
                <p className="text-white/60 text-sm md:text-base mt-2">Live heatmap visualization of active nodes.</p>
              </div>
              {/* SLOT: SWARM VISUALIZER */}
              <div className="flex-1 w-full flex items-center justify-center">
                <div className="w-full h-64 flex items-center justify-center bg-gradient-to-br from-[var(--primary)]/5 via-transparent to-[var(--neon-purple)]/5 rounded-lg border border-[var(--primary)]/20">
                  <div className="text-center">
                    <div className="text-sm text-white/50 font-mono mb-2">[SWARM_VISUALIZER]</div>
                    <div className="text-white/30 text-sm">Neural network heatmap visualization</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Live Kernel Stream (row-span-2) */}
            <div className="md:row-span-2 glass-panel rounded-2xl p-6 md:p-8 flex flex-col border border-white/10">
              <div className="mb-4 flex-shrink-0">
                <h3 className="text-xl md:text-2xl font-bold text-white">Live Kernel Stream</h3>
              </div>
              {/* SLOT: LOG VAULT */}
              <div className="flex-1 w-full min-h-[300px] flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[var(--primary)]/5 via-transparent to-[var(--neon-purple)]/5 rounded-lg border border-[var(--primary)]/20">
                  <div className="text-center">
                    <div className="text-sm text-white/50 font-mono mb-2">[LOG_VAULT]</div>
                    <div className="text-white/30 text-sm">Real-time system logs</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Fleet Diagnostics */}
            <div className="glass-panel rounded-2xl p-6 md:p-8 flex flex-col border border-white/10">
              <div className="mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-white">Fleet Diagnostics</h3>
                <p className="text-white/60 text-sm md:text-base mt-2">Monitor agent health and performance metrics.</p>
              </div>
              {/* SLOT: AGENT CARD */}
              <div className="flex-1 w-full flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[var(--primary)]/5 via-transparent to-[var(--neon-purple)]/5 rounded-lg border border-[var(--primary)]/20">
                  <div className="text-center">
                    <div className="text-sm text-white/50 font-mono mb-2">[AGENT_CARD]</div>
                    <div className="text-white/30 text-sm">Agent fleet status</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
