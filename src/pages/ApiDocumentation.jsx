import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  FileText,
  Terminal,
  Lock,
  RefreshCw,
  User,
  Briefcase,
  Calendar,
  BarChart3,
  Cpu,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Zap,
  Box,
  Globe,
  Database,
  Search,
  CheckCircle2,
  Play
} from 'lucide-react';
import ErrorBoundary from '../components/ErrorBoundary';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const ApiDocumentation = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedEndpoint, setSelectedEndpoint] = useState(null);

  const apiEndpoints = {
    auth: [
      {
        method: 'POST',
        path: '/api/auth/login',
        description: 'Authenticate user and get access token',
        parameters: [
          { name: 'email', type: 'string', required: true, description: 'User email address' },
          { name: 'password', type: 'string', required: true, description: 'User password' },
        ],
        responses: [
          { code: 200, description: 'Successful authentication', example: { token: 'jwt_token_here', user: { id: 1, email: 'user@example.com' } } },
          { code: 401, description: 'Invalid credentials' },
        ],
      },
      {
        method: 'POST',
        path: '/api/auth/register',
        description: 'Register a new user account',
        parameters: [
          { name: 'email', type: 'string', required: true, description: 'User email address' },
          { name: 'password', type: 'string', required: true, description: 'User password (min 8 characters)' },
          { name: 'name', type: 'string', required: true, description: 'User full name' },
        ],
        responses: [
          { code: 201, description: 'User created successfully', example: { user: { id: 1, email: 'user@example.com' }, token: 'jwt_token_here' } },
          { code: 409, description: 'Email already exists' },
        ],
      },
    ],
    users: [
      {
        method: 'GET',
        path: '/api/users/profile',
        description: 'Get current user profile information',
        headers: [{ name: 'Authorization', required: true, description: 'Bearer token' }],
        responses: [
          { code: 200, description: 'User profile retrieved', example: { id: 1, email: 'user@example.com', name: 'John Doe', role: 'user' } },
          { code: 401, description: 'Unauthorized' },
        ],
      },
      {
        method: 'PUT',
        path: '/api/users/profile',
        description: 'Update user profile information',
        headers: [{ name: 'Authorization', required: true, description: 'Bearer token' }],
        parameters: [
          { name: 'name', type: 'string', required: false, description: 'User full name' },
          { name: 'email', type: 'string', required: false, description: 'User email address' },
        ],
        responses: [
          { code: 200, description: 'Profile updated successfully', example: { id: 1, email: 'updated@example.com', name: 'Updated Name' } },
          { code: 401, description: 'Unauthorized' },
        ],
      },
    ],
    products: [
      {
        method: 'GET',
        path: '/api/products',
        description: 'Get list of all products',
        headers: [{ name: 'Authorization', required: true, description: 'Bearer token' }],
        responses: [
          { code: 200, description: 'Products retrieved successfully', example: [{ id: 1, name: 'TrackIT', description: 'Project tracking solution', status: 'active' }] },
          { code: 401, description: 'Unauthorized' },
        ],
      },
    ],
    analytics: [
      {
        method: 'GET',
        path: '/api/analytics/dashboard',
        description: 'Get dashboard analytics data',
        headers: [{ name: 'Authorization', required: true, description: 'Bearer token' }],
        responses: [
          { code: 200, description: 'Analytics data retrieved', example: { users: 1000, activeProjects: 50, revenue: 50000 } },
          { code: 401, description: 'Unauthorized' },
        ],
      },
    ],
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: FileText },
    { id: 'auth', label: 'Authentication', icon: Lock },
    { id: 'users', label: 'Users', icon: User },
    { id: 'products', label: 'Products', icon: Briefcase },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  ];

  const renderOverview = () => (
    <motion.div className="space-y-12" variants={containerVariants} initial="hidden" animate="visible">
      <motion.div className="bg-white/5 rounded-[40px] p-10 backdrop-blur-3xl border border-white/10 relative overflow-hidden" variants={itemVariants}>
        <div className="relative z-10">
          <h2 className="text-3xl font-black mb-8 text-white italic tracking-tight">API Synthesis</h2>
          <p className="text-lg text-gray-400 mb-12 font-medium leading-relaxed max-w-2xl">
            Our RESTful API provides programmatic access to all systemic nodes. All endpoints are secured with 256-bit encryption and deterministic JWT authentication.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Code2, title: 'REST Architecture', desc: 'Predictive endpoint design following strict REST principles.', color: 'text-primary-400' },
              { icon: Lock, title: 'Secure Vault', desc: 'Default JWT sync and HTTPS encapsulation for all packets.', color: 'text-secondary-400' },
              { icon: RefreshCw, title: 'Velocity Control', desc: 'Fair usage rate limiting ensuring millisecond precision.', color: 'text-white' },
            ].map((feature, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <feature.icon className={`w-10 h-10 ${feature.color} mb-6`} />
                <h3 className="font-black text-white uppercase tracking-widest text-sm mb-3">{feature.title}</h3>
                <p className="text-xs text-gray-500 font-bold leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-3xl bg-dark-950 border border-white/5">
            <h3 className="text-[10px] font-black mb-4 text-gray-500 uppercase tracking-[0.4em]">Root Node URL</h3>
            <div className="flex items-center gap-4 bg-[#0e1114] p-4 rounded-2xl border border-white/5 overflow-hidden">
               <code className="text-primary-400 font-mono text-sm tracking-tight">https://api.limitlessinfotech.com/v1</code>
               <button className="ml-auto p-2 hover:bg-white/5 rounded-lg transition-colors">
                  <RefreshCw className="w-4 h-4 text-gray-600" />
               </button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-grid-white/[0.01]" />
      </motion.div>

      <motion.div className="bg-white/5 rounded-[40px] p-10 border border-white/10" variants={itemVariants}>
        <h2 className="text-2xl font-black mb-8 text-white italic tracking-tight">Handshake Protocol</h2>
        <p className="text-gray-400 mb-12 font-medium leading-relaxed max-w-2xl">
          Integrate the Authorization header with a valid JWT pulse for all requests.
        </p>

        <div className="bg-[#0e1114] rounded-2xl p-8 border border-white/5 mb-12">
           <h3 className="text-[10px] font-black mb-6 text-gray-500 uppercase tracking-[0.4em]">Header Synthesis</h3>
           <pre className="font-mono text-xs text-secondary-400 overflow-x-auto selection:bg-secondary-500/30">
             {`curl -X GET https://api.limitlessinfotech.com/v1/users/profile \\
-H "Authorization: Bearer YOUR_SYNAPSE_TOKEN" \\
-H "Content-Type: application/json"`}
           </pre>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { label: 'IP RATE LIMIT', value: '1,000 / HR' },
             { label: 'USER RATE LIMIT', value: '100 / MIN' },
             { label: 'GLOBAL SYNC', value: '99.99%' }
           ].map((stat, idx) => (
             <div key={idx} className="text-center p-6 border-r border-white/5 last:border-0">
                <div className="text-xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-[10px] font-black text-gray-600 uppercase tracking-widest">{stat.label}</div>
             </div>
           ))}
        </div>
      </motion.div>
    </motion.div>
  );

  const renderEndpoint = endpoint => (
    <motion.div 
      className="bg-white/5 rounded-[40px] p-8 border border-white/10 mb-8 overflow-hidden group hover:border-primary-500/30 transition-all duration-500" 
      variants={itemVariants}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div className="flex items-center gap-6">
          <span
            className={`px-4 py-2 rounded-xl text-[10px] font-black tracking-widest uppercase ${
              endpoint.method === 'GET'
                ? 'bg-green-500/10 text-green-500 border border-green-500/20'
                : endpoint.method === 'POST'
                  ? 'bg-blue-500/10 text-blue-500 border border-blue-500/20'
                  : 'bg-amber-500/10 text-amber-500 border border-amber-500/20'
            }`}
          >
            {endpoint.method}
          </span>
          <code className="text-lg font-black text-white italic tracking-tight group-hover:text-primary-400 transition-colors">
            {endpoint.path}
          </code>
        </div>
        <button
          onClick={() => setSelectedEndpoint(selectedEndpoint === endpoint.path ? null : endpoint.path)}
          className="px-6 py-2 rounded-xl bg-white/5 text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white hover:bg-white/10 transition-all flex items-center gap-2"
        >
          {selectedEndpoint === endpoint.path ? 'Collapse Node' : 'Expand Node'}
          <ChevronRight className={`w-3 h-3 transition-transform ${selectedEndpoint === endpoint.path ? 'rotate-90' : ''}`} />
        </button>
      </div>

      <p className="text-gray-400 font-medium text-sm leading-relaxed mb-8 max-w-2xl px-2">
        {endpoint.description}
      </p>

      <AnimatePresence>
        {selectedEndpoint === endpoint.path && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="space-y-12 pt-8 border-t border-white/5 px-2">
              {endpoint.parameters && (
                <div className="space-y-6">
                  <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em]">Input Parameters</h4>
                  <div className="space-y-4">
                    {endpoint.parameters.map((param, idx) => (
                      <div key={idx} className="flex justify-between items-center p-6 bg-[#0e1114] rounded-3xl border border-white/5 hover:border-white/10 transition-colors group/row">
                        <div className="flex items-center gap-4">
                          <code className="text-sm font-black text-primary-400 uppercase tracking-widest">{param.name}</code>
                          <span className="px-2 py-0.5 rounded-lg bg-white/5 text-[8px] font-black text-gray-500 uppercase">{param.type}</span>
                          {param.required && <span className="text-[8px] font-black text-red-500 uppercase tracking-widest italic">Required</span>}
                        </div>
                        <span className="text-xs text-gray-500 font-bold italic">{param.description}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-6">
                <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em]">Response Synthesis</h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {endpoint.responses.map((response, idx) => (
                    <div key={idx} className="bg-[#0e1114] rounded-[32px] p-8 border border-white/5">
                      <div className="flex items-center justify-between mb-6">
                        <span className={`text-xs font-black p-2 rounded-xl ${response.code === 200 || response.code === 201 ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'}`}>
                          HTTP {response.code}
                        </span>
                        <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">{response.description}</span>
                      </div>
                      <pre className="text-xs font-mono text-secondary-400 bg-black/30 p-6 rounded-2xl overflow-x-auto whitespace-pre-wrap selection:bg-secondary-500/30">
                        {JSON.stringify(response.example, null, 2)}
                      </pre>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen bg-dark-900 overflow-hidden text-white selection:bg-primary-500/30">
        {/* Ambient background particles/glows */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 right-[-10%] w-[60%] h-[60%] bg-primary-500/5 blur-[150px] rounded-full" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-secondary-500/5 blur-[150px] rounded-full" />
          <div className="absolute inset-0 bg-grid-white/[0.01]" />
        </div>

        {/* Hero Section */}
        <section className="relative pt-40 pb-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div variants={itemVariants} initial="hidden" animate="visible" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
              <Terminal className="w-4 h-4 text-primary-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">Developer Interface — API Docs</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} initial="hidden" animate="visible" className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tighter text-white uppercase italic">
              Architect <span className="not-italic bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent underline decoration-white/10 underline-offset-8">Documentation</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} initial="hidden" animate="visible" className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-16 font-medium">
              A comprehensive portal for high-precision systemic integration. Build high-trust applications on the Limitless backbone.
            </motion.p>
            
            <motion.div 
               variants={itemVariants} initial="hidden" animate="visible"
               className="flex flex-wrap justify-center gap-6"
            >
               <button className="px-12 py-5 bg-white text-dark-900 font-black rounded-3xl hover:bg-gray-200 transition-all text-sm uppercase tracking-[0.2em] shadow-2xl flex items-center gap-3">
                  <Play className="w-4 h-4 fill-current" />
                  API Playground
               </button>
               <button className="px-12 py-5 bg-white/5 text-white font-bold rounded-3xl border border-white/10 hover:bg-white/10 transition-all text-sm flex items-center gap-3 group">
                  Retrieve Global SDK <Box className="w-4 h-4 group-hover:scale-110 transition-transform" />
               </button>
            </motion.div>
          </div>
        </section>

        {/* Main Content Hub */}
        <section className="py-24 px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col xl:flex-row gap-16">
              {/* Specialized Sidebar */}
              <div className="xl:w-1/4">
                 <motion.div 
                   variants={itemVariants} initial="hidden" animate="visible"
                   className="sticky top-32 p-10 rounded-[48px] bg-white/5 border border-white/10 backdrop-blur-3xl"
                 >
                    <h3 className="text-[10px] font-black text-primary-400 uppercase tracking-[0.4em] mb-12">Registry Sections</h3>
                    <nav className="space-y-4">
                       {tabs.map(tab => (
                         <button
                           key={tab.id}
                           onClick={() => setActiveTab(tab.id)}
                           className={`w-full flex items-center gap-5 p-5 rounded-2xl transition-all group ${
                             activeTab === tab.id 
                             ? 'bg-white text-dark-900 shadow-2xl translate-x-1' 
                             : 'text-gray-500 hover:text-white hover:bg-white/5'
                           }`}
                         >
                            <tab.icon className={`w-5 h-5 ${activeTab === tab.id ? 'text-primary-600' : 'text-gray-600 group-hover:text-primary-400'}`} />
                            <span className="text-sm font-black uppercase tracking-widest">{tab.label}</span>
                         </button>
                       ))}
                    </nav>

                    <div className="mt-20 pt-10 border-t border-white/10">
                       <div className="flex items-center gap-4 group cursor-pointer">
                          <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center border border-green-500/20">
                             <CheckCircle2 className="w-5 h-5 text-green-500" />
                          </div>
                          <div>
                             <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-0.5">Global Status</div>
                             <div className="text-xs font-bold text-white group-hover:text-green-500 transition-colors">OPERATIONAL</div>
                          </div>
                       </div>
                    </div>
                 </motion.div>
              </div>

              {/* Main Feed Content */}
              <div className="xl:flex-1 min-h-[800px]">
                 <AnimatePresence mode="wait">
                   <motion.div
                     key={activeTab}
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: -20 }}
                     transition={{ duration: 0.5 }}
                   >
                     {activeTab === 'overview' ? renderOverview() : (
                       <div className="space-y-6">
                         <div className="mb-12">
                            <h2 className="text-4xl font-black text-white italic tracking-tighter mb-4 capitalize">{activeTab} Nodes</h2>
                            <p className="text-gray-500 font-medium tracking-widest uppercase text-xs">Primary documentation for {activeTab} protocol endpoints.</p>
                         </div>
                         {apiEndpoints[activeTab]?.map(renderEndpoint)}
                       </div>
                     )}
                   </motion.div>
                 </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* Playground Container */}
        <section id="playground" className="py-32 px-6 bg-dark-950/50 relative overflow-hidden">
           <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-24">
                 <h2 className="text-4xl md:text-7xl font-black text-white italic tracking-tighter uppercase mb-8">Nodal <span className="not-italic bg-gradient-to-r from-primary-400 to-white bg-clip-text text-transparent">Simulator</span></h2>
                 <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium italic">Interact with systemic endpoints directly via our architectural playground.</p>
              </div>

              <div className="p-1 rounded-[64px] bg-gradient-to-br from-white/10 to-transparent border border-white/10 overflow-hidden shadow-3xl">
                 <div className="bg-[#0e1114]/80 backdrop-blur-3xl rounded-[62px] p-8 md:p-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                       <div className="space-y-10">
                          <div className="flex items-center gap-3 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 w-fit">
                             <div className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
                             <span className="text-[8px] font-black text-primary-400 uppercase tracking-widest">Simulation Mode Active</span>
                          </div>
                          <h3 className="text-2xl font-black text-white italic tracking-tight">Sync Request Builder</h3>
                          
                          <div className="space-y-8">
                             <div className="space-y-4">
                                <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em]">Protocol Method</label>
                                <select className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white font-bold focus:ring-2 focus:ring-primary-500/30">
                                   <option>GET — RETRIEVE</option>
                                   <option>POST — EXECUTE</option>
                                   <option>PUT — MUTATE</option>
                                   <option>DELETE — TERMINATE</option>
                                </select>
                             </div>
                             <div className="space-y-4">
                                <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em]">Node Path</label>
                                <div className="relative">
                                   <input type="text" placeholder="/api/users/profile" className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 pl-8 text-white font-mono text-sm" />
                                   <Globe className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-700" />
                                </div>
                             </div>
                             <button className="w-full py-6 rounded-3xl bg-primary-500 text-dark-900 font-black text-sm uppercase tracking-[0.3em] hover:bg-primary-400 transition-all shadow-xl shadow-primary-500/10 flex items-center justify-center gap-3">
                                <Play className="w-4 h-4 fill-current" />
                                Initiate Synchronicity
                             </button>
                          </div>
                       </div>

                       <div className="space-y-10">
                          <h3 className="text-2xl font-black text-white italic tracking-tight">Signal Response</h3>
                          <div className="h-[400px] bg-black/50 rounded-[40px] border border-white/5 p-8 relative overflow-hidden">
                             <pre className="font-mono text-xs text-secondary-400 selection:bg-secondary-500/30 leading-relaxed">
{`{
  "status": "success",
  "latency": "14ms",
  "data": {
    "node": "central-primary-01",
    "payload": {
       "user_id": "LX-942",
       "auth_lvl": "Architect",
       "status": "Synchronized"
    }
  }
}`}
                             </pre>
                             <div className="absolute top-4 right-8 flex gap-2">
                                <div className="w-2 h-2 rounded-full bg-primary-500/20" />
                                <div className="w-2 h-2 rounded-full bg-secondary-500/20" />
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
           <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-20" />
        </section>

        {/* Global Documentation CTA */}
        <section className="py-40 px-6">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="max-w-6xl mx-auto p-16 md:p-28 rounded-[88px] bg-gradient-to-br from-primary-600/30 via-secondary-600/30 to-dark-950 border border-white/10 text-center relative overflow-hidden"
           >
              <div className="relative z-10 space-y-12">
                 <div className="flex justify-center flex-wrap gap-8 mb-16">
                    {['JAVASCRIPT', 'PYTHON', 'JAVA', '.NET'].map(lib => (
                      <div key={lib} className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4 group hover:bg-white text-gray-500 hover:text-dark-900 transition-all">
                         <Box className="w-5 h-5" />
                         <span className="text-[10px] font-black uppercase tracking-widest">{lib} SDK</span>
                      </div>
                    ))}
                 </div>
                 <h2 className="text-4xl md:text-8xl font-black text-white tracking-tighter italic uppercase leading-none">Ready for <span className="not-italic bg-gradient-to-r from-primary-400 to-white bg-clip-text text-transparent underline decoration-white/10 underline-offset-8">Integration</span>?</h2>
                 <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
                    Initiate your developer account and access restricted neural endpoints for enterprise-grade architectural deployments.
                 </p>
                 <div className="flex flex-wrap justify-center gap-8 pt-8">
                    <button className="px-16 py-6 bg-white text-dark-900 font-black rounded-3xl hover:bg-gray-200 transition-all text-sm uppercase tracking-[0.3em] shadow-2xl">
                       Get API Credentials
                    </button>
                    <button className="px-16 py-6 bg-white/5 text-white font-bold rounded-3xl border border-white/10 hover:bg-white/10 transition-all text-sm flex items-center gap-3 group">
                       Consult Engineering <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                 </div>
              </div>
              <div className="absolute inset-0 bg-grid-white/[0.03]" />
           </motion.div>
        </section>
      </div>
    </ErrorBoundary>
  );
};

export default ApiDocumentation;
