import React from 'react';
import { Info, Lightbulb, AlertTriangle, CheckCircle2, AlertOctagon } from 'lucide-react';

interface CalloutProps {
  type?: 'info' | 'tip' | 'warning' | 'success' | 'important';
  title?: string;
  children: React.ReactNode;
}

export default function Callout({
  type = 'info',
  title,
  children,
}: CalloutProps) {
  const configs = {
    info: {
      icon: Info,
      color: '#00d2ff',
      bg: 'var(--callout-info-bg)',
      border: 'var(--callout-info-border)',
      defaultTitle: 'Note',
    },
    tip: {
      icon: Lightbulb,
      color: '#10b981',
      bg: 'var(--callout-tip-bg)',
      border: 'var(--callout-tip-border)',
      defaultTitle: 'Pro Tip',
    },
    warning: {
      icon: AlertTriangle,
      color: '#f59e0b',
      bg: 'var(--callout-warning-bg)',
      border: 'var(--callout-warning-border)',
      defaultTitle: 'Watch Out',
    },
    success: {
      icon: CheckCircle2,
      color: '#10b981',
      bg: 'var(--callout-tip-bg)',
      border: 'var(--callout-tip-border)',
      defaultTitle: 'Verified Result',
    },
    important: {
      icon: AlertOctagon,
      color: '#ef4444',
      bg: 'var(--callout-important-bg)',
      border: 'var(--callout-important-border)',
      defaultTitle: 'Critical Requirement',
    },
  };

  const config = configs[type] || configs.info;
  const IconComponent = config.icon;

  return (
    <div
      style={{
        margin: '1.5rem 0',
        padding: '1.1rem 1.25rem',
        borderRadius: 'var(--radius-md)',
        background: config.bg,
        border: `1px solid ${config.border}`,
        boxShadow: 'var(--shadow-panel)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.55rem',
          marginBottom: '0.55rem',
          fontWeight: 700,
          fontSize: '0.95rem',
          color: config.color,
          letterSpacing: '-0.01em',
        }}
      >
        <IconComponent size={18} />
        <span>{title || config.defaultTitle}</span>
      </div>
      <div
        style={{
          fontSize: '0.96rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.68,
        }}
      >
        {children}
      </div>
    </div>
  );
}
