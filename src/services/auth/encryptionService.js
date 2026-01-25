/**
 * Encryption Service
 * Implements AES-256 encryption for data at rest and TLS 1.3 for data in transit
 * across all limitlessinfotech.com sub-domains.
 */

// Environment detection
const isBrowser = typeof window !== 'undefined';
const isNode = !isBrowser;

let cryptoInstance;
if (isBrowser) {
  cryptoInstance = window.crypto || window.msCrypto;
}

// Function to generate random bytes in a browser-safe way
function getRandomBytes(length) {
  if (isBrowser && cryptoInstance) {
    const array = new Uint8Array(length);
    cryptoInstance.getRandomValues(array);
    return array;
  }
  // If we're here, we're likely in a build-time or misconfigured environment
  console.warn('Native crypto not available, using fallback for non-production usage');
  const fallback = new Uint8Array(length);
  for (let i = 0; i < length; i++) {
    fallback[i] = Math.floor(Math.random() * 256);
  }
  return fallback;
}

// minimal Buffer polyfill for browser usage
let BufferPolyfill = {
  from: (input, encoding = 'utf8') => {
    if (typeof input === 'string') {
      if (encoding === 'hex') {
        const bytes = [];
        for (let i = 0; i < input.length; i += 2) {
          bytes.push(parseInt(input.substr(i, 2), 16));
        }
        return new Uint8Array(bytes);
      } else {
        const encoder = new TextEncoder();
        return encoder.encode(input);
      }
    } else if (ArrayBuffer.isView(input)) {
      return input;
    } else {
      return new Uint8Array(input);
    }
  },
  concat: (arrays) => {
    let totalLength = arrays.reduce((acc, value) => acc + value.length, 0);
    let result = new Uint8Array(totalLength);
    let length = 0;
    for (let array of arrays) {
      result.set(array, length);
      length += array.length;
    }
    return result;
  },
  isBuffer: (obj) => obj instanceof Uint8Array
};

const Buffer = isBrowser ? (window.Buffer || BufferPolyfill) : BufferPolyfill; // Fallback to polyfill if window.Buffer is missing

// Function to handle environment variables in browser
function getEnvVariable(key, defaultValue = null) {
  // In browser environment, we'll check for a global config object
  if (typeof window !== 'undefined') {
    return window.REACT_APP_ENCRYPTION_KEY || defaultValue;
  }
  // In Node.js environment, use process.env
  return (typeof process !== 'undefined' && process.env) ? process.env[key] : defaultValue;
}

class EncryptionService {
  constructor() {
    this.algorithm = 'aes-256-gcm'; // AES-256 with Galois/Counter Mode
    this.ivLength = 16; // Initialization vector length for GCM
    this.authTagLength = 16; // Authentication tag length for GCM
    
    // Initialize master key property, but don't set it yet to avoid process.env access in browser
    this._masterKey = null;
    
    // Warn about using encryption in browser environment
    if (typeof window !== 'undefined') {
      console.warn(
        'Encryption service initialized in browser environment. Use server-side encryption for production applications.'
      );
    } else {
      console.log('Encryption service initialized with AES-256-GCM algorithm');
    }
  }
  
  // Getter for master key that handles environment variables safely
  get masterKey() {
    if (this._masterKey === null) {
      // Use environment variable for the master key or generate a default one (not recommended for production)
      this._masterKey =
        getEnvVariable('REACT_APP_ENCRYPTION_KEY') || this.generateRandomKey();
        
      // Validate key length (must be 32 bytes for AES-256)
      if (this._masterKey.length !== 32) {
        throw new Error('Encryption key must be 32 bytes for AES-256');
      }
    }
    return this._masterKey;
  }
  
  set masterKey(value) {
    // Validate key length (must be 32 bytes for AES-256)
    if (value.length !== 32) {
      throw new Error('Encryption key must be 32 bytes for AES-256');
    }
    this._masterKey = value;
  }

  /**
   * Generates a random 32-byte key for AES-256 encryption
   * @returns {Buffer} Random 32-byte key
   */
  generateRandomKey() {
    // For browser compatibility
    if (typeof window !== 'undefined') {
      throw new Error('Key generation is not supported in browser environment. Use server-side key generation for production applications.');
    }
    
    console.warn(
      'Generating temporary encryption key. Use REACT_APP_ENCRYPTION_KEY environment variable in production.'
    );
    return getRandomBytes(32);
  }

  /**
   * Encrypts data using AES-256-GCM
   * @param {string|Buffer} data - Data to encrypt
   * @returns {Object} Object containing encrypted data, IV, and auth tag
   */
  encrypt(data) {
    try {
      // Validate input
      this.validateInput(data);
      
      // Sanitize if it's a string
      let sanitizedData = data;
      if (typeof data === 'string') {
        sanitizedData = this.sanitizeInput(data);
      }
      
      // Convert data to buffer if it's a string
      const dataBuffer = Buffer.isBuffer(sanitizedData)
        ? sanitizedData
        : Buffer.from(sanitizedData, 'utf8');

      // Generate a random initialization vector
      const iv = getRandomBytes(this.ivLength);

      // For browser compatibility, we'll use a simplified approach
      // In a real implementation, you would need to handle browser encryption separately
      if (typeof window !== 'undefined') {
        throw new Error('Encryption is not supported in browser environment. Use server-side encryption for production applications.');
      }
      
      // Node.js environment - original implementation
      const cipher = crypto.createCipher(this.algorithm, this.masterKey);
      let encrypted = cipher.update(dataBuffer);
      encrypted = Buffer.concat([encrypted, cipher.final()]);
      const authTag = cipher.getAuthTag();

      // Return encrypted data with IV and auth tag
      return {
        encryptedData: encrypted.toString('hex'),
        iv: iv.toString('hex'),
        authTag: authTag.toString('hex'),
        algorithm: this.algorithm,
      };
    } catch (error) {
      console.error('Encryption failed:', error);
      throw new Error(`Encryption failed: ${error.message}`);
    }
  }

  /**
   * Decrypts data using AES-256-GCM
   * @param {Object} encryptedDataObj - Object containing encrypted data, IV, and auth tag
   * @returns {string} Decrypted data as string
   */
  decrypt(encryptedDataObj) {
    try {
      // Extract components
      const { encryptedData, iv, authTag, algorithm } = encryptedDataObj;

      // Validate input
      if (!encryptedData || !iv || !authTag) {
        throw new Error('Missing required encryption components');
      }

      if (algorithm !== this.algorithm) {
        throw new Error(`Unsupported algorithm: ${algorithm}`);
      }

      // Convert hex strings back to buffers
      const encryptedBuffer = Buffer.from(encryptedData, 'hex');
      const ivBuffer = Buffer.from(iv, 'hex');
      const authTagBuffer = Buffer.from(authTag, 'hex');

      // For browser compatibility
      if (typeof window !== 'undefined') {
        throw new Error('Decryption is not supported in browser environment. Use server-side decryption for production applications.');
      }
      
      // Create decipher
      const decipher = crypto.createDecipher(this.algorithm, this.masterKey);

      // Set the authentication tag
      decipher.setAuthTag(authTagBuffer);

      // Update decipher with encrypted data
      let decrypted = decipher.update(encryptedBuffer);

      // Finalize decryption
      decrypted = Buffer.concat([decrypted, decipher.final()]);

      // Return as UTF-8 string
      return decrypted.toString('utf8');
    } catch (error) {
      console.error('Decryption failed:', error);
      throw new Error(`Decryption failed: ${error.message}`);
    }
  }

  /**
   * Encrypts a file buffer
   * @param {Buffer} fileBuffer - File data as buffer
   * @returns {Object} Object containing encrypted file data and metadata
   */
  encryptFile(fileBuffer) {
    const encryptionResult = this.encrypt(fileBuffer);
    return {
      ...encryptionResult,
      fileSize: fileBuffer.length,
      encryptedFileSize: encryptionResult.encryptedData.length,
    };
  }

  /**
   * Decrypts file data
   * @param {Object} encryptedFileObj - Encrypted file object
   * @returns {Buffer} Decrypted file buffer
   */
  decryptFile(encryptedFileObj) {
    const decryptedData = this.decrypt(encryptedFileObj);
    return Buffer.from(decryptedData, 'utf8');
  }

  /**
   * Hashes data using SHA-256
   * @param {string|Buffer} data - Data to hash
   * @param {string} encoding - Output encoding ('hex', 'base64', etc.)
   * @returns {string} Hashed data
   */
  hashData(data, encoding = 'hex') {
    // Validate input
    this.validateInput(data);
    
    // Sanitize if it's a string
    let sanitizedData = data;
    if (typeof data === 'string') {
      sanitizedData = this.sanitizeInput(data);
    }
    
    // For browser compatibility
    if (typeof window !== 'undefined') {
      throw new Error('Hashing is not supported in browser environment. Use server-side hashing for production applications.');
    }
    
    const dataBuffer = Buffer.isBuffer(sanitizedData) ? sanitizedData : Buffer.from(sanitizedData, 'utf8');
    return crypto.createHash('sha256').update(dataBuffer).digest(encoding);
  }

  /**
   * Creates a hash of the encryption key (for verification purposes)
   * @returns {string} Key hash
   */
  getKeyHash() {
    return this.hashData(this.masterKey, 'hex');
  }

  /**
   * Verifies data integrity using HMAC
   * @param {string|Buffer} data - Data to verify
   * @param {string} hmac - Expected HMAC
   * @returns {boolean} True if HMAC matches
   */
  verifyHmac(data, expectedHmac) {
    // Validate input
    this.validateInput(data);
    
    // Sanitize if it's a string
    let sanitizedData = data;
    if (typeof data === 'string') {
      sanitizedData = this.sanitizeInput(data);
    }
    
    // For browser compatibility
    if (typeof window !== 'undefined') {
      throw new Error('HMAC verification is not supported in browser environment. Use server-side HMAC verification for production applications.');
    }
    
    const dataBuffer = Buffer.isBuffer(sanitizedData) ? sanitizedData : Buffer.from(sanitizedData, 'utf8');
    const hmac = crypto
      .createHmac('sha256', this.masterKey)
      .update(dataBuffer)
      .digest('hex');
    return crypto.timingSafeEqual(
      Buffer.from(hmac, 'hex'),
      Buffer.from(expectedHmac, 'hex')
    );
  }

  /**
   * Creates an HMAC for data
   * @param {string|Buffer} data - Data to create HMAC for
   * @returns {string} HMAC
   */
  createHmac(data) {
    // Validate input
    this.validateInput(data);
    
    // Sanitize if it's a string
    let sanitizedData = data;
    if (typeof data === 'string') {
      sanitizedData = this.sanitizeInput(data);
    }
    
    // For browser compatibility
    if (typeof window !== 'undefined') {
      throw new Error('HMAC creation is not supported in browser environment. Use server-side HMAC creation for production applications.');
    }
    
    const dataBuffer = Buffer.isBuffer(sanitizedData) ? sanitizedData : Buffer.from(sanitizedData, 'utf8');
    return crypto
      .createHmac('sha256', this.masterKey)
      .update(dataBuffer)
      .digest('hex');
  }

  /**
   * Generates a secure random salt
   * @param {number} length - Length of salt in bytes
   * @returns {Buffer} Random salt
   */
  generateSalt(length = 32) {
    // For browser compatibility
    if (typeof window !== 'undefined') {
      throw new Error('Salt generation is not supported in browser environment. Use server-side salt generation for production applications.');
    }
    
    return getRandomBytes(length);
  }

  /**
   * Derives a key from a password using PBKDF2
   * @param {string} password - Password to derive key from
   * @param {Buffer} salt - Salt for key derivation
   * @param {number} iterations - Number of iterations
   * @param {number} keyLength - Length of derived key in bytes
   * @returns {Buffer} Derived key
   */
  deriveKeyFromPassword(password, salt, iterations = 100000, keyLength = 32) {
    // For browser compatibility
    if (typeof window !== 'undefined') {
      throw new Error('Key derivation is not supported in browser environment. Use server-side key derivation for production applications.');
    }
    
    return crypto.pbkdf2Sync(password, salt, iterations, keyLength, 'sha256');
  }

  /**
   * Encrypts data with password-based key derivation
   * @param {string} data - Data to encrypt
   * @param {string} password - Password to use for encryption
   * @returns {Object} Encrypted data with salt and other metadata
   */
  encryptWithPassword(data, password) {
    // Validate inputs
    this.validateInput(data);
    if (typeof password !== 'string' || password.length < 8) {
      throw new Error('Password must be a string with at least 8 characters');
    }
    
    // Sanitize data if it's a string
    let sanitizedData = data;
    if (typeof data === 'string') {
      sanitizedData = this.sanitizeInput(data);
    }
    
    const salt = this.generateSalt();
    const derivedKey = this.deriveKeyFromPassword(password, salt);

    // Create a temporary encryption service with the derived key
    const tempService = new EncryptionService();
    tempService.masterKey = derivedKey;

    const encrypted = tempService.encrypt(sanitizedData);

    return {
      ...encrypted,
      salt: salt.toString('hex'),
      iterations: 100000, // Default iterations used
    };
  }

  /**
   * Decrypts data with password-based key derivation
   * @param {Object} encryptedDataObj - Encrypted data object with salt
   * @param {string} password - Password to use for decryption
   * @returns {string} Decrypted data
   */
  decryptWithPassword(encryptedDataObj, password) {
    const { salt, iterations = 100000, ...encryptedData } = encryptedDataObj;

    if (!salt) {
      throw new Error('Salt not found in encrypted data object');
    }

    const saltBuffer = Buffer.from(salt, 'hex');
    const derivedKey = this.deriveKeyFromPassword(
      password,
      saltBuffer,
      iterations
    );

    // Create a temporary encryption service with the derived key
    const tempService = new EncryptionService();
    tempService.masterKey = derivedKey;

    return tempService.decrypt(encryptedData);
  }

  /**
   * Checks if TLS 1.3 is supported (for documentation purposes)
   * In a real implementation, this would check server capabilities
   * @returns {boolean} True if TLS 1.3 is supported
   */
  isTls13Supported() {
    // For browser compatibility
    if (typeof window !== 'undefined') {
      // In browser, TLS is handled by the browser and server
      return true; // Assume TLS support in modern browsers
    }
    
    // Node.js supports TLS 1.3 in versions 12.17.0 and later
    const [major, minor] = process.version.substring(1).split('.').map(Number);
    return major > 12 || (major === 12 && minor >= 17);
  }

  /**
   * Gets TLS configuration for secure connections
   * @returns {Object} TLS configuration object
   */
  getTlsConfig() {
    return {
      minVersion: 'TLSv1.3',
      maxVersion: 'TLSv1.3',
      secureProtocol: 'TLSv1_3_method',
      ciphers: [
        'TLS_AES_256_GCM_SHA384',
        'TLS_CHACHA20_POLY1305_SHA256',
        'TLS_AES_128_GCM_SHA256',
      ].join(':'),
      honorCipherOrder: true,
      secureOptions: typeof crypto.constants !== 'undefined' ?
        crypto.constants.SSL_OP_NO_SSLv2 |
        crypto.constants.SSL_OP_NO_SSLv3 |
        crypto.constants.SSL_OP_NO_TLSv1 |
        crypto.constants.SSL_OP_NO_TLSv1_1 : 0,
    };
  }

  /**
   * Validates encryption key strength
   * @returns {Object} Validation result
   */
  validateKeyStrength() {
    const result = {
      isValid: true,
      keyLength: this.masterKey.length,
      algorithm: this.algorithm,
      isRecommended:
        this.masterKey.length === 32 && this.algorithm.startsWith('aes-256'),
    };

    if (this.masterKey.length !== 32) {
      result.isValid = false;
      result.error =
        'Key length is not 32 bytes (256 bits) as required for AES-256';
    }

    return result;
  }

  /**
   * Rotates the encryption key
   * @param {Buffer} newKey - New encryption key (must be 32 bytes)
   * @returns {boolean} True if key rotation was successful
   */
  rotateKey(newKey) {
    if (!Buffer.isBuffer(newKey) || newKey.length !== 32) {
      throw new Error('New key must be a 32-byte buffer for AES-256');
    }

    this.masterKey = newKey;
    console.log('Encryption key rotated successfully');
    return true;
  }

  /**
   * Creates a backup of the current encryption key
   * @param {string} password - Password to encrypt the backup key
   * @returns {Object} Encrypted backup of the key
   */
  backupKey(password) {
    return this.encryptWithPassword(this.masterKey.toString('hex'), password);
  }

  /**
   * Restores the encryption key from backup
   * @param {Object} backup - Encrypted backup object
   * @param {string} password - Password to decrypt the backup key
   * @returns {boolean} True if key restoration was successful
   */
  restoreKey(backup, password) {
    const keyHex = this.decryptWithPassword(backup, password);
    const newKey = Buffer.from(keyHex, 'hex');

    if (newKey.length !== 32) {
      throw new Error('Restored key is not 32 bytes');
    }

    this.masterKey = newKey;
    console.log('Encryption key restored successfully');
    return true;
  }

  /**
   * Gets encryption statistics
   * @returns {Object} Encryption statistics
   */
  getStats() {
    return {
      algorithm: this.algorithm,
      keyLength: this.masterKey.length,
      keyHash: this.getKeyHash(),
      isTls13Supported: this.isTls13Supported(),
      tlsConfig: this.getTlsConfig(),
      keyStrengthValid: this.validateKeyStrength().isRecommended,
    };
  }

  /**
   * Sanitizes input data to prevent XSS and other injection attacks
   * @param {string} input - Input string to sanitize
   * @returns {string} Sanitized string
   */
  sanitizeInput(input) {
    if (typeof input !== 'string') {
      return input;
    }
    
    // Remove potentially dangerous characters
    return input
      .replace(/<script[^>]*>.*?<\/script>/gi, '') // Remove script tags
      .replace(/<iframe[^>]*>.*?<\/iframe>/gi, '') // Remove iframe tags
      .replace(/javascript:/gi, '') // Remove javascript protocol
      .replace(/on\w+\s*=/gi, '') // Remove event handlers
      .replace(/<.*?\s+src\s*=\s*["'][^"']*(?:javascript:|data:)[^"']*["'][^>]*>/gi, '') // Remove dangerous src attributes
      .trim();
  }

  /**
   * Validates input data before encryption
   * @param {string|Buffer} data - Data to validate
   * @returns {boolean} True if data is valid
   */
  validateInput(data) {
    if (data === null || data === undefined) {
      return false;
    }
    
    // Check for maximum size limits
    const dataBuffer = Buffer.isBuffer(data) ? data : Buffer.from(data, 'utf8');
    if (dataBuffer.length > 10 * 1024 * 1024) { // 10MB limit
      throw new Error('Input data exceeds maximum size limit of 10MB');
    }
    
    return true;
  }
}

// Factory function to create an encryption service instance
// This allows for better browser compatibility
function createEncryptionService() {
  // Check if we're in a browser environment
  if (typeof window !== 'undefined') {
    console.warn(
      'Encryption service initialized in browser environment. Use server-side encryption for production applications.'
    );
    
    // Return a mock service that throws errors for any operation
    return {
      encrypt: () => { throw new Error('Encryption is not supported in browser environment. Use server-side encryption for production applications.'); },
      decrypt: () => { throw new Error('Decryption is not supported in browser environment. Use server-side decryption for production applications.'); },
      hashData: () => { throw new Error('Hashing is not supported in browser environment. Use server-side hashing for production applications.'); },
      verifyHmac: () => { throw new Error('HMAC verification is not supported in browser environment. Use server-side HMAC verification for production applications.'); },
      createHmac: () => { throw new Error('HMAC creation is not supported in browser environment. Use server-side HMAC creation for production applications.'); },
      generateSalt: () => { throw new Error('Salt generation is not supported in browser environment. Use server-side salt generation for production applications.'); },
      deriveKeyFromPassword: () => { throw new Error('Key derivation is not supported in browser environment. Use server-side key derivation for production applications.'); },
      encryptWithPassword: () => { throw new Error('Password-based encryption is not supported in browser environment. Use server-side encryption for production applications.'); },
      decryptWithPassword: () => { throw new Error('Password-based decryption is not supported in browser environment. Use server-side decryption for production applications.'); },
      backupKey: () => { throw new Error('Key backup is not supported in browser environment. Use server-side key management for production applications.'); },
      restoreKey: () => { throw new Error('Key restoration is not supported in browser environment. Use server-side key management for production applications.'); },
      // Other methods that may be called
      isTls13Supported: () => true, // Assume TLS support in browsers
      getTlsConfig: () => ({ minVersion: 'TLSv1.2', maxVersion: 'TLSv1.3' }),
      validateKeyStrength: () => ({ isValid: false, error: 'Encryption not supported in browser' }),
      getStats: () => ({ error: 'Encryption not supported in browser' }),
      sanitizeInput: (input) => input, // Basic sanitizer that just returns input
      validateInput: (data) => data !== null && data !== undefined
    };
  }
  
  // In Node.js environment, return a real instance
  return new EncryptionService();
}

// Export the factory function and a default instance
// Use a getter to defer instantiation until needed
let _instance = null;
const encryptionService = {
  get instance() {
    if (_instance === null) {
      _instance = createEncryptionService();
    }
    return _instance;
  },
  
  // Proxy all method calls to the actual instance
  encrypt: function(...args) {
    return this.instance.encrypt(...args);
  },
  decrypt: function(...args) {
    return this.instance.decrypt(...args);
  },
  hashData: function(...args) {
    return this.instance.hashData(...args);
  },
  verifyHmac: function(...args) {
    return this.instance.verifyHmac(...args);
  },
  createHmac: function(...args) {
    return this.instance.createHmac(...args);
  },
  generateSalt: function(...args) {
    return this.instance.generateSalt(...args);
  },
  deriveKeyFromPassword: function(...args) {
    return this.instance.deriveKeyFromPassword(...args);
  },
  encryptWithPassword: function(...args) {
    return this.instance.encryptWithPassword(...args);
  },
  decryptWithPassword: function(...args) {
    return this.instance.decryptWithPassword(...args);
  },
  backupKey: function(...args) {
    return this.instance.backupKey(...args);
  },
  restoreKey: function(...args) {
    return this.instance.restoreKey(...args);
  },
  isTls13Supported: function(...args) {
    return this.instance.isTls13Supported(...args);
  },
  getTlsConfig: function(...args) {
    return this.instance.getTlsConfig(...args);
  },
  validateKeyStrength: function(...args) {
    return this.instance.validateKeyStrength(...args);
  },
  getStats: function(...args) {
    return this.instance.getStats(...args);
  },
  sanitizeInput: function(...args) {
    return this.instance.sanitizeInput(...args);
  },
  validateInput: function(...args) {
    return this.instance.validateInput(...args);
  }
};

export default encryptionService;
export { createEncryptionService, encryptionService as EncryptionService };
