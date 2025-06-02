import React, { useState } from 'react';
// import '../App.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    alert('Thank you for your message! (This is a placeholder)');
    setFormData({ name: '', email: '', subject: '', message: '' });
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
              <label htmlFor='name'>Full Name:</label>
              <input type='text' id='name' name='name' value={formData.name} onChange={handleChange} required />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email Address:</label>
              <input type='email' id='email' name='email' value={formData.email} onChange={handleChange} required />
            </div>
            <div className='form-group'>
              <label htmlFor='subject'>Subject:</label>
              <input type='text' id='subject' name='subject' value={formData.subject} onChange={handleChange} required />
            </div>
            <div className='form-group'>
              <label htmlFor='message'>Message:</label>
              <textarea id='message' name='message' rows='6' value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type='submit' className='cta-button'>Send Message</button>
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
