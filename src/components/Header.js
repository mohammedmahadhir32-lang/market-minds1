import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

/**
 * Header Component - Wix-style navigation
 */
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="main-header">
      <div className="header-container">
        <div className="logo" onClick={() => scrollToSection('hero')}>
          <span className="logo-icon">📈</span>
          <span className="logo-text">MarketMinds</span>
        </div>

        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <a href="#features" onClick={() => scrollToSection('features')}>Features</a>
          <a href="#how-it-works" onClick={() => scrollToSection('how-it-works')}>How It Works</a>
          <a href="#cta" onClick={() => scrollToSection('cta')}>Get Started</a>
          <Link to="/login" className="login-nav-link">Login</Link>
        </nav>

        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
