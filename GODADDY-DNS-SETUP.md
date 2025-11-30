# GoDaddy DNS Configuration for muslimatlas.com

## 📍 Step-by-Step Guide

### **Step 1: Access DNS Settings in GoDaddy**

1. **Login to GoDaddy**: https://www.godaddy.com
2. **Click** your profile icon (top right) → "My Products"
3. **Find** `muslimatlas.com` in your domains list
4. **Click** the three dots (...) or "DNS" button next to muslimatlas.com
5. **Click** "Manage DNS"

---

### **Step 2: Get the Correct DNS Values from Vercel**

**In Vercel Dashboard:**
1. Go to Settings → Domains
2. Click on `muslimatlas.com` (the one with "Invalid Configuration")
3. Click "Learn more" next to the red warning
4. Vercel will show you the EXACT DNS records you need

**Copy those values!** Then continue below.

---

### **Step 3: Add DNS Records in GoDaddy**

Once you're in the "Manage DNS" page for muslimatlas.com:

---

#### **Record 1: A Record (for root domain)**

This makes `muslimatlas.com` work.

1. **Scroll to "Records" section**
2. **Click "Add"** button
3. **Select "A" from the Type dropdown**
4. **Fill in:**
   - **Type**: A
   - **Name**: @ (this means the root domain)
   - **Value**: `76.76.21.21` (or the IP Vercel shows you)
   - **TTL**: 600 seconds (or leave as default)
5. **Click "Save"**

---

#### **Record 2: CNAME Record (for www subdomain)**

This makes `www.muslimatlas.com` work.

1. **Click "Add"** button again
2. **Select "CNAME" from the Type dropdown**
3. **Fill in:**
   - **Type**: CNAME
   - **Name**: www
   - **Value**: `cname.vercel-dns.com`
   - **TTL**: 600 seconds (or leave as default)
4. **Click "Save"**

---

### **Step 4: Verify in Vercel**

1. Go back to Vercel → Settings → Domains
2. Wait 5-30 minutes for DNS to propagate
3. Click "Refresh" next to your domain
4. When configured correctly, the red warning will turn to a green checkmark ✅

---

## 🔍 What You're Looking For in GoDaddy

When you're in "Manage DNS", you should see a table with columns like:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 76.76.21.21 | 600 |
| CNAME | www | cname.vercel-dns.com | 600 |

---

## ⚠️ Important Notes

- **Don't delete** any existing records unless you know what they are
- **TTL = 600** means changes propagate in ~10 minutes
- **First deployment** may take up to 48 hours for full DNS propagation (usually much faster)
- You can check DNS status at: https://dnschecker.org

---

## 🆘 Can't Find "Add" Button?

If you see existing A or CNAME records:
1. **Click the pencil icon** (Edit) next to the existing record
2. **Change the values** to match Vercel's requirements
3. **Save**

---

## ✅ Success Checklist

After adding records:
- [ ] A record added: @ → 76.76.21.21
- [ ] CNAME record added: www → cname.vercel-dns.com
- [ ] Clicked "Save" for both records
- [ ] Waited 10-30 minutes
- [ ] Refreshed domain status in Vercel
- [ ] Green checkmark appears in Vercel ✅

---

**Once DNS is configured, your site will be live at:**
- https://muslimatlas.com
- https://www.muslimatlas.com

Both will automatically have SSL (HTTPS) ✅
