// src/services/reportGenerationService.js
import jsPDF from 'jspdf';
import 'jspdf-autotable';

class ReportGenerationService {
  constructor() {
    // In a real implementation, this would connect to SendGrid or AWS SES
    // For now, we'll simulate the functionality
    this.emailServiceEnabled = false; // Set to true in production
  }

  // Generate the technical audit report as a PDF
  generateAuditReport(auditResults, url, email) {
    const doc = new jsPDF();
    
    // Add title page
    this.addTitlePage(doc, url, email);
    
    // Add executive summary
    this.addExecutiveSummary(doc, auditResults);
    
    // Add detailed metrics
    this.addDetailedMetrics(doc, auditResults);
    
    // Add security findings
    this.addSecurityFindings(doc, auditResults);
    
    // Add recommendations
    this.addRecommendations(doc, auditResults);
    
    // Add Limitless solution path
    this.addSolutionPath(doc, auditResults);
    
    // Return the PDF blob
    return doc.output('blob');
  }

  // Add title page to the PDF
  addTitlePage(doc, url, email) {
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;
    
    // Background
    doc.setFillColor(0, 35, 102); // Deep Blue (#002366)
    doc.rect(0, 0, pageWidth, pageHeight, 'F');
    
    // Title
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(28);
    doc.setFont(undefined, 'bold');
    doc.text('LIMITLESS', pageWidth / 2, 80, { align: 'center' });
    
    doc.setFontSize(18);
    doc.setFont(undefined, 'normal');
    doc.text('Technical Debt & Opportunity Report', pageWidth / 2, 100, { align: 'center' });
    
    // Subtitle
    doc.setFontSize(14);
    doc.text(`Website: ${url}`, pageWidth / 2, 130, { align: 'center' });
    doc.text(`Email: ${email}`, pageWidth / 2, 145, { align: 'center' });
    doc.text(`Date: ${new Date().toLocaleDateString()}`, pageWidth / 2, 160, { align: 'center' });
    
    // Limitless logo placeholder
    doc.setFillColor(212, 175, 55); // Royal Gold (#D4AF37)
    doc.circle(pageWidth / 2, 220, 30);
    doc.setFontSize(12);
    doc.text('LIMITLESS', pageWidth / 2, 260, { align: 'center' });
    
    // Footer
    doc.setFontSize(10);
    doc.text('Confidential - Limitless Infotech Solutions', pageWidth / 2, pageHeight - 20, { align: 'center' });
  }

  // Add executive summary
  addExecutiveSummary(doc, auditResults) {
    doc.addPage();
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(20);
    doc.setFont(undefined, 'bold');
    doc.text('Executive Summary', 20, 30);
    
    // Limitless Score
    doc.setFontSize(16);
    doc.setFont(undefined, 'bold');
    doc.text(`Limitless Score: ${auditResults.limitlessScore}/100`, 20, 50);
    
    // Score interpretation
    let scoreInterpretation = '';
    if (auditResults.limitlessScore >= 80) {
      scoreInterpretation = 'Excellent - Your website is performing at an elite level';
    } else if (auditResults.limitlessScore >= 60) {
      scoreInterpretation = 'Good - Your website has solid performance with room for improvement';
    } else {
      scoreInterpretation = 'Needs Attention - Significant improvements needed for optimal performance';
    }
    
    doc.setFontSize(12);
    doc.setFont(undefined, 'normal');
    doc.text(scoreInterpretation, 20, 65);
    
    // Key findings
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text('Key Findings', 20, 90);
    
    const findings = [
      `Performance Score: ${Math.max(0, Math.min(100, 100 - (auditResults.performance.lcp / 2500) * 100))}`,
      `SEO Score: ${auditResults.seo.score}`,
      `Accessibility Score: ${auditResults.accessibility.score}`,
      `Security Score: ${auditResults.security.overallScore}`,
      `Speed Score: ${Math.max(0, Math.min(100, 100 - (auditResults.speed.loadTime / 5) * 100))}`
    ];
    
    findings.forEach((finding, index) => {
      doc.text(`• ${finding}`, 25, 105 + (index * 10));
    });
  }

  // Add detailed metrics
  addDetailedMetrics(doc, auditResults) {
    const pageHeight = doc.internal.pageSize.height;
    let yPosition = 140;
    
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text('Detailed Metrics', 20, yPosition);
    
    yPosition += 20;
    
    // Performance metrics table
    doc.autoTable({
      startY: yPosition,
      head: [['Metric', 'Value', 'Status']],
      body: [
        ['Largest Contentful Paint (LCP)', `${auditResults.performance.lcp.toFixed(0)}ms`, this.getPerformanceStatus(auditResults.performance.lcp, 2500)],
        ['First Contentful Paint (FCP)', `${auditResults.performance.fcp.toFixed(0)}ms`, this.getPerformanceStatus(auditResults.performance.fcp, 1800)],
        ['Cumulative Layout Shift (CLS)', auditResults.performance.cls.toFixed(3), this.getPerformanceStatus(auditResults.performance.cls, 0.1)],
        ['First Input Delay (FID)', `${auditResults.performance.fid.toFixed(0)}ms`, this.getPerformanceStatus(auditResults.performance.fid, 100)],
        ['Speed Index', `${auditResults.performance.si.toFixed(0)}ms`, this.getPerformanceStatus(auditResults.performance.si, 3400)]
      ],
      theme: 'grid',
      styles: { fontSize: 10 },
      headStyles: { fillColor: [0, 35, 102] } // Deep Blue
    });
    
    yPosition = doc.lastAutoTable.finalY + 20;
    
    // SEO metrics
    if (yPosition > pageHeight - 50) {
      doc.addPage();
      yPosition = 30;
    }
    
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text('SEO Analysis', 20, yPosition);
    
    yPosition += 10;
    
    doc.autoTable({
      startY: yPosition,
      head: [['Category', 'Score', 'Issues']],
      body: [
        ['Overall SEO', `${auditResults.seo.score}/100`, `${auditResults.seo.issues.length} issues`]
      ],
      theme: 'grid',
      styles: { fontSize: 10 },
      headStyles: { fillColor: [0, 35, 102] } // Deep Blue
    });
    
    yPosition = doc.lastAutoTable.finalY + 10;
    
    // SEO issues
    doc.setFontSize(12);
    doc.setFont(undefined, 'normal');
    doc.text('SEO Issues Found:', 25, yPosition);
    
    yPosition += 10;
    auditResults.seo.issues.forEach((issue, index) => {
      doc.text(`• ${issue}`, 30, yPosition + (index * 5));
    });
    
    yPosition += auditResults.seo.issues.length * 5 + 10;
  }

  // Add security findings
  addSecurityFindings(doc, auditResults) {
    const pageHeight = doc.internal.pageSize.height;
    let yPosition = 30; // Start at top of new page
    
    doc.addPage();
    
    doc.setFontSize(18);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(0, 0, 0);
    doc.text('Security Findings', 20, yPosition);
    
    yPosition += 20;
    
    // Security metrics table
    doc.autoTable({
      startY: yPosition,
      head: [['Security Aspect', 'Status', 'Details']],
      body: [
        ['SSL Certificate', auditResults.security.sslValid ? 'Valid' : 'Invalid', `Grade: ${auditResults.security.grade}`],
        ['HTTPS Enforcement', 'Enabled', 'SSL/TLS configured'],
        ['HSTS Headers', auditResults.security.hsts ? 'Present' : 'Missing', 'HTTP Strict Transport Security'],
        ['Security Headers', `${4 - auditResults.security.headerIssues.length}/7 present`, 'X-Frame-Options, etc.']
      ],
      theme: 'grid',
      styles: { fontSize: 10 },
      headStyles: { fillColor: [0, 35, 102] } // Deep Blue
    });
    
    yPosition = doc.lastAutoTable.finalY + 20;
    
    // Security issues
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text('Security Issues Found:', 20, yPosition);
    
    yPosition += 10;
    
    // SSL issues
    if (auditResults.security.sslIssues.length > 0) {
      doc.setFontSize(12);
      doc.setFont(undefined, 'bold');
      doc.text('SSL Certificate Issues:', 25, yPosition);
      yPosition += 8;
      
      auditResults.security.sslIssues.forEach((issue, index) => {
        doc.text(`• ${issue}`, 30, yPosition + (index * 5));
      });
      yPosition += auditResults.security.sslIssues.length * 5 + 8;
    }
    
    // Header issues
    if (auditResults.security.headerIssues.length > 0) {
      doc.setFontSize(12);
      doc.setFont(undefined, 'bold');
      doc.text('Security Header Issues:', 25, yPosition);
      yPosition += 8;
      
      auditResults.security.headerIssues.forEach((issue, index) => {
        doc.text(`• ${issue}`, 30, yPosition + (index * 5));
      });
      yPosition += auditResults.security.headerIssues.length * 5 + 8;
    }
  }

  // Add recommendations
  addRecommendations(doc, auditResults) {
    doc.addPage();
    let yPosition = 30;
    
    doc.setFontSize(18);
    doc.setFont(undefined, 'bold');
    doc.text('Recommendations', 20, yPosition);
    
    yPosition += 20;
    
    // Performance recommendations
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text('Performance Recommendations:', 20, yPosition);
    
    yPosition += 10;
    
    const perfRecommendations = [
      'Optimize images and enable lazy loading',
      'Minimize JavaScript and CSS file sizes',
      'Implement browser caching strategies',
      'Use a Content Delivery Network (CDN)',
      'Optimize server response times'
    ];
    
    perfRecommendations.forEach((rec, index) => {
      doc.text(`• ${rec}`, 25, yPosition + (index * 5));
    });
    
    yPosition += perfRecommendations.length * 5 + 10;
    
    // Security recommendations
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text('Security Recommendations:', 20, yPosition);
    
    yPosition += 10;
    
    auditResults.security.recommendations.forEach((rec, index) => {
      doc.text(`• ${rec}`, 25, yPosition + (index * 5));
    });
    
    yPosition += auditResults.security.recommendations.length * 5 + 10;
    
    // SEO recommendations
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text('SEO Recommendations:', 20, yPosition);
    
    yPosition += 10;
    
    const seoRecommendations = [
      'Add missing meta descriptions',
      'Improve image alt text coverage',
      'Optimize heading structure',
      'Improve page loading speed',
      'Enhance mobile responsiveness'
    ];
    
    seoRecommendations.forEach((rec, index) => {
      doc.text(`• ${rec}`, 25, yPosition + (index * 5));
    });
  }

  // Add Limitless solution path
  addSolutionPath(doc, auditResults) {
    doc.addPage();
    let yPosition = 30;
    
    // Background for solution path
    doc.setFillColor(212, 175, 55, 15); // Light Royal Gold
    doc.rect(15, 25, doc.internal.pageSize.width - 30, 250, 'F');
    
    doc.setFontSize(20);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(0, 35, 102); // Deep Blue
    doc.text('Limitless Solution Path', 20, yPosition);
    
    yPosition += 20;
    
    doc.setFontSize(14);
    doc.setFont(undefined, 'normal');
    doc.text('How TrackIT can address your specific issues:', 20, yPosition);
    
    yPosition += 15;
    
    // Custom solutions based on audit results
    const solutions = [
      'Performance Optimization: Advanced caching and CDN integration',
      'Security Hardening: Enterprise-grade security protocols',
      'SEO Enhancement: Built-in optimization tools',
      'Accessibility Compliance: WCAG 2.1 AA standards',
      '24/7 Monitoring: Real-time performance tracking'
    ];
    
    solutions.forEach((solution, index) => {
      doc.setFont(undefined, 'bold');
      doc.text(`• ${solution}`, 25, yPosition + (index * 8));
    });
    
    yPosition += solutions.length * 8 + 15;
    
    // Call to action
    doc.setFontSize(16);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(212, 175, 55); // Royal Gold
    doc.text('Ready to elevate your digital presence?', 20, yPosition);
    
    yPosition += 10;
    
    doc.setFontSize(12);
    doc.setFont(undefined, 'normal');
    doc.setTextColor(0, 0, 0);
    doc.text('Contact Limitless Infotech Solutions today for a customized solution.', 20, yPosition);
    
    yPosition += 10;
    doc.text('Email: info@limitlessinfotech.com | Phone: +91 77109 09492', 20, yPosition);
  }

  // Helper function to determine performance status
  getPerformanceStatus(value, threshold) {
    if (value <= threshold) {
      return 'Good';
    } else if (value <= threshold * 1.5) {
      return 'Average';
    } else {
      return 'Poor';
    }
  }

  // Send the report via email
  async sendReport(reportBlob, email, url) {
    // In a real implementation, this would use SendGrid or AWS SES
    // For now, we'll simulate the email sending
    
    console.log(`Simulating email sending to: ${email}`);
    console.log(`Report generated for: ${url}`);
    
    // Create a download link for the PDF
    const downloadUrl = URL.createObjectURL(reportBlob);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = `Limitless_Technical_Audit_Report_${new Date().toISOString().split('T')[0]}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // In a real implementation, we would send the email here
    // This is where you'd integrate with SendGrid or AWS SES
    if (this.emailServiceEnabled) {
      // Send email using external service
      // await this.sendEmailViaService(reportBlob, email, url);
    }
    
    return {
      success: true,
      message: 'Report generated and download started. In production, this would be sent via email.',
      downloadUrl
    };
  }

  // Send email via external service (placeholder)
  async sendEmailViaService(reportBlob, email, url) {
    // This would contain the actual SendGrid/AWS SES integration
    // For now it's a placeholder
    console.log('Sending email via external service...');
    return { success: true, messageId: 'mock-message-id' };
  }
}

export default new ReportGenerationService();