// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Expense Tracker
        </Link>
        <div className="menu-icon">
          {/* You can add a menu icon here */}
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links">
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/expense-tracker" className="nav-links">
              Expense Tracker
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
