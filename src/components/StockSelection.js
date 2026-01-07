import React, { useState } from 'react';
import './StockSelection.css';

/**
 * StockSelection Component
 * Handles stock symbol input, time period selection, and form submission
 */
function StockSelection() {
  // State to manage form inputs
  const [stockSymbol, setStockSymbol] = useState('');
  const [timePeriod, setTimePeriod] = useState('1 Month');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!stockSymbol.trim()) {
      alert('Please enter a stock symbol');
      return;
    }

    // Log the form data (in a real app, this would send to backend)
    console.log('Stock Symbol:', stockSymbol.toUpperCase());
    console.log('Time Period:', timePeriod);
    
    // Show success message
    alert(`Analysis requested for ${stockSymbol.toUpperCase()} for ${timePeriod}`);
    
    // Reset form (optional)
    // setStockSymbol('');
  };

  return (
    <section className="stock-selection">
      <div className="stock-selection-container">
        <h2 className="section-heading">Analyze Your Stock</h2>
        <p className="section-description">
          Enter a stock symbol and select a time period to get AI-powered recommendations
        </p>
        
        <form className="stock-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="stockSymbol">Stock Symbol</label>
            <input
              type="text"
              id="stockSymbol"
              className="stock-input"
              placeholder="e.g., AAPL, TCS, INFY"
              value={stockSymbol}
              onChange={(e) => setStockSymbol(e.target.value)}
              maxLength="10"
            />
          </div>

          <div className="form-group">
            <label htmlFor="timePeriod">Time Period</label>
            <select
              id="timePeriod"
              className="time-select"
              value={timePeriod}
              onChange={(e) => setTimePeriod(e.target.value)}
            >
              <option value="1 Month">1 Month</option>
              <option value="3 Months">3 Months</option>
              <option value="6 Months">6 Months</option>
              <option value="1 Year">1 Year</option>
            </select>
          </div>

          <button type="submit" className="analyze-button">
            Analyze Stock
          </button>
        </form>
      </div>
    </section>
  );
}

export default StockSelection;

