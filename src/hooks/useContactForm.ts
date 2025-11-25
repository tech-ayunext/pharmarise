import { useState } from 'react';
import emailService from '../services/emailService';

// Contact form data interfaces (matching the API)
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

// Hook for simple contact form
export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const submitForm = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Send email using EmailJS
      const result = await emailService.sendContactEmail(data);
      setSubmitStatus({
        type: result.success ? 'success' : 'error',
        message: result.message
      });
      return result.success;
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'An unexpected error occurred. Please try again.'
      });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const clearStatus = () => {
    setSubmitStatus({ type: null, message: '' });
  };

  return {
    submitForm,
    isSubmitting,
    submitStatus,
    clearStatus
  };
};

// Hook for detailed contact form
export const useDetailedContactForm = (useBmiTemplate: boolean = false) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const submitForm = async (data: DetailedContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Send email using EmailJS
      const result = await emailService.sendDetailedContactEmail(data, useBmiTemplate);
      setSubmitStatus({
        type: result.success ? 'success' : 'error',
        message: result.message
      });
      return result.success;
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'An unexpected error occurred. Please try again.'
      });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const clearStatus = () => {
    setSubmitStatus({ type: null, message: '' });
  };

  return {
    submitForm,
    isSubmitting,
    submitStatus,
    clearStatus
  };
};