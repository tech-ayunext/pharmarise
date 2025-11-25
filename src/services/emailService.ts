import emailjs from '@emailjs/browser';

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

class EmailService {
  private serviceId: string;
  private templateId: string;
  private bmiTemplateId: string;
  private publicKey: string;

  constructor() {
    this.serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
    this.templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
    this.bmiTemplateId = import.meta.env.VITE_EMAILJS_BMI_TEMPLATE_ID || '';
    this.publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

    // Initialize EmailJS with public key
    if (this.publicKey) {
      emailjs.init(this.publicKey);
    }
  }

  private isConfigured(): boolean {
    return !!(this.serviceId && this.templateId && this.publicKey);
  }

  private isBmiConfigured(): boolean {
    return !!(this.serviceId && this.bmiTemplateId && this.publicKey);
  }

  async sendContactEmail(data: ContactFormData): Promise<{ success: boolean; message: string }> {
    try {
      // Check if EmailJS is configured
      if (!this.isConfigured()) {
        console.warn('EmailJS not configured. Please add credentials to .env.local');
        return {
          success: false,
          message: 'Email service is not configured. Please contact the administrator.'
        };
      }

      // Validate required fields
      if (!data.fullName || !data.email || !data.phone || !data.serviceInterest) {
        return {
          success: false,
          message: 'Please fill in all required fields.'
        };
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        return {
          success: false,
          message: 'Please enter a valid email address.'
        };
      }

      // Send email using EmailJS
      const templateParams = {
        from_name: data.fullName,
        from_email: data.email,
        phone: data.phone,
        service_interest: data.serviceInterest,
        message: data.message || 'No additional message provided',
        to_email: 'jayshinde10267@gmail.com'
      };

      await emailjs.send(
        this.serviceId,
        this.templateId,
        templateParams
      );

      return {
        success: true,
        message: 'Thank you for your message! We will get back to you soon.'
      };
    } catch (error) {
      console.error('EmailJS error:', error);
      return {
        success: false,
        message: 'There was an error sending your message. Please try again later.'
      };
    }
  }

  async sendDetailedContactEmail(data: DetailedContactFormData, useBmiTemplate: boolean = false): Promise<{ success: boolean; message: string }> {
    try {
      // Check if EmailJS is configured
      const templateToUse = useBmiTemplate ? this.bmiTemplateId : this.templateId;
      const isConfigured = useBmiTemplate ? this.isBmiConfigured() : this.isConfigured();

      if (!isConfigured) {
        console.warn('EmailJS not configured. Please add credentials to .env.local');
        return {
          success: false,
          message: 'Email service is not configured. Please contact the administrator.'
        };
      }

      // Validate required fields
      if (!data.fullName || !data.email || !data.phone || !data.serviceInterest || !data.address || !data.companyName) {
        return {
          success: false,
          message: 'Please fill in all required fields.'
        };
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        return {
          success: false,
          message: 'Please enter a valid email address.'
        };
      }

      // Send email using EmailJS
      const templateParams = {
        from_name: data.fullName,
        from_email: data.email,
        phone: data.phone,
        service_interest: data.serviceInterest,
        message: data.message || 'No additional message provided',
        address: data.address,
        company_name: data.companyName,
        to_email: 'jayshinde10267@gmail.com'
      };

      await emailjs.send(
        this.serviceId,
        templateToUse,
        templateParams
      );

      return {
        success: true,
        message: 'Thank you for your detailed inquiry! We will get back to you soon.'
      };
    } catch (error) {
      console.error('EmailJS error:', error);
      return {
        success: false,
        message: 'There was an error sending your message. Please try again later.'
      };
    }
  }
}

export default new EmailService();
