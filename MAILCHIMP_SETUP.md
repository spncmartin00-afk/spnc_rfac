# Mailchimp Newsletter Setup Guide

This guide explains how to set up Mailchimp for your newsletter subscription system.

## Features

When someone subscribes to your newsletter, the system will:

1. ✅ Add them to your Mailchimp audience automatically
2. ✅ Send them a welcome email via Mailchimp Transactional API
3. ✅ Send you a notification email at info@spnc-rfac.ca
4. ✅ Tag them as "Website Signup" in Mailchimp for segmentation

## Required Environment Variables

Add these to your `.env.local` file:

```env
# Mailchimp Audience Management (Required)
MAILCHIMP_API_KEY=your_mailchimp_api_key_here
MAILCHIMP_AUDIENCE_ID=your_audience_list_id_here
MAILCHIMP_SERVER_PREFIX=us1

# Mailchimp Transactional API for Emails (Required)
MAILCHIMP_TRANSACTIONAL_API_KEY=your_transactional_api_key_here

# Email Configuration (Optional - has defaults)
FROM_EMAIL=newsletter@spnc-rfac.ca
FROM_NAME=Senior Pride Network Canada
NOTIFICATION_EMAIL=info@spnc-rfac.ca

# Monday.com Integration (Optional)
MONDAY_API_KEY=your_monday_api_key_here
MONDAY_BOARD_ID=your_board_id_here
```

## How to Get Your Mailchimp Credentials

### 1. Mailchimp API Key (Audience Management)

1. Log in to your Mailchimp account
2. Go to **Account** → **Extras** → **API Keys**
3. Create a new API key or use an existing one
4. Copy the key and add it to `MAILCHIMP_API_KEY`

### 2. Audience ID

1. Go to **Audience** → **All contacts**
2. Click **Settings** → **Audience name and defaults**
3. Look for **Audience ID** - it's a string like `a1b2c3d4e5`
4. Add this to `MAILCHIMP_AUDIENCE_ID`

### 3. Server Prefix

1. In your API key, you'll see something like `abc123def456-us1`
2. The server prefix is the part after the dash (e.g., `us1`, `us2`, `eu1`)
3. Add this to `MAILCHIMP_SERVER_PREFIX`

### 4. Mailchimp Transactional API Key

1. Go to **Account** → **Transactional** → **Overview**
2. If you haven't set up Transactional yet, click **Get Started**
3. Go to **Settings** → **SMTP & API info**
4. Generate or copy your API key
5. Add this to `MAILCHIMP_TRANSACTIONAL_API_KEY`

**Note:** Mailchimp Transactional (formerly Mandrill) may require a paid account or separate setup.

## Testing the Setup

1. Add all environment variables to your `.env.local` file
2. Restart your development server: `npm run dev`
3. Go to your website and submit the newsletter signup form
4. Check your console logs for success messages
5. Check your Mailchimp audience to see if the subscriber was added
6. Check if the welcome email was sent
7. Check if you received the notification email

## Troubleshooting

### "Mailchimp integration not configured"
- Make sure `MAILCHIMP_API_KEY` and `MAILCHIMP_AUDIENCE_ID` are set

### "Failed to add to Mailchimp" errors
- Check that your API key is valid
- Verify the audience ID is correct
- Ensure the server prefix matches your account region

### Email not sending
- Verify `MAILCHIMP_TRANSACTIONAL_API_KEY` is set
- Make sure your Mailchimp Transactional account is active
- Check that your `FROM_EMAIL` is verified in Mailchimp

### "Member Exists" error
- This is normal - it means someone with that email is already subscribed
- The system handles this gracefully and won't throw an error

## Email Templates

The system includes beautifully designed email templates for:

- **Welcome emails** - Sent to new subscribers with links to resources
- **Notification emails** - Sent to your team when someone subscribes

Templates are defined in `/src/lib/emailTemplates.ts` and can be customized.

## Production Deployment

When deploying to production (Vercel, etc.):

1. Add all environment variables to your hosting platform
2. Make sure your `FROM_EMAIL` domain is verified in Mailchimp
3. Test the functionality in production
4. Monitor the logs for any errors

Your newsletter system is now fully integrated with Mailchimp! 🎉