import React from 'react';
import './MarketData.css';

/**
 * MarketData Component - Market overview and statistics
 */
function MarketData() {
  const marketIndices = [
    { name: 'S&P 500', value: '4,567.89', change: '+12.45', changePercent: '+0.27%', trend: 'up' },
    { name: 'Dow Jones', value: '34,567.12', change: '+89.23', changePercent: '+0.26%', trend: 'up' },
    { name: 'NASDAQ', value: '14,234.56', change: '-23.45', changePercent: '-0.16%', trend: 'down' },
    { name: 'VIX', value: '14.23', change: '-0.45', changePercent: '-3.06%', trend: 'down' },
  ];

  const topMovers = [
    { symbol: 'NVDA', name: 'NVIDIA Corp', price: 485.60, change: 12.40, changePercent: 2.62 },
    { symbol: 'AMD', name: 'Advanced Micro', price: 142.30, change: 3.20, changePercent: 2.30 },
    { symbol: 'TSLA', name: 'Tesla Inc', price: 245.30, change: -5.20, changePercent: -2.08 },
    { symbol: 'NFLX', name: 'Netflix Inc', price: 425.80, change: -8.20, changePercent: -1.89 },
  ];

  return (
    <div className="market-data">
      <div className="market-data-header">
        <h3>Market Overview</h3>
      </div>

      <div className="market-indices">
        <h4 className="section-title">Indices</h4>
        {marketIndices.map((index, i) => (
          <div key={i} className="index-item">
            <div className="index-name">{index.name}</div>
            <div className="index-value">{index.value}</div>
            <div className={`index-change ${index.trend}`}>
              {index.change} ({index.changePercent})
            </div>
          </div>
        ))}
      </div>

      <div className="top-movers">
        <h4 className="section-title">Top Movers</h4>
        <div className="movers-list">
          {topMovers.map((stock, i) => (
            <div key={i} className="mover-item">
              <div className="mover-info">
                <div className="mover-symbol">{stock.symbol}</div>
                <div className="mover-name">{stock.name}</div>
              </div>
              <div className="mover-price">
                <div className="mover-value">${stock.price.toFixed(2)}</div>
                <div className={`mover-change ${stock.change >= 0 ? 'positive' : 'negative'}`}>
                  {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)} ({stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%)
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="market-stats">
        <h4 className="section-title">Market Stats</h4>
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-label">Advancing</span>
            <span className="stat-value positive">2,345</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Declining</span>
            <span className="stat-value negative">1,234</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Unchanged</span>
            <span className="stat-value">456</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketData;

