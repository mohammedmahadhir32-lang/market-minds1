import React from 'react';
import './HowItWorks.css';

/**
 * HowItWorks Component - Step-by-step guide
 */
function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Enter Stock Symbol',
      description: 'Simply type in any stock symbol (e.g., AAPL, TSLA, MSFT) to get started with your analysis.',
    },
    {
      number: '02',
      title: 'Select Time Period',
      description: 'Choose your preferred analysis timeframe - from 1 month to 1 year - to view historical trends.',
    },
    {
      number: '03',
      title: 'Get AI Analysis',
      description: 'Our advanced AI analyzes the data and provides comprehensive insights, recommendations, and predictions.',
    },
    {
      number: '04',
      title: 'Make Informed Decisions',
      description: 'Use the detailed reports, charts, and recommendations to make smarter investment choices.',
    },
  ];

  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="how-it-works-container">
        <div className="section-header">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Get started in minutes with our simple, intuitive process
          </p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;

