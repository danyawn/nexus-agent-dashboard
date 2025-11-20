'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';

interface DeployAgentModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  onInitialize?: (data: AgentDeploymentData) => void;
}

interface AgentDeploymentData {
  agentName: string;
  modelArchitecture: string;
  riskTolerance: number;
}

const DeployAgentModal: React.FC<DeployAgentModalProps> = ({
  isOpen = true,
  onClose = () => {},
  onInitialize = () => {},
}) => {
  const [agentName, setAgentName] = useState('');
  const [modelArchitecture, setModelArchitecture] = useState('GPT-4o');
  const [riskTolerance, setRiskTolerance] = useState(0.5);

  const handleInitialize = () => {
    onInitialize({
      agentName,
      modelArchitecture,
      riskTolerance,
    });
    setAgentName('');
    setModelArchitecture('GPT-4o');
    setRiskTolerance(0.5);
  };

  const handleCancel = () => {
    setAgentName('');
    setModelArchitecture('GPT-4o');
    setRiskTolerance(0.5);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <style>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 50;
          backdrop-filter: blur(2px);
        }

        .modal-container {
          background: #0A0A0F;
          background-color: rgba(10, 10, 15, 0.9);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          border-radius: 12px;
          padding: 24px;
          max-width: 28rem;
          width: 90%;
          position: relative;
        }

        @media (min-width: 768px) {
          .modal-container {
            padding: 32px;
            width: 100%;
          }
        }

        .modal-title {
          color: white;
          font-weight: bold;
          font-size: 20px;
          line-height: 28px;
          margin-bottom: 20px;
        }

        @media (min-width: 768px) {
          .modal-title {
            font-size: 24px;
            line-height: 32px;
            margin-bottom: 24px;
          }
        }

        .close-button {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.6);
          cursor: pointer;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        .close-button:hover {
          color: white;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-label {
          display: block;
          color: white;
          font-weight: 600;
          font-size: 14px;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .agent-name-input {
          width: 100%;
          background-color: transparent;
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          padding: 10px 12px;
          border-radius: 8px;
          font-size: 14px;
          transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        .agent-name-input::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        .agent-name-input:focus {
          outline: none;
          border-color: #0df2f2;
          box-shadow: 0 0 0 2px rgba(13, 242, 242, 0.2), 0 0 8px rgba(13, 242, 242, 0.5);
        }

        .model-select {
          width: 100%;
          background-color: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          padding: 10px 12px;
          border-radius: 8px;
          font-size: 14px;
          cursor: pointer;
          transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='rgba(255,255,255,0.8)' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 10px center;
          padding-right: 30px;
        }

        .model-select:focus {
          outline: none;
          border-color: #0df2f2;
          box-shadow: 0 0 0 2px rgba(13, 242, 242, 0.2), 0 0 8px rgba(13, 242, 242, 0.5);
        }

        .model-select option {
          background-color: #0A0A0F;
          color: white;
          padding: 8px;
        }

        .risk-slider {
          width: 100%;
          height: 6px;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.2);
          outline: none;
          -webkit-appearance: none;
          appearance: none;
        }

        .risk-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #0df2f2;
          cursor: pointer;
          transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 0 0 4px rgba(13, 242, 242, 0.2);
        }

        .risk-slider::-webkit-slider-thumb:hover {
          box-shadow: 0 0 0 6px rgba(13, 242, 242, 0.3), 0 0 12px rgba(13, 242, 242, 0.6);
        }

        .risk-slider::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #0df2f2;
          cursor: pointer;
          border: none;
          transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 0 0 4px rgba(13, 242, 242, 0.2);
        }

        .risk-slider::-moz-range-thumb:hover {
          box-shadow: 0 0 0 6px rgba(13, 242, 242, 0.3), 0 0 12px rgba(13, 242, 242, 0.6);
        }

        .risk-slider::-moz-range-track {
          background: transparent;
          border: none;
        }

        .risk-value-display {
          color: #0df2f2;
          font-size: 12px;
          margin-top: 6px;
          font-weight: 600;
        }

        .modal-footer {
          display: flex;
          gap: 12px;
          margin-top: 32px;
        }

        .button-cancel {
          flex: 1;
          background: none;
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: rgba(255, 255, 255, 0.6);
          padding: 10px 16px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        .button-cancel:hover {
          color: rgba(255, 255, 255, 0.8);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .button-initialize {
          flex: 1;
          background-color: #0df2f2;
          color: #000000;
          padding: 10px 16px;
          border: none;
          border-radius: 8px;
          font-size: 14px;
          font-weight: bold;
          cursor: pointer;
          transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
          animation: pulse-button 2s ease-in-out infinite;
        }

        .button-initialize:hover {
          background-color: #00e8e8;
          box-shadow: 0 0 20px rgba(13, 242, 242, 0.6);
        }

        .button-initialize:active {
          transform: scale(0.98);
        }

        @keyframes pulse-button {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(13, 242, 242, 0.4);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(13, 242, 242, 0.2);
          }
        }
      `}</style>

      <div className="modal-container">
        <button className="close-button" onClick={handleCancel}>
          <X size={20} />
        </button>

        <h1 className="modal-title">Deploy New Agent</h1>

        <div className="form-group">
          <label className="form-label">Agent Name</label>
          <input
            type="text"
            className="agent-name-input"
            placeholder="e.g. Omega-Sentinel"
            value={agentName}
            onChange={(e) => setAgentName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Model Architecture</label>
          <select
            className="model-select"
            value={modelArchitecture}
            onChange={(e) => setModelArchitecture(e.target.value)}
          >
            <option value="GPT-4o">GPT-4o</option>
            <option value="Claude-3.5-Sonnet">Claude-3.5-Sonnet</option>
            <option value="Llama-3-70B">Llama-3-70B</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Risk Tolerance (Temperature)</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            className="risk-slider"
            value={riskTolerance}
            onChange={(e) => setRiskTolerance(parseFloat(e.target.value))}
          />
          <div className="risk-value-display">{riskTolerance.toFixed(2)}</div>
        </div>

        <div className="modal-footer">
          <button className="button-cancel" onClick={handleCancel}>
            Cancel
          </button>
          <button className="button-initialize" onClick={handleInitialize}>
            Initialize Sequence
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeployAgentModal;
