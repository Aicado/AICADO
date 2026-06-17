import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../../App.css'; // For .container styles or other global layout styles

const Layout = ({ children }) => {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar />
      <main id="main-content">
        {/* The container class here provides centered, max-width content area */}
        {/* Individual pages can choose to use it or have full-width sections */}
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
