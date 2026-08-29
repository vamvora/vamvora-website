import emailjs from '@emailjs/browser';

export const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'bdKtykNF_6k4jG4PW',
  SERVICE_ID: 'service_qru2nnm',
  TEMPLATE_ID: 'template_xck0urd',
  RECIPIENT_EMAIL: 'sales@vamvoratech.com',
};

export interface ContactFormData {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  subject?: string;
  message?: string;
}

/**
 * Sends contact message via EmailJS to sales@vamvoratech.com
 */
export const sendContactEmail = async (data: ContactFormData): Promise<{ success: boolean; error?: string }> => {
  try {
    const templateParams = {
      // Standard variations for EmailJS template placeholders
      from_name: data.name,
      name: data.name,
      from_email: data.email,
      email: data.email,
      reply_to: data.email,
      company: data.company || 'Not provided',
      company_name: data.company || 'Not provided',
      phone: data.phone || 'Not provided',
      phone_number: data.phone || 'Not provided',
      subject: data.subject || 'Website Inquiry',
      message: data.message || '(No message provided)',
      to_email: EMAILJS_CONFIG.RECIPIENT_EMAIL,
      to_name: 'VAM VORA Technologies',
      sent_at: new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }),
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );

    if (response.status === 200) {
      return { success: true };
    } else {
      return { success: false, error: `EmailJS responded with status ${response.status}` };
    }
  } catch (err: unknown) {
    console.error('EmailJS Send Error:', err);
    const errorMessage = err instanceof Error ? err.message : 'Failed to transmit message';
    return { success: false, error: errorMessage };
  }
};
