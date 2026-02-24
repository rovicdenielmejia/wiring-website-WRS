# Quick Start Guide

Get your Workforce Recruitment Solutions website up and running in 5 minutes!

## 🚀 Step 1: Open the Website

Simply open `WorkforceRecruitmentSolution.html` in your web browser (Chrome, Firefox, Safari, or Edge).

**That's it!** The website works immediately with all features using browser storage.

## 🔐 Step 2: Access Admin Dashboard

1. Go directly to `admin.html` (the admin link is hidden from the main navigation for security)
2. Login with default credentials:
   - **Username:** `admin`
   - **Password:** `admin123`

⚠️ **IMPORTANT:** Change these credentials immediately in Settings!

## 📝 Step 3: Manage Jobs

### Add a New Job:
1. Login to Admin Dashboard
2. Click **"Add New Job"** button
3. Fill in all required fields:
   - Job Title
   - Location
   - Experience Required
   - Status (Active/Archived)
   - Job Description
   - Key Responsibilities (one per line)
   - Required Skills (one per line)
   - Additional Information (optional)
4. Click **"Save Job"**

The job will automatically appear on the main website!

### Edit or Archive a Job:
- In Admin Dashboard > Job Manager
- Click **"Edit"** to modify a job
- Click **"Archive"** to hide a job (or **"Activate"** to show it again)
- Click **"Delete"** to permanently remove a job

## 📧 Step 4: View Applications

1. Go to Admin Dashboard
2. Click **"Applications"** in the sidebar
3. View all submitted applications with:
   - Candidate information
   - Position applied for
   - Cover letter
   - Resume file name
   - Application date

### Export Applications:
- Click **"Export to CSV"** button
- Save the CSV file for tracking in Excel or Google Sheets

## ⚙️ Step 5: Configure Email (Optional)

To enable email notifications, follow the detailed guide in **CONFIGURATION.md**.

**Quick setup:**
1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Create email templates
3. Update `script.js` with your credentials
4. Add EmailJS SDK to `WorkforceRecruitmentSolution.html`

See **CONFIGURATION.md** for complete instructions.

## 🎨 Customization

### Change Company Information:
- Edit the Hero section in `WorkforceRecruitmentSolution.html`
- Modify the About section in `WorkforceRecruitmentSolution.html`

### Change Colors:
- Edit CSS variables in `styles.css` (lines ~8-15)

### Modify Quote:
- Edit the quote section in `WorkforceRecruitmentSolution.html`

## 🌐 Deploy to Web

### Option 1: Netlify (Easiest)
1. Create account at [Netlify.com](https://netlify.com)
2. Drag and drop your website folder
3. Get instant URL (or connect custom domain)

### Option 2: GitHub Pages
1. Push files to GitHub repository
2. Go to Settings > Pages
3. Enable GitHub Pages
4. Access at `username.github.io/repo-name`

### Option 3: Traditional Hosting
1. Upload all files via FTP
2. Access via your domain name

## ✅ Checklist

- [ ] Open `WorkforceRecruitmentSolution.html` in browser
- [ ] Login to Admin Dashboard
- [ ] Change admin password in Settings
- [ ] Review default job postings
- [ ] Test application form submission
- [ ] Check applications in Admin Dashboard
- [ ] (Optional) Configure EmailJS for notifications
- [ ] (Optional) Set up Google Sheets integration
- [ ] Customize company information
- [ ] Deploy to web server

## 🐛 Troubleshooting

**Website not loading?**
- Check if all files are in the same folder
- Open browser console (F12) for errors

**Admin login not working?**
- Clear browser cache and localStorage
- Try default credentials: admin / admin123

**Jobs not showing?**
- Check Admin Dashboard > Job Manager
- Ensure jobs are set to "Active" status

**Applications not appearing?**
- Check browser console for errors
- Ensure form was submitted successfully
- Check Admin Dashboard > Applications

## 📚 Additional Resources

- **README.md** - Full documentation
- **CONFIGURATION.md** - Detailed setup guide
- **EmailJS Docs** - https://www.emailjs.com/docs/

---

**Need help?** Refer to the main README.md or CONFIGURATION.md files for detailed instructions.

**Ready to go live?** Follow the deployment steps above and share your website URL!
