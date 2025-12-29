import { useState, useRef, useEffect } from 'react';
import {
  HiChatAlt,
  HiPaperAirplane,
  HiLightBulb,
  HiUser,
  HiAcademicCap,
} from 'react-icons/hi';

const NaturalLanguageQuery = ({
  placeholder = 'Ask anything about our services...',
  onQuerySubmit,
}) => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [conversation, setConversation] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const messagesEndRef = useRef(null);

  const sampleQueries = [
    'Show me all web development services',
    "What's the cost for mobile app development?",
    'How do I integrate with your API?',
    'What security certifications do you have?',
    'Can you help with AI implementation?',
    "What's your project timeline for HR-IMS?",
  ];

  useEffect(() => {
    // Set initial suggestions
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

    // Add user message to conversation
    const userMessage = { type: 'user', content: query, timestamp: new Date() };
    setConversation(prev => [...prev, userMessage]);

    setIsLoading(true);

    // Simulate API call to process natural language query
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Generate mock response based on the query
    const response = generateMockResponse(query);
    const aiMessage = { type: 'ai', content: response, timestamp: new Date() };

    setConversation(prev => [...prev, aiMessage]);
    setQuery('');
    setIsLoading(false);
  };

  const generateMockResponse = query => {
    const lowerQuery = query.toLowerCase();

    if (
      lowerQuery.includes('web') ||
      lowerQuery.includes('website') ||
      lowerQuery.includes('development')
    ) {
      return 'We offer comprehensive web development services including React, Next.js, Node.js, and modern frameworks. Our solutions are responsive, scalable, and SEO-optimized. Typical projects start at $15,000 for basic websites and go up to $100,000+ for complex applications. Would you like to see our portfolio or discuss your specific requirements?';
    } else if (
      lowerQuery.includes('mobile') ||
      lowerQuery.includes('app') ||
      lowerQuery.includes('ios') ||
      lowerQuery.includes('android')
    ) {
      return 'Our mobile app development services include native iOS and Android development, as well as cross-platform solutions using React Native and Flutter. We handle everything from UI/UX design to deployment and maintenance. Development costs typically range from $25,000 to $150,000 depending on complexity. We also provide ongoing support and feature updates.';
    } else if (
      lowerQuery.includes('api') ||
      lowerQuery.includes('integration')
    ) {
      return 'We provide comprehensive API development and integration services. Our RESTful APIs are built with security and scalability in mind, supporting various authentication methods including OAuth, JWT, and API keys. We offer API documentation, rate limiting, and monitoring. Integration with third-party services like Salesforce, HubSpot, and custom systems is also available.';
    } else if (
      lowerQuery.includes('security') ||
      lowerQuery.includes('certification') ||
      lowerQuery.includes('compliance')
    ) {
      return 'We maintain the highest security standards with SOC 2 Type II, GDPR compliance, ISO 27001 certification, and regular security audits. Our development follows secure coding practices, and we implement multi-factor authentication, encryption at rest and in transit, and continuous monitoring. All our solutions are built with security-first architecture.';
    } else if (
      lowerQuery.includes('ai') ||
      lowerQuery.includes('artificial intelligence') ||
      lowerQuery.includes('machine learning')
    ) {
      return 'Our AI services include custom machine learning model development, natural language processing, computer vision, and predictive analytics. We use TensorFlow, PyTorch, and cloud AI services from AWS, Azure, and Google Cloud. Common applications include recommendation engines, chatbots, image recognition, and predictive maintenance systems.';
    } else if (
      lowerQuery.includes('hr-ims') ||
      lowerQuery.includes('hr system') ||
      lowerQuery.includes('human resources')
    ) {
      return 'HR-IMS is our comprehensive HR management system that handles employee records, payroll, benefits administration, performance tracking, and compliance management. It includes features like automated reporting, workflow management, and integration with accounting systems. Implementation typically takes 3-6 months with ongoing support and updates.';
    } else if (
      lowerQuery.includes('cost') ||
      lowerQuery.includes('price') ||
      lowerQuery.includes('budget')
    ) {
      return 'Our pricing varies based on project scope and complexity. Web development starts at $15,000, mobile apps at $25,000, and enterprise solutions from $50,000. We offer fixed-price contracts for well-defined projects and time & materials for ongoing development. Would you like a custom quote for your specific needs?';
    } else if (
      lowerQuery.includes('timeline') ||
      lowerQuery.includes('time') ||
      lowerQuery.includes('schedule')
    ) {
      return 'Project timelines depend on scope and complexity. Basic websites: 4-8 weeks, mobile apps: 8-16 weeks, enterprise solutions: 3-9 months. We follow agile methodology with regular updates and milestone deliveries. Rush projects are possible with additional resources. Would you like to discuss your timeline requirements?';
    } else {
      return (
        'I understand you\'re asking about "' +
        query +
        '". We offer a wide range of technology solutions including web development, mobile apps, AI/ML, cloud services, and custom software. Could you provide more details about your specific needs? I can connect you with the right service or direct you to relevant resources in our knowledge base.'
      );
    }
  };

  const handleSuggestionClick = suggestion => {
    setQuery(suggestion);
    // Auto-submit when clicking a suggestion
    setTimeout(() => {
      const form = document.getElementById('nlq-form');
      if (form)
        form.dispatchEvent(
          new Event('submit', { cancelable: true, bubbles: true })
        );
    }, 100);
  };

  return (
    <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-soft border border-gray-100 dark:border-dark-700 overflow-hidden">
      <div className="p-6 border-b border-gray-200 dark:border-dark-700">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
            <HiAcademicCap className="w-5 h-5 text-white" />
          </div>
          <h3 className="font-bold text-gray-900 dark:text-white">
            Ask AI Assistant
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Ask questions in plain English and get instant answers
        </p>
      </div>

      <div className="h-96 overflow-y-auto p-4 space-y-4">
        {conversation.length === 0 && (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <HiChatAlt className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              How can I help you today?
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Try asking about our services, pricing, or technical capabilities
            </p>
          </div>
        )}

        {conversation.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                message.type === 'user'
                  ? 'bg-blue-500 text-white rounded-br-md'
                  : 'bg-gray-100 dark:bg-dark-700 text-gray-900 dark:text-white rounded-bl-md'
              }`}
            >
              <div className="flex items-start space-x-2">
                {message.type === 'ai' && (
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <HiAcademicCap className="w-3 h-3 text-white" />
                  </div>
                )}
                <div>
                  <p className="text-sm">{message.content}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
                {message.type === 'user' && (
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <HiUser className="w-3 h-3 text-white" />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-xs lg:max-w-md px-4 py-2 rounded-2xl bg-gray-100 dark:bg-dark-700 text-gray-900 dark:text-white rounded-bl-md">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <HiAcademicCap className="w-3 h-3 text-white" />
                </div>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: '0.1s' }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: '0.2s' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {conversation.length === 0 && suggestions.length > 0 && (
        <div className="px-4 pb-4">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
            Try asking:
          </p>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="text-xs bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-lg transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="p-4 border-t border-gray-200 dark:border-dark-700">
        <form onSubmit={handleSubmit} id="nlq-form">
          <div className="flex space-x-2">
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder={placeholder}
              className="flex-1 px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!query.trim() || isLoading}
              className="px-4 py-2 bg-gradient-to-br from-blue-500 to-indigo-500 text-white rounded-lg hover:from-blue-600 hover:to-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <HiPaperAirplane className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NaturalLanguageQuery;
