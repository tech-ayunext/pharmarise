import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

// Email configuration interface
interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

// Contact form data interfaces
export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceInterest: string;
  message?: string;
}

export interface DetailedContactFormData extends ContactFormData {
  address: string;
  companyName: string;
  newsletter?: boolean;
}

// Email service class
class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    const config: EmailConfig = {
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER || 'jayshinde10267@gmail.com',
        pass: process.env.SMTP_PASS || 'J@yShinde@1025',
      },
    };

    this.transporter = nodemailer.createTransport(config);
  }

  async sendContactEmail(data: ContactFormData): Promise<boolean> {
    try {
      const mailOptions = {
        from: process.env.SMTP_USER || 'jayshinde10267@gmail.com',
        to: process.env.CONTACT_EMAIL || 'jayshinde10267@gmail.com',
        subject: `New Contact Form Submission - ${data.serviceInterest}`,
        html: this.generateContactEmailTemplate(data),
        replyTo: data.email,
      };

      await this.transporter.sendMail(mailOptions);
      await this.sendConfirmationEmail(data.email, data.fullName);
      return true;
    } catch (error) {
      console.error('Error sending contact email:', error);
      return false;
    }
  }

  async sendDetailedContactEmail(data: DetailedContactFormData): Promise<boolean> {
    try {
      const mailOptions = {
        from: process.env.SMTP_USER || 'jayshinde10267@gmail.com',
        to: process.env.CONTACT_EMAIL || 'jayshinde10267@gmail.com',
        subject: `New Detailed Contact Form Submission - ${data.serviceInterest}`,
        html: this.generateDetailedContactEmailTemplate(data),
        replyTo: data.email,
      };

      await this.transporter.sendMail(mailOptions);
      await this.sendConfirmationEmail(data.email, data.fullName);
      return true;
    } catch (error) {
      console.error('Error sending detailed contact email:', error);
      return false;
    }
  }

  private async sendConfirmationEmail(userEmail: string, userName: string): Promise<void> {
    try {
      const mailOptions = {
        from: process.env.SMTP_USER || 'jayshinde10267@gmail.com',
        to: userEmail,
        subject: 'Thank you for contacting PharmaRise Innovations',
        html: this.generateConfirmationEmailTemplate(userName),
      };

      await this.transporter.sendMail(mailOptions);
    } catch (error) {
      console.error('Error sending confirmation email:', error);
    }
  }

  private generateContactEmailTemplate(data: ContactFormData): string {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
          body { font-family: 'Red Hat Text', Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #0D4A8D 0%, #009ACD 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
          .field { margin-bottom: 20px; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #0D4A8D; }
          .field-label { font-weight: 600; color: #0D4A8D; margin-bottom: 5px; }
          .field-value { color: #333; }
          .footer { text-align: center; margin-top: 30px; padding: 20px; color: #666; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Contact Form Submission</h1>
            <p>PharmaRise Innovations LLP</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="field-label">Full Name:</div>
              <div class="field-value">${data.fullName}</div>
            </div>
            <div class="field">
              <div class="field-label">Email Address:</div>
              <div class="field-value">${data.email}</div>
            </div>
            <div class="field">
              <div class="field-label">Phone Number:</div>
              <div class="field-value">${data.phone}</div>
            </div>
            <div class="field">
              <div class="field-label">Service Interest:</div>
              <div class="field-value">${data.serviceInterest}</div>
            </div>
            ${data.message ? `
            <div class="field">
              <div class="field-label">Message:</div>
              <div class="field-value">${data.message}</div>
            </div>
            ` : ''}
          </div>
          <div class="footer">
            <p>This email was sent from the PharmaRise Innovations contact form.</p>
            <p>Submitted on: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  private generateDetailedContactEmailTemplate(data: DetailedContactFormData): string {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Detailed Contact Form Submission</title>
        <style>
          body { font-family: 'Red Hat Text', Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #0D4A8D 0%, #009ACD 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
          .field { margin-bottom: 20px; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #0D4A8D; }
          .field-label { font-weight: 600; color: #0D4A8D; margin-bottom: 5px; }
          .field-value { color: #333; }
          .footer { text-align: center; margin-top: 30px; padding: 20px; color: #666; font-size: 14px; }
          .newsletter-badge { background: #BE2623; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Detailed Contact Form Submission</h1>
            <p>PharmaRise Innovations LLP</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="field-label">Full Name:</div>
              <div class="field-value">${data.fullName}</div>
            </div>
            <div class="field">
              <div class="field-label">Email Address:</div>
              <div class="field-value">${data.email}</div>
            </div>
            <div class="field">
              <div class="field-label">Phone Number:</div>
              <div class="field-value">${data.phone}</div>
            </div>
            <div class="field">
              <div class="field-label">Company Name:</div>
              <div class="field-value">${data.companyName}</div>
            </div>
            <div class="field">
              <div class="field-label">Address:</div>
              <div class="field-value">${data.address}</div>
            </div>
            <div class="field">
              <div class="field-label">Service Interest:</div>
              <div class="field-value">${data.serviceInterest}</div>
            </div>
            ${data.message ? `
            <div class="field">
              <div class="field-label">Message:</div>
              <div class="field-value">${data.message}</div>
            </div>
            ` : ''}
            <div class="field">
              <div class="field-label">Newsletter Signup:</div>
              <div class="field-value">
                ${data.newsletter ? '<span class="newsletter-badge">YES</span>' : 'No'}
              </div>
            </div>
          </div>
          <div class="footer">
            <p>This email was sent from the PharmaRise Innovations detailed contact form.</p>
            <p>Submitted on: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  private generateConfirmationEmailTemplate(userName: string): string {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank you for contacting PharmaRise Innovations</title>
        <style>
          body { font-family: 'Red Hat Text', Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #0D4A8D 0%, #009ACD 100%); color: white; padding: 40px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f8f9fa; padding: 40px; border-radius: 0 0 10px 10px; }
          .logo { font-size: 28px; font-weight: bold; margin-bottom: 10px; }
          .tagline { font-size: 16px; opacity: 0.9; }
          .message { background: white; padding: 30px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #0D4A8D; }
          .footer { text-align: center; margin-top: 30px; padding: 20px; color: #666; font-size: 14px; }
          .contact-info { background: white; padding: 20px; border-radius: 8px; margin-top: 20px; }
          .contact-item { margin-bottom: 10px; }
          .contact-label { font-weight: 600; color: #0D4A8D; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">PharmaRise Innovations LLP</div>
            <div class="tagline">Innovations for a healthy life</div>
          </div>
          <div class="content">
            <div class="message">
              <h2 style="color: #0D4A8D; margin-bottom: 20px;">Thank you, ${userName}!</h2>
              <p>We have received your inquiry and appreciate your interest in PharmaRise Innovations LLP.</p>
              <p>Our team will review your message and get back to you within 24-48 hours. We look forward to discussing how we can help you with your pharmaceutical needs.</p>
              <p><strong>What happens next?</strong></p>
              <ul style="color: #666;">
                <li>Our team will review your inquiry</li>
                <li>We'll prepare a personalized response</li>
                <li>You'll hear from us within 24-48 hours</li>
                <li>We'll schedule a consultation if needed</li>
              </ul>
            </div>
            
            <div class="contact-info">
              <h3 style="color: #0D4A8D; margin-bottom: 15px;">Contact Information</h3>
              <div class="contact-item">
                <span class="contact-label">Email:</span> support@pharmarise.com
              </div>
              <div class="contact-item">
                <span class="contact-label">Phone:</span> +91 95265 26485
              </div>
              <div class="contact-item">
                <span class="contact-label">Address:</span> Plot 17, Flat 604, Floor-6, Ganangiri Avenue, Samta Nagar, Pokhran Road, Thane West, Thane, Maharashtra, India - 400604
              </div>
            </div>
          </div>
          <div class="footer">
            <p>This is an automated confirmation email from PharmaRise Innovations LLP.</p>
            <p>If you have any immediate questions, please don't hesitate to contact us.</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }
}

const emailService = new EmailService();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { type, ...formData } = req.body;

    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.phone || !formData.serviceInterest) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields.'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address.'
      });
    }

    let emailSent = false;

    if (type === 'detailed') {
      // Validate additional fields for detailed form
      if (!formData.address || !formData.companyName) {
        return res.status(400).json({
          success: false,
          message: 'Please fill in all required fields.'
        });
      }
      emailSent = await emailService.sendDetailedContactEmail(formData as DetailedContactFormData);
    } else {
      emailSent = await emailService.sendContactEmail(formData as ContactFormData);
    }

    if (emailSent) {
      return res.status(200).json({
        success: true,
        message: 'Thank you for your message! We will get back to you soon.'
      });
    } else {
      return res.status(500).json({
        success: false,
        message: 'There was an error sending your message. Please try again later.'
      });
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({
      success: false,
      message: 'There was an error processing your request. Please try again later.'
    });
  }
}