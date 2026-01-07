import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

/**
 * Hero Component - Main landing section
 */
function Hero() {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Smart Stock Analysis
            <span className="gradient-text"> Made Simple</span>
          </h1>
          <p className="hero-subtitle">
            AI-powered insights and recommendations to help you make smarter investment decisions. 
            Get real-time analysis, technical indicators, and personalized stock recommendations.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn-primary"
              onClick={handleGetStarted}
            >
              Get Started Free
            </button>
            <button 
              className="btn-secondary"
              onClick={() => scrollToSection('how-it-works')}
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-visual">
            <div className="chart-mockup">
              <div className="chart-header">
                <span className="chart-symbol">AAPL</span>
                <span className="chart-price positive">$178.50</span>
              </div>
              <div className="chart-bars">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="chart-bar"
                    style={{
                      height: `${Math.random() * 60 + 30}%`,
                      animationDelay: `${i * 0.1}s`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
