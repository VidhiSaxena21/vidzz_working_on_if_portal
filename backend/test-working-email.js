const { sendEmail, generateOTP } = require('./src/utils/workingEmailService');

async function testWorkingEmail() {
    console.log('=== WORKING EMAIL SERVICE TEST ===');
    
    try {
        const testOtp = generateOTP();
        console.log('🔐 Generated OTP:', testOtp);
        
        const result = await sendEmail(
            'rvsaxena1821@gmail.com',
            '🧪 WORKING EMAIL TEST',
            `This is a test from the working email service. OTP: ${testOtp}`,
            `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 2px solid #4CAF50; border-radius: 10px;">
                <div style="background: #4CAF50; color: white; padding: 20px; text-align: center;">
                    <h2>🎯 EMAIL SERVICE WORKING!</h2>
                    <p style="margin: 10px 0; font-size: 18px;">Test OTP: <strong>${testOtp}</strong></p>
                    <p style="margin: 10px 0; font-size: 14px;">If you receive this, the email system is fixed!</p>
                </div>
                <div style="padding: 20px; text-align: center; color: #666;">
                    <p>From: Working Email Service</p>
                </div>
            </div>
            `
        );
        
        console.log('📧 Test Result:', result);
        
        if (result.success) {
            console.log('✅ SUCCESS! Email service is working!');
            console.log('📬 Check your inbox for the test email');
        } else {
            console.log('❌ FAILED:', result.error);
        }
        
    } catch (error) {
        console.error('❌ Test failed:', error);
    }
}

testWorkingEmail();
