import { useState, useEffect } from 'react';
import { HiChat, HiPhone, HiPaperAirplane, HiX, HiCheck, HiClock, HiUser, HiSparkles } from 'react-icons/hi';

const WhatsAppBusinessIntegration = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi there! 👋 Thanks for visiting Limitless Infotech. How can we help you today?",
      sender: 'bot',
      timestamp: new Date(Date.now() - 300000), // 5 minutes ago
      status: 'read'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const predefinedMessages = [
    "Tell me about your services",
    "What's your pricing?",
    "I need help with a project",
    "Schedule a call"
  ];

  const handleSendMessage = (message = inputMessage) => {
    if (!message.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: message,
      sender: 'user',
      timestamp: new Date(),
      status: 'sent'
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');

    // Simulate bot response
    setIsTyping(true);
    setTimeout(() => {
      const botResponse = generateBotResponse(message);
      const responseMessage = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
        status: 'delivered'
      };
      setMessages(prev => [...prev, responseMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateBotResponse = (message) => {
    const lowerMsg = message.toLowerCase();

    if (lowerMsg.includes('service') || lowerMsg.includes('what do you do')) {
      return "We offer comprehensive IT solutions including Web Development, Mobile Apps, AI/ML, Cloud Services, and Custom Software. Would you like details about any specific service?";
    } else if (lowerMsg.includes('price') || lowerMsg.includes('cost') || lowerMsg.includes('pricing')) {
      return "Our pricing varies by project scope. Web dev starts at $15k, mobile apps at $25k. For accurate pricing, let's discuss your specific needs. Would you like to schedule a consultation?";
    } else if (lowerMsg.includes('help') || lowerMsg.includes('project')) {
      return "I'd be happy to help! Could you tell me more about your project requirements? Our team specializes in custom solutions tailored to your business needs.";
    } else if (lowerMsg.includes('call') || lowerMsg.includes('meeting') || lowerMsg.includes('schedule')) {
      return "Great! You can schedule a call with our team directly through our website or I can connect you with a specialist. Would you like me to transfer you?";
    } else if (lowerMsg.includes('hr-ims') || lowerMsg.includes('trackit')) {
      return "HR-IMS and TrackIT are our flagship SaaS products. HR-IMS handles HR management, while TrackIT manages project tracking. Would you like a demo of either product?";
    } else {
      return "Thanks for your message! Our team will get back to you shortly. In the meantime, you can also reach us at +1 (555) 123-4567 or email us at contact@limitlessinfotech.com";
    }
  };

  const handlePredefinedMessage = (message) => {
    handleSendMessage(message);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full shadow-2xl flex items-center justify-center text-white hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-110"
          aria-label="Open WhatsApp chat"
        >
          <HiChat className="w-8 h-8" />
          <span className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
            24/7
          </span>
        </button>
      ) : (
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
                  <HiClock className="w-3 h-3 mr-1" /> Always available
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 rounded-full p-1"
            >
              <HiX className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50 dark:bg-dark-700">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-green-500 text-white rounded-br-md'
                      : 'bg-white dark:bg-dark-600 text-gray-900 dark:text-white rounded-bl-md'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <div className="flex items-center justify-end mt-1">
                    <span className="text-xs opacity-70">{formatTime(message.timestamp)}</span>
                    {message.sender === 'user' && (
                      <HiCheck className={`w-3 h-3 ml-1 ${message.status === 'read' ? 'text-blue-400' : 'text-gray-400'}`} />
                    )}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-dark-600 text-gray-900 dark:text-white rounded-2xl rounded-bl-md px-3 py-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Predefined messages */}
          {messages.length <= 2 && (
            <div className="px-3 py-2 border-t border-gray-200 dark:border-dark-600">
              <div className="flex flex-wrap gap-2">
                {predefinedMessages.map((msg, index) => (
                  <button
                    key={index}
                    onClick={() => handlePredefinedMessage(msg)}
                    className="text-xs bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-2 py-1 rounded-lg hover:bg-green-200 dark:hover:bg-green-800/50 transition-colors"
                  >
                    {msg}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-3 border-t border-gray-200 dark:border-dark-600 bg-white dark:bg-dark-800">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputMessage.trim()}
                className="w-10 h-10 bg-green-500 hover:bg-green-600 disabled:bg-gray-300 dark:disabled:bg-dark-600 rounded-lg flex items-center justify-center text-white transition-colors"
              >
                <HiPaperAirplane className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppBusinessIntegration;