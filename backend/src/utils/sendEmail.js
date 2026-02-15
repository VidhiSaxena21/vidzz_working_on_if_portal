const nodemailer = require('nodemailer');

// Enhanced email helper for OTP and notifications with HTML support
const sendEmail = async (to, subject, text, html = null) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp-relay.brevo.com',
      port: 587,
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Internship Fair" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
      html: html || text, // Use HTML if provided, otherwise fallback to text
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
    
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error: error.message };
  }
};

module.exports = sendEmail;
