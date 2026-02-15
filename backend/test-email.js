const sendEmail = require('./src/utils/sendEmail');
const dotenv = require('dotenv');
dotenv.config();

async function test() {
    try {
        console.log('Using EMAIL_USER:', process.env.EMAIL_USER);
        await sendEmail('vidzzz.zzz2110@gmail.com', 'OTP Verification Test', 'Your OTP is 123456');
        console.log('Email sent successfully!');
    } catch (err) {
        console.error('Email failed:');
        console.error(err);
    }
}

test();
