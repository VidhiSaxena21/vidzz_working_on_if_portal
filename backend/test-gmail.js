const { sendEmail, generateOTP } = require('./src/utils/gmailService');
const dotenv = require('dotenv');
dotenv.config();

async function testGmailService() {
    console.log('=== GMAIL SERVICE TEST ===');
    console.log('GMAIL_USER:', process.env.GMAIL_USER || 'NOT SET');
    console.log('GMAIL_APP_PASS:', process.env.GMAIL_APP_PASS ? '***SET***' : 'NOT SET');
    
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASS) {
        console.log('❌ Please set GMAIL_USER and GMAIL_APP_PASS in .env file');
        return;
    }

    try {
        // Test 1: Simple email
        console.log('\n📧 Sending simple test email...');
        const result1 = await sendEmail(
            'rvsaxena1821@gmail.com',
            '🧪 Gmail Test 1',
            'This is a simple test email from Gmail service.'
        );
        console.log('Result 1:', result1);

        // Test 2: HTML email with OTP
        console.log('\n🔐 Sending OTP test email...');
        const testOtp = generateOTP();
        const otpHtml = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background: linear-gradient(135deg, #4285F4 0%, #34A853 100%); padding: 30px; border-radius: 10px; text-align: center;">
                <h2 style="color: white; margin: 0; font-size: 24px;">📬 Gmail Test</h2>
                <p style="color: rgba(255,255,255,0.9); margin: 20px 0; font-size: 16px;">
                  Your test OTP from Gmail service:
                </p>
                <div style="background: white; color: #333; font-size: 32px; font-weight: bold; 
                            padding: 20px; border-radius: 8px; letter-spacing: 5px; margin: 20px 0;">
                  ${testOtp}
                </div>
                <p style="color: rgba(255,255,255,0.8); margin: 20px 0 0 0; font-size: 14px;">
                  ✅ Gmail service is working if you receive this!
                </p>
              </div>
            </div>
        `;
        
        const result2 = await sendEmail(
            'rvsaxena1821@gmail.com',
            '🔐 Gmail OTP Test',
            `Your test OTP is: ${testOtp}`,
            otpHtml
        );
        console.log('Result 2:', result2);
        console.log('✅ Gmail service test completed!');

    } catch (error) {
        console.error('❌ Gmail test failed:', error);
    }
}

testGmailService();
