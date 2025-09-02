interface WelcomeEmailData {
  firstName: string;
  lastName: string;
  email: string;
}

export function generateWelcomeEmail(data: WelcomeEmailData): { subject: string; html: string; text: string } {
  const subject = "Welcome to Senior Pride Network Canada!";
  
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to SPNC Newsletter</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f9f9f9;
        }
        .container {
            background-color: #ffffff;
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            margin-bottom: 30px;
        }
        .logo {
            max-width: 200px;
            height: auto;
            margin-bottom: 20px;
        }
        .title {
            color: #c026d3;
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 10px;
        }
        .subtitle {
            color: #666;
            font-size: 16px;
        }
        .content {
            margin: 30px 0;
        }
        .section {
            margin-bottom: 25px;
        }
        .section-title {
            color: #c026d3;
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 10px;
        }
        .button {
            display: inline-block;
            background-color: #c026d3;
            color: white;
            padding: 12px 24px;
            text-decoration: none;
            border-radius: 6px;
            font-weight: bold;
            margin: 10px 0;
        }
        .button:hover {
            background-color: #a21caf;
        }
        .footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #eee;
            text-align: center;
            color: #666;
            font-size: 14px;
        }
        .social-links {
            margin: 20px 0;
        }
        .social-links a {
            margin: 0 10px;
            text-decoration: none;
            color: #c026d3;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="https://spnc-rfac.ca/SPNC_RFAC_logo_IconPlusAcronymAndFullNameENFR_RGB_Web.png" alt="Senior Pride Network Canada" class="logo">
            <h1 class="title">Thank You for Subscribing!</h1>
            <p class="subtitle">Welcome to our community, ${data.firstName}!</p>
        </div>
        
        <div class="content">
            <p>We're thrilled to welcome you to our community. You'll soon start receiving our newsletters directly in your inbox, filled with resources, news, and stories focused on making spaces safer and more inclusive for older 2SLGBTQI+ people.</p>
            
            <div class="section">
                <h2 class="section-title">🗞️ Want to catch up?</h2>
                <p>You can explore our previous newsletters to dive into past topics, tips, and inspiring stories.</p>
                <a href="https://spnc-rfac.ca/newsletters" class="button">Browse Previous Newsletters</a>
            </div>
            
            <div class="section">
                <h2 class="section-title">⚙️ Manage Your Preferences</h2>
                <p>You're in control—update your subscription preferences or unsubscribe at any time using the link at the bottom of every newsletter we send.</p>
            </div>
            
            <div class="section">
                <h2 class="section-title">📢 Spread the Word</h2>
                <p>If you find our newsletter helpful, please share it or explore resources on making spaces safer and more inclusive with your friends, colleagues, or anyone who might benefit.</p>
                <a href="https://spnc-rfac.ca/resources" class="button">Explore Resources</a>
            </div>
            
            <p style="margin-top: 30px; font-weight: bold; color: #c026d3;">Thank you for supporting safer, more inclusive communities for older 2SLGBTQI+ people!</p>
        </div>
        
        <div class="footer">
            <div class="social-links">
                <a href="https://www.facebook.com/profile.php?id=61562126780629">Facebook</a>
                <a href="https://www.instagram.com/spnc.rfac">Instagram</a>
                <a href="https://www.linkedin.com/in/spnc-rfac/">LinkedIn</a>
            </div>
            <p>
                Senior Pride Network Canada / Réseau de la Fierté des personnes aînées du Canada<br>
                10-30 Cleary Ave, Ottawa, ON, K2A 4A1<br>
                <a href="mailto:info@spnc-rfac.ca">info@spnc-rfac.ca</a>
            </p>
            <p style="margin-top: 15px; font-size: 12px;">
                You received this email because you subscribed to our newsletter at spnc-rfac.ca<br>
                <a href="{{unsubscribe_url}}">Unsubscribe</a> | <a href="https://spnc-rfac.ca/about/policies/privacy-policy">Privacy Policy</a>
            </p>
        </div>
    </div>
</body>
</html>`;

  const text = `
Welcome to Senior Pride Network Canada!

Hi ${data.firstName},

Thank you for subscribing to our newsletter! We're thrilled to welcome you to our community.

You'll soon start receiving our newsletters directly in your inbox, filled with resources, news, and stories focused on making spaces safer and more inclusive for older 2SLGBTQI+ people.

WANT TO CATCH UP?
You can explore our previous newsletters to dive into past topics, tips, and inspiring stories.
Visit: https://spnc-rfac.ca/newsletters

MANAGE YOUR PREFERENCES
You're in control—update your subscription preferences or unsubscribe at any time using the link at the bottom of every newsletter we send.

SPREAD THE WORD
If you find our newsletter helpful, please share it or explore resources on making spaces safer and more inclusive with your friends, colleagues, or anyone who might benefit.
Resources: https://spnc-rfac.ca/resources

Thank you for supporting safer, more inclusive communities for older 2SLGBTQI+ people!

---
Senior Pride Network Canada / Réseau de la Fierté des personnes aînées du Canada
10-30 Cleary Ave, Ottawa, ON, K2A 4A1
Email: info@spnc-rfac.ca
Website: https://spnc-rfac.ca

Follow us:
Facebook: https://www.facebook.com/profile.php?id=61562126780629
Instagram: https://www.instagram.com/spnc.rfac
LinkedIn: https://www.linkedin.com/in/spnc-rfac/

You received this email because you subscribed to our newsletter at spnc-rfac.ca
Unsubscribe: {{unsubscribe_url}}
Privacy Policy: https://spnc-rfac.ca/about/policies/privacy-policy
`;

  return { subject, html, text };
}

export function generateNotificationEmail(data: WelcomeEmailData): { subject: string; html: string; text: string } {
  const subject = "New Newsletter Subscriber - SPNC";
  
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Newsletter Subscriber</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f9f9f9;
        }
        .container {
            background-color: #ffffff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .header {
            border-bottom: 2px solid #c026d3;
            padding-bottom: 15px;
            margin-bottom: 20px;
        }
        .title {
            color: #c026d3;
            font-size: 24px;
            font-weight: bold;
            margin: 0;
        }
        .info-row {
            margin: 10px 0;
            padding: 8px 0;
            border-bottom: 1px solid #f0f0f0;
        }
        .label {
            font-weight: bold;
            color: #555;
            display: inline-block;
            width: 120px;
        }
        .timestamp {
            color: #666;
            font-size: 14px;
            margin-top: 20px;
            padding-top: 15px;
            border-top: 1px solid #eee;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1 class="title">🎉 New Newsletter Subscriber</h1>
        </div>
        
        <div class="info-row">
            <span class="label">Name:</span>
            ${data.firstName} ${data.lastName}
        </div>
        
        <div class="info-row">
            <span class="label">Email:</span>
            <a href="mailto:${data.email}">${data.email}</a>
        </div>
        
        <div class="timestamp">
            Subscribed on: ${new Date().toLocaleString('en-CA', { 
              timeZone: 'America/Toronto',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit'
            })} (Eastern Time)
        </div>
    </div>
</body>
</html>`;

  const text = `
New Newsletter Subscriber - SPNC

A new person has subscribed to the SPNC newsletter:

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Subscribed: ${new Date().toLocaleString('en-CA', { 
  timeZone: 'America/Toronto',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
})} (Eastern Time)

This subscriber has been automatically added to the newsletter system.
`;

  return { subject, html, text };
}
