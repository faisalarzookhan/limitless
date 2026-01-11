import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare,
  Star,
  User,
  Mail,
  Lightbulb,
  CheckCircle2,
  ThumbsUp,
  ThumbsDown,
  Zap,
  ChevronRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

const FeedbackForm = ({ variant = 'default', onSubmit, className = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 0,
    category: '',
    message: '',
    wouldRecommend: null,
    improveSuggestion: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const categories = [
    { value: '', label: 'Select Audit Vector' },
    { value: 'service-quality', label: 'Operational Excellence' },
    { value: 'support', label: 'Technical Assistance' },
    { value: 'product', label: 'Neural Infrastructure' },
    { value: 'website', label: 'Interface Experience' },
    { value: 'pricing', label: 'Resource Allocation' },
    { value: 'delivery', label: 'Transmission Speed' },
    { value: 'other', label: 'Custom Protocol' }
  ];

  const validate = useCallback(() => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Unit ID required';
    if (!formData.email.trim()) {
      newErrors.email = 'Neural link required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Neural format invalid';
    }
    if (formData.rating === 0) newErrors.rating = 'Intensity calibration required';
    if (!formData.category) newErrors.category = 'Vector selection required';
    if (!formData.message.trim()) newErrors.message = 'Transmission content required';
    if (formData.wouldRecommend === null) newErrors.wouldRecommend = 'Alignment confirmation required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleRatingChange = (rating) => {
    setFormData(prev => ({ ...prev, rating }));
    if (errors.rating) {
      setErrors(prev => ({ ...prev, rating: '' }));
    }
  };

  const handleRecommendChange = (value) => {
    setFormData(prev => ({ ...prev, wouldRecommend: value }));
    if (errors.wouldRecommend) {
      setErrors(prev => ({ ...prev, wouldRecommend: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    try {
      // Simulate feedback transmission synchronization
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (onSubmit) {
        onSubmit(formData);
      }
      
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        rating: 0,
        category: '',
        message: '',
        wouldRecommend: null,
        improveSuggestion: ''
      });
    } catch (error) {
      console.error('Transmission fault:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`w-full max-w-3xl mx-auto ${className}`}>
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-[#12161b]/80 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-12 text-center"
          >
            <div className="flex items-center justify-center mb-8">
              <div className="p-4 bg-emerald-500/20 rounded-full border border-emerald-500/40">
                <CheckCircle2 className="w-16 h-16 text-emerald-400" />
              </div>
            </div>
            <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">
              Transmission Received
            </h3>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Your audit data has been successfully synchronized into our core intelligence. We appreciate your neural contribution.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-8 py-3 bg-white/5 border border-white/10 hover:border-emerald-500/50 text-white font-bold rounded-xl transition-all flex items-center gap-2 mx-auto"
            >
              <Zap className="w-4 h-4 text-emerald-400" />
              Initiate New Audit
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#12161b]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Sparkles className="w-48 h-48 text-[#1ba6d6]" />
            </div>

            <div className="text-center mb-10 relative z-10">
              <div className="inline-flex items-center gap-2 bg-[#1ba6d6]/10 px-4 py-2 rounded-full mb-6 border border-[#1ba6d6]/20">
                <MessageSquare className="w-4 h-4 text-[#1ba6d6]" />
                <span className="text-[10px] font-black text-[#1ba6d6] uppercase tracking-widest">Neural Interface Audit</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-tighter uppercase">
                Synchronize Your Experience
              </h2>
              <p className="text-gray-500 max-w-lg mx-auto text-sm">
                Calibrate our services by sharing your neural impressions of our operational history.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-500 uppercase flex items-center gap-2 tracking-widest">
                    <User className="w-3 h-3 text-[#1ba6d6]" /> Unit ID
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-white/5 border ${errors.name ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#1ba6d6]/50 transition-all text-sm`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-[10px] text-red-500 font-bold uppercase">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-500 uppercase flex items-center gap-2 tracking-widest">
                    <Mail className="w-3 h-3 text-[#1ba6d6]" /> Neural Uplink
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-white/5 border ${errors.email ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#1ba6d6]/50 transition-all text-sm`}
                    placeholder="uplink@neural.net"
                  />
                  {errors.email && <p className="text-[10px] text-red-500 font-bold uppercase">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="text-[10px] font-black text-gray-500 uppercase block mb-4 tracking-widest">
                  Signal Intensity Calibration (Rating)
                  {errors.rating && <span className="text-red-500 ml-2">{errors.rating}</span>}
                </label>
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.button
                      key={star}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      type="button"
                      onClick={() => handleRatingChange(star)}
                      className={`p-2 transition-all ${
                        formData.rating >= star
                          ? 'text-yellow-400'
                          : 'text-white/10 hover:text-yellow-400/50'
                      }`}
                    >
                      <Star className={`w-8 h-8 ${formData.rating >= star ? 'fill-current' : ''}`} />
                    </motion.button>
                  ))}
                  <span className="text-2xl font-black text-white/20 ml-auto">{formData.rating}/5</span>
                </div>
              </div>

              <div>
                <label className="text-[10px] font-black text-gray-500 uppercase block mb-2 tracking-widest">
                  Operational Audit Vector (Category)
                </label>
                <div className="relative">
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className={`w-full bg-white/5 border ${errors.category ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#1ba6d6]/50 transition-all appearance-none cursor-pointer text-sm`}
                  >
                    {categories.map((category) => (
                      <option key={category.value} value={category.value} className="bg-[#0e1114]">
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.category && (
                  <p className="text-[10px] text-red-500 font-bold uppercase mt-1">{errors.category}</p>
                )}
              </div>

              <div>
                <label className="text-[10px] font-black text-gray-500 uppercase block mb-4 tracking-widest">
                  Future Alignment Probability
                  {errors.wouldRecommend && <span className="text-red-500 ml-2">{errors.wouldRecommend}</span>}
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={() => handleRecommendChange(true)}
                    className={`flex items-center justify-center gap-3 p-4 rounded-xl border transition-all ${
                      formData.wouldRecommend === true
                        ? 'border-emerald-500/50 bg-emerald-500/10 text-emerald-400'
                        : 'border-white/5 bg-white/5 text-gray-400 hover:border-emerald-500/30'
                    }`}
                  >
                    <ThumbsUp className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Definite Alignment</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={() => handleRecommendChange(false)}
                    className={`flex items-center justify-center gap-3 p-4 rounded-xl border transition-all ${
                      formData.wouldRecommend === false
                        ? 'border-red-500/50 bg-red-500/10 text-red-400'
                        : 'border-white/5 bg-white/5 text-gray-400 hover:border-red-500/30'
                    }`}
                  >
                    <ThumbsDown className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Protocol Variance</span>
                  </motion.button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-500 uppercase flex items-center gap-2 tracking-widest">
                  <MessageSquare className="w-3 h-3 text-[#1ba6d6]" /> Central Feedback Transmission
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full bg-white/5 border ${errors.message ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#1ba6d6]/50 transition-all text-sm`}
                  placeholder="Share your detailed impressions of our foundational services..."
                />
                {errors.message && <p className="text-[10px] text-red-500 font-bold uppercase">{errors.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-500 uppercase flex items-center gap-2 tracking-widest">
                  <Lightbulb className="w-3 h-3 text-[#1ba6d6]" /> Interface Enhancement Proposals
                </label>
                <textarea
                  name="improveSuggestion"
                  value={formData.improveSuggestion}
                  onChange={handleChange}
                  rows={3}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#1ba6d6]/50 transition-all text-sm"
                  placeholder="Define specific protocol enhancements or architectural refinements..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#1ba6d6] hover:bg-[#1ba6d6]/90 text-white font-black rounded-2xl transition-all shadow-xl shadow-[#1ba6d6]/20 flex items-center justify-center gap-2 group disabled:opacity-50 uppercase tracking-tighter"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Syncing Audit...
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5" />
                    Commit Transmission
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FeedbackForm;