import React from 'react';
import { Link } from 'react-router-dom';
// import '../App.css';

const BlogPage = () => {
  const blogPosts = [
    { title: 'The Future of Generative AI in Web Design', date: 'October 26, 2023', author: 'AICADO Team', summary: 'A brief look into how generative AI is changing...', link: '#' },
    { title: 'Ethical Considerations in AI Development', date: 'October 15, 2023', author: 'AICADO Team', summary: 'Navigating the complex ethical challenges...', link: '#' }
  ];

  return (
    <>
      <section id='blog-hero' className='page-hero'>
        <div className='container'>
          <h1>AICADO Insights</h1>
          <p>Exploring the world of AI, technology, and innovation.</p>
        </div>
      </section>

      <section className='container content-section'>
        <h2>Latest Articles</h2>
        <div className='blog-post-list'>
          {blogPosts.map((post, index) => (
            <article key={index} className='blog-post-summary'>
              <h3>{post.title}</h3>
              <p className='post-meta'>Published on: {post.date} by {post.author}</p>
              <p>{post.summary}</p>
              <Link to={post.link}>Read More</Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};
export default BlogPage;
