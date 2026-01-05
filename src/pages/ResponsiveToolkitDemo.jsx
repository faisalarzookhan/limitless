import React, { useState } from 'react';
import { ResponsiveToolkit, ResponsiveToolkitAdvanced } from '../components/ui/ResponsiveToolkit';
import { motion } from 'framer-motion';
import { HiArrowsExpand, HiChartBar, HiDocumentText, HiLightningBolt, HiSparkles, HiUserGroup } from 'react-icons/hi';

const ResponsiveToolkitDemo = () => {
  const [aspectRatio, setAspectRatio] = useState('16/9');
  const [demoMode, setDemoMode] = useState('basic');
  const [resizeInfo, setResizeInfo] = useState(null);

  const handleResize = (dimensions) => {
    setResizeInfo({
      width: Math.round(dimensions.width),
      height: Math.round(dimensions.height),
      aspectRatio: dimensions.aspectRatio.toFixed(2)
    });
  };

  const aspectRatios = [
    { value: '1/1', label: 'Square (1:1)' },
    { value: '16/9', label: 'Widescreen (16:9)' },
    { value: '4/3', label: 'Standard (4:3)' },
    { value: '21/9', label: 'Ultrawide (21:9)' },
    { value: '9/16', label: 'Portrait (9:16)' },
    { value: '3/2', label: 'Photo (3:2)' }
  ];

  const toolkitFeatures = [
    {
      icon: HiArrowsExpand,
      title: 'Responsive Scaling',
      description: 'Automatically adjusts to match parent container dimensions while maintaining aspect ratio'
    },
    {
      icon: HiChartBar,
      title: 'Proportional Layout',
      description: 'Ensures all elements scale proportionally without distortion or overflow'
    },
    {
      icon: HiDocumentText,
      title: 'Aspect Ratio Control',
      description: 'Customizable aspect ratios to match your design requirements'
    },
    {
      icon: HiLightningBolt,
      title: 'Performance Optimized',
      description: 'Efficient resize detection with optimized rendering'
    },
    {
      icon: HiSparkles,
      title: 'Smooth Animations',
      description: 'Beautiful transitions when resizing or changing layouts'
    },
    {
      icon: HiUserGroup,
      title: 'Touch Friendly',
      description: 'Works seamlessly across all devices and screen sizes'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#2563eb] via-[#1d4ed8] to-[#ffc957] text-[#0a0b0d]">
        <div className="container-custom px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              className="inline-flex items-center space-x-2 bg-[#0a0b0d]/20 px-6 py-3 rounded-full mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <HiSparkles className="w-5 h-5" />
              <span className="text-sm font-semibold font-['Outfit']">Responsive Toolkit</span>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-['Outfit'] font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Adaptive Screen Ratio
              <br />
              Component
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-[#0a0b0d]/90 mb-8 font-['Figtree']"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Automatically adjusts to match parent container dimensions while maintaining proper aspect ratio
            </motion.p>
          </div>
        </div>
      </section>

      {/* Demo Controls */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-50 dark:bg-dark-800 rounded-2xl p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-['Outfit'] font-bold mb-4">Demo Controls</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Aspect Ratio</label>
                      <select
                        value={aspectRatio}
                        onChange={(e) => setAspectRatio(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                      >
                        {aspectRatios.map((ratio) => (
                          <option key={ratio.value} value={ratio.value}>
                            {ratio.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Demo Mode</label>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => setDemoMode('basic')}
                          className={`px-4 py-2 rounded-lg transition-colors ${
                            demoMode === 'basic'
                              ? 'bg-[#2563eb] text-white'
                              : 'bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-600'
                          }`}
                        >
                          Basic
                        </button>
                        <button
                          onClick={() => setDemoMode('advanced')}
                          className={`px-4 py-2 rounded-lg transition-colors ${
                            demoMode === 'advanced'
                              ? 'bg-[#2563eb] text-white'
                              : 'bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-600'
                          }`}
                        >
                          Advanced Grid
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-['Outfit'] font-bold mb-4">Current Dimensions</h3>
                  <div className="bg-white dark:bg-dark-700 rounded-lg p-4 border border-gray-200 dark:border-dark-600">
                    {resizeInfo ? (
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">Width:</span>
                          <span className="font-medium">{resizeInfo.width}px</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">Height:</span>
                          <span className="font-medium">{resizeInfo.height}px</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">Aspect Ratio:</span>
                          <span className="font-medium">{resizeInfo.aspectRatio}</span>
                        </div>
                      </div>
                    ) : (
                      <p className="text-gray-500 dark:text-gray-400">Resize the container to see dimensions</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Responsive Toolkit Demo */}
            <div className="bg-gray-100 dark:bg-dark-800 rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-['Outfit'] font-bold mb-6 text-center">Responsive Toolkit Demo</h3>
              
              <div className="border-2 border-dashed border-gray-300 dark:border-dark-600 rounded-xl p-4 min-h-[400px]">
                {demoMode === 'basic' ? (
                  <ResponsiveToolkit
                    aspectRatio={aspectRatio}
                    onResize={handleResize}
                    showResizeHandles={true}
                    containerClassName="w-full h-full"
                  >
                    <div className="w-full h-full bg-gradient-to-br from-[#2563eb] to-[#ffc957] rounded-lg flex items-center justify-center">
                      <div className="text-center text-white">
                        <HiArrowsExpand className="w-16 h-16 mx-auto mb-4" />
                        <h4 className="text-2xl font-bold mb-2">Responsive Toolkit</h4>
                        <p className="text-lg">Automatically adjusts to parent container</p>
                      </div>
                    </div>
                  </ResponsiveToolkit>
                ) : (
                  <ResponsiveToolkitAdvanced
                    aspectRatio={aspectRatio}
                    onResize={handleResize}
                    showResizeHandles={true}
                    enableResponsiveGrid={true}
                    gridColumns={3}
                    gridRows={2}
                    containerClassName="w-full h-full"
                  >
                    <div className="text-center">
                      <HiChartBar className="w-8 h-8 mx-auto mb-2 text-gray-600" />
                      <p className="font-medium">Grid Item 1</p>
                    </div>
                    <div className="text-center">
                      <HiDocumentText className="w-8 h-8 mx-auto mb-2 text-gray-600" />
                      <p className="font-medium">Grid Item 2</p>
                    </div>
                    <div className="text-center">
                      <HiLightningBolt className="w-8 h-8 mx-auto mb-2 text-gray-600" />
                      <p className="font-medium">Grid Item 3</p>
                    </div>
                    <div className="text-center">
                      <HiSparkles className="w-8 h-8 mx-auto mb-2 text-gray-600" />
                      <p className="font-medium">Grid Item 4</p>
                    </div>
                    <div className="text-center">
                      <HiUserGroup className="w-8 h-8 mx-auto mb-2 text-gray-600" />
                      <p className="font-medium">Grid Item 5</p>
                    </div>
                    <div className="text-center">
                      <HiArrowsExpand className="w-8 h-8 mx-auto mb-2 text-gray-600" />
                      <p className="font-medium">Grid Item 6</p>
                    </div>
                  </ResponsiveToolkitAdvanced>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-['Outfit'] font-bold mb-4">
                Powerful <span className="text-[#2563eb]">Features</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-['Figtree']">
                The responsive toolkit provides advanced capabilities for adaptive layouts
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {toolkitFeatures.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 dark:from-dark-800 dark:to-dark-700 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-dark-600"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2563eb] to-[#ffc957] rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-['Outfit'] font-bold mb-3 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 font-['Figtree']">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Guide */}
      <section className="section-padding bg-gradient-to-br from-[#0a0b0d] to-[#1a1c25] text-white">
        <div className="container-custom px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-['Outfit'] font-bold mb-4">
                Easy <span className="text-[#ffc957]">Implementation</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto font-['Figtree']">
                Get started with the responsive toolkit in just a few lines of code
              </p>
            </motion.div>

            <div className="bg-gray-900 rounded-2xl p-6 font-mono text-sm overflow-x-auto">
              <pre className="text-gray-300">
{`import { ResponsiveToolkit } from './components/ui/ResponsiveToolkit';

const MyComponent = () => {
  return (
    <div className="w-full h-96">
      <ResponsiveToolkit 
        aspectRatio="16/9"
        onResize={(dimensions) => console.log(dimensions)}
      >
        <div className="w-full h-full bg-blue-500 flex items-center justify-center">
          <p>Responsive Content</p>
        </div>
      </ResponsiveToolkit>
    </div>
  );
};`}
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResponsiveToolkitDemo;