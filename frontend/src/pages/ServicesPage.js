import React, { useEffect, useState } from 'react';
import { GraphQLClient, gql } from 'graphql-request';
// App.css is imported in App.js for global styles

const GQL_ENDPOINT = 'http://localhost:5000/graphql'; // Ensure backend is running here

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const client = new GraphQLClient(GQL_ENDPOINT);
    const query = gql`
      query GetAllServices {
        allServices {
          id
          title
          description
          iconName 
        }
      }
    `;

    client.request(query)
      .then((data) => {
        setServices(data.allServices);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching services:', err);
        setError('Failed to load services. Please try again later.');
        setLoading(false);
      });
  }, []);

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
        {loading && <p>Loading services...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Keeping error style inline for simplicity */}
        {!loading && !error && services.length === 0 && <p>No services available at the moment.</p>}
        
        {!loading && !error && services.map((service) => (
          <div key={service.id} className='service-item'>
            {service.iconName && 
              <img 
                src={`/images/${service.iconName}`} 
                alt={`${service.title} icon`} 
                className='service-item-icon'
              />
            }
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className='clear-float'></div> {/* Utility class to clear float */}
          </div>
        ))}
      </section>
    </>
  );
};

export default ServicesPage;
