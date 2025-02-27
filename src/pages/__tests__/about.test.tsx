import React, { ComponentProps } from 'react';
import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import AboutPage from '../about';
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

describe('About Page', () => {
  it('renders the about page heading', () => {
    render(<AboutPage {...mockPageProps} />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<AboutPage {...mockPageProps} />);
    expect(screen.getByText('Go back to the homepage')).toBeInTheDocument();
  });
});
