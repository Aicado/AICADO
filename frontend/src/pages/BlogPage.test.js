import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BlogPage from './BlogPage';

jest.mock('react-router-dom', () => ({
  Link: ({ children, to, 'aria-label': ariaLabel }) => (
    <a href={to} aria-label={ariaLabel}>
      {children}
    </a>
  ),
}));

describe('BlogPage', () => {
  it('renders blog post links with descriptive aria-label attributes', () => {
    render(<BlogPage />);
    const link = screen.getByRole('link', {
      name: 'Read more about The Future of Generative AI in Web Design',
    });
    expect(link).toBeInTheDocument();
  });
});
