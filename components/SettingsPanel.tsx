'use client';

import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';

interface ToggleState {
  autonomousKillSwitch: boolean;
  deepLearningSandbox: boolean;
  forceHttpsTls: boolean;
}

interface ApiService {
  name: string;
  status: 'connected' | 'revoked';
}

export default function SettingsPanel() {
  const [toggles, setToggles] = useState<ToggleState>({
    autonomousKillSwitch: false,
    deepLearningSandbox: true,
    forceHttpsTls: true,
  });

  const [maxTokens, setMaxTokens] = useState(5000);
  const [garbageCollection, setGarbageCollection] = useState(50);

  const [apiServices, setApiServices] = useState<ApiService[]>([
    { name: 'OpenAI', status: 'connected' },
    { name: 'Anthropic', status: 'connected' },
    { name: 'HuggingFace', status: 'revoked' },
  ]);

  const toggleHandler = (key: keyof ToggleState) => {
    setToggles(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleReconnect = (index: number) => {
    setApiServices(prev => {
      const updated = [...prev];
      updated[index].status = updated[index].status === 'connected' ? 'revoked' : 'connected';
      return updated;
    });
  };

  const CyberpunkToggle: React.FC<{
    label: string;
    value: boolean;
    onChange: () => void;
  }> = ({ label, value, onChange }) => (
    <div className="flex items-center justify-between">
      <span className="text-white/80 text-sm font-medium">{label}</span>
      <button
        onClick={onChange}
        className={`relative inline-flex h-7 w-12 items-center rounded-full transition-all duration-300 ${
          value
            ? 'bg-[var(--primary)] shadow-[0_0_15px_rgba(13,242,242,0.5)]'
            : 'bg-gray-600 shadow-[0_0_8px_rgba(100,100,100,0.3)]'
        }`}
        aria-pressed={value}
      >
        <span
          className={`inline-block h-5 w-5 transform rounded-full bg-black transition-transform duration-300 ${
            value ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Card 1: Neural Safety Protocols */}
      <div className="glass-panel rounded-lg p-6 border border-white/10">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-[var(--primary)] mb-1">
            Neural Safety Protocols
          </h2>
          <p className="text-white/50 text-sm font-mono">
            Core safety & security configurations
          </p>
        </div>

        <div className="space-y-4">
          <CyberpunkToggle
            label="Autonomous Kill Switch"
            value={toggles.autonomousKillSwitch}
            onChange={() => toggleHandler('autonomousKillSwitch')}
          />
          <CyberpunkToggle
            label="Deep Learning Sandbox Mode"
            value={toggles.deepLearningSandbox}
            onChange={() => toggleHandler('deepLearningSandbox')}
          />
          <CyberpunkToggle
            label="Force HTTPS/TLS Encryption"
            value={toggles.forceHttpsTls}
            onChange={() => toggleHandler('forceHttpsTls')}
          />
        </div>
      </div>

      {/* Card 2: Performance Thresholds */}
      <div className="glass-panel rounded-lg p-6 border border-white/10">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-[var(--primary)] mb-1">
            Performance Thresholds
          </h2>
          <p className="text-white/50 text-sm font-mono">
            Optimize resource allocation & limits
          </p>
        </div>

        <div className="space-y-6">
          {/* Max Token Consumption Slider */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-white/80 text-sm font-medium">
                Max Token Consumption
              </label>
              <span className="text-[var(--primary)] font-mono text-sm">
                {maxTokens.toLocaleString()} / 10000
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="10000"
              value={maxTokens}
              onChange={(e) => setMaxTokens(Number(e.target.value))}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer slider-track"
              style={{
                background: `linear-gradient(to right, var(--primary) 0%, var(--primary) ${
                  (maxTokens / 10000) * 100
                }%, rgb(75, 85, 99) ${(maxTokens / 10000) * 100}%, rgb(75, 85, 99) 100%)`,
              }}
            />
          </div>

          {/* Memory Garbage Collection Rate Slider */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-white/80 text-sm font-medium">
                Memory Garbage Collection Rate
              </label>
              <span className="text-[var(--primary)] font-mono text-sm">
                {garbageCollection}%
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={garbageCollection}
              onChange={(e) => setGarbageCollection(Number(e.target.value))}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer slider-track"
              style={{
                background: `linear-gradient(to right, var(--primary) 0%, var(--primary) ${garbageCollection}%, rgb(75, 85, 99) ${garbageCollection}%, rgb(75, 85, 99) 100%)`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Card 3: API Gateways */}
      <div className="glass-panel rounded-lg p-6 border border-white/10">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-[var(--primary)] mb-1">
            API Gateways
          </h2>
          <p className="text-white/50 text-sm font-mono">
            Connected services & authentication status
          </p>
        </div>

        <div className="space-y-3">
          {apiServices.map((service, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <p className="text-white font-medium">{service.name}</p>
                  <p className="text-white/50 text-xs font-mono">Gateway endpoint</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                    service.status === 'connected'
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50 shadow-[0_0_10px_rgba(0,255,127,0.3)]'
                      : 'bg-red-500/20 text-red-400 border border-red-500/50 shadow-[0_0_10px_rgba(255,0,0,0.3)]'
                  }`}
                >
                  {service.status === 'connected' ? 'Connected' : 'Revoked'}
                </div>
                <button
                  onClick={() => handleReconnect(index)}
                  className="flex items-center gap-2 px-4 py-1.5 rounded-lg border border-[var(--primary)]/30 text-[var(--primary)] hover:bg-[var(--primary)]/10 transition-all text-sm font-medium"
                  title="Reconnect service"
                >
                  <RotateCcw size={14} />
                  <span>Reconnect</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        input[type='range'].slider-track {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 8px;
          border-radius: 5px;
          outline: none;
          -webkit-slider-thumb-appearance: none;
        }

        input[type='range'].slider-track::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--primary);
          cursor: pointer;
          box-shadow: 0 0 15px rgba(13, 242, 242, 0.6), inset 0 0 8px rgba(13, 242, 242, 0.3);
          border: 2px solid rgba(255, 255, 255, 0.2);
        }

        input[type='range'].slider-track::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--primary);
          cursor: pointer;
          box-shadow: 0 0 15px rgba(13, 242, 242, 0.6), inset 0 0 8px rgba(13, 242, 242, 0.3);
          border: 2px solid rgba(255, 255, 255, 0.2);
        }

        input[type='range'].slider-track::-moz-range-track {
          background: transparent;
          border: none;
        }

        input[type='range'].slider-track::-moz-range-progress {
          background-color: var(--primary);
          height: 8px;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
}
