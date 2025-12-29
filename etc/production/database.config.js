// Database Configuration for Production Environment
// Configuration for connecting to Supabase and other database services

module.exports = {
  supabase: {
    url: process.env.VITE_SUPABASE_URL || 'https://.supabase.co',
    key: process.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key-here',
  },

  connection: {
    host: process.env.DB_HOST || 'your-prod-db-host',
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_NAME || 'limitless_infotech_prod',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'your-secure-password',
  },

  pool: {
    min: 5,
    max: 25,
    acquireTimeoutMillis: 60000,
    createTimeoutMillis: 30000,
    idleTimeoutMillis: 30000,
    createRetryIntervalMillis: 200,
  },

  migrations: {
    directory: './migrations',
    tableName: 'knex_migrations',
  },

  // Production-specific settings
  debug: false,
  ssl: {
    rejectUnauthorized: true,
  },
  log: {
    warn: message => console.warn('[DB-WARN]', message),
    error: message => console.error('[DB-ERROR]', message),
    deprecate: message => console.warn('[DB-DEPRECATE]', message),
  },
};
