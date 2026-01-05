// src/services/sandboxService.js
class SandboxService {
  constructor() {
    this.activeSandboxes = new Map();
    this.subdomainCounter = 1000;
  }

  // Create a new ephemeral sandbox instance
  async createSandbox(userData = {}) {
    // Generate unique subdomain
    const subdomainId = `sandbox-${this.generateRandomId()}`;
    const subdomain = `${subdomainId}.limitlessinfotech.com`;

    // Create sandbox instance data
    const sandboxInstance = {
      id: subdomainId,
      subdomain,
      userId: userData.email || `user-${this.generateRandomId()}`,
      createdAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 4 * 60 * 60 * 1000).toISOString(), // 4 hours from now
      status: 'active',
      mockData: this.generateMockData(),
      progress: {
        tourCompleted: false,
        tasksCompleted: 0,
        featuresExplored: 0,
      },
    };

    // Store the sandbox instance
    this.activeSandboxes.set(subdomainId, sandboxInstance);

    // Set up automatic cleanup
    this.scheduleCleanup(subdomainId);

    return sandboxInstance;
  }

  // Get sandbox by ID
  getSandbox(id) {
    return this.activeSandboxes.get(id);
  }

  // Update sandbox progress
  updateSandboxProgress(id, progressData) {
    const sandbox = this.activeSandboxes.get(id);
    if (!sandbox) return null;

    sandbox.progress = { ...sandbox.progress, ...progressData };
    return sandbox;
  }

  // Generate mock data for the sandbox
  generateMockData() {
    return {
      projects: [
        {
          id: 1,
          name: 'Website Redesign',
          status: 'In Progress',
          progress: 65,
        },
        {
          id: 2,
          name: 'Mobile App Development',
          status: 'Planning',
          progress: 10,
        },
        { id: 3, name: 'API Integration', status: 'Completed', progress: 100 },
        { id: 4, name: 'Security Audit', status: 'In Progress', progress: 30 },
        {
          id: 5,
          name: 'Performance Optimization',
          status: 'Not Started',
          progress: 0,
        },
      ],
      tasks: [
        {
          id: 1,
          title: 'Design wireframes',
          projectId: 1,
          status: 'Completed',
          assignee: 'John Doe',
          priority: 'High',
        },
        {
          id: 2,
          title: 'Develop login page',
          projectId: 1,
          status: 'In Progress',
          assignee: 'Jane Smith',
          priority: 'Medium',
        },
        {
          id: 3,
          title: 'Setup CI/CD pipeline',
          projectId: 4,
          status: 'In Progress',
          assignee: 'Mike Johnson',
          priority: 'High',
        },
        {
          id: 4,
          title: 'Write API documentation',
          projectId: 3,
          status: 'Completed',
          assignee: 'Sarah Wilson',
          priority: 'Medium',
        },
        {
          id: 5,
          title: 'Optimize database queries',
          projectId: 5,
          status: 'Not Started',
          assignee: 'Tom Brown',
          priority: 'High',
        },
        {
          id: 6,
          title: 'Create user onboarding flow',
          projectId: 2,
          status: 'In Progress',
          assignee: 'Lisa Davis',
          priority: 'Medium',
        },
        {
          id: 7,
          title: 'Implement payment gateway',
          projectId: 2,
          status: 'Not Started',
          assignee: 'Alex Taylor',
          priority: 'High',
        },
        {
          id: 8,
          title: 'Fix mobile responsiveness',
          projectId: 1,
          status: 'In Progress',
          assignee: 'Chris Miller',
          priority: 'Low',
        },
        {
          id: 9,
          title: 'Setup monitoring',
          projectId: 4,
          status: 'Not Started',
          assignee: 'Emma Wilson',
          priority: 'Medium',
        },
        {
          id: 10,
          title: 'Performance testing',
          projectId: 5,
          status: 'Not Started',
          assignee: 'David Lee',
          priority: 'High',
        },
      ],
      users: [
        {
          id: 1,
          name: 'John Doe',
          email: 'john@company.com',
          role: 'Admin',
          status: 'Active',
        },
        {
          id: 2,
          name: 'Jane Smith',
          email: 'jane@company.com',
          role: 'Developer',
          status: 'Active',
        },
        {
          id: 3,
          name: 'Mike Johnson',
          email: 'mike@company.com',
          role: 'Developer',
          status: 'Active',
        },
        {
          id: 4,
          name: 'Sarah Wilson',
          email: 'sarah@company.com',
          role: 'Designer',
          status: 'Active',
        },
        {
          id: 5,
          name: 'Tom Brown',
          email: 'tom@company.com',
          role: 'Developer',
          status: 'Active',
        },
        {
          id: 6,
          name: 'Lisa Davis',
          email: 'lisa@company.com',
          role: 'PM',
          status: 'Active',
        },
        {
          id: 7,
          name: 'Alex Taylor',
          email: 'alex@company.com',
          role: 'Developer',
          status: 'Active',
        },
        {
          id: 8,
          name: 'Chris Miller',
          email: 'chris@company.com',
          role: 'Developer',
          status: 'Active',
        },
        {
          id: 9,
          name: 'Emma Wilson',
          email: 'emma@company.com',
          role: 'DevOps',
          status: 'Active',
        },
        {
          id: 10,
          name: 'David Lee',
          email: 'david@company.com',
          role: 'QA',
          status: 'Active',
        },
      ],
      reports: [
        {
          id: 1,
          name: 'Weekly Progress Report',
          type: 'PDF',
          date: '2024-01-15',
          status: 'Generated',
        },
        {
          id: 2,
          name: 'Team Productivity Metrics',
          type: 'CSV',
          date: '2024-01-14',
          status: 'Generated',
        },
        {
          id: 3,
          name: 'Project Timeline Overview',
          type: 'PDF',
          date: '2024-01-13',
          status: 'Scheduled',
        },
        {
          id: 4,
          name: 'Budget Utilization Report',
          type: 'XLS',
          date: '2024-01-12',
          status: 'Generated',
        },
      ],
    };
  }

  // Schedule automatic cleanup of expired sandbox
  scheduleCleanup(sandboxId) {
    const sandbox = this.activeSandboxes.get(sandboxId);
    if (!sandbox) return;

    const timeUntilExpiry = new Date(sandbox.expiresAt) - new Date();

    setTimeout(() => {
      this.cleanupSandbox(sandboxId);
    }, timeUntilExpiry);
  }

  // Clean up expired sandbox
  cleanupSandbox(sandboxId) {
    const sandbox = this.activeSandboxes.get(sandboxId);
    if (!sandbox) return;

    // Log cleanup for analytics
    console.log(`Cleaning up expired sandbox: ${sandboxId}`, {
      userId: sandbox.userId,
      duration: new Date(sandbox.expiresAt) - new Date(sandbox.createdAt),
      progress: sandbox.progress,
    });

    // Remove from active sandboxes
    this.activeSandboxes.delete(sandboxId);
  }

  // Check if sandbox is still valid
  isSandboxValid(sandboxId) {
    const sandbox = this.activeSandboxes.get(sandboxId);
    if (!sandbox) return false;

    return new Date() < new Date(sandbox.expiresAt);
  }

  // Get all active sandboxes
  getActiveSandboxes() {
    return Array.from(this.activeSandboxes.values());
  }

  // Generate random ID
  generateRandomId() {
    return Math.random().toString(36).substring(2, 10);
  }

  // Get sandbox analytics
  getSandboxAnalytics() {
    const sandboxes = Array.from(this.activeSandboxes.values());

    return {
      totalActive: sandboxes.length,
      totalCreated: this.subdomainCounter,
      averageDuration: this.calculateAverageDuration(sandboxes),
      completionRate: this.calculateCompletionRate(sandboxes),
      mostExploredFeatures: this.getMostExploredFeatures(sandboxes),
    };
  }

  // Calculate average sandbox duration
  calculateAverageDuration(sandboxes) {
    if (sandboxes.length === 0) return 0;

    const totalDuration = sandboxes.reduce((sum, sandbox) => {
      const start = new Date(sandbox.createdAt);
      const end = sandbox.expiresAt ? new Date(sandbox.expiresAt) : new Date();
      return sum + (end - start);
    }, 0);

    return totalDuration / sandboxes.length;
  }

  // Calculate completion rate
  calculateCompletionRate(sandboxes) {
    if (sandboxes.length === 0) return 0;

    const completed = sandboxes.filter(
      sandbox => sandbox.progress.tourCompleted
    ).length;
    return (completed / sandboxes.length) * 100;
  }

  // Get most explored features
  getMostExploredFeatures(sandboxes) {
    // This would aggregate feature usage data from all sandboxes
    return [
      { feature: 'Project Creation', usage: 85 },
      { feature: 'Task Management', usage: 78 },
      { feature: 'User Management', usage: 65 },
      { feature: 'Reporting', usage: 45 },
    ];
  }
}

export default new SandboxService();
