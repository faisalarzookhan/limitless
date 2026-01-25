import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCcw, Home, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Core Logic Failure caught by ErrorBoundary:', error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#0e1114] p-6 relative overflow-hidden">
          {/* High-Fidelity Background Elements */}
          <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary-500/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary-500/5 blur-[120px] rounded-full" />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl w-full glass-panel mask-facet border-white/5 bg-dark-900/40 p-12 md:p-20 text-center relative z-10 shadow-[0_0_100px_rgba(0,0,0,0.5)]"
          >
            <div className="w-24 h-24 rounded-3xl bg-secondary-500/10 border border-secondary-500/20 flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_rgba(244,180,26,0.1)]">
              <ShieldAlert className="w-12 h-12 text-secondary-400" />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-md">
              <AlertTriangle className="w-4 h-4 text-secondary-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500">Structural Exception</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter leading-none mb-6">
              Core Node <br /> <span className="text-secondary-400 not-italic">Desynced.</span>
            </h2>
            
            <p className="text-lg text-gray-500 font-medium italic mb-12 leading-relaxed">
              We've encountered a mission-critical failure in the architectural stack. Our automated recovery protocols have been initiated.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <button
                onClick={() => window.location.reload()}
                className="px-10 py-5 bg-white text-dark-900 font-black text-[0.7rem] uppercase tracking-[0.4em] rounded-2xl hover:bg-secondary-500 hover:text-white transition-all shadow-2xl flex items-center gap-3 group"
              >
                Re-Sync Protocol_
                <RefreshCcw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-700" />
              </button>
              
              <a
                href="/"
                className="px-10 py-5 bg-white/5 text-white font-black text-[0.7rem] uppercase tracking-[0.4em] rounded-2xl border border-white/10 hover:bg-white/10 transition-all flex items-center gap-3"
              >
                Home Base <Home className="w-4 h-4" />
              </a>
            </div>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mt-12 p-6 bg-black/40 rounded-2xl border border-white/5 text-left overflow-auto max-h-40">
                <p className="text-[10px] font-mono text-secondary-400 mb-2 uppercase tracking-widest">Trace Registry:</p>
                <code className="text-[10px] text-gray-600 font-mono leading-relaxed">
                  {this.state.error.toString()}
                </code>
              </div>
            )}
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;