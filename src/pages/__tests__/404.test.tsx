import * as React from 'react';
import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import NotFoundPage from '../404';
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

describe('404 Page', () => {
  it('renders the not found heading', () => {
    render(<NotFoundPage {...mockPageProps} />);
    expect(screen.getByText('Page not found')).toBeInTheDocument();
  });

  it('displays the sorry message', () => {
    render(<NotFoundPage {...mockPageProps} />);
    expect(screen.getByTestId('sorry-message')).toBeInTheDocument();
  });

  it('renders the home link', () => {
    render(<NotFoundPage {...mockPageProps} />);
    const homeLink = screen.getByText('Go home');
    expect(homeLink).toBeInTheDocument();
    expect(homeLink.closest('a')).toHaveAttribute('href', '/');
  });

  it('shows development helper text when in development mode', () => {
    const originalNodeEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'development';

    render(<NotFoundPage {...mockPageProps} />);
    expect(screen.getByText(/Try creating a page in/)).toBeInTheDocument();
    expect(screen.getByText('src/pages/')).toBeInTheDocument();

    process.env.NODE_ENV = originalNodeEnv;
  });

  it('does not show development helper text in production mode', () => {
    const originalNodeEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'production';

    render(<NotFoundPage {...mockPageProps} />);
    expect(
      screen.queryByText(/Try creating a page in/)
    ).not.toBeInTheDocument();

    process.env.NODE_ENV = originalNodeEnv;
  });
});
