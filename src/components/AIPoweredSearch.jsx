import { useState, useEffect, useRef } from 'react';
import { HiSearch, HiX, HiSparkles, HiDocumentText, HiCode, HiBookOpen, HiVideoCamera, HiLink } from 'react-icons/hi';

const AIPoweredSearch = ({ placeholder = "Search our knowledge base...", className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);

  // Mock search data - in a real implementation, this would come from an API
  const mockKnowledgeBase = [
    {
      id: 1,
      title: "Getting Started with HR-IMS",
      content: "Learn how to set up and configure the HR Information Management System for your organization.",
      type: "documentation",
      url: "/docs/hr-ims-getting-started",
      tags: ["hr-ims", "setup", "configuration", "onboarding"]
    },
    {
      id: 2,
      title: "TrackIT API Integration Guide",
      content: "Complete guide to integrating TrackIT with your existing systems using our REST API.",
      type: "api",
      url: "/docs/trackit-api",
      tags: ["trackit", "api", "integration", "development"]
    },
    {
      id: 3,
      title: "Security Best Practices",
      content: "Learn about our security measures and best practices for securing your data.",
      type: "security",
      url: "/docs/security",
      tags: ["security", "compliance", "best-practices", "gdpr"]
    },
    {
      id: 4,
      title: "ROI Calculator for HR Solutions",
      content: "Calculate the return on investment for implementing our HR management solutions.",
      type: "tool",
      url: "/roi-calculator",
      tags: ["roi", "calculator", "hr", "finance"]
    },
    {
      id: 5,
      title: "Client Portal User Guide",
      content: "Complete guide to using the client portal for project tracking and management.",
      type: "documentation",
      url: "/docs/client-portal",
      tags: ["client-portal", "guide", "tracking", "management"]
    },
    {
      id: 6,
      title: "API Rate Limits and Quotas",
      content: "Understanding rate limits and how to optimize your API usage.",
      type: "api",
      url: "/docs/api-limits",
      tags: ["api", "limits", "quotas", "optimization"]
    },
    {
      id: 7,
      title: "Compliance and Certifications",
      content: "Detailed information about our compliance standards and certifications.",
      type: "compliance",
      url: "/compliance",
      tags: ["compliance", "certifications", "soc2", "iso27001"]
    },
    {
      id: 8,
      title: "Video Tutorial: Setting up your first project",
      content: "Step-by-step video tutorial for creating your first project in our platform.",
      type: "video",
      url: "/videos/setup-tutorial",
      tags: ["video", "tutorial", "setup", "project"]
    }
  ];

  const searchSuggestions = [
    "How to integrate with existing systems?",
    "Security and compliance information",
    "API documentation and examples",
    "ROI calculator for HR solutions",
    "Client portal user guide"
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const performSearch = async (searchQuery) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const searchLower = searchQuery.toLowerCase();
    
    const filteredResults = mockKnowledgeBase.filter(item => 
      item.title.toLowerCase().includes(searchLower) ||
      item.content.toLowerCase().includes(searchLower) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchLower))
    );

    setResults(filteredResults);
    setIsLoading(false);
    setSelectedIndex(-1);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    
    if (value.length > 2) {
      performSearch(value);
    } else {
      setResults([]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, -1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0 && results[selectedIndex]) {
        window.location.href = results[selectedIndex].url;
      } else if (query.trim()) {
        performSearch(query);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      setShowSuggestions(false);
    }
  };

  const getIconForType = (type) => {
    switch (type) {
      case 'documentation':
        return <HiDocumentText className="w-5 h-5 text-blue-500" />;
      case 'api':
        return <HiCode className="w-5 h-5 text-green-500" />;
      case 'video':
        return <HiVideoCamera className="w-5 h-5 text-purple-500" />;
      case 'tool':
        return <HiSparkles className="w-5 h-5 text-yellow-500" />;
      case 'security':
      case 'compliance':
        return <HiBookOpen className="w-5 h-5 text-red-500" />;
      default:
        return <HiDocumentText className="w-5 h-5 text-gray-500" />;
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    performSearch(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className={`relative ${className}`} ref={searchRef}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <HiSearch className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-dark-600 rounded-xl bg-white dark:bg-dark-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setResults([]);
              setIsOpen(false);
            }}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            <HiX className="h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
          </button>
        )}
      </div>

      {(isOpen || results.length > 0) && (
        <div className="absolute z-50 mt-2 w-full bg-white dark:bg-dark-800 rounded-xl shadow-2xl border border-gray-200 dark:border-dark-600 max-h-96 overflow-hidden">
          {isLoading ? (
            <div className="p-4 flex items-center justify-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary-600"></div>
              <span className="ml-2 text-gray-600 dark:text-gray-400">Searching...</span>
            </div>
          ) : results.length > 0 ? (
            <div className="max-h-96 overflow-y-auto">
              <div className="p-2">
                <div className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Search Results ({results.length})
                </div>
              </div>
              <ul className="divide-y divide-gray-200 dark:divide-dark-600">
                {results.map((result, index) => (
                  <li
                    key={result.id}
                    className={`p-3 cursor-pointer transition-colors ${
                      index === selectedIndex
                        ? 'bg-primary-50 dark:bg-primary-900/20'
                        : 'hover:bg-gray-50 dark:hover:bg-dark-700'
                    }`}
                    onClick={() => {
                      window.location.href = result.url;
                    }}
                  >
                    <div className="flex items-start space-x-3">
                      {getIconForType(result.type)}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                          {result.title}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                          {result.content}
                        </p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {result.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-dark-600 text-gray-800 dark:text-gray-200"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : query.length > 2 ? (
            <div className="p-8 text-center">
              <HiSearch className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No results found</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                No documents matched your search query. Try different keywords.
              </p>
            </div>
          ) : showSuggestions && (
            <div className="p-2">
              <div className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                Popular Searches
              </div>
              <ul className="divide-y divide-gray-200 dark:divide-dark-600">
                {searchSuggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="p-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    <div className="flex items-center space-x-3">
                      <HiSparkles className="w-5 h-5 text-yellow-500" />
                      <span className="text-sm text-gray-900 dark:text-white">{suggestion}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AIPoweredSearch;