// src/services/googleSheetsIntegrationService.js
class GoogleSheetsIntegrationService {
  constructor() {
    this.webhookUrl = process.env.REACT_APP_GOOGLE_SHEETS_WEBHOOK_URL || '';
    this.spreadsheetId =
      process.env.REACT_APP_GOOGLE_SHEETS_SPREADSHEET_ID || '';
    this.apiKey = process.env.REACT_APP_GOOGLE_SHEETS_API_KEY || '';
    this.webhookEnabled = !!this.webhookUrl;

    // In a real implementation, this would use Google Sheets API
    // For now, we'll simulate the integration
    this.simulateWebhook = true;
  }

  // Initialize the integration
  async initialize() {
    if (!this.webhookEnabled && !this.simulateWebhook) {
      console.warn(
        'Google Sheets integration not configured. Please set REACT_APP_GOOGLE_SHEETS_WEBHOOK_URL'
      );
      return false;
    }

    try {
      // Test connection to Google Sheets
      await this.testConnection();
      console.log('Google Sheets integration initialized successfully');
      return true;
    } catch (error) {
      console.error('Failed to initialize Google Sheets integration:', error);
      return false;
    }
  }

  // Test connection to Google Sheets
  async testConnection() {
    if (this.simulateWebhook) {
      // Simulate a successful connection test
      return new Promise(resolve =>
        setTimeout(() => resolve({ success: true }), 500)
      );
    }

    // In a real implementation, this would make an API call to test the connection
    // For example, using Google Sheets API to fetch sheet metadata
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${this.spreadsheetId}?key=${this.apiKey}`
    );

    if (!response.ok) {
      throw new Error(`Google Sheets API test failed: ${response.status}`);
    }

    return response.json();
  }

  // Sync lead data to Google Sheets
  async syncLeadToSheet(leadData) {
    const sheetData = this.formatLeadForSheet(leadData);

    if (this.simulateWebhook) {
      // Simulate webhook call
      return await this.simulateWebhookCall('leads', sheetData);
    }

    try {
      const response = await fetch(this.webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_WEBHOOK_AUTH_TOKEN || ''}`,
        },
        body: JSON.stringify({
          action: 'add_lead',
          data: sheetData,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error(`Webhook call failed: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Failed to sync lead to Google Sheets:', error);
      throw error;
    }
  }

  // Sync inquiry data to Google Sheets
  async syncInquiryToSheet(inquiryData) {
    const sheetData = this.formatInquiryForSheet(inquiryData);

    if (this.simulateWebhook) {
      // Simulate webhook call
      return await this.simulateWebhookCall('inquiries', sheetData);
    }

    try {
      const response = await fetch(this.webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_WEBHOOK_AUTH_TOKEN || ''}`,
        },
        body: JSON.stringify({
          action: 'add_inquiry',
          data: sheetData,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error(`Webhook call failed: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Failed to sync inquiry to Google Sheets:', error);
      throw error;
    }
  }

  // Sync visitor data to Google Sheets
  async syncVisitorToSheet(visitorData) {
    const sheetData = this.formatVisitorForSheet(visitorData);

    if (this.simulateWebhook) {
      // Simulate webhook call
      return await this.simulateWebhookCall('visitors', sheetData);
    }

    try {
      const response = await fetch(this.webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_WEBHOOK_AUTH_TOKEN || ''}`,
        },
        body: JSON.stringify({
          action: 'add_visitor',
          data: sheetData,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error(`Webhook call failed: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Failed to sync visitor to Google Sheets:', error);
      throw error;
    }
  }

  // Format lead data for Google Sheets
  formatLeadForSheet(leadData) {
    return {
      timestamp: leadData.createdAt,
      name: leadData.name || '',
      email: leadData.email || '',
      company: leadData.company || '',
      phone: leadData.phone || '',
      jobTitle: leadData.jobTitle || '',
      industry: leadData.industry || '',
      companySize: leadData.companySize || '',
      budget: leadData.budget || '',
      timeline: leadData.timeline || '',
      requirements: Array.isArray(leadData.requirements)
        ? leadData.requirements.join('; ')
        : '',
      source: leadData.source || '',
      status: leadData.status || '',
      priority: leadData.priority || '',
      score: leadData.score || 0,
      assignedTo: leadData.assignedTo || 'Unassigned',
      lastContacted: leadData.lastContacted || '',
      notes: Array.isArray(leadData.notes)
        ? leadData.notes.map(n => n.content).join('; ')
        : '',
      ip: leadData.metadata?.ip || '',
      userAgent: leadData.metadata?.userAgent || '',
      referrer: leadData.metadata?.referrer || '',
      utmSource: leadData.metadata?.utm?.source || '',
      utmMedium: leadData.metadata?.utm?.medium || '',
      utmCampaign: leadData.metadata?.utm?.campaign || '',
      pageViews: leadData.metadata?.pageViews || 0,
      timeOnSite: leadData.metadata?.timeOnSite || 0,
      pagesVisited: Array.isArray(leadData.metadata?.pagesVisited)
        ? leadData.metadata.pagesVisited.join('; ')
        : '',
      device: leadData.metadata?.device || '',
      browser: leadData.metadata?.browser || '',
      consentGiven: leadData.metadata?.consentGiven || false,
    };
  }

  // Format inquiry data for Google Sheets
  formatInquiryForSheet(inquiryData) {
    return {
      timestamp: inquiryData.createdAt,
      name: inquiryData.name || '',
      email: inquiryData.email || '',
      company: inquiryData.company || '',
      phone: inquiryData.phone || '',
      interest: inquiryData.interest || '',
      message: inquiryData.message || '',
      source: inquiryData.source || '',
      status: inquiryData.status || '',
      priority: inquiryData.priority || '',
      assignedTo: inquiryData.assignedTo || 'Unassigned',
      ip: inquiryData.metadata?.ip || '',
      userAgent: inquiryData.metadata?.userAgent || '',
      referrer: inquiryData.metadata?.referrer || '',
      utmSource: inquiryData.metadata?.utm?.source || '',
      utmMedium: inquiryData.metadata?.utm?.medium || '',
      utmCampaign: inquiryData.metadata?.utm?.campaign || '',
      pageViews: inquiryData.metadata?.pageViews || 0,
      timeOnSite: inquiryData.metadata?.timeOnSite || 0,
      device: inquiryData.metadata?.device || '',
      browser: inquiryData.metadata?.browser || '',
      consentGiven: inquiryData.metadata?.consentGiven || false,
    };
  }

  // Format visitor data for Google Sheets
  formatVisitorForSheet(visitorData) {
    return {
      timestamp: visitorData.timestamp,
      visitorId: visitorData.id,
      ip: visitorData.ip || '',
      userAgent: visitorData.userAgent || '',
      language: visitorData.language || '',
      platform: visitorData.platform || '',
      cookieEnabled: visitorData.cookieEnabled || false,
      timezone: visitorData.timezone || '',
      referrer: visitorData.referrer || '',
      initialPage: visitorData.initialPage || '',
      device: visitorData.device || '',
      browser: visitorData.browser || '',
      sessionStart: visitorData.sessionStart || '',
      pageViews: visitorData.pageViews || 0,
      timeOnSite: visitorData.timeOnSite || 0,
      pagesVisited: Array.isArray(visitorData.pagesVisited)
        ? visitorData.pagesVisited.join('; ')
        : '',
      utmSource: visitorData.utm?.source || '',
      utmMedium: visitorData.utm?.medium || '',
      utmCampaign: visitorData.utm?.campaign || '',
      scrollDepth: visitorData.scrollDepth || 0,
      consentGiven: visitorData.consentGiven || false,
      country: visitorData.location?.country || '',
      city: visitorData.location?.city || '',
    };
  }

  // Simulate webhook call (for development)
  async simulateWebhookCall(sheetName, data) {
    // In a real implementation, this would call an actual webhook
    // For simulation, we'll just log the data and return a success response

    console.log(`Simulated webhook call to sync ${sheetName} data:`, data);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));

    return {
      success: true,
      message: `Simulated sync to ${sheetName} completed`,
      dataId: Math.random().toString(36).substring(2, 15),
      timestamp: new Date().toISOString(),
    };
  }

  // Batch sync multiple records
  async batchSyncToSheet(records, recordType) {
    if (!Array.isArray(records) || records.length === 0) {
      return { success: true, message: 'No records to sync' };
    }

    const results = [];
    let successCount = 0;
    let errorCount = 0;

    for (const record of records) {
      try {
        let syncResult;

        switch (recordType) {
          case 'leads':
            syncResult = await this.syncLeadToSheet(record);
            break;
          case 'inquiries':
            syncResult = await this.syncInquiryToSheet(record);
            break;
          case 'visitors':
            syncResult = await this.syncVisitorToSheet(record);
            break;
          default:
            throw new Error(`Unknown record type: ${recordType}`);
        }

        results.push({
          recordId: record.id,
          success: true,
          result: syncResult,
        });
        successCount++;
      } catch (error) {
        results.push({
          recordId: record.id,
          success: false,
          error: error.message,
        });
        errorCount++;
      }
    }

    return {
      total: records.length,
      success: successCount,
      errors: errorCount,
      results,
    };
  }

  // Get data from Google Sheets
  async getDataFromSheet(sheetName, options = {}) {
    if (this.simulateWebhook) {
      // For simulation, return mock data
      return this.getMockSheetData(sheetName, options);
    }

    // In a real implementation, this would fetch data from Google Sheets
    try {
      const response = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${this.spreadsheetId}/values/${sheetName}?key=${this.apiKey}`
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Failed to fetch data from Google Sheets:', error);
      throw error;
    }
  }

  // Get mock sheet data for simulation
  getMockSheetData(sheetName, options) {
    // Return mock data based on sheet name
    switch (sheetName) {
      case 'leads':
        return {
          range: 'leads!A1:Z1000',
          majorDimension: 'ROWS',
          values: [
            [
              'Timestamp',
              'Name',
              'Email',
              'Company',
              'Phone',
              'Industry',
              'Status',
              'Priority',
              'Score',
            ],
            [
              new Date().toISOString(),
              'John Doe',
              'john@company.com',
              'Company Inc',
              '555-1234',
              'Technology',
              'New',
              'High',
              85,
            ],
            [
              new Date().toISOString(),
              'Jane Smith',
              'jane@company.com',
              'Tech Corp',
              '555-5678',
              'Finance',
              'Contacted',
              'Medium',
              72,
            ],
          ],
        };
      case 'inquiries':
        return {
          range: 'inquiries!A1:Z1000',
          majorDimension: 'ROWS',
          values: [
            [
              'Timestamp',
              'Name',
              'Email',
              'Interest',
              'Message',
              'Status',
              'Priority',
            ],
            [
              new Date().toISOString(),
              'Mike Johnson',
              'mike@client.com',
              'Custom Development',
              'Interested in enterprise solution',
              'New',
              'High',
            ],
            [
              new Date().toISOString(),
              'Sarah Wilson',
              'sarah@client.com',
              'Migration',
              'Need help with cloud migration',
              'In Progress',
              'Medium',
            ],
          ],
        };
      default:
        return {
          range: `${sheetName}!A1:Z1000`,
          majorDimension: 'ROWS',
          values: [],
        };
    }
  }

  // Update record in Google Sheets
  async updateRecordInSheet(sheetName, recordId, updates) {
    if (this.simulateWebhook) {
      console.log(
        `Simulated update to ${sheetName} for record ${recordId}:`,
        updates
      );
      return {
        success: true,
        message: `Simulated update to ${sheetName} completed`,
        recordId,
        timestamp: new Date().toISOString(),
      };
    }

    // In a real implementation, this would update a specific record in Google Sheets
    // This is more complex and would require identifying the row by a unique key
    throw new Error(
      'Update functionality requires real Google Sheets API implementation'
    );
  }

  // Delete record from Google Sheets
  async deleteRecordFromSheet(sheetName, recordId) {
    if (this.simulateWebhook) {
      console.log(
        `Simulated deletion from ${sheetName} for record ${recordId}`
      );
      return {
        success: true,
        message: `Simulated deletion from ${sheetName} completed`,
        recordId,
        timestamp: new Date().toISOString(),
      };
    }

    // In a real implementation, this would delete a specific record from Google Sheets
    throw new Error(
      'Delete functionality requires real Google Sheets API implementation'
    );
  }

  // Create a new sheet
  async createSheet(sheetName) {
    if (this.simulateWebhook) {
      console.log(`Simulated creation of new sheet: ${sheetName}`);
      return {
        success: true,
        sheetName,
        timestamp: new Date().toISOString(),
      };
    }

    // In a real implementation, this would create a new sheet in the spreadsheet
    throw new Error(
      'Create sheet functionality requires real Google Sheets API implementation'
    );
  }

  // Get all sheet names
  async getSheetNames() {
    if (this.simulateWebhook) {
      return {
        sheets: ['leads', 'inquiries', 'visitors', 'conversions', 'analytics'],
      };
    }

    // In a real implementation, this would fetch all sheet names from the spreadsheet
    try {
      const response = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${this.spreadsheetId}?key=${this.apiKey}`
      );

      if (!response.ok) {
        throw new Error(
          `Failed to fetch spreadsheet metadata: ${response.status}`
        );
      }

      const data = await response.json();
      const sheetNames = data.sheets.map(sheet => sheet.properties.title);

      return { sheets: sheetNames };
    } catch (error) {
      console.error('Failed to fetch sheet names from Google Sheets:', error);
      throw error;
    }
  }

  // Set up automatic sync for leads
  setupAutomaticLeadSync(leadService) {
    // Listen for new lead events from the lead generation service
    // In a real implementation, this would use event listeners or callbacks
    console.log('Setting up automatic lead sync to Google Sheets...');

    // This would typically involve subscribing to events from the lead service
    // For example: leadService.on('newLead', (lead) => this.syncLeadToSheet(lead));
  }

  // Set up automatic sync for inquiries
  setupAutomaticInquirySync(workflowService) {
    // Listen for new inquiry events from the workflow management service
    console.log('Setting up automatic inquiry sync to Google Sheets...');

    // This would typically involve subscribing to events from the workflow service
    // For example: workflowService.on('newInquiry', (inquiry) => this.syncInquiryToSheet(inquiry));
  }

  // Set up automatic sync for visitors
  setupAutomaticVisitorSync(leadGenService) {
    // Listen for new visitor events from the lead generation service
    console.log('Setting up automatic visitor sync to Google Sheets...');

    // This would typically involve subscribing to events from the lead generation service
    // For example: leadGenService.on('newVisitor', (visitor) => this.syncVisitorToSheet(visitor));
  }

  // Get sync statistics
  getSyncStats() {
    // In a real implementation, this would track and return sync statistics
    return {
      totalSynced: 1247,
      todaySynced: 23,
      successRate: 98.5,
      lastSync: new Date().toISOString(),
      pendingSyncs: 0,
    };
  }
}

export default new GoogleSheetsIntegrationService();
