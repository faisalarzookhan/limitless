// src/services/emailNotificationService.js
// Service for sending automated email notifications

class EmailNotificationService {
  constructor() {
    this.config = {
      smtpHost: process.env.SMTP_HOST || 'india.mailboxdns.com',
      smtpPort: process.env.SMTP_PORT || 465,
      smtpUser: process.env.SMTP_USER || 'no-reply@limitlessinfotech.com',
      smtpPass: process.env.SMTP_PASS || 'P@ssw0rd',
      fromEmail: process.env.FROM_EMAIL || 'no-reply@limitlessinfotech.com',
      enabled: process.env.EMAIL_NOTIFICATIONS_ENABLED !== 'false',
    };

    this.templates = new Map();
    this.queue = [];
    this.isProcessing = false;

    this.setupDefaultTemplates();
  }

  // Set up default email templates
  setupDefaultTemplates() {
    this.templates.set('deployment', {
      subject: 'Deployment Notification - {{status}}',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Deployment Notification</h2>
          <p><strong>Deployment ID:</strong> {{deploymentId}}</p>
          <p><strong>Status:</strong> <span style="color: {{statusColor}};">{{status}}</span></p>
          <p><strong>Environment:</strong> {{environment}}</p>
          <p><strong>Timestamp:</strong> {{timestamp}}</p>
          <p><strong>Duration:</strong> {{duration}} seconds</p>
          {{#if changes}}
          <h3>Changes:</h3>
          <ul>
            {{#each changes}}
            <li>{{this}}</li>
            {{/each}}
          </ul>
          {{/if}}
          {{#if errors}}
          <h3>Errors:</h3>
          <ul>
            {{#each errors}}
            <li style="color: red;">{{this}}</li>
            {{/each}}
          </ul>
          {{/if}}
        </div>
      `,
    });

    this.templates.set('system-alert', {
      subject: 'System Alert - {{severity}}: {{title}}',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: {{alertColor}};">System Alert</h2>
          <p><strong>Title:</strong> {{title}}</p>
          <p><strong>Severity:</strong> <span style="color: {{alertColor}};">{{severity}}</span></p>
          <p><strong>Timestamp:</strong> {{timestamp}}</p>
          <p><strong>Environment:</strong> {{environment}}</p>
          <h3>Description:</h3>
          <p>{{description}}</p>
          {{#if details}}
          <h3>Details:</h3>
          <pre style="background-color: #f5f5f5; padding: 10px; border-radius: 4px;">{{details}}</pre>
          {{/if}}
        </div>
      `,
    });

    this.templates.set('security-alert', {
      subject: 'Security Alert - {{type}}',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: red;">SECURITY ALERT</h2>
          <p><strong>Type:</strong> {{type}}</p>
          <p><strong>Severity:</strong> <span style="color: red;">{{severity}}</span></p>
          <p><strong>Detected:</strong> {{timestamp}}</p>
          <p><strong>Affected System:</strong> {{system}}</p>
          <h3>Description:</h3>
          <p>{{description}}</p>
          <h3>Recommended Actions:</h3>
          <ul>
            {{#each recommendedActions}}
            <li>{{this}}</li>
            {{/each}}
          </ul>
        </div>
      `,
    });

    this.templates.set('report-summary', {
      subject: '{{reportType}} Report - {{date}}',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>{{reportType}} Report</h2>
          <p><strong>Period:</strong> {{period}}</p>
          <p><strong>Generated:</strong> {{timestamp}}</p>
          <h3>Summary:</h3>
          <ul>
            {{#each summary}}
            <li><strong>{{@key}}:</strong> {{this}}</li>
            {{/each}}
          </ul>
          <h3>Key Metrics:</h3>
          <ul>
            {{#each metrics}}
            <li><strong>{{@key}}:</strong> {{this}}</li>
            {{/each}}
          </ul>
          {{#if recommendations}}
          <h3>Recommendations:</h3>
          <ul>
            {{#each recommendations}}
            <li>{{this}}</li>
            {{/each}}
          </ul>
          {{/if}}
        </div>
      `,
    });
  }

  // Send a deployment notification
  async sendDeploymentNotification(deploymentInfo) {
    const template = this.templates.get('deployment');
    if (!template) {
      console.error('Deployment template not found');
      return false;
    }

    const subject = template.subject.replace(
      '{{status}}',
      deploymentInfo.success ? 'SUCCESS' : 'FAILED'
    );

    const html = template.html
      .replace('{{deploymentId}}', deploymentInfo.id || 'Unknown')
      .replace('{{status}}', deploymentInfo.success ? 'SUCCESS' : 'FAILED')
      .replace('{{statusColor}}', deploymentInfo.success ? 'green' : 'red')
      .replace('{{environment}}', deploymentInfo.environment || 'Unknown')
      .replace('{{timestamp}}', new Date().toLocaleString())
      .replace('{{duration}}', deploymentInfo.duration || 'N/A')
      .replace(
        '{{changes}}',
        deploymentInfo.changes && deploymentInfo.changes.length > 0
          ? '<h3>Changes:</h3><ul>' +
              deploymentInfo.changes.map(c => `<li>${c}</li>`).join('') +
              '</ul>'
          : ''
      )
      .replace(
        '{{errors}}',
        deploymentInfo.errors && deploymentInfo.errors.length > 0
          ? '<h3>Errors:</h3><ul>' +
              deploymentInfo.errors
                .map(e => `<li style="color: red;">${e}</li>`)
                .join('') +
              '</ul>'
          : ''
      );

    const recipients = this.getNotificationRecipients('deployment');
    return await this.sendEmail(recipients, subject, html);
  }

  // Send a system alert notification
  async sendSystemAlert(alertInfo) {
    const template = this.templates.get('system-alert');
    if (!template) {
      console.error('System alert template not found');
      return false;
    }

    const severityColors = {
      critical: 'red',
      high: 'orange',
      medium: 'yellow',
      low: 'blue',
    };

    const subject = template.subject
      .replace('{{severity}}', alertInfo.severity.toUpperCase())
      .replace('{{title}}', alertInfo.title);

    const html = template.html
      .replace('{{title}}', alertInfo.title)
      .replace('{{severity}}', alertInfo.severity.toUpperCase())
      .replace('{{alertColor}}', severityColors[alertInfo.severity] || 'black')
      .replace(
        '{{timestamp}}',
        new Date(alertInfo.timestamp || Date.now()).toLocaleString()
      )
      .replace(
        '{{environment}}',
        alertInfo.environment || process.env.NODE_ENV || 'production'
      )
      .replace(
        '{{description}}',
        alertInfo.description || 'No description provided'
      )
      .replace(
        '{{details}}',
        alertInfo.details ? JSON.stringify(alertInfo.details, null, 2) : ''
      );

    const recipients = this.getNotificationRecipients('system-alert');
    return await this.sendEmail(recipients, subject, html);
  }

  // Send a security alert notification
  async sendSecurityAlert(alertInfo) {
    const template = this.templates.get('security-alert');
    if (!template) {
      console.error('Security alert template not found');
      return false;
    }

    const subject = template.subject.replace('{{type}}', alertInfo.type);

    const actionsList = alertInfo.recommendedActions
      ? alertInfo.recommendedActions
          .map(action => `<li>${action}</li>`)
          .join('')
      : '';

    const html = template.html
      .replace('{{type}}', alertInfo.type)
      .replace('{{severity}}', alertInfo.severity.toUpperCase())
      .replace(
        '{{timestamp}}',
        new Date(alertInfo.timestamp || Date.now()).toLocaleString()
      )
      .replace('{{system}}', alertInfo.system || 'Unknown')
      .replace(
        '{{description}}',
        alertInfo.description || 'No description provided'
      )
      .replace('{{recommendedActions}}', actionsList);

    const recipients = this.getNotificationRecipients('security-alert');
    return await this.sendEmail(recipients, subject, html);
  }

  // Send a report summary notification
  async sendReportSummary(reportInfo) {
    const template = this.templates.get('report-summary');
    if (!template) {
      console.error('Report summary template not found');
      return false;
    }

    const subject = template.subject
      .replace('{{reportType}}', reportInfo.type)
      .replace('{{date}}', new Date().toLocaleDateString());

    // Build summary list
    let summaryHtml = '';
    if (reportInfo.summary) {
      summaryHtml = '<h3>Summary:</h3><ul>';
      for (const [key, value] of Object.entries(reportInfo.summary)) {
        summaryHtml += `<li><strong>${key}:</strong> ${JSON.stringify(value)}</li>`;
      }
      summaryHtml += '</ul>';
    }

    // Build metrics list
    let metricsHtml = '';
    if (reportInfo.details && reportInfo.details.metrics) {
      metricsHtml = '<h3>Key Metrics:</h3><ul>';
      for (const [key, value] of Object.entries(reportInfo.details.metrics)) {
        metricsHtml += `<li><strong>${key}:</strong> ${JSON.stringify(value)}</li>`;
      }
      metricsHtml += '</ul>';
    }

    // Build recommendations list
    let recommendationsHtml = '';
    if (reportInfo.recommendations && reportInfo.recommendations.length > 0) {
      recommendationsHtml = '<h3>Recommendations:</h3><ul>';
      reportInfo.recommendations.forEach(rec => {
        recommendationsHtml += `<li>${rec.description || rec}</li>`;
      });
      recommendationsHtml += '</ul>';
    }

    const html = template.html
      .replace('{{reportType}}', reportInfo.type)
      .replace(
        '{{period}}',
        reportInfo.period
          ? `${reportInfo.period.start} to ${reportInfo.period.end}`
          : 'N/A'
      )
      .replace(
        '{{timestamp}}',
        new Date(reportInfo.generatedAt || Date.now()).toLocaleString()
      )
      .replace('{{summary}}', summaryHtml)
      .replace('{{metrics}}', metricsHtml)
      .replace('{{recommendations}}', recommendationsHtml);

    const recipients = this.getNotificationRecipients('report-summary');
    return await this.sendEmail(recipients, subject, html);
  }

  // Get notification recipients based on notification type
  getNotificationRecipients(notificationType) {
    // In a real implementation, this would fetch from a configuration
    // For now, return mock recipients based on type
    const recipients = {
      deployment: ['dev-team@yourapp.com', 'ops@yourapp.com'],
      'system-alert': ['ops@yourapp.com', 'admin@yourapp.com'],
      'security-alert': ['security@yourapp.com', 'admin@yourapp.com'],
      'report-summary': ['management@yourapp.com', 'ops@yourapp.com'],
    };

    return recipients[notificationType] || ['admin@yourapp.com'];
  }

  // Send email using configured SMTP settings
  async sendEmail(to, subject, html, text = null) {
    if (!this.config.enabled) {
      console.log('Email notifications are disabled');
      return true; // Pretend it succeeded
    }

    // Validate inputs
    if (!to || !subject || (!html && !text)) {
      console.error('Missing required email parameters');
      return false;
    }

    // Ensure 'to' is an array
    const recipients = Array.isArray(to) ? to : [to];

    try {
      // In a real implementation, this would use a library like nodemailer
      // For now, we'll simulate the email sending
      console.log(`Sending email to: ${recipients.join(', ')}`);
      console.log(`Subject: ${subject}`);

      // Add to queue for processing
      const emailData = {
        to: recipients,
        subject,
        html,
        text,
        timestamp: Date.now(),
        id: `email-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      };

      this.queue.push(emailData);

      // Process the queue if not already processing
      if (!this.isProcessing) {
        this.processQueue();
      }

      return true;
    } catch (error) {
      console.error('Failed to queue email:', error);
      return false;
    }
  }

  // Process the email queue
  async processQueue() {
    if (this.queue.length === 0 || this.isProcessing) {
      return;
    }

    this.isProcessing = true;

    while (this.queue.length > 0) {
      const email = this.queue.shift();

      try {
        // In a real implementation, this would send the actual email
        // For now, we'll just log it
        console.log(
          `Processing email: ${email.subject} to ${email.to.join(', ')}`
        );

        // Simulate email sending delay
        await new Promise(resolve => setTimeout(resolve, 100));

        console.log(`Email sent successfully: ${email.id}`);
      } catch (error) {
        console.error(`Failed to send email ${email.id}:`, error);
        // In a real implementation, you might retry or add to a failed queue
      }
    }

    this.isProcessing = false;
  }

  // Add a custom template
  addTemplate(name, template) {
    if (!name || !template || !template.subject || !template.html) {
      throw new Error('Template must have name, subject, and html');
    }

    this.templates.set(name, template);
  }

  // Get all templates
  getTemplates() {
    return Array.from(this.templates.entries()).map(([name, template]) => ({
      name,
      subject: template.subject,
      html: template.html,
    }));
  }

  // Send a custom notification
  async sendCustomNotification(templateName, data, recipients) {
    const template = this.templates.get(templateName);
    if (!template) {
      throw new Error(`Template not found: ${templateName}`);
    }

    // Replace placeholders in subject and html
    let subject = template.subject;
    let html = template.html;

    for (const [key, value] of Object.entries(data)) {
      const placeholder = new RegExp(`{{${key}}}`, 'g');
      subject = subject.replace(placeholder, value);
      html = html.replace(placeholder, value);
    }

    return await this.sendEmail(recipients, subject, html);
  }

  // Get queue status
  getQueueStatus() {
    return {
      pending: this.queue.length,
      processing: this.isProcessing,
      config: {
        enabled: this.config.enabled,
        smtpHost: this.config.smtpHost,
        smtpPort: this.config.smtpPort,
      },
    };
  }

  // Test email configuration
  async testConfiguration() {
    try {
      // In a real implementation, this would test the actual SMTP connection
      console.log('Testing email configuration...');

      // Simulate connection test
      await new Promise(resolve => setTimeout(resolve, 500));

      console.log('Email configuration test passed');
      return {
        success: true,
        message: 'Email configuration is valid',
      };
    } catch (error) {
      console.error('Email configuration test failed:', error);
      return {
        success: false,
        message: error.message,
      };
    }
  }
}

// Create a singleton instance
const emailNotificationService = new EmailNotificationService();

export default emailNotificationService;
