import React from 'react';
import { Link } from 'react-router-dom';
// import '../App.css';

const placeholderProjectImage = '/images/placeholder-project.png';

const PortfolioPage = () => {
  const portfolioItems = [
    { imgSrc: placeholderProjectImage, title: 'Collectibles E-commerce Platform', description: 'An advanced e-commerce solution...', link: '#' },
    { imgSrc: placeholderProjectImage, title: 'AI-Driven Analytics Dashboard', description: 'A custom dashboard providing real-time business intelligence...', link: '#' },
    { imgSrc: placeholderProjectImage, title: 'NLP Chatbot for Customer Support', description: 'An intelligent chatbot that automates customer service...', link: '#' }
  ];

  return (
    <>
      <section id='portfolio-hero' className='page-hero'>
        <div className='container'>
          <h1>Our Portfolio</h1>
          <p>See how we've helped businesses like yours succeed with AI.</p>
        </div>
      </section>

      <section className='container content-section'>
        <h2>Project Showcase</h2>
        <div className='portfolio-grid'>
          {portfolioItems.map((item, index) => (
            <div key={index} className='portfolio-item'>
              <img src={item.imgSrc} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <Link to={item.link}>View Case Study (Coming Soon)</Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default PortfolioPage;
