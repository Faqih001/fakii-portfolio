import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'name, email, subject and message are required.' });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    secure: false, // STARTTLS on port 587
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <h2>New message from your portfolio</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone || '—'}</p>
        <p><b>Subject:</b> ${subject}</p>
        <hr/>
        <p><b>Message:</b></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Mail error:', error.message);
    res.status(500).json({ error: error.message });
  }
}
