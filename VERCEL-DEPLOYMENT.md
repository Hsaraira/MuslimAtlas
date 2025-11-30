# Vercel Deployment Guide for Muslim Atlas

## 🚀 Quick Deploy Steps

### Step 1: Deploy to Vercel

1. **Go to Vercel**: https://vercel.com
2. **Sign in** with your GitHub account
3. **Import Project**:
   - Click "Add New..." → "Project"
   - Select your GitHub repository: `Hsaraira/MuslimAtlas`
   - Click "Import"

### Step 2: Configure Project

**Framework Preset**: Next.js (should auto-detect)

**Build & Development Settings**: (Leave as default)
- Build Command: `next build`
- Output Directory: `.next`
- Install Command: `npm install`

### Step 3: Add Environment Variables

Click "Environment Variables" and add:

**Required Variable:**
```
DATABASE_URL = postgresql://postgres:azt.PWK_wkj6jhk@zhn@db.gtwpofwjsuqqdwwyliqg.supabase.co:5432/postgres
```

**Important**: Make sure to select all 3 environments:
- ✅ Production
- ✅ Preview
- ✅ Development

### Step 4: Deploy

Click **"Deploy"** button

⏰ Wait 2-3 minutes for deployment to complete.

---

## 🌐 Connect muslimatlas.com Domain

### After First Deployment Succeeds:

1. **In Vercel Dashboard**:
   - Go to your project
   - Click "Settings" → "Domains"
   - Click "Add Domain"

2. **Add Your Domain**:
   - Enter: `muslimatlas.com`
   - Click "Add"
   - Also add: `www.muslimatlas.com` (optional but recommended)

3. **Configure DNS in GoDaddy**:
   
   Vercel will show you DNS records to add. Go to GoDaddy:
   
   - Login to GoDaddy
   - Go to "My Products" → "DNS" for muslimatlas.com
   - Click "Manage DNS"
   
   **Add these records** (Vercel will provide exact values):
   
   **For root domain (muslimatlas.com):**
   - Type: `A`
   - Name: `@`
   - Value: `76.76.21.21` (Vercel's IP)
   - TTL: `600` seconds
   
   **For www subdomain:**
   - Type: `CNAME`
   - Name: `www`
   - Value: `cname.vercel-dns.com`
   - TTL: `600` seconds

4. **Wait for DNS Propagation**:
   - DNS changes take 5 minutes - 48 hours
   - Usually works within 10-30 minutes
   - Check status in Vercel dashboard

---

## ✅ Verify Deployment

Once DNS propagates:

1. Visit: `https://muslimatlas.com`
2. Check:
   - ✅ Homepage loads
   - ✅ Browse page shows cities
   - ✅ City pages show real listings
   - ✅ SSL certificate is active (HTTPS works)

---

## 🔧 Post-Deployment Checklist

After deployment:

- [ ] Test `/browse` - Should show Washington DC, Falls Church, Silver Spring
- [ ] Test `/city/washington-dc` - Should show real listings
- [ ] Test `/city/washington-dc/halal-food` - Should show filtered listings
- [ ] Test clicking on a listing card (should go to detail page)
- [ ] Check mobile responsiveness
- [ ] Verify SSL certificate (green padlock in browser)

---

## 🆘 Troubleshooting

### Build fails on Vercel?
- Check build logs in Vercel dashboard
- Common issue: Environment variable not set
- Solution: Add `DATABASE_URL` in Settings → Environment Variables

### Domain not working?
- Check DNS records in GoDaddy match Vercel's requirements
- Wait 30 minutes for DNS propagation
- Use https://dnschecker.org to check DNS status

### Database connection error?
- Verify `DATABASE_URL` is correct in Vercel
- Check Supabase project is running
- Test connection string locally first

---

## 📊 Vercel Dashboard Features

After deployment, you can:

- **Analytics**: View page views, performance
- **Logs**: See runtime logs and errors
- **Deployments**: Roll back to previous versions
- **Preview Deployments**: Every git push creates a preview URL

---

## 🔐 Security Notes

- ✅ `.env` file is gitignored (not uploaded to GitHub)
- ✅ Database password is encrypted in Vercel
- ✅ HTTPS is automatic on Vercel
- ✅ Environment variables are secure

---

## 🎉 You're Live!

Once deployed:
- Your site: `https://muslimatlas.com`
- Vercel URL: `https://muslim-atlas-xxx.vercel.app` (backup URL)

Every time you push to GitHub `master` branch, Vercel will automatically redeploy!

---

**Next Steps After Deployment:**
1. Test all pages on production
2. Add more cities and listings via `/add-listing`
3. Share with friends to get feedback
4. Monitor analytics in Vercel dashboard
