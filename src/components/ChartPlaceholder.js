import React from 'react';
import './ChartPlaceholder.css';

/**
 * ChartPlaceholder Component
 * Placeholder section where stock charts will be displayed later
 */
function ChartPlaceholder() {
  return (
    <section className="chart-placeholder">
      <div className="chart-placeholder-container">
        <h2 className="section-heading">Stock Analysis Chart</h2>
        <p className="section-description">
          Visual charts and analysis will be displayed here
        </p>
        <div className="chart-box">
          <div className="chart-icon">
            <svg
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 3v18h18" />
              <path d="M7 12l4-4 4 4 6-6" />
            </svg>
          </div>
          <p className="chart-placeholder-text">Chart will appear here</p>
        </div>
      </div>
    </section>
  );
}

export default ChartPlaceholder;

