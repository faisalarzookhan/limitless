import { useState, useEffect } from 'react';
import {
  HiUser,
  HiDocumentText,
  HiChartBar,
  HiCreditCard,
  HiDownload,
  HiCog,
  HiBell,
  HiCheckCircle,
  HiClock,
  HiUserGroup,
  HiShieldCheck,
  HiUserCircle,
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiCalendar,
  HiCurrencyDollar,
  HiTrendingUp,
  HiLockClosed,
} from 'react-icons/hi';
import Navbar from '../components/Navbar';
import ErrorBoundary from '../components/ErrorBoundary';

const ClientPortal = props => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [userRole, setUserRole] = useState('admin'); // admin, manager, user
  const [notifications, setNotifications] = useState([]);
  const [projects, setProjects] = useState([]);
  const [invoices, setInvoices] = useState([]);

  // Mock data initialization
  useEffect(() => {
    // Mock notifications
    setNotifications([
      {
        id: 1,
        type: 'info',
        message: 'Your project milestone has been completed',
        time: '2 hours ago',
        read: false,
      },
      {
        id: 2,
        type: 'success',
        message: 'Invoice #INV-001 has been paid',
        time: '1 day ago',
        read: true,
      },
      {
        id: 3,
        type: 'warning',
        message: 'Subscription renewal required',
        time: '3 days ago',
        read: false,
      },
    ]);

    // Mock projects
    setProjects([
      {
        id: 1,
        name: 'HR-IMS Implementation',
        status: 'completed',
        progress: 100,
        client: 'TechCorp',
        deadline: '2024-01-15',
      },
      {
        id: 2,
        name: 'TrackIT Migration',
        status: 'in-progress',
        progress: 75,
        client: 'LogiSolutions',
        deadline: '2024-02-28',
      },
      {
        id: 3,
        name: 'API Integration',
        status: 'pending',
        progress: 10,
        client: 'FinancePro',
        deadline: '2024-03-15',
      },
    ]);

    // Mock invoices
    setInvoices([
      {
        id: 'INV-001',
        date: '2024-01-01',
        amount: 25000,
        status: 'paid',
        dueDate: '2024-01-15',
      },
      {
        id: 'INV-002',
        date: '2024-02-01',
        amount: 15000,
        status: 'pending',
        dueDate: '2024-02-15',
      },
      {
        id: 'INV-003',
        date: '2024-03-01',
        amount: 35000,
        status: 'pending',
        dueDate: '2024-03-15',
      },
    ]);
  }, []);

  const user = {
    name: 'John Doe',
    email: 'john.doe@clientcompany.com',
    company: 'Client Company Inc.',
    role: 'CTO',
    avatar: 'https://via.placeholder.com/100x100',
    joinDate: '2023-06-15',
    lastLogin: '2024-01-15 14:30:00',
  };

  const stats = [
    {
      label: 'Active Projects',
      value: projects.filter(p => p.status !== 'completed').length,
      change: '+2',
      icon: HiChartBar,
    },
    {
      label: 'Total Invoices',
      value: invoices.length,
      change: '+1',
      icon: HiCurrencyDollar,
    },
    { label: 'Pending Tasks', value: 5, change: '-3', icon: HiCheckCircle },
    { label: 'Uptime', value: '99.9%', change: '+0.1%', icon: HiTrendingUp },
  ];

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: HiChartBar },
    { id: 'projects', label: 'Projects', icon: HiDocumentText },
    { id: 'invoices', label: 'Invoices', icon: HiCreditCard },
    { id: 'documents', label: 'Documents', icon: HiDownload },
    { id: 'settings', label: 'Settings', icon: HiCog },
  ];

  const renderDashboard = () => (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl p-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">
              Welcome back, {user.name}
            </h2>
            <p className="text-blue-100">
              Here's what's happening with your projects today.
            </p>
          </div>
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <HiUser className="w-8 h-8" />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-soft border border-gray-100 dark:border-dark-700"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span
                  className={`text-sm font-medium ${
                    stat.change.startsWith('+')
                      ? 'text-green-600'
                      : stat.change.startsWith('-')
                        ? 'text-red-600'
                        : 'text-gray-600'
                  }`}
                >
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Projects */}
        <div className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-soft border border-gray-100 dark:border-dark-700">
          <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
            Recent Projects
          </h3>
          <div className="space-y-4">
            {projects.slice(0, 3).map(project => (
              <div
                key={project.id}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-dark-700 rounded-lg"
              >
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {project.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {project.client}
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-24 bg-gray-200 dark:bg-dark-600 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        project.status === 'completed'
                          ? 'bg-green-500'
                          : project.status === 'in-progress'
                            ? 'bg-blue-500'
                            : 'bg-yellow-500'
                      }`}
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === 'completed'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                        : project.status === 'in-progress'
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                    }`}
                  >
                    {project.status.replace('-', ' ')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Invoices */}
        <div className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-soft border border-gray-100 dark:border-dark-700">
          <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
            Recent Invoices
          </h3>
          <div className="space-y-4">
            {invoices.slice(0, 3).map(invoice => (
              <div
                key={invoice.id}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-dark-700 rounded-lg"
              >
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {invoice.id}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {invoice.date}
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="font-semibold text-gray-900 dark:text-white">
                    ${invoice.amount.toLocaleString()}
                  </span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      invoice.status === 'paid'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                    }`}
                  >
                    {invoice.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderProjects = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Projects
        </h2>
        <button className="btn-primary">New Project</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <div
            key={project.id}
            className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-soft border border-gray-100 dark:border-dark-700"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900 dark:text-white">
                {project.name}
              </h3>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === 'completed'
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                    : project.status === 'in-progress'
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                }`}
              >
                {project.status.replace('-', ' ')}
              </span>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Client: {project.client}
            </p>

            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-dark-600 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    project.status === 'completed'
                      ? 'bg-green-500'
                      : project.status === 'in-progress'
                        ? 'bg-blue-500'
                        : 'bg-yellow-500'
                  }`}
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>

            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
              <span>Deadline: {project.deadline}</span>
              <button className="text-blue-600 dark:text-blue-400 hover:underline">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderInvoices = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Invoices
        </h2>
        <button className="btn-primary">Download All</button>
      </div>

      <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-soft border border-gray-100 dark:border-dark-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-dark-700">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900 dark:text-white">
                  Invoice ID
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900 dark:text-white">
                  Date
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900 dark:text-white">
                  Amount
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900 dark:text-white">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900 dark:text-white">
                  Due Date
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900 dark:text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-dark-600">
              {invoices.map(invoice => (
                <tr
                  key={invoice.id}
                  className="hover:bg-gray-50 dark:hover:bg-dark-700"
                >
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                    {invoice.id}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                    {invoice.date}
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white">
                    ${invoice.amount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        invoice.status === 'paid'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                      }`}
                    >
                      {invoice.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                    {invoice.dueDate}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <button className="text-blue-600 dark:text-blue-400 hover:underline mr-3">
                      View
                    </button>
                    <button className="text-gray-600 dark:text-gray-400 hover:underline">
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderDocuments = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Documents
        </h2>
        <button className="btn-primary">Upload Document</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            name: 'Project Proposal.pdf',
            type: 'pdf',
            size: '2.4 MB',
            date: '2024-01-10',
          },
          {
            name: 'Contract Agreement.docx',
            type: 'doc',
            size: '1.8 MB',
            date: '2024-01-08',
          },
          {
            name: 'Technical Specs.pdf',
            type: 'pdf',
            size: '3.2 MB',
            date: '2024-01-05',
          },
          {
            name: 'Meeting Notes.txt',
            type: 'txt',
            size: '0.5 MB',
            date: '2024-01-03',
          },
          {
            name: 'Project Timeline.xlsx',
            type: 'xls',
            size: '1.1 MB',
            date: '2024-01-01',
          },
          {
            name: 'Security Audit.pdf',
            type: 'pdf',
            size: '4.7 MB',
            date: '2023-12-28',
          },
        ].map((doc, index) => (
          <div
            key={index}
            className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-soft border border-gray-100 dark:border-dark-700"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mr-4">
                {doc.type === 'pdf' && (
                  <span className="text-white font-bold text-xs">PDF</span>
                )}
                {doc.type === 'doc' && (
                  <span className="text-white font-bold text-xs">DOC</span>
                )}
                {doc.type === 'xls' && (
                  <span className="text-white font-bold text-xs">XLS</span>
                )}
                {doc.type === 'txt' && (
                  <span className="text-white font-bold text-xs">TXT</span>
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white truncate">
                  {doc.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {doc.size}
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {doc.date}
              </span>
              <button className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-8">
      <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-soft border border-gray-100 dark:border-dark-700">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Account Settings
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Personal Information
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  defaultValue={user.name}
                  className="w-full p-3 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  defaultValue={user.email}
                  className="w-full p-3 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Company
                </label>
                <input
                  type="text"
                  defaultValue={user.company}
                  className="w-full p-3 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-gray-900 dark:text-white"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mb-4">
              <HiUser className="w-16 h-16 text-white" />
            </div>
            <button className="btn-outline">Change Avatar</button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-dark-600">
          <button className="btn-primary">Update Profile</button>
        </div>
      </div>

      <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-soft border border-gray-100 dark:border-dark-700">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
          Security Settings
        </h3>

        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-dark-700 rounded-lg">
            <div className="flex items-center">
              <HiLockClosed className="w-5 h-5 text-gray-600 dark:text-gray-400 mr-3" />
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">
                  Two-Factor Authentication
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Add an extra layer of security to your account
                </p>
              </div>
            </div>
            <button className="btn-outline text-sm">Enable</button>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-dark-700 rounded-lg">
            <div className="flex items-center">
              <HiShieldCheck className="w-5 h-5 text-gray-600 dark:text-gray-400 mr-3" />
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">
                  Password
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Change your account password
                </p>
              </div>
            </div>
            <button className="btn-outline text-sm">Change</button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return renderDashboard();
      case 'projects':
        return renderProjects();
      case 'invoices':
        return renderInvoices();
      case 'documents':
        return renderDocuments();
      case 'settings':
        return renderSettings();
      default:
        return renderDashboard();
    }
  };

  return (
    <ErrorBoundary>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-dark-900 dark:to-dark-800">
      <Navbar isTransparent={true} />

      <section className="pt-32 pb-16">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-soft border border-gray-100 dark:border-dark-700 sticky top-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mr-4">
                    <HiUser className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">
                      {user.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {user.role}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      {user.company}
                    </p>
                  </div>
                </div>

                <nav className="space-y-2">
                  {tabs.map(tab => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full text-left px-4 py-3 rounded-lg flex items-center space-x-3 transition-colors ${
                          activeTab === tab.id
                            ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                            : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-dark-700'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{tab.label}</span>
                      </button>
                    );
                  })}
                </nav>

                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-dark-600">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">
                        Role
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white capitalize">
                        {userRole}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">
                        Last Login
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {user.lastLogin}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">
                        Account Since
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {user.joinDate}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-display font-bold mb-2 text-gray-900 dark:text-white">
                  Client Portal
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  Manage your projects, invoices, and documents in one place
                </p>
              </div>
              {renderTabContent()}
            </div>
          </div>
        </div>
      </section>
    </div>
    </ErrorBoundary>
  );
};

export default ClientPortal;
