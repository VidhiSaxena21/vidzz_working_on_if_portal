const { sendEmail, generateOTP } = require('./src/utils/robustEmailService');
const dotenv = require('dotenv');
dotenv.config();

async function testRobustEmail() {
    console.log('=== ROBUST EMAIL SERVICE TEST ===');
    
    try {
        const testOtp = generateOTP();
        console.log('Generated OTP:', testOtp);
        
        const result = await sendEmail(
            'rvsaxena1821@gmail.com',
            '🔐 Test OTP - Robust Service',
            `Your test OTP is: ${testOtp}`,
            `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background: linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%); padding: 30px; border-radius: 10px; text-align: center;">
                <h2 style="color: white; margin: 0; font-size: 24px;">🚀 Robust Email Test</h2>
                <p style="color: rgba(255,255,255,0.9); margin: 20px 0; font-size: 16px;">
                  Your test OTP from robust service:
                </p>
                <div style="background: white; color: #333; font-size: 32px; font-weight: bold; 
                            padding: 20px; border-radius: 8px; letter-spacing: 5px; margin: 20px 0;">
                  ${testOtp}
                </div>
                <p style="color: rgba(255,255,255,0.8); margin: 20px 0 0 0; font-size: 14px;">
                  Service used: Testing in progress...
                </p>
              </div>
            </div>
            `
        );
        
        console.log('Email result:', result);
        
        if (result.success) {
            console.log('✅ Email service working!');
            if (result.service === 'Ethereal') {
                console.log('📧 Check preview URL for email content');
                console.log('📧 Preview:', result.previewUrl);
            }
        } else {
            console.log('❌ Email service failed:', result.error);
        }
        
    } catch (error) {
        console.error('❌ Test failed:', error);
    }
}

testRobustEmail();
