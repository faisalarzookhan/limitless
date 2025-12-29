// src/services/securityScanService.js
import { getPerformanceMetrics } from '../utils/performance';

class SecurityScanService {
  constructor() {
    this.scanResults = {};
  }

  // Mock function to simulate SSL certificate scanning
  async scanSSLCertificate(url) {
    // Extract hostname from URL
    const hostname = new URL(url).hostname;

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Generate mock SSL certificate data
    const now = new Date();
    const validFrom = new Date(
      now.getTime() - Math.random() * 365 * 24 * 60 * 60 * 1000
    ); // Random date in the past year
    const validTo = new Date(
      now.getTime() + (Math.random() * 365 + 90) * 24 * 60 * 60 * 1000
    ); // Valid for 90 days to 1 year

    const sslData = {
      hostname,
      valid: Math.random() > 0.1, // 90% valid
      validFrom: validFrom.toISOString(),
      validTo: validTo.toISOString(),
      issuer: this.getRandomIssuer(),
      protocol: this.getRandomProtocol(),
      cipher: this.getRandomCipher(),
      hsts: Math.random() > 0.3, // 70% have HSTS
      hstsMaxAge: Math.random() > 0.5 ? 31536000 : 0, // 1 year or 0
      sslGrade: this.getRandomSSLGrade(),
      issues: this.generateSSLIssues(),
      // Additional security checks
      sslVersion: this.getRandomSSLVersion(),
      certificateTransparency: Math.random() > 0.4, // 60% support CT
      ocspStapling: Math.random() > 0.5, // 50% support OCSP
      publicKeySize: this.getRandomPublicKeySize(),
      signatureAlgorithm: this.getRandomSignatureAlgorithm(),
      certificateChain: this.generateCertificateChain(),
    };

    this.scanResults[hostname] = sslData;
    return sslData;
  }

  // Mock function to simulate security header scanning
  async scanSecurityHeaders(url) {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const headersData = {
      xFrameOptions: Math.random() > 0.4, // 60% have X-Frame-Options
      contentTypeOptions: Math.random() > 0.3, // 70% have X-Content-Type-Options
      xssProtection: Math.random() > 0.5, // 50% have XSS protection
      strictTransportSecurity: Math.random() > 0.3, // 70% have HSTS
      contentSecurityPolicy: Math.random() > 0.6, // 40% have CSP
      referrerPolicy: Math.random() > 0.5, // 50% have Referrer Policy
      permissionsPolicy: Math.random() > 0.7, // 30% have Permissions Policy
      crossOriginResourcePolicy: Math.random() > 0.6, // 40% have CORP
      crossOriginEmbedderPolicy: Math.random() > 0.7, // 30% have COEP
      crossOriginOpenerPolicy: Math.random() > 0.65, // 35% have COOP
      issues: this.generateHeaderIssues(),
    };

    return headersData;
  }

  // Mock function to simulate overall security scan
  async performSecurityScan(url) {
    const sslScan = await this.scanSSLCertificate(url);
    const headerScan = await this.scanSecurityHeaders(url);

    const overallScore = this.calculateSecurityScore(sslScan, headerScan);

    return {
      url,
      timestamp: new Date().toISOString(),
      ssl: sslScan,
      headers: headerScan,
      overallScore,
      securityGrade: this.getSecurityGrade(overallScore),
      recommendations: this.generateRecommendations(sslScan, headerScan),
    };
  }

  // Helper methods
  getRandomIssuer() {
    const issuers = [
      "Let's Encrypt",
      'DigiCert Inc',
      'GlobalSign nv-sa',
      'Sectigo Limited',
      'GoDaddy.com, Inc.',
      'Comodo CA Limited',
      'Entrust, Inc.',
    ];
    return issuers[Math.floor(Math.random() * issuers.length)];
  }

  getRandomProtocol() {
    const protocols = ['TLS 1.3', 'TLS 1.2', 'TLS 1.1', 'TLS 1.0'];
    return protocols[Math.floor(Math.random() * protocols.length)];
  }

  getRandomCipher() {
    const ciphers = [
      'TLS_AES_256_GCM_SHA384',
      'TLS_CHACHA20_POLY1305_SHA256',
      'TLS_AES_128_GCM_SHA256',
      'ECDHE-RSA-AES256-GCM-SHA384',
      'ECDHE-RSA-AES128-GCM-SHA256',
    ];
    return ciphers[Math.floor(Math.random() * ciphers.length)];
  }

  getRandomSSLGrade() {
    const grades = ['A+', 'A', 'A-', 'B', 'C', 'D', 'F'];
    return grades[Math.floor(Math.random() * grades.length)];
  }

  getRandomSSLVersion() {
    const versions = [
      'TLS 1.3',
      'TLS 1.2',
      'TLS 1.1',
      'TLS 1.0',
      'SSL 3.0',
      'SSL 2.0',
    ];
    // Prioritize newer versions
    if (Math.random() > 0.3) return 'TLS 1.3';
    if (Math.random() > 0.5) return 'TLS 1.2';
    return versions[Math.floor(Math.random() * 3) + 2]; // Return older versions
  }

  getRandomPublicKeySize() {
    // Common key sizes
    const sizes = [1024, 2048, 3072, 4096];
    // Prioritize larger, more secure sizes
    if (Math.random() > 0.2) return 2048;
    if (Math.random() > 0.5) return 4096;
    return sizes[Math.floor(Math.random() * 2)]; // 1024 or 2048
  }

  getRandomSignatureAlgorithm() {
    const algorithms = [
      'SHA256withRSA',
      'SHA384withRSA',
      'SHA512withRSA',
      'SHA1withRSA', // Less secure
      'MD5withRSA', // Insecure
    ];
    return algorithms[Math.floor(Math.random() * algorithms.length)];
  }

  generateCertificateChain() {
    // Generate a mock certificate chain
    const chainLength = Math.floor(Math.random() * 3) + 1; // 1-3 certificates
    const chain = [];

    for (let i = 0; i < chainLength; i++) {
      chain.push({
        subject: `CN=Certificate-${i}`,
        issuer: i === 0 ? 'CN=Root-CA' : `CN=Intermediate-${i - 1}`,
        validFrom: new Date(
          Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000
        ).toISOString(),
        validTo: new Date(
          Date.now() + Math.random() * 365 * 24 * 60 * 60 * 1000
        ).toISOString(),
        publicKeySize: this.getRandomPublicKeySize(),
        signatureAlgorithm: this.getRandomSignatureAlgorithm(),
      });
    }

    return chain;
  }

  generateSSLIssues() {
    const issues = [];

    if (Math.random() > 0.7) issues.push('Certificate is self-signed');
    if (Math.random() > 0.8)
      issues.push('Certificate uses weak signature algorithm');
    if (Math.random() > 0.85) issues.push('Certificate has expired');
    if (Math.random() > 0.75) issues.push('Certificate is about to expire');
    if (Math.random() > 0.8) issues.push('Certificate does not match hostname');
    if (Math.random() > 0.9) issues.push('Weak cipher suite detected');

    return issues;
  }

  generateHeaderIssues() {
    const issues = [];

    if (Math.random() > 0.6) issues.push('Missing X-Frame-Options header');
    if (Math.random() > 0.5)
      issues.push('Missing X-Content-Type-Options header');
    if (Math.random() > 0.6) issues.push('Missing XSS protection header');
    if (Math.random() > 0.5)
      issues.push('Missing Strict-Transport-Security header');
    if (Math.random() > 0.7)
      issues.push('Missing Content-Security-Policy header');
    if (Math.random() > 0.6) issues.push('Missing Referrer-Policy header');
    if (Math.random() > 0.65)
      issues.push('Missing Cross-Origin Resource Policy header');
    if (Math.random() > 0.7)
      issues.push('Missing Cross-Origin Embedder Policy header');
    if (Math.random() > 0.65)
      issues.push('Missing Cross-Origin Opener Policy header');

    // CSP-specific issues
    if (Math.random() > 0.8)
      issues.push('Content-Security-Policy: Wildcard directives detected');
    if (Math.random() > 0.75)
      issues.push('Content-Security-Policy: Unsafe inline scripts allowed');
    if (Math.random() > 0.85)
      issues.push('Content-Security-Policy: Unsafe eval allowed');
    if (Math.random() > 0.7)
      issues.push('Content-Security-Policy: Overly permissive image sources');

    return issues;
  }

  calculateSecurityScore(sslData, headerData) {
    let score = 100;

    // SSL score adjustments
    if (!sslData.valid) score -= 30;
    if (!sslData.hsts) score -= 15;
    if (sslData.sslGrade === 'F') score -= 25;
    else if (sslData.sslGrade === 'D') score -= 15;
    else if (sslData.sslGrade === 'C') score -= 10;
    else if (sslData.sslGrade === 'B') score -= 5;

    // Header score adjustments
    if (!headerData.xFrameOptions) score -= 5;
    if (!headerData.contentTypeOptions) score -= 5;
    if (!headerData.xssProtection) score -= 5;
    if (!headerData.strictTransportSecurity) score -= 10;
    if (!headerData.contentSecurityPolicy) score -= 15;
    if (!headerData.referrerPolicy) score -= 3;

    // Ensure score is between 0 and 100
    return Math.max(0, Math.min(100, Math.round(score)));
  }

  getSecurityGrade(score) {
    if (score >= 90) return 'A+';
    if (score >= 80) return 'A';
    if (score >= 70) return 'B';
    if (score >= 60) return 'C';
    if (score >= 50) return 'D';
    return 'F';
  }

  generateRecommendations(sslData, headerData) {
    const recommendations = [];

    if (!sslData.hsts) {
      recommendations.push(
        'Implement HTTP Strict Transport Security (HSTS) to force HTTPS connections'
      );
    }

    if (!headerData.contentSecurityPolicy) {
      recommendations.push(
        'Add Content Security Policy (CSP) header to prevent XSS attacks'
      );
    }

    if (!headerData.xFrameOptions) {
      recommendations.push(
        'Add X-Frame-Options header to prevent clickjacking attacks'
      );
    }

    if (!headerData.xssProtection) {
      recommendations.push(
        'Enable XSS protection headers to prevent cross-site scripting'
      );
    }

    if (sslData.sslGrade === 'F' || sslData.sslGrade === 'D') {
      recommendations.push(
        'Upgrade your SSL certificate to improve security grade'
      );
    }

    if (sslData.issues.length > 0) {
      recommendations.push('Address SSL certificate issues immediately');
    }

    return recommendations;
  }

  // Get cached scan results
  getScanResults(hostname) {
    return this.scanResults[hostname];
  }
}

export default new SecurityScanService();
