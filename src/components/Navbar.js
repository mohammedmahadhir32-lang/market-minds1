import React from 'react';
import './Navbar.css';

/**
 * Navbar Component
 * Displays the navigation bar with the app name
 */
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h1>Smart Stock Advisor</h1>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

