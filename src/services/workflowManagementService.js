// src/services/workflowManagementService.js
class WorkflowManagementService {
  constructor() {
    this.inquiries = new Map();
    this.workflows = new Map();
    this.templates = new Map();
    this.automationRules = new Map();
    this.emailQueue = [];
    
    // Initialize default templates
    this.initializeDefaultTemplates();
  }

  // Initialize default email templates
  initializeDefaultTemplates() {
    const defaultTemplates = {
      'inquiry_confirmation': {
        id: 'inquiry_confirmation',
        name: 'Inquiry Confirmation',
        subject: 'Thank You for Your Inquiry',
        body: `
          <p>Dear {{name}},</p>
          
          <p>Thank you for contacting Limitless Infotech Solutions. We have received your inquiry and will respond within 24 hours.</p>
          
          <p>We appreciate your interest in our services and look forward to discussing how we can help your business achieve its goals.</p>
          
          <p>Best regards,<br>
          The Limitless Infotech Team</p>
        `,
        type: 'no-reply',
        createdAt: new Date().toISOString()
      },
      'new_lead_alert': {
        id: 'new_lead_alert',
        name: 'New Lead Alert',
        subject: 'New Lead: {{company}} - {{email}}',
        body: `
          <p>New lead received:</p>
          
          <ul>
            <li><strong>Name:</strong> {{name}}</li>
            <li><strong>Email:</strong> {{email}}</li>
            <li><strong>Company:</strong> {{company}}</li>
            <li><strong>Phone:</strong> {{phone}}</li>
            <li><strong>Interest:</strong> {{interest}}</li>
            <li><strong>Message:</strong> {{message}}</li>
          </ul>
          
          <p>Please follow up within 2 hours.</p>
        `,
        type: 'internal',
        createdAt: new Date().toISOString()
      },
      'demo_scheduling': {
        id: 'demo_scheduling',
        name: 'Demo Scheduling',
        subject: 'Schedule Your Personalized Demo',
        body: `
          <p>Hello {{name}},</p>
          
          <p>Thank you for your interest in our {{product}} solution. We'd love to show you how our platform can transform your business.</p>
          
          <p>Please click below to schedule a personalized demo at your convenience:</p>
          
          <p><a href="{{calendar_link}}" style="background-color: #002366; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">Schedule Demo</a></p>
          
          <p>We look forward to connecting with you soon!</p>
          
          <p>Best regards,<br>
          The Limitless Infotech Team</p>
        `,
        type: 'follow-up',
        createdAt: new Date().toISOString()
      }
    };

    defaultTemplates.forEach((template, key) => {
      this.templates.set(key, template);
    });
  }

  // Create a new inquiry
  async createInquiry(inquiryData) {
    const inquiryId = this.generateId();
    
    const inquiry = {
      id: inquiryId,
      name: inquiryData.name,
      email: inquiryData.email,
      company: inquiryData.company || '',
      phone: inquiryData.phone || '',
      interest: inquiryData.interest || 'General Inquiry',
      message: inquiryData.message || '',
      source: inquiryData.source || 'website',
      status: 'new',
      priority: this.calculatePriority(inquiryData),
      assignedTo: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      metadata: {
        ip: inquiryData.ip || '',
        userAgent: inquiryData.userAgent || '',
        referrer: inquiryData.referrer || '',
        utm: inquiryData.utm || {},
        pageViews: inquiryData.pageViews || 0,
        timeOnSite: inquiryData.timeOnSite || 0,
        consentGiven: inquiryData.consentGiven || false
      }
    };

    // Store the inquiry
    this.inquiries.set(inquiryId, inquiry);

    // Trigger workflow automation
    await this.triggerWorkflow('new_inquiry', inquiry);

    // Send confirmation email
    await this.sendEmailTemplate('inquiry_confirmation', inquiry);

    // Send internal alert
    await this.sendEmailTemplate('new_lead_alert', inquiry);

    return inquiry;
  }

  // Calculate inquiry priority based on various factors
  calculatePriority(inquiryData) {
    let priority = 1; // Default low priority

    // Higher priority for corporate emails
    if (this.isCorporateEmail(inquiryData.email)) {
      priority += 2;
    }

    // Higher priority for larger companies
    if (inquiryData.company && inquiryData.company.length > 10) {
      priority += 1;
    }

    // Higher priority for specific interest areas
    const highPriorityInterests = ['Enterprise', 'Custom Development', 'Migration', 'Security', 'Audit'];
    if (highPriorityInterests.includes(inquiryData.interest)) {
      priority += 2;
    }

    // Higher priority for longer messages
    if (inquiryData.message && inquiryData.message.length > 100) {
      priority += 1;
    }

    // Priority levels: low (1-2), medium (3-4), high (5+)
    if (priority >= 5) return 'high';
    if (priority >= 3) return 'medium';
    return 'low';
  }

  // Check if email is from a corporate domain
  isCorporateEmail(email) {
    const personalDomains = [
      'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 
      'icloud.com', 'aol.com', 'protonmail.com', 'tutanota.com'
    ];
    
    const domain = email.split('@')[1]?.toLowerCase();
    return domain && !personalDomains.includes(domain);
  }

  // Update inquiry status
  async updateInquiryStatus(inquiryId, status, notes = '') {
    const inquiry = this.inquiries.get(inquiryId);
    if (!inquiry) {
      throw new Error(`Inquiry with ID ${inquiryId} not found`);
    }

    const oldStatus = inquiry.status;
    inquiry.status = status;
    inquiry.updatedAt = new Date().toISOString();
    inquiry.statusHistory = inquiry.statusHistory || [];
    inquiry.statusHistory.push({
      status,
      timestamp: new Date().toISOString(),
      notes
    });

    // Trigger workflow based on status change
    await this.triggerWorkflow(`status_change_${oldStatus}_to_${status}`, inquiry);

    return inquiry;
  }

  // Assign inquiry to a team member
  async assignInquiry(inquiryId, assigneeId, notes = '') {
    const inquiry = this.inquiries.get(inquiryId);
    if (!inquiry) {
      throw new Error(`Inquiry with ID ${inquiryId} not found`);
    }

    inquiry.assignedTo = assigneeId;
    inquiry.updatedAt = new Date().toISOString();
    inquiry.assignmentHistory = inquiry.assignmentHistory || [];
    inquiry.assignmentHistory.push({
      assigneeId,
      timestamp: new Date().toISOString(),
      notes
    });

    // Send assignment notification
    await this.sendEmailTemplate('new_assignment', {
      ...inquiry,
      assigneeId
    });

    return inquiry;
  }

  // Create a workflow
  createWorkflow(workflowData) {
    const workflowId = this.generateId();
    
    const workflow = {
      id: workflowId,
      name: workflowData.name,
      description: workflowData.description,
      trigger: workflowData.trigger,
      conditions: workflowData.conditions || [],
      actions: workflowData.actions || [],
      active: workflowData.active !== false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    this.workflows.set(workflowId, workflow);
    return workflow;
  }

  // Trigger a workflow
  async triggerWorkflow(triggerName, payload) {
    const applicableWorkflows = Array.from(this.workflows.values())
      .filter(workflow => 
        workflow.active && 
        workflow.trigger === triggerName &&
        this.evaluateConditions(workflow.conditions, payload)
      );

    for (const workflow of applicableWorkflows) {
      await this.executeWorkflowActions(workflow, payload);
    }
  }

  // Evaluate workflow conditions
  evaluateConditions(conditions, payload) {
    if (!conditions || conditions.length === 0) {
      return true;
    }

    return conditions.every(condition => {
      const value = this.getNestedValue(payload, condition.field);
      
      switch (condition.operator) {
        case 'equals':
          return value === condition.value;
        case 'not_equals':
          return value !== condition.value;
        case 'contains':
          return value && value.includes(condition.value);
        case 'greater_than':
          return value > condition.value;
        case 'less_than':
          return value < condition.value;
        case 'in':
          return condition.value.includes(value);
        default:
          return true;
      }
    });
  }

  // Get nested value from object
  getNestedValue(obj, path) {
    return path.split('.').reduce((current, key) => current?.[key], obj);
  }

  // Execute workflow actions
  async executeWorkflowActions(workflow, payload) {
    for (const action of workflow.actions) {
      await this.executeAction(action, payload);
    }
  }

  // Execute a single action
  async executeAction(action, payload) {
    switch (action.type) {
      case 'send_email':
        await this.sendEmailAction(action, payload);
        break;
      case 'update_status':
        await this.updateInquiryStatus(payload.id, action.status, action.notes);
        break;
      case 'assign_to':
        await this.assignInquiry(payload.id, action.assigneeId, action.notes);
        break;
      case 'create_task':
        await this.createTaskFromInquiry(payload, action);
        break;
      case 'add_note':
        await this.addNoteToInquiry(payload.id, action.note);
        break;
      default:
        console.warn(`Unknown action type: ${action.type}`);
    }
  }

  // Send email action
  async sendEmailAction(action, payload) {
    if (action.templateId) {
      await this.sendEmailTemplate(action.templateId, payload);
    } else {
      await this.sendEmail({
        to: action.to || payload.email,
        subject: action.subject,
        body: action.body,
        type: action.type || 'custom'
      });
    }
  }

  // Send email using template
  async sendEmailTemplate(templateId, data) {
    const template = this.templates.get(templateId);
    if (!template) {
      console.error(`Template ${templateId} not found`);
      return;
    }

    // Replace placeholders in template with actual data
    const subject = this.replacePlaceholders(template.subject, data);
    const body = this.replacePlaceholders(template.body, data);

    await this.sendEmail({
      to: data.email,
      subject,
      body,
      type: template.type
    });
  }

  // Replace placeholders in text
  replacePlaceholders(text, data) {
    return text.replace(/\{\{(\w+)\}\}/g, (match, key) => {
      return data[key] || match;
    });
  }

  // Send email (simulated)
  async sendEmail(emailData) {
    // In a real implementation, this would use SendGrid, AWS SES, or similar
    console.log('Sending email:', emailData);
    
    // Add to email queue for processing
    this.emailQueue.push({
      ...emailData,
      id: this.generateId(),
      sentAt: new Date().toISOString(),
      status: 'sent'
    });
  }

  // Create task from inquiry
  async createTaskFromInquiry(inquiry, action) {
    // This would create a task in the system
    console.log('Creating task from inquiry:', inquiry.id, action);
    
    // In a real implementation, this would create a task in the task management system
    return {
      id: this.generateId(),
      inquiryId: inquiry.id,
      title: action.title || `Follow up with ${inquiry.name}`,
      description: action.description || inquiry.message,
      assignedTo: action.assigneeId,
      dueDate: action.dueDate,
      priority: inquiry.priority,
      createdAt: new Date().toISOString()
    };
  }

  // Add note to inquiry
  async addNoteToInquiry(inquiryId, note) {
    const inquiry = this.inquiries.get(inquiryId);
    if (!inquiry) {
      throw new Error(`Inquiry with ID ${inquiryId} not found`);
    }

    inquiry.notes = inquiry.notes || [];
    inquiry.notes.push({
      id: this.generateId(),
      content: note,
      author: 'system',
      timestamp: new Date().toISOString()
    });

    inquiry.updatedAt = new Date().toISOString();
  }

  // Get inquiry by ID
  getInquiry(inquiryId) {
    return this.inquiries.get(inquiryId);
  }

  // Get all inquiries with optional filtering
  getInquiries(filters = {}) {
    let inquiries = Array.from(this.inquiries.values());

    if (filters.status) {
      inquiries = inquiries.filter(inquiry => inquiry.status === filters.status);
    }

    if (filters.priority) {
      inquiries = inquiries.filter(inquiry => inquiry.priority === filters.priority);
    }

    if (filters.assignedTo) {
      inquiries = inquiries.filter(inquiry => inquiry.assignedTo === filters.assignedTo);
    }

    if (filters.dateFrom) {
      const dateFrom = new Date(filters.dateFrom);
      inquiries = inquiries.filter(inquiry => new Date(inquiry.createdAt) >= dateFrom);
    }

    if (filters.dateTo) {
      const dateTo = new Date(filters.dateTo);
      inquiries = inquiries.filter(inquiry => new Date(inquiry.createdAt) <= dateTo);
    }

    // Sort by creation date (newest first)
    inquiries.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return inquiries;
  }

  // Create automation rule
  createAutomationRule(ruleData) {
    const ruleId = this.generateId();
    
    const rule = {
      id: ruleId,
      name: ruleData.name,
      description: ruleData.description,
      conditions: ruleData.conditions,
      actions: ruleData.actions,
      active: ruleData.active !== false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    this.automationRules.set(ruleId, rule);
    return rule;
  }

  // Process automation rules for an inquiry
  async processAutomationRules(inquiry) {
    const applicableRules = Array.from(this.automationRules.values())
      .filter(rule => 
        rule.active && 
        this.evaluateConditions(rule.conditions, inquiry)
      );

    for (const rule of applicableRules) {
      await this.executeWorkflowActions(rule, inquiry);
    }
  }

  // Generate unique ID
  generateId() {
    return Math.random().toString(36).substring(2, 15) + Date.now().toString(36);
  }

  // Get workflow statistics
  getWorkflowStats() {
    const inquiries = Array.from(this.inquiries.values());
    
    return {
      totalInquiries: inquiries.length,
      newInquiries: inquiries.filter(i => i.status === 'new').length,
      inProgressInquiries: inquiries.filter(i => i.status === 'in-progress').length,
      resolvedInquiries: inquiries.filter(i => i.status === 'resolved').length,
      highPriorityInquiries: inquiries.filter(i => i.priority === 'high').length,
      averageResponseTime: this.calculateAverageResponseTime(inquiries),
      conversionRate: this.calculateConversionRate(inquiries)
    };
  }

  // Calculate average response time
  calculateAverageResponseTime(inquiries) {
    // This would calculate the average time from inquiry to first response
    return '2.5 hours'; // Mock value
  }

  // Calculate conversion rate
  calculateConversionRate(inquiries) {
    // This would calculate the percentage of inquiries that resulted in business
    return '15%'; // Mock value
  }

  // Export inquiries to CSV
  exportInquiriesToCSV(filters = {}) {
    const inquiries = this.getInquiries(filters);
    
    // CSV headers
    const headers = [
      'ID', 'Name', 'Email', 'Company', 'Phone', 'Interest', 
      'Message', 'Status', 'Priority', 'Assigned To', 'Created At'
    ];
    
    // CSV rows
    const rows = inquiries.map(inquiry => [
      inquiry.id,
      inquiry.name,
      inquiry.email,
      inquiry.company,
      inquiry.phone,
      inquiry.interest,
      inquiry.message,
      inquiry.status,
      inquiry.priority,
      inquiry.assignedTo || 'Unassigned',
      inquiry.createdAt
    ]);
    
    // Combine headers and rows
    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(field => `"${field}"`).join(','))
    ].join('\n');
    
    return csvContent;
  }
}

export default new WorkflowManagementService();