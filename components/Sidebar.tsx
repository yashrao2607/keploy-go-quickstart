'use client';

import React from 'react';
import {
  Compass,
  CheckCircle2,
  Terminal,
  FileCode2,
  PlayCircle,
  AlertTriangle,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Cpu,
} from 'lucide-react';

interface SidebarProps {
  activeId?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ activeId, isOpen, onClose }: SidebarProps) {
  const sections = [
    { id: 'introduction', label: '1. Introduction & Mental Model', icon: Compass },
    { id: 'prerequisites', label: '2. Prerequisites & Setup', icon: Cpu },
    { id: 'step-1-get-the-sample-code', label: 'Step 1: Get the Sample App', icon: Terminal },
    { id: 'step-2-start-dependencies', label: 'Step 2: Start & Verify App', icon: PlayCircle },
    { id: 'step-3-start-keploy-in-record-mode', label: 'Step 3: Keploy Record Mode', icon: ShieldCheck },
    { id: 'step-4-generate-traffic', label: 'Step 4: Generate API Traffic', icon: PlayCircle },
    { id: 'step-5-inspect-generated-artifacts', label: 'Step 5: Inspect Tests & Mocks', icon: FileCode2 },
    { id: 'step-6-replay-with-keploy-test', label: 'Step 6: Replay & Zero-Mock', icon: CheckCircle2 },
    { id: 'step-7-catch-a-real-world-regression', label: 'Step 7: Catch Regression & Diff', icon: AlertTriangle },
    { id: 'what-just-happened', label: 'What Just Happened?', icon: Rocket },
    { id: 'things-that-surprised-me', label: 'Things That Surprised Me', icon: Lightbulb },
    { id: 'troubleshooting', label: 'Troubleshooting Guide', icon: AlertTriangle },
    { id: 'going-further', label: 'Going Further with Keploy', icon: Rocket },
  ];

  const handleLinkClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    if (onClose) {
      onClose();
    }
  };

  return (
    <aside
      className={`sidebar-drawer ${isOpen ? 'open' : ''}`}
      style={{
        width: '270px',
        flexShrink: 0,
        height: 'calc(100vh - 64px)',
        position: 'sticky',
        top: '64px',
        overflowY: 'auto',
        padding: '1.5rem 1rem',
        borderRight: '1px solid var(--border-subtle)',
        background: 'var(--bg-primary)',
      }}
    >
      <div
        style={{
          fontSize: '0.74rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: 'var(--text-muted)',
          marginBottom: '0.75rem',
          paddingLeft: '0.5rem',
        }}
      >
        Tutorial Walkthrough
      </div>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
        {sections.map((item) => {
          const Icon = item.icon;
          const isActive = activeId === item.id;

          return (
            <button
              key={item.id}
              onClick={() => handleLinkClick(item.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                padding: '0.5rem 0.65rem',
                borderRadius: 'var(--radius-sm)',
                background: isActive ? 'rgba(255, 122, 24, 0.12)' : 'transparent',
                border: 'none',
                color: isActive ? 'var(--accent-orange)' : 'var(--text-secondary)',
                fontWeight: isActive ? 600 : 400,
                fontSize: '0.84rem',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.color = 'var(--text-primary)';
                  e.currentTarget.style.background = 'var(--bg-surface-hover)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.background = 'transparent';
                }
              }}
            >
              <Icon size={15} style={{ flexShrink: 0 }} />
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* DevRel Note at Sidebar Bottom */}
      <div
        style={{
          marginTop: '2rem',
          padding: '0.85rem',
          borderRadius: 'var(--radius-md)',
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid var(--border-subtle)',
          fontSize: '0.78rem',
          color: 'var(--text-muted)',
          lineHeight: 1.5,
        }}
      >
        <strong style={{ color: 'var(--text-primary)' }}>Authentic Execution:</strong> Every step and command documented here was tested and executed live on Keploy v3.6.85.
      </div>
    </aside>
  );
}
