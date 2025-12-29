// playwright.config.js
// Playwright configuration for end-to-end testing

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  // Timeout settings
  timeout: 30000,
  expect: {
    timeout: 5000,
  },

  // Global setup
  globalSetup: require.resolve('./tests/global-setup'),
  globalTeardown: require.resolve('./tests/global-teardown'),

  // Test directory
  testDir: 'tests/e2e',

  // Maximum time for each test
  globalTimeout: 60 * 60 * 1000, // 1 hour

  // Number of retry attempts
  retries: 1,

  // Number of workers (parallel execution)
  workers: process.env.CI ? 1 : 2,

  // Reporter options
  reporter: [
    ['html', { outputFolder: 'playwright-report' }],
    ['json', { outputFile: 'test-results.json' }],
    ['junit', { outputFile: 'junit-results.xml' }],
  ],

  // Shared settings for all projects
  use: {
    // Screenshot settings
    screenshot: 'only-on-failure',
    video: 'retry-with-video',
    trace: 'on-first-retry',

    // Browser settings
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    actionTimeout: 0,

    // Base URL for tests
    baseURL: process.env.BASE_URL || 'http://localhost:5173',
  },

  // Different browser configurations
  projects: [
    {
      name: 'chromium',
      use: {
        ...require('@playwright/test').devices['Desktop Chrome'],
      },
    },
    {
      name: 'firefox',
      use: {
        ...require('@playwright/test').devices['Desktop Firefox'],
      },
    },
    {
      name: 'webkit',
      use: {
        ...require('@playwright/test').devices['Desktop Safari'],
      },
    },

    // Mobile browsers
    {
      name: 'Mobile Chrome',
      use: {
        ...require('@playwright/test').devices['Pixel 5'],
      },
    },
    {
      name: 'Mobile Safari',
      use: {
        ...require('@playwright/test').devices['iPhone 12'],
      },
    },
  ],

  // Web server configuration for testing
  webServer: {
    command: 'npm run dev',
    port: 5173,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
};

module.exports = config;
