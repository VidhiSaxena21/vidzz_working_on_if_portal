# Email Configuration Test
echo "EMAIL_USER is set: $EMAIL_USER"
echo "EMAIL_PASS is set: $EMAIL_PASS"
echo "JWT_SECRET is set: $JWT_SECRET"
echo "MONGO_URI is set: $MONGO_URI"

# Test email sending
node -e "
const sendEmail = require('./src/utils/sendEmail');
sendEmail('test@example.com', 'Test', 'Testing email config')
  .then(result => console.log('Email test result:', result))
  .catch(err => console.error('Email test error:', err));
"
