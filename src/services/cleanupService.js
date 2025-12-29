// src/services/cleanupService.js
// Service for automated cleanup of temporary files and logs

class CleanupService {
  constructor() {
    this.cleanupJobs = new Map();
    this.cleanupHistory = [];
    this.isCleaning = false;

    this.cleanupRules = new Map();
    this.cleanupLocations = new Map();

    this.setupDefaultRules();
  }

  // Set up default cleanup rules
  setupDefaultRules() {
    // Temporary files cleanup rule
    this.cleanupRules.set('temp-files', {
      name: 'Temporary Files Cleanup',
      description: 'Remove temporary files older than 7 days',
      schedule: '0 1 * * *', // Daily at 1 AM
      locations: ['temp', 'cache', 'tmp'],
      ageLimit: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
      pattern: /\.(tmp|temp|cache|log)$/i,
    });

    // Log files cleanup rule
    this.cleanupRules.set('log-files', {
      name: 'Log Files Cleanup',
      description: 'Remove log files older than 30 days',
      schedule: '0 2 * * *', // Daily at 2 AM
      locations: ['logs'],
      ageLimit: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
      pattern: /\.log$/i,
    });

    // Session cleanup rule
    this.cleanupRules.set('sessions', {
      name: 'Session Cleanup',
      description: 'Remove expired sessions',
      schedule: '0 */6 * * *', // Every 6 hours
      locations: ['sessions'],
      ageLimit: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
      pattern: /\.session$/i,
    });

    // Uploads cleanup rule
    this.cleanupRules.set('uploads', {
      name: 'Uploads Cleanup',
      description: 'Remove temporary uploads older than 1 day',
      schedule: '0 3 * * *', // Daily at 3 AM
      locations: ['uploads/temp'],
      ageLimit: 24 * 60 * 60 * 1000, // 1 day in milliseconds
      pattern: null, // All files in this location
    });
  }

  // Register a cleanup location
  registerCleanupLocation(name, config) {
    this.cleanupLocations.set(name, {
      name,
      ...config,
      lastCleanup: null,
      status: 'registered',
    });
  }

  // Create a cleanup job
  createCleanupJob(jobConfig) {
    const job = {
      id:
        jobConfig.id ||
        `cleanup-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      name: jobConfig.name,
      rule: jobConfig.rule,
      locations: jobConfig.locations || [],
      schedule: jobConfig.schedule,
      enabled: jobConfig.enabled !== false,
      lastRun: null,
      nextRun: jobConfig.schedule
        ? this.calculateNextRun(jobConfig.schedule)
        : null,
      status: 'created',
      stats: {
        filesProcessed: 0,
        filesRemoved: 0,
        totalSizeFreed: 0,
        lastCleanupDuration: 0,
      },
    };

    this.cleanupJobs.set(job.id, job);
    return job;
  }

  // Calculate next run time based on schedule
  calculateNextRun(schedule) {
    // Simple implementation - in a real app, use a cron parser
    const now = new Date();
    let nextTime = new Date(now);

    if (schedule === '0 1 * * *') {
      // Daily at 1 AM
      nextTime.setDate(nextTime.getDate() + 1);
      nextTime.setHours(1, 0, 0, 0);
    } else if (schedule === '0 2 * * *') {
      // Daily at 2 AM
      nextTime.setDate(nextTime.getDate() + 1);
      nextTime.setHours(2, 0, 0, 0);
    } else if (schedule === '0 */6 * * *') {
      // Every 6 hours
      nextTime.setHours(nextTime.getHours() + 6);
      nextTime.setMinutes(0);
      nextTime.setSeconds(0);
      nextTime.setMilliseconds(0);
    } else {
      // Default to 24 hours from now
      nextTime.setDate(nextTime.getDate() + 1);
    }

    return nextTime;
  }

  // Execute a cleanup job
  async executeCleanupJob(jobId) {
    const job = this.cleanupJobs.get(jobId);
    if (!job || !job.enabled) {
      throw new Error(`Cleanup job not found or disabled: ${jobId}`);
    }

    if (this.isCleaning) {
      throw new Error('Cleanup already in progress');
    }

    this.isCleaning = true;
    job.status = 'running';
    job.lastRun = new Date();

    const startTime = Date.now();

    try {
      console.log(`Starting cleanup job: ${job.name}`);

      // Get cleanup rule
      const rule = this.cleanupRules.get(job.rule);
      if (!rule) {
        throw new Error(`Cleanup rule not found: ${job.rule}`);
      }

      // Perform cleanup
      const cleanupResult = await this.performCleanup(rule, job.locations);

      // Update job stats
      job.stats.filesProcessed = cleanupResult.filesProcessed;
      job.stats.filesRemoved = cleanupResult.filesRemoved;
      job.stats.totalSizeFreed = cleanupResult.totalSizeFreed;
      job.stats.lastCleanupDuration = Date.now() - startTime;
      job.status = 'completed';

      console.log(
        `Cleanup job completed: ${job.name}, ${cleanupResult.filesRemoved} files removed`
      );

      // Add to cleanup history
      this.cleanupHistory.push({
        jobId: job.id,
        jobName: job.name,
        startTime: new Date(startTime),
        endTime: new Date(),
        duration: Date.now() - startTime,
        filesProcessed: cleanupResult.filesProcessed,
        filesRemoved: cleanupResult.filesRemoved,
        sizeFreed: cleanupResult.totalSizeFreed,
        status: 'success',
        rule: job.rule,
      });

      return {
        success: true,
        filesRemoved: cleanupResult.filesRemoved,
        sizeFreed: cleanupResult.totalSizeFreed,
        duration: Date.now() - startTime,
      };
    } catch (error) {
      job.status = 'error';

      console.error(`Cleanup job failed: ${job.name}`, error);

      // Add to cleanup history
      this.cleanupHistory.push({
        jobId: job.id,
        jobName: job.name,
        startTime: new Date(startTime),
        endTime: new Date(),
        duration: Date.now() - startTime,
        status: 'error',
        error: error.message,
        rule: job.rule,
      });

      throw error;
    } finally {
      this.isCleaning = false;
      job.nextRun = job.schedule ? this.calculateNextRun(job.schedule) : null;
    }
  }

  // Perform cleanup based on rule and locations
  async performCleanup(rule, locations) {
    let totalFilesProcessed = 0;
    let totalFilesRemoved = 0;
    let totalSizeFreed = 0;

    // Use rule locations if no specific locations provided
    const cleanupLocations = locations.length > 0 ? locations : rule.locations;

    for (const location of cleanupLocations) {
      console.log(`Cleaning up location: ${location}`);

      const locationResult = await this.cleanupLocation(location, rule);

      totalFilesProcessed += locationResult.filesProcessed;
      totalFilesRemoved += locationResult.filesRemoved;
      totalSizeFreed += locationResult.sizeFreed;
    }

    return {
      filesProcessed: totalFilesProcessed,
      filesRemoved: totalFilesRemoved,
      totalSizeFreed: totalSizeFreed,
    };
  }

  // Clean up a specific location based on rule
  async cleanupLocation(location, rule) {
    console.log(`Cleaning location: ${location} with rule: ${rule.name}`);

    // In a real implementation, this would scan and clean files
    // For now, we'll simulate the process

    // Simulate file scanning
    await new Promise(resolve => setTimeout(resolve, 500));

    // Mock files that would be cleaned up
    const mockFiles = [
      {
        name: 'temp1.tmp',
        size: 1024,
        timestamp: Date.now() - 10 * 24 * 60 * 60 * 1000,
      }, // 10 days old
      {
        name: 'temp2.tmp',
        size: 2048,
        timestamp: Date.now() - 5 * 24 * 60 * 60 * 1000,
      }, // 5 days old
      {
        name: 'old.log',
        size: 4096,
        timestamp: Date.now() - 35 * 24 * 60 * 60 * 1000,
      }, // 35 days old
    ];

    // Filter files based on age and pattern
    const filesToRemove = mockFiles.filter(file => {
      const isOldEnough = Date.now() - file.timestamp > rule.ageLimit;
      const matchesPattern = rule.pattern ? rule.pattern.test(file.name) : true;
      return isOldEnough && matchesPattern;
    });

    // Simulate file removal
    await new Promise(resolve => setTimeout(resolve, 300));

    const sizeFreed = filesToRemove.reduce((sum, file) => sum + file.size, 0);

    console.log(
      `Removed ${filesToRemove.length} files from ${location}, freed ${sizeFreed} bytes`
    );

    return {
      filesProcessed: mockFiles.length,
      filesRemoved: filesToRemove.length,
      sizeFreed,
    };
  }

  // Clean up browser storage (localStorage, sessionStorage)
  async cleanupBrowserStorage() {
    console.log('Cleaning up browser storage...');

    const storageStats = {
      localStorage: { items: 0, size: 0 },
      sessionStorage: { items: 0, size: 0 },
    };

    // Clean up localStorage
    if (typeof localStorage !== 'undefined') {
      const localStorageKeys = Object.keys(localStorage);
      storageStats.localStorage.items = localStorageKeys.length;

      // Calculate localStorage size
      let localStorageSize = 0;
      for (const key of localStorageKeys) {
        localStorageSize += localStorage[key].length * 2; // Approximate size in bytes
      }
      storageStats.localStorage.size = localStorageSize;

      // Remove old/expired items (those with timestamps older than retention period)
      const now = Date.now();
      for (const key of localStorageKeys) {
        try {
          const item = JSON.parse(localStorage[key]);
          if (item.expires && item.expires < now) {
            localStorage.removeItem(key);
            console.log(`Removed expired localStorage item: ${key}`);
          }
        } catch (e) {
          // If not JSON, assume it's a simple key-value pair
          // We could add more sophisticated cleanup logic here
        }
      }
    }

    // Clean up sessionStorage
    if (typeof sessionStorage !== 'undefined') {
      const sessionStorageKeys = Object.keys(sessionStorage);
      storageStats.sessionStorage.items = sessionStorageKeys.length;

      // Calculate sessionStorage size
      let sessionStorageSize = 0;
      for (const key of sessionStorageKeys) {
        sessionStorageSize += sessionStorage[key].length * 2; // Approximate size in bytes
      }
      storageStats.sessionStorage.size = sessionStorageSize;

      // Session storage is typically cleared when session ends,
      // but we can still clean up specific items if needed
    }

    return storageStats;
  }

  // Clean up cache storage (Cache API)
  async cleanupCacheStorage() {
    console.log('Cleaning up cache storage...');

    if (typeof caches !== 'undefined') {
      const cacheNames = await caches.keys();
      const cleanedCaches = [];

      for (const cacheName of cacheNames) {
        const cache = await caches.open(cacheName);
        const requests = await cache.keys();

        // Remove old cached responses
        for (const request of requests) {
          // In a real implementation, you'd check cache entry age and remove old ones
          // For now, we'll just log the cache size
          console.log(`Cache ${cacheName} has ${requests.length} entries`);
        }

        cleanedCaches.push({
          name: cacheName,
          entries: requests.length,
        });
      }

      return cleanedCaches;
    }

    return [];
  }

  // Clean up IndexedDB (mock implementation)
  async cleanupIndexedDB() {
    console.log('Cleaning up IndexedDB...');

    // In a real implementation, this would connect to IndexedDB and clean up old records
    // For now, return mock result
    return {
      databasesCleaned: 0,
      recordsRemoved: 0,
      sizeFreed: 0,
    };
  }

  // Start periodic cleanup jobs based on schedule
  startPeriodicCleanup() {
    // Check for scheduled jobs every minute
    setInterval(() => {
      this.checkScheduledCleanupJobs();
    }, 60000); // Every minute
  }

  // Check for scheduled cleanup jobs that need to run
  async checkScheduledCleanupJobs() {
    const now = new Date();

    for (const [jobId, job] of this.cleanupJobs) {
      if (job.enabled && job.schedule && job.nextRun && job.nextRun <= now) {
        console.log(`Executing scheduled cleanup job: ${job.name}`);

        try {
          await this.executeCleanupJob(jobId);
        } catch (error) {
          console.error(`Scheduled cleanup job failed: ${job.name}`, error);
        }
      }
    }
  }

  // Get all cleanup jobs
  getCleanupJobs() {
    return Array.from(this.cleanupJobs.values());
  }

  // Get cleanup job by ID
  getCleanupJob(jobId) {
    return this.cleanupJobs.get(jobId);
  }

  // Get cleanup history
  getCleanupHistory(limit = 50) {
    return this.cleanupHistory.slice(-limit);
  }

  // Get cleanup rules
  getCleanupRules() {
    return Array.from(this.cleanupRules.values());
  }

  // Get cleanup location status
  getCleanupLocationStatus(locationName) {
    const location = this.cleanupLocations.get(locationName);
    if (!location) return null;

    return {
      name: location.name,
      lastCleanup: location.lastCleanup,
      status: location.status,
    };
  }

  // Get overall cleanup status
  getCleanupStatus() {
    return {
      isCleaning: this.isCleaning,
      totalJobs: this.cleanupJobs.size,
      enabledJobs: Array.from(this.cleanupJobs.values()).filter(
        job => job.enabled
      ).length,
      totalCleanups: this.cleanupHistory.length,
      successfulCleanups: this.cleanupHistory.filter(
        c => c.status === 'success'
      ).length,
      lastCleanup:
        this.cleanupHistory.length > 0
          ? this.cleanupHistory[this.cleanupHistory.length - 1]
          : null,
      rules: Array.from(this.cleanupRules.values()).map(r => ({
        name: r.name,
        description: r.description,
        schedule: r.schedule,
      })),
    };
  }

  // Manually trigger a cleanup
  async triggerCleanup(jobId) {
    return await this.executeCleanupJob(jobId);
  }

  // Enable/disable a cleanup job
  setJobEnabled(jobId, enabled) {
    const job = this.cleanupJobs.get(jobId);
    if (!job) {
      throw new Error(`Job not found: ${jobId}`);
    }

    job.enabled = enabled;
    return job;
  }

  // Remove a cleanup job
  removeCleanupJob(jobId) {
    return this.cleanupJobs.delete(jobId);
  }

  // Perform system-wide cleanup
  async performSystemCleanup() {
    console.log('Performing system-wide cleanup...');

    const results = {
      files: await this.performCleanup(this.cleanupRules.get('temp-files'), [
        'temp',
      ]),
      logs: await this.performCleanup(this.cleanupRules.get('log-files'), [
        'logs',
      ]),
      browserStorage: await this.cleanupBrowserStorage(),
      cacheStorage: await this.cleanupCacheStorage(),
      indexedDB: await this.cleanupIndexedDB(),
    };

    return results;
  }

  // Setup default cleanup configurations
  setupDefaultCleanups() {
    // Register cleanup locations
    this.registerCleanupLocation('temp', {
      path: './temp',
      retention: 7,
    });

    this.registerCleanupLocation('logs', {
      path: './logs',
      retention: 30,
    });

    this.registerCleanupLocation('uploads-temp', {
      path: './uploads/temp',
      retention: 1,
    });

    // Create cleanup jobs
    this.createCleanupJob({
      name: 'Daily Temp Files Cleanup',
      rule: 'temp-files',
      schedule: '0 1 * * *', // Daily at 1 AM
      locations: ['temp', 'cache'],
    });

    this.createCleanupJob({
      name: 'Daily Log Files Cleanup',
      rule: 'log-files',
      schedule: '0 2 * * *', // Daily at 2 AM
      locations: ['logs'],
    });

    this.createCleanupJob({
      name: 'Hourly Session Cleanup',
      rule: 'sessions',
      schedule: '0 */6 * * *', // Every 6 hours
      locations: ['sessions'],
    });
  }
}

// Create a singleton instance
const cleanupService = new CleanupService();

// Setup default cleanups if needed
// cleanupService.setupDefaultCleanups();

export default cleanupService;
