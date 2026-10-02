'use client';

import React, { useEffect, useState } from 'react';
import { AlignLeft } from 'lucide-react';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const headingElements = Array.from(
      document.querySelectorAll('article h2, article h3, section[id]')
    );

    const items: TocItem[] = headingElements
      .map((el) => {
        const id = el.id || el.getAttribute('id') || '';
        const text = el.textContent || '';
        const level = el.tagName === 'H2' ? 2 : 3;
        return { id, text, level };
      })
      .filter((item) => item.id && item.text);

    setHeadings(items);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0% -60% 0%' }
    );

    headingElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <aside
      className="hide-on-tablet"
      style={{
        width: '240px',
        flexShrink: 0,
        height: 'calc(100vh - 64px)',
        position: 'sticky',
        top: '64px',
        overflowY: 'auto',
        padding: '1.75rem 1rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.45rem',
          fontSize: '0.76rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: 'var(--text-muted)',
          marginBottom: '0.85rem',
        }}
      >
        <AlignLeft size={14} />
        <span>On This Page</span>
      </div>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
        {headings.map((h) => {
          const isActive = activeId === h.id;
          return (
            <a
              key={h.id}
              href={`#${h.id}`}
              style={{
                fontSize: h.level === 3 ? '0.78rem' : '0.83rem',
                paddingLeft: h.level === 3 ? '0.85rem' : '0.2rem',
                color: isActive ? 'var(--accent-orange)' : 'var(--text-secondary)',
                fontWeight: isActive ? 600 : 400,
                textDecoration: 'none',
                lineHeight: 1.45,
                borderLeft: isActive
                  ? '2px solid var(--accent-orange)'
                  : '2px solid transparent',
                transition: 'all 0.15s ease',
              }}
            >
              {h.text}
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
