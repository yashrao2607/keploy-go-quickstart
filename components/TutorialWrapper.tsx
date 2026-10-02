'use client';

import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import TableOfContents from './TableOfContents';

interface TutorialWrapperProps {
  children: React.ReactNode;
}

export default function TutorialWrapper({ children }: TutorialWrapperProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header
        onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
        isSidebarOpen={isSidebarOpen}
      />

      <div
        style={{
          display: 'flex',
          maxWidth: '1440px',
          margin: '0 auto',
          width: '100%',
          flex: 1,
          position: 'relative',
        }}
      >
        {/* Left Navigation Sidebar */}
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        {/* Center Main Article */}
        <main
          className="content-container"
          style={{
            flex: 1,
            minWidth: 0,
            padding: '2.5rem 3rem 5rem 3rem',
            maxWidth: '920px',
            margin: '0 auto',
          }}
        >
          <article>{children}</article>
        </main>

        {/* Right On This Page Table of Contents */}
        <TableOfContents />
      </div>

      {/* Footer */}
      <footer
        style={{
          borderTop: '1px solid var(--border-subtle)',
          padding: '2rem 1.5rem',
          textAlign: 'center',
          fontSize: '0.85rem',
          color: 'var(--text-muted)',
          background: 'var(--bg-primary)',
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div>
            Built with <strong>Next.js</strong> &amp; <strong>MDX</strong> · Developed for the Keploy Engineering Assignment
          </div>
          <div style={{ marginTop: '0.4rem', fontSize: '0.78rem' }}>
            Verified against live execution on <strong>Keploy v3.6.85</strong> &amp; <strong>Go 1.23.6</strong>
          </div>
        </div>
      </footer>
    </div>
  );
}
