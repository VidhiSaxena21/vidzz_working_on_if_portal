const nodemailer = require('nodemailer');
const crypto = require('crypto');

// Generate 6-digit OTP
const generateOTP = () => {
  return crypto.randomInt(100000, 999999).toString();
};

// Fallback email service using Ethereal (testing) or Gmail
const sendEmail = async (to, subject, text, html = null) => {
  try {
    // Try multiple services in order of preference
    
    // 1. Try Gmail first (if configured)
    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASS) {
      console.log('📧 Trying Gmail service...');
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: `"Internship Portal" <${process.env.EMAIL_USER}>`,
        to,
        subject,
        text,
        html: html || text,
      };

      const result = await transporter.sendMail(mailOptions);
      console.log('✅ Gmail sent successfully:', result.messageId);
      return { success: true, messageId: result.messageId, service: 'Gmail' };
    }
    
    // 2. Fallback to Ethereal for testing
    console.log('📧 Using Ethereal test service...');
    const testAccount = await nodemailer.createTestAccount();
    
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    const mailOptions = {
      from: `"Internship Portal" <${testAccount.user}>`,
      to,
      subject,
      text,
      html: html || text,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('✅ Ethereal sent successfully:', result.messageId);
    console.log('📧 Preview URL:', nodemailer.getTestMessageUrl(result));
    
    return { 
      success: true, 
      messageId: result.messageId, 
      service: 'Ethereal',
      previewUrl: nodemailer.getTestMessageUrl(result)
    };
    
  } catch (error) {
    console.error('❌ Email failed:', error);
    return { success: false, error: error.message };
  }
};

module.exports = { sendEmail, generateOTP };
