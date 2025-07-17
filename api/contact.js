import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.resend.com',
    port: 465,
    secure: true,
    auth: {
      user: 'resend',
      pass: process.env.REACT_APP_RESEND_API_KEY,
    },
  });

  try {
    await transporter.sendMail({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'fakiiahmad001@gmail.com',
      subject: `[Portfolio] ${subject}`,
      replyTo: email,
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Phone:</b> ${phone || '-'} </p><p><b>Message:</b><br>${message}</p>`
    });
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
