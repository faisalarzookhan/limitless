import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Sparkles, X, Check } from 'lucide-react';
import { useApp } from '../context/AppContext';

const ThemeWelcome = () => {
  const { theme, changeTheme } = useApp();
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if welcome message has been shown before
    const welcomeShown = localStorage.getItem('themeWelcomeShown');

    if (!welcomeShown) {
      // Show popup after 1 second delay
      const timer = setTimeout(() => {
        setIsVisible(true);
        setHasShown(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('themeWelcomeShown', 'true');
  };

  const handleThemeSelect = selectedTheme => {
    changeTheme(selectedTheme);
    handleClose();
  };

  const getThemeIcon = themeName => {
    if (themeName === 'dark') return <Moon className="w-6 h-6" />;
    if (themeName === 'light') return <Sun className="w-6 h-6" />;
    return <Sparkles className="w-6 h-6" />;
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0e1114]/80 backdrop-blur-md z-[100]"
            onClick={handleClose}
          />

          {/* Popup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.9, y: 20, filter: 'blur(10px)' }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-full max-w-md px-4"
          >
            <div className="bg-[#0e1114] rounded-[2.5rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1ba6d6]/5 to-transparent pointer-events-none"></div>
              
              {/* Header */}
              <div className="p-8 pb-4 relative z-10">
                <button
                  onClick={handleClose}
                  className="absolute top-8 right-8 w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 group"
                  aria-label="Close"
                >
                  <X className="w-5 h-5 text-white group-hover:rotate-90 transition-transform" />
                </button>

                <div className="flex items-center space-x-5 mb-8">
                  <div className="w-14 h-14 bg-[#1ba6d6] rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(27,166,214,0.3)]">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-black text-white uppercase tracking-tighter">Initial Access</h2>
                    <p className="text-[0.6rem] text-[#1ba6d6] font-black uppercase tracking-[0.2em] mt-1">
                      Nexus Configuration Panel
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 pt-0 relative z-10">
                <h3 className="text-[0.7rem] font-black text-white/40 uppercase tracking-[0.3em] mb-6">
                  Select Visual Protocol
                </h3>

                {/* Theme Options */}
                <div className="space-y-4">
                  {[
                    { id: 'light', label: 'Light Protocol', desc: 'Standard visibility mode', icon: Sun, color: 'text-[#ffc957]' },
                    { id: 'dark', label: 'Dark Protocol', desc: 'Neural archive mode', icon: Moon, color: 'text-[#1ba6d6]' },
                    { id: 'system', label: 'Nexus Mirror', desc: 'Auto-sync with OS', icon: Sparkles, color: 'text-white' }
                  ].map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleThemeSelect(option.id)}
                      className={`w-full flex items-center space-x-5 p-5 rounded-2xl border transition-all duration-500 group ${
                        theme === option.id
                          ? 'border-[#1ba6d6] bg-[#1ba6d6]/5'
                          : 'border-white/5 bg-white/5 hover:border-white/20'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        theme === option.id ? 'bg-[#1ba6d6] text-white shadow-[0_0_15px_rgba(27,166,214,0.3)]' : 'bg-white/5 text-white/40 group-hover:text-white'
                      }`}>
                        <option.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1 text-left">
                        <p className={`text-[0.65rem] font-black uppercase tracking-widest ${theme === option.id ? 'text-white' : 'text-white/60'}`}>
                          {option.label}
                        </p>
                        <p className="text-[0.55rem] text-white/30 font-black uppercase tracking-widest mt-1">
                          {option.desc}
                        </p>
                      </div>
                      {theme === option.id && (
                        <div className="w-6 h-6 bg-[#1ba6d6] rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(27,166,214,0.3)]">
                          <Check className="w-3.5 h-3.5 text-white" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-10 pt-8 border-t border-white/5">
                  <button
                    onClick={handleClose}
                    className="w-full py-5 bg-[#1ba6d6] text-white text-[0.7rem] font-black uppercase tracking-[0.4em] mask-btn hover:scale-[1.02] transition-all duration-500 shadow-[0_0_30px_rgba(27,166,214,0.3)]"
                  >
                    Enter Nexus
                  </button>
                  <p className="text-[0.5rem] text-center text-white/20 font-black uppercase tracking-[0.2em] mt-6">
                    Configuration persists across all deployments
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ThemeWelcome;
