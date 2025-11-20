'use client';

import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import MagicBento from '@/components/ui/MagicBento';
import TerminalBackground from '@/components/TerminalBackground';

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full bg-[var(--bg-dark)] text-white overflow-x-hidden relative">
      {/* Terminal Background */}
      <TerminalBackground />

      {/* HERO SECTION */}
      <section className="relative z-10 min-h-screen w-full flex items-center justify-center px-4 md:px-8 overflow-hidden">

        {/* Background gradient glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary)]/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--primary)]/20 rounded-full blur-3xl pointer-events-none" />

        {/* Hero content */}
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center space-y-8">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--primary)]/50 bg-white/5 backdrop-blur-md hover:border-[var(--primary)] transition-colors">
            <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
            <span className="text-sm font-medium text-white/80">v2.4.0 SYSTEM ONLINE</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center leading-tight bg-gradient-to-r from-[var(--primary)] to-[var(--neon-purple)] bg-clip-text text-transparent">
            Orchestrate the Autonomous Future
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/70 text-center max-w-2xl leading-relaxed">
            The first command center designed for scaling AI agent swarms. Monitor, debug, and deploy in real-time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="group px-8 py-3 bg-[var(--primary)] text-black font-semibold rounded-lg hover:bg-[var(--primary)]/90 transition-all duration-200 flex items-center justify-center gap-2">
              Enter Console
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-3 border border-white/30 text-white font-semibold rounded-lg hover:border-[var(--primary)]/50 hover:bg-white/5 transition-all duration-200">
              Read Docs
            </button>
          </div>

          {/* 3D Tilted container placeholder */}
          <div className="w-full mt-12 max-w-3xl" style={{ perspective: '1200px' }}>
            {/* PLACEHOLDER: DASHBOARD PREVIEW */}
            <div
              className="glass-panel rounded-2xl p-2 md:p-3 overflow-hidden hover:shadow-lg hover:shadow-[var(--primary)]/30 transition-all duration-300"
              style={{
                transform: 'rotateX(5deg) rotateY(-2deg) rotateZ(1deg)',
                transformStyle: 'preserve-3d',
              }}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fa2ea7def80a5425e9628e1d18c145649%2F79f48d32d69745e5b5a33333b8cc633f?format=webp&width=800"
                alt="NEXUS Dashboard Preview"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY SECTION */}
      <section className="relative z-10 w-full py-12 md:py-16 px-4 border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm md:text-base text-white/50 font-mono tracking-widest mb-8">
            POWERING NEXT-GEN INFRASTRUCTURE
          </p>
          
          {/* Marquee container */}
          <div className="overflow-hidden">
            <div className="flex items-center justify-center gap-8 md:gap-12 whitespace-nowrap animate-scroll">
              {/* Logo placeholders */}
              {[
                { name: 'OpenAI', initials: 'OAI' },
                { name: 'Anthropic', initials: 'ANT' },
                { name: 'Vercel', initials: 'VRL' },
                { name: 'Next.js', initials: 'NXT' },
                { name: 'Tailwind', initials: 'TWL' },
                { name: 'OpenAI', initials: 'OAI' },
                { name: 'Anthropic', initials: 'ANT' },
              ].map((company, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center h-12 px-6 rounded-lg border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-colors flex-shrink-0"
                >
                  <span className="text-white/60 font-semibold text-sm">{company.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE SHOWCASE SECTION */}
      <section className="relative z-10 w-full py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section title */}
          <div className="mb-12 md:mb-16 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Powered by <span className="text-[var(--primary)]">Fusion Engine</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Experience the next generation of AI command and control
            </p>
          </div>

          {/* MagicBento Interactive Grid */}
          <div className="w-full flex justify-center min-h-[600px]">
            <MagicBento
              textAutoHide={true}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              glowColor="13, 242, 242"
              spotlightRadius={400}
            />
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="relative z-10 w-full py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section title */}
          <div className="mb-12 md:mb-16 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Choose the perfect plan for your AI infrastructure
            </p>
          </div>

          {/* Pricing cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card A: Starter */}
            <div className="glass-panel rounded-2xl p-8 flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-white/20">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
                <p className="text-white/70 text-sm font-medium">For Indie Hackers</p>
              </div>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">Free</span>
              </div>
              <button className="w-full py-3 border-2 border-white/40 text-white font-semibold rounded-lg hover:border-white/80 hover:bg-white/10 transition-all duration-200 mb-8">
                Get Started
              </button>
              <div className="space-y-4 flex-1">
                {['Up to 5 agents', 'Basic monitoring', 'Community support'].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check size={18} className="text-[var(--primary)] flex-shrink-0" />
                    <span className="text-white/80 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card B: Syndicate (Most Popular) */}
            <div className="glass-panel rounded-2xl p-8 border-2 border-[var(--primary)] flex flex-col relative hover:shadow-2xl hover:shadow-[var(--primary)]/60 hover:-translate-y-2 transition-all duration-300 md:scale-105 md:mb-8">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-[var(--primary)] to-cyan-400 text-black text-xs font-bold rounded-full shadow-lg shadow-[var(--primary)]/50">
                MOST POPULAR
              </div>
              <div className="mb-6 pt-2">
                <h3 className="text-2xl font-bold text-white mb-2">Syndicate</h3>
                <p className="text-white/70 text-sm font-medium">For AI Startups</p>
              </div>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">$49</span>
                <span className="text-white/70 text-sm font-medium">/month</span>
              </div>
              <button className="w-full py-3 bg-gradient-to-r from-[var(--primary)] to-cyan-400 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[var(--primary)]/50 transition-all duration-200 mb-8">
                Start Trial
              </button>
              <div className="space-y-4 flex-1">
                {['Up to 50 agents', 'Advanced analytics', 'Priority support', 'Real-time alerts'].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check size={18} className="text-[var(--primary)] flex-shrink-0" />
                    <span className="text-white/80 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card C: Enterprise */}
            <div className="glass-panel rounded-2xl p-8 flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-white/20">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                <p className="text-white/70 text-sm font-medium">For Sovereign Entities</p>
              </div>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">Custom</span>
              </div>
              <button className="w-full py-3 border-2 border-white/40 text-white font-semibold rounded-lg hover:border-white/80 hover:bg-white/10 transition-all duration-200 mb-8">
                Contact Sales
              </button>
              <div className="space-y-4 flex-1">
                {['Unlimited agents', 'Custom integrations', 'Dedicated support', 'SLA guarantees'].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check size={18} className="text-[var(--primary)] flex-shrink-0" />
                    <span className="text-white/80 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 w-full border-t border-white/10 bg-white/[0.02] py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 md:mb-12">
            {/* Column 1: Product */}
            <div>
              <h4 className="text-white font-bold mb-4">Product</h4>
              <ul className="space-y-2">
                {['Features', 'Pricing', 'Security', 'Roadmap'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/60 hover:text-[var(--primary)] transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Developers */}
            <div>
              <h4 className="text-white font-bold mb-4">Developers</h4>
              <ul className="space-y-2">
                {['Documentation', 'API Ref', 'GitHub', 'Discord'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/60 hover:text-[var(--primary)] transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Company */}
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                {['About', 'Blog', 'Careers', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/60 hover:text-[var(--primary)] transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Legal */}
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                {['Privacy', 'Terms', 'License', 'Compliance'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/60 hover:text-[var(--primary)] transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer bottom */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">© 2024 NEXUS AI Command Center. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <span className="text-white/50 text-sm">System Status:</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--emerald)]/10 border border-[var(--emerald)]/30">
                <span className="w-2 h-2 rounded-full bg-[var(--emerald)] animate-pulse" />
                <span className="text-xs font-semibold text-[var(--emerald)]">ONLINE</span>
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* CSS for marquee animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
