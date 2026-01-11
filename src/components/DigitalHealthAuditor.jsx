import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe,
  Zap,
  ShieldCheck,
  BarChart3,
  FileText,
  Mail,
  Download,
  Share2,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Database,
  Cpu,
  Lock,
  Search,
  RefreshCw,
  Layout,
  HardDrive
} from 'lucide-react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import LimitlessScore from './LimitlessScore';
import securityScanService from '../services/security/securityScanService';
import lighthouseService from '../services/analytics/lighthouseService';
import {
  generateTechnicalAuditReport,
  downloadPDF,
} from '../services/pdf/pdfGenerationService';
import { sendLeadGenerationNotification } from '../services/notification/notificationService';

const DigitalHealthAuditor = ({ onAuditComplete, onSandboxRequest }) => {
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanResults, setScanResults] = useState(null);
  const [limitlessScore, setLimitlessScore] = useState(null);

  // Function to perform comprehensive audit including security scanning
  const performAudit = async targetUrl => {
    setIsScanning(true);

    try {
      // Perform Lighthouse audit
      const lighthouseResult = await lighthouseService.runAudit(targetUrl);
      const performanceMetrics =
        lighthouseService.extractPerformanceMetrics(lighthouseResult);
      const categoryScores =
        lighthouseService.extractCategoryScores(lighthouseResult);

      // Perform security scan
      const securityResults =
        await securityScanService.performSecurityScan(targetUrl);

      // Mock additional metrics
      const mockResults = {
        performance: {
          lcp: performanceMetrics.lcp,
          fcp: performanceMetrics.fcp,
          cls: performanceMetrics.cls,
          fid: performanceMetrics.fid,
          si: performanceMetrics.si,
        },
        seo: {
          score: categoryScores.seo,
          issues: [
            'Missing meta description',
            'Low image alt text coverage',
            'Suboptimal heading structure',
          ],
        },
        accessibility: {
          score: categoryScores.accessibility,
          issues: [
            'Low color contrast ratios',
            'Missing ARIA labels',
            'Keyboard navigation issues',
          ],
        },
        security: {
          sslValid: securityResults.ssl.valid,
          https: true,
          hsts: securityResults.ssl.hsts,
          grade: securityResults.securityGrade,
          overallScore: securityResults.overallScore,
          sslIssues: securityResults.ssl.issues,
          headerIssues: securityResults.headers.issues,
          recommendations: securityResults.recommendations,
        },
        speed: {
          loadTime: performanceMetrics.si / 1000, // Convert from ms to seconds
          firstByte: Math.random() * 1000 + 200, // 200-1200ms
          issues: [
            'Unoptimized images',
            'Render-blocking resources',
            'Missing compression',
          ],
        },
        lighthouseResult,
      };

      // Calculate the Limitless Score (1-100) with security component
      const performanceScore = Math.max(
        0,
        Math.min(100, 100 - (mockResults.performance.lcp / 2500) * 100)
      );
      const seoScore = mockResults.seo.score;
      const accessibilityScore = mockResults.accessibility.score;
      const securityScore = mockResults.security.overallScore; // Use actual security score now
      const speedScore = Math.max(
        0,
        Math.min(100, 100 - (mockResults.speed.loadTime / 5) * 100)
      );

      const calculatedLimitlessScore = Math.round(
        performanceScore * 0.25 +
          seoScore * 0.2 +
          accessibilityScore * 0.2 +
          securityScore * 0.2 +
          speedScore * 0.15
      );

      setLimitlessScore(calculatedLimitlessScore);
      setScanResults(mockResults);
      setIsScanning(false);

      // Call the completion callback if provided
      if (onAuditComplete) {
        onAuditComplete(mockResults, targetUrl, email);
      }
    } catch (error) {
      console.error('Audit failed:', error);
      setIsScanning(false);

      // Set error state or show error message
      alert('Audit failed. Please try again later.');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (url && email) {
      performAudit(url);
    }
  };

  const resetAudit = () => {
    setScanResults(null);
    setLimitlessScore(null);
    setUrl('');
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-[#0e1114] py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1ba6d6]/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8">
            <div className="w-2 h-2 bg-[#1ba6d6] rounded-full animate-pulse shadow-[0_0_10px_rgba(27,166,214,0.8)]"></div>
            <span className="text-[0.6rem] font-black text-white/60 uppercase tracking-[0.3em]">Neural Diagnostic Terminal</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6 leading-none">
            Digital <span className="text-[#1ba6d6]">Health Auditor</span>
          </h1>
          <p className="text-[0.7rem] text-white/40 font-black uppercase tracking-[0.3em] max-w-2xl mx-auto leading-relaxed">
            Execute a comprehensive neural analysis of your target infrastructure's performance, security matrix, and visibility protocols.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!scanResults && !isScanning ? (
            <motion.div 
              key="audit-form"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white/5 backdrop-blur-3xl rounded-[3rem] border border-white/10 p-12 max-w-3xl mx-auto overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1ba6d6]/10 to-transparent pointer-events-none"></div>
              
              <div className="text-center mb-12 relative z-10">
                <div className="mx-auto w-20 h-20 bg-[#1ba6d6] rounded-3xl flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(27,166,214,0.3)]">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-xs font-black text-white uppercase tracking-[0.4em] mb-4">Initialize Target Scan</h2>
                <p className="text-[0.6rem] text-white/30 font-black uppercase tracking-[0.2em]">Deploying diagnostic nanobots for structural integrity audit.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="space-y-4">
                  <label htmlFor="url" className="text-[0.6rem] font-black text-white/40 uppercase tracking-[0.3em] ml-2">Target Vector (URL)</label>
                  <div className="relative group">
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-[#1ba6d6] transition-colors" />
                    <input
                      type="url"
                      id="url"
                      value={url}
                      onChange={e => setUrl(e.target.value)}
                      placeholder="HTTPS://TARGET-INFRASTRUCTURE.COM"
                      required
                      className="w-full bg-white/5 border border-white/5 focus:border-[#1ba6d6]/50 focus:bg-white/10 px-14 py-6 rounded-2xl text-[0.8rem] font-black uppercase tracking-widest text-white placeholder:text-white/10 outline-none transition-all duration-500"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label htmlFor="email" className="text-[0.6rem] font-black text-white/40 uppercase tracking-[0.3em] ml-2">Secure Reporting Channel</label>
                  <div className="relative group">
                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-[#1ba6d6] transition-colors" />
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="OPERATOR@COMMAND.NODE"
                      required
                      className="w-full bg-white/5 border border-white/5 focus:border-[#1ba6d6]/50 focus:bg-white/10 px-14 py-6 rounded-2xl text-[0.8rem] font-black uppercase tracking-widest text-white placeholder:text-white/10 outline-none transition-all duration-500"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-6 bg-[#1ba6d6] text-white text-[0.85rem] font-black uppercase tracking-[0.5em] mask-btn hover:scale-[1.02] active:scale-95 transition-all duration-500 shadow-[0_0_50px_rgba(27,166,214,0.4)] flex items-center justify-center group"
                >
                  Initiate System Audit
                  <ArrowRight className="ml-4 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            </motion.div>
          ) : isScanning ? (
            <motion.div 
              key="audit-scanning"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white/5 backdrop-blur-3xl rounded-[3rem] border border-white/10 p-16 max-w-2xl mx-auto overflow-hidden relative text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1ba6d6]/10 to-transparent pointer-events-none"></div>
              
              <div className="flex justify-center mb-10 relative z-10">
                <div className="w-32 h-32 relative">
                  <CircularProgressbar
                    value={75}
                    styles={buildStyles({
                      rotation: 0.25,
                      strokeLinecap: 'round',
                      pathTransitionDuration: 2,
                      pathColor: `#1ba6d6`,
                      trailColor: 'rgba(255,255,255,0.05)',
                    })}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <RefreshCw className="w-10 h-10 text-white animate-spin" style={{ animationDuration: '3s' }} />
                  </div>
                </div>
              </div>

              <h2 className="text-xl font-black text-white uppercase tracking-[0.4em] mb-4 relative z-10">
                Auditing Target...
              </h2>
              <p className="text-[0.6rem] text-white/30 font-black uppercase tracking-[0.2em] mb-12 relative z-10">
                Decrypting performance nodes and security layers...
              </p>

              <div className="grid grid-cols-1 gap-4 max-w-xs mx-auto relative z-10">
                {[
                  { icon: Zap, text: 'Performance Node Scan', color: '#ffc957' },
                  { icon: ShieldCheck, text: 'Security Matrix Check', color: '#25d366' },
                  { icon: BarChart3, text: 'SEO Frequency Tuning', color: '#1ba6d6' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center p-4 bg-white/5 border border-white/5 rounded-2xl">
                    <item.icon className="w-4 h-4 mr-4" style={{ color: item.color }} />
                    <span className="text-[0.55rem] font-black text-white/50 uppercase tracking-widest">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
          <motion.div 
            key="audit-results"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-10"
          >
            <div className="bg-white/5 backdrop-blur-3xl rounded-[3rem] border border-white/10 p-12 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1ba6d6]/5 to-transparent pointer-events-none"></div>
              
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16 relative z-10">
                <div>
                  <h2 className="text-2xl font-black text-white uppercase tracking-tighter mb-3">
                    Diagnostic Output: <span className="text-[#1ba6d6]">{url}</span>
                  </h2>
                  <p className="text-[0.6rem] text-white/30 font-black uppercase tracking-[0.2em]">
                    REPORT GENERATED ON {new Date().toLocaleDateString()}
                  </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                  <button
                    onClick={resetAudit}
                    className="px-6 py-4 bg-white/5 hover:bg-white/10 text-white text-[0.6rem] font-black uppercase tracking-[0.3em] rounded-2xl border border-white/5 transition-all duration-300"
                  >
                    Reset Terminal
                  </button>

                  <button
                    onClick={async () => {
                      if (scanResults) {
                        try {
                          const pdfBlob = await generateTechnicalAuditReport({
                            lcp: scanResults.performance.lcp,
                            fid: scanResults.performance.fid,
                            cls: scanResults.performance.cls,
                            fcp: scanResults.performance.fcp,
                            tti: scanResults.performance.si,
                            sslStatus: scanResults.security.sslValid ? 'Valid' : 'Invalid',
                            hstsStatus: scanResults.security.hsts ? 'Configured' : 'Not Configured',
                            mixedContent: scanResults.security.sslIssues && scanResults.security.sslIssues.length > 0 ? 'Issues Found' : 'None',
                            securityHeaders: scanResults.security.headerIssues && scanResults.security.headerIssues.length > 0 ? 'Issues Found' : 'Properly Configured',
                            vulnerabilities: 'Scan Required',
                            metaTitle: 'Check Required',
                            metaDescription: 'Check Required',
                            headerStructure: 'Check Required',
                            imageAltText: 'Check Required',
                            pageSpeed: `${scanResults.speed.loadTime.toFixed(1)}s`,
                          });
                          downloadPDF(pdfBlob, `Nexus-Audit-${new Date().toISOString().split('T')[0]}.pdf`);
                          await sendLeadGenerationNotification({
                            formType: 'technical-audit-pdf',
                            email, url, timestamp: new Date().toISOString(), page: window.location.pathname, userAgent: navigator.userAgent
                          });
                        } catch (error) {
                          console.error('Error generating PDF:', error);
                        }
                      }
                    }}
                    className="px-8 py-4 bg-[#1ba6d6] text-white text-[0.6rem] font-black uppercase tracking-[0.3em] rounded-2xl shadow-[0_0_20px_rgba(27,166,214,0.3)] hover:scale-105 transition-all duration-500 flex items-center"
                  >
                    <Download className="w-4 h-4 mr-3" />
                    Export PDF
                  </button>

                  <button
                    onClick={async () => {
                      if (scanResults && email) {
                        try {
                          await sendLeadGenerationNotification({
                            formType: 'technical-audit-email',
                            email, url, subject: 'Your Technical Audit Report', timestamp: new Date().toISOString(), page: window.location.pathname, userAgent: navigator.userAgent
                          });
                          alert(`Diagnostic report transmitted to ${email}.`);
                        } catch (error) {
                          console.error('Error preparing email:', error);
                        }
                      }
                    }}
                    className="px-8 py-4 bg-white text-[#0e1114] text-[0.6rem] font-black uppercase tracking-[0.3em] rounded-2xl hover:scale-105 transition-all duration-500 flex items-center"
                  >
                    <Mail className="w-4 h-4 mr-3" />
                    Transmit Report
                  </button>
                </div>
              </div>

              {/* Limitless Score */}
              <div className="flex flex-col items-center justify-center mb-20 relative z-10">
                <h3 className="text-xs font-black text-white/40 uppercase tracking-[0.4em] mb-12">
                  Infrastructure Integrity Index
                </h3>
                <div className="relative group">
                  <div className="absolute inset-0 bg-[#1ba6d6]/20 blur-[100px] rounded-full group-hover:bg-[#1ba6d6]/30 transition-all duration-1000"></div>
                  <LimitlessScore
                    score={limitlessScore}
                    size={280}
                    strokeWidth={10}
                  />
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 relative z-10">
                {[
                  { label: 'Largest Paint', value: `${scanResults.performance.lcp.toFixed(0)}ms`, sub: 'Target < 2500ms', icon: Layout, color: '#1ba6d6' },
                  { label: 'Layout Shift', value: scanResults.performance.cls.toFixed(2), sub: 'Target < 0.1', icon: Cpu, color: '#25d366' },
                  { label: 'Input Delay', value: `${scanResults.performance.fid.toFixed(0)}ms`, sub: 'Target < 100ms', icon: Zap, color: '#ffc957' },
                  { label: 'Latency Node', value: `${scanResults.speed.loadTime.toFixed(1)}s`, sub: 'Target < 3s', icon: HardDrive, color: '#ff4d4d' }
                ].map((metric, i) => (
                  <div key={i} className="bg-white/5 border border-white/5 rounded-3xl p-8 hover:bg-white/10 transition-colors group">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#1ba6d6]/20 transition-colors">
                        <metric.icon className="w-5 h-5" style={{ color: metric.color }} />
                      </div>
                    </div>
                    <div className="text-3xl font-black text-white tracking-tighter mb-2">
                      {metric.value}
                    </div>
                    <div className="text-[0.6rem] font-black text-white/60 uppercase tracking-widest">
                      {metric.label}
                    </div>
                    <div className="text-[0.5rem] font-black text-white/20 uppercase tracking-widest mt-2">{metric.sub}</div>
                  </div>
                ))}
              </div>

              {/* Issues Summary */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16 relative z-10">
                <div className="bg-white/5 border border-white/5 rounded-3xl p-8">
                  <h4 className="text-[0.6rem] font-black text-[#1ba6d6] uppercase tracking-[0.3em] mb-8 flex items-center">
                    <Zap className="w-3.5 h-3.5 mr-2" />
                    Performance Anomalies
                  </h4>
                  <ul className="space-y-4">
                    {scanResults.speed.issues.map((issue, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-1 h-1 rounded-full bg-red-500 mt-1.5 mr-3 flex-shrink-0 animate-pulse"></div>
                        <span className="text-[0.6rem] font-black text-white/40 uppercase tracking-widest leading-relaxed">{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/5 border border-white/5 rounded-3xl p-8">
                  <h4 className="text-[0.6rem] font-black text-[#ffc957] uppercase tracking-[0.3em] mb-8 flex items-center">
                    <Search className="w-3.5 h-3.5 mr-2" />
                    Visibility Protocol
                  </h4>
                  <ul className="space-y-4">
                    {scanResults.seo.issues.map((issue, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-1 h-1 rounded-full bg-yellow-500 mt-1.5 mr-3 flex-shrink-0"></div>
                        <span className="text-[0.6rem] font-black text-white/40 uppercase tracking-widest leading-relaxed">{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/5 border border-white/5 rounded-3xl p-8">
                  <h4 className="text-[0.6rem] font-black text-[#25d366] uppercase tracking-[0.3em] mb-8 flex items-center">
                    <ShieldCheck className="w-3.5 h-3.5 mr-2" />
                    Security Perimeter
                  </h4>
                  <div className="space-y-6">
                    <div>
                      <div className="text-[0.5rem] font-black text-white/20 uppercase tracking-[0.3em] mb-2">SSL Status</div>
                      <div className={`text-[0.65rem] font-black uppercase tracking-widest ${scanResults.security.sslValid ? 'text-[#25d366]' : 'text-red-500'}`}>
                        {scanResults.security.sslValid ? 'ENCRYPTED' : 'EXPOSED'}
                      </div>
                    </div>
                    <div>
                      <div className="text-[0.5rem] font-black text-white/20 uppercase tracking-[0.3em] mb-2">Threat Grade</div>
                      <div className={`text-2xl font-black ${scanResults.security.grade.startsWith('A') ? 'text-[#25d366]' : scanResults.security.grade === 'B' ? 'text-[#ffc957]' : 'text-red-500'}`}>
                        {scanResults.security.grade}
                      </div>
                    </div>
                    <div>
                      <div className="text-[0.5rem] font-black text-white/20 uppercase tracking-[0.3em] mb-2">Defense Score</div>
                      <div className="text-xl font-black text-[#1ba6d6]">
                        {scanResults.security.overallScore}<span className="text-white/20">/100</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security Recommendations */}
              <div className="relative z-10 bg-[#ffc957]/5 border border-[#ffc957]/10 rounded-3xl p-8">
                <h4 className="text-[0.6rem] font-black text-[#ffc957] uppercase tracking-[0.4em] mb-8 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-3" />
                  Strategic Mitigation Protocols
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {scanResults.security.recommendations.map((recommendation, index) => (
                    <div key={index} className="flex items-start p-4 bg-white/5 rounded-2xl border border-white/5">
                      <div className="w-2 h-2 rounded-full bg-[#ffc957] mt-1.5 mr-4 flex-shrink-0"></div>
                      <span className="text-[0.6rem] font-black text-white/60 uppercase tracking-widest leading-relaxed">
                        {recommendation}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-[#1ba6d6] to-[#0e1114] rounded-[4rem] p-16 text-center shadow-2xl overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-[#0e1114]/50 backdrop-blur-3xl"></div>
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
              
              <div className="relative z-10">
                <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
                  Nexus Upgrade <span className="text-white/40">Available</span>
                </h3>
                <p className="text-[0.7rem] text-white/60 font-black uppercase tracking-[0.3em] mb-12 max-w-2xl mx-auto leading-relaxed">
                  Experience the untethered stability of TrackIT. Deploy your target infrastructure into our secure neural sandbox environment for real-time stress testing.
                </p>
                <button
                  onClick={onSandboxRequest}
                  className="px-12 py-6 bg-white text-[#0e1114] text-[0.8rem] font-black uppercase tracking-[0.5em] mask-btn hover:scale-105 transition-all duration-500 shadow-2xl"
                >
                  Initialize Sandbox
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </div>
  );
};

export default DigitalHealthAuditor;
