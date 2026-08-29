import emailjs from '@emailjs/browser';

export const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'bdKtykNF_6k4jG4PW',
  SERVICE_ID: 'service_qru2nnm',
  TEMPLATE_ID: 'template_xck0urd',
  RECIPIENT_EMAIL: 'sales@vamvoratech.com',
};

// Initialize EmailJS browser SDK
try {
  emailjs.init({
    publicKey: EMAILJS_CONFIG.PUBLIC_KEY,
    blockHeadless: false,
  });
} catch (e) {
  console.warn('EmailJS initialization warning:', e);
}

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
  const timestamp = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });

  const templateParams: Record<string, string> = {
    // Name parameter variants
    from_name: data.name,
    name: data.name,
    user_name: data.name,
    fullName: data.name,
    full_name: data.name,

    // Email parameter variants
    from_email: data.email,
    email: data.email,
    user_email: data.email,
    reply_to: data.email,
    workEmail: data.email,
    work_email: data.email,

    // Company parameter variants
    company: data.company || 'Not provided',
    company_name: data.company || 'Not provided',
    companyName: data.company || 'Not provided',
    organization: data.company || 'Not provided',

    // Phone parameter variants
    phone: data.phone || 'Not provided',
    phone_number: data.phone || 'Not provided',
    user_phone: data.phone || 'Not provided',
    contact_number: data.phone || 'Not provided',

    // Subject parameter variants
    subject: data.subject || 'Website Inquiry',
    title: data.subject || 'Website Inquiry',

    // Message parameter variants
    message: data.message || '(No message content provided)',
    user_message: data.message || '(No message content provided)',
    notes: data.message || '(No message content provided)',
    inquiry: data.message || '(No message content provided)',

    // Destination parameter variants
    to_email: EMAILJS_CONFIG.RECIPIENT_EMAIL,
    to_name: 'VAM VORA Technologies',
    recipient: EMAILJS_CONFIG.RECIPIENT_EMAIL,
    sent_at: timestamp,
    date: timestamp,
  };

  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );

    if (response.status === 200 || response.text === 'OK') {
      return { success: true };
    }
  } catch (sdkError: unknown) {
    console.warn('EmailJS SDK send encountered an issue, attempting REST endpoint fallback:', sdkError);

    // Fallback: Direct REST API dispatch
    try {
      const restResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: EMAILJS_CONFIG.SERVICE_ID,
          template_id: EMAILJS_CONFIG.TEMPLATE_ID,
          user_id: EMAILJS_CONFIG.PUBLIC_KEY,
          template_params: templateParams,
        }),
      });

      if (restResponse.ok) {
        return { success: true };
      } else {
        const errorText = await restResponse.text();
        return { success: false, error: errorText || 'Failed to dispatch email' };
      }
    } catch (restError: unknown) {
      console.error('EmailJS REST Fallback Error:', restError);
      const errorMessage = restError instanceof Error ? restError.message : 'Network error sending email';
      return { success: false, error: errorMessage };
    }
  }

  return { success: true };
};

