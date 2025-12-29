import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

// Service for generating technical audit reports
export const generateTechnicalAuditReport = async auditData => {
  return new Promise((resolve, reject) => {
    try {
      const doc = new jsPDF();

      // Add title
      doc.setFontSize(22);
      doc.setTextColor(40, 40, 40);
      doc.text('Technical Debt & Opportunity Report', 20, 30);

      // Add subtitle
      doc.setFontSize(14);
      doc.setTextColor(100, 100, 100);
      doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, 45);

      // Add executive summary
      doc.setFontSize(16);
      doc.setTextColor(40, 40, 40);
      doc.text('Executive Summary', 20, 65);

      doc.setFontSize(12);
      doc.setTextColor(60, 60, 60);
      const summaryText = `This comprehensive technical audit report provides an in-depth analysis of your website's performance, security, and SEO metrics. Our analysis reveals key opportunities for improvement and identifies critical technical debt that should be addressed to enhance user experience and business outcomes.`;

      doc.text(summaryText, 20, 75, { maxWidth: 170 });

      // Add performance metrics
      doc.setFontSize(16);
      doc.setTextColor(40, 40, 40);
      doc.text('Performance Metrics', 20, 110);

      // Performance table
      const performanceData = [
        ['Metric', 'Current', 'Recommendation'],
        [
          'Largest Contentful Paint (LCP)',
          auditData.lcp || 'N/A',
          'Under 2.5s',
        ],
        ['First Input Delay (FID)', auditData.fid || 'N/A', 'Under 100ms'],
        ['Cumulative Layout Shift (CLS)', auditData.cls || 'N/A', 'Under 0.1'],
        ['First Contentful Paint (FCP)', auditData.fcp || 'N/A', 'Under 1.8s'],
        ['Time to Interactive (TTI)', auditData.tti || 'N/A', 'Under 3.8s'],
      ];

      doc.autoTable({
        startY: 120,
        head: [performanceData[0]],
        body: performanceData.slice(1),
        theme: 'grid',
        headStyles: { fillColor: [59, 130, 246] },
        styles: { fontSize: 10 },
        margin: { left: 20, right: 20 },
      });

      // Add security assessment
      const securityStartY = doc.lastAutoTable.finalY + 10;
      doc.setFontSize(16);
      doc.setTextColor(40, 40, 40);
      doc.text('Security Assessment', 20, securityStartY);

      const securityData = [
        ['Security Aspect', 'Status', 'Recommendation'],
        ['SSL Certificate', auditData.sslStatus || 'N/A', 'Valid, up-to-date'],
        ['HSTS Header', auditData.hstsStatus || 'N/A', 'Properly configured'],
        [
          'Mixed Content',
          auditData.mixedContent || 'N/A',
          'Resolve all issues',
        ],
        [
          'Security Headers',
          auditData.securityHeaders || 'N/A',
          'Implement best practices',
        ],
        [
          'Vulnerabilities',
          auditData.vulnerabilities || 'N/A',
          'Regular scanning required',
        ],
      ];

      doc.autoTable({
        startY: securityStartY + 10,
        head: [securityData[0]],
        body: securityData.slice(1),
        theme: 'grid',
        headStyles: { fillColor: [34, 197, 94] },
        styles: { fontSize: 10 },
        margin: { left: 20, right: 20 },
      });

      // Add SEO analysis
      const seoStartY = doc.lastAutoTable.finalY + 10;
      doc.setFontSize(16);
      doc.setTextColor(40, 40, 40);
      doc.text('SEO Analysis', 20, seoStartY);

      const seoData = [
        ['SEO Factor', 'Current', 'Recommendation'],
        ['Meta Title', auditData.metaTitle || 'N/A', 'Optimize for keywords'],
        [
          'Meta Description',
          auditData.metaDescription || 'N/A',
          'Compelling, 150-160 chars',
        ],
        [
          'Header Tags',
          auditData.headerStructure || 'N/A',
          'Proper H1-H6 hierarchy',
        ],
        [
          'Image Alt Text',
          auditData.imageAltText || 'N/A',
          'Descriptive, keyword-rich',
        ],
        ['Page Speed', auditData.pageSpeed || 'N/A', 'Under 3 seconds'],
      ];

      doc.autoTable({
        startY: seoStartY + 10,
        head: [seoData[0]],
        body: seoData.slice(1),
        theme: 'grid',
        headStyles: { fillColor: [245, 158, 11] },
        styles: { fontSize: 10 },
        margin: { left: 20, right: 20 },
      });

      // Add recommendations
      const recommendationsStartY = doc.lastAutoTable.finalY + 10;
      doc.setFontSize(16);
      doc.setTextColor(40, 40, 40);
      doc.text('Key Recommendations', 20, recommendationsStartY);

      const recommendations = [
        'Implement lazy loading for images and iframes to improve LCP',
        'Minimize JavaScript and CSS to reduce blocking resources',
        'Enable compression (Gzip/Brotli) to reduce payload sizes',
        'Implement proper caching strategies for static assets',
        'Optimize images with modern formats (WebP, AVIF)',
        'Fix any accessibility issues identified in the audit',
        'Improve Core Web Vitals scores for better user experience',
        'Regular security audits and updates to prevent vulnerabilities',
      ];

      let recY = recommendationsStartY + 10;
      recommendations.forEach((rec, index) => {
        doc.setFontSize(11);
        doc.setTextColor(60, 60, 60);
        doc.text(`${index + 1}. ${rec}`, 20, recY);
        recY += 7;
      });

      // Add conclusion
      const conclusionY = recY + 10;
      doc.setFontSize(14);
      doc.setTextColor(40, 40, 40);
      doc.text('Conclusion', 20, conclusionY);

      doc.setFontSize(11);
      doc.setTextColor(60, 60, 60);
      const conclusionText = `This technical audit reveals several opportunities for improvement that can significantly enhance your website's performance, security, and SEO. Implementing these recommendations will not only improve user experience but also drive better business outcomes. We recommend prioritizing the most critical issues first and implementing changes incrementally to ensure stability.`;

      doc.text(conclusionText, 20, conclusionY + 7, { maxWidth: 170 });

      // Add company information
      const pageHeight = doc.internal.pageSize.height;
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text(
        'Limitless Infotech Solution - Technical Audit Service',
        20,
        pageHeight - 30
      );
      doc.text(
        'Contact: Info@limitlessinfotech.com | +917710909492',
        20,
        pageHeight - 20
      );

      // Return the PDF as a blob
      const pdfBlob = doc.output('blob');
      resolve(pdfBlob);
    } catch (error) {
      console.error('Error generating PDF:', error);
      reject(error);
    }
  });
};

// Service for generating other types of reports
export const generateCustomReport = async reportData => {
  return new Promise((resolve, reject) => {
    try {
      const doc = new jsPDF();

      // Add title
      doc.setFontSize(22);
      doc.setTextColor(40, 40, 40);
      doc.text(reportData.title || 'Custom Report', 20, 30);

      // Add date
      doc.setFontSize(14);
      doc.setTextColor(100, 100, 100);
      doc.text(
        `Generated on: ${reportData.date || new Date().toLocaleDateString()}`,
        20,
        45
      );

      // Add content
      doc.setFontSize(12);
      doc.setTextColor(60, 60, 60);

      let currentY = 60;
      if (reportData.content) {
        // Split content into lines and add to document
        const splitText = doc.splitTextToSize(reportData.content, 170);
        doc.text(splitText, 20, currentY);
        currentY += splitText.length * 7 + 10;
      }

      if (reportData.data && Array.isArray(reportData.data)) {
        // Add table if data is provided
        doc.autoTable({
          startY: currentY,
          head: [reportData.headers || ['Field', 'Value']],
          body: reportData.data,
          theme: 'grid',
          headStyles: { fillColor: [59, 130, 246] },
          styles: { fontSize: 10 },
          margin: { left: 20, right: 20 },
        });
      }

      // Add company information
      const pageHeight = doc.internal.pageSize.height;
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text('Limitless Infotech Solution', 20, pageHeight - 30);
      doc.text(
        'Contact: Info@limitlessinfotech.com | +917710909492',
        20,
        pageHeight - 20
      );

      // Return the PDF as a blob
      const pdfBlob = doc.output('blob');
      resolve(pdfBlob);
    } catch (error) {
      console.error('Error generating custom PDF:', error);
      reject(error);
    }
  });
};

// Service to download PDF
export const downloadPDF = (pdfBlob, filename = 'report.pdf') => {
  const url = URL.createObjectURL(pdfBlob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
