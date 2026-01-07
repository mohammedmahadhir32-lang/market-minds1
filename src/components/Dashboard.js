import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

/**
 * Dashboard Component - Smart Stock Advisor Dashboard
 * Modern fintech design with all requested features
 */
function Dashboard() {
  const navigate = useNavigate();
  const [userName] = useState('John Doe'); // In real app, get from auth context
  const [selectedStock, setSelectedStock] = useState('AAPL');

  // Account Summary Data
  const accountData = {
    portfolioValue: 125430.50,
    cashBalance: 15230.75,
    totalGain: 5430.25,
    gainPercentage: 4.52,
    isPositive: true,
  };

  // Stock Data
  const stocks = [
    { symbol: 'AAPL', name: 'Apple Inc.', price: 178.50, change: 2.45, changePercent: 1.39, trend: 'up' },
    { symbol: 'MSFT', name: 'Microsoft Corp', price: 378.90, change: 4.20, changePercent: 1.12, trend: 'up' },
    { symbol: 'GOOGL', name: 'Alphabet Inc', price: 142.50, change: 1.80, changePercent: 1.28, trend: 'up' },
    { symbol: 'TSLA', name: 'Tesla Inc', price: 245.30, change: -5.20, changePercent: -2.08, trend: 'down' },
  ];

  // AI Suggestions
  const aiSuggestions = [
    {
      symbol: 'NVDA',
      name: 'NVIDIA Corporation',
      action: 'BUY',
      confidence: 92,
      reason: 'Strong AI growth potential',
      price: 485.60,
      targetPrice: 520.00,
    },
    {
      symbol: 'AMD',
      name: 'Advanced Micro Devices',
      action: 'BUY',
      confidence: 85,
      reason: 'Positive earnings outlook',
      price: 142.30,
      targetPrice: 155.00,
    },
    {
      symbol: 'TSLA',
      name: 'Tesla Inc',
      action: 'HOLD',
      confidence: 72,
      reason: 'Wait for better entry point',
      price: 245.30,
      targetPrice: 250.00,
    },
    {
      symbol: 'NFLX',
      name: 'Netflix Inc',
      action: 'SELL',
      confidence: 68,
      reason: 'Market saturation concerns',
      price: 425.80,
      targetPrice: 400.00,
    },
  ];

  // Generate chart data (simulated candlestick data)
  const generateChartData = () => {
    return Array.from({ length: 30 }, (_, i) => ({
      time: i,
      open: 175 + Math.random() * 10,
      high: 180 + Math.random() * 5,
      low: 170 + Math.random() * 5,
      close: 175 + Math.random() * 10,
    }));
  };

  const chartData = generateChartData();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-left">
          <div className="dashboard-logo">
            <span className="logo-icon">📈</span>
            <span className="logo-text">MarketMinds</span>
          </div>
        </div>
        <div className="header-right">
          <button className="header-action-btn" onClick={() => navigate('/')}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 1L1 9L9 17M1 9H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Home
          </button>
          <button className="header-action-btn logout-btn" onClick={handleLogout}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M6 2H3C2.44772 2 2 2.44772 2 3V15C2 15.5523 2.44772 16 3 16H6M12 13L16 9M16 9L12 5M16 9H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Logout
          </button>
        </div>
      </header>

      <div className="dashboard-container">
        {/* Welcome Section */}
        <section className="welcome-section">
          <h1 className="welcome-title">Welcome, {userName}</h1>
          <p className="welcome-subtitle">Here's your portfolio overview</p>
        </section>

        {/* Account Summary */}
        <section className="account-summary">
          <div className="summary-card portfolio-value">
            <div className="card-label">Portfolio Value</div>
            <div className="card-value">${accountData.portfolioValue.toLocaleString()}</div>
            <div className={`card-change ${accountData.isPositive ? 'positive' : 'negative'}`}>
              {accountData.isPositive ? '+' : ''}${accountData.totalGain.toLocaleString()} ({accountData.isPositive ? '+' : ''}{accountData.gainPercentage}%)
            </div>
          </div>
          <div className="summary-card cash-balance">
            <div className="card-label">Cash Balance</div>
            <div className="card-value">${accountData.cashBalance.toLocaleString()}</div>
            <div className="card-subtitle">Available for trading</div>
          </div>
          <div className="summary-card total-gain">
            <div className="card-label">Total Gain/Loss</div>
            <div className={`card-value ${accountData.isPositive ? 'positive' : 'negative'}`}>
              {accountData.isPositive ? '+' : ''}${accountData.totalGain.toLocaleString()}
            </div>
            <div className="card-subtitle">All time</div>
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="dashboard-grid">
          {/* Live Stock Market Data */}
          <section className="stock-data-section">
            <div className="section-header">
              <h2 className="section-title">Live Market Data</h2>
              <select 
                className="stock-selector"
                value={selectedStock}
                onChange={(e) => setSelectedStock(e.target.value)}
              >
                {stocks.map(stock => (
                  <option key={stock.symbol} value={stock.symbol}>
                    {stock.symbol} - {stock.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="stock-chart-card">
              <div className="stock-header">
                <div className="stock-info">
                  <h3 className="stock-symbol">{selectedStock}</h3>
                  <span className="stock-name">
                    {stocks.find(s => s.symbol === selectedStock)?.name}
                  </span>
                </div>
                <div className="stock-price-info">
                  <div className="current-price">
                    ${stocks.find(s => s.symbol === selectedStock)?.price.toFixed(2)}
                  </div>
                  <div className={`price-change ${stocks.find(s => s.symbol === selectedStock)?.trend}`}>
                    {stocks.find(s => s.symbol === selectedStock)?.change >= 0 ? '+' : ''}
                    {stocks.find(s => s.symbol === selectedStock)?.change.toFixed(2)} 
                    ({stocks.find(s => s.symbol === selectedStock)?.changePercent >= 0 ? '+' : ''}
                    {stocks.find(s => s.symbol === selectedStock)?.changePercent.toFixed(2)}%)
                  </div>
                </div>
              </div>

              {/* Candlestick Chart */}
              <div className="chart-container">
                <div className="chart-wrapper">
                  <div className="chart-grid">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="grid-line"></div>
                    ))}
                  </div>
                  <div className="candlestick-chart">
                    {chartData.map((candle, i) => {
                      const isUp = candle.close >= candle.open;
                      const maxPrice = Math.max(...chartData.map(c => c.high));
                      const minPrice = Math.min(...chartData.map(c => c.low));
                      const range = maxPrice - minPrice;
                      const height = ((candle.high - candle.low) / range) * 100;
                      const bodyHeight = Math.abs(candle.close - candle.open) / range * 100;
                      const bottom = ((candle.low - minPrice) / range) * 100;
                      
                      return (
                        <div
                          key={i}
                          className={`candlestick ${isUp ? 'up' : 'down'}`}
                          style={{
                            left: `${(i / chartData.length) * 100}%`,
                            bottom: `${bottom}%`,
                            height: `${height}%`,
                            width: `${100 / chartData.length}%`,
                          }}
                        >
                          <div className="candle-wick"></div>
                          <div
                            className={`candle-body ${isUp ? 'up' : 'down'}`}
                            style={{ 
                              height: `${Math.max(bodyHeight, 2)}%`,
                              bottom: `${((Math.min(candle.open, candle.close) - candle.low) / range) * 100}%`
                            }}
                          ></div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="chart-timeframe">
                  <button className="timeframe-btn active">1D</button>
                  <button className="timeframe-btn">1W</button>
                  <button className="timeframe-btn">1M</button>
                  <button className="timeframe-btn">3M</button>
                  <button className="timeframe-btn">1Y</button>
                </div>
              </div>
            </div>
          </section>

          {/* AI Suggestions */}
          <section className="ai-suggestions-section">
            <div className="section-header">
              <h2 className="section-title">AI Recommendations</h2>
              <span className="ai-badge">Powered by AI</span>
            </div>
            <div className="suggestions-list">
              {aiSuggestions.map((suggestion, index) => (
                <div key={index} className="suggestion-card">
                  <div className="suggestion-header">
                    <div className="suggestion-stock">
                      <span className="suggestion-symbol">{suggestion.symbol}</span>
                      <span className="suggestion-name">{suggestion.name}</span>
                    </div>
                    <div className={`action-badge ${suggestion.action.toLowerCase()}`}>
                      {suggestion.action}
                    </div>
                  </div>
                  <div className="suggestion-body">
                    <div className="confidence-score">
                      <span className="confidence-label">Confidence:</span>
                      <div className="confidence-bar">
                        <div 
                          className="confidence-fill"
                          style={{ width: `${suggestion.confidence}%` }}
                        ></div>
                      </div>
                      <span className="confidence-value">{suggestion.confidence}%</span>
                    </div>
                    <p className="suggestion-reason">{suggestion.reason}</p>
                    <div className="price-info">
                      <span className="current-price-label">Current: ${suggestion.price.toFixed(2)}</span>
                      <span className="target-price-label">Target: ${suggestion.targetPrice.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Quick Actions */}
        <section className="quick-actions">
          <h2 className="section-title">Quick Actions</h2>
          <div className="actions-grid">
            <button className="action-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>Search Stocks</span>
            </button>
            <button className="action-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Add to Watchlist</span>
            </button>
            <button className="action-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 3h18v18H3zM7 7h10v10H7z" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 3v18M3 12h18" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span>View History</span>
            </button>
            <button className="action-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>Portfolio Analysis</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;

