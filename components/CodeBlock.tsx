'use client';

import React, { useState, useEffect } from 'react';
import { Copy, Check, FileCode } from 'lucide-react';
import Prism from 'prismjs';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-http';

interface CodeBlockProps {
  children?: React.ReactNode;
  code?: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
}

export default function CodeBlock({
  children,
  code: rawCode,
  language = 'bash',
  filename,
  showLineNumbers = false,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  // Extract raw text
  const textContent =
    rawCode ||
    (typeof children === 'string'
      ? children
      : React.Children.toArray(children).join('')).trim();

  useEffect(() => {
    Prism.highlightAll();
  }, [textContent, language]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <div
      style={{
        margin: '1.5rem 0',
        borderRadius: 'var(--radius-md)',
        background: 'var(--code-bg)',
        border: '1px solid var(--border-subtle)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-panel)',
      }}
    >
      {/* Top Header Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.55rem 0.95rem',
          background: 'rgba(0, 0, 0, 0.25)',
          borderBottom: '1px solid var(--border-subtle)',
          fontSize: '0.8rem',
          color: 'var(--text-secondary)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
          <FileCode size={14} style={{ color: 'var(--accent-orange)' }} />
          <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
            {filename || language.toUpperCase()}
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <span
            style={{
              fontSize: '0.72rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: 'var(--text-muted)',
            }}
          >
            {language}
          </span>
          <button
            onClick={handleCopy}
            aria-label="Copy code to clipboard"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.25rem 0.55rem',
              fontSize: '0.75rem',
              background: copied ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.06)',
              color: copied ? '#10b981' : 'var(--text-secondary)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            {copied ? <Check size={12} /> : <Copy size={12} />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>

      {/* Code Content */}
      <div style={{ overflowX: 'auto', padding: '1rem' }}>
        <pre style={{ margin: 0, background: 'transparent' }}>
          <code className={`language-${language}`}>{textContent}</code>
        </pre>
      </div>
    </div>
  );
}
