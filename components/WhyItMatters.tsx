import React from 'react';
import { HelpCircle, Sparkles } from 'lucide-react';

interface WhyItMattersProps {
  children: React.ReactNode;
  concept?: string;
}

export default function WhyItMatters({ children, concept }: WhyItMattersProps) {
  return (
    <div
      style={{
        margin: '1.25rem 0',
        padding: '1.1rem 1.25rem',
        borderRadius: 'var(--radius-md)',
        background: 'linear-gradient(135deg, rgba(255, 122, 24, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%)',
        border: '1px solid rgba(255, 122, 24, 0.22)',
        boxShadow: '0 4px 20px -5px rgba(255, 122, 24, 0.1)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.45rem',
          marginBottom: '0.5rem',
          color: 'var(--accent-orange)',
          fontWeight: 700,
          fontSize: '0.88rem',
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
        }}
      >
        <Sparkles size={16} />
        <span>Why It Matters {concept ? `· ${concept}` : ''}</span>
      </div>
      <div
        style={{
          color: 'var(--text-secondary)',
          fontSize: '0.95rem',
          lineHeight: 1.65,
        }}
      >
        {children}
      </div>
    </div>
  );
}
