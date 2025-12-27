// src/setupTests.js
// Setup tests environment

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock IntersectionObserver
class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
}
window.IntersectionObserver = IntersectionObserver;

// Mock ResizeObserver
class ResizeObserver {
  constructor(callback) {
    this.callback = callback;
  }
  observe() {
    // Mock implementation
  }
  unobserve() {
    // Mock implementation
  }
  disconnect() {
    // Mock implementation
  }
}
window.ResizeObserver = ResizeObserver;

// Mock requestAnimationFrame
window.requestAnimationFrame = function(callback) {
  return setTimeout(callback, 0);
};

// Mock cancelAnimationFrame
window.cancelAnimationFrame = function(id) {
  clearTimeout(id);
};

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

// Mock sessionStorage
const sessionStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
Object.defineProperty(window, 'sessionStorage', {
  value: sessionStorageMock,
});

// Mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
    text: () => Promise.resolve(''),
    ok: true,
    status: 200,
  })
);

// Mock console.error to throw errors for better test feedback
global.console.error = jest.fn((...args) => {
  if (args[0] && args[0].stack) {
    throw args[0];
  }
  throw new Error(`console.error was called with: ${args.join(' ')}`);
});

// Mock console.warn to throw errors for better test feedback
global.console.warn = jest.fn((...args) => {
  if (args[0] && args[0].stack) {
    throw args[0];
  }
  throw new Error(`console.warn was called with: ${args.join(' ')}`);
});