const sendEmail = require('./src/utils/sendEmail');
const dotenv = require('dotenv');
dotenv.config();

async function testEmailToUser() {
    try {
        console.log('=== EMAIL DEBUG TEST ===');
        console.log('EMAIL_USER:', process.env.EMAIL_USER);
        console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '***SET***' : 'NOT SET');
        console.log('Sending test email to rvsaxena1821@gmail.com...');
        
        const result = await sendEmail(
            'rvsaxena1821@gmail.com', 
            '🔐 OTP Test - Internship Portal', 
            'This is a test OTP: 123456',
            `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; text-align: center;">
                <h2 style="color: white; margin: 0; font-size: 24px;">🔐 OTP Test Email</h2>
                <p style="color: rgba(255,255,255,0.9); margin: 20px 0; font-size: 16px;">
                  Your test OTP code is:
                </p>
                <div style="background: white; color: #333; font-size: 32px; font-weight: bold; 
                            padding: 20px; border-radius: 8px; letter-spacing: 5px; margin: 20px 0;">
                  123456
                </div>
                <p style="color: rgba(255,255,255,0.8); margin: 20px 0 0 0; font-size: 14px;">
                  If you receive this email, your OTP system is working! ✅
                </p>
              </div>
              <div style="text-align: center; margin-top: 30px; color: #666; font-size: 12px;">
                <p>Test from Internship Portal Backend</p>
              </div>
            </div>
            `
        );
        
        console.log('Email send result:', result);
        
        if (result.success) {
            console.log('✅ Email sent successfully! Check your inbox.');
            console.log('📧 Message ID:', result.messageId);
        } else {
            console.log('❌ Email failed:', result.error);
        }
        
    } catch (err) {
        console.error('❌ Test failed with error:', err);
    }
}

testEmailToUser();
