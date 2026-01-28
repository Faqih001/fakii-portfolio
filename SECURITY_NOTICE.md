# 🔒 SECURITY NOTICE - API KEY ROTATION REQUIRED

## ⚠️ IMPORTANT: Your Gemini API key has been exposed on GitHub

GitHub has detected that your Gemini API key was committed to the repository. **You must rotate (replace) this key immediately** to prevent unauthorized usage.

## Steps to Secure Your Application:

### 1. **Revoke the Exposed API Key** (DO THIS FIRST!)
   - Go to [Google AI Studio API Keys](https://aistudio.google.com/apikey)
   - Find and delete the exposed key: `AIzaSyCFw_dSFApHwpyB0FvDNkagOFehESo0QKk`
   - This will immediately prevent anyone from using it

### 2. **Create a New API Key**
   - While on [Google AI Studio API Keys](https://aistudio.google.com/apikey)
   - Click "Create API Key"
   - Copy the new key

### 3. **Update Your Local .env File**
   - Open `/home/amir/Desktop/projects/fakii-portfolio/.env`
   - Replace the old key with your new key:
     ```
     VITE_GEMINI_API_KEY=your_new_api_key_here
     ```
   - Save the file

### 4. **Verify .env is in .gitignore** ✅
   - Already done! The `.env` file is properly listed in `.gitignore`
   - This prevents future commits of the file

### 5. **Remove API Key from Git History (Optional but Recommended)**
   If you want to completely remove the key from your repository history:
   
   ```bash
   # Option 1: Using git filter-repo (recommended)
   pip install git-filter-repo
   git filter-repo --invert-paths --path .env
   
   # Option 2: Using BFG Repo-Cleaner
   # Download from: https://rtyley.github.io/bfg-repo-cleaner/
   java -jar bfg.jar --delete-files .env
   git reflog expire --expire=now --all
   git gc --prune=now --aggressive
   ```

   ⚠️ **Warning**: This will rewrite your git history. You'll need to force push:
   ```bash
   git push origin --force --all
   ```

### 6. **Test Your Application**
   - Restart your dev server: `npm run dev`
   - Test the chatbot to ensure it works with the new API key
   - The chatbot should respond normally to questions

## ✅ Current Security Status:

- ✅ `.env` is in `.gitignore`
- ✅ `.env.example` created (safe template for sharing)
- ✅ API key is loaded from environment variables only
- ✅ No hardcoded secrets in code

## 📝 Best Practices Going Forward:

1. **Never commit `.env` files** - Always check before pushing
2. **Use `.env.example`** - For team members to know what variables are needed
3. **Use environment variables** - Never hardcode API keys in source code
4. **Rotate keys regularly** - Good security practice
5. **Set up API restrictions** - In Google Cloud Console, restrict your API key to:
   - Specific APIs (Gemini API only)
   - Specific websites/domains
   - IP address restrictions if applicable

## 🔗 Useful Links:

- [Google AI Studio API Keys](https://aistudio.google.com/apikey)
- [GitHub Secret Scanning Documentation](https://docs.github.com/en/code-security/secret-scanning)
- [Removing Sensitive Data from Git](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)

---

**Action Required**: Complete steps 1-3 immediately to secure your application.
