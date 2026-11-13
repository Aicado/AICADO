import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactPage from './ContactPage';

describe('ContactPage', () => {
  it('renders message textarea with maxLength and aria-describedby for character counter', () => {
    render(<ContactPage />);

    const textarea = screen.getByLabelText(/message/i);
    expect(textarea).toBeInTheDocument();
    expect(textarea).toHaveAttribute('maxlength', '500');
  it('renders message textarea with maxLength and character counter', () => {
    render(<ContactPage />);

    const textarea = screen.getByLabelText(/message/i);
    expect(textarea).toHaveAttribute('maxLength', '500');
    expect(textarea).toHaveAttribute('aria-describedby', 'message-counter');

    const counter = screen.getByText('0/500 characters');
    expect(counter).toBeInTheDocument();
    expect(counter).toHaveAttribute('id', 'message-counter');
    expect(counter).toHaveAttribute('aria-live', 'polite');
  });

  it('updates character count when typing in the message textarea', () => {
    render(<ContactPage />);

    const textarea = screen.getByLabelText(/message/i);
    fireEvent.change(textarea, { target: { name: 'message', value: 'Hello AICADO team!' } });

    expect(screen.getByText('18/500 characters')).toBeInTheDocument();
    expect(counter).toHaveAttribute('aria-live', 'polite');
    expect(counter).toHaveAttribute('id', 'message-counter');

    fireEvent.change(textarea, { target: { name: 'message', value: 'Hello AICADO!' } });

    expect(screen.getByText('13/500 characters')).toBeInTheDocument();
  });
});
