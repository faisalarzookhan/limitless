// Database Configuration for Development Environment
// Configuration for connecting to Supabase and other database services

module.exports = {
  supabase: {
    url: process.env.VITE_SUPABASE_URL || 'http://localhost:54321',
    key: process.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key-here',
  },

  connection: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_NAME || 'limitless_infotech_dev',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
  },

  pool: {
    min: 2,
    max: 10,
  },

  migrations: {
    directory: './migrations',
    tableName: 'knex_migrations',
  },

  // Additional development-specific settings
  debug: true,
  log: {
    warn: message => console.warn('[DB-WARN]', message),
    error: message => console.error('[DB-ERROR]', message),
    deprecate: message => console.warn('[DB-DEPRECATE]', message),
  },
};
