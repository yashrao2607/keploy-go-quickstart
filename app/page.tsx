import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';

import TutorialWrapper from '@/components/TutorialWrapper';
import WorkflowProgress from '@/components/WorkflowProgress';
import ArchitectureDiagram from '@/components/ArchitectureDiagram';
import Callout from '@/components/Callout';
import Step from '@/components/Step';
import WhyItMatters from '@/components/WhyItMatters';
import FilePreview from '@/components/FilePreview';
import TerminalBlock from '@/components/TerminalBlock';
import CodeBlock from '@/components/CodeBlock';
import RegressionDiff from '@/components/RegressionDiff';

const components = {
  WorkflowProgress,
  ArchitectureDiagram,
  Callout,
  Step,
  WhyItMatters,
  FilePreview,
  TerminalBlock,
  CodeBlock,
  RegressionDiff,
  h1: (props: any) => (
    <h1
      id="introduction"
      style={{
        fontSize: '2.5rem',
        fontWeight: 850,
        letterSpacing: '-0.035em',
        lineHeight: 1.18,
        marginBottom: '1.25rem',
        background: 'linear-gradient(135deg, #ffffff 40%, #94a3b8 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
      {...props}
    />
  ),
  h2: (props: any) => {
    const text = typeof props.children === 'string' ? props.children : '';
    const id =
      props.id ||
      text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
    return (
      <h2
        id={id}
        style={{
          fontSize: '1.65rem',
          fontWeight: 750,
          letterSpacing: '-0.025em',
          marginTop: '2.75rem',
          marginBottom: '1rem',
          color: 'var(--text-primary)',
          scrollMarginTop: '80px',
        }}
        {...props}
      />
    );
  },
  h3: (props: any) => (
    <h3
      style={{
        fontSize: '1.25rem',
        fontWeight: 700,
        marginTop: '1.75rem',
        marginBottom: '0.65rem',
        color: 'var(--text-primary)',
      }}
      {...props}
    />
  ),
  p: (props: any) => (
    <p
      style={{
        fontSize: '1.02rem',
        lineHeight: 1.78,
        color: 'var(--text-secondary)',
        marginBottom: '1.25rem',
      }}
      {...props}
    />
  ),
  ul: (props: any) => (
    <ul
      style={{
        paddingLeft: '1.5rem',
        marginBottom: '1.5rem',
        color: 'var(--text-secondary)',
        lineHeight: 1.75,
      }}
      {...props}
    />
  ),
  ol: (props: any) => (
    <ol
      style={{
        paddingLeft: '1.5rem',
        marginBottom: '1.5rem',
        color: 'var(--text-secondary)',
        lineHeight: 1.75,
      }}
      {...props}
    />
  ),
  li: (props: any) => (
    <li
      style={{
        marginBottom: '0.5rem',
      }}
      {...props}
    />
  ),
  pre: (props: any) => {
    // If the pre wraps a code block
    const child = props.children;
    if (child && child.props && child.props.className) {
      const language = child.props.className.replace('language-', '');
      const code = child.props.children;
      return <CodeBlock language={language} code={code} />;
    }
    return (
      <div
        style={{
          margin: '1.25rem 0',
          padding: '1rem',
          borderRadius: 'var(--radius-md)',
          background: 'var(--code-bg)',
          border: '1px solid var(--border-subtle)',
          overflowX: 'auto',
        }}
      >
        <pre {...props} />
      </div>
    );
  },
};

export default async function TutorialPage() {
  const filePath = path.join(process.cwd(), 'content', 'tutorial.mdx');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data: frontmatter, content } = matter(fileContent);

  return (
    <TutorialWrapper>
      {/* Article Metadata Badge Bar */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '0.65rem',
          marginBottom: '1.5rem',
          fontSize: '0.82rem',
          color: 'var(--text-muted)',
        }}
      >
        <span
          style={{
            padding: '0.2rem 0.65rem',
            borderRadius: '999px',
            background: 'rgba(255, 122, 24, 0.12)',
            color: 'var(--accent-orange)',
            fontWeight: 700,
            border: '1px solid rgba(255, 122, 24, 0.25)',
          }}
        >
          {frontmatter.version || 'Keploy v3.6.85'}
        </span>
        <span>•</span>
        <span>{frontmatter.readTime || '12 min read'}</span>
        <span>•</span>
        <span>{frontmatter.author || 'DevRel Engineering'}</span>
        <span>•</span>
        <span>{frontmatter.date || 'October 2026'}</span>
      </div>

      {/* Main MDX Rendered Content */}
      <MDXRemote source={content} components={components} />
    </TutorialWrapper>
  );
}
