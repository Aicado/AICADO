import React from 'react';
// import '../App.css';

const ServicesPage = () => {
  return (
    <>
      <section id='services-hero' className='page-hero'>
        <div className='container'>
          <h1>Our Services</h1>
          <p>Tailored AI solutions to elevate your business.</p>
        </div>
      </section>

      <section className='container content-section'>
        <h2>What We Offer</h2>
        <div className='service-item'>
          <h3>AI-Powered Website Development</h3>
          <p>We design and develop intelligent websites that offer personalized experiences, smart features, and data-driven insights. From dynamic content generation to AI-driven user interaction, we build platforms that engage and convert.</p>
        </div>
        <div className='service-item'>
          <h3>Custom AI Tool Creation</h3>
          <p>Have a unique challenge? We build bespoke AI tools and applications tailored to your specific needs. This includes natural language processing solutions, computer vision systems, predictive analytics models, and more.</p>
        </div>
        <div className='service-item'>
          <h3>AI-Powered E-commerce Platforms</h3>
          <p>Transform your online store with intelligent features. We develop e-commerce solutions with AI-driven product recommendations, personalized shopping experiences, intelligent search, fraud detection, and inventory optimization.</p>
        </div>
        <div className='service-item'>
          <h3>AI Strategy & Consultation</h3>
          <p>Not sure where to start with AI? We provide expert consultation to help you identify opportunities for AI integration, define a clear strategy, and create a roadmap for successful implementation.</p>
        </div>
        <div className='service-item'> {/* :last-child will handle no border in App.css */}
          <h3>Data Analytics & Insights</h3>
          <p>Unlock the power of your data. We help you collect, process, and analyze data to gain valuable insights, make informed decisions, and optimize your operations using machine learning techniques.</p>
        </div>
      </section>
    </>
  );
};
export default ServicesPage;
