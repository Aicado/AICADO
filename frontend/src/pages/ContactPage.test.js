import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactPage from './ContactPage';

describe('ContactPage', () => {
  it('renders message input with maxLength 500 and updates character counter', () => {
    render(<ContactPage />);

    const messageTextarea = screen.getByLabelText(/Message/i);
    expect(messageTextarea).toHaveAttribute('maxLength', '500');
    expect(messageTextarea).toHaveAttribute('aria-describedby', 'message-counter');

    const counter = screen.getByText('0/500 characters');
    expect(counter).toBeInTheDocument();
    expect(counter).toHaveAttribute('id', 'message-counter');

    fireEvent.change(messageTextarea, { target: { value: 'Hello AICADO!' } });

    expect(screen.getByText('13/500 characters')).toBeInTheDocument();
  });
});
