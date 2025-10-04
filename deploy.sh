#!/bin/bash

# GitHub Pages Deployment Script
# This script commits and pushes the basePath fixes

echo "🚀 Preparing to deploy GitHub Pages fixes..."
echo ""

# Show what's changed
echo "📝 Files changed:"
git status --short
echo ""

# Add all changes
echo "➕ Adding changes to git..."
git add next.config.js components/Experience.tsx DEPLOYMENT_NOTES.md
echo ""

# Commit
echo "💾 Committing changes..."
git commit -m "Fix: Add basePath for GitHub Pages deployment

- Add basePath '/profolio' to next.config.js for correct routing
- Update logo paths in Experience component to use basePath
- Add deployment notes for reference

This fixes the issue where GitHub Pages was showing README instead of the actual portfolio."
echo ""

# Push
echo "🚀 Pushing to GitHub..."
git push origin main
echo ""

echo "✅ Done! GitHub Actions will now build and deploy your site."
echo "🌐 Your site will be live at: https://lil-zlang.github.io/profolio/"
echo "⏱️  Deployment takes approximately 2-3 minutes."
echo ""
echo "💡 You can monitor the deployment in the Actions tab of your GitHub repository."

