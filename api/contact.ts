import { Resend } from 'resend';

export async function POST(request) {
  const { name, email, phone, subject, message } = await request.json();
  const resend = new Resend(process.env.REACT_APP_RESEND_API_KEY);

  try {
    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['fakiiahmad001@gmail.com'],
      subject: `[Portfolio] ${subject}`,
  replyTo: email,
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Phone:</b> ${phone || '-'}</p><p><b>Message:</b><br>${message}</p>`
    });
    return new Response(JSON.stringify({ success: true, data }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
