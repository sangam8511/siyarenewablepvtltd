# GitHub Pages Deployment Guide for Custom Domain

## Quick Setup (5 minutes)

### 1. Prepare Files

Your `html-website` folder contains:

- All HTML files (index.html, about.html, services.html, projects.html, calculator.html, contact.html)
- css/style.css
- js/script.js
- images/ folder (add your images here)

### 2. Create GitHub Repository

**Step 1: Go to GitHub**

- Visit https://github.com/new
- Login with your GitHub account (create one if needed)

**Step 2: Create Repository**
Name the repository: `yourusername.github.io`
(Replace `yourusername` with your actual GitHub username)

Example: If your username is `sangampandey`, the repo should be `sangampandey.github.io`

Make sure:

- Repository name is EXACTLY `yourusername.github.io`
- Set to "Public"
- Click "Create repository"

### 3. Upload Files to GitHub

**Option A: Using Git (Recommended)**

```bash
# Open Terminal/Command Prompt in your html-website folder
cd /path/to/html-website

# Initialize git repo
git init

# Add all files
git add .

# Create commit
git commit -m "Deploy Siya Renewable website"

# Add remote (replace yourusername with your GitHub username)
git remote add origin https://github.com/yourusername/yourusername.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Option B: Using GitHub Desktop**

1. Download [GitHub Desktop](https://desktop.github.com)
2. Click "Publish repository" and upload the `html-website` folder

**Option C: Direct Upload**

1. Open your repository on GitHub
2. Click "Add file" → "Upload files"
3. Drag and drop all files from `html-website` folder
4. Commit changes

### 4. Verify Website is Live

After uploading:

1. Go to https://yourusername.github.io
2. You should see your website!
3. Test all pages and links

## Connecting Custom Domain

### Step 1: Add CNAME File

The `CNAME` file should already exist in your repository. If not:

**Using Git:**

```bash
# In your html-website folder, create a file named CNAME with:
# siyarenewable.com

git add CNAME
git commit -m "Add custom domain"
git push
```

**Using GitHub Web:**

1. Go to your repository
2. Click "Add file" → "Create new file"
3. Name it: `CNAME`
4. Content: `siyarenewable.com` (your actual domain)
5. Commit the file

### Step 2: Update DNS Settings

Login to your domain registrar (where you bought the domain):

**Common Registrars:**

- GoDaddy
- Namecheap
- Google Domains
- Bluehost
- 1&1

**DNS Configuration:**

**Option A: Using A Records (Recommended)**

1. Go to DNS Settings
2. Remove all A records
3. Add new A records pointing to GitHub:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
4. Keep for 1 hour

**Option B: Using CNAME Record**

1. Go to DNS Settings
2. Add CNAME record:
   - Name: `www`
   - Value: `yourusername.github.io`

### Step 3: GitHub Pages Settings

1. Go to your repository on GitHub
2. Click "Settings" (top right)
3. Click "Pages" (left sidebar)
4. Under "Source", select `main` branch
5. Under "Custom domain", enter: `siyarenewable.com`
6. Check the box for "Enforce HTTPS"
7. Click "Save"

### Step 4: Wait for Propagation

DNS changes can take:

- **Instant**: Sometimes works immediately
- **Few minutes**: Usually within 30 minutes
- **Up to 48 hours**: Maximum time (rare)

Test with: https://dnschecker.org

## Troubleshooting

### Website Shows 404 Error

1. Check repository name is exactly `yourusername.github.io`
2. Verify all HTML files are in root directory (not in subfolder)
3. Check that index.html exists
4. Clear browser cache: Ctrl+Shift+Del (Windows) or Cmd+Shift+Del (Mac)
5. Try incognito/private browsing

### Custom Domain Not Working

1. Check CNAME file contains your domain
2. Verify DNS records are added correctly
3. Wait 24-48 hours for propagation
4. Use https://dnschecker.org to verify DNS
5. Check https://www.whatsmydns.net

### Images Not Showing

1. Ensure `images/` folder is uploaded
2. Check image filenames match exactly (case-sensitive)
3. Verify image files are in `images/` folder
4. Update image src if paths are wrong

### HTTPS Not Working

1. Wait 24 hours after adding custom domain
2. GitHub automatically generates SSL certificates
3. Check "Enforce HTTPS" is enabled in Settings

## After Deployment

### Update Website

To make changes:

```bash
# Edit files locally
# Then:

git add .
git commit -m "Update website"
git push
```

Changes will appear within 1-2 minutes on your live website.

### Keep Website Fresh

1. **Update projects** - Add new projects regularly
2. **Update content** - Keep information current
3. **Check links** - Verify all links work
4. **Test mobile** - View on different devices
5. **Monitor analytics** - Add Google Analytics

## Optional: Add SSL Certificate

GitHub Pages automatically provides free SSL certificate:

1. Go to Settings → Pages
2. Check "Enforce HTTPS" (usually enabled automatically)
3. Site will be served as `https://yourdomain.com`

## Optional: Add Google Analytics

To track visitors:

1. Go to [Google Analytics](https://analytics.google.com)
2. Create account for your website
3. Copy tracking ID
4. Add before `</head>` tag in all HTML files:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "GA_ID");
</script>
```

Replace `GA_ID` with your tracking ID.

## Important Notes

✅ **Free** - No hosting costs  
✅ **Fast** - Global CDN  
✅ **Secure** - Free HTTPS  
✅ **Easy** - Simple Git + DNS setup  
❌ **Not for**: Dynamic features (requires backend)  
❌ **Not for**: Server-side processing  
❌ **Not for**: Databases

## Quick Checklist

- [ ] Create GitHub account
- [ ] Create repository `yourusername.github.io`
- [ ] Upload html-website files
- [ ] Add CNAME file with domain
- [ ] Update DNS records at registrar
- [ ] Enable GitHub Pages in Settings
- [ ] Test website at yourusername.github.io
- [ ] Test custom domain (wait 24h)
- [ ] Enable HTTPS
- [ ] Test all pages work
- [ ] Test on mobile devices
- [ ] Share with others!

## Support Resources

- [GitHub Pages Help](https://help.github.com/articles/configuring-a-custom-domain-with-github-pages/)
- [GitHub Pages Troubleshooting](https://help.github.com/articles/troubleshooting-custom-domains/)
- [DNS Checker](https://dnschecker.org)
- [What's My DNS](https://whatsmydns.net)

---

**Need Help?**

- Comment on issues in GitHub
- Check [GitHub Community](https://github.community)
- Visit your registrar's support

**Good luck! Your website will be live in minutes!** 🚀
