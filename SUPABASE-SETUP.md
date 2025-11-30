# Supabase Setup Guide for Muslim Atlas

## Step 1: Create Supabase Account & Project

1. **Go to:** https://supabase.com
2. **Click:** "Start your project"
3. **Sign up** with GitHub (recommended) or email
4. **Create New Project:**
   - Organization: Create new or use existing
   - Name: `muslim-atlas`
   - Database Password: Generate a strong password (SAVE THIS!)
   - Region: Choose closest to your users (e.g., `us-east-1`)
   - Click "Create new project"
   - ⏰ Wait ~2 minutes for database to provision

## Step 2: Get Your Connection String

Once your project is ready:

1. Go to **Project Settings** (gear icon in sidebar)
2. Click **Database** in the left menu
3. Scroll to **Connection String**
4. Copy the **URI** format (not the direct connection)
5. It looks like:
   ```
   postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres
   ```
6. **IMPORTANT:** Replace `[YOUR-PASSWORD]` with your actual database password

## Step 3: Add to Environment Variables

I'll create a `.env` file for you in the next step with your connection string.

## Step 4: Run Migrations

Once you provide the connection string, I'll:
1. Generate Prisma Client
2. Push the schema to Supabase
3. Seed example data

---

## 🔐 Security Note

**NEVER commit your `.env` file to git!**

The `.gitignore` already includes `.env`, so you're protected.

---

## ✅ What You'll Get

After setup:
- ✅ PostgreSQL database hosted on Supabase
- ✅ All 8 tables created (City, Listing, Tag, etc.)
- ✅ Example data seeded
- ✅ Ready for app to connect
- ✅ Free tier (500MB, perfect for MVP)

---

## 📊 Supabase Dashboard Features

After setup, you can use:
- **Table Editor** - View/edit data visually
- **SQL Editor** - Run custom queries
- **Auth** - Ready when you need user login
- **Storage** - Ready for listing images later

---

## 🚀 Next Steps After This

1. I'll create the `.env` file
2. Run Prisma migrations
3. Seed example data
4. Wire up the app to use real data
5. Test the full flow!

---

## ⏰ Ready When You Are

**Please complete Steps 1-2 above, then paste your connection string here.**

It should look like:
```
postgresql://postgres:YOUR_PASSWORD@db.xxxxx.supabase.co:5432/postgres
```

Once you provide it, I'll handle the rest! 🚀
