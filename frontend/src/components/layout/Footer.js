import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className='container'>
        <p>&copy; {currentYear} AICADO. All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;
