# 🚀 Portfolio Deployment Guide

## Quick Deploy to GitHub Pages

### Step 1: Create GitHub Repository
1. Go to [GitHub.com](https://github.com)
2. Click "New Repository"
3. Name it: `Aishwary-11.github.io` (exactly this name)
4. Make it **Public**
5. **Don't** initialize with README
6. Click "Create Repository"

### Step 2: Deploy Your Portfolio
Run the deployment script:
```bash
deploy-to-github.bat
```

Or manually:
```bash
git init
git add .
git commit -m "Initial portfolio deployment"
git branch -M main
git remote add origin https://github.com/Aishwary-11/Aishwary-11.github.io.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository settings
2. Scroll to "Pages" section
3. Source: "Deploy from a branch"
4. Branch: "main"
5. Folder: "/ (root)"
6. Click "Save"

### Step 4: Your Live URL
Your portfolio will be live at:
**https://Aishwary-11.github.io**

## Alternative Deployment Options

### Option 1: Netlify (Drag & Drop)
1. Go to [netlify.com](https://netlify.com)
2. Drag your portfolio folder to deploy
3. Get instant live URL
4. Optional: Connect custom domain

### Option 2: Vercel
1. Install: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts
4. Get live URL

### Option 3: Firebase Hosting
1. Install: `npm install -g firebase-tools`
2. Run: `firebase login`
3. Run: `firebase init hosting`
4. Run: `firebase deploy`

## Post-Deployment Checklist

### ✅ Immediate Actions
- [ ] Test live site on desktop
- [ ] Test live site on mobile
- [ ] Verify all links work
- [ ] Check theme toggle functionality
- [ ] Test contact form
- [ ] Verify resume download

### ✅ Professional Updates
- [ ] Update LinkedIn profile with portfolio URL
- [ ] Add portfolio link to resume
- [ ] Update email signature
- [ ] Share on social media
- [ ] Add to job applications

### ✅ SEO & Analytics (Optional)
- [ ] Submit to Google Search Console
- [ ] Add Google Analytics
- [ ] Submit sitemap
- [ ] Share on relevant communities

## Troubleshooting

### Issue: Repository name error
**Solution:** Repository must be exactly `username.github.io`

### Issue: Pages not working
**Solution:** 
- Check repository is public
- Verify Pages settings
- Wait 10 minutes for build

### Issue: 404 errors
**Solution:**
- Ensure `index.html` is in root directory
- Check file names are correct

### Issue: Theme not working
**Solution:**
- Check JavaScript console for errors
- Verify all files uploaded correctly

## Success! 🎉

Once deployed, your portfolio will be:
- ✅ Live on the internet
- ✅ Mobile responsive
- ✅ Professional looking
- ✅ Ready for job applications
- ✅ Shareable with recruiters

**Your professional portfolio is now live and ready to impress employers!**