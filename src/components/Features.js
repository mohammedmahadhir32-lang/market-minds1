import React from 'react';
import './Features.css';

/**
 * Features Component - Key features section
 */
function Features() {
  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Analysis',
      description: 'Advanced machine learning algorithms analyze market trends and provide accurate predictions for better investment decisions.',
    },
    {
      icon: '📊',
      title: 'Real-Time Data',
      description: 'Get up-to-date stock prices, market data, and technical indicators updated in real-time for informed trading.',
    },
    {
      icon: '🎯',
      title: 'Smart Recommendations',
      description: 'Receive personalized Buy, Sell, or Hold recommendations based on comprehensive technical and fundamental analysis.',
    },
    {
      icon: '📈',
      title: 'Advanced Charts',
      description: 'Interactive charts with multiple timeframes, technical indicators, and customizable analysis tools.',
    },
    {
      icon: '🔔',
      title: 'Price Alerts',
      description: 'Set custom alerts for price movements, technical breakouts, and important market events.',
    },
    {
      icon: '💼',
      title: 'Portfolio Tracking',
      description: 'Monitor your investments with comprehensive portfolio analytics and performance tracking.',
    },
  ];

  return (
    <section id="features" className="features-section">
      <div className="features-container">
        <div className="section-header">
          <h2 className="section-title">Powerful Features</h2>
          <p className="section-subtitle">
            Everything you need to make smarter investment decisions
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
