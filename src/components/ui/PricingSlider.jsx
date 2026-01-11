// src/components/ui/PricingSlider.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';

/**
 * Side Sliding Pricing Component
 * Interactive pricing display with plan comparison and sliding panel
 */
const PricingSlider = ({ plans = [], onSelectPlan }) => {
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [isSliderOpen, setIsSliderOpen] = useState(false);

    const handlePlanClick = (plan) => {
        setSelectedPlan(plan);
        setIsSliderOpen(true);
    };

    const handleClose = () => {
        setIsSliderOpen(false);
        setTimeout(() => setSelectedPlan(null), 300);
    };

    const handleSelectPlan = () => {
        if (onSelectPlan && selectedPlan) {
            onSelectPlan(selectedPlan);
        }
        handleClose();
    };

    return (
        <>
            {/* Pricing Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {plans.map((plan, index) => (
                    <motion.div
                        key={plan.id || index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`relative bg-[#1c1f24] border ${
                            plan.featured
                                ? 'border-[#1ba6d6] shadow-xl shadow-[#1ba6d6]/20'
                                : 'border-white/10'
                        } rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:border-[#1ba6d6]/50 hover:-translate-y-2`}
                        onClick={() => handlePlanClick(plan)}
                    >
                        {/* Featured Badge */}
                        {plan.featured && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#1ba6d6] text-white text-[0.6rem] font-black uppercase tracking-widest rounded-full">
                                Most Popular
                            </div>
                        )}

                        {/* Plan Name */}
                        <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">
                            {plan.name}
                        </h3>

                        {/* Plan Description */}
                        <p className="text-sm text-gray-400 mb-6">{plan.description}</p>

                        {/* Price */}
                        <div className="mb-8">
                            <div className="flex items-baseline gap-2">
                                <span className="text-5xl font-black text-white">${plan.price}</span>
                                {plan.period && (
                                    <span className="text-gray-500 text-sm">/{plan.period}</span>
                                )}
                            </div>
                            {plan.originalPrice && (
                                <div className="mt-2">
                                    <span className="text-gray-600 line-through">${plan.originalPrice}</span>
                                    <span className="ml-2 text-[#25d366] text-sm font-bold">
                                        Save {Math.round(((plan.originalPrice - plan.price) / plan.originalPrice) * 100)}%
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Key Features (Preview) */}
                        <ul className="space-y-3 mb-8">
                            {plan.features.slice(0, 4).map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                                    <Check size={18} className="text-[#1ba6d6] flex-shrink-0 mt-0.5" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                            {plan.features.length > 4 && (
                                <li className="text-sm text-[#1ba6d6] font-bold">
                                    +{plan.features.length - 4} more features
                                </li>
                            )}
                        </ul>

                        {/* CTA Button */}
                        <button className="w-full py-3 bg-[#1ba6d6] text-white font-black text-sm uppercase tracking-widest hover:bg-[#f4b41a] transition-colors">
                            View Details
                        </button>
                    </motion.div>
                ))}
            </div>

            {/* Sliding Detail Panel */}
            <AnimatePresence>
                {isSliderOpen && selectedPlan && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                            onClick={handleClose}
                        />

                        {/* Sliding Panel */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed right-0 top-0 bottom-0 w-full md:w-[600px] bg-[#0e1114] border-l border-white/10 z-50 overflow-y-auto"
                        >
                            {/* Header */}
                            <div className="sticky top-0 bg-[#0e1114] border-b border-white/10 p-6 flex items-center justify-between">
                                <div>
                                    <h2 className="text-3xl font-black text-white uppercase tracking-tight">
                                        {selectedPlan.name}
                                    </h2>
                                    <p className="text-sm text-gray-400 mt-1">{selectedPlan.description}</p>
                                </div>
                                <button
                                    onClick={handleClose}
                                    className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Price Section */}
                                <div className="bg-[#1c1f24] border border-white/10 rounded-2xl p-8 mb-8">
                                    <div className="flex items-baseline gap-2 mb-4">
                                        <span className="text-6xl font-black text-white">${selectedPlan.price}</span>
                                        {selectedPlan.period && (
                                            <span className="text-gray-500">/{selectedPlan.period}</span>
                                        )}
                                    </div>
                                    {selectedPlan.originalPrice && (
                                        <div className="mb-6">
                                            <span className="text-gray-600 line-through text-lg">${selectedPlan.originalPrice}</span>
                                            <span className="ml-3 text-[#25d366] font-bold">
                                                Save {Math.round(((selectedPlan.originalPrice - selectedPlan.price) / selectedPlan.originalPrice) * 100)}%
                                            </span>
                                        </div>
                                    )}
                                    <button
                                        onClick={handleSelectPlan}
                                        className="w-full py-4 bg-[#1ba6d6] text-white font-black text-sm uppercase tracking-widest hover:bg-[#f4b41a] transition-colors"
                                    >
                                        Select {selectedPlan.name}
                                    </button>
                                </div>

                                {/* All Features */}
                                <div className="mb-8">
                                    <h3 className="text-xl font-black text-white mb-6 uppercase tracking-tight">
                                        What's Included
                                    </h3>
                                    <ul className="space-y-4">
                                        {selectedPlan.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-gray-300">
                                                <Check size={20} className="text-[#1ba6d6] flex-shrink-0 mt-0.5" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Additional Info */}
                                {selectedPlan.additionalInfo && (
                                    <div className="bg-white/5 border border-white/5 rounded-xl p-6">
                                        <h4 className="text-sm font-black text-white mb-3 uppercase tracking-widest">
                                            Additional Information
                                        </h4>
                                        <p className="text-sm text-gray-400 leading-relaxed">
                                            {selectedPlan.additionalInfo}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default PricingSlider;
