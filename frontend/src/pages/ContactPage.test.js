import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactPage from './ContactPage';

describe('ContactPage', () => {
  it('displays message character limit counter and updates on input', () => {
    render(<ContactPage />);

    const messageTextarea = screen.getByLabelText(/message/i);
    expect(messageTextarea).toHaveAttribute('maxLength', '500');
    expect(messageTextarea).toHaveAttribute('aria-describedby', 'message-counter');

    const counter = screen.getByText('0/500 characters');
    expect(counter).toBeInTheDocument();
    expect(counter).toHaveAttribute('id', 'message-counter');
    expect(counter).toHaveAttribute('aria-live', 'polite');

    fireEvent.change(messageTextarea, { target: { value: 'Hello AICADO team!' } });
    expect(screen.getByText('18/500 characters')).toBeInTheDocument();
  });
});
