import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  MessageSquare,
  Send,
  User,
  CircleUser,
  LifeBuoy,
  Zap,
  Info,
  Lightbulb,
  HelpCircle,
  Calendar,
  Mail,
  Bot,
  BrainCircuit,
  ShieldCheck,
  Smartphone
} from 'lucide-react';
import { sendUserInteractionNotification } from '../../../services/notification/notificationService';
import CalendarIntegration from '../../CalendarIntegration';

const Chatbot = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Hello! 👋 I'm your Auralis Live Agent from Limitless Infotech Solution. How can I assist you today?",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // AI Knowledge Base
  const knowledgeBase = {
    greeting: {
      keywords: [
        'hello',
        'hi',
        'hey',
        'good morning',
        'good afternoon',
        'good evening',
        'auralis',
        'who are you',
        'what can you do',
        'what are you',
        'what do you do',
        'what is your purpose',
        'what is your role',
        'what is your function',
        'what is your responsibility',
        'what is your mission',
        'what is your vision',
        'what are your goals',
        'what do you offer',
        'what can you provide',
        'what value do you bring',
        'what problem do you solve',
        'what is your role in the company',
        'what is your role in Limitless Infotech Solution',
        'who is faisal khan',
        'what is your role in the organization',
        'founder of limitless infotech',
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
        'Faisal Khan is the founder of Limitless Infotech Solution.',
        'I am here to assist you with any questions you may have.',
        'I am here to assist you with any questions you may have about Limitless Infotech Solution.',
      ],
    },
    contact: {
      keywords: [
        'contact',
        'reach',
        'email',
        'phone',
        'call',
        'location',
        'address',
        'support',
        'help',
      ],
      responses: [
        'You can reach us at:\n\n📧 Email: Info@limitlessinfotech.com\n📱 Phone: +917710909492\n📍 Location: Mumbai, Maharashtra, IN\n\nWould you like me to connect you with our support team?',
      ],
    },
    pricing: {
      keywords: [
        'price',
        'pricing',
        'cost',
        'how much',
        'budget',
        'quote',
        'estimate',
      ],
      responses: [
        'Our pricing is tailored to each project based on:\n\n• Project Scope & Complexity\n• Timeline Requirements\n• Technology Stack\n• Features & Functionality\n\nI recommend filling out our client form to get a detailed quote. Would you like me to direct you there?',
      ],
    },
    timeline: {
      keywords: [
        'timeline',
        'how long',
        'duration',
        'time',
        'delivery',
        'deadline',
        'when',
      ],
      responses: [
        'Project timelines vary based on complexity:\n\n• Simple Website: 2-4 weeks\n• Complex Web App: 2-4 months\n• Mobile App: 3-6 months\n• Custom Software: 3-12 months\n\nWe provide detailed timelines during project planning. Want to discuss your project?',
      ],
    },
    technology: {
      keywords: [
        'technology',
        'tech stack',
        'technologies',
        'framework',
        'language',
        'platform',
      ],
      responses: [
        'We work with cutting-edge technologies:\n\n• Frontend: React, Vue, Angular, Next.js\n• Backend: Node.js, Python, PHP, .NET\n• Mobile: React Native, Flutter\n• Database: MongoDB, PostgreSQL, MySQL\n• Cloud: AWS, Azure, Google Cloud\n\nWhat technology are you interested in?',
      ],
    },
    support: {
      keywords: [
        'support',
        'maintenance',
        'help',
        'assistance',
        'update',
        'bug',
        'issue',
      ],
      responses: [
        'We provide comprehensive support:\n\n• 24/7 Technical Support\n• Regular Updates & Maintenance\n• Bug Fixes & Security Patches\n• Performance Monitoring\n• Training & Documentation\n\nNeed support for an existing project?',
      ],
    },
    portfolio: {
      keywords: [
        'portfolio',
        'projects',
        'work',
        'examples',
        'case studies',
        'previous work',
      ],
      responses: [
        'We have successfully delivered projects across various industries. You can view our portfolio with detailed case studies showing:\n\n• Project Challenges\n• Our Solutions\n• Technologies Used\n• Results & Impact\n\nWould you like to see our portfolio?',
      ],
    },
    start: {
      keywords: [
        'start',
        'begin',
        'get started',
        'new project',
        'hire',
        'work with you',
      ],
      responses: [
        "Great! Let's get started:\n\n1. Fill out our Client Requirements Form\n2. Schedule a consultation call\n3. Receive a detailed proposal\n4. Start development\n\nShall I direct you to our client form?",
      ],
    },
    security: {
      keywords: [
        'security',
        'secure',
        'safety',
        'data protection',
        'encryption',
        'privacy',
      ],
      responses: [
        'Security is our top priority:\n\n• Enterprise-grade Encryption\n• Secure Coding Practices\n• Regular Security Audits\n• Data Protection Compliance\n• Backup & Disaster Recovery\n\nYour data and systems are completely secure with us.',
      ],
    },
    team: {
      keywords: ['team', 'who', 'founder', 'about', 'company', 'employees'],
      responses: [
        'Limitless Infotech Solution is led by Faisal Khan and a talented team of developers, designers, and engineers. We are passionate about creating innovative solutions that transform businesses.\n\nWould you like to learn more about our company?',
      ],
    },
    thanks: {
      keywords: ['thank', 'thanks', 'appreciate', 'grateful'],
      responses: [
        "You're welcome! 😊 Is there anything else I can help you with?",
        'Happy to help! Feel free to ask if you have more questions.',
        'My pleasure! Let me know if you need anything else.',
      ],
    },
    integration: {
      keywords: [
        'integration',
        'api',
        'connect',
        'system',
        'third-party',
        'connectivity',
      ],
      responses: [
        'We specialize in system integrations:\n\n• API Development & Integration\n• Third-party Service Integration\n• CRM & ERP Integration\n• Payment Gateway Integration\n• Cloud Service Integration\n\nWhat systems would you like to integrate?',
      ],
    },
    ai: {
      keywords: [
        'ai',
        'artificial intelligence',
        'machine learning',
        'ml',
        'automation',
        'intelligent',
      ],
      responses: [
        'We offer comprehensive AI solutions:\n\n• Custom Machine Learning Models\n• Natural Language Processing\n• Computer Vision\n• Predictive Analytics\n• Intelligent Automation\n\nWould you like to know how AI can benefit your business?',
      ],
    },
    services: {
      keywords: [
        'service',
        'services',
        'what do you do',
        'offerings',
        'solutions',
        'products',
      ],
      responses: [
        'We offer comprehensive solutions:\n\n🌐 Development Services:\n• Web Development\n• Mobile App Development\n• Custom Software & Systems\n• CRM & Task Management Apps\n• Business Automation & AI Integration\n\n📦 Our Products:\n• TrackIT - IT Asset Management\n• TrackO - Operations Tracking\n• HR-IMS - HR Management System\n• WorkTrack - Workforce Management\n• IT-TMS - IT Ticket Management\n• MailTO - Email Management\n• Baseless - Database Solutions\n\n🤝 Client Solutions:\n• IVOLEX - Custom Solution\n• Wakilni - Legal Platform\n\nWhich interests you?',
      ],
    },
    web: {
      keywords: ['web', 'website', 'web development', 'web design', 'webapp'],
      responses: [
        'Our Web Development services include:\n\n• Responsive Design (Mobile + Desktop)\n• SEO Optimization\n• Custom Web Applications\n• E-commerce Solutions\n• Progressive Web Apps (PWA)\n• Performance Optimization\n• CMS Integration\n\n💡 Check our pricing at limitlessinfotech.com/pricing\n\nWould you like to discuss your web project?',
      ],
    },
    mobile: {
      keywords: [
        'mobile',
        'app',
        'mobile app',
        'android',
        'ios',
        'application',
        'react native',
        'flutter',
      ],
      responses: [
        'We create powerful mobile applications:\n\n• Native iOS & Android Apps\n• Cross-Platform Development (React Native, Flutter)\n• UI/UX Design\n• App Maintenance & Support\n• App Store Optimization\n\n📱 Example: We built IVOLEX and Wakilni mobile solutions.\n\nWhat type of mobile app do you need?',
      ],
    },
    crm: {
      keywords: [
        'crm',
        'customer management',
        'task management',
        'business management',
      ],
      responses: [
        'Our CRM and Business Management solutions help you:\n\n• Manage Customer Relationships\n• Track Sales & Leads\n• Automate Tasks\n• Generate Reports & Analytics\n• Integrate with Existing Systems\n\nWant to learn more about our custom CRM solutions?',
      ],
    },
    pricing2: {
      keywords: ['price', 'pricing', 'cost', 'how much', 'budget', 'quote'],
      responses: [
        'Our pricing is tailored to each project based on:\n\n• Project Scope & Complexity\n• Timeline Requirements\n• Technology Stack\n• Features & Functionality\n\nI recommend filling out our client form to get a detailed quote. Would you like me to direct you there?',
      ],
    },
    contact2: {
      keywords: [
        'contact',
        'reach',
        'email',
        'phone',
        'call',
        'location',
        'address',
      ],
      responses: [
        'You can reach us at:\n\n📧 Email: Info@limitlessinfotech.com\n📱 Phone: +917710909492\n📍 Location: Mumbai, Maharashtra, IN\n\nWould you like to schedule a consultation?',
      ],
    },
    timeline2: {
      keywords: [
        'timeline',
        'how long',
        'duration',
        'time',
        'delivery',
        'deadline',
      ],
      responses: [
        'Project timelines vary based on complexity:\n\n• Simple Website: 2-4 weeks\n• Complex Web App: 2-4 months\n• Mobile App: 3-6 months\n• Custom Software: 3-12 months\n\nWe provide detailed timelines during project planning. Want to discuss your project?',
      ],
    },
    technology2: {
      keywords: [
        'technology',
        'tech stack',
        'technologies',
        'framework',
        'language',
      ],
      responses: [
        'We work with cutting-edge technologies:\n\n• Frontend: React, Vue, Angular, Next.js\n• Backend: Node.js, Python, PHP, .NET\n• Mobile: React Native, Flutter\n• Database: MongoDB, PostgreSQL, MySQL\n• Cloud: AWS, Azure, Google Cloud\n\nWhat technology are you interested in?',
      ],
    },
    support2: {
      keywords: ['support', 'maintenance', 'help', 'assistance', 'update'],
      responses: [
        'We provide comprehensive support:\n\n• 24/7 Technical Support\n• Regular Updates & Maintenance\n• Bug Fixes & Security Patches\n• Performance Monitoring\n• Training & Documentation\n\nNeed support for an existing project?',
      ],
    },
    portfolio2: {
      keywords: [
        'portfolio',
        'projects',
        'work',
        'examples',
        'case studies',
        'previous work',
      ],
      responses: [
        'We have successfully delivered projects across various industries. You can view our portfolio with detailed case studies showing:\n\n• Project Challenges\n• Our Solutions\n• Technologies Used\n• Results & Impact\n\nWould you like to see our portfolio?',
      ],
    },
    start2: {
      keywords: [
        'start',
        'begin',
        'get started',
        'new project',
        'hire',
        'work with you',
      ],
      responses: [
        "Great! Let's get started:\n\n1. Fill out our Client Requirements Form\n2. Schedule a consultation call\n3. Receive a detailed proposal\n4. Start development\n\nShall I direct you to our client form?",
      ],
    },
    security2: {
      keywords: [
        'security',
        'secure',
        'safety',
        'data protection',
        'encryption',
      ],
      responses: [
        'Security is our top priority:\n\n• Enterprise-grade Encryption\n• Secure Coding Practices\n• Regular Security Audits\n• Data Protection Compliance\n• Backup & Disaster Recovery\n\nYour data and systems are completely secure with us.',
      ],
    },
    team2: {
      keywords: ['team', 'who', 'founder', 'about', 'company'],
      responses: [
        'Limitless Infotech Solution is led by Faisal Khan and a talented team of developers, designers, and engineers. We are passionate about creating innovative solutions that transform businesses.\n\nWould you like to learn more about our company?',
      ],
    },
    thanks2: {
      keywords: ['thank', 'thanks', 'appreciate', 'grateful'],
      responses: [
        "You're welcome! 😊 Is there anything else I can help you with?",
        'Happy to help! Feel free to ask if you have more questions.',
        'My pleasure! Let me know if you need anything else.',
      ],
    },
  };

  const findBestResponse = message => {
    const lowerMessage = message.toLowerCase();

    // Check for calendar scheduling keywords
    if (
      lowerMessage.includes('schedule') ||
      lowerMessage.includes('meeting') ||
      lowerMessage.includes('book') ||
      lowerMessage.includes('appointment') ||
      lowerMessage.includes('calendar')
    ) {
      setShowCalendar(true);
      return "I'd be happy to schedule a meeting with you. Please select a date and time that works for you.";
    }

    // Check for page redirection keywords
    if (lowerMessage.includes('service') || lowerMessage.includes('services')) {
      setTimeout(() => {
        navigate('/services');
      }, 1000);
      return "I'm redirecting you to our services page where you can explore all our offerings. Just a moment...";
    } else if (
      lowerMessage.includes('portfolio') ||
      lowerMessage.includes('project') ||
      lowerMessage.includes('work')
    ) {
      setTimeout(() => {
        navigate('/portfolio');
      }, 1000);
      return "I'm redirecting you to our portfolio page where you can see our completed projects and case studies. Just a moment...";
    } else if (
      lowerMessage.includes('product') ||
      lowerMessage.includes('products')
    ) {
      setTimeout(() => {
        navigate('/products');
      }, 1000);
      return "I'm redirecting you to our products page where you can explore our SaaS solutions. Just a moment...";
    } else if (
      lowerMessage.includes('about') ||
      lowerMessage.includes('company')
    ) {
      setTimeout(() => {
        navigate('/about');
      }, 1000);
      return "I'm redirecting you to our about page where you can learn more about Limitless Infotech Solution. Just a moment...";
    } else if (
      lowerMessage.includes('contact') ||
      lowerMessage.includes('reach') ||
      lowerMessage.includes('get in touch')
    ) {
      setTimeout(() => {
        navigate('/contact');
      }, 1000);
      return "I'm redirecting you to our contact page where you can get in touch with our team. Just a moment...";
    } else if (
      lowerMessage.includes('pricing') ||
      lowerMessage.includes('price') ||
      lowerMessage.includes('cost')
    ) {
      setTimeout(() => {
        navigate('/pricing');
      }, 1000);
      return "I'm redirecting you to our pricing page where you can find detailed information about our packages. Just a moment...";
    }

    // Check each category in knowledge base
    for (const [category, data] of Object.entries(knowledgeBase)) {
      if (data.keywords.some(keyword => lowerMessage.includes(keyword))) {
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
      type: 'user',
      text: inputMessage,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Send notification about the user's message
    try {
      await sendUserInteractionNotification('chat-message', {
        userId: 'anonymous', // In a real app, this would be the actual user ID
        message: inputMessage,
        timestamp: new Date().toISOString(),
        page: window.location.pathname,
        userAgent: navigator.userAgent,
      });
    } catch (error) {
      console.error('Error sending chat notification:', error);
    }

    // Simulate bot typing and response
    setTimeout(
      () => {
        const botResponse = findBestResponse(inputMessage);
        const botMessage = {
          type: 'bot',
          text: botResponse,
          timestamp: new Date(),
        };

        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
        setIsLoading(false);
      },
      1000 + Math.random() * 1000
    ); // Random delay between 1-2 seconds
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickActions = [
    { label: 'Our Services', message: 'What services do you offer?' },
    { label: 'Get a Quote', message: 'How can I get a price quote?' },
    { label: 'View Portfolio', message: 'Can I see your portfolio?' },
    { label: 'Contact Info', message: 'How can I contact you?' },
  ];

  const handleQuickAction = message => {
    setInputMessage(message);
    setTimeout(() => handleSendMessage(), 100);
  };

  const connectToAgent = () => {
    const agentMessage = {
      type: 'bot',
      text: "I'm connecting you with one of our specialists. In the meantime, you can also:\n\n• Call us: +917710909492\n• Email us: Info@limitlessinfotech.com\n• Fill out our contact form for a detailed response",
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, agentMessage]);
  };

  const handleScheduleMeeting = scheduleData => {
    const scheduleMessage = {
      type: 'bot',
      text: `Thank you for scheduling your meeting! I've created an appointment for ${scheduleData.date.toDateString()} at ${scheduleData.time}. You'll receive a calendar invite shortly.\n\nLooking forward to our discussion about your project needs!`,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, scheduleMessage]);
    setShowCalendar(false);
  };

  return (
    <div className="fixed bottom-8 right-32 z-50">
      {/* Chatbot Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 bg-[#1ba6d6] rounded-2xl shadow-[0_0_30px_rgba(27,166,214,0.4)] flex items-center justify-center text-white hover:scale-110 transition-all duration-300 group overflow-hidden"
            aria-label="Open Live Agent chat"
            title="Live Agent Support"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
            <Bot className="w-8 h-8 relative z-10 group-hover:animate-bounce" />
            <span className="absolute -top-1 -right-1 w-6 h-6 bg-[#ffc957] text-[#0e1114] text-[0.6rem] font-black rounded-full flex items-center justify-center border-2 border-[#0e1114]">
              LIVE
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 100, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 100, scale: 0.9, filter: 'blur(10px)' }}
            className="w-[400px] h-[600px] bg-[#0e1114]/95 backdrop-blur-3xl border border-white/10 rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#1ba6d6]/5 to-transparent pointer-events-none"></div>
            
            {/* Header */}
            <div className="p-6 border-b border-white/5 bg-white/5 backdrop-blur-xl flex items-center justify-between relative z-10">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-[#1ba6d6] flex items-center justify-center shadow-[0_0_20px_rgba(27,166,214,0.3)]">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xs font-black text-white uppercase tracking-[0.2em]">Auralis Agent</h3>
                  <p className="text-[0.6rem] text-[#1ba6d6] font-black uppercase tracking-widest mt-1 flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#ffc957] rounded-full mr-2 animate-pulse"></span>
                    Nexus Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 group"
                aria-label="Close chat"
              >
                <X className="w-5 h-5 text-white group-hover:rotate-90 transition-transform" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
              {messages.map((message, index) => (
                <motion.div 
                  initial={{ opacity: 0, x: message.type === 'bot' ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={index} 
                  className={`flex ${message.type === 'bot' ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`flex max-w-[80%] ${message.type === 'bot' ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 shadow-2xl ${
                      message.type === 'bot' ? 'bg-[#1ba6d6] text-white' : 'bg-white/10 text-white'
                    }`}>
                      {message.type === 'bot' ? <Bot size={16} /> : <User size={16} />}
                    </div>
                    <div className={`mx-3 p-4 rounded-2xl ${
                      message.type === 'bot' 
                        ? 'bg-white/5 border border-white/5 rounded-tl-none' 
                        : 'bg-[#1ba6d6]/20 border border-[#1ba6d6]/30 rounded-tr-none'
                    }`}>
                      <p className="text-white text-xs leading-relaxed tracking-wide whitespace-pre-line">
                        {message.text}
                      </p>
                      <span className="text-[0.55rem] text-white/40 mt-2 block uppercase tracking-widest font-black">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="flex flex-row">
                    <div className="w-8 h-8 rounded-xl bg-[#1ba6d6] flex items-center justify-center flex-shrink-0 shadow-2xl">
                      <Bot size={16} className="text-white" />
                    </div>
                    <div className="mx-3 p-4 bg-white/5 rounded-2xl rounded-tl-none flex space-x-1.5 items-center">
                      <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-[#1ba6d6] rounded-full" />
                      <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-[#1ba6d6] rounded-full" />
                      <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-[#1ba6d6] rounded-full" />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            {messages.length === 1 && (
              <div className="px-6 py-4 bg-white/5 border-t border-white/5 relative z-10">
                <div className="flex items-center mb-3">
                  <Zap className="w-4 h-4 text-[#ffc957] mr-2" />
                  <p className="text-[0.6rem] text-white/60 font-black uppercase tracking-widest">
                    Quick Protocols:
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {quickActions.map((action, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(27, 166, 214, 0.1)' }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleQuickAction(action.message)}
                      className="text-[0.6rem] px-4 py-2 border border-white/10 text-white font-black uppercase tracking-widest rounded-xl transition-all duration-300 flex items-center"
                      aria-label={`Quick action: ${action.label}`}
                    >
                      <Lightbulb className="w-3 h-3 mr-2 text-[#1ba6d6]" />
                      {action.label}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="p-6 bg-white/5 backdrop-blur-3xl border-t border-white/5 relative z-10">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={e => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="ENTER QUERY..."
                    className="w-full h-12 px-6 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-[#1ba6d6] text-[0.7rem] font-black uppercase tracking-[0.2em] text-white placeholder:text-white/20 transition-all"
                    aria-label="Type your message to the Live Agent"
                    disabled={isLoading}
                  />
                </div>
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isLoading}
                  className="w-12 h-12 bg-[#1ba6d6] text-white rounded-xl hover:scale-105 disabled:opacity-30 disabled:grayscale transition-all flex items-center justify-center shadow-[0_0_15px_rgba(27,166,214,0.3)]"
                  aria-label="Send message to Live Agent"
                >
                  {isLoading ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={connectToAgent}
                  className="py-3 px-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl transition-all flex items-center justify-center group"
                >
                  <User className="w-4 h-4 mr-2 text-[#1ba6d6] group-hover:scale-125 transition-transform" />
                  <span className="text-[0.55rem] font-black text-white/60 uppercase tracking-widest">Connect Specialist</span>
                </button>

                <button
                  onClick={() => setShowCalendar(true)}
                  className="py-3 px-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl transition-all flex items-center justify-center group"
                >
                  <Calendar className="w-4 h-4 mr-2 text-[#ffc957] group-hover:scale-125 transition-transform" />
                  <span className="text-[0.55rem] font-black text-white/60 uppercase tracking-widest">Book Nexus Meet</span>
                </button>
              </div>
              
              <div className="text-[0.5rem] text-white/20 font-black uppercase tracking-[0.3em] text-center mt-6 flex items-center justify-center">
                <ShieldCheck className="w-3 h-3 mr-2" />
                End-to-End Neural Encryption Active
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Calendar Integration Modal */}
      {showCalendar && (
        <CalendarIntegration
          onSchedule={handleScheduleMeeting}
          onClose={() => setShowCalendar(false)}
          userName="Auralis User"
        />
      )}
    </div>
  );
};

export default Chatbot;
