import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  X,
  Sparkles,
  FileText,
  Code2,
  BookOpen,
  Video,
  Link,
  Shield,
  Zap,
  Target,
  ArrowRight,
  Database
} from 'lucide-react';

const AIPoweredSearch = ({
  placeholder = 'Query the Limitless matrix...',
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);

  const mockKnowledgeBase = [
    {
      id: 1,
      title: 'Neural Onboarding: HR-IMS',
      content: 'Initialize operational protocols for system-wide HR management integration.',
      type: 'documentation',
      url: '/docs/hr-ims-getting-started',
      tags: ['system', 'setup', 'neural', 'init'],
    },
    {
      id: 2,
      title: 'TrackIT Core API Integration',
      content: 'Real-time telemetry synchronization via REST-vector architecture.',
      type: 'api',
      url: '/docs/trackit-api',
      tags: ['vector', 'api', 'telemetry', 'dev'],
    },
    {
      id: 3,
      title: 'Encrypted Security Matrix',
      content: 'Structural integrity protocols and multi-layer data preservation units.',
      type: 'security',
      url: '/docs/security',
      tags: ['shield', 'compliance', 'matrix', 'secure'],
    },
    {
      id: 4,
      title: 'Strategic ROI Projection',
      content: 'Algorithmic assessment of resource yield for advanced deployments.',
      type: 'tool',
      url: '/roi-calculator',
      tags: ['yield', 'analysis', 'resource', 'logic'],
    },
    {
      id: 5,
      title: 'Architect Portal User Manual',
      content: 'Master control interface for cross-domain project orchestration.',
      type: 'documentation',
      url: '/docs/client-portal',
      tags: ['nexus', 'terminal', 'control', 'manual'],
    },
    {
      id: 6,
      title: 'API Frequency & Bandwidth',
      content: 'Optimizing data stream velocity and neural network capacity.',
      type: 'api',
      url: '/docs/api-limits',
      tags: ['bandwidth', 'velocity', 'optimization', 'stream'],
    },
    {
      id: 7,
      title: 'Operational Certifications',
      content: 'Global standards of technical excellence and structural efficiency.',
      type: 'compliance',
      url: '/compliance',
      tags: ['iso', 'standard', 'accredited', 'nexus'],
    },
    {
      id: 8,
      title: 'Visual Core: First Deployment',
      content: 'Video archive of target infrastructure initialization sequence.',
      type: 'video',
      url: '/videos/setup-tutorial',
      tags: ['archive', 'visual', 'initialization', 'core'],
    },
  ];

  const searchSuggestions = [
    'How to initialize system sync?',
    'Latest security matrix protocols',
    'Core API documentation archive',
    'Resource yield projection logic',
    'Master architect console portal',
  ];

  useEffect(() => {
    const handleClickOutside = event => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const performSearch = async searchQuery => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 600));

    const searchLower = searchQuery.toLowerCase();
    const filteredResults = mockKnowledgeBase.filter(
      item =>
        item.title.toLowerCase().includes(searchLower) ||
        item.content.toLowerCase().includes(searchLower) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchLower))
    );

    setResults(filteredResults);
    setIsLoading(false);
    setSelectedIndex(-1);
  };

  const handleInputChange = e => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 2) {
      performSearch(value);
    } else {
      setResults([]);
    }
  };

  const handleKeyDown = e => {
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

  const getIconForType = type => {
    const iconClass = "w-4 h-4";
    switch (type) {
      case 'documentation':
        return <FileText className={`${iconClass} text-[#1ba6d6]`} />;
      case 'api':
        return <Code2 className={`${iconClass} text-[#25d366]`} />;
      case 'video':
        return <Video className={`${iconClass} text-[#ff4d4d]`} />;
      case 'tool':
        return <Sparkles className={`${iconClass} text-[#ffc957]`} />;
      case 'security':
      case 'compliance':
        return <Shield className={`${iconClass} text-[#1ba6d6]`} />;
      default:
        return <Database className={`${iconClass} text-white/40`} />;
    }
  };

  const handleSuggestionClick = suggestion => {
    setQuery(suggestion);
    performSearch(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className={`relative ${className}`} ref={searchRef}>
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none text-white/20 group-focus-within:text-[#1ba6d6] transition-colors">
          <Search className="h-4 w-4" />
        </div>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            setIsOpen(true);
            setShowSuggestions(true);
          }}
          placeholder={placeholder}
          className="block w-full pl-14 pr-12 py-5 bg-white/5 border border-white/5 rounded-2xl text-[0.7rem] font-black uppercase tracking-widest text-white placeholder:text-white/10 outline-none focus:border-[#1ba6d6]/50 focus:bg-white/10 transition-all duration-500"
        />
        <AnimatePresence>
          {query && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => {
                setQuery('');
                setResults([]);
                setIsOpen(false);
              }}
              className="absolute inset-y-0 right-0 pr-6 flex items-center text-white/20 hover:text-white transition-colors"
            >
              <X className="h-4 w-4" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute z-[100] mt-4 w-full bg-[#0e1114]/90 backdrop-blur-3xl rounded-3xl border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            {isLoading ? (
              <div className="p-12 flex flex-col items-center justify-center gap-4">
                <div className="w-10 h-10 border-2 border-[#1ba6d6]/20 border-t-[#1ba6d6] rounded-full animate-spin"></div>
                <p className="text-[0.6rem] font-black text-white/40 uppercase tracking-[0.2em]">Matrix Query Ongoing</p>
              </div>
            ) : results.length > 0 ? (
              <div className="max-h-[450px] overflow-y-auto scrollbar-hide">
                <div className="p-6 border-b border-white/5 bg-white/5">
                  <p className="text-[0.6rem] font-black text-[#1ba6d6] uppercase tracking-[0.3em]">
                    TELEMETRY OUTPUT: {results.length} NODES IDENTIFIED
                  </p>
                </div>
                <ul className="divide-y divide-white/5">
                  {results.map((result, index) => (
                    <motion.li
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      key={result.id}
                      className={`p-6 cursor-pointer transition-all duration-300 ${
                        index === selectedIndex
                          ? 'bg-white/10'
                          : 'hover:bg-white/5'
                      }`}
                      onClick={() => {
                        window.location.href = result.url;
                      }}
                    >
                      <div className="flex items-start gap-6">
                        <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0 border border-white/5 group-hover:border-[#1ba6d6]/30 transition-colors">
                          {getIconForType(result.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[0.75rem] font-black text-white uppercase tracking-widest truncate mb-2">
                            {result.title}
                          </p>
                          <p className="text-[0.65rem] text-white/30 font-black uppercase tracking-widest leading-relaxed line-clamp-2">
                            {result.content}
                          </p>
                          <div className="flex flex-wrap gap-2 mt-4">
                            {result.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-2 py-1 rounded-md text-[0.55rem] font-black uppercase tracking-widest bg-white/5 text-white/20 border border-white/5"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ) : query.length > 2 ? (
              <div className="p-16 text-center">
                <div className="w-16 h-16 bg-[#ff4d4d]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-[#ff4d4d]/20 text-[#ff4d4d]">
                  <Database className="w-8 h-8" />
                </div>
                <h3 className="text-sm font-black text-white uppercase tracking-[0.3em] mb-3">
                  QUERY NULLIFIED
                </h3>
                <p className="text-[0.6rem] text-white/30 font-black uppercase tracking-[0.2em] max-w-xs mx-auto">
                  Requested vectors not identified within the current Limitless architecture.
                </p>
              </div>
            ) : (
              showSuggestions && (
                <div className="p-4">
                  <div className="p-4 border-b border-white/5">
                    <p className="text-[0.6rem] font-black text-white/20 uppercase tracking-[0.3em]">
                      FREQUENT VECTORS
                    </p>
                  </div>
                  <ul className="space-y-1 mt-2">
                    {searchSuggestions.map((suggestion, index) => (
                      <li
                        key={index}
                        className="group flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-all duration-300 cursor-pointer"
                        onClick={() => handleSuggestionClick(suggestion)}
                      >
                        <div className="flex items-center gap-4">
                          <Sparkles className="w-4 h-4 text-[#ffc957] group-hover:scale-110 transition-transform" />
                          <span className="text-[0.7rem] font-black text-white/60 group-hover:text-white uppercase tracking-widest transition-colors">
                            {suggestion}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-white/0 group-hover:text-[#1ba6d6] group-hover:translate-x-1 transition-all" />
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIPoweredSearch;
