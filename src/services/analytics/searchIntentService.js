/**
 * Search Intent Tracking and Dynamic Re-ranking Service
 * Implementation of search intent tracking using LocalStorage and Session-based memory
 * and dynamic re-ranking of homepage content based on user intent.
 */

class SearchIntentService {
  constructor() {
    this.storageKey = 'limitless_search_intents';
    this.sessionKey = 'limitless_session_intents';
    this.intentThreshold = 3; // Minimum interactions to establish intent
    this.rankingWeight = {
      search: 0.4,
      click: 0.3,
      view: 0.2,
      timeOnPage: 0.1,
    };
    this.maxStoredIntents = 50; // Maximum intents to store

    // Initialize the service
    this.initialize();
  }

  /**
   * Initialize the search intent service
   */
  initialize() {
    // Create storage if it doesn't exist
    if (!localStorage.getItem(this.storageKey)) {
      localStorage.setItem(this.storageKey, JSON.stringify([]));
    }

    // Create session storage if it doesn't exist
    if (!sessionStorage.getItem(this.sessionKey)) {
      sessionStorage.setItem(
        this.sessionKey,
        JSON.stringify({
          intents: {},
          startTime: Date.now(),
        })
      );
    }
  }

  /**
   * Track a search event
   * @param {string} searchTerm - The search term entered by the user
   * @param {Object} context - Additional context about the search
   */
  trackSearch(searchTerm, context = {}) {
    const intent = {
      type: 'search',
      searchTerm: searchTerm.toLowerCase().trim(),
      timestamp: Date.now(),
      context: context,
      pageUrl: window.location.href,
      sessionId: this.getSessionId(),
    };

    this.saveIntent(intent);
    this.updateIntentScore(intent);
  }

  /**
   * Track a click event on search results
   * @param {string} searchTerm - The original search term
   * @param {string} clickedItem - The item that was clicked
   * @param {Object} context - Additional context about the click
   */
  trackClick(searchTerm, clickedItem, context = {}) {
    const intent = {
      type: 'click',
      searchTerm: searchTerm.toLowerCase().trim(),
      clickedItem: clickedItem,
      timestamp: Date.now(),
      context: context,
      pageUrl: window.location.href,
      sessionId: this.getSessionId(),
    };

    this.saveIntent(intent);
    this.updateIntentScore(intent);
  }

  /**
   * Track a page view event
   * @param {string} searchTerm - The search term that led to this page
   * @param {string} pageUrl - The URL of the page being viewed
   * @param {Object} context - Additional context about the view
   */
  trackView(searchTerm, pageUrl, context = {}) {
    const intent = {
      type: 'view',
      searchTerm: searchTerm.toLowerCase().trim(),
      pageUrl: pageUrl,
      timestamp: Date.now(),
      context: context,
      sessionId: this.getSessionId(),
    };

    this.saveIntent(intent);
    this.updateIntentScore(intent);
  }

  /**
   * Track time spent on a page
   * @param {string} searchTerm - The search term that led to this page
   * @param {string} pageUrl - The URL of the page
   * @param {number} timeSpent - Time spent on the page in milliseconds
   */
  trackTimeOnPage(searchTerm, pageUrl, timeSpent) {
    const intent = {
      type: 'timeOnPage',
      searchTerm: searchTerm.toLowerCase().trim(),
      pageUrl: pageUrl,
      timeSpent: timeSpent,
      timestamp: Date.now(),
      sessionId: this.getSessionId(),
    };

    this.saveIntent(intent);
    this.updateIntentScore(intent);
  }

  /**
   * Save an intent to storage
   * @param {Object} intent - The intent to save
   */
  saveIntent(intent) {
    try {
      // Save to local storage
      const storedIntents = JSON.parse(
        localStorage.getItem(this.storageKey) || '[]'
      );

      // Add new intent
      storedIntents.push(intent);

      // Keep only the most recent intents
      if (storedIntents.length > this.maxStoredIntents) {
        storedIntents.splice(0, storedIntents.length - this.maxStoredIntents);
      }

      localStorage.setItem(this.storageKey, JSON.stringify(storedIntents));

      // Save to session storage as well
      const sessionData = JSON.parse(sessionStorage.getItem(this.sessionKey));
      if (!sessionData.intents[intent.searchTerm]) {
        sessionData.intents[intent.searchTerm] = [];
      }
      sessionData.intents[intent.searchTerm].push(intent);
      sessionStorage.setItem(this.sessionKey, JSON.stringify(sessionData));
    } catch (error) {
      console.error('Error saving intent:', error);
    }
  }

  /**
   * Update intent score based on the new intent
   * @param {Object} intent - The intent to score
   */
  updateIntentScore(intent) {
    try {
      const scores = JSON.parse(
        localStorage.getItem(`${this.storageKey}_scores`) || '{}'
      );

      if (!scores[intent.searchTerm]) {
        scores[intent.searchTerm] = {
          search: 0,
          click: 0,
          view: 0,
          timeOnPage: 0,
          total: 0,
        };
      }

      // Update the appropriate score based on intent type
      scores[intent.searchTerm][intent.type] +=
        this.rankingWeight[intent.type] || 0.1;
      scores[intent.searchTerm].total = Object.values(scores[intent.searchTerm])
        .filter((_, key) => key !== 'total')
        .reduce((sum, val) => sum + val, 0);

      localStorage.setItem(`${this.storageKey}_scores`, JSON.stringify(scores));
    } catch (error) {
      console.error('Error updating intent score:', error);
    }
  }

  /**
   * Get the current session ID
   * @returns {string} Session ID
   */
  getSessionId() {
    let sessionId = sessionStorage.getItem('limitless_session_id');
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem('limitless_session_id', sessionId);
    }
    return sessionId;
  }

  /**
   * Get all stored intents
   * @returns {Array} Array of stored intents
   */
  getIntents() {
    try {
      return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    } catch (error) {
      console.error('Error retrieving intents:', error);
      return [];
    }
  }

  /**
   * Get intent scores
   * @returns {Object} Object containing intent scores
   */
  getIntentScores() {
    try {
      return JSON.parse(
        localStorage.getItem(`${this.storageKey}_scores`) || '{}'
      );
    } catch (error) {
      console.error('Error retrieving intent scores:', error);
      return {};
    }
  }

  /**
   * Get the primary intent based on scores
   * @returns {string|null} Primary intent or null if no clear intent
   */
  getPrimaryIntent() {
    const scores = this.getIntentScores();
    let primaryIntent = null;
    let highestScore = 0;

    for (const [searchTerm, scoreData] of Object.entries(scores)) {
      if (
        scoreData.total > highestScore &&
        scoreData.total >= this.intentThreshold
      ) {
        highestScore = scoreData.total;
        primaryIntent = searchTerm;
      }
    }

    return primaryIntent;
  }

  /**
   * Get ranked content based on user intent
   * @param {Array} contentItems - Array of content items to rank
   * @returns {Array} Ranked array of content items
   */
  getRankedContent(contentItems) {
    const scores = this.getIntentScores();
    const primaryIntent = this.getPrimaryIntent();

    if (!primaryIntent || Object.keys(scores).length === 0) {
      // No clear intent, return original order
      return contentItems;
    }

    // Create a copy of content items with relevance scores
    const rankedItems = contentItems.map(item => {
      let relevanceScore = 0;

      // Score based on how well the content matches user intents
      for (const [searchTerm, scoreData] of Object.entries(scores)) {
        // Check if content matches search terms
        if (item.title && item.title.toLowerCase().includes(searchTerm)) {
          relevanceScore += scoreData.total * 2; // Higher weight for title matches
        }

        if (
          item.description &&
          item.description.toLowerCase().includes(searchTerm)
        ) {
          relevanceScore += scoreData.total * 1.5; // Medium weight for description matches
        }

        if (item.tags && Array.isArray(item.tags)) {
          const tagMatches = item.tags.filter(tag =>
            tag.toLowerCase().includes(searchTerm)
          ).length;
          relevanceScore += tagMatches * scoreData.total;
        }

        if (item.category && item.category.toLowerCase().includes(searchTerm)) {
          relevanceScore += scoreData.total * 1.2; // Category matches
        }
      }

      return {
        ...item,
        relevanceScore,
      };
    });

    // Sort by relevance score (descending)
    rankedItems.sort((a, b) => b.relevanceScore - a.relevanceScore);

    // Return just the items without scores
    return rankedItems.map(item => ({ ...item, relevanceScore: undefined }));
  }

  /**
   * Get related search terms based on current intent
   * @param {string} searchTerm - Current search term
   * @returns {Array} Array of related search terms
   */
  getRelatedSearchTerms(searchTerm) {
    const intents = this.getIntents();
    const relatedTerms = new Map();

    // Find other search terms that occurred in similar contexts
    const currentTerm = searchTerm.toLowerCase();

    for (const intent of intents) {
      if (intent.searchTerm !== currentTerm && intent.type === 'search') {
        // Check if they occurred in similar sessions or contexts
        const timeDiff = Math.abs(intent.timestamp - Date.now());
        const timeWeight = Math.max(
          0,
          1 - timeDiff / (7 * 24 * 60 * 60 * 1000)
        ); // Weight decreases over time

        if (timeWeight > 0) {
          relatedTerms.set(
            intent.searchTerm,
            (relatedTerms.get(intent.searchTerm) || 0) + timeWeight
          );
        }
      }
    }

    // Sort by weight and return top 5
    return Array.from(relatedTerms.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(entry => entry[0]);
  }

  /**
   * Reset session data
   */
  resetSession() {
    sessionStorage.removeItem(this.sessionKey);
    sessionStorage.removeItem('limitless_session_id');
    this.initialize();
  }

  /**
   * Clear all stored intent data
   */
  clearAllData() {
    localStorage.removeItem(this.storageKey);
    localStorage.removeItem(`${this.storageKey}_scores`);
    this.initialize();
  }

  /**
   * Get user intent summary
   * @returns {Object} Summary of user intents
   */
  getIntentSummary() {
    const intents = this.getIntents();
    const scores = this.getIntentScores();
    const primaryIntent = this.getPrimaryIntent();

    const summary = {
      totalIntents: intents.length,
      uniqueSearchTerms: [...new Set(intents.map(intent => intent.searchTerm))]
        .length,
      primaryIntent: primaryIntent,
      intentScores: scores,
      mostSearchedTerm: this.getMostSearchedTerm(),
      mostClickedTerm: this.getMostClickedTerm(),
      recentIntents: intents.slice(-5), // Last 5 intents
    };

    return summary;
  }

  /**
   * Get the most searched term
   * @returns {string|null} Most searched term
   */
  getMostSearchedTerm() {
    const intents = this.getIntents();
    const searchCounts = new Map();

    for (const intent of intents) {
      if (intent.type === 'search') {
        searchCounts.set(
          intent.searchTerm,
          (searchCounts.get(intent.searchTerm) || 0) + 1
        );
      }
    }

    if (searchCounts.size === 0) return null;

    return Array.from(searchCounts.entries()).sort((a, b) => b[1] - a[1])[0][0];
  }

  /**
   * Get the most clicked term
   * @returns {string|null} Most clicked term
   */
  getMostClickedTerm() {
    const intents = this.getIntents();
    const clickCounts = new Map();

    for (const intent of intents) {
      if (intent.type === 'click') {
        clickCounts.set(
          intent.searchTerm,
          (clickCounts.get(intent.searchTerm) || 0) + 1
        );
      }
    }

    if (clickCounts.size === 0) return null;

    return Array.from(clickCounts.entries()).sort((a, b) => b[1] - a[1])[0][0];
  }
}

// Create and export a singleton instance
const searchIntentService = new SearchIntentService();

// Add event listeners to track user behavior automatically
if (typeof window !== 'undefined') {
  // Track search form submissions
  document.addEventListener('submit', e => {
    if (e.target.method && e.target.method.toLowerCase() === 'get') {
      const searchInput = e.target.querySelector(
        'input[type="search"], input[name="q"], input[name="search"]'
      );
      if (searchInput && searchInput.value) {
        searchIntentService.trackSearch(searchInput.value, {
          formAction: e.target.action,
          pageUrl: window.location.href,
        });
      }
    }
  });

  // Track clicks on search results
  document.addEventListener('click', e => {
    // Look for search result items or links
    const searchResult = e.target.closest(
      '[data-search-term], .search-result, .result-item'
    );
    if (searchResult) {
      const searchTerm =
        searchResult.getAttribute('data-search-term') ||
        searchResult.getAttribute('data-original-search') ||
        localStorage.getItem('lastSearchTerm');

      if (searchTerm) {
        searchIntentService.trackClick(
          searchTerm,
          e.target.textContent || e.target.innerText,
          {
            element: e.target.tagName,
            pageUrl: window.location.href,
          }
        );
      }
    }
  });
}

export default searchIntentService;
