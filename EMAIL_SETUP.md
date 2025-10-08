# Email Integration Setup Guide

This guide explains how to set up the Nodemailer email integration for the PharmaRise contact forms.

## 📧 Features

- **Two Contact Forms**: 
  - Simple contact form (Contact page)
  - Detailed contact form (Contact component with additional fields)
- **Professional Email Templates**: Branded HTML templates with company styling
- **Automatic Confirmations**: Users receive confirmation emails
- **Form Validation**: Client-side and server-side validation
- **Loading States**: Visual feedback during form submission
- **Error Handling**: Graceful error handling with user-friendly messages

## 🚀 Installation

1. **Install Nodemailer** (if not already installed):
```bash
npm install nodemailer
npm install @types/nodemailer --save-dev
```

2. **Copy Environment Variables**:
```bash
cp .env.example .env.local
```

3. **Configure Email Settings** in `.env.local`:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=jayshinde10267@gmail.com
SMTP_PASS=J@yShinde@1025
CONTACT_EMAIL=jayshinde10267@gmail.com
```

## 📧 Email Provider Setup

### Gmail Setup (Current Configuration)
**Current Setup**: `jayshinde10267@gmail.com`

**Important Security Note**: 
1. The current configuration uses a regular password
2. For production, you should:
   - Enable 2-factor authentication on the Gmail account
   - Generate an "App Password" for this application
   - Replace the regular password with the app password
   - This provides better security and prevents authentication issues

### Other Providers
- **Outlook/Hotmail**: `smtp-mail.outlook.com`, port 587
- **Yahoo**: `smtp.mail.yahoo.com`, port 587
- **Custom SMTP**: Use your provider's SMTP settings

## 🔧 Configuration

### Email Templates
The email templates are automatically generated with:
- Company branding (PharmaRise colors and styling)
- Professional HTML layout
- Responsive design
- Contact information footer

### Form Validation
Both forms include:
- Required field validation
- Email format validation
- Phone number validation
- Real-time error messages

## 📁 File Structure

```
src/
├── services/
│   └── emailService.ts          # Main email service with templates
├── api/
│   └── contact.ts              # API handlers for form submissions
├── hooks/
│   └── useContactForm.ts       # React hooks for form handling
├── components/
│   ├── ContactPageForm.tsx     # Contact page form component
│   └── ui/
│       └── ContactForm.tsx     # Detailed contact form component
└── pages/
    └── Contact.tsx             # Updated to use new form component
```

## 🎨 Email Templates

### Contact Form Email
- Clean, professional layout
- Company branding
- All form fields displayed clearly
- Submission timestamp

### Confirmation Email
- Welcome message
- Next steps information
- Company contact information
- Professional styling

## 🔒 Security Features

- Input sanitization
- Email validation
- Rate limiting (can be added)
- Environment variable protection
- Error handling without exposing sensitive data

## 🧪 Testing

1. **Test Email Configuration**:
```javascript
// Add this to test your email setup
import emailService from './src/services/emailService';

const testEmail = {
  fullName: "Test User",
  email: "test@example.com",
  phone: "1234567890",
  serviceInterest: "Testing"
};

emailService.sendContactEmail(testEmail);
```

2. **Form Testing**:
- Fill out both contact forms
- Check for validation errors
- Verify email delivery
- Test confirmation emails

## 🚨 Troubleshooting

### Common Issues

1. **"Invalid login" error**:
   - Make sure you're using an app password, not your regular password
   - Verify 2FA is enabled

2. **"Connection timeout"**:
   - Check SMTP host and port settings
   - Verify firewall/network settings

3. **Emails not sending**:
   - Check environment variables
   - Verify email provider settings
   - Check spam folder

### Debug Mode
Add this to your email service for debugging:
```javascript
// In emailService.ts constructor
this.transporter.verify((error, success) => {
  if (error) {
    console.log('Email configuration error:', error);
  } else {
    console.log('Email server is ready to take our messages');
  }
});
```

## 📈 Production Deployment

1. **Environment Variables**: Set all required environment variables in your production environment
2. **Email Limits**: Consider email sending limits of your provider
3. **Monitoring**: Add logging and monitoring for email delivery
4. **Backup**: Consider backup email providers for reliability

## 🔄 Future Enhancements

- Email queue system for high volume
- Email templates customization UI
- Analytics and tracking
- Automated follow-up emails
- Integration with CRM systems

## 📞 Support

If you encounter any issues with the email integration:
1. Check the troubleshooting section above
2. Verify your environment variables
3. Test with a simple email first
4. Check your email provider's documentation

The email integration is now ready to use! Both contact forms will automatically send professional emails and confirmations.