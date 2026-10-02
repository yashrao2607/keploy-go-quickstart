import React from 'react';
import { Target, CheckCircle } from 'lucide-react';

interface StepProps {
  number: string | number;
  title: string;
  goal?: string;
  expectedResult?: string;
  children: React.ReactNode;
  id?: string;
}

export default function Step({
  number,
  title,
  goal,
  expectedResult,
  children,
  id,
}: StepProps) {
  const formattedNumber = String(number).padStart(2, '0');

  return (
    <section
      id={id}
      style={{
        margin: '3rem 0 2.5rem 0',
        padding: '1.75rem',
        borderRadius: 'var(--radius-lg)',
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        boxShadow: 'var(--shadow-panel)',
        position: 'relative',
      }}
    >
      {/* Header Bar */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.75rem',
          paddingBottom: '1.25rem',
          marginBottom: '1.25rem',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, var(--accent-orange), #ea580c)',
              color: '#ffffff',
              fontWeight: 800,
              fontSize: '0.95rem',
              boxShadow: '0 4px 12px rgba(255, 122, 24, 0.3)',
            }}
          >
            {formattedNumber}
          </div>
          <h2
            style={{
              fontSize: '1.45rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              margin: 0,
            }}
          >
            {title}
          </h2>
        </div>

        {goal && (
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.3rem 0.75rem',
              borderRadius: '999px',
              background: 'rgba(0, 210, 255, 0.08)',
              border: '1px solid rgba(0, 210, 255, 0.25)',
              color: 'var(--accent-cyan)',
              fontSize: '0.82rem',
              fontWeight: 600,
            }}
          >
            <Target size={14} />
            <span>Goal: {goal}</span>
          </div>
        )}
      </div>

      {/* Main Step Body */}
      <div>{children}</div>

      {/* Expected Result Footer */}
      {expectedResult && (
        <div
          style={{
            marginTop: '1.5rem',
            padding: '0.85rem 1.1rem',
            borderRadius: 'var(--radius-md)',
            background: 'rgba(16, 185, 129, 0.08)',
            border: '1px solid rgba(16, 185, 129, 0.25)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.65rem',
            fontSize: '0.9rem',
            color: 'var(--text-secondary)',
          }}
        >
          <CheckCircle size={18} style={{ color: '#10b981', flexShrink: 0, marginTop: '2px' }} />
          <div>
            <strong style={{ color: '#10b981' }}>Expected Outcome: </strong>
            <span>{expectedResult}</span>
          </div>
        </div>
      )}
    </section>
  );
}
