const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config({ path: '../.env' });

const app = express();
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  host: 'smtp.resend.com',
  port: 465,
  secure: true,
  auth: {
    user: 'resend',
    pass: process.env.REACT_APP_RESEND_API_KEY,
  },
});

app.post('/contact', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;
  try {
    await transporter.sendMail({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'fakiiahmad001@gmail.com',
      subject: `[Portfolio] ${subject}`,
      replyTo: email,
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Phone:</b> ${phone || '-'} </p><p><b>Message:</b><br>${message}</p>`
    });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Contact API server running on port ${PORT}`);
});
