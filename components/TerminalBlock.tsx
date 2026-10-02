'use client';

import React, { useState } from 'react';
import { Terminal, Copy, Check } from 'lucide-react';

interface TerminalBlockProps {
  command: string;
  output?: string;
  shell?: 'bash' | 'powershell';
  cwd?: string;
}

export default function TerminalBlock({
  command,
  output,
  shell = 'bash',
  cwd,
}: TerminalBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const promptSymbol = shell === 'powershell' ? 'PS >' : '$';

  return (
    <div
      style={{
        margin: '1.5rem 0',
        borderRadius: 'var(--radius-md)',
        background: '#0a0e17',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-panel)',
      }}
    >
      {/* Terminal Title Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.6rem 0.95rem',
          background: 'rgba(255, 255, 255, 0.03)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#eab308' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e' }} />
          <span
            style={{
              marginLeft: '0.5rem',
              fontSize: '0.78rem',
              color: '#94a3b8',
              fontFamily: 'ui-monospace, monospace',
            }}
          >
            {cwd ? `${cwd} — ` : ''}{shell}
          </span>
        </div>

        <button
          onClick={handleCopy}
          aria-label="Copy terminal command"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            padding: '0.22rem 0.55rem',
            fontSize: '0.75rem',
            background: copied ? 'rgba(34, 197, 94, 0.2)' : 'rgba(255, 255, 255, 0.06)',
            color: copied ? '#4ade80' : '#cbd5e1',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: 'var(--radius-sm)',
            cursor: 'pointer',
            transition: 'all 0.15s ease',
          }}
        >
          {copied ? <Check size={12} /> : <Copy size={12} />}
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>

      {/* Terminal Command Line */}
      <div
        style={{
          padding: '0.9rem 1rem',
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
          fontSize: '0.92rem',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '0.65rem',
          overflowX: 'auto',
          color: '#f8fafc',
          background: 'rgba(0, 0, 0, 0.3)',
        }}
      >
        <span style={{ color: '#ff7a18', fontWeight: 700, userSelect: 'none' }}>
          {promptSymbol}
        </span>
        <span style={{ wordBreak: 'break-all' }}>{command}</span>
      </div>

      {/* Optional Output Pane */}
      {output && (
        <div
          style={{
            padding: '0.85rem 1rem',
            background: 'rgba(0, 0, 0, 0.55)',
            borderTop: '1px dashed rgba(255, 255, 255, 0.07)',
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
            fontSize: '0.84rem',
            color: '#94a3b8',
            lineHeight: 1.55,
            whiteSpace: 'pre-wrap',
            overflowX: 'auto',
            maxHeight: '360px',
          }}
        >
          {output}
        </div>
      )}
    </div>
  );
}
