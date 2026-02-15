# Gmail Configuration Setup Instructions

## Step 1: Enable Gmail App Password
1. Go to your Google Account: https://myaccount.google.com/
2. Go to Security → 2-Step Verification
3. Enable 2-Step Verification if not already enabled
4. Go to App Passwords
5. Generate new app password:
   - Select "Mail" for app
   - Select "Other (Custom name)" for device
   - Name it "Internship Portal"
   - Copy the 16-character password

## Step 2: Update your .env file
```
# Gmail Configuration
GMAIL_USER=your-actual-gmail@gmail.com
GMAIL_APP_PASS=the-16-char-app-password

# Keep original as backup
EMAIL_USER=a22614001@smtp-brevo.com
EMAIL_PASS=your-brevo-password

# Other settings
MONGO_URI=mongodb://127.0.0.1:27017/internship_portal
JWT_SECRET=your-super-secret-jwt-key
```

## Step 3: Test the new Gmail service
Run: node test-gmail.js

## Benefits of Gmail over Brevo:
✅ More reliable delivery
✅ Better inbox placement
✅ Faster delivery
✅ No third-party dependencies
✅ Full control over email service
