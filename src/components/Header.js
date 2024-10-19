import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Navbar specific styling

function Header() {
  return (
    <nav className="navbar-card">
      <ul className="navbar-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Header;



