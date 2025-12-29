// Database Configuration for Testing Environment
// Configuration for connecting to test database

module.exports = {
  supabase: {
    url: process.env.VITE_SUPABASE_URL || 'http://localhost:54321',
    key: process.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key-here',
  },

  connection: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_NAME || 'limitless_infotech_test',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
  },

  pool: {
    min: 1,
    max: 5,
  },

  migrations: {
    directory: './migrations',
    tableName: 'knex_migrations',
  },

  // Testing-specific settings
  debug: false,
  log: {
    warn: message => console.warn('[DB-WARN]', message),
    error: message => console.error('[DB-ERROR]', message),
    deprecate: message => console.warn('[DB-DEPRECATE]', message),
  },
};
