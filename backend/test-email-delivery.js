const { sendEmail, generateOTP } = require('./src/utils/workingEmailService');

async function testEmailDelivery() {
    console.log('=== TESTING EMAIL DELIVERY ===');
    
    try {
        const result = await sendEmail(
            'rvsaxena1821@gmail.com',
            '🧪 TEST EMAIL - OTP System',
            'This is a test email to verify email delivery is working.',
            `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 2px solid #4CAF50; border-radius: 10px;">
                <div style="background: #4CAF50; color: white; padding: 20px; text-align: center;">
                    <h2>🎯 EMAIL DELIVERY TEST</h2>
                    <p style="margin: 10px 0; font-size: 16px;">If you receive this email, the system is working!</p>
                    <p style="margin: 10px 0; font-size: 14px;">Check your Gmail inbox now.</p>
                </div>
                <div style="padding: 20px; text-align: center; color: #666;">
                    <p>From: Internship Portal Email Service</p>
                    <p>Time: ${new Date().toLocaleString()}</p>
                </div>
            </div>
            `
        );
        
        console.log('📧 Test Result:', result);
        
        if (result.success) {
            console.log('✅ SUCCESS! Email service is active.');
            console.log('📬 Check your Gmail inbox for the test email.');
            console.log('🔐 OTP shown in console:', result.otp);
        } else {
            console.log('❌ FAILED:', result.error);
        }
        
    } catch (error) {
        console.error('❌ Test failed:', error);
    }
}

testEmailDelivery();
