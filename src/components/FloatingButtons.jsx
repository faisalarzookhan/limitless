import { useState, useEffect } from 'react';
import { HiChat, HiArrowUp } from 'react-icons/hi';

const FloatingButtons = () => {
  const [isLiveAgentMode, setIsLiveAgentMode] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to trigger live agent mode
  const triggerLiveAgentMode = () => {
    setIsLiveAgentMode(true);
    setIsChatbotOpen(false);
  };

  // Function to exit live agent mode
  const exitLiveAgentMode = () => {
    setIsLiveAgentMode(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 space-y-3">
      {/* WhatsApp Support Button - Only visible in live agent mode */}
      {isLiveAgentMode && !isWhatsAppOpen && (
        <div className="relative">
          <button
            onClick={() => setIsWhatsAppOpen(true)}
            className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full shadow-2xl flex items-center justify-center text-white hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-110"
            aria-label="Open WhatsApp chat"
          >
            <HiChat className="w-8 h-8" />
            <span className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              24/7
            </span>
          </button>
        </div>
      )}

      {/* Chatbot Button - Visible when not in live agent mode */}
      {!isLiveAgentMode && !isChatbotOpen && (
        <div className="relative">
          <button
            onClick={() => setIsChatbotOpen(true)}
            className="chatbot-button animate-pulse hover:animate-none"
            aria-label="Open chat"
          >
            <HiChat className="w-8 h-8" />
          </button>
        </div>
      )}

      {/* Scroll to Top Button - Visible when scrolled down and not in live agent mode or chat open */}
      {showScrollTop &&
        !isLiveAgentMode &&
        !isChatbotOpen &&
        !isWhatsAppOpen && (
          <div className="relative">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-primary text-white hover:shadow-lg hover:shadow-primary-500/30 focus:ring-primary-500 px-6 py-3 text-base p-4 rounded-full shadow-lg hover:shadow-xl"
              aria-label="Scroll to top"
            >
              <span className="mr-2">
                <HiArrowUp className="w-5 h-5" />
              </span>
            </button>
          </div>
        )}

      {/* WhatsApp Support Chat - When open */}
      {isWhatsAppOpen && (
        <div className="w-80 h-96 bg-white dark:bg-dark-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-dark-700 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 text-white flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <HiChat className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold">WhatsApp Support</h3>
                <p className="text-xs opacity-80 flex items-center">
                  <span className="w-2 h-2 bg-green-300 rounded-full mr-1"></span>{' '}
                  Available now
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                setIsWhatsAppOpen(false);
                exitLiveAgentMode();
              }}
              className="text-white hover:bg-white/20 rounded-full p-1"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50 dark:bg-dark-700">
            <div className="flex justify-start">
              <div className="bg-white dark:bg-dark-600 text-gray-900 dark:text-white rounded-2xl rounded-bl-md px-3 py-2 max-w-xs">
                <p className="text-sm">
                  Hello! You're now connected with our live support team via
                  WhatsApp.
                </p>
                <div className="flex items-center justify-end mt-1">
                  <span className="text-xs opacity-70">Just now</span>
                </div>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-white dark:bg-dark-600 text-gray-900 dark:text-white rounded-2xl rounded-bl-md px-3 py-2 max-w-xs">
                <p className="text-sm">How can we assist you today?</p>
                <div className="flex items-center justify-end mt-1">
                  <span className="text-xs opacity-70">Just now</span>
                </div>
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-200 dark:border-dark-600 bg-white dark:bg-dark-800">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-lg flex items-center justify-center text-white transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chatbot - When open */}
      {isChatbotOpen && (
        <div className="w-80 h-96 bg-white dark:bg-dark-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-dark-700 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 text-white flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <HiChat className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold">Auralis AI</h3>
                <p className="text-xs opacity-80 flex items-center">
                  <span className="w-2 h-2 bg-green-300 rounded-full mr-1"></span>{' '}
                  Online
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsChatbotOpen(false)}
              className="text-white hover:bg-white/20 rounded-full p-1"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50 dark:bg-dark-700">
            <div className="flex justify-start">
              <div className="bg-white dark:bg-dark-600 text-gray-900 dark:text-white rounded-2xl rounded-bl-md px-3 py-2 max-w-xs">
                <p className="text-sm">
                  Hello! I'm Auralis, your AI assistant. How can I help you
                  today?
                </p>
                <div className="flex items-center justify-end mt-1">
                  <span className="text-xs opacity-70">Just now</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="px-3 py-2 border-t border-gray-200 dark:border-dark-600">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={triggerLiveAgentMode}
                className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors"
              >
                Connect with Agent
              </button>
            </div>
          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-200 dark:border-dark-600 bg-white dark:bg-dark-800">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-lg flex items-center justify-center text-white transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingButtons;
