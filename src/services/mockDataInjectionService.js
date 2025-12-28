// src/services/mockDataInjectionService.js
class MockDataInjectionService {
  constructor() {
    this.industries = [
      'Technology', 'Healthcare', 'Finance', 'Retail', 'Manufacturing', 
      'Education', 'Government', 'Non-Profit', 'Energy', 'Transportation'
    ];
    
    this.companies = [
      'TechCorp Solutions', 'Global Innovations', 'Digital Dynamics', 'Cloud Systems', 
      'DataFlow Inc', 'FutureTech', 'Nexus Enterprises', 'Alpha Systems', 
      'Beta Solutions', 'Gamma Technologies'
    ];
    
    this.departments = [
      'Engineering', 'Marketing', 'Sales', 'HR', 'Finance', 'Operations', 
      'Customer Success', 'Product', 'Design', 'Quality Assurance'
    ];
    
    this.projectStatuses = ['Not Started', 'Planning', 'In Progress', 'Review', 'Completed', 'On Hold', 'Cancelled'];
    this.taskPriorities = ['Low', 'Medium', 'High', 'Critical'];
    this.taskStatuses = ['Not Started', 'In Progress', 'Review', 'Completed', 'Blocked'];
    this.userRoles = ['Admin', 'Manager', 'Developer', 'Designer', 'Analyst', 'User', 'Guest'];
    this.userStatuses = ['Active', 'Inactive', 'Pending', 'Suspended'];
  }

  // Generate high-fidelity mock data for TrackIT (Project Management System)
  generateTrackITMockData(companyIndustry = 'Technology') {
    const projects = this.generateProjects(10, companyIndustry);
    const tasks = this.generateTasks(50, projects);
    const users = this.generateUsers(15, companyIndustry);
    const reports = this.generateReports(8);
    const timeEntries = this.generateTimeEntries(100, users, tasks);
    const teams = this.generateTeams(5, users);
    const clients = this.generateClients(7);
    
    return {
      system: 'TrackIT',
      industry: companyIndustry,
      data: {
        projects,
        tasks,
        users,
        reports,
        timeEntries,
        teams,
        clients,
        settings: this.generateSettings()
      }
    };
  }

  // Generate high-fidelity mock data for HR-IMS (HR Information Management System)
  generateHRIMSMockData(companyIndustry = 'Technology') {
    const employees = this.generateEmployees(25, companyIndustry);
    const departments = this.generateHRDepartments(8);
    const positions = this.generatePositions(12);
    const payrollRecords = this.generatePayrollRecords(25, employees);
    const benefits = this.generateBenefits(25, employees);
    const performanceReviews = this.generatePerformanceReviews(25, employees);
    const attendanceRecords = this.generateAttendanceRecords(25, employees);
    const trainingRecords = this.generateTrainingRecords(25, employees);
    
    return {
      system: 'HR-IMS',
      industry: companyIndustry,
      data: {
        employees,
        departments,
        positions,
        payrollRecords,
        benefits,
        performanceReviews,
        attendanceRecords,
        trainingRecords,
        settings: this.generateSettings()
      }
    };
  }

  // Generate projects with industry-specific names
  generateProjects(count, industry) {
    const projectNames = {
      'Technology': ['System Migration', 'API Development', 'Security Audit', 'Cloud Migration', 'Mobile App Dev', 'Data Analytics', 'DevOps Setup', 'UI/UX Redesign', 'Performance Optimization', 'Bug Fixing Sprint'],
      'Healthcare': ['EMR Integration', 'Patient Portal', 'HIPAA Compliance', 'Telemedicine Platform', 'Medical Records', 'Healthcare Analytics', 'IoMT Implementation', 'EHR Upgrade', 'Patient Monitoring', 'Healthcare API'],
      'Finance': ['Risk Management', 'Trading Platform', 'Fraud Detection', 'Compliance System', 'Payment Gateway', 'Financial Analytics', 'Blockchain Integration', 'Audit System', 'Portfolio Management', 'Tax Compliance'],
      'Retail': ['E-commerce Platform', 'Inventory Management', 'POS System', 'Customer Analytics', 'Supply Chain', 'Loyalty Program', 'Omnichannel', 'Pricing Engine', 'Returns System', 'Vendor Portal']
    };
    
    const names = projectNames[industry] || projectNames['Technology'];
    
    return Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      name: names[i % names.length],
      description: `Comprehensive ${names[i % names.length].toLowerCase()} project for ${this.companies[Math.floor(Math.random() * this.companies.length)]}`,
      status: this.projectStatuses[Math.floor(Math.random() * this.projectStatuses.length)],
      progress: Math.floor(Math.random() * 100),
      startDate: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0],
      endDate: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0],
      budget: Math.floor(Math.random() * 100000) + 10000,
      spent: Math.floor(Math.random() * 50000),
      managerId: Math.floor(Math.random() * 15) + 1,
      teamIds: Array.from({ length: Math.floor(Math.random() * 3) + 1 }, () => Math.floor(Math.random() * 5) + 1),
      priority: this.taskPriorities[Math.floor(Math.random() * this.taskPriorities.length)],
      category: industry,
      createdAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date().toISOString()
    }));
  }

  // Generate tasks with realistic relationships to projects
  generateTasks(count, projects) {
    const taskTitles = [
      'Requirements Analysis', 'System Design', 'Frontend Development', 'Backend Development',
      'Database Design', 'API Integration', 'Testing & QA', 'Documentation', 
      'Deployment', 'Maintenance', 'Bug Fixes', 'Performance Tuning', 
      'Security Review', 'User Training', 'Client Communication'
    ];
    
    return Array.from({ length: count }, (_, i) => {
      const project = projects[Math.floor(Math.random() * projects.length)];
      
      return {
        id: i + 1,
        title: `${taskTitles[Math.floor(Math.random() * taskTitles.length)]} for ${project.name}`,
        description: `Detailed ${taskTitles[Math.floor(Math.random() * taskTitles.length)].toLowerCase()} task for ${project.name}`,
        projectId: project.id,
        assigneeId: Math.floor(Math.random() * 15) + 1,
        status: this.taskStatuses[Math.floor(Math.random() * this.taskStatuses.length)],
        priority: this.taskPriorities[Math.floor(Math.random() * this.taskPriorities.length)],
        estimatedHours: Math.floor(Math.random() * 40) + 5,
        actualHours: Math.floor(Math.random() * 50),
        dueDate: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0],
        completedAt: this.taskStatuses[Math.floor(Math.random() * this.taskStatuses.length)] === 'Completed' 
          ? new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString() 
          : null,
        createdAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(),
        updatedAt: new Date().toISOString()
      };
    });
  }

  // Generate users with industry-appropriate roles
  generateUsers(count, industry) {
    const firstNames = ['John', 'Jane', 'Mike', 'Sarah', 'David', 'Lisa', 'Tom', 'Emma', 'Alex', 'Chris', 'Patricia', 'James', 'Jennifer', 'Robert', 'Amanda'];
    const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson'];
    
    return Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      firstName: firstNames[Math.floor(Math.random() * firstNames.length)],
      lastName: lastNames[Math.floor(Math.random() * lastNames.length)],
      email: `user${i + 1}@${this.companies[Math.floor(Math.random() * this.companies.length)].toLowerCase().replace(/\s+/g, '')}.com`,
      role: this.userRoles[Math.floor(Math.random() * this.userRoles.length)],
      department: this.departments[Math.floor(Math.random() * this.departments.length)],
      status: this.userStatuses[Math.floor(Math.random() * this.userStatuses.length)],
      hireDate: new Date(2020 + Math.floor(Math.random() * 4), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0],
      skills: this.generateSkills(3 + Math.floor(Math.random() * 4)),
      projects: Array.from({ length: Math.floor(Math.random() * 5) + 1 }, () => Math.floor(Math.random() * 10) + 1),
      avatar: `https://i.pravatar.cc/150?img=${i + 1}`,
      createdAt: new Date(Date.now() - Math.random() * 730 * 24 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date().toISOString()
    }));
  }

  // Generate teams
  generateTeams(count, users) {
    return Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      name: `${this.departments[Math.floor(Math.random() * this.departments.length)]} Team`,
      description: `Cross-functional team for ${this.departments[Math.floor(Math.random() * this.departments.length)]} initiatives`,
      leaderId: Math.floor(Math.random() * users.length) + 1,
      members: Array.from({ length: Math.floor(Math.random() * 6) + 3 }, () => 
        users[Math.floor(Math.random() * users.length)].id
      ),
      projects: Array.from({ length: Math.floor(Math.random() * 4) + 1 }, () => Math.floor(Math.random() * 10) + 1),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }));
  }

  // Generate clients
  generateClients(count) {
    return Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      name: this.companies[Math.floor(Math.random() * this.companies.length)],
      industry: this.industries[Math.floor(Math.random() * this.industries.length)],
      contactPerson: `${['John', 'Jane', 'Mike', 'Sarah'][Math.floor(Math.random() * 4)]} ${['Smith', 'Johnson', 'Williams', 'Brown'][Math.floor(Math.random() * 4)]}`,
      email: `contact${i + 1}@${this.companies[Math.floor(Math.random() * this.companies.length)].toLowerCase().replace(/\s+/g, '')}.com`,
      phone: `+1-${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`,
      status: ['Active', 'Prospect', 'Inactive'][Math.floor(Math.random() * 3)],
      address: `${Math.floor(Math.random() * 900) + 100} ${['Main', 'Oak', 'Pine', 'Elm', 'Maple'][Math.floor(Math.random() * 5)]} St, ${['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'][Math.floor(Math.random() * 5)]}`,
      projects: Array.from({ length: Math.floor(Math.random() * 3) + 1 }, () => Math.floor(Math.random() * 10) + 1),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }));
  }

  // Generate time entries
  generateTimeEntries(count, users, tasks) {
    return Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      userId: users[Math.floor(Math.random() * users.length)].id,
      taskId: tasks[Math.floor(Math.random() * tasks.length)].id,
      date: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      hours: Math.random() * 8 + 1,
      description: `Worked on ${tasks[Math.floor(Math.random() * tasks.length)].title}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }));
  }

  // Generate reports
  generateReports(count) {
    const reportTypes = ['Weekly', 'Monthly', 'Quarterly', 'Annual', 'Ad-hoc'];
    const reportNames = [
      'Project Progress Report', 'Team Productivity Metrics', 'Budget Utilization', 
      'Risk Assessment', 'Performance Analytics', 'Resource Allocation', 
      'Client Satisfaction', 'Quality Metrics', 'Timeline Adherence', 'Cost Analysis'
    ];
    
    return Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      name: reportNames[Math.floor(Math.random() * reportNames.length)],
      type: reportTypes[Math.floor(Math.random() * reportTypes.length)],
      description: `Comprehensive ${reportTypes[Math.floor(Math.random() * reportTypes.length)].toLowerCase()} analysis`,
      generatedBy: Math.floor(Math.random() * 15) + 1,
      generatedAt: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000).toISOString(),
      format: ['PDF', 'XLS', 'CSV', 'PPT'][Math.floor(Math.random() * 4)],
      status: 'Generated',
      filters: {
        dateRange: {
          start: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          end: new Date().toISOString().split('T')[0]
        },
        projects: Array.from({ length: Math.floor(Math.random() * 5) + 1 }, () => Math.floor(Math.random() * 10) + 1)
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }));
  }

  // Generate employees for HR-IMS
  generateEmployees(count, industry) {
    const firstNames = ['John', 'Jane', 'Mike', 'Sarah', 'David', 'Lisa', 'Tom', 'Emma', 'Alex', 'Chris', 'Patricia', 'James', 'Jennifer', 'Robert', 'Amanda', 'Michael', 'Mary', 'William', 'Elizabeth', 'Joseph', 'Barbara', 'Richard', 'Jessica', 'Thomas', 'Sandra'];
    const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin', 'Lee', 'Perez', 'Thompson', 'White', 'Harris'];
    
    return Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      firstName: firstNames[Math.floor(Math.random() * firstNames.length)],
      lastName: lastNames[Math.floor(Math.random() * lastNames.length)],
      email: `employee${i + 1}@${this.companies[Math.floor(Math.random() * this.companies.length)].toLowerCase().replace(/\s+/g, '')}.com`,
      department: this.departments[Math.floor(Math.random() * this.departments.length)],
      position: ['Software Engineer', 'Product Manager', 'Designer', 'HR Specialist', 'Accountant', 'Sales Rep', 'Marketing Manager', 'Data Analyst'][Math.floor(Math.random() * 8)],
      managerId: i > 0 ? Math.floor(Math.random() * i) + 1 : null,
      hireDate: new Date(2020 + Math.floor(Math.random() * 4), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0],
      terminationDate: Math.random() > 0.8 ? new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0] : null,
      status: ['Active', 'Inactive', 'On Leave', 'Terminated'][Math.floor(Math.random() * 4)],
      salary: Math.floor(Math.random() * 150000) + 40000,
      hourlyRate: Math.floor(Math.random() * 100) + 20,
      employmentType: ['Full-time', 'Part-time', 'Contract', 'Intern'][Math.floor(Math.random() * 4)],
      location: ['Remote', 'On-site', 'Hybrid'][Math.floor(Math.random() * 3)],
      emergencyContact: {
        name: `${['John', 'Jane', 'Mike', 'Sarah'][Math.floor(Math.random() * 4)]} ${['Smith', 'Johnson', 'Williams', 'Brown'][Math.floor(Math.random() * 4)]}`,
        relationship: ['Spouse', 'Parent', 'Sibling', 'Friend'][Math.floor(Math.random() * 4)],
        phone: `+1-${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`
      },
      address: `${Math.floor(Math.random() * 900) + 100} ${['Main', 'Oak', 'Pine', 'Elm', 'Maple'][Math.floor(Math.random() * 5)]} St, ${['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'][Math.floor(Math.random() * 5)]}`,
      phone: `+1-${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`,
      socialSecurityNumber: `${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 90) + 10}-${Math.floor(Math.random() * 9000) + 1000}`,
      dateOfBirth: new Date(1970 + Math.floor(Math.random() * 40), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0],
      gender: ['Male', 'Female', 'Other'][Math.floor(Math.random() * 3)],
      ethnicity: ['Caucasian', 'African American', 'Hispanic', 'Asian', 'Other'][Math.floor(Math.random() * 5)],
      education: ['High School', 'Bachelor\'s', 'Master\'s', 'PhD'][Math.floor(Math.random() * 4)],
      skills: this.generateSkills(3 + Math.floor(Math.random() * 4)),
      certifications: this.generateCertifications(1 + Math.floor(Math.random() * 3)),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }));
  }

  // Generate HR departments
  generateHRDepartments(count) {
    return Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      name: this.departments[Math.floor(Math.random() * this.departments.length)],
      description: `Human Resources department for ${this.departments[Math.floor(Math.random() * this.departments.length)]}`,
      headId: Math.floor(Math.random() * 25) + 1,
      budget: Math.floor(Math.random() * 5000000) + 500000,
      employeeCount: Math.floor(Math.random() * 50) + 5,
      location: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio'][Math.floor(Math.random() * 7)],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }));
  }

  // Generate positions
  generatePositions(count) {
    const titles = [
      'Software Engineer', 'Senior Software Engineer', 'Engineering Manager', 
      'Product Manager', 'Senior Product Manager', 'Director of Product',
      'UX Designer', 'Senior UX Designer', 'Design Manager',
      'Data Scientist', 'Senior Data Scientist', 'Data Science Manager',
      'HR Specialist', 'HR Manager', 'Director of HR',
      'Sales Representative', 'Sales Manager', 'Director of Sales'
    ];
    
    return Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      title: titles[Math.floor(Math.random() * titles.length)],
      department: this.departments[Math.floor(Math.random() * this.departments.length)],
      description: `Role responsible for ${titles[Math.floor(Math.random() * titles.length)].toLowerCase()}`,
      requirements: this.generateSkills(2 + Math.floor(Math.random() * 3)),
      responsibilities: [
        'Manage team projects',
        'Collaborate with stakeholders',
        'Ensure quality deliverables',
        'Meet deadlines and budgets'
      ],
      salaryRange: {
        min: Math.floor(Math.random() * 50000) + 40000,
        max: Math.floor(Math.random() * 100000) + 80000
      },
      employmentType: ['Full-time', 'Part-time', 'Contract'][Math.floor(Math.random() * 3)],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }));
  }

  // Generate payroll records
  generatePayrollRecords(count, employees) {
    return Array.from({ length: count }, (_, i) => {
      const employee = employees[Math.floor(Math.random() * employees.length)];
      const baseSalary = employee.salary || 75000;
      const bonus = Math.random() > 0.7 ? Math.random() * 10000 : 0;
      const deductions = Math.random() * 5000;
      const netPay = baseSalary + bonus - deductions;
      
      return {
        id: i + 1,
        employeeId: employee.id,
        period: `${2024}-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}`,
        grossPay: baseSalary,
        bonus: bonus,
        deductions: deductions,
        netPay: netPay,
        taxWithheld: netPay * 0.25,
        socialSecurity: netPay * 0.062,
        medicare: netPay * 0.0145,
        status: ['Processed', 'Pending', 'Paid'][Math.floor(Math.random() * 3)],
        processedAt: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
    });
  }

  // Generate benefits
  generateBenefits(count, employees) {
    const benefitTypes = [
      'Health Insurance', 'Dental Insurance', 'Vision Insurance', 
      'Life Insurance', '401k Plan', 'Stock Options', 'PTO', 'Sick Leave'
    ];
    
    return Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      employeeId: employees[Math.floor(Math.random() * employees.length)].id,
      type: benefitTypes[Math.floor(Math.random() * benefitTypes.length)],
      provider: ['Aetna', 'Cigna', 'UnitedHealth', 'MetLife', 'Fidelity', 'Vanguard'][Math.floor(Math.random() * 6)],
      cost: Math.random() * 500 + 50,
      startDate: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0],
      endDate: new Date(2025, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0],
      isActive: Math.random() > 0.1,
      coverageDetails: {
        deductible: Math.random() * 2000 + 500,
        copay: Math.random() * 50 + 10,
        coverageAmount: Math.random() * 1000000 + 50000
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }));
  }

  // Generate performance reviews
  generatePerformanceReviews(count, employees) {
    return Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      employeeId: employees[Math.floor(Math.random() * employees.length)].id,
      reviewerId: employees[Math.floor(Math.random() * employees.length)].id,
      period: `${2024}-Q${Math.floor(Math.random() * 4) + 1}`,
      overallRating: Math.floor(Math.random() * 5) + 1,
      goalsMet: Math.floor(Math.random() * 100),
      strengths: this.generateSkills(2 + Math.floor(Math.random() * 3)),
      areasForImprovement: this.generateSkills(1 + Math.floor(Math.random() * 2)),
      feedback: `Employee has shown strong performance in ${this.generateSkills(1)[0]} and ${this.generateSkills(1)[0]}. Areas for improvement include ${this.generateSkills(1)[0]}.`,
      goalsForNextPeriod: [
        `Improve ${this.generateSkills(1)[0]} skills`,
        `Complete ${Math.floor(Math.random() * 5) + 1} additional projects`,
        `Attend ${Math.floor(Math.random() * 3) + 1} professional development sessions`
      ],
      status: ['Completed', 'In Progress', 'Scheduled'][Math.floor(Math.random() * 3)],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }));
  }

  // Generate attendance records
  generateAttendanceRecords(count, employees) {
    return Array.from({ length: count }, (_, i) => {
      const baseDate = new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1);
      const status = ['Present', 'Absent', 'Late', 'Half Day', 'Leave'][Math.floor(Math.random() * 5)];
      
      return {
        id: i + 1,
        employeeId: employees[Math.floor(Math.random() * employees.length)].id,
        date: baseDate.toISOString().split('T')[0],
        checkIn: status === 'Absent' || status === 'Leave' ? null : `${Math.floor(Math.random() * 4) + 7}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`,
        checkOut: status === 'Absent' || status === 'Leave' ? null : `${Math.floor(Math.random() * 4) + 15}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`,
        hoursWorked: status === 'Absent' || status === 'Leave' ? 0 : Math.random() * 8 + 4,
        status: status,
        notes: status === 'Late' ? 'Traffic delay' : status === 'Half Day' ? 'Personal appointment' : status === 'Leave' ? 'Vacation' : '',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
    });
  }

  // Generate training records
  generateTrainingRecords(count, employees) {
    const trainingTopics = [
      'Leadership Development', 'Technical Skills', 'Safety Training', 
      'Compliance Training', 'Customer Service', 'Project Management',
      'Communication Skills', 'Diversity & Inclusion', 'Software Training'
    ];
    
    return Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      employeeId: employees[Math.floor(Math.random() * employees.length)].id,
      topic: trainingTopics[Math.floor(Math.random() * trainingTopics.length)],
      provider: ['Internal', 'External', 'Online'][Math.floor(Math.random() * 3)],
      startDate: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0],
      endDate: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 5).toISOString().split('T')[0],
      duration: Math.floor(Math.random() * 40) + 8,
      status: ['Completed', 'In Progress', 'Scheduled', 'Not Started'][Math.floor(Math.random() * 4)],
      score: Math.floor(Math.random() * 100) + 1,
      certificate: Math.random() > 0.7 ? `CERT-${Math.floor(Math.random() * 10000)}` : null,
      feedback: `Training on ${trainingTopics[Math.floor(Math.random() * trainingTopics.length)]} was informative and useful.`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }));
  }

  // Generate skills
  generateSkills(count) {
    const skills = [
      'JavaScript', 'React', 'Node.js', 'Python', 'Java', 'C#', 'SQL', 'NoSQL',
      'Project Management', 'Agile Methodology', 'Scrum', 'Kanban',
      'Leadership', 'Communication', 'Problem Solving', 'Teamwork',
      'Data Analysis', 'Machine Learning', 'Cloud Computing', 'DevOps',
      'UI/UX Design', 'Cybersecurity', 'API Development', 'Testing',
      'Sales', 'Marketing', 'Customer Service', 'Financial Analysis'
    ];
    
    const uniqueSkills = new Set();
    while (uniqueSkills.size < count && uniqueSkills.size < skills.length) {
      uniqueSkills.add(skills[Math.floor(Math.random() * skills.length)]);
    }
    
    return Array.from(uniqueSkills);
  }

  // Generate certifications
  generateCertifications(count) {
    const certifications = [
      'PMP', 'Scrum Master', 'AWS Certified', 'Google Analytics', 'Six Sigma',
      'CFA', 'CPA', 'PADI', 'CompTIA', 'CISSP', 'CISM', 'CEH',
      'ITIL', 'PRINCE2', 'CSM', 'PSM', 'CSPO', 'PMI-ACP', 'CAPM'
    ];
    
    const uniqueCerts = new Set();
    while (uniqueCerts.size < count && uniqueCerts.size < certifications.length) {
      uniqueCerts.add(certifications[Math.floor(Math.random() * certifications.length)]);
    }
    
    return Array.from(uniqueCerts);
  }

  // Generate system settings
  generateSettings() {
    return {
      theme: 'light',
      language: 'en',
      timezone: 'America/New_York',
      dateFormat: 'MM/DD/YYYY',
      timeFormat: '12h',
      notifications: {
        email: true,
        push: true,
        inApp: true
      },
      privacy: {
        profileVisibility: 'team',
        activityVisibility: 'all'
      },
      integrations: {
        slack: false,
        microsoftTeams: false,
        zoom: false
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
  }

  // Inject mock data into a sandbox environment
  async injectMockData(sandboxId, systemType = 'TrackIT', industry = 'Technology') {
    let mockData;
    
    if (systemType === 'TrackIT') {
      mockData = this.generateTrackITMockData(industry);
    } else if (systemType === 'HR-IMS') {
      mockData = this.generateHRIMSMockData(industry);
    } else {
      throw new Error(`Unknown system type: ${systemType}`);
    }
    
    // In a real implementation, this would inject the data into the Docker container
    // For now, we'll just return the mock data
    console.log(`Injecting mock data for ${systemType} into sandbox ${sandboxId}`);
    
    return {
      sandboxId,
      systemType,
      industry,
      data: mockData,
      injectedAt: new Date().toISOString(),
      status: 'completed'
    };
  }
}

export default new MockDataInjectionService();