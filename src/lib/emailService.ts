import { generateWelcomeEmail, generateNotificationEmail } from './emailTemplates';

interface SubscriberData {
  firstName: string;
  lastName: string;
  email: string;
}

interface EmailServiceConfig {
  fromEmail: string;
  fromName: string;
  notificationEmail: string;
}

// Email service interface - can be implemented with different providers
export interface EmailService {
  sendWelcomeEmail(data: SubscriberData): Promise<void>;
  sendNotificationEmail(data: SubscriberData): Promise<void>;
}

// Mailchimp Transactional API service implementation
class MailchimpEmailService implements EmailService {
  private config: EmailServiceConfig;
  private apiKey: string;

  constructor(config: EmailServiceConfig, apiKey: string) {
    this.config = config;
    this.apiKey = apiKey;
  }

  async sendWelcomeEmail(data: SubscriberData): Promise<void> {
    const { subject, html, text } = generateWelcomeEmail(data);
    
    if (!this.apiKey) {
      console.log('📧 Mailchimp API key not provided, welcome email would be sent:', {
        to: data.email,
        from: `${this.config.fromName} <${this.config.fromEmail}>`,
        subject,
      });
      return;
    }

    try {
      const response = await fetch('https://mandrillapp.com/api/1.0/messages/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          key: this.apiKey,
          message: {
            html,
            text,
            subject,
            from_email: this.config.fromEmail,
            from_name: this.config.fromName,
            to: [
              {
                email: data.email,
                name: `${data.firstName} ${data.lastName}`,
                type: 'to',
              },
            ],
            headers: {
              'Reply-To': this.config.fromEmail,
            },
            important: false,
            track_opens: true,
            track_clicks: true,
            auto_text: true,
            auto_html: false,
            inline_css: false,
            url_strip_qs: false,
            preserve_recipients: false,
            view_content_link: false,
            tracking_domain: null,
            signing_domain: null,
            return_path_domain: null,
          },
          async: false,
          ip_pool: 'Main Pool',
        }),
      });

      const result = await response.json();
      
      if (!response.ok || (result[0] && result[0].status === 'rejected')) {
        throw new Error(`Failed to send welcome email: ${JSON.stringify(result)}`);
      }
      
      console.log('✅ Welcome email sent successfully via Mailchimp:', {
        to: data.email,
        status: result[0]?.status,
        messageId: result[0]?._id,
      });
    } catch (error) {
      console.error('❌ Failed to send welcome email via Mailchimp:', error);
      throw error;
    }
  }

  async sendNotificationEmail(data: SubscriberData): Promise<void> {
    const { subject, html, text } = generateNotificationEmail(data);
    
    if (!this.apiKey) {
      console.log('📧 Mailchimp API key not provided, notification email would be sent:', {
        to: this.config.notificationEmail,
        from: `${this.config.fromName} <${this.config.fromEmail}>`,
        subject,
      });
      return;
    }

    try {
      const response = await fetch('https://mandrillapp.com/api/1.0/messages/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          key: this.apiKey,
          message: {
            html,
            text,
            subject,
            from_email: this.config.fromEmail,
            from_name: this.config.fromName,
            to: [
              {
                email: this.config.notificationEmail,
                name: 'SPNC Team',
                type: 'to',
              },
            ],
            headers: {
              'Reply-To': this.config.fromEmail,
            },
            important: true,
            track_opens: true,
            track_clicks: true,
            auto_text: true,
            auto_html: false,
            inline_css: false,
            url_strip_qs: false,
            preserve_recipients: false,
            view_content_link: false,
            tracking_domain: null,
            signing_domain: null,
            return_path_domain: null,
          },
          async: false,
          ip_pool: 'Main Pool',
        }),
      });

      const result = await response.json();
      
      if (!response.ok || (result[0] && result[0].status === 'rejected')) {
        throw new Error(`Failed to send notification email: ${JSON.stringify(result)}`);
      }
      
      console.log('✅ Notification email sent successfully via Mailchimp:', {
        to: this.config.notificationEmail,
        status: result[0]?.status,
        messageId: result[0]?._id,
      });
    } catch (error) {
      console.error('❌ Failed to send notification email via Mailchimp:', error);
      throw error;
    }
  }
}

// Factory function to create email service
export function createEmailService(): EmailService {
  const config: EmailServiceConfig = {
    fromEmail: process.env.FROM_EMAIL || 'newsletter@spnc-rfac.ca',
    fromName: process.env.FROM_NAME || 'Senior Pride Network Canada',
    notificationEmail: process.env.NOTIFICATION_EMAIL || 'info@spnc-rfac.ca',
  };

  // Use Mailchimp Transactional API (Mandrill) for sending emails
  const mailchimpTransactionalKey = process.env.MAILCHIMP_TRANSACTIONAL_API_KEY || '';
  return new MailchimpEmailService(config, mailchimpTransactionalKey);
}

// Mailchimp Audience integration
export async function addToMailchimp(data: SubscriberData): Promise<void> {
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
  const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX || 'us1';

  if (!apiKey || !audienceId) {
    console.log('📝 Mailchimp integration not configured, subscriber would be added:', data);
    return;
  }

  try {
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
        timestamp_signup: new Date().toISOString(),
        ip_signup: '', // You can capture this from the request if needed
        tags: ['Website Signup'],
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      
      // Handle case where email already exists
      if (error.title === 'Member Exists') {
        console.log('📝 Subscriber already exists in Mailchimp:', {
          email: data.email,
          status: 'already_subscribed'
        });
        return;
      }
      
      throw new Error(`Failed to add to Mailchimp: ${error.detail || error.title}`);
    }

    const result = await response.json();
    console.log('✅ Successfully added to Mailchimp audience:', {
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      audienceId,
      memberId: result.id,
      status: result.status
    });
    
  } catch (error) {
    console.error('❌ Failed to add subscriber to Mailchimp audience:', error);
    throw error;
  }
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
