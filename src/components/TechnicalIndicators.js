import React, { useState } from 'react';
import './TechnicalIndicators.css';

/**
 * TechnicalIndicators Component - Technical analysis indicators panel
 */
function TechnicalIndicators() {
  const [activeTab, setActiveTab] = useState('indicators');

  const indicators = [
    { name: 'RSI (14)', value: 65.23, signal: 'Neutral', trend: 'neutral' },
    { name: 'MACD', value: 0.45, signal: 'Bullish', trend: 'up' },
    { name: 'Moving Avg (50)', value: 175.20, signal: 'Above', trend: 'up' },
    { name: 'Moving Avg (200)', value: 168.50, signal: 'Above', trend: 'up' },
    { name: 'Bollinger Bands', value: 'Upper', signal: 'Near Upper', trend: 'neutral' },
    { name: 'Stochastic', value: 72.15, signal: 'Overbought', trend: 'down' },
  ];

  const signals = [
    { type: 'Buy', count: 8, strength: 'Strong' },
    { type: 'Sell', count: 2, strength: 'Weak' },
    { type: 'Hold', count: 5, strength: 'Moderate' },
  ];

  return (
    <div className="technical-indicators">
      <div className="indicators-header">
        <div className="indicators-tabs">
          <button
            className={`tab-btn ${activeTab === 'indicators' ? 'active' : ''}`}
            onClick={() => setActiveTab('indicators')}
          >
            Indicators
          </button>
          <button
            className={`tab-btn ${activeTab === 'signals' ? 'active' : ''}`}
            onClick={() => setActiveTab('signals')}
          >
            Signals
          </button>
        </div>
      </div>

      <div className="indicators-content">
        {activeTab === 'indicators' && (
          <div className="indicators-list">
            {indicators.map((indicator, index) => (
              <div key={index} className="indicator-item">
                <div className="indicator-header">
                  <span className="indicator-name">{indicator.name}</span>
                  <span className={`indicator-trend ${indicator.trend}`}>
                    {indicator.trend === 'up' && '↑'}
                    {indicator.trend === 'down' && '↓'}
                    {indicator.trend === 'neutral' && '→'}
                  </span>
                </div>
                <div className="indicator-body">
                  <span className="indicator-value">{indicator.value}</span>
                  <span className={`indicator-signal ${indicator.trend}`}>
                    {indicator.signal}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'signals' && (
          <div className="signals-list">
            {signals.map((signal, index) => (
              <div key={index} className="signal-item">
                <div className="signal-header">
                  <span className={`signal-type ${signal.type.toLowerCase()}`}>
                    {signal.type}
                  </span>
                  <span className="signal-count">{signal.count}</span>
                </div>
                <div className="signal-strength">{signal.strength}</div>
              </div>
            ))}
            <div className="ai-recommendation">
              <div className="recommendation-header">AI Recommendation</div>
              <div className="recommendation-value buy">BUY</div>
              <div className="recommendation-confidence">Confidence: 78%</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TechnicalIndicators;

