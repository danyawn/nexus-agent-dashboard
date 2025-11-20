'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import MagicBento from '@/components/ui/MagicBento';
import TerminalBackground from '@/components/TerminalBackground';

gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.reveal-text').forEach((element) => {
        gsap.fromTo(
          element,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>('.reveal-card').forEach((element, index) => {
        gsap.fromTo(
          element,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);
  return (
    <div ref={containerRef} className="min-h-screen w-full bg-[var(--bg-dark)] text-white overflow-x-hidden relative">
      {/* Terminal Background */}
      <TerminalBackground />

      {/* HERO SECTION */}
      <section className="relative z-10 min-h-screen w-full flex items-center justify-center px-4 md:px-8 overflow-hidden">

        {/* Background gradient overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary)]/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--primary)]/20 rounded-full blur-3xl pointer-events-none" />

        {/* Hero content */}
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center space-y-8">
          {/* Status badge */}
          <div className="reveal-text inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/50 bg-white/10 backdrop-blur-md hover:border-cyan-400 transition-all duration-300">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-sm font-semibold text-cyan-400">v2.4.0 SYSTEM ONLINE</span>
          </div>

          {/* Headline */}
          <h1 className="reveal-text text-6xl md:text-8xl font-black text-center leading-tight tracking-tighter text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Orchestrate the Autonomous Future
          </h1>

          {/* Subheadline */}
          <p className="reveal-text text-lg md:text-xl text-white/90 text-center max-w-2xl leading-relaxed font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            The first command center designed for scaling AI agent swarms. Monitor, debug, and deploy in real-time.
          </p>

          {/* CTA Buttons */}
          <div className="reveal-text flex flex-col sm:flex-row gap-4 pt-8">
            <button className="group px-8 py-4 bg-[var(--primary)] text-black font-bold text-lg rounded-lg hover:bg-[var(--primary)]/90 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-cyan-400/30">
              Enter Console
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border-2 border-white/50 text-white font-bold text-lg rounded-lg hover:border-[var(--primary)]/70 hover:bg-white/10 transition-all duration-200">
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
          <p className="text-center text-base md:text-lg font-bold tracking-widest mb-12 text-white">
            POWERING NEXT-GEN INFRASTRUCTURE
          </p>

          {/* Marquee container */}
          <div className="overflow-hidden">
            <div className="flex items-center justify-center gap-12 md:gap-16 whitespace-nowrap animate-scroll">
              {/* Company logos */}
              {[
                { name: 'Anthropic', logo: 'https://cdn.builder.io/api/v1/image/assets%2Fa2ea7def80a5425e9628e1d18c145649%2F1b53ce96fe6d4f2a877e158dd5e8ecd2?format=webp&width=800' },
                { name: 'Next.js', logo: 'https://cdn.builder.io/api/v1/image/assets%2Fa2ea7def80a5425e9628e1d18c145649%2F3d39c46af2744595b9b03733f97615e0?format=webp&width=800' },
                { name: 'OpenAI', logo: 'https://cdn.builder.io/api/v1/image/assets%2Fa2ea7def80a5425e9628e1d18c145649%2F0bf5ea204d8e45cab433e46e261ff18c?format=webp&width=800' },
                { name: 'Vercel', logo: 'https://cdn.builder.io/api/v1/image/assets%2Fa2ea7def80a5425e9628e1d18c145649%2F275249f627ed4f8a8a8111910c7e83a4?format=webp&width=800' },
                { name: 'Tailwind', logo: 'https://cdn.builder.io/api/v1/image/assets%2Fa2ea7def80a5425e9628e1d18c145649%2F4c33547ec66445e394565a0dc9db538f?format=webp&width=800' },
                { name: 'Anthropic', logo: 'https://cdn.builder.io/api/v1/image/assets%2Fa2ea7def80a5425e9628e1d18c145649%2F1b53ce96fe6d4f2a877e158dd5e8ecd2?format=webp&width=800' },
                { name: 'Next.js', logo: 'https://cdn.builder.io/api/v1/image/assets%2Fa2ea7def80a5425e9628e1d18c145649%2F3d39c46af2744595b9b03733f97615e0?format=webp&width=800' },
              ].map((company, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center h-16 px-8 rounded-xl border border-white/30 bg-white/[0.1] hover:bg-white/[0.15] transition-all duration-300 flex-shrink-0 backdrop-blur-sm"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-12 w-auto object-contain"
                    loading="lazy"
                  />
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
            <h2 className="reveal-text text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] tracking-tight">
              Powered by <span className="text-cyan-400">Fusion Engine</span>
            </h2>
            <p className="reveal-text text-white/90 max-w-2xl mx-auto font-semibold text-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
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
            <h2 className="reveal-text text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] tracking-tight">
              Simple, Transparent Pricing
            </h2>
            <p className="reveal-text text-white/90 max-w-2xl mx-auto font-semibold text-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              Choose the perfect plan for your AI infrastructure
            </p>
          </div>

          {/* Pricing cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card A: Starter */}
            <div className="reveal-card glass-panel rounded-2xl p-8 flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-white/20">
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
      <footer className="relative z-10 w-full py-12 md:py-16 px-4 md:px-8 glass-panel rounded-t-3xl border-t border-white/20 backdrop-blur-xl">
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
