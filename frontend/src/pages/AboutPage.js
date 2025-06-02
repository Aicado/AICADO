import React from 'react';
// import '../App.css'; // Globally imported in App.js

const AboutPage = () => {
  return (
    <>
      <section id='about-hero' className='page-hero'>
        <div className='container'>
          <h1>About AICADO</h1>
          <p>Pioneering the future with intelligent AI-driven solutions.</p>
        </div>
      </section>

      <section id='company-story' className='container content-section'>
        <h2>Our Story</h2>
        <p>AICADO was founded with the vision of making advanced Artificial Intelligence technologies accessible and impactful for businesses of all sizes. We are a team of dedicated AI specialists, software engineers, and creative thinkers passionate about solving complex challenges through innovation. Our journey is rooted in a deep understanding of AI's potential to not just automate, but to intelligently transform and enhance digital experiences.</p>
        <p>Our core mission is to empower our clients by building bespoke AI-powered websites and tools that are not only technologically advanced but also intuitively designed and user-centric. We believe in a collaborative approach, working closely with our clients to understand their unique needs and deliver tailored solutions that drive real-world value.</p>
      </section>

      <section id='company-values' className='container content-section'>
        <h2>Our Values</h2>
        {/* ul style for list-style-position: inside can be added to App.css if needed globally or scoped */}
        <ul style={{ listStylePosition: 'inside', paddingLeft: 0}}> 
          <li><strong>Innovation in AI:</strong> We constantly explore new AI frontiers to bring cutting-edge, intelligent solutions.</li>
          <li><strong>Integrity & Ethics:</strong> We build trust through transparent and ethical AI practices.</li>
          <li><strong>Collaboration:</strong> We work closely with our clients to achieve shared success in their AI journey.</li>
          <li><strong>Excellence:</strong> We are committed to delivering high-quality, reliable, and scalable AI solutions.</li>
          <li><strong>Impact:</strong> We strive to create AI solutions that make a tangible difference to our clients' businesses.</li>
        </ul>
      </section>

      <section id='ai-focus' className='container content-section'>
        <h2>Our AI Focus</h2>
        <p>At AICADO, Artificial Intelligence is not just a technology we use; it's at the heart of everything we do. We specialize in developing solutions that leverage Machine Learning, Natural Language Processing, Computer Vision, and advanced Data Analytics to help businesses automate processes, gain deeper insights, personalize user experiences, and stay ahead of the curve. We are committed to responsible AI development, ensuring our solutions are fair, transparent, and secure.</p>
      </section>
    </>
  );
};
export default AboutPage;
