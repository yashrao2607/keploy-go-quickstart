import type { Metadata } from 'next';
import './globals.css';
import './prism.css';

export const metadata: Metadata = {
  title: 'Zero-Effort Regression Testing in Go: Interactive Keploy Guide',
  description:
    'A hands-on, beginner-friendly guide to turning live API traffic into automated regression tests and deterministic mocks in Go using Keploy.',
  keywords: ['Keploy', 'Golang', 'API Testing', 'eBPF', 'Regression Testing', 'Zero Code Testing'],
  authors: [{ name: 'DevRel Team' }],
  openGraph: {
    title: 'Zero-Effort Regression Testing in Go with Keploy',
    description:
      'Learn how to record real network traffic, auto-generate mocks, and catch regressions without writing test code.',
    type: 'article',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🐰</text></svg>"
        />
      </head>
      <body>
        <div className="bg-ambient-glow" />
        {children}
      </body>
    </html>
  );
}
