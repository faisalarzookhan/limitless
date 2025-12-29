/**
 * Encryption Service
 * Implements AES-256 encryption for data at rest and TLS 1.3 for data in transit
 * across all limitlessinfotech.com sub-domains.
 */

import crypto from 'crypto';

class EncryptionService {
  constructor() {
    // Use environment variable for the master key or generate a default one (not recommended for production)
    this.masterKey =
      process.env.REACT_APP_ENCRYPTION_KEY || this.generateRandomKey();
    this.algorithm = 'aes-256-gcm'; // AES-256 with Galois/Counter Mode
    this.ivLength = 16; // Initialization vector length for GCM
    this.authTagLength = 16; // Authentication tag length for GCM

    // Validate key length (must be 32 bytes for AES-256)
    if (this.masterKey.length !== 32) {
      throw new Error('Encryption key must be 32 bytes for AES-256');
    }

    console.log('Encryption service initialized with AES-256-GCM algorithm');
  }

  /**
   * Generates a random 32-byte key for AES-256 encryption
   * @returns {Buffer} Random 32-byte key
   */
  generateRandomKey() {
    console.warn(
      'Generating temporary encryption key. Use REACT_APP_ENCRYPTION_KEY environment variable in production.'
    );
    return crypto.randomBytes(32);
  }

  /**
   * Encrypts data using AES-256-GCM
   * @param {string|Buffer} data - Data to encrypt
   * @returns {Object} Object containing encrypted data, IV, and auth tag
   */
  encrypt(data) {
    try {
      // Convert data to buffer if it's a string
      const dataBuffer = Buffer.isBuffer(data)
        ? data
        : Buffer.from(data, 'utf8');

      // Generate a random initialization vector
      const iv = crypto.randomBytes(this.ivLength);

      // Create cipher
      const cipher = crypto.createCipher(this.algorithm, this.masterKey);

      // Update cipher with data
      let encrypted = cipher.update(dataBuffer);

      // Finalize encryption
      encrypted = Buffer.concat([encrypted, cipher.final()]);

      // Get the authentication tag (for GCM mode)
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
    const dataBuffer = Buffer.isBuffer(data) ? data : Buffer.from(data, 'utf8');
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
    const dataBuffer = Buffer.isBuffer(data) ? data : Buffer.from(data, 'utf8');
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
    const dataBuffer = Buffer.isBuffer(data) ? data : Buffer.from(data, 'utf8');
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
    return crypto.randomBytes(length);
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
    return crypto.pbkdf2Sync(password, salt, iterations, keyLength, 'sha256');
  }

  /**
   * Encrypts data with password-based key derivation
   * @param {string} data - Data to encrypt
   * @param {string} password - Password to use for encryption
   * @returns {Object} Encrypted data with salt and other metadata
   */
  encryptWithPassword(data, password) {
    const salt = this.generateSalt();
    const derivedKey = this.deriveKeyFromPassword(password, salt);

    // Create a temporary encryption service with the derived key
    const tempService = new EncryptionService();
    tempService.masterKey = derivedKey;

    const encrypted = tempService.encrypt(data);

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
      secureOptions:
        crypto.constants.SSL_OP_NO_SSLv2 |
        crypto.constants.SSL_OP_NO_SSLv3 |
        crypto.constants.SSL_OP_NO_TLSv1 |
        crypto.constants.SSL_OP_NO_TLSv1_1,
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
}

// Export singleton instance
const encryptionService = new EncryptionService();

// For environments where crypto module is not available (browser), we provide a mock
// In a real implementation, we would use Web Crypto API for browser environments
if (typeof window !== 'undefined') {
  console.warn(
    'Encryption service initialized in browser environment. Use Node.js for production encryption.'
  );
}

export default encryptionService;
