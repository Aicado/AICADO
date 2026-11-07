import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactPage from './ContactPage';

describe('ContactPage', () => {
  it('renders message textarea with maxLength and aria-describedby for character counter', () => {
    render(<ContactPage />);
    const textarea = screen.getByLabelText(/Message/i);
    expect(textarea).toHaveAttribute('maxLength', '500');
    expect(textarea).toHaveAttribute('aria-describedby', 'message-counter');

    const counter = screen.getByText('0/500 characters');
    expect(counter).toBeInTheDocument();
    expect(counter).toHaveAttribute('id', 'message-counter');
    expect(counter).toHaveAttribute('aria-live', 'polite');
  });

  it('updates character count when user types in message field', () => {
    render(<ContactPage />);
    const textarea = screen.getByLabelText(/Message/i);

    fireEvent.change(textarea, { target: { name: 'message', value: 'Hello AI!' } });

    expect(screen.getByText('9/500 characters')).toBeInTheDocument();
  });
});
