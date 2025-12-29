import React, { useState, useEffect } from 'react';
import searchIntentService from '../services/searchIntentService';
import PropTypes from 'prop-types';

/**
 * Dynamic Ranking Component
 * Implements dynamic re-ranking of content based on search intent tracking
 */
const DynamicRanking = ({
  contentItems = [],
  initialRanking = 'default',
  enableTracking = true,
  children,
}) => {
  const [rankedContent, setRankedContent] = useState([]);
  const [currentRanking, setCurrentRanking] = useState(initialRanking);

  useEffect(() => {
    // Initial ranking based on service
    if (currentRanking === 'dynamic') {
      const ranked = searchIntentService.getRankedContent(contentItems);
      setRankedContent(ranked);
    } else {
      setRankedContent(contentItems);
    }
  }, [contentItems, currentRanking]);

  // Listen for changes in search intent to update ranking
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentRanking === 'dynamic') {
        const ranked = searchIntentService.getRankedContent(contentItems);
        setRankedContent(ranked);
      }
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, [contentItems, currentRanking]);

  const handleRankingChange = newRanking => {
    setCurrentRanking(newRanking);
  };

  const getRankingOptions = () => {
    return (
      <div className="ranking-controls">
        <button
          className={`ranking-btn ${currentRanking === 'default' ? 'active' : ''}`}
          onClick={() => handleRankingChange('default')}
        >
          Default
        </button>
        <button
          className={`ranking-btn ${currentRanking === 'dynamic' ? 'active' : ''}`}
          onClick={() => handleRankingChange('dynamic')}
        >
          Personalized
        </button>
        <button
          className={`ranking-btn ${currentRanking === 'popularity' ? 'active' : ''}`}
          onClick={() => handleRankingChange('popularity')}
        >
          Popular
        </button>
      </div>
    );
  };

  return (
    <div className="dynamic-ranking-container">
      {getRankingOptions()}
      <div className="ranked-content">
        {children
          ? React.Children.map(children, (child, index) => {
              if (child && child.type === DynamicRankingItem) {
                // Provide ranking data to child items
                return React.cloneElement(child, {
                  ...child.props,
                  item: rankedContent[index],
                  rank: index + 1,
                  isRanked: currentRanking === 'dynamic',
                });
              }
              return child;
            })
          : rankedContent.map((item, index) => (
              <DynamicRankingItem
                key={item.id || index}
                item={item}
                rank={index + 1}
                isRanked={currentRanking === 'dynamic'}
              />
            ))}
      </div>
    </div>
  );
};

/**
 * Dynamic Ranking Item Component
 * Individual item in the ranked list
 */
const DynamicRankingItem = ({
  item,
  rank = 0,
  isRanked = false,
  onClick,
  className = '',
  children,
}) => {
  const handleClick = () => {
    if (onClick) onClick(item);
  };

  return (
    <div
      className={`ranking-item ${className} ${isRanked ? 'ranked' : ''}`}
      onClick={handleClick}
    >
      <div className="rank-indicator">
        {isRanked && (
          <span
            className="rank-number"
            title={`Ranked #${rank} based on your interests`}
          >
            {rank}
          </span>
        )}
        {!isRanked && <span className="default-indicator">#</span>}
      </div>

      <div className="item-content">
        {children ? (
          children
        ) : (
          <>
            <h3 className="item-title">{item.title}</h3>
            <p className="item-description">{item.description}</p>
            {item.category && (
              <span className="item-category">{item.category}</span>
            )}
            {isRanked && item.relevanceScore > 0 && (
              <span
                className="relevance-score"
                title="Relevance to your interests"
              >
                🔍 {Math.round(item.relevanceScore * 100)}%
              </span>
            )}
          </>
        )}
      </div>
    </div>
  );
};

/**
 * Search Intent Tracker Component
 * Automatically tracks search behavior and intent
 */
const SearchIntentTracker = ({
  searchTerm = '',
  onSearch = () => {},
  placeholder = 'Search...',
  className = '',
}) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = e => {
    e.preventDefault();
    const value = searchValue.trim();
    if (value) {
      searchIntentService.trackSearch(value, {
        pageUrl: window.location.href,
        timestamp: Date.now(),
      });
      onSearch(value);
    }
  };

  const handleInputChange = e => {
    setSearchValue(e.target.value);
  };

  const handleInputFocus = () => {
    // Track when user starts searching
    searchIntentService.trackView('search_started', window.location.href, {
      action: 'search_focus',
    });
  };

  return (
    <form className={`search-intent-form ${className}`} onSubmit={handleSearch}>
      <input
        type="search"
        value={searchValue}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        placeholder={placeholder}
        className="search-input"
      />
      <button type="submit" className="search-submit" aria-label="Search">
        🔍
      </button>
    </form>
  );
};

/**
 * Content Personalization Provider Component
 * Provides personalized content based on user intent
 */
const ContentPersonalizationProvider = ({ children }) => {
  const [userIntent, setUserIntent] = useState(null);
  const [intentSummary, setIntentSummary] = useState({});

  useEffect(() => {
    // Get initial intent
    const primaryIntent = searchIntentService.getPrimaryIntent();
    setUserIntent(primaryIntent);

    // Get intent summary
    const summary = searchIntentService.getIntentSummary();
    setIntentSummary(summary);

    // Update periodically
    const interval = setInterval(() => {
      const updatedPrimaryIntent = searchIntentService.getPrimaryIntent();
      setUserIntent(updatedPrimaryIntent);
      setIntentSummary(searchIntentService.getIntentSummary());
    }, 10000); // Update every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="content-personalization-provider">
      {children({
        userIntent,
        intentSummary,
        searchIntentService,
      })}
    </div>
  );
};

DynamicRanking.propTypes = {
  /** Array of content items to rank */
  contentItems: PropTypes.array,
  /** Initial ranking method */
  initialRanking: PropTypes.oneOf(['default', 'dynamic', 'popularity']),
  /** Whether to enable tracking */
  enableTracking: PropTypes.bool,
  /** Child components */
  children: PropTypes.node,
};

DynamicRankingItem.propTypes = {
  /** Content item to display */
  item: PropTypes.object.isRequired,
  /** Rank number */
  rank: PropTypes.number,
  /** Whether the item is ranked */
  isRanked: PropTypes.bool,
  /** Click handler */
  onClick: PropTypes.func,
  /** Additional CSS classes */
  className: PropTypes.string,
  /** Child components */
  children: PropTypes.node,
};

SearchIntentTracker.propTypes = {
  /** Current search term */
  searchTerm: PropTypes.string,
  /** Search callback */
  onSearch: PropTypes.func,
  /** Input placeholder */
  placeholder: PropTypes.string,
  /** Additional CSS classes */
  className: PropTypes.string,
};

ContentPersonalizationProvider.propTypes = {
  /** Child render function */
  children: PropTypes.func.isRequired,
};

export {
  DynamicRanking,
  DynamicRankingItem,
  SearchIntentTracker,
  ContentPersonalizationProvider,
  searchIntentService,
};
export default DynamicRanking;
