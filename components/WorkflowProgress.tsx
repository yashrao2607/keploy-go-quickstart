'use client';

import React from 'react';
import { CircleDot, FileCode2, PlayCircle, ShieldCheck } from 'lucide-react';

export default function WorkflowProgress() {
  const phases = [
    { id: 'step-3-start-keploy-in-record-mode', num: '01', title: 'RECORD', icon: CircleDot, desc: 'Capture Live Traffic' },
    { id: 'step-5-inspect-generated-artifacts', num: '02', title: 'GENERATE', icon: FileCode2, desc: 'Auto-Generate Tests & Mocks' },
    { id: 'step-6-replay-with-keploy-test', num: '03', title: 'REPLAY', icon: PlayCircle, desc: 'Sandbox Replay & Isolation' },
    { id: 'step-7-catch-a-real-world-regression', num: '04', title: 'VERIFY', icon: ShieldCheck, desc: 'Assert & Catch Regressions' },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      style={{
        margin: '2rem 0',
        padding: '0.85rem 1rem',
        borderRadius: 'var(--radius-lg)',
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        boxShadow: 'var(--shadow-panel)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '0.75rem',
        }}
      >
        {phases.map((phase) => {
          const Icon = phase.icon;
          return (
            <button
              key={phase.num}
              onClick={() => scrollToSection(phase.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.65rem 0.85rem',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-primary)',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-orange)';
                e.currentTarget.style.background = 'rgba(255, 122, 24, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'rgba(255, 122, 24, 0.12)',
                  color: 'var(--accent-orange)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Icon size={16} />
              </div>
              <div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontWeight: 700 }}>
                  PHASE {phase.num}
                </div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {phase.title}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
