import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  HiX,
  HiChatAlt2,
  HiPaperAirplane,
  HiUser,
  HiUserCircle,
  HiSupport,
  HiLightningBolt,
  HiInformationCircle,
  HiLightBulb,
  HiQuestionMarkCircle,
} from "react-icons/hi";
import { sendUserInteractionNotification } from '../services/notificationService';

const Chatbot = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hello! 👋 I'm your Auralis Live Agent from Limitless Infotech Solution. How can I assist you today?",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // AI Knowledge Base
  const knowledgeBase = {
    greeting: {
      keywords: [
        "hello",
        "hi",
        "hey",
        "good morning",
        "good afternoon",
        "good evening",
        "auralis",
        "who are you",
        "what can you do",
        "what are you",
        "what do you do",
        "what is your purpose",
        "what is your role",
        "what is your function",
        "what is your responsibility",
        "what is your mission",
        "what is your vision",
        "what are your goals",
        "what do you offer",
        "what can you provide",
        "what value do you bring",
        "what problem do you solve",
        "what is your role in the company",
        "what is your role in Limitless Infotech Solution",
        "who is faisal khan",
        "what is your role in the organization",
        "founder of limitless infotech"
      ],
      responses: [
        "Hello! I'm your Live Agent. How can I help you today?",
        "Hi there! I'm your Live Agent. What can I help you with?",
        "Hey! Welcome to Limitless Infotech. I'm your Live Agent, here to assist you. What brings you here today?",
        "Good morning! I'm your Live Agent. How can I help you today?",
        "Good afternoon! I'm your Live Agent. How can I help you today?",
        "Good evening! I'm your Live Agent. How can I help you today?",
        "I'm your Live Agent. How can I assist you today?",
        "Welcome! I'm your Live Agent. How can I assist you today?",
        "Faisal Khan is the founder of Limitless Infotech Solution.",
        "I am here to assist you with any questions you may have.",
        "I am here to assist you with any questions you may have about Limitless Infotech Solution.",
      ],
    },
    contact: {
      keywords: [
        "contact",
        "reach",
        "email",
        "phone",
        "call",
        "location",
        "address",
        "support",
        "help",
      ],
      responses: [
        "You can reach us at:\n\n📧 Email: Info@limitlessinfotech.com\n📱 Phone: +917710909492\n📍 Location: Mumbai, Maharashtra, IN\n\nWould you like me to connect you with our support team?",
      ],
    },
    pricing: {
      keywords: ["price", "pricing", "cost", "how much", "budget", "quote", "estimate"],
      responses: [
        "Our pricing is tailored to each project based on:\n\n• Project Scope & Complexity\n• Timeline Requirements\n• Technology Stack\n• Features & Functionality\n\nI recommend filling out our client form to get a detailed quote. Would you like me to direct you there?",
      ],
    },
    timeline: {
      keywords: [
        "timeline",
        "how long",
        "duration",
        "time",
        "delivery",
        "deadline",
        "when",
      ],
      responses: [
        "Project timelines vary based on complexity:\n\n• Simple Website: 2-4 weeks\n• Complex Web App: 2-4 months\n• Mobile App: 3-6 months\n• Custom Software: 3-12 months\n\nWe provide detailed timelines during project planning. Want to discuss your project?",
      ],
    },
    technology: {
      keywords: [
        "technology",
        "tech stack",
        "technologies",
        "framework",
        "language",
        "platform",
      ],
      responses: [
        "We work with cutting-edge technologies:\n\n• Frontend: React, Vue, Angular, Next.js\n• Backend: Node.js, Python, PHP, .NET\n• Mobile: React Native, Flutter\n• Database: MongoDB, PostgreSQL, MySQL\n• Cloud: AWS, Azure, Google Cloud\n\nWhat technology are you interested in?",
      ],
    },
    support: {
      keywords: ["support", "maintenance", "help", "assistance", "update", "bug", "issue"],
      responses: [
        "We provide comprehensive support:\n\n• 24/7 Technical Support\n• Regular Updates & Maintenance\n• Bug Fixes & Security Patches\n• Performance Monitoring\n• Training & Documentation\n\nNeed support for an existing project?",
      ],
    },
    portfolio: {
      keywords: [
        "portfolio",
        "projects",
        "work",
        "examples",
        "case studies",
        "previous work",
      ],
      responses: [
        "We have successfully delivered projects across various industries. You can view our portfolio with detailed case studies showing:\n\n• Project Challenges\n• Our Solutions\n• Technologies Used\n• Results & Impact\n\nWould you like to see our portfolio?",
      ],
    },
    start: {
      keywords: [
        "start",
        "begin",
        "get started",
        "new project",
        "hire",
        "work with you",
      ],
      responses: [
        "Great! Let's get started:\n\n1. Fill out our Client Requirements Form\n2. Schedule a consultation call\n3. Receive a detailed proposal\n4. Start development\n\nShall I direct you to our client form?",
      ],
    },
    security: {
      keywords: [
        "security",
        "secure",
        "safety",
        "data protection",
        "encryption",
        "privacy",
      ],
      responses: [
        "Security is our top priority:\n\n• Enterprise-grade Encryption\n• Secure Coding Practices\n• Regular Security Audits\n• Data Protection Compliance\n• Backup & Disaster Recovery\n\nYour data and systems are completely secure with us.",
      ],
    },
    team: {
      keywords: ["team", "who", "founder", "about", "company", "employees"],
      responses: [
        "Limitless Infotech Solution is led by Faisal Khan and a talented team of developers, designers, and engineers. We are passionate about creating innovative solutions that transform businesses.\n\nWould you like to learn more about our company?",
      ],
    },
    thanks: {
      keywords: ["thank", "thanks", "appreciate", "grateful"],
      responses: [
        "You're welcome! 😊 Is there anything else I can help you with?",
        "Happy to help! Feel free to ask if you have more questions.",
        "My pleasure! Let me know if you need anything else.",
      ],
    },
    integration: {
      keywords: ["integration", "api", "connect", "system", "third-party", "connectivity"],
      responses: [
        "We specialize in system integrations:\n\n• API Development & Integration\n• Third-party Service Integration\n• CRM & ERP Integration\n• Payment Gateway Integration\n• Cloud Service Integration\n\nWhat systems would you like to integrate?",
      ],
    },
    ai: {
      keywords: ["ai", "artificial intelligence", "machine learning", "ml", "automation", "intelligent"],
      responses: [
        "We offer comprehensive AI solutions:\n\n• Custom Machine Learning Models\n• Natural Language Processing\n• Computer Vision\n• Predictive Analytics\n• Intelligent Automation\n\nWould you like to know how AI can benefit your business?",
      ],
    },
    services: {
      keywords: [
        "service",
        "services",
        "what do you do",
        "offerings",
        "solutions",
        "products",
      ],
      responses: [
        "We offer comprehensive solutions:\n\n🌐 Development Services:\n• Web Development\n• Mobile App Development\n• Custom Software & Systems\n• CRM & Task Management Apps\n• Business Automation & AI Integration\n\n📦 Our Products:\n• TrackIT - IT Asset Management\n• TrackO - Operations Tracking\n• HR-IMS - HR Management System\n• WorkTrack - Workforce Management\n• IT-TMS - IT Ticket Management\n• MailTO - Email Management\n• Baseless - Database Solutions\n\n🤝 Client Solutions:\n• IVOLEX - Custom Solution\n• Wakilni - Legal Platform\n\nWhich interests you?",
      ],
    },
    web: {
      keywords: ["web", "website", "web development", "web design", "webapp"],
      responses: [
        "Our Web Development services include:\n\n• Responsive Design (Mobile + Desktop)\n• SEO Optimization\n• Custom Web Applications\n• E-commerce Solutions\n• Progressive Web Apps (PWA)\n• Performance Optimization\n• CMS Integration\n\n💡 Check our pricing at limitlessinfotech.com/pricing\n\nWould you like to discuss your web project?",
      ],
    },
    mobile: {
      keywords: [
        "mobile",
        "app",
        "mobile app",
        "android",
        "ios",
        "application",
        "react native",
        "flutter",
      ],
      responses: [
        "We create powerful mobile applications:\n\n• Native iOS & Android Apps\n• Cross-Platform Development (React Native, Flutter)\n• UI/UX Design\n• App Maintenance & Support\n• App Store Optimization\n\n📱 Example: We built IVOLEX and Wakilni mobile solutions.\n\nWhat type of mobile app do you need?",
      ],
    },
    crm: {
      keywords: [
        "crm",
        "customer management",
        "task management",
        "business management",
      ],
      responses: [
        "Our CRM and Business Management solutions help you:\n\n• Manage Customer Relationships\n• Track Sales & Leads\n• Automate Tasks\n• Generate Reports & Analytics\n• Integrate with Existing Systems\n\nWant to learn more about our custom CRM solutions?",
      ],
    },
    pricing: {
      keywords: ["price", "pricing", "cost", "how much", "budget", "quote"],
      responses: [
        "Our pricing is tailored to each project based on:\n\n• Project Scope & Complexity\n• Timeline Requirements\n• Technology Stack\n• Features & Functionality\n\nI recommend filling out our client form to get a detailed quote. Would you like me to direct you there?",
      ],
    },
    contact: {
      keywords: [
        "contact",
        "reach",
        "email",
        "phone",
        "call",
        "location",
        "address",
      ],
      responses: [
        "You can reach us at:\n\n📧 Email: Info@limitlessinfotech.com\n📱 Phone: +917710909492\n📍 Location: Mumbai, Maharashtra, IN\n\nWould you like to schedule a consultation?",
      ],
    },
    timeline: {
      keywords: [
        "timeline",
        "how long",
        "duration",
        "time",
        "delivery",
        "deadline",
      ],
      responses: [
        "Project timelines vary based on complexity:\n\n• Simple Website: 2-4 weeks\n• Complex Web App: 2-4 months\n• Mobile App: 3-6 months\n• Custom Software: 3-12 months\n\nWe provide detailed timelines during project planning. Want to discuss your project?",
      ],
    },
    technology: {
      keywords: [
        "technology",
        "tech stack",
        "technologies",
        "framework",
        "language",
      ],
      responses: [
        "We work with cutting-edge technologies:\n\n• Frontend: React, Vue, Angular, Next.js\n• Backend: Node.js, Python, PHP, .NET\n• Mobile: React Native, Flutter\n• Database: MongoDB, PostgreSQL, MySQL\n• Cloud: AWS, Azure, Google Cloud\n\nWhat technology are you interested in?",
      ],
    },
    support: {
      keywords: ["support", "maintenance", "help", "assistance", "update"],
      responses: [
        "We provide comprehensive support:\n\n• 24/7 Technical Support\n• Regular Updates & Maintenance\n• Bug Fixes & Security Patches\n• Performance Monitoring\n• Training & Documentation\n\nNeed support for an existing project?",
      ],
    },
    portfolio: {
      keywords: [
        "portfolio",
        "projects",
        "work",
        "examples",
        "case studies",
        "previous work",
      ],
      responses: [
        "We have successfully delivered projects across various industries. You can view our portfolio with detailed case studies showing:\n\n• Project Challenges\n• Our Solutions\n• Technologies Used\n• Results & Impact\n\nWould you like to see our portfolio?",
      ],
    },
    start: {
      keywords: [
        "start",
        "begin",
        "get started",
        "new project",
        "hire",
        "work with you",
      ],
      responses: [
        "Great! Let's get started:\n\n1. Fill out our Client Requirements Form\n2. Schedule a consultation call\n3. Receive a detailed proposal\n4. Start development\n\nShall I direct you to our client form?",
      ],
    },
    security: {
      keywords: [
        "security",
        "secure",
        "safety",
        "data protection",
        "encryption",
      ],
      responses: [
        "Security is our top priority:\n\n• Enterprise-grade Encryption\n• Secure Coding Practices\n• Regular Security Audits\n• Data Protection Compliance\n• Backup & Disaster Recovery\n\nYour data and systems are completely secure with us.",
      ],
    },
    team: {
      keywords: ["team", "who", "founder", "about", "company"],
      responses: [
        "Limitless Infotech Solution is led by Faisal Khan and a talented team of developers, designers, and engineers. We are passionate about creating innovative solutions that transform businesses.\n\nWould you like to learn more about our company?",
      ],
    },
    thanks: {
      keywords: ["thank", "thanks", "appreciate", "grateful"],
      responses: [
        "You're welcome! 😊 Is there anything else I can help you with?",
        "Happy to help! Feel free to ask if you have more questions.",
        "My pleasure! Let me know if you need anything else.",
      ],
    },
  };

  const findBestResponse = (message) => {
    const lowerMessage = message.toLowerCase();

    // Check for page redirection keywords
    if (lowerMessage.includes("service") || lowerMessage.includes("services")) {
      setTimeout(() => {
        navigate('/services');
      }, 1000);
      return "I'm redirecting you to our services page where you can explore all our offerings. Just a moment...";
    } else if (lowerMessage.includes("portfolio") || lowerMessage.includes("project") || lowerMessage.includes("work")) {
      setTimeout(() => {
        navigate('/portfolio');
      }, 1000);
      return "I'm redirecting you to our portfolio page where you can see our completed projects and case studies. Just a moment...";
    } else if (lowerMessage.includes("product") || lowerMessage.includes("products")) {
      setTimeout(() => {
        navigate('/products');
      }, 1000);
      return "I'm redirecting you to our products page where you can explore our SaaS solutions. Just a moment...";
    } else if (lowerMessage.includes("about") || lowerMessage.includes("company")) {
      setTimeout(() => {
        navigate('/about');
      }, 1000);
      return "I'm redirecting you to our about page where you can learn more about Limitless Infotech Solution. Just a moment...";
    } else if (lowerMessage.includes("contact") || lowerMessage.includes("reach") || lowerMessage.includes("get in touch")) {
      setTimeout(() => {
        navigate('/contact');
      }, 1000);
      return "I'm redirecting you to our contact page where you can get in touch with our team. Just a moment...";
    } else if (lowerMessage.includes("pricing") || lowerMessage.includes("price") || lowerMessage.includes("cost")) {
      setTimeout(() => {
        navigate('/pricing');
      }, 1000);
      return "I'm redirecting you to our pricing page where you can find detailed information about our packages. Just a moment...";
    }

    // Check each category in knowledge base
    for (const [category, data] of Object.entries(knowledgeBase)) {
      if (data.keywords.some((keyword) => lowerMessage.includes(keyword))) {
        const responses = data.responses;
        return responses[Math.floor(Math.random() * responses.length)];
      }
    }

    // Default response if no match found
    return "I'm here to help! You can ask me about our services, pricing, portfolio, or how to get started. I'm a Live Agent ready to assist you with any questions. Need to speak with a human? Click the button below.";
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    // Set loading state
    setIsLoading(true);
    
    // Add user message
    const userMessage = {
      type: "user",
      text: inputMessage,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Send notification about the user's message
    try {
      await sendUserInteractionNotification('chat-message', {
        userId: 'anonymous', // In a real app, this would be the actual user ID
        message: inputMessage,
        timestamp: new Date().toISOString(),
        page: window.location.pathname,
        userAgent: navigator.userAgent
      });
    } catch (error) {
      console.error('Error sending chat notification:', error);
    }

    // Simulate bot typing and response
    setTimeout(
      () => {
        const botResponse = findBestResponse(inputMessage);
        const botMessage = {
          type: "bot",
          text: botResponse,
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, botMessage]);
        setIsTyping(false);
        setIsLoading(false);
      },
      1000 + Math.random() * 1000,
    ); // Random delay between 1-2 seconds
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickActions = [
    { label: "Our Services", message: "What services do you offer?" },
    { label: "Get a Quote", message: "How can I get a price quote?" },
    { label: "View Portfolio", message: "Can I see your portfolio?" },
    { label: "Contact Info", message: "How can I contact you?" },
  ];

  const handleQuickAction = (message) => {
    setInputMessage(message);
    setTimeout(() => handleSendMessage(), 100);
  };

  const connectToAgent = () => {
    const agentMessage = {
      type: "bot",
      text: "I'm connecting you with one of our specialists. In the meantime, you can also:\n\n• Call us: +917710909492\n• Email us: Info@limitlessinfotech.com\n• Fill out our contact form for a detailed response",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, agentMessage]);
  };

  return (
    <div className="fixed bottom-8 right-32 z-50">
      {/* Chatbot Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full shadow-2xl flex items-center justify-center text-white hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-110"
          aria-label="Open Live Agent chat"
          title="Live Agent Support"
        >
          <HiSupport className="w-8 h-8" />
          <span className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 text-white text-xs rounded-full flex items-center justify-center">
            24/7
          </span>
        </button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div className="chatbot-window animate-scale-up">
          {/* Header */}
          <div className="chatbot-header">
                    <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <HiSupport className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Live Agent</h3>
                <p className="text-xs text-white/80">
                  Ready to assist • Online 24/7
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors duration-200"
              aria-label="Close chat"
            >
              <HiX className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div key={index} className={`chatbot-message ${message.type}`}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-gray-200 dark:bg-dark-700">
                  {message.type === "bot" ? (
                    <HiSupport className="w-5 h-5 text-blue-600" />
                  ) : (
                    <HiUserCircle className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  )}
                </div>
                <div className={`chatbot-message-content ${message.type}`}>
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  <span className="text-xs opacity-70 mt-1 block">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="chatbot-message bot">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-gray-200 dark:bg-dark-700">
                  <HiSupport className="w-5 h-5 text-blue-600" />
                </div>
                <div className="chatbot-message-content bot">
                  <div className="flex space-x-2">
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          {messages.length === 1 && (
            <div className="px-4 py-3 bg-gray-50 dark:bg-dark-700 border-t border-gray-200 dark:border-dark-700">
              <div className="flex items-center mb-2">
                <HiLightningBolt className="w-4 h-4 text-blue-500 mr-2" />
                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                  Quick Questions:
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickAction(action.message)}
                    className="text-xs px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors duration-200 flex items-center"
                    aria-label={`Quick action: ${action.label}`}
                  >
                    <HiLightBulb className="w-3 h-3 mr-1" />
                    {action.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="chatbot-input-area">
            <div className="flex items-center space-x-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message to our Live Agent..."
                  className="w-full px-4 py-3 pl-10 bg-gray-100 dark:bg-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  aria-label="Type your message to the Live Agent"
                  disabled={isLoading}
                />
                <HiQuestionMarkCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isLoading}
                className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center"
                aria-label="Send message to Live Agent"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <HiPaperAirplane className="w-5 h-5 transform rotate-90" />
                )}
              </button>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <button
                onClick={connectToAgent}
                className="w-full py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors duration-200 flex items-center justify-center"
                aria-label="Connect with a human agent"
              >
                <HiUser className="w-4 h-4 mr-2" />
                Need to speak with a human?
              </button>
              <div className="text-xs text-gray-500 dark:text-gray-400 text-center mt-1">
                <HiInformationCircle className="w-3 h-3 inline mr-1" />
                Your conversation is secure and private
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
