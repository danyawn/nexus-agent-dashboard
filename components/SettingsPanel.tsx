'use client';

import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';

interface ApiGateway {
  id: string;
  name: string;
  status: 'connected' | 'revoked';
}

const SettingsPanel: React.FC = () => {
  // Neural Safety Protocols toggles
  const [killSwitch, setKillSwitch] = useState(false);
  const [sandboxMode, setSandboxMode] = useState(true);
  const [httpsEncryption, setHttpsEncryption] = useState(true);

  // Performance Thresholds sliders
  const [maxTokens, setMaxTokens] = useState(5000);
  const [gcRate, setGcRate] = useState(60);

  // API Gateways
  const [apiGateways, setApiGateways] = useState<ApiGateway[]>([
    { id: 'openai', name: 'OpenAI', status: 'connected' },
    { id: 'anthropic', name: 'Anthropic', status: 'connected' },
    { id: 'huggingface', name: 'HuggingFace', status: 'revoked' },
  ]);

  const handleReconnect = (id: string) => {
    setApiGateways(prevGateways =>
      prevGateways.map(gateway =>
        gateway.id === id ? { ...gateway, status: 'connected' } : gateway
      )
    );
  };

  const CyberpunkToggle: React.FC<{
    label: string;
    active: boolean;
    onChange: (value: boolean) => void;
  }> = ({ label, active, onChange }) => {
    return (
      <div className="flex items-center justify-between">
        <span className="text-sm text-white/80">{label}</span>
        <button
          onClick={() => onChange(!active)}
          className={`relative w-14 h-7 rounded-full transition-all duration-300 ${
            active ? 'bg-[var(--primary)]' : 'bg-white/20'
          }`}
          aria-pressed={active}
        >
          <div
            className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white transition-all duration-300 transform ${
              active ? 'translate-x-7' : 'translate-x-0'
            }`}
          />
        </button>
      </div>
    );
  };

  const PerformanceSlider: React.FC<{
    label: string;
    value: number;
    onChange: (value: number) => void;
    min: number;
    max: number;
    step: number;
  }> = ({ label, value, onChange, min, max, step }) => {
    return (
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm text-white/80">{label}</span>
          <span className="text-sm text-[var(--primary)] font-mono">{value}</span>
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="slider-input w-full"
        />
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Card 1: Neural Safety Protocols */}
      <div className="glass-panel rounded-xl p-6 border border-white/10">
        <h3 className="text-lg font-semibold text-white mb-4">Neural Safety Protocols</h3>
        <div className="space-y-4">
          <CyberpunkToggle
            label="Autonomous Kill Switch"
            active={killSwitch}
            onChange={setKillSwitch}
          />
          <CyberpunkToggle
            label="Deep Learning Sandbox Mode"
            active={sandboxMode}
            onChange={setSandboxMode}
          />
          <CyberpunkToggle
            label="Force HTTPS/TLS Encryption"
            active={httpsEncryption}
            onChange={setHttpsEncryption}
          />
        </div>
      </div>

      {/* Card 2: Performance Thresholds */}
      <div className="glass-panel rounded-xl p-6 border border-white/10">
        <h3 className="text-lg font-semibold text-white mb-4">Performance Thresholds</h3>
        <div className="space-y-6">
          <PerformanceSlider
            label="Max Token Consumption"
            value={maxTokens}
            onChange={setMaxTokens}
            min={0}
            max={10000}
            step={100}
          />
          <PerformanceSlider
            label="Memory Garbage Collection Rate"
            value={gcRate}
            onChange={setGcRate}
            min={0}
            max={100}
            step={5}
          />
        </div>
      </div>

      {/* Card 3: API Gateways */}
      <div className="glass-panel rounded-xl p-6 border border-white/10">
        <h3 className="text-lg font-semibold text-white mb-4">API Gateways</h3>
        <div className="space-y-3">
          {apiGateways.map((gateway) => (
            <div
              key={gateway.id}
              className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200"
            >
              <div className="flex items-center gap-3">
                <span className="text-sm text-white/80">{gateway.name}</span>
                <div
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${
                    gateway.status === 'connected'
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      : 'bg-red-500/20 text-red-400 border border-red-500/30'
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      gateway.status === 'connected' ? 'bg-emerald-400' : 'bg-red-400'
                    }`}
                  />
                  {gateway.status === 'connected' ? 'Connected' : 'Revoked'}
                </div>
              </div>
              <button
                onClick={() => handleReconnect(gateway.id)}
                disabled={gateway.status === 'connected'}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all duration-200 text-sm font-medium ${
                  gateway.status === 'connected'
                    ? 'border-white/10 text-white/40 cursor-default'
                    : 'border-[var(--primary)]/50 text-[var(--primary)] hover:border-[var(--primary)] hover:bg-[var(--primary)]/10 hover:shadow-[0_0_10px_rgba(13,242,242,0.3)]'
                }`}
              >
                <RotateCcw size={14} />
                <span>Reconnect</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
