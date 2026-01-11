import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, ArrowUp, X, Send, Bot, UserCheck, Smartphone } from 'lucide-react';

const FloatingButtons = () => {
  const [isLiveAgentMode, setIsLiveAgentMode] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerLiveAgentMode = () => {
    setIsLiveAgentMode(true);
    setIsChatbotOpen(false);
  };

  const exitLiveAgentMode = () => {
    setIsLiveAgentMode(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-4 pointer-events-none">
      <AnimatePresence>
        {/* Scroll to Top */}
        {showScrollTop && !isChatbotOpen && !isWhatsAppOpen && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            onClick={scrollToTop}
            className="w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-[#1ba6d6] hover:border-[#1ba6d6] transition-all duration-300 pointer-events-auto group shadow-2xl"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}

        {/* Support Hub Button */}
        {!isChatbotOpen && !isWhatsAppOpen && (
          <motion.button
            layoutId="support-hub"
            onClick={() => setIsChatbotOpen(true)}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-2xl pointer-events-auto transition-all duration-500 overflow-hidden relative group ${
                isLiveAgentMode ? 'bg-[#1ba6d6]' : 'bg-gradient-to-br from-[#1ba6d6] to-[#0a84b1]'
            }`}
          >
            {isLiveAgentMode ? <UserCheck size={28} /> : <MessageSquare size={28} className="group-hover:scale-110 transition-transform" />}
            
            {/* Pulsing Glitch Effect */}
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse pointer-events-none" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Auralis AI Chatbot */}
      <AnimatePresence>
        {isChatbotOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="w-[350px] sm:w-[400px] h-[600px] bg-[#0e1114]/95 backdrop-blur-2xl rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5 flex flex-col overflow-hidden pointer-events-auto"
          >
            {/* Header */}
            <div className="p-6 bg-[#1ba6d6]/10 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-12 h-12 bg-[#1ba6d6] rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(27,166,214,0.3)]">
                    <Bot color="white" size={24} />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-4 border-[#0e1114] rounded-full" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-white uppercase tracking-widest">Auralis AI</h3>
                  <p className="text-[0.6rem] text-[#1ba6d6] font-bold uppercase tracking-widest">Neural Agent Active</p>
                </div>
              </div>
              <button 
                onClick={() => setIsChatbotOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-white/50 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
              <div className="flex justify-start">
                <div className="max-w-[85%] bg-white/5 border border-white/10 rounded-2xl rounded-tl-none p-4">
                  <p className="text-xs text-[#94a3b8] leading-relaxed">
                    Identity confirmed. I am Auralis. Protocol initiated. How may I assist your architectural inquiry today?
                  </p>
                  <span className="text-[0.5rem] text-[#94a3b8]/50 uppercase tracking-widest mt-2 block">System Time: {new Date().toLocaleTimeString()}</span>
                </div>
              </div>

              {isLiveAgentMode && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] bg-[#1ba6d6]/10 border border-[#1ba6d6]/20 rounded-2xl rounded-tl-none p-4">
                    <p className="text-xs text-white leading-relaxed font-medium">
                      Live connection established. Our architects are monitoring this frequency.
                    </p>
                    <button 
                        onClick={() => setIsWhatsAppOpen(true)}
                        className="mt-3 flex items-center gap-2 text-[0.6rem] font-black text-[#1ba6d6] uppercase tracking-widest bg-white/5 px-3 py-2 rounded-lg hover:bg-[#1ba6d6]/10 transition-colors"
                    >
                        <Smartphone size={12} /> Establish Secure Channel
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Controls */}
            <div className="p-6 pt-0">
               {!isLiveAgentMode && (
                 <button
                    onClick={triggerLiveAgentMode}
                    className="w-full mb-4 py-3 bg-white/5 hover:bg-white/10 border border-white/5 text-[0.6rem] font-black text-[#1ba6d6] uppercase tracking-[0.2em] rounded-xl transition-all flex items-center justify-center gap-2"
                 >
                    <UserCheck size={14} /> Request Live Intervention
                 </button>
               )}
               
               <div className="relative group">
                 <input
                    type="text"
                    placeholder="Input command..."
                    className="w-full bg-white/5 border border-white/10 focus:border-[#1ba6d6] rounded-2xl pl-6 pr-14 py-4 text-xs text-white placeholder:text-white/20 outline-none transition-all backdrop-blur-md"
                 />
                 <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#1ba6d6] rounded-xl flex items-center justify-center text-white hover:bg-[#1592bd] transition-all">
                    <Send size={16} />
                 </button>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Modal Overlay */}
      <AnimatePresence>
        {isWhatsAppOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0e1114]/80 backdrop-blur-md z-[70] flex items-center justify-center p-6 pointer-events-auto"
          >
            <motion.div 
               initial={{ scale: 0.9, y: 20 }}
               animate={{ scale: 1, y: 0 }}
               className="w-full max-w-md bg-[#0e1114] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
              <div className="p-8 bg-gradient-to-br from-[#1ba6d6] to-[#0a84b1] relative">
                <button 
                  onClick={() => setIsWhatsAppOpen(false)}
                  className="absolute top-6 right-6 text-white/50 hover:text-white"
                >
                  <X size={24} />
                </button>
                <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-3xl flex items-center justify-center mb-6">
                  <Smartphone size={40} color="white" />
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">Secure Link</h3>
                <p className="text-white/70 text-sm">Establishing a direct communication protocol via mobile neural link.</p>
              </div>
              <div className="p-8 space-y-6">
                 <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <div>
                      <p className="text-[0.6rem] font-black text-[#1ba6d6] uppercase tracking-widest">Architect Online</p>
                      <p className="text-xs text-white">Ready for transmission</p>
                    </div>
                 </div>
                 <a 
                    href="https://wa.me/919910540411" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full py-5 bg-[#1ba6d6] hover:bg-[#1592bd] text-white font-black text-xs uppercase tracking-[0.4em] mask-btn transition-colors flex items-center justify-center gap-3"
                 >
                    Launch WhatsApp
                 </a>
                 <p className="text-center text-[0.5rem] text-[#94a3b8] uppercase tracking-[0.2em] opacity-40">Privacy protocol: active</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingButtons;
