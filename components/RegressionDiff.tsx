import React from 'react';
import { AlertCircle, ArrowRight, ShieldAlert, Check } from 'lucide-react';

export default function RegressionDiff() {
  return (
    <div
      style={{
        margin: '2rem 0',
        borderRadius: 'var(--radius-lg)',
        background: 'var(--bg-surface)',
        border: '1px solid rgba(239, 68, 68, 0.3)',
        overflow: 'hidden',
        boxShadow: '0 10px 30px -10px rgba(239, 68, 68, 0.15)',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.85rem 1.25rem',
          background: 'rgba(239, 68, 68, 0.08)',
          borderBottom: '1px solid rgba(239, 68, 68, 0.2)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ef4444', fontWeight: 700 }}>
          <ShieldAlert size={18} />
          <span>Regression Detected by Keploy Replay</span>
        </div>
        <span
          style={{
            fontSize: '0.78rem',
            padding: '0.2rem 0.6rem',
            borderRadius: '999px',
            background: 'rgba(239, 68, 68, 0.15)',
            color: '#ef4444',
            fontWeight: 600,
          }}
        >
          FAIL · Status Mismatch
        </span>
      </div>

      {/* Grid Comparison */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1px',
          background: 'var(--border-subtle)',
        }}
      >
        {/* Left: Expected */}
        <div style={{ background: 'var(--bg-surface)', padding: '1.25rem' }}>
          <div
            style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: '#10b981',
              marginBottom: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
            }}
          >
            <Check size={14} />
            <span>Expected (Recorded Golden Master)</span>
          </div>

          <div
            style={{
              padding: '0.75rem',
              borderRadius: 'var(--radius-sm)',
              background: 'rgba(16, 185, 129, 0.06)',
              border: '1px solid rgba(16, 185, 129, 0.2)',
              fontFamily: 'ui-monospace, monospace',
              fontSize: '0.86rem',
              lineHeight: 1.6,
            }}
          >
            <div style={{ color: 'var(--text-muted)' }}># Headers</div>
            <div>Content-Length: <span style={{ color: '#10b981', fontWeight: 700 }}>277</span></div>
            <div style={{ margin: '0.5rem 0', color: 'var(--text-muted)' }}># JSON Body Payload</div>
            <div>&#123;</div>
            <div style={{ paddingLeft: '1rem' }}>&quot;name&quot;: &quot;pikachu&quot;,</div>
            <div style={{ paddingLeft: '1rem', background: 'rgba(16, 185, 129, 0.15)', color: '#10b981', fontWeight: 700 }}>
              &quot;height&quot;: 4,
            </div>
            <div style={{ paddingLeft: '1rem' }}>&quot;weight&quot;: 60,</div>
            <div style={{ paddingLeft: '1rem' }}>&quot;types&quot;: [&quot;electric&quot;]</div>
            <div>&#125;</div>
          </div>
        </div>

        {/* Right: Actual */}
        <div style={{ background: 'var(--bg-surface)', padding: '1.25rem' }}>
          <div
            style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: '#ef4444',
              marginBottom: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
            }}
          >
            <AlertCircle size={14} />
            <span>Actual (Modified Application Build)</span>
          </div>

          <div
            style={{
              padding: '0.75rem',
              borderRadius: 'var(--radius-sm)',
              background: 'rgba(239, 68, 68, 0.06)',
              border: '1px solid rgba(239, 68, 68, 0.2)',
              fontFamily: 'ui-monospace, monospace',
              fontSize: '0.86rem',
              lineHeight: 1.6,
            }}
          >
            <div style={{ color: 'var(--text-muted)' }}># Headers</div>
            <div>Content-Length: <span style={{ color: '#ef4444', fontWeight: 700 }}>278</span></div>
            <div style={{ margin: '0.5rem 0', color: 'var(--text-muted)' }}># JSON Body Payload</div>
            <div>&#123;</div>
            <div style={{ paddingLeft: '1rem' }}>&quot;name&quot;: &quot;pikachu&quot;,</div>
            <div style={{ paddingLeft: '1rem', background: 'rgba(239, 68, 68, 0.2)', color: '#ef4444', fontWeight: 700 }}>
              &quot;height&quot;: 14,  <span style={{ fontSize: '0.75rem', color: '#f87171' }}>← Regression (+10)</span>
            </div>
            <div style={{ paddingLeft: '1rem' }}>&quot;weight&quot;: 60,</div>
            <div style={{ paddingLeft: '1rem' }}>&quot;types&quot;: [&quot;electric&quot;]</div>
            <div>&#125;</div>
          </div>
        </div>
      </div>

      {/* Footer takeaway */}
      <div
        style={{
          padding: '0.85rem 1.25rem',
          background: 'rgba(0, 0, 0, 0.2)',
          borderTop: '1px solid var(--border-subtle)',
          fontSize: '0.88rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.55,
        }}
      >
        <strong style={{ color: 'var(--text-primary)' }}>Why Keploy Caught This Instantly:</strong> You didn&apos;t write an explicit assertion for Pikachu&apos;s height. Keploy automatically verified the entire contract payload byte-for-byte while safely discounting auto-detected noise fields like <code>header.Date</code>.
      </div>
    </div>
  );
}
