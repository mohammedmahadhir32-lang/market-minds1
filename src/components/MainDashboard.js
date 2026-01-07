import React, { useState } from 'react';
import './MainDashboard.css';

/**
 * MainDashboard Component - Advanced chart and analysis section
 */
function MainDashboard() {
  const [selectedSymbol, setSelectedSymbol] = useState('AAPL');
  const [timeframe, setTimeframe] = useState('1D');
  const [chartType, setChartType] = useState('Candles');

  const timeframes = ['1', '5', '15', '30', '60', '240', '1D', '1W', '1M'];
  const chartTypes = ['Candles', 'Line', 'Area', 'Bars', 'HLC'];

  return (
    <div className="main-dashboard">
      {/* Chart Toolbar */}
      <div className="chart-toolbar">
        <div className="toolbar-left">
          <div className="symbol-selector">
            <input
              type="text"
              className="symbol-input"
              value={selectedSymbol}
              onChange={(e) => setSelectedSymbol(e.target.value.toUpperCase())}
              placeholder="Symbol"
            />
          </div>
          <div className="timeframe-selector">
            {timeframes.map((tf) => (
              <button
                key={tf}
                className={`timeframe-btn ${timeframe === tf ? 'active' : ''}`}
                onClick={() => setTimeframe(tf)}
              >
                {tf}
              </button>
            ))}
          </div>
        </div>
        <div className="toolbar-right">
          <div className="chart-type-selector">
            {chartTypes.map((type) => (
              <button
                key={type}
                className={`chart-type-btn ${chartType === type ? 'active' : ''}`}
                onClick={() => setChartType(type)}
              >
                {type}
              </button>
            ))}
          </div>
          <button className="toolbar-btn">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2V14M2 8H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <button className="toolbar-btn">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 3L3 8H7V13H9V8H13L8 3Z" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Price Info Bar */}
      <div className="price-info-bar">
        <div className="price-main">
          <span className="price-value">$178.50</span>
          <span className="price-change positive">+2.45 (+1.39%)</span>
        </div>
        <div className="price-details">
          <div className="price-item">
            <span className="price-label">Open</span>
            <span className="price-data">$176.20</span>
          </div>
          <div className="price-item">
            <span className="price-label">High</span>
            <span className="price-data">$179.30</span>
          </div>
          <div className="price-item">
            <span className="price-label">Low</span>
            <span className="price-data">$175.80</span>
          </div>
          <div className="price-item">
            <span className="price-label">Volume</span>
            <span className="price-data">45.2M</span>
          </div>
        </div>
      </div>

      {/* Advanced Chart Area */}
      <div className="chart-container">
        <div className="chart-wrapper">
          <div className="chart-grid">
            <div className="grid-line"></div>
            <div className="grid-line"></div>
            <div className="grid-line"></div>
            <div className="grid-line"></div>
            <div className="grid-line"></div>
          </div>
          <div className="chart-content">
            <div className="chart-candles">
              {/* Simulated candlestick chart */}
              {[...Array(50)].map((_, i) => (
                <div
                  key={i}
                  className="candle"
                  style={{
                    left: `${i * 2}%`,
                    height: `${Math.random() * 60 + 20}%`,
                    bottom: `${Math.random() * 30}%`,
                  }}
                >
                  <div className="candle-body"></div>
                  <div className="candle-wick"></div>
                </div>
              ))}
            </div>
            <div className="chart-overlay">
              <div className="chart-crosshair"></div>
            </div>
          </div>
          <div className="chart-x-axis">
            {['9:30', '10:00', '11:00', '12:00', '1:00', '2:00', '3:00', '4:00'].map((time) => (
              <span key={time} className="axis-label">{time}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Technical Analysis Panel */}
      <div className="analysis-panel">
        <div className="panel-header">
          <h3>Technical Analysis</h3>
          <button className="panel-toggle">▼</button>
        </div>
        <div className="analysis-content">
          <div className="indicator-row">
            <span className="indicator-name">RSI (14)</span>
            <span className="indicator-value positive">65.23</span>
            <span className="indicator-status">Neutral</span>
          </div>
          <div className="indicator-row">
            <span className="indicator-name">MACD</span>
            <span className="indicator-value positive">0.45</span>
            <span className="indicator-status">Bullish</span>
          </div>
          <div className="indicator-row">
            <span className="indicator-name">Moving Avg (50)</span>
            <span className="indicator-value">$175.20</span>
            <span className="indicator-status">Above</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainDashboard;

