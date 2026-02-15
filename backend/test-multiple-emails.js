const sendEmail = require('./src/utils/sendEmail');
const dotenv = require('dotenv');
dotenv.config();

async function testDifferentFrom() {
    try {
        console.log('=== TESTING DIFFERENT FROM ADDRESS ===');
        
        // Test with Gmail-style from address
        const result = await sendEmail(
            'rvsaxena1821@gmail.com', 
            'Test 2 - Internship Portal', 
            'This is test email #2',
            `
            <div style="font-family: Arial, sans-serif; padding: 20px; text-align: center;">
                <h2>🎯 Email Test #2</h2>
                <p>If you receive this, the email system is working!</p>
                <div style="background: #4CAF50; color: white; padding: 10px; border-radius: 5px; margin: 20px 0;">
                    SUCCESS! ✅
                </div>
            </div>
            `
        );
        
        console.log('Test 2 result:', result);
        
        // Also test with your actual email from registration
        const result2 = await sendEmail(
            'vidsaxena1821@gmail.com', 
            'Test 3 - Registration Email', 
            'This simulates a registration email',
            `
            <div style="font-family: Arial, sans-serif; padding: 20px;">
                <h2>🚀 Registration Test</h2>
                <p>This simulates what you'd get during registration.</p>
                <p>Check both inbox and spam folder!</p>
            </div>
            `
        );
        
        console.log('Test 3 result:', result2);
        
    } catch (err) {
        console.error('Test failed:', err);
    }
}

testDifferentFrom();
