import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { App } from './App';

describe('Calculus foundation shell', () => {
  it('presents the Calculus identity and purpose', () => {
    render(<App />);

    expect(screen.getByRole('heading', { level: 1, name: 'Calculus' })).toBeInTheDocument();
    expect(
      screen.getByText('Learn calculus by connecting ideas, visual reasoning, and deliberate practice.'),
    ).toBeInTheDocument();
  });

  it('provides primary navigation for the foundation site', () => {
    render(<App />);

    expect(screen.getByRole('navigation', { name: 'Primary navigation' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Roadmap' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Contribute' })).toBeInTheDocument();
  });

  it('renders an intentional not-found page for unknown routes', () => {
    window.location.hash = '#/missing';
    render(<App />);

    expect(screen.getByRole('heading', { name: 'Page not found' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Return home' })).toBeInTheDocument();
  });
});
