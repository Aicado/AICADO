import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GraphQLClient, gql } from 'graphql-request';
// App.css is imported in App.js for global styles

const GQL_ENDPOINT = process.env.REACT_APP_API_URL || 'http://localhost:5000/graphql';

const PortfolioPage = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const client = new GraphQLClient(GQL_ENDPOINT);
    const query = gql`
      query GetAllPortfolioItems {
        allPortfolioItems {
          id
          title
          description
          imageUrl
          caseStudyUrl
        }
      }
    `;

    client.request(query)
      .then((data) => {
        setPortfolioItems(data.allPortfolioItems);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching portfolio items:', err);
        setError('Failed to load portfolio items. Please try again later.');
        setLoading(false);
      });
  }, []);

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
        {loading && <p>Loading portfolio items...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {!loading && !error && portfolioItems.length === 0 && <p>No portfolio items available at the moment.</p>}

        {!loading && !error && (
          <div className='portfolio-grid'>
            {portfolioItems.map((item) => (
              <div key={item.id} className='portfolio-item'>
                <img src={item.imageUrl} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Link to={item.caseStudyUrl}>View Case Study (Coming Soon)</Link>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default PortfolioPage;
