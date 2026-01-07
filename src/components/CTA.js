import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CTA.css';

/**
 * CTA Component - Call to action section
 */
function CTA() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <section id="cta" className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Make Smarter Investment Decisions?</h2>
          <p className="cta-subtitle">
            Join thousands of investors using MarketMinds to analyze stocks and build better portfolios.
          </p>
          <button className="cta-button" onClick={handleGetStarted}>
            Get Started Free
          </button>
          <p className="cta-note">No credit card required • Free forever</p>
        </div>
      </div>
    </section>
  );
}

export default CTA;

