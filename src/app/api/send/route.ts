
import EmailTemplate from '@/components/EmailTemplete';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'New Message <onboarding@resend.dev>',
      to: ['yhhfn.org.np@gmail.com'],
      subject: `New Contact Form Message: ${subject}`,
      react: EmailTemplate({ 
        name: name, 
        email: email, 
        subject: subject, 
        message: message 
      })
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return Response.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Caught error:', error);
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}