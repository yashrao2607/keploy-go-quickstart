'use client';

import React, { useState } from 'react';
import { ArrowRight, Server, Database, Radio, CheckCircle2, RotateCcw, ShieldCheck } from 'lucide-react';

export default function ArchitectureDiagram() {
  const [activeMode, setActiveMode] = useState<'record' | 'test'>('record');

  return (
    <div
      style={{
        margin: '2rem 0',
        borderRadius: 'var(--radius-lg)',
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        padding: '1.75rem',
        boxShadow: 'var(--shadow-panel)',
      }}
    >
      {/* Toggle Bar */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1.5rem',
          gap: '1rem',
        }}
      >
        <div>
          <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
            Interactive Keploy Architecture
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
            Toggle between the two operational phases of Keploy eBPF proxy
          </p>
        </div>

        <div
          style={{
            display: 'inline-flex',
            padding: '4px',
            borderRadius: 'var(--radius-md)',
            background: 'rgba(0, 0, 0, 0.3)',
            border: '1px solid var(--border-subtle)',
          }}
        >
          <button
            onClick={() => setActiveMode('record')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.4rem 0.85rem',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.82rem',
              fontWeight: 600,
              border: 'none',
              background: activeMode === 'record' ? 'var(--accent-orange)' : 'transparent',
              color: activeMode === 'record' ? '#ffffff' : 'var(--text-secondary)',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            <Radio size={14} />
            <span>01 Record Mode</span>
          </button>
          <button
            onClick={() => setActiveMode('test')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.4rem 0.85rem',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.82rem',
              fontWeight: 600,
              border: 'none',
              background: activeMode === 'test' ? 'var(--accent-cyan)' : 'transparent',
              color: activeMode === 'test' ? '#ffffff' : 'var(--text-secondary)',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            <RotateCcw size={14} />
            <span>02 Test (Replay) Mode</span>
          </button>
        </div>
      </div>

      {/* Visual Pipeline */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
          gap: '1rem',
          position: 'relative',
        }}
      >
        {/* Node 1: Client / Traffic */}
        <div
          style={{
            padding: '1.25rem',
            borderRadius: 'var(--radius-md)',
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid var(--border-subtle)',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              margin: '0 auto 0.75rem auto',
              borderRadius: '10px',
              background: 'rgba(255, 122, 24, 0.12)',
              color: 'var(--accent-orange)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Radio size={20} />
          </div>
          <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
            {activeMode === 'record' ? 'API Traffic / curl' : 'Keploy Test Runner'}
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
            {activeMode === 'record'
              ? 'Sends GET /api/pokemon/pikachu to port 8080'
              : 'Replays captured HTTP request identically'}
          </div>
        </div>

        {/* Node 2: Keploy Interception Layer */}
        <div
          style={{
            padding: '1.25rem',
            borderRadius: 'var(--radius-md)',
            background:
              activeMode === 'record'
                ? 'rgba(255, 122, 24, 0.06)'
                : 'rgba(0, 210, 255, 0.06)',
            border: `1px solid ${
              activeMode === 'record'
                ? 'rgba(255, 122, 24, 0.3)'
                : 'rgba(0, 210, 255, 0.3)'
            }`,
            textAlign: 'center',
            position: 'relative',
          }}
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              margin: '0 auto 0.75rem auto',
              borderRadius: '10px',
              background:
                activeMode === 'record'
                  ? 'rgba(255, 122, 24, 0.2)'
                  : 'rgba(0, 210, 255, 0.2)',
              color: activeMode === 'record' ? 'var(--accent-orange)' : 'var(--accent-cyan)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ShieldCheck size={20} />
          </div>
          <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
            Keploy eBPF Proxy
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
            {activeMode === 'record'
              ? 'Hooks sys_socket, captures ingress & egress bytes'
              : 'Virtual DNS & socket intercept returns cached mocks'}
          </div>
        </div>

        {/* Node 3: The Go Application */}
        <div
          style={{
            padding: '1.25rem',
            borderRadius: 'var(--radius-md)',
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid var(--border-subtle)',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              margin: '0 auto 0.75rem auto',
              borderRadius: '10px',
              background: 'rgba(16, 185, 129, 0.12)',
              color: '#10b981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Server size={20} />
          </div>
          <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
            Go Application
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
            Unmodified Go binary running natively on port 8080
          </div>
        </div>

        {/* Node 4: External World / Artifacts */}
        <div
          style={{
            padding: '1.25rem',
            borderRadius: 'var(--radius-md)',
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid var(--border-subtle)',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              margin: '0 auto 0.75rem auto',
              borderRadius: '10px',
              background: 'rgba(168, 85, 247, 0.12)',
              color: '#a855f7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Database size={20} />
          </div>
          <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
            {activeMode === 'record' ? 'PokeAPI & Test YAML' : 'Deterministic Mock Replay'}
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
            {activeMode === 'record'
              ? 'Real HTTPS calls recorded into test-set-0/mocks.yaml'
              : 'Zero external network calls; isolated sandbox comparison'}
          </div>
        </div>
      </div>
    </div>
  );
}
