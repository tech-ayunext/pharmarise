# EmailJS Setup Guide

## 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account

## 2. Add Email Service
1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions
5. Copy your **Service ID**

## 3. Create Email Template
1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use these template variables in your email template:

### For Contact Form:
```
From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Service Interest: {{service_interest}}
Message: {{message}}
```

### For Detailed Contact Form:
```
From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company_name}}
Address: {{address}}
Service Interest: {{service_interest}}
Newsletter: {{newsletter}}
Message: {{message}}
```

4. Set the recipient email to: jayshinde10267@gmail.com
5. Copy your **Template ID**

## 4. Get Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key**

## 5. Configure Environment Variables
1. Copy `.env.example` to `.env.local`:
   ```bash
   copy .env.example .env.local
   ```

2. Add your EmailJS credentials to `.env.local`:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

3. Replace the placeholder values with your actual EmailJS credentials

## 6. Restart Development Server
After adding the environment variables, restart your dev server:
```bash
npm run dev
```

## Testing
- All forms will now send real emails through EmailJS
- Check the browser console for any errors
- Verify emails are received at jayshinde10267@gmail.com

## Forms Configured
✅ Contact Form (ContactForm.tsx)
✅ Contact Page Form (ContactPageForm.tsx)

Both forms are now using the EmailJS service instead of the mock service.
