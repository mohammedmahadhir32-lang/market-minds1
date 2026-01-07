import React from 'react';
import './NewsFeed.css';

/**
 * NewsFeed Component - Financial news feed
 */
function NewsFeed() {
  const newsItems = [
    {
      title: 'Tech Stocks Rally on Strong Earnings Reports',
      source: 'Financial Times',
      time: '2h ago',
      sentiment: 'positive',
    },
    {
      title: 'Federal Reserve Holds Interest Rates Steady',
      source: 'Bloomberg',
      time: '4h ago',
      sentiment: 'neutral',
    },
    {
      title: 'AI Sector Sees Record Investment in Q4',
      source: 'Reuters',
      time: '6h ago',
      sentiment: 'positive',
    },
    {
      title: 'Market Volatility Expected Amid Economic Data',
      source: 'CNBC',
      time: '8h ago',
      sentiment: 'negative',
    },
    {
      title: 'Energy Stocks Surge on Oil Price Increase',
      source: 'WSJ',
      time: '10h ago',
      sentiment: 'positive',
    },
  ];

  return (
    <div className="news-feed">
      <div className="news-header">
        <h3>Market News</h3>
        <button className="news-refresh-btn" title="Refresh">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 2V6M8 10V14M2 8H6M10 8H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      <div className="news-content">
        {newsItems.map((news, index) => (
          <div key={index} className="news-item">
            <div className="news-item-header">
              <span className={`news-sentiment ${news.sentiment}`}></span>
              <span className="news-source">{news.source}</span>
              <span className="news-time">{news.time}</span>
            </div>
            <div className="news-title">{news.title}</div>
          </div>
        ))}
      </div>

      <div className="news-footer">
        <button className="news-more-btn">View All News</button>
      </div>
    </div>
  );
}

export default NewsFeed;

