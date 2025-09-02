import { NextRequest, NextResponse } from 'next/server';
import { createEmailService, addToMailchimp, addToMondaycom } from '@/lib/emailService';

interface SubscriptionData {
  firstName: string;
  lastName: string;
  email: string;
  agreeToPolicy: boolean;
}

export async function POST(request: NextRequest) {
  try {
    const body: SubscriptionData = await request.json();
    
    // Validate required fields
    if (!body.firstName || !body.lastName || !body.email || !body.agreeToPolicy) {
      return NextResponse.json(
        { error: 'All fields are required and privacy policy must be accepted' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const emailService = createEmailService();
    
    // Process subscription in parallel for better performance
    await Promise.all([
      // Add to Mailchimp
      addToMailchimp({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email
      }),
      
      // Add to Monday.com
      addToMondaycom({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email
      }),
      
      // Send welcome email to subscriber
      emailService.sendWelcomeEmail({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email
      }),
      
      // Send notification email to SPNC
      emailService.sendNotificationEmail({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email
      })
    ]);

    console.log('✅ Newsletter subscription processed successfully:', {
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Successfully subscribed to newsletter' 
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
