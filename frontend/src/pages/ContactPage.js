import React, { useState } from 'react';
// import '../App.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success'

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate API call
    setTimeout(() => {
      console.log('Form data submitted:', formData);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <>
      <section id='contact-hero' className='page-hero'>
        <div className='container'>
          <h1>Contact Us</h1>
          <p>Let's discuss how AICADO can help your business thrive.</p>
        </div>
      </section>

      <section className='container content-section contact-section-flex'> {/* Added new class for flex */}
        <div className='contact-form-container'>
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='name'>
                Full Name <span className='required-star' aria-hidden='true'>*</span>:
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='e.g. John Doe'
                required
                aria-required='true'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>
                Email Address <span className='required-star' aria-hidden='true'>*</span>:
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='john@example.com'
                required
                aria-required='true'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='subject'>
                Subject <span className='required-star' aria-hidden='true'>*</span>:
              </label>
              <input
                type='text'
                id='subject'
                name='subject'
                value={formData.subject}
                onChange={handleChange}
                placeholder='How can we help?'
                required
                aria-required='true'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='message'>
                Message <span className='required-star' aria-hidden='true'>*</span>:
              </label>
              <textarea
                id='message'
                name='message'
                rows='6'
                value={formData.message}
                onChange={handleChange}
                placeholder='Tell us more about your project...'
                required
                aria-required='true'
              ></textarea>
            </div>
            <button
              type='submit'
              className='cta-button'
              disabled={status === 'submitting'}
              aria-live='polite'
            >
              {status === 'submitting' ? (
                <>
                  <span className='spinner' aria-hidden='true'></span>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
            {status === 'success' && (
              <p className='success-message' role='status'>
                Thank you! Your message has been sent successfully.
              </p>
            )}
          </form>
        </div>
        <div className='contact-info-container'>
          <h2>Our Information</h2>
          <p><strong>AICADO Inc.</strong></p>
          <p>123 AI Avenue, Tech City, TX 75001</p>
          <p><strong>Email:</strong> info@aicado.tech</p>
          <p><strong>Phone:</strong> +1 (555) 123-4567</p>
        </div>
      </section>
    </>
  );
};
export default ContactPage;
