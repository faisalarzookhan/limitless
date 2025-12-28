// src/services/dockerSandboxService.js
class DockerSandboxService {
  constructor() {
    this.sandboxInstances = new Map();
    this.containerCounter = 1000;
  }

  // Create a new Docker-based sandbox instance
  async createSandboxInstance(userData = {}) {
    const instanceId = `sandbox-${this.generateInstanceId()}`;
    
    // In a real implementation, this would call Docker API
    // For now, we'll simulate the process
    const sandboxInstance = {
      id: instanceId,
      containerId: this.generateContainerId(),
      subdomain: `${instanceId}.limitlessinfotech.com`,
      userId: userData.email || `user-${this.generateInstanceId()}`,
      createdAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 4 * 60 * 60 * 1000).toISOString(), // 4 hours from now
      status: 'creating',
      dockerImage: 'limitless/sandbox:latest',
      resources: {
        cpu: '0.5',
        memory: '1g',
        disk: '5g'
      },
      network: {
        vpcId: this.generateVpcId(),
        subnetId: this.generateSubnetId(),
        securityGroups: ['sg-sandbox-isolation']
      },
      data: this.generateMockData(),
      progress: {
        tourCompleted: false,
        tasksCompleted: 0,
        featuresExplored: 0
      }
    };

    // Simulate container creation
    await this.simulateContainerCreation(sandboxInstance);

    // Store the sandbox instance
    this.sandboxInstances.set(instanceId, sandboxInstance);
    
    // Set up automatic cleanup
    this.scheduleCleanup(instanceId);
    
    return sandboxInstance;
  }

  // Simulate Docker container creation process
  async simulateContainerCreation(instance) {
    // Update status to initializing
    instance.status = 'initializing';
    
    // Simulate Docker build/pull process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Update status to running
    instance.status = 'running';
  }

  // Get sandbox instance by ID
  getSandboxInstance(id) {
    return this.sandboxInstances.get(id);
  }

  // Stop and remove sandbox instance
  async stopSandboxInstance(id) {
    const instance = this.sandboxInstances.get(id);
    if (!instance) return false;

    // In a real implementation, this would call Docker API to stop the container
    instance.status = 'stopping';
    
    // Simulate container stop process
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    instance.status = 'stopped';
    
    // Remove from active instances
    this.sandboxInstances.delete(id);
    
    return true;
  }

  // Generate mock data for the sandbox
  generateMockData() {
    return {
      projects: [
        { id: 1, name: 'Website Redesign', status: 'In Progress', progress: 65 },
        { id: 2, name: 'Mobile App Development', status: 'Planning', progress: 10 },
        { id: 3, name: 'API Integration', status: 'Completed', progress: 100 },
        { id: 4, name: 'Security Audit', status: 'In Progress', progress: 30 },
        { id: 5, name: 'Performance Optimization', status: 'Not Started', progress: 0 }
      ],
      tasks: [
        { id: 1, title: 'Design wireframes', projectId: 1, status: 'Completed', assignee: 'John Doe', priority: 'High' },
        { id: 2, title: 'Develop login page', projectId: 1, status: 'In Progress', assignee: 'Jane Smith', priority: 'Medium' },
        { id: 3, title: 'Setup CI/CD pipeline', projectId: 4, status: 'In Progress', assignee: 'Mike Johnson', priority: 'High' },
        { id: 4, title: 'Write API documentation', projectId: 3, status: 'Completed', assignee: 'Sarah Wilson', priority: 'Medium' },
        { id: 5, title: 'Optimize database queries', projectId: 5, status: 'Not Started', assignee: 'Tom Brown', priority: 'High' },
        { id: 6, title: 'Create user onboarding flow', projectId: 2, status: 'In Progress', assignee: 'Lisa Davis', priority: 'Medium' },
        { id: 7, title: 'Implement payment gateway', projectId: 2, status: 'Not Started', assignee: 'Alex Taylor', priority: 'High' },
        { id: 8, title: 'Fix mobile responsiveness', projectId: 1, status: 'In Progress', assignee: 'Chris Miller', priority: 'Low' },
        { id: 9, title: 'Setup monitoring', projectId: 4, status: 'Not Started', assignee: 'Emma Wilson', priority: 'Medium' },
        { id: 10, title: 'Performance testing', projectId: 5, status: 'Not Started', assignee: 'David Lee', priority: 'High' }
      ],
      users: [
        { id: 1, name: 'John Doe', email: 'john@company.com', role: 'Admin', status: 'Active' },
        { id: 2, name: 'Jane Smith', email: 'jane@company.com', role: 'Developer', status: 'Active' },
        { id: 3, name: 'Mike Johnson', email: 'mike@company.com', role: 'Developer', status: 'Active' },
        { id: 4, name: 'Sarah Wilson', email: 'sarah@company.com', role: 'Designer', status: 'Active' },
        { id: 5, name: 'Tom Brown', email: 'tom@company.com', role: 'Developer', status: 'Active' },
        { id: 6, name: 'Lisa Davis', email: 'lisa@company.com', role: 'PM', status: 'Active' },
        { id: 7, name: 'Alex Taylor', email: 'alex@company.com', role: 'Developer', status: 'Active' },
        { id: 8, name: 'Chris Miller', email: 'chris@company.com', role: 'Developer', status: 'Active' },
        { id: 9, name: 'Emma Wilson', email: 'emma@company.com', role: 'DevOps', status: 'Active' },
        { id: 10, name: 'David Lee', email: 'david@company.com', role: 'QA', status: 'Active' }
      ],
      reports: [
        { id: 1, name: 'Weekly Progress Report', type: 'PDF', date: '2024-01-15', status: 'Generated' },
        { id: 2, name: 'Team Productivity Metrics', type: 'CSV', date: '2024-01-14', status: 'Generated' },
        { id: 3, name: 'Project Timeline Overview', type: 'PDF', date: '2024-01-13', status: 'Scheduled' },
        { id: 4, name: 'Budget Utilization Report', type: 'XLS', date: '2024-01-12', status: 'Generated' }
      ]
    };
  }

  // Schedule automatic cleanup of expired sandbox
  scheduleCleanup(instanceId) {
    const instance = this.sandboxInstances.get(instanceId);
    if (!instance) return;

    const timeUntilExpiry = new Date(instance.expiresAt) - new Date();
    
    setTimeout(() => {
      this.cleanupSandbox(instanceId);
    }, timeUntilExpiry);
  }

  // Clean up expired sandbox
  cleanupSandbox(instanceId) {
    const instance = this.sandboxInstances.get(instanceId);
    if (!instance) return;

    // Log cleanup for analytics
    console.log(`Cleaning up expired sandbox: ${instanceId}`, {
      userId: instance.userId,
      duration: new Date(instance.expiresAt) - new Date(instance.createdAt),
      progress: instance.progress
    });

    // Stop and remove the container
    this.stopSandboxInstance(instanceId);
  }

  // Get all active sandbox instances
  getActiveInstances() {
    return Array.from(this.sandboxInstances.values());
  }

  // Generate instance ID
  generateInstanceId() {
    return Math.random().toString(36).substring(2, 10) + Date.now().toString(36);
  }

  // Generate container ID
  generateContainerId() {
    return 'sandbox-' + Math.random().toString(36).substring(2, 10);
  }

  // Generate VPC ID
  generateVpcId() {
    return 'vpc-' + Math.random().toString(36).substring(2, 8);
  }

  // Generate subnet ID
  generateSubnetId() {
    return 'subnet-' + Math.random().toString(36).substring(2, 8);
  }

  // Update sandbox progress
  updateSandboxProgress(id, progressData) {
    const instance = this.sandboxInstances.get(id);
    if (!instance) return null;
    
    instance.progress = { ...instance.progress, ...progressData };
    return instance;
  }

  // Check if sandbox is still valid
  isSandboxValid(id) {
    const instance = this.sandboxInstances.get(id);
    if (!instance) return false;
    
    return new Date() < new Date(instance.expiresAt);
  }

  // Get sandbox analytics
  getSandboxAnalytics() {
    const instances = this.getActiveInstances();
    
    return {
      totalActive: instances.length,
      totalCreated: this.containerCounter,
      averageDuration: this.calculateAverageDuration(instances),
      completionRate: this.calculateCompletionRate(instances),
      mostExploredFeatures: this.getMostExploredFeatures(instances)
    };
  }

  // Calculate average sandbox duration
  calculateAverageDuration(instances) {
    if (instances.length === 0) return 0;
    
    const totalDuration = instances.reduce((sum, instance) => {
      const start = new Date(instance.createdAt);
      const end = instance.expiresAt ? new Date(instance.expiresAt) : new Date();
      return sum + (end - start);
    }, 0);
    
    return totalDuration / instances.length;
  }

  // Calculate completion rate
  calculateCompletionRate(instances) {
    if (instances.length === 0) return 0;
    
    const completed = instances.filter(instance => instance.progress.tourCompleted).length;
    return (completed / instances.length) * 100;
  }

  // Get most explored features
  getMostExploredFeatures(instances) {
    // This would aggregate feature usage data from all sandboxes
    return [
      { feature: 'Project Creation', usage: 85 },
      { feature: 'Task Management', usage: 78 },
      { feature: 'User Management', usage: 65 },
      { feature: 'Reporting', usage: 45 }
    ];
  }
}

export default new DockerSandboxService();