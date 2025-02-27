import * as React from 'react';
import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import IndexPage from '../index';
import { mockPageProps } from './utils/test-utils';

// Mock the Gatsby Link component
vi.mock('gatsby', () => ({
  Link: ({ to, children }: { to: string; children: React.ReactNode }) => (
    <a href={to}>{children}</a>
  ),
}));

// Mock the SEO component
vi.mock('../../components/seo', () => ({
  default: ({ title }: { title: string }) => <title>{title}</title>,
}));

describe('Index Page', () => {
  it('renders the main heading', () => {
    render(<IndexPage {...mockPageProps} />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<IndexPage {...mockPageProps} />);
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThan(0);
  });

  it('renders the hero section', () => {
    render(<IndexPage {...mockPageProps} />);
    expect(screen.getByTestId('hero-section')).toBeInTheDocument();
  });
});
