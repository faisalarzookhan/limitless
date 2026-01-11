import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageCircle,
  Phone,
  Send,
  X,
  Check,
  Clock,
  User,
  Sparkles,
  HelpCircle,
  Info,
  CheckCheck
} from 'lucide-react';
import { sendUserInteractionNotification } from '../services/notification/notificationService';

const WhatsAppBusinessIntegration = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Hi there! 👋 Thanks for visiting Limitless Infotech. How can we help you today?',
      sender: 'Auralis',
      timestamp: new Date(Date.now() - 300000), // 5 minutes ago
      status: 'read',
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const predefinedMessages = [
    'Tell me about your services',
    "What's your pricing?",
    'I need help with a project',
    'Schedule a call',
  ];

  const handleSendMessage = async (messageText = inputMessage) => {
    if (!messageText.trim()) return;

    // User Message Execution
    const userMessage = {
      id: messages.length + 1,
      text: messageText,
      sender: 'user', // Corrected from 'Auralis'
      timestamp: new Date(),
      status: 'sent',
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Persistence & Notification Log
    try {
      const { default: PersistenceService } = await import('../services/enterprise/PersistenceService');
      await PersistenceService.store('chat_interactions', { text: messageText, type: 'whatsapp' });
      
      await sendUserInteractionNotification({
        message: messageText,
        sender: 'user',
        timestamp: new Date().toISOString(),
        page: window.location.pathname,
      });
    } catch (error) {
      console.error('Audit Log Error:', error);
    }

    // Neural Processing Initiation
    setIsTyping(true);
    
    try {
      const { default: NeuralRepo } = await import('../services/enterprise/NeuralRepositoryService');
      
      // Simulate network latency buffer
      await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));
      
      const response = await NeuralRepo.query(messageText);
      
      const botMessage = {
        id: messages.length + 2,
        text: response.text,
        sender: 'Auralis',
        timestamp: new Date(),
        status: 'delivered',
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Neural Logic Error:', error);
    } finally {
      setIsTyping(false);
    }
  };

  const handlePredefinedMessage = message => {
    handleSendMessage(message);
  };

  const formatTime = date => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 bg-[#25d366] rounded-2xl shadow-[0_0_30px_rgba(37,211,102,0.4)] flex items-center justify-center text-white hover:scale-110 transition-all duration-300 group relative overflow-hidden"
            aria-label="Open WhatsApp chat"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
            <MessageCircle className="w-8 h-8 relative z-10 group-hover:rotate-12 transition-transform" />
            <span className="absolute -top-1 -right-1 w-6 h-6 bg-[#ffc957] text-[#0e1114] text-[0.6rem] font-black rounded-full flex items-center justify-center border-2 border-[#0e1114]">
              24/7
            </span>
          </motion.button>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 100, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 100, scale: 0.9, filter: 'blur(10px)' }}
            className="w-[380px] h-[550px] bg-[#0e1114]/95 backdrop-blur-3xl border border-white/10 rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#25d366]/5 to-transparent pointer-events-none"></div>
            
            {/* Header */}
            <div className="p-6 border-b border-white/5 bg-white/5 backdrop-blur-xl flex items-center justify-between relative z-10">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-[#25d366] flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.3)]">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xs font-black text-white uppercase tracking-[0.2em]">WhatsApp Protocol</h3>
                  <p className="text-[0.6rem] text-[#25d366] font-black uppercase tracking-widest mt-1 flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#25d366] rounded-full mr-2 animate-pulse"></span>
                    Encrypted Network
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 group"
              >
                <X className="w-5 h-5 text-white group-hover:rotate-90 transition-transform" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
              {messages.map(message => (
                <motion.div 
                  initial={{ opacity: 0, x: message.sender === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={message.id} 
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-4 rounded-2xl ${
                    message.sender === 'user' 
                      ? 'bg-[#25d366]/20 border border-[#25d366]/30 rounded-tr-none' 
                      : 'bg-white/5 border border-white/5 rounded-tl-none'
                  }`}>
                    <p className="text-white text-xs leading-relaxed tracking-wide">{message.text}</p>
                    <div className="flex items-center justify-end mt-2 space-x-2">
                      <span className="text-[0.5rem] text-white/40 font-black uppercase tracking-widest">
                        {formatTime(message.timestamp)}
                      </span>
                      {message.sender === 'user' && (
                        <CheckCheck className={`w-3 h-3 ${message.status === 'read' ? 'text-[#25d366]' : 'text-white/20'}`} />
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                  <div className="p-4 bg-white/5 rounded-2xl rounded-tl-none flex space-x-1.5 items-center">
                    <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-[#25d366] rounded-full" />
                    <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-[#25d366] rounded-full" />
                    <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-[#25d366] rounded-full" />
                  </div>
                </motion.div>
              )}
            </div>

            {/* Predefined Messages */}
            {messages.length <= 2 && (
              <div className="px-6 py-4 bg-white/5 border-t border-white/5 relative z-10">
                <div className="flex flex-wrap gap-2">
                  {predefinedMessages.map((msg, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(37, 211, 102, 0.1)' }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handlePredefinedMessage(msg)}
                      className="text-[0.6rem] px-4 py-2 border border-white/10 text-white font-black uppercase tracking-widest rounded-xl transition-all"
                    >
                      {msg}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-6 bg-white/5 backdrop-blur-3xl border-t border-white/5 relative z-10">
              <div className="flex items-center space-x-3">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={e => setInputMessage(e.target.value)}
                    onKeyPress={e => e.key === 'Enter' && handleSendMessage()}
                    placeholder="ENTER QUERY..."
                    className="w-full h-12 px-6 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-[#25d366] text-[0.7rem] font-black uppercase tracking-[0.2em] text-white placeholder:text-white/20 transition-all"
                    disabled={isTyping}
                  />
                </div>
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputMessage.trim()}
                  className="w-12 h-12 bg-[#25d366] text-white rounded-xl hover:scale-105 disabled:opacity-30 disabled:grayscale transition-all flex items-center justify-center shadow-[0_0_15px_rgba(37,211,102,0.3)]"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              
              <div className="text-[0.5rem] text-white/20 font-black uppercase tracking-[0.3em] text-center mt-6 flex items-center justify-center">
                <Sparkles className="w-3 h-3 mr-2 text-[#ffc957]" />
                Neural Nexus Uplink Active
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WhatsAppBusinessIntegration;
