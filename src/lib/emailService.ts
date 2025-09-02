import { generateWelcomeEmail, generateNotificationEmail } from './emailTemplates';

interface SubscriberData {
  firstName: string;
  lastName: string;
  email: string;
}

interface EmailServiceConfig {
  apiKey?: string;
  fromEmail: string;
  fromName: string;
  notificationEmail: string;
}

// Email service interface - can be implemented with different providers
export interface EmailService {
  sendWelcomeEmail(data: SubscriberData): Promise<void>;
  sendNotificationEmail(data: SubscriberData): Promise<void>;
}

// Resend email service implementation
class ResendEmailService implements EmailService {
  private config: EmailServiceConfig;

  constructor(config: EmailServiceConfig) {
    this.config = config;
  }

  async sendWelcomeEmail(data: SubscriberData): Promise<void> {
    const { subject, html, text } = generateWelcomeEmail(data);
    
    // TODO: Replace with actual Resend API call when API key is provided
    console.log('📧 Welcome email would be sent:', {
      to: data.email,
      from: `${this.config.fromName} <${this.config.fromEmail}>`,
      subject,
      // html, // Commented out to avoid long console output
      // text
    });
    
    // Uncomment when you have Resend API key:
    /*
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.config.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `${this.config.fromName} <${this.config.fromEmail}>`,
        to: [data.email],
        subject,
        html,
        text,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to send welcome email: ${response.statusText}`);
    }
    */
  }

  async sendNotificationEmail(data: SubscriberData): Promise<void> {
    const { subject, html, text } = generateNotificationEmail(data);
    
    // TODO: Replace with actual Resend API call when API key is provided
    console.log('📧 Notification email would be sent:', {
      to: this.config.notificationEmail,
      from: `${this.config.fromName} <${this.config.fromEmail}>`,
      subject,
      // html, // Commented out to avoid long console output
      // text
    });
    
    // Uncomment when you have Resend API key:
    /*
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.config.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `${this.config.fromName} <${this.config.fromEmail}>`,
        to: [this.config.notificationEmail],
        subject,
        html,
        text,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to send notification email: ${response.statusText}`);
    }
    */
  }
}

// Factory function to create email service
export function createEmailService(): EmailService {
  const config: EmailServiceConfig = {
    apiKey: process.env.RESEND_API_KEY,
    fromEmail: process.env.FROM_EMAIL || 'newsletter@spnc-rfac.ca',
    fromName: process.env.FROM_NAME || 'Senior Pride Network Canada',
    notificationEmail: process.env.NOTIFICATION_EMAIL || 'info@spnc-rfac.ca',
  };

  // For now, always return ResendEmailService
  // You can add logic here to choose different services based on env vars
  return new ResendEmailService(config);
}

// Mailchimp integration
export async function addToMailchimp(data: SubscriberData): Promise<void> {
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
  const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX || 'us1';

  if (!apiKey || !audienceId) {
    console.log('📝 Mailchimp integration not configured, subscriber would be added:', data);
    return;
  }

  // TODO: Replace with actual Mailchimp API call when credentials are provided
  console.log('📝 Mailchimp subscriber would be added:', {
    email: data.email,
    firstName: data.firstName,
    lastName: data.lastName,
    audienceId,
    serverPrefix
  });

  // Uncomment when you have Mailchimp credentials:
  /*
  const url = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members`;
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email_address: data.email,
      status: 'subscribed',
      merge_fields: {
        FNAME: data.firstName,
        LNAME: data.lastName,
      },
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to add to Mailchimp: ${error}`);
  }
  */
}

// Monday.com integration
export async function addToMondaycom(data: SubscriberData): Promise<void> {
  const apiKey = process.env.MONDAY_API_KEY;
  const boardId = process.env.MONDAY_BOARD_ID;

  if (!apiKey || !boardId) {
    console.log('📋 Monday.com integration not configured, subscriber would be added:', data);
    return;
  }

  // TODO: Replace with actual Monday.com API call when credentials are provided
  console.log('📋 Monday.com subscriber would be added:', {
    email: data.email,
    firstName: data.firstName,
    lastName: data.lastName,
    boardId
  });

  // Uncomment when you have Monday.com credentials:
  /*
  const query = `
    mutation {
      create_item (
        board_id: ${boardId}
        item_name: "${data.firstName} ${data.lastName}"
        column_values: "{\\"email\\": \\"${data.email}\\", \\"status\\": \\"Subscribed\\"}"
      ) {
        id
      }
    }
  `;

  const response = await fetch('https://api.monday.com/v2', {
    method: 'POST',
    headers: {
      'Authorization': apiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error(`Failed to add to Monday.com: ${response.statusText}`);
  }
  */
}
