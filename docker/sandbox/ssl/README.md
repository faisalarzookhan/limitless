# SSL Certificate Configuration

This directory contains SSL certificates for HTTPS configuration. For security reasons, actual certificate files are not included in the repository.

## SSL Certificate Setup

To set up SSL certificates for the production environment:

1. **Generate SSL Certificate (for testing only)**:
```bash
# Generate a private key
openssl genrsa -out key.pem 2048

# Generate a certificate signing request
openssl req -new -key key.pem -out csr.pem

# Generate a self-signed certificate (for testing only)
openssl x509 -req -days 365 -in csr.pem -signkey key.pem -out cert.pem
```

2. **For Production**:
   - Obtain certificates from a trusted Certificate Authority (CA) like Let's Encrypt, DigiCert, or similar
   - Place the certificate files in this directory before deployment

3. **Let's Encrypt with Certbot (Recommended for Production)**:
```bash
# Install certbot
sudo apt-get install certbot

# Generate certificate
sudo certbot certonly --standalone -d limitlessinfotech.com

# Copy certificates to this directory
sudo cp /etc/letsencrypt/live/yourdomain.com/fullchain.pem cert.pem
sudo cp /etc/letsencrypt/live/yourdomain.com/privkey.pem key.pem
```

## Docker Configuration

The docker-compose.yml file expects the following files:
- `cert.pem` - SSL certificate
- `key.pem` - SSL private key

## Security Notes

- Never commit actual SSL certificates to the repository
- Use environment-specific certificates
- Regularly renew certificates before expiration
- Use strong cipher suites as configured in nginx.conf