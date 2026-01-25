import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import api from '../../services/api';
import { useApp } from '../../context/AppContext';

const ChatWidget = () => {
    const { isChatOpen, toggleChat } = useApp();
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([
        { id: 1, type: 'bot', text: 'Auralis Node Online. How can we help you innovate today?' }
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isChatOpen]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!message.trim()) return;

        const userText = message;
        // Add user message immediately for UI responsiveness
        const userMsg = { id: Date.now(), type: 'user', text: userText };
        setMessages(prev => [...prev, userMsg]);
        setMessage('');
        setIsTyping(true);

        try {
            // Send to backend
            const response = await api.chat.sendMessage({ message: userText });
            
            // If backend returns a response, use it. Otherwise fall back to simulation for now.
            if (response && response.reply) {
                const botMsg = { id: Date.now() + 1, type: 'bot', text: response.reply };
                setMessages(prev => [...prev, botMsg]);
            } else {
                 // Simulate bot response if no backend
                 simulateBotResponse(userText);
            }
        } catch (error) {
            console.error("Chat error:", error);
            // Fallback to simulation on error (so the demo still works)
            simulateBotResponse(userText);
        } finally {
            setIsTyping(false);
        }
    };

    const simulateBotResponse = (userMessage) => {
        setTimeout(() => {
            const lowerMsg = userMessage.toLowerCase();
            let responseText = "";

            if (lowerMsg.includes('price') || lowerMsg.includes('cost') || lowerMsg.includes('budget') || lowerMsg.includes('quote')) {
                responseText = "Would you like to schedule a consultation with our architects?";
            } else if (lowerMsg.includes('yes') || lowerMsg.includes('sure') || lowerMsg.includes('okay')) {
                responseText = "We can definitely help with that. Limitless Infotech specializes in scalable digital solutions.";
            } else if (lowerMsg.includes('hi') || lowerMsg.includes('hello') || lowerMsg.includes('hey')) {
                responseText = "That's a great question! Our specialized team would love to discuss this further.";
            } else {
                 const responses = [
                    "That's a great question! Our specialized team would love to discuss this further.",
                    "We can definitely help with that. Limitless Infotech specializes in scalable digital solutions.",
                    "Would you like to schedule a consultation with our architects?",
                    "I'll connect you with a project manager immediately."
                ];
                responseText = responses[Math.floor(Math.random() * responses.length)];
            }
            
            const botMsg = { id: Date.now() + 1, type: 'bot', text: responseText };
            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4 pointer-events-auto">
            <AnimatePresence>
                {isChatOpen ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="w-[350px] md:w-[400px] h-[500px] bg-[#0e1114] border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-white/5 bg-white/5 backdrop-blur-md flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#1ba6d6] flex items-center justify-center relative">
                                    <Sparkles className="w-5 h-5 text-white" />
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0e1114]"></div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-sm">Auralis Assistant</h3>
                                    <p className="text-[10px] text-[#1ba6d6] font-medium uppercase tracking-wider flex items-center">
                                        <span className="w-1.5 h-1.5 bg-[#1ba6d6] rounded-full mr-1.5 animate-pulse"></span>
                                        Neural Node Online
                                    </p>
                                </div>
                            </div>
                            <button 
                                onClick={() => toggleChat(false)}
                                className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-[80%] p-3.5 rounded-2xl text-sm leading-relaxed ${
                                        msg.type === 'user' 
                                        ? 'bg-[#1ba6d6] text-white rounded-tr-none' 
                                        : 'bg-white/10 text-gray-200 rounded-tl-none'
                                    }`}>
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white/10 p-4 rounded-2xl rounded-tl-none flex gap-1 items-center">
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSend} className="p-4 border-t border-white/5 bg-white/5 backdrop-blur-md">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Type your message..."
                                    className="w-full pl-5 pr-12 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 text-sm focus:outline-none focus:border-[#1ba6d6]/50 transition-colors"
                                />
                                <button 
                                    type="submit"
                                    disabled={!message.trim()}
                                    className="absolute right-2 top-2 p-1.5 bg-[#1ba6d6] text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#1595c0] transition-colors"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                ) : null}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleChat()}
                className="w-14 h-14 rounded-full bg-[#1ba6d6] shadow-[0_0_20px_rgba(27,166,214,0.4)] flex items-center justify-center text-white hover:bg-[#1595c0] transition-colors"
            >
                {isChatOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
            </motion.button>
        </div>
    );
};

export default ChatWidget;
