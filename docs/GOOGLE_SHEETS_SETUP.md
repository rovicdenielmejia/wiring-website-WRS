# Google Sheets Integration Setup Guide
## Workforce Recruitment Solutions

This guide will help you integrate your Google Sheet to automatically log all job applications.

**Your Google Sheet:** [https://docs.google.com/spreadsheets/d/12yfnfWguB0OPhTAkEwaP4yoS0ABBDYZ0CwtyAidWv70/edit](https://docs.google.com/spreadsheets/d/12yfnfWguB0OPhTAkEwaP4yoS0ABBDYZ0CwtyAidWv70/edit)

## 📋 Step-by-Step Instructions

### Step 1: Open Your Google Sheet
1. Open your Google Sheet: [https://docs.google.com/spreadsheets/d/12yfnfWguB0OPhTAkEwaP4yoS0ABBDYZ0CwtyAidWv70/edit](https://docs.google.com/spreadsheets/d/12yfnfWguB0OPhTAkEwaP4yoS0ABBDYZ0CwtyAidWv70/edit)
2. Make sure you're signed in to your Google account

### Step 2: Open Google Apps Script
1. In your Google Sheet, click **Extensions** > **Apps Script**
2. A new tab will open with the Apps Script editor

### Step 3: Add the Script Code
1. Delete any existing code in the script editor
2. Open the file `GoogleAppsScript.js` in your project folder
3. Copy ALL the code from `GoogleAppsScript.js`
4. Paste it into the Apps Script editor
5. Click the **Save** icon (💾) or press `Ctrl+S` / `Cmd+S`
6. Name your project (e.g., "Workforce Recruitment Integration")

### Step 4: Deploy as Web App
1. Click **Deploy** > **New deployment**
2. Click the gear icon (⚙️) next to "Select type"
3. Choose **Web app**
4. Configure the settings:
   - **Description**: "Workforce Recruitment Applications Logger" (optional)
   - **Execute as**: **Me** (your email address)
   - **Who has access**: **Anyone** (important!)
5. Click **Deploy**
6. You may see an authorization dialog - click **Authorize access**
7. Review permissions and click **Allow**

### Step 5: Copy the Web App URL
1. After deployment, you'll see a **Web App URL** (looks like: `https://script.google.com/macros/s/AKfycby.../exec`)
2. Click the **Copy** button next to the URL
3. **Important:** Keep this URL - you'll need it in the next step

### Step 6: Configure in Admin Dashboard
1. Open your website's admin dashboard (`admin.html`)
2. Login with your admin credentials
3. Go to **Settings** > **Google Sheets Integration**
4. The Google Sheets URL should already be filled in:
   - `https://docs.google.com/spreadsheets/d/12yfnfWguB0OPhTAkEwaP4yoS0ABBDYZ0CwtyAidWv70/edit`
5. Paste the **Web App URL** you copied in Step 5 into the "Google Apps Script Web App URL" field
6. Click **Save Sheets Settings**
7. You should see a confirmation message

## ✅ Testing the Integration

1. **Submit a Test Application:**
   - Go to your main website
   - Fill out and submit a test application form
   - Check your Google Sheet - a new row should appear!

2. **Check the Data:**
   - Open your Google Sheet
   - New applications will appear in rows (starting from row 2)
   - Columns: Name | Email | Phone | Position | Experience | Cover Letter | Resume | Date

## 📊 Your Google Sheet Structure

Your sheet has these columns:
- **Column A**: Name
- **Column B**: Email
- **Column C**: Phone
- **Column D**: Position
- **Column E**: Experience
- **Column F**: Cover Letter
- **Column G**: Resume (filename)
- **Column H**: Date (timestamp)

The script automatically adds headers if the sheet is empty.

## 🔒 Security Notes

- The Web App URL is public (required for the integration to work)
- Only authorized users can write to your sheet (based on Google account permissions)
- The script validates data before writing
- Applications are logged in real-time

## 🐛 Troubleshooting

### Applications not appearing in Google Sheet?

1. **Check Web App URL:**
   - Make sure you copied the correct URL from Step 5
   - The URL should end with `/exec`
   - Verify it's saved in Admin Dashboard > Settings

2. **Check Script Permissions:**
   - Ensure "Who has access" is set to **Anyone**
   - Re-deploy if you changed permissions

3. **Check Browser Console:**
   - Open browser Developer Tools (F12)
   - Check the Console tab for errors
   - Look for messages about Google Sheets

4. **Test the Script:**
   - In Apps Script editor, click the function dropdown
   - Select `testAppend`
   - Click Run (▶️)
   - Check if test data appears in your sheet

5. **Check Sheet Permissions:**
   - Make sure your Google account has edit access to the sheet
   - The sheet should be accessible (not private)

### Error: "Script function not found"
- Make sure you pasted ALL the code from `GoogleAppsScript.js`
- Check that the script is saved
- Try re-deploying the web app

### Error: "Access denied"
- Check "Who has access" is set to "Anyone"
- Re-deploy the web app
- Re-authorize the script if prompted

## 📝 Notes

- Applications are saved to **both** localStorage (for admin dashboard) **and** Google Sheets
- If Google Sheets is unavailable, applications still save to localStorage
- The resume filename is logged, but the actual file is stored in the admin dashboard
- Date/timestamp is automatically added in ISO format

## 🔄 Updating the Script

If you need to update the script:
1. Edit the code in Apps Script editor
2. Click **Save**
3. Click **Deploy** > **Manage deployments**
4. Click the pencil icon (✏️) next to your deployment
5. Update the version or description
6. Click **Deploy**
7. Use the same Web App URL (it doesn't change)

## 📞 Support

For issues with:
- **Google Apps Script:** See [Google Apps Script Documentation](https://developers.google.com/apps-script)
- **Google Sheets:** See [Google Sheets Help](https://support.google.com/sheets)
- **Website Integration:** Check browser console for errors

---

**Your Google Sheet:** [https://docs.google.com/spreadsheets/d/12yfnfWguB0OPhTAkEwaP4yoS0ABBDYZ0CwtyAidWv70/edit](https://docs.google.com/spreadsheets/d/12yfnfWguB0OPhTAkEwaP4yoS0ABBDYZ0CwtyAidWv70/edit)

**Ready to set up?** Follow the steps above and you'll have automatic application logging in minutes! 🚀
