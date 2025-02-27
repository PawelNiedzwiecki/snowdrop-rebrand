import * as React from 'react';
import * as Gatsby from 'gatsby';
import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import PortfolioPage from '../portfolio';
import { type PageProps } from 'gatsby';
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

const useStaticQuery = vi.spyOn(Gatsby, `useStaticQuery`);
const mockUseStaticQuery = {
  site: {
    siteMetadata: {
      siteTitle: `Testing Gatsby Head API`,
      siteUrl: `https://www.yourdomain.tld`,
      siteDescription: `Showing how to test Gatsby Head API with Vitest and Playwright`,
    },
  },
};

describe('Portfolio Page', () => {
  beforeEach(() => {
    useStaticQuery.mockImplementation(() => mockUseStaticQuery);
  });
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders the portfolio page heading', () => {
    render(<PortfolioPage {...mockPageProps} />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renders project sections', () => {
    render(<PortfolioPage {...mockPageProps} />);
    expect(screen.getByTestId('projects-section')).toBeInTheDocument();
  });
});
