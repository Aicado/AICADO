import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BlogPage from './BlogPage';

jest.mock('react-router-dom', () => ({
  Link: ({ children, to, 'aria-label': ariaLabel, ...props }) => (
    <a href={to} aria-label={ariaLabel} {...props}>
      {children}
    </a>
  ),
}));

describe('BlogPage', () => {
  it('renders blog post titles and accessible read more links', () => {
    render(<BlogPage />);

    expect(
      screen.getByText('The Future of Generative AI in Web Design')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Ethical Considerations in AI Development')
    ).toBeInTheDocument();

    const readMoreLinks = screen.getAllByText('Read More');
    expect(readMoreLinks).toHaveLength(2);

    expect(
      screen.getByRole('link', {
        name: 'Read more about The Future of Generative AI in Web Design',
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('link', {
        name: 'Read more about Ethical Considerations in AI Development',
      })
    ).toBeInTheDocument();
  });
});
