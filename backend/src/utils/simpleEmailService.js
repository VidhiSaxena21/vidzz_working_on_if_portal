const nodemailer = require('nodemailer');
const crypto = require('crypto');

// Generate 6-digit OTP
const generateOTP = () => {
  return crypto.randomInt(100000, 999999).toString();
};

// Simple email service that works
const sendEmail = async (to, subject, text, html = null) => {
  try {
    console.log('📧 Sending email to:', to);
    console.log('🔧 Using Mailtrap for testing');
    
    // Use Mailtrap for testing (always works)
    const transporter = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: 'your-mailtrap-username',
        pass: 'your-mailtrap-password',
      },
    });

    const mailOptions = {
      from: '"Internship Portal" <test@internship-portal.com>',
      to,
      subject,
      text,
      html: html || text,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully!');
    console.log('📧 Message ID:', result.messageId);
    return { success: true, messageId: result.messageId };
    
  } catch (error) {
    console.error('❌ Email failed:', error);
    return { success: false, error: error.message };
  }
};

module.exports = { sendEmail, generateOTP };
