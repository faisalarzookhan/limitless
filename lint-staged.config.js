// lint-staged.config.js
// Configuration for lint-staged to run code quality checks on staged files

module.exports = {
  // Run ESLint on JavaScript and JSX files
  '*.{js,jsx,ts,tsx}': [
    'eslint --fix',
    'prettier --write',
  ],
  
  // Run Prettier on other file types
  '*.{json,md,css,scss,less,html,yml,yaml}': [
    'prettier --write',
  ],
  
  // Run type checking on TypeScript files
  '*.{ts,tsx}': [
    'tsc --noEmit',
  ],
  
  // Run additional checks if needed
  '*.{js,jsx,ts,tsx,json,md}': [
    'echo "Code quality check passed for:"',
    'echo',
  ],
};