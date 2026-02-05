import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import ResponsiveToolkit, { ResponsiveToolkitDemo } from '../components/ui/ResponsiveToolkit';
import ErrorBoundary from '../components/ErrorBoundary';
import { Settings, Maximize, Smartphone, Monitor, Tablet, Box } from 'lucide-react';

const ResponsiveToolkitDemoPage = () => {
  const [customRatio, setCustomRatio] = useState('16:9');
  const [containerSize, setContainerSize] = useState({ width: 800, height: 450 });

  return (
    <ErrorBoundary>
      <Helmet>
        <title>Responsive Toolkit Demo | Auralis AI</title>
        <meta name="description" content="Interactive demo of the responsive toolkit component that automatically adjusts to match parent container dimensions" />
      </Helmet>
      
      <div className="min-h-screen bg-dark-900 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
            
            {/* Header */}
            <div className="text-center space-y-6">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-black uppercase tracking-widest"
                >
                    <Box className="w-4 h-4" />
                    <span>UI Engineering</span>
                </motion.div>
                <h1 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter">
                    Responsive <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Toolkit</span>
                </h1>
                <p className="max-w-2xl mx-auto text-gray-400 text-lg">
                    A mathematically precise scaling engine that maintains aspect ratio integrity across any viewport architecture.
                </p>
            </div>

            {/* Interactive Playground */}
            <div className="grid lg:grid-cols-3 gap-8">
                {/* Controls */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
                        <div className="flex items-center gap-3 mb-6">
                            <Settings className="w-5 h-5 text-gray-400" />
                            <h3 className="text-sm font-black text-white uppercase tracking-widest">Configuration</h3>
                        </div>

                        <div className="space-y-6">
                            <div className="space-y-3">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Aspect Ratio Preset</label>
                                <div className="grid grid-cols-2 gap-3">
                                    {['16:9', '4:3', '1:1', '21:9', '9:16', 'auto'].map(ratio => (
                                        <button
                                            key={ratio}
                                            onClick={() => setCustomRatio(ratio)}
                                            className={`px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                                                customRatio === ratio 
                                                ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20' 
                                                : 'bg-white/5 text-gray-400 hover:bg-white/10'
                                            }`}
                                        >
                                            {ratio}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-4 pt-6 border-t border-white/5">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Container Simulation</label>
                                
                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs text-gray-400 font-mono">
                                        <span>Width</span>
                                        <span>{containerSize.width}px</span>
                                    </div>
                                    <input 
                                        type="range" 
                                        min="300" 
                                        max="1000" 
                                        value={containerSize.width}
                                        onChange={(e) => setContainerSize(prev => ({ ...prev, width: Number(e.target.value) }))}
                                        className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary-500"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs text-gray-400 font-mono">
                                        <span>Height</span>
                                        <span>{containerSize.height}px</span>
                                    </div>
                                    <input 
                                        type="range" 
                                        min="300" 
                                        max="800" 
                                        value={containerSize.height}
                                        onChange={(e) => setContainerSize(prev => ({ ...prev, height: Number(e.target.value) }))}
                                        className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                            <Monitor className="w-6 h-6 text-primary-400 mx-auto mb-2" />
                            <span className="text-[10px] font-bold text-gray-500 uppercase">Desktop</span>
                        </div>
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                            <Tablet className="w-6 h-6 text-secondary-400 mx-auto mb-2" />
                            <span className="text-[10px] font-bold text-gray-500 uppercase">Tablet</span>
                        </div>
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                            <Smartphone className="w-6 h-6 text-green-400 mx-auto mb-2" />
                            <span className="text-[10px] font-bold text-gray-500 uppercase">Mobile</span>
                        </div>
                    </div>
                </div>

                {/* Preview Area */}
                <div className="lg:col-span-2 bg-[#000] border border-white/10 rounded-3xl p-8 relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />
                    
                    <motion.div 
                        layout
                        style={{ width: containerSize.width, height: containerSize.height }}
                        className="relative border-2 border-dashed border-white/20 rounded-xl overflow-hidden bg-dark-800 transition-all duration-300"
                    >
                        <div className="absolute top-2 left-2 px-2 py-1 bg-black/50 rounded text-[10px] font-mono text-gray-400 z-10 pointer-events-none">
                            Container: {containerSize.width}x{containerSize.height}
                        </div>

                        <ResponsiveToolkit aspectRatio={customRatio}>
                            <div className="w-full h-full bg-gradient-to-br from-primary-600 to-secondary-600 flex flex-col items-center justify-center text-white p-8">
                                <Maximize className="w-12 h-12 mb-4 opacity-80" />
                                <h2 className="text-3xl font-black uppercase tracking-tighter mb-2">Scaled Content</h2>
                                <p className="text-white/70 font-mono text-sm">Ratio: {customRatio}</p>
                                <div className="mt-6 px-6 py-3 bg-black/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest border border-white/10">
                                    Always Centered
                                </div>
                            </div>
                        </ResponsiveToolkit>
                    </motion.div>
                </div>
            </div>

            {/* Existing Demo Components */}
            <div className="pt-20 border-t border-white/5">
                <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-10">Standard Utility Presets</h2>
                <ResponsiveToolkitDemo />
            </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default ResponsiveToolkitDemoPage;