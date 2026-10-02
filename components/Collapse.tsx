'use client';

import React, { useState } from 'react';
import { ChevronRight, Cpu } from 'lucide-react';

interface CollapseProps {
  title: string;
  badge?: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

export default function Collapse({
  title,
  badge = 'Deep Dive',
  defaultOpen = false,
  children,
}: CollapseProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      style={{
        margin: '1.25rem 0',
        borderRadius: 'var(--radius-md)',
        background: 'var(--bg-secondary)',
        border: '1px solid var(--border-subtle)',
        overflow: 'hidden',
        transition: 'all 0.2s ease',
      }}
    >
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.75rem 1rem',
          background: isOpen ? 'var(--bg-surface-hover)' : 'var(--bg-secondary)',
          border: 'none',
          color: 'var(--text-primary)',
          cursor: 'pointer',
          textAlign: 'left',
          fontSize: '0.9rem',
          fontWeight: 600,
          gap: '0.75rem',
          transition: 'background-color 0.15s ease',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
          <ChevronRight
            size={16}
            style={{
              color: 'var(--accent-orange)',
              transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s ease',
              flexShrink: 0,
            }}
          />
          <span>{title}</span>
        </div>

        {badge && (
          <span
            style={{
              fontSize: '0.72rem',
              padding: '0.15rem 0.5rem',
              borderRadius: '999px',
              background: 'rgba(0, 210, 255, 0.1)',
              color: 'var(--accent-cyan)',
              border: '1px solid rgba(0, 210, 255, 0.2)',
              fontWeight: 600,
              flexShrink: 0,
            }}
          >
            {badge}
          </span>
        )}
      </button>

      {isOpen && (
        <div
          style={{
            padding: '1rem',
            borderTop: '1px solid var(--border-subtle)',
            fontSize: '0.92rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.65,
            background: 'var(--bg-surface)',
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
