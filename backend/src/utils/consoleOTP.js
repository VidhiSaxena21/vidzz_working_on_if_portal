const crypto = require('crypto');

// Generate 6-digit OTP and log to console
const generateAndLogOTP = (email) => {
  const otp = crypto.randomInt(100000, 999999).toString();
  console.log('==========================================');
  console.log('🔐 OTP FOR EMAIL:', email);
  console.log('📱 YOUR OTP CODE IS:', otp);
  console.log('==========================================');
  console.log('⚠️  Use this OTP in the registration form');
  console.log('⏰ This OTP will expire in 10 minutes');
  console.log('==========================================');
  return otp;
};

module.exports = { generateAndLogOTP };
