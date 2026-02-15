const sendEmail = require('./src/utils/sendEmail');
const dotenv = require('dotenv');
dotenv.config();

async function test() {
    const target = 'rakhigaurgaur@gmail.com';
    try {
        console.log('Testing email to:', target);
        await sendEmail(target, 'Verification Code Test', 'This is a test to verify you can receive OTP emails. Your code is 999111');
        console.log('SUCCESS: Email sent to', target);
    } catch (err) {
        console.error('FAILURE: Could not send email to', target);
        console.error(err);
    }
}

test();
