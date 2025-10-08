import { useState } from 'react';
import mockEmailService from '../services/mockEmailService';

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
      // Check if we're in development mode or if API is available
      const isDevelopment = import.meta.env.DEV;
      
      // Use mock service (logs to console)
      const result = await mockEmailService.sendContactEmail(data);
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
export const useDetailedContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const submitForm = async (data: DetailedContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Check if we're in development mode or if API is available
      const isDevelopment = import.meta.env.DEV;
      
      // Use mock service (logs to console)
      const result = await mockEmailService.sendDetailedContactEmail(data);
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