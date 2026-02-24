# Workforce Recruitment Solutions - Configuration Guide

This guide will help you configure the email notifications, Google Sheets integration, and other features of the recruitment website.

## 📬 Where inquiries are sent

**Application form submissions are sent to Netlify and should be emailed to:**

**wrs.recruitment.hr@gmail.com**

### Enable email notifications (Netlify)

1. Log in to [Netlify](https://app.netlify.com/) and open your site.
2. Go to **Site configuration** → **Forms** (or **Forms** in the main menu).
3. Click your form (e.g. **application**).
4. Open **Form notifications** (or **Notifications and spam**).
5. Click **Add notification** → **Email notification**.
6. Set **Email to notify** to: **wrs.recruitment.hr@gmail.com**.
7. Optionally set a subject, e.g. `New application: {{form_name}}`.
8. Save.

After this, every new application will be stored in Netlify and a copy will be emailed to **wrs.recruitment.hr@gmail.com**.

---

## 📧 Email Configuration (EmailJS) – optional

To enable email notifications and auto-replies, you'll need to set up EmailJS:

### Step 1: Create an EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Set Up Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Add a new service (Gmail, Outlook, etc.)
3. Connect your email account
4. Note your **Service ID**

### Step 3: Create Email Templates

#### Template 1: HR Notification Template
- **Template Name**: `hr_notification`
- **Subject**: `New Application: {{position}}`
- **Content**:
```
New Application Received

Applicant Name: {{applicant_name}}
Email: {{applicant_email}}
Phone: {{applicant_phone}}
Position: {{position}}
Experience: {{experience}} years

Cover Letter:
{{cover_letter}}

---
Application Date: {{timestamp}}
```

#### Template 2: Auto-Reply Template
- **Template Name**: `auto_reply`
- **Subject**: `Thank you for your application - {{position}}`
- **Content**:
```
Dear {{applicant_name}},

Thank you for your interest in the {{position}} position at Workforce Recruitment Solutions.

We have successfully received your application and will review it carefully. Our HR team will be in touch with you shortly if your qualifications match our requirements.

If you have any questions, please don't hesitate to contact us.

Best regards,
Workforce Recruitment Solutions HR Team
```

### Step 4: Get Your Public Key
1. Go to **Account** > **General**
2. Find your **Public Key**
3. Copy it

### Step 5: Update script.js
Open `script.js` and update the email configuration section (around line 280):

```javascript
const emailConfig = {
    serviceId: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
    templateId: 'YOUR_TEMPLATE_ID', // Replace with your template ID for HR notifications
    publicKey: 'YOUR_PUBLIC_KEY', // Replace with your EmailJS public key
    autoReplyTemplateId: 'YOUR_AUTO_REPLY_TEMPLATE_ID' // Replace with auto-reply template ID
};
```

### Step 6: Add EmailJS SDK
Add this script tag to your `WorkforceRecruitmentSolution.html` before the closing `</body>` tag:

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script>
    (function(){
        emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your public key
    })();
</script>
```

Then uncomment the email sending code in `script.js` (around line 300).

---

## 📊 Google Sheets Integration

To automatically log applications to Google Sheets:

### Option 1: Using Google Apps Script (Recommended)

1. Create a new Google Sheet
2. Go to **Extensions** > **Apps Script**
3. Create a new script with this code:

```javascript
function doPost(e) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
        new Date(),
        data.name,
        data.email,
        data.phone,
        data.position,
        data.experience,
        data.coverLetter || '',
        data.resumeFileName || 'No file'
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({success: true}))
        .setMimeType(ContentService.MimeType.JSON);
}

function saveApplication(applicationData, jobTitle) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // If first row is empty, add headers
    if (sheet.getLastRow() === 0) {
        sheet.appendRow([
            'Timestamp',
            'Name',
            'Email',
            'Phone',
            'Position',
            'Experience',
            'Cover Letter',
            'Resume File'
        ]);
    }
    
    sheet.appendRow([
        new Date(),
        applicationData.name,
        applicationData.email,
        applicationData.phone,
        jobTitle,
        applicationData.experience,
        applicationData.coverLetter || '',
        applicationData.resumeFileName || 'No file'
    ]);
    
    return {success: true};
}
```

4. Deploy as a web app:
   - Click **Deploy** > **New deployment**
   - Choose **Web app**
   - Set execute as: **Me**
   - Set access: **Anyone**
   - Click **Deploy**
   - Copy the Web App URL

5. Update the script in your website to use the Web App URL

### Option 2: Manual Export
Use the "Export to CSV" button in the Admin Dashboard to manually export applications.

---

## 🔐 Admin Credentials

**Default Credentials:**
- Username: `admin`
- Password: `admin123`

**⚠️ IMPORTANT:** Change these credentials immediately after setup:
1. Log in to the admin dashboard
2. Go to **Settings** > **Admin Credentials**
3. Enter new username and password
4. Click **Change Credentials**

---

## 📁 File Upload Configuration

Resume uploads are currently stored in localStorage for demo purposes. For production:

### Option 1: Server-Side Storage
- Set up a backend server (Node.js, Python, PHP, etc.)
- Create an endpoint to handle file uploads
- Update `script.js` to send files to your server

### Option 2: Cloud Storage
- Use services like AWS S3, Google Cloud Storage, or Firebase Storage
- Configure upload URLs and update the form submission handler

---

## 🛡️ Security Recommendations

1. **Change default admin credentials** immediately
2. **Enable HTTPS** for production deployment
3. **Implement rate limiting** for form submissions
4. **Use environment variables** for sensitive configuration
5. **Regularly backup** job postings and applications data
6. **Implement CAPTCHA** if spam becomes an issue (honeypot is currently used)

---

## 📱 Customization

### Colors
Edit `styles.css` and modify the CSS variables:
```css
:root {
    --primary-red: #8B2635;
    --primary-maroon: #A52A2A;
    --dark-red: #6B1A22;
    /* ... */
}
```

### Content
- Update company information in `WorkforceRecruitmentSolution.html`
- Modify job postings in Admin Dashboard
- Edit HR officer information in the About section

---

## 🚀 Deployment

### Static Hosting (Recommended)
- **Netlify**: Connect your Git repository and deploy
- **Vercel**: Import project and deploy
- **GitHub Pages**: Push to GitHub and enable Pages

### Traditional Hosting
- Upload all files to your web server
- Ensure server supports JavaScript
- Configure email and Google Sheets endpoints

---

## 📝 Notes

- Applications are stored in browser localStorage by default
- For production, implement a proper database (Firebase, MongoDB, MySQL, etc.)
- Email functionality requires EmailJS setup
- Google Sheets integration is optional
- All features work offline with localStorage backup

---

## 🆘 Troubleshooting

### Emails not sending?
- Verify EmailJS configuration
- Check browser console for errors
- Ensure templates are correctly named
- Verify service connection in EmailJS dashboard

### Applications not saving?
- Check browser console for errors
- Ensure localStorage is enabled
- Verify form validation

### Admin login not working?
- Clear browser cache and localStorage
- Check if credentials are correctly set
- Try resetting credentials in Settings

---

## 📧 Support

For issues or questions, please contact:
- HR Team: [Your Email]
- Website: [Your Website URL]
