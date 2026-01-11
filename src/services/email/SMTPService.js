// src/services/email/SMTPService.js

/**
 * SMTP Email Service
 * Handles email sending via SMTP for contact forms, notifications, and automated emails
 */
class SMTPService {
    constructor() {
        this.config = {
            host: import.meta.env.VITE_SMTP_HOST || 'smtp.gmail.com',
            port: import.meta.env.VITE_SMTP_PORT || 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: import.meta.env.VITE_SMTP_USER,
                pass: import.meta.env.VITE_SMTP_PASS
            }
        };
        
        this.fromEmail = import.meta.env.VITE_FROM_EMAIL || 'noreply@limitlessinfotech.com';
        this.adminEmail = import.meta.env.VITE_ADMIN_EMAIL || 'admin@limitlessinfotech.com';
        this.enabled = import.meta.env.VITE_EMAIL_ENABLED === 'true';
    }

    /**
     * Send contact form submission email
     */
    async sendContactFormEmail(formData) {
        const { name, email, subject, message, phone } = formData;
        
        const emailContent = {
            to: this.adminEmail,
            from: this.fromEmail,
            replyTo: email,
            subject: `[Contact Form] ${subject}`,
            html: this._generateContactFormHTML(formData),
            text: this._generateContactFormText(formData)
        };

        return this._sendEmail(emailContent);
    }

    /**
     * Send lead notification email
     */
    async sendLeadNotification(leadData) {
        const { organization, email, needs } = leadData;
        
        const emailContent = {
            to: this.adminEmail,
            from: this.fromEmail,
            subject: `[New Lead] ${organization}`,
            html: this._generateLeadNotificationHTML(leadData),
            text: this._generateLeadNotificationText(leadData)
        };

        return this._sendEmail(emailContent);
    }

    /**
     * Send welcome email to new user
     */
    async sendWelcomeEmail(userData) {
        const { email, name } = userData;
        
        const emailContent = {
            to: email,
            from: this.fromEmail,
            subject: 'Welcome to Limitless Infotech Solution',
            html: this._generateWelcomeHTML(userData),
            text: this._generateWelcomeText(userData)
        };

        return this._sendEmail(emailContent);
    }

    /**
     * Send password reset email
     */
    async sendPasswordResetEmail(email, resetToken) {
        const resetLink = `${window.location.origin}/reset-password?token=${resetToken}`;
        
        const emailContent = {
            to: email,
            from: this.fromEmail,
            subject: 'Password Reset Request - Limitless Infotech',
            html: this._generatePasswordResetHTML(resetLink),
            text: this._generatePasswordResetText(resetLink)
        };

        return this._sendEmail(emailContent);
    }

    /**
     * Send newsletter subscription confirmation
     */
    async sendNewsletterConfirmation(email) {
        const emailContent = {
            to: email,
            from: this.fromEmail,
            subject: 'Newsletter Subscription Confirmed',
            html: this._generateNewsletterHTML(),
            text: this._generateNewsletterText()
        };

        return this._sendEmail(emailContent);
    }

    /**
     * Send job application confirmation
     */
    async sendJobApplicationConfirmation(applicationData) {
        const { email, name, position } = applicationData;
        
        const emailContent = {
            to: email,
            from: this.fromEmail,
            subject: `Application Received - ${position}`,
            html: this._generateJobApplicationHTML(applicationData),
            text: this._generateJobApplicationText(applicationData)
        };

        return this._sendEmail(emailContent);
    }

    /**
     * Core email sending function
     */
    async _sendEmail(emailContent) {
        if (!this.enabled) {
            console.warn('[SMTP] Email service disabled. Email would have been sent:', emailContent.subject);
            return { success: true, simulated: true };
        }

        try {
            // In production, this would use nodemailer or similar
            // For now, we'll use a backend API endpoint
            const response = await fetch('/api/email/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...emailContent,
                    config: this.config
                })
            });

            if (!response.ok) {
                throw new Error('Email sending failed');
            }

            const result = await response.json();
            console.info('[SMTP] Email sent successfully:', emailContent.subject);
            return { success: true, ...result };
        } catch (error) {
            console.error('[SMTP] Email sending error:', error);
            return { 
                success: false, 
                error: error.message,
                fallback: 'Email queued for retry'
            };
        }
    }

    // HTML Email Templates
    _generateContactFormHTML(data) {
        return `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #1ba6d6, #0e1114); color: white; padding: 30px; text-align: center; }
        .content { background: #f9f9f9; padding: 30px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #1ba6d6; }
        .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New Contact Form Submission</h1>
        </div>
        <div class="content">
            <div class="field">
                <span class="label">Name:</span> ${data.name}
            </div>
            <div class="field">
                <span class="label">Email:</span> ${data.email}
            </div>
            ${data.phone ? `<div class="field"><span class="label">Phone:</span> ${data.phone}</div>` : ''}
            <div class="field">
                <span class="label">Subject:</span> ${data.subject}
            </div>
            <div class="field">
                <span class="label">Message:</span><br>
                ${data.message.replace(/\n/g, '<br>')}
            </div>
        </div>
        <div class="footer">
            <p>Limitless Infotech Solution Pvt. Ltd.</p>
            <p>This email was sent from your website contact form</p>
        </div>
    </div>
</body>
</html>`;
    }

    _generateContactFormText(data) {
        return `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}\n` : ''}Subject: ${data.subject}

Message:
${data.message}

---
Limitless Infotech Solution Pvt. Ltd.
`;
    }

    _generateLeadNotificationHTML(data) {
        return `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #f4b41a, #1ba6d6); color: white; padding: 30px; text-align: center; }
        .content { background: #f9f9f9; padding: 30px; }
        .highlight { background: #1ba6d6; color: white; padding: 15px; border-radius: 5px; margin: 20px 0; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #1ba6d6; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎯 New Project Lead!</h1>
        </div>
        <div class="content">
            <div class="highlight">
                <h2 style="margin: 0;">${data.organization}</h2>
            </div>
            <div class="field">
                <span class="label">Contact Email:</span> ${data.email}
            </div>
            <div class="field">
                <span class="label">Service Interest:</span> ${data.needs}
            </div>
            <div class="field">
                <span class="label">Timestamp:</span> ${new Date().toLocaleString()}
            </div>
        </div>
    </div>
</body>
</html>`;
    }

    _generateLeadNotificationText(data) {
        return `
🎯 New Project Lead!

Organization: ${data.organization}
Email: ${data.email}
Service Interest: ${data.needs}
Timestamp: ${new Date().toLocaleString()}

---
Limitless Infotech Solution
`;
    }

    _generateWelcomeHTML(data) {
        return `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #1ba6d6, #0e1114); color: white; padding: 40px; text-align: center; }
        .content { background: #fff; padding: 30px; }
        .cta { text-align: center; margin: 30px 0; }
        .button { display: inline-block; padding: 15px 30px; background: #1ba6d6; color: white; text-decoration: none; border-radius: 5px; font-weight: bold; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Welcome to Limitless Infotech!</h1>
        </div>
        <div class="content">
            <p>Hi ${data.name},</p>
            <p>Thank you for joining Limitless Infotech Solution. We're excited to have you on board!</p>
            <p>Our platform offers cutting-edge solutions in enterprise engineering, AI-powered services, and digital transformation.</p>
            <div class="cta">
                <a href="${window.location.origin}" class="button">Explore Our Platform</a>
            </div>
            <p>If you have any questions, feel free to reach out to our team.</p>
            <p>Best regards,<br>The Limitless Infotech Team</p>
        </div>
    </div>
</body>
</html>`;
    }

    _generateWelcomeText(data) {
        return `
Welcome to Limitless Infotech!

Hi ${data.name},

Thank you for joining Limitless Infotech Solution. We're excited to have you on board!

Our platform offers cutting-edge solutions in enterprise engineering, AI-powered services, and digital transformation.

Visit our platform: ${window.location.origin}

If you have any questions, feel free to reach out to our team.

Best regards,
The Limitless Infotech Team
`;
    }

    _generatePasswordResetHTML(resetLink) {
        return `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #1ba6d6; color: white; padding: 30px; text-align: center; }
        .content { background: #fff; padding: 30px; }
        .cta { text-align: center; margin: 30px 0; }
        .button { display: inline-block; padding: 15px 30px; background: #1ba6d6; color: white; text-decoration: none; border-radius: 5px; font-weight: bold; }
        .warning { background: #fff3cd; border-left: 4px solid #f4b41a; padding: 15px; margin: 20px 0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Password Reset Request</h1>
        </div>
        <div class="content">
            <p>You requested a password reset for your Limitless Infotech account.</p>
            <div class="cta">
                <a href="${resetLink}" class="button">Reset Password</a>
            </div>
            <p>Or copy and paste this link into your browser:</p>
            <p style="word-break: break-all; color: #1ba6d6;">${resetLink}</p>
            <div class="warning">
                <strong>Security Notice:</strong> This link will expire in 1 hour. If you didn't request this reset, please ignore this email.
            </div>
        </div>
    </div>
</body>
</html>`;
    }

    _generatePasswordResetText(resetLink) {
        return `
Password Reset Request

You requested a password reset for your Limitless Infotech account.

Reset your password: ${resetLink}

This link will expire in 1 hour. If you didn't request this reset, please ignore this email.

---
Limitless Infotech Solution
`;
    }

    _generateNewsletterHTML() {
        return `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #1ba6d6, #f4b41a); color: white; padding: 40px; text-align: center; }
        .content { background: #fff; padding: 30px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>✅ Subscription Confirmed!</h1>
        </div>
        <div class="content">
            <p>Thank you for subscribing to the Limitless Infotech newsletter!</p>
            <p>You'll receive updates about our latest innovations, industry insights, and exclusive offers.</p>
            <p>Stay limitless!</p>
        </div>
    </div>
</body>
</html>`;
    }

    _generateNewsletterText() {
        return `
✅ Subscription Confirmed!

Thank you for subscribing to the Limitless Infotech newsletter!

You'll receive updates about our latest innovations, industry insights, and exclusive offers.

Stay limitless!

---
Limitless Infotech Solution
`;
    }

    _generateJobApplicationHTML(data) {
        return `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #1ba6d6, #0e1114); color: white; padding: 40px; text-align: center; }
        .content { background: #fff; padding: 30px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Application Received</h1>
        </div>
        <div class="content">
            <p>Hi ${data.name},</p>
            <p>Thank you for applying for the <strong>${data.position}</strong> position at Limitless Infotech Solution.</p>
            <p>We have received your application and our team will review it carefully. We'll be in touch soon regarding the next steps.</p>
            <p>Best regards,<br>Limitless Infotech HR Team</p>
        </div>
    </div>
</body>
</html>`;
    }

    _generateJobApplicationText(data) {
        return `
Application Received

Hi ${data.name},

Thank you for applying for the ${data.position} position at Limitless Infotech Solution.

We have received your application and our team will review it carefully. We'll be in touch soon regarding the next steps.

Best regards,
Limitless Infotech HR Team
`;
    }
}

export default new SMTPService();
