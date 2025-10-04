# GitHub Pages Deployment Configuration

## Issue Diagnosed
Your GitHub Pages site was showing the README.md content instead of the actual Next.js portfolio. This happened because:

1. **Missing basePath**: GitHub Pages deploys to `https://username.github.io/repository-name/` (a subdirectory), but Next.js didn't know about the `/profolio` base path
2. **Public Assets**: Logo images weren't using the correct basePath

## Fixes Applied

### 1. next.config.js
- Added `basePath: '/profolio'` for production builds
- This tells Next.js to prepend `/profolio` to all internal links and assets

### 2. components/Experience.tsx  
- Added dynamic basePath for logo images
- Logos now use `/profolio/logos/...` in production, `/logos/...` in development

## Changes Made
```
next.config.js - Added basePath configuration
components/Experience.tsx - Fixed logo paths with basePath
```

## Next Steps - COMMIT AND PUSH

Run these commands to deploy the fix:

```bash
git add .
git commit -m "Fix: Add basePath for GitHub Pages deployment"
git push origin main
```

## What Will Happen

1. GitHub Actions will automatically trigger on push
2. The workflow will build your site with the correct basePath
3. Your portfolio will deploy to: https://lil-zlang.github.io/profolio/
4. All links, assets, and logos will work correctly

## Verification

After deployment (takes ~2 minutes):
1. Visit https://lil-zlang.github.io/profolio/
2. You should see your full portfolio (not the README)
3. Company logos should load correctly
4. All navigation should work

## Local Testing

To test locally with production settings:
```bash
NODE_ENV=production npm run build
# Check the 'out' folder - all paths should have /profolio prefix
```

## Why It Works Now

- **basePath in next.config.js**: Tells Next.js about the subdirectory
- **Dynamic basePath in components**: Ensures public assets use correct paths
- **GitHub Actions workflow**: Automatically builds and deploys on push
- **.nojekyll file**: Prevents GitHub from ignoring _next/ folder

---
**Date**: October 4, 2025
**Status**: ✅ Ready to deploy

