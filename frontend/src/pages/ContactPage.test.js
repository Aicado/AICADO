import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactPage from './ContactPage';

describe('ContactPage', () => {
  it('renders message textarea with maxLength and aria-describedby pointing to counter', () => {
    render(<ContactPage />);
    const textarea = screen.getByLabelText(/Message/i);
    expect(textarea).toHaveAttribute('maxLength', '500');
    expect(textarea).toHaveAttribute('aria-describedby', 'message-counter');
  });

  it('updates the character counter as user types', () => {
    render(<ContactPage />);
    const counter = screen.getByText('0/500 characters');
    expect(counter).toBeInTheDocument();
    expect(counter).toHaveAttribute('aria-live', 'polite');

    const textarea = screen.getByLabelText(/Message/i);
    fireEvent.change(textarea, { target: { name: 'message', value: 'Hello world' } });

    expect(screen.getByText('11/500 characters')).toBeInTheDocument();
  });
});
