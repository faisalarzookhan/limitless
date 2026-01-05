// src/services/dataSyncService.js
// Service for automated data synchronization and fetching

class DataSyncService {
  constructor() {
    this.syncJobs = new Map();
    this.syncHistory = [];
    this.isSyncing = false;
    this.retryAttempts = 3;
    this.retryDelay = 5000; // 5 seconds

    this.sources = new Map();
    this.destinations = new Map();
  }

  // Register a data source
  registerSource(name, config) {
    this.sources.set(name, {
      name,
      ...config,
      lastSync: null,
      status: 'registered',
    });
  }

  // Register a data destination
  registerDestination(name, config) {
    this.destinations.set(name, {
      name,
      ...config,
      lastSync: null,
      status: 'registered',
    });
  }

  // Create a synchronization job
  createSyncJob(jobConfig) {
    const job = {
      id:
        jobConfig.id ||
        `sync-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      name: jobConfig.name,
      source: jobConfig.source,
      destination: jobConfig.destination,
      schedule: jobConfig.schedule || null, // Cron-like schedule
      transform: jobConfig.transform || null,
      filter: jobConfig.filter || null,
      enabled: jobConfig.enabled !== false,
      lastRun: null,
      nextRun: jobConfig.schedule
        ? this.calculateNextRun(jobConfig.schedule)
        : null,
      status: 'created',
      stats: {
        totalSynced: 0,
        totalErrors: 0,
        lastSyncDuration: 0,
      },
    };

    this.syncJobs.set(job.id, job);
    return job;
  }

  // Calculate next run time based on schedule
  calculateNextRun(schedule) {
    // Simple implementation - in a real app, use a cron parser
    const now = new Date();
    let nextTime = new Date(now);

    if (schedule === '*/5 * * * *') {
      // Every 5 minutes
      nextTime.setMinutes(nextTime.getMinutes() + 5);
      nextTime.setSeconds(0);
      nextTime.setMilliseconds(0);
    } else if (schedule === '0 * * * *') {
      // Hourly
      nextTime.setHours(nextTime.getHours() + 1);
      nextTime.setMinutes(0);
      nextTime.setSeconds(0);
      nextTime.setMilliseconds(0);
    } else if (schedule === '0 0 * * *') {
      // Daily at midnight
      nextTime.setDate(nextTime.getDate() + 1);
      nextTime.setHours(0);
      nextTime.setMinutes(0);
      nextTime.setSeconds(0);
      nextTime.setMilliseconds(0);
    } else {
      // Default to 1 hour from now
      nextTime.setHours(nextTime.getHours() + 1);
    }

    return nextTime;
  }

  // Execute a synchronization job
  async executeSyncJob(jobId) {
    const job = this.syncJobs.get(jobId);
    if (!job || !job.enabled) {
      throw new Error(`Sync job not found or disabled: ${jobId}`);
    }

    if (this.isSyncing) {
      throw new Error('Sync already in progress');
    }

    this.isSyncing = true;
    job.status = 'running';
    job.lastRun = new Date();

    const startTime = Date.now();

    try {
      console.log(`Starting sync job: ${job.name}`);

      // Get source data
      const sourceData = await this.fetchFromSource(job.source);

      // Apply filter if specified
      let filteredData = sourceData;
      if (job.filter) {
        filteredData = sourceData.filter(job.filter);
      }

      // Apply transformation if specified
      let transformedData = filteredData;
      if (job.transform) {
        transformedData = filteredData.map(job.transform);
      }

      // Send to destination
      const result = await this.sendToDestination(
        job.destination,
        transformedData
      );

      // Update job stats
      job.stats.totalSynced += transformedData.length;
      job.stats.lastSyncDuration = Date.now() - startTime;
      job.status = 'completed';

      console.log(
        `Sync job completed: ${job.name}, ${transformedData.length} records processed`
      );

      // Add to sync history
      this.syncHistory.push({
        jobId: job.id,
        jobName: job.name,
        startTime: new Date(startTime),
        endTime: new Date(),
        duration: Date.now() - startTime,
        recordsProcessed: transformedData.length,
        status: 'success',
        source: job.source,
        destination: job.destination,
      });

      return {
        success: true,
        recordsProcessed: transformedData.length,
        duration: Date.now() - startTime,
        result,
      };
    } catch (error) {
      job.stats.totalErrors++;
      job.status = 'error';

      console.error(`Sync job failed: ${job.name}`, error);

      // Add to sync history
      this.syncHistory.push({
        jobId: job.id,
        jobName: job.name,
        startTime: new Date(startTime),
        endTime: new Date(),
        duration: Date.now() - startTime,
        status: 'error',
        error: error.message,
        source: job.source,
        destination: job.destination,
      });

      throw error;
    } finally {
      this.isSyncing = false;
      job.nextRun = job.schedule ? this.calculateNextRun(job.schedule) : null;
    }
  }

  // Fetch data from a source
  async fetchFromSource(sourceName) {
    const source = this.sources.get(sourceName);
    if (!source) {
      throw new Error(`Source not found: ${sourceName}`);
    }

    try {
      if (source.type === 'api') {
        return await this.fetchFromAPI(source);
      } else if (source.type === 'database') {
        return await this.fetchFromDatabase(source);
      } else if (source.type === 'file') {
        return await this.fetchFromFile(source);
      } else {
        throw new Error(`Unsupported source type: ${source.type}`);
      }
    } catch (error) {
      console.error(`Failed to fetch from source ${sourceName}:`, error);
      throw error;
    }
  }

  // Fetch data from API
  async fetchFromAPI(source) {
    const controller = new AbortController();
    const timeoutId = setTimeout(
      () => controller.abort(),
      source.timeout || 30000
    );

    try {
      const response = await fetch(source.url, {
        method: source.method || 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...source.headers,
          ...this.getAuthHeaders(source),
        },
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(
          `API request failed: ${response.status} ${response.statusText}`
        );
      }

      const data = await response.json();
      source.lastSync = new Date();
      source.status = 'success';

      return Array.isArray(data) ? data : [data];
    } catch (error) {
      if (error.name === 'AbortError') {
        throw new Error('Request timeout');
      }
      source.status = 'error';
      source.lastError = error.message;
      throw error;
    }
  }

  // Fetch data from database (mock implementation)
  async fetchFromDatabase(source) {
    // In a real implementation, this would connect to a database
    // For now, return mock data
    console.log(`Fetching from database: ${source.name}`);

    // Simulate database fetch
    await new Promise(resolve => setTimeout(resolve, 1000));

    const mockData = [
      { id: 1, name: 'Product 1', price: 100, category: 'electronics' },
      { id: 2, name: 'Product 2', price: 200, category: 'clothing' },
      { id: 3, name: 'Product 3', price: 150, category: 'electronics' },
    ];

    source.lastSync = new Date();
    source.status = 'success';

    return mockData;
  }

  // Fetch data from file (mock implementation)
  async fetchFromFile(source) {
    // In a real implementation, this would read from a file
    // For now, return mock data
    console.log(`Fetching from file: ${source.name}`);

    // Simulate file read
    await new Promise(resolve => setTimeout(resolve, 500));

    const mockData = [
      { id: 1, name: 'File Record 1', value: 100 },
      { id: 2, name: 'File Record 2', value: 200 },
    ];

    source.lastSync = new Date();
    source.status = 'success';

    return mockData;
  }

  // Send data to destination
  async sendToDestination(destinationName, data) {
    const destination = this.destinations.get(destinationName);
    if (!destination) {
      throw new Error(`Destination not found: ${destinationName}`);
    }

    try {
      if (destination.type === 'api') {
        return await this.sendToAPI(destination, data);
      } else if (destination.type === 'database') {
        return await this.sendToDatabase(destination, data);
      } else if (destination.type === 'file') {
        return await this.sendToFile(destination, data);
      } else {
        throw new Error(`Unsupported destination type: ${destination.type}`);
      }
    } catch (error) {
      console.error(`Failed to send to destination ${destinationName}:`, error);
      destination.status = 'error';
      destination.lastError = error.message;
      throw error;
    }
  }

  // Send data to API
  async sendToAPI(destination, data) {
    const controller = new AbortController();
    const timeoutId = setTimeout(
      () => controller.abort(),
      destination.timeout || 30000
    );

    try {
      const response = await fetch(destination.url, {
        method: destination.method || 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...destination.headers,
          ...this.getAuthHeaders(destination),
        },
        body: JSON.stringify(data),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(
          `API request failed: ${response.status} ${response.statusText}`
        );
      }

      const result = await response.json();
      destination.lastSync = new Date();
      destination.status = 'success';

      return result;
    } catch (error) {
      if (error.name === 'AbortError') {
        throw new Error('Request timeout');
      }
      destination.status = 'error';
      destination.lastError = error.message;
      throw error;
    }
  }

  // Send data to database (mock implementation)
  async sendToDatabase(destination, data) {
    // In a real implementation, this would insert into a database
    // For now, simulate the operation
    console.log(
      `Sending to database: ${destination.name}, ${data.length} records`
    );

    // Simulate database insert
    await new Promise(resolve => setTimeout(resolve, 1000));

    destination.lastSync = new Date();
    destination.status = 'success';

    return { inserted: data.length, success: true };
  }

  // Send data to file (mock implementation)
  async sendToFile(destination, data) {
    // In a real implementation, this would write to a file
    // For now, simulate the operation
    console.log(`Sending to file: ${destination.name}, ${data.length} records`);

    // Simulate file write
    await new Promise(resolve => setTimeout(resolve, 500));

    destination.lastSync = new Date();
    destination.status = 'success';

    return { written: data.length, success: true };
  }

  // Get authentication headers
  getAuthHeaders(config) {
    if (config.auth && config.auth.type === 'bearer') {
      return { Authorization: `Bearer ${config.auth.token}` };
    } else if (config.auth && config.auth.type === 'basic') {
      const credentials = btoa(
        `${config.auth.username}:${config.auth.password}`
      );
      return { Authorization: `Basic ${credentials}` };
    }
    return {};
  }

  // Start periodic sync jobs based on schedule
  startPeriodicSync() {
    // Check for scheduled jobs every minute
    setInterval(() => {
      this.checkScheduledJobs();
    }, 60000); // Every minute
  }

  // Check for scheduled jobs that need to run
  async checkScheduledJobs() {
    const now = new Date();

    for (const [jobId, job] of this.syncJobs) {
      if (job.enabled && job.schedule && job.nextRun && job.nextRun <= now) {
        console.log(`Executing scheduled job: ${job.name}`);

        try {
          await this.executeSyncJob(jobId);
        } catch (error) {
          console.error(`Scheduled job failed: ${job.name}`, error);

          // Retry mechanism
          await this.retrySyncJob(jobId, error);
        }
      }
    }
  }

  // Retry a sync job
  async retrySyncJob(jobId, error, attempt = 1) {
    if (attempt >= this.retryAttempts) {
      console.error(`Max retry attempts reached for job: ${jobId}`);
      return;
    }

    console.log(
      `Retrying sync job ${jobId}, attempt ${attempt + 1}/${this.retryAttempts}`
    );

    // Wait before retry
    await new Promise(resolve => setTimeout(resolve, this.retryDelay));

    try {
      await this.executeSyncJob(jobId);
    } catch (retryError) {
      console.error(`Retry attempt ${attempt + 1} failed:`, retryError);
      return await this.retrySyncJob(jobId, retryError, attempt + 1);
    }
  }

  // Get all sync jobs
  getSyncJobs() {
    return Array.from(this.syncJobs.values());
  }

  // Get sync job by ID
  getSyncJob(jobId) {
    return this.syncJobs.get(jobId);
  }

  // Get sync history
  getSyncHistory(limit = 50) {
    return this.syncHistory.slice(-limit);
  }

  // Get source status
  getSourceStatus(sourceName) {
    const source = this.sources.get(sourceName);
    if (!source) return null;

    return {
      name: source.name,
      type: source.type,
      lastSync: source.lastSync,
      status: source.status,
      lastError: source.lastError,
    };
  }

  // Get destination status
  getDestinationStatus(destinationName) {
    const destination = this.destinations.get(destinationName);
    if (!destination) return null;

    return {
      name: destination.name,
      type: destination.type,
      lastSync: destination.lastSync,
      status: destination.status,
      lastError: destination.lastError,
    };
  }

  // Get overall sync status
  getSyncStatus() {
    return {
      isSyncing: this.isSyncing,
      totalJobs: this.syncJobs.size,
      enabledJobs: Array.from(this.syncJobs.values()).filter(job => job.enabled)
        .length,
      sources: Array.from(this.sources.values()).map(s => ({
        name: s.name,
        status: s.status,
        lastSync: s.lastSync,
      })),
      destinations: Array.from(this.destinations.values()).map(d => ({
        name: d.name,
        status: d.status,
        lastSync: d.lastSync,
      })),
      lastSync:
        this.syncHistory.length > 0
          ? this.syncHistory[this.syncHistory.length - 1]
          : null,
    };
  }

  // Manually trigger a sync
  async triggerSync(jobId) {
    return await this.executeSyncJob(jobId);
  }

  // Enable/disable a sync job
  setJobEnabled(jobId, enabled) {
    const job = this.syncJobs.get(jobId);
    if (!job) {
      throw new Error(`Job not found: ${jobId}`);
    }

    job.enabled = enabled;
    return job;
  }

  // Remove a sync job
  removeSyncJob(jobId) {
    return this.syncJobs.delete(jobId);
  }

  // Setup default sync configurations
  setupDefaultSyncs() {
    // Example: Sync product data from external API to local storage
    this.registerSource('external-products', {
      type: 'api',
      url: 'https://api.example.com/products',
      method: 'GET',
      headers: { Accept: 'application/json' },
      auth: {
        type: 'bearer',
        token: process.env.EXTERNAL_API_TOKEN || 'mock-token',
      },
    });

    this.registerDestination('local-database', {
      type: 'database',
      connection: 'mongodb://localhost:27017/myapp',
      collection: 'products',
    });

    // Create a sync job
    this.createSyncJob({
      name: 'Sync Products',
      source: 'external-products',
      destination: 'local-database',
      schedule: '0 */6 * * *', // Every 6 hours
      transform: item => ({
        ...item,
        syncedAt: new Date(),
        source: 'external-api',
      }),
    });
  }
}

// Create a singleton instance
const dataSyncService = new DataSyncService();

// Setup default syncs if needed
// dataSyncService.setupDefaultSyncs();

export default dataSyncService;
