import React, { useState } from 'react';
import './Watchlist.css';

/**
 * Watchlist Component - TradingView-style symbol watchlist
 */
function Watchlist() {
  const [watchlistItems] = useState([
    { symbol: 'AAPL', price: 178.50, change: 2.45, changePercent: 1.39, volume: '45.2M' },
    { symbol: 'TSLA', price: 245.30, change: -5.20, changePercent: -2.08, volume: '120.5M' },
    { symbol: 'MSFT', price: 378.90, change: 4.20, changePercent: 1.12, volume: '28.3M' },
    { symbol: 'GOOGL', price: 142.50, change: 1.80, changePercent: 1.28, volume: '32.1M' },
    { symbol: 'AMZN', price: 145.20, change: -2.10, changePercent: -1.43, volume: '55.7M' },
    { symbol: 'NVDA', price: 485.60, change: 12.40, changePercent: 2.62, volume: '78.9M' },
    { symbol: 'META', price: 312.40, change: 3.50, changePercent: 1.13, volume: '42.3M' },
    { symbol: 'NFLX', price: 425.80, change: -8.20, changePercent: -1.89, volume: '15.6M' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = watchlistItems.filter(item =>
    item.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="watchlist">
      <div className="watchlist-header">
        <h3>Watchlist</h3>
        <button className="watchlist-add-btn" title="Add Symbol">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3V13M3 8H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
      
      <div className="watchlist-search">
        <input
          type="text"
          className="watchlist-search-input"
          placeholder="Search symbols..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="watchlist-content">
        <div className="watchlist-table">
          <div className="table-header">
            <span className="col-symbol">Symbol</span>
            <span className="col-price">Price</span>
            <span className="col-change">Change</span>
          </div>
          <div className="table-body">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="watchlist-row"
                onClick={() => console.log('Selected:', item.symbol)}
              >
                <span className="col-symbol symbol-name">{item.symbol}</span>
                <span className="col-price price-value">${item.price.toFixed(2)}</span>
                <span className={`col-change ${item.change >= 0 ? 'positive' : 'negative'}`}>
                  {item.change >= 0 ? '+' : ''}{item.change.toFixed(2)} ({item.changePercent >= 0 ? '+' : ''}{item.changePercent.toFixed(2)}%)
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Watchlist;

