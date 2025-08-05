require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173' // React frontend origin
}));
app.use(express.json());

// Email transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Contact Form Endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { firstname, email, phone, message } = req.body;

    if (!firstname || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    const mailOptions = {
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New message from ${firstname}`,
      text: `
        Name: ${firstname}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Contact Error:', error);
    res.status(500).json({
      error: 'Failed to send message',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Footer Subscription Endpoint
app.post('/api/subscribe', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required.' });
    }

    const mailOptions = {
      from: `"Subscription" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: 'New Subscription Request',
      text: `New subscriber email: ${email}`,
      html: `
        <h2>New Email Subscription</h2>
        <p><strong>Email:</strong> ${email}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Subscription email sent successfully!' });
  } catch (error) {
    console.error('Subscription Error:', error);
    res.status(500).json({ error: 'Failed to send subscription email.' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
