import React, { useEffect, useState } from 'react';
import { GraphQLClient, gql } from 'graphql-request';
import { Link } from 'react-router-dom';
// App.css is imported in App.js, so styles should be available
// import '../App.css'; // Can be removed if App.js imports it globally

const GQL_ENDPOINT = process.env.REACT_APP_API_URL || 'http://localhost:5000/graphql';

const placeholderMlIcon = '/images/icon-ml.png';
const placeholderNlpIcon = '/images/icon-nlp.png';
const placeholderCvIcon = '/images/icon-cv.png';
const placeholderDataAnalyticsIcon = '/images/icon-data-analytics.png';

const HomePage = () => {
  const [backendMessage, setBackendMessage] = useState('(Connecting to backend...)');
  const [error, setError] = useState(null);

  useEffect(() => {
    const client = new GraphQLClient(GQL_ENDPOINT);
    const query = gql`
      query GetHello {
        hello(name: \"React Frontend\")
      }
    `;
    client.request(query)
      .then((data) => setBackendMessage(data.hello))
      .catch((err) => {
        console.error('Error fetching data from GraphQL:', err);
        setError('Failed to load message from backend. Is it running?');
        setBackendMessage('');
      });
  }, []);

  return (
    <>
      <section className='hero'>
        <h1>Welcome to AICADO</h1>
        <p>We build cutting-edge AI-powered websites and tools to transform your business.</p>
        <Link to='/services' className='cta-button'>
          Learn More About Our Services
        </Link>
      </section>

      <section id='ai-expertise' className='container content-section'>
        <h2>Our AI Expertise</h2>
        <p className='sub-heading'> {/* Added class for this specific p tag */}
          Leveraging advanced Artificial Intelligence to deliver intelligent and impactful solutions.
        </p>
        <div className='expertise-grid'>
          <div className='expertise-item'>
            <img src={placeholderMlIcon} alt='Machine Learning Icon' />
            <h3>Machine Learning</h3>
            <p>Developing predictive models, recommendation systems, and data-driven insights using cutting-edge ML algorithms.</p>
          </div>
          <div className='expertise-item'>
            <img src={placeholderNlpIcon} alt='Natural Language Processing Icon' />
            <h3>Natural Language Processing</h3>
            <p>Building solutions that understand and process human language, including chatbots, sentiment analysis, and text summarization.</p>
          </div>
          <div className='expertise-item'>
            <img src={placeholderCvIcon} alt='Computer Vision Icon' />
            <h3>Computer Vision</h3>
            <p>Creating systems that interpret and analyze visual information from images and videos for various applications.</p>
          </div>
          <div className='expertise-item'>
            <img src={placeholderDataAnalyticsIcon} alt='Data Analytics Icon' />
            <h3>AI-Driven Data Analytics</h3>
            <p>Transforming raw data into actionable intelligence through advanced AI-powered analytics and visualization.</p>
          </div>
        </div>
        <div className='text-center' style={{ marginTop: '2rem' }}> {/* Keep this specific margin for now or make a utility class */}
          <Link to='/services' className='cta-button'>
            Explore Our AI Services
          </Link>
        </div>
      </section>

      <section id='why-choose-us' className='container content-section'>
        <h2>Why Partner with AICADO?</h2>
        <p>Placeholder: Briefly explain key differentiators - e.g., tailored solutions, expert team, focus on ROI, ethical AI practices.</p>
      </section>
      
      <div className='container' style={{ border: '1px solid #eee', padding: '1rem', marginTop: '1rem', borderRadius: '8px' }}> {/* Keep specific styling or abstract to class */}
        <p>Message from backend: {error ? <span style={{color: 'red'}}>{error}</span> : <em>{backendMessage}</em>}</p>
      </div>
    </>
  );
};
export default HomePage;
