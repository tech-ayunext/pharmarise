// Mock email service for development/demo purposes
// In production, replace this with a proper backend API

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

// Mock email service that simulates sending emails
class MockEmailService {
  // Simulate sending contact email
  async sendContactEmail(data: ContactFormData): Promise<{ success: boolean; message: string }> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    try {
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

      // Log the form data (in production, this would send actual emails)
      console.log('📧 Contact Form Submission:', {
        to: 'jayshinde10267@gmail.com',
        from: data.email,
        subject: `New Contact Form Submission - ${data.serviceInterest}`,
        data: data,
        timestamp: new Date().toISOString()
      });

      // Simulate successful email sending
      return {
        success: true,
        message: 'Thank you for your message! We will get back to you soon.'
      };
    } catch (error) {
      console.error('Mock email service error:', error);
      return {
        success: false,
        message: 'There was an error sending your message. Please try again later.'
      };
    }
  }

  // Simulate sending detailed contact email
  async sendDetailedContactEmail(data: DetailedContactFormData): Promise<{ success: boolean; message: string }> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    try {
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

      // Log the form data (in production, this would send actual emails)
      console.log('📧 Detailed Contact Form Submission:', {
        to: 'jayshinde10267@gmail.com',
        from: data.email,
        subject: `New Detailed Contact Form Submission - ${data.serviceInterest}`,
        data: data,
        timestamp: new Date().toISOString()
      });

      // Simulate successful email sending
      return {
        success: true,
        message: 'Thank you for your detailed inquiry! We will get back to you soon.'
      };
    } catch (error) {
      console.error('Mock email service error:', error);
      return {
        success: false,
        message: 'There was an error sending your message. Please try again later.'
      };
    }
  }
}

export default new MockEmailService();