import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav className='container'>
        <Link to='/' className='logo-link'>
          AICADO
        </Link>
        <ul>
          <li><NavLink to='/' className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink></li>
          <li><NavLink to='/about' className={({isActive}) => isActive ? 'active' : ''}>About</NavLink></li>
          <li><NavLink to='/services' className={({isActive}) => isActive ? 'active' : ''}>Services</NavLink></li>
          <li><NavLink to='/portfolio' className={({isActive}) => isActive ? 'active' : ''}>Portfolio</NavLink></li>
          <li><NavLink to='/blog' className={({isActive}) => isActive ? 'active' : ''}>Blog</NavLink></li>
          <li><NavLink to='/contact' className={({isActive}) => isActive ? 'active' : ''}>Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
