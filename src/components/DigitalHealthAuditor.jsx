import React, { useState } from 'react';
import {
  HiOutlineGlobeAlt,
  HiOutlineLightningBolt,
  HiOutlineShieldCheck,
  HiOutlineChartBar,
  HiOutlineDocumentReport,
  HiOutlineMail,
  HiOutlineDownload,
  HiOutlineShare,
} from 'react-icons/hi';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import LimitlessScore from './LimitlessScore';
import securityScanService from '../services/securityScanService';
import lighthouseService from '../services/lighthouseService';
import {
  generateTechnicalAuditReport,
  downloadPDF,
} from '../services/pdfGenerationService';
import { sendLeadGenerationNotification } from '../services/notificationService';

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Digital <span className="text-blue-800">Health Audit</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get a comprehensive analysis of your website's performance,
            security, and SEO with our AI-powered auditor
          </p>
        </div>

        {!scanResults && !isScanning ? (
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="text-center mb-8">
              <div className="mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <HiOutlineGlobeAlt className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Enter Your Website URL
              </h2>
              <p className="text-gray-600">
                We'll analyze your site's performance, security, and SEO
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="url"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Website URL
                </label>
                <input
                  type="url"
                  id="url"
                  value={url}
                  onChange={e => setUrl(e.target.value)}
                  placeholder="https://example.com"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Digital Health Audit
              </button>
            </form>
          </div>
        ) : isScanning ? (
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24">
                  <CircularProgressbar
                    value={Math.floor(Math.random() * 100)}
                    text={`${Math.floor(Math.random() * 100)}%`}
                    styles={buildStyles({
                      rotation: 0.25,
                      strokeLinecap: 'butt',
                      textSize: '16px',
                      pathTransitionDuration: 0.5,
                      pathColor: `#4F46E5`,
                      textColor: '#4F46E5',
                      trailColor: '#E0E7FF',
                    })}
                  />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Auditing Your Website
              </h2>
              <p className="text-gray-600 mb-6">
                Analyzing performance, security, and SEO metrics...
              </p>

              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <HiOutlineLightningBolt className="w-5 h-5 mr-2 text-yellow-500" />
                  <span>Performance metrics</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <HiOutlineShieldCheck className="w-5 h-5 mr-2 text-green-500" />
                  <span>Security checks</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <HiOutlineChartBar className="w-5 h-5 mr-2 text-blue-500" />
                  <span>SEO analysis</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Audit Results for {url}
                  </h2>
                  <p className="text-gray-600">
                    Completed on {new Date().toLocaleDateString()}
                  </p>
                </div>

                <div className="mt-4 md:mt-0">
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={resetAudit}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg font-medium transition"
                    >
                      New Audit
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
                              sslStatus: scanResults.security.sslValid
                                ? 'Valid'
                                : 'Invalid',
                              hstsStatus: scanResults.security.hsts
                                ? 'Configured'
                                : 'Not Configured',
                              mixedContent:
                                scanResults.security.sslIssues &&
                                scanResults.security.sslIssues.length > 0
                                  ? 'Issues Found'
                                  : 'None',
                              securityHeaders:
                                scanResults.security.headerIssues &&
                                scanResults.security.headerIssues.length > 0
                                  ? 'Issues Found'
                                  : 'Properly Configured',
                              vulnerabilities: 'Scan Required',
                              metaTitle: 'Check Required',
                              metaDescription: 'Check Required',
                              headerStructure: 'Check Required',
                              imageAltText: 'Check Required',
                              pageSpeed: `${scanResults.speed.loadTime.toFixed(1)}s`,
                            });
                            downloadPDF(
                              pdfBlob,
                              `Technical-Audit-Report-${new Date().toISOString().split('T')[0]}.pdf`
                            );

                            // Send notification about PDF download
                            await sendLeadGenerationNotification({
                              formType: 'technical-audit-pdf',
                              email,
                              url,
                              timestamp: new Date().toISOString(),
                              page: window.location.pathname,
                              userAgent: navigator.userAgent,
                            });
                          } catch (error) {
                            console.error('Error generating PDF:', error);
                            alert(
                              'Error generating PDF report. Please try again.'
                            );
                          }
                        }
                      }}
                      className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition flex items-center"
                    >
                      <HiOutlineDownload className="w-4 h-4 mr-2" />
                      Download PDF
                    </button>

                    <button
                      onClick={async () => {
                        if (scanResults && email) {
                          try {
                            const pdfBlob = await generateTechnicalAuditReport({
                              lcp: scanResults.performance.lcp,
                              fid: scanResults.performance.fid,
                              cls: scanResults.performance.cls,
                              fcp: scanResults.performance.fcp,
                              tti: scanResults.performance.si,
                              sslStatus: scanResults.security.sslValid
                                ? 'Valid'
                                : 'Invalid',
                              hstsStatus: scanResults.security.hsts
                                ? 'Configured'
                                : 'Not Configured',
                              mixedContent:
                                scanResults.security.sslIssues &&
                                scanResults.security.sslIssues.length > 0
                                  ? 'Issues Found'
                                  : 'None',
                              securityHeaders:
                                scanResults.security.headerIssues &&
                                scanResults.security.headerIssues.length > 0
                                  ? 'Issues Found'
                                  : 'Properly Configured',
                              vulnerabilities: 'Scan Required',
                              metaTitle: 'Check Required',
                              metaDescription: 'Check Required',
                              headerStructure: 'Check Required',
                              imageAltText: 'Check Required',
                              pageSpeed: `${scanResults.speed.loadTime.toFixed(1)}s`,
                            });

                            // In a real implementation, we would send the PDF via email
                            // For now, we'll just send a notification that an email should be sent
                            await sendLeadGenerationNotification({
                              formType: 'technical-audit-email',
                              email,
                              url,
                              subject: 'Your Technical Audit Report',
                              timestamp: new Date().toISOString(),
                              page: window.location.pathname,
                              userAgent: navigator.userAgent,
                            });

                            alert(
                              `Report will be sent to ${email}. In a production environment, this would trigger an email with the PDF attachment.`
                            );
                          } catch (error) {
                            console.error('Error preparing email:', error);
                            alert('Error preparing email. Please try again.');
                          }
                        }
                      }}
                      className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition flex items-center"
                    >
                      <HiOutlineMail className="w-4 h-4 mr-2" />
                      Email Report
                    </button>
                  </div>
                </div>
              </div>

              {/* Limitless Score */}
              <div className="text-center mb-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Your Limitless Score
                </h3>
                <div className="flex justify-center">
                  <LimitlessScore
                    score={limitlessScore}
                    size={200}
                    strokeWidth={8}
                  />
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="text-blue-800 text-3xl font-bold mb-2">
                    {scanResults.performance.lcp.toFixed(0)}ms
                  </div>
                  <div className="text-blue-600 font-medium">
                    Largest Contentful Paint
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Should be &lt; 2500ms
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-xl">
                  <div className="text-green-800 text-3xl font-bold mb-2">
                    {scanResults.performance.cls.toFixed(2)}
                  </div>
                  <div className="text-green-600 font-medium">
                    Cumulative Layout Shift
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Should be &lt; 0.1
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-xl">
                  <div className="text-purple-800 text-3xl font-bold mb-2">
                    {scanResults.performance.fid.toFixed(0)}ms
                  </div>
                  <div className="text-purple-600 font-medium">
                    First Input Delay
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Should be &lt; 100ms
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-xl">
                  <div className="text-yellow-800 text-3xl font-bold mb-2">
                    {scanResults.speed.loadTime.toFixed(1)}s
                  </div>
                  <div className="text-yellow-600 font-medium">Load Time</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Recommended &lt; 3s
                  </div>
                </div>
              </div>

              {/* Issues Summary */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Performance Issues
                  </h4>
                  <ul className="space-y-2">
                    {scanResults.speed.issues.map((issue, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span className="text-gray-700">{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    SEO Issues
                  </h4>
                  <ul className="space-y-2">
                    {scanResults.seo.issues.map((issue, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span className="text-gray-700">{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Security Issues
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <div className="font-medium text-sm text-gray-700 mb-1">
                        SSL Certificate:
                      </div>
                      <div
                        className={`text-sm ${scanResults.security.sslValid ? 'text-green-600' : 'text-red-600'}`}
                      >
                        {scanResults.security.sslValid ? 'Valid' : 'Invalid'}
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-sm text-gray-700 mb-1">
                        Security Grade:
                      </div>
                      <div
                        className={`text-lg font-bold ${scanResults.security.grade === 'A+' || scanResults.security.grade === 'A' ? 'text-green-600' : scanResults.security.grade === 'B' || scanResults.security.grade === 'C' ? 'text-yellow-600' : 'text-red-600'}`}
                      >
                        {scanResults.security.grade}
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-sm text-gray-700 mb-1">
                        Overall Score:
                      </div>
                      <div className="text-lg font-bold text-blue-600">
                        {scanResults.security.overallScore}/100
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security Recommendations */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Security Recommendations
                </h4>
                <ul className="space-y-2">
                  {scanResults.security.recommendations.map(
                    (recommendation, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span className="text-gray-700">{recommendation}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">
                Experience how TrackIT provides the stability you're missing
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Ready to improve your website's performance and resolve these
                issues? Try our TrackIT solution in our Instant Sandbox.
              </p>
              <button
                onClick={onSandboxRequest}
                className="bg-yellow-500 hover:bg-yellow-400 text-yellow-900 font-bold py-3 px-8 rounded-lg transition duration-300"
              >
                Try TrackIT in Sandbox
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DigitalHealthAuditor;
