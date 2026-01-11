import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare,
  Send,
  Lightbulb,
  User,
  Cpu,
  Bot,
  Sparkles,
  Zap,
  Clock,
  ChevronRight
} from 'lucide-react';

const NaturalLanguageQuery = ({
  placeholder = 'Initiate query sequence...',
  onQuerySubmit,
}) => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [conversation, setConversation] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const messagesEndRef = useRef(null);

  const sampleQueries = [
    'Analyze web engine architecture protocols',
    'Retrieve mobile interface development costs',
    'Synchronize third-party API integration data',
    'Verify security compliance certifications',
    'Evaluate neural network implementation',
    'Fetch project timeline for HR-IMS node',
  ];

  useEffect(() => {
    setSuggestions(sampleQueries.slice(0, 4));
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversation]);

  const handleSubmit = async e => {
    e.preventDefault();
    if (!query.trim()) return;

    const userMessage = { type: 'user', content: query, timestamp: new Date() };
    setConversation(prev => [...prev, userMessage]);

    setIsLoading(true);

    try {
      // Enterprise Services Uplink
      const { default: PersistenceService } = await import('../services/enterprise/PersistenceService');
      const { default: NeuralRepo } = await import('../services/enterprise/NeuralRepositoryService');

      // Persistence log
      await PersistenceService.store('nlq_queries', { query: query });

      // Simulate neural network propagation delay
      await new Promise(resolve => setTimeout(resolve, 1200 + Math.random() * 800));

      const response = await NeuralRepo.query(query);
      const aiMessage = { type: 'ai', content: response.text, timestamp: new Date() };

      setConversation(prev => [...prev, aiMessage]);
      setQuery('');
    } catch (error) {
      console.error('Cognitive Interface Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestionClick = suggestion => {
    setQuery(suggestion);
    setTimeout(() => {
      const form = document.getElementById('nlq-form');
      if (form) form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
    }, 100);
  };

  return (
    <div className="bg-[#12161b]/80 backdrop-blur-xl border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
      <div className="p-6 border-b border-white/5 bg-white/[0.02]">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-[#1ba6d6]/20 rounded-lg border border-[#1ba6d6]/30">
            <Cpu className="w-5 h-5 text-[#1ba6d6]" />
          </div>
          <div>
            <h3 className="font-bold text-white tracking-tight">Cognitive Interface</h3>
            <p className="text-xs text-gray-500">Neural assistance for information retrieval</p>
          </div>
        </div>
      </div>

      <div className="h-[400px] overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-white/10">
        <AnimatePresence>
          {conversation.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full flex flex-col items-center justify-center text-center space-y-4"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#1ba6d6]/20 blur-2xl rounded-full" />
                <Bot className="w-16 h-16 text-[#1ba6d6] relative" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Awaiting Transmission</h4>
                <p className="text-sm text-gray-400 max-w-[240px] mx-auto">
                  Provide query telemetry or select a preset synchronization protocol below.
                </p>
              </div>
            </motion.div>
          ) : (
            conversation.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: message.type === 'user' ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] px-4 py-3 rounded-2xl flex gap-3 ${
                    message.type === 'user'
                      ? 'bg-[#1ba6d6] text-white rounded-tr-none'
                      : 'bg-white/5 text-gray-200 border border-white/10 rounded-tl-none'
                  }`}
                >
                  {message.type === 'ai' && (
                    <div className="w-8 h-8 rounded-full bg-[#1ba6d6]/20 flex items-center justify-center flex-shrink-0 border border-[#1ba6d6]/30">
                      <Sparkles className="w-4 h-4 text-[#1ba6d6]" />
                    </div>
                  )}
                  <div className="flex flex-col gap-1">
                    <p className="text-sm leading-relaxed">{message.content}</p>
                    <div className={`flex items-center gap-1 text-[10px] ${message.type === 'user' ? 'text-white/60' : 'text-gray-500'}`}>
                      <Clock className="w-3 h-3" />
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                  {message.type === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))
          )}

          {isLoading && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex justify-start"
            >
              <div className="bg-white/5 border border-white/10 px-4 py-3 rounded-2xl rounded-tl-none">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-[#1ba6d6] rounded-full animate-bounce" />
                  <span className="w-2 h-2 bg-[#1ba6d6] rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-2 h-2 bg-[#1ba6d6] rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 space-y-4 bg-white/[0.02]">
        {conversation.length === 0 && suggestions.length > 0 && (
          <div className="px-2">
            <p className="text-[10px] uppercase tracking-wider text-gray-500 mb-2 font-bold flex items-center gap-2">
              <Zap className="w-3 h-3" />
              Rapid Sync Protocols
            </p>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="text-xs bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white px-3 py-1.5 rounded-lg transition-all flex items-center gap-2 group"
                >
                  {suggestion}
                  <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} id="nlq-form" className="relative group">
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder={placeholder}
            className="w-full bg-[#12161b]/50 border border-white/10 rounded-xl pl-4 pr-14 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#1ba6d6]/50 transition-all"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={!query.trim() || isLoading}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[#1ba6d6] text-white rounded-lg hover:bg-[#1ba6d6]/90 disabled:opacity-50 disabled:grayscale transition-all shadow-lg shadow-[#1ba6d6]/20"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default NaturalLanguageQuery;
