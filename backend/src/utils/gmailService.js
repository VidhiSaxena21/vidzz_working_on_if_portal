const nodemailer = require('nodemailer');
const crypto = require('crypto');

// Generate 6-digit OTP without external dependencies
const generateOTP = () => {
  return crypto.randomInt(100000, 999999).toString();
};

// Enhanced Gmail-based email service
const sendEmail = async (to, subject, text, html = null) => {
  try {
    // Use Gmail directly (more reliable than Brevo)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_APP_PASS, // Gmail App Password (not regular password!)
      },
    });

    const mailOptions = {
      from: `"Internship Portal" <${process.env.GMAIL_USER}>`,
      to,
      subject,
      text,
      html: html || text,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Gmail email sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
    
  } catch (error) {
    console.error('❌ Gmail email failed:', error);
    return { success: false, error: error.message };
  }
};

module.exports = { sendEmail, generateOTP };
