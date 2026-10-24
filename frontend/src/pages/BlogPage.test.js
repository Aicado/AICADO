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
  test('renders blog post links with descriptive aria-labels', () => {
    render(<BlogPage />);

    const link1 = screen.getByRole('link', {
      name: 'Read more about The Future of Generative AI in Web Design',
    });
    expect(link1).toBeInTheDocument();

    const link2 = screen.getByRole('link', {
      name: 'Read more about Ethical Considerations in AI Development',
    });
    expect(link2).toBeInTheDocument();
  });
});
