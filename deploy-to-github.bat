@echo off
title Deploy Portfolio to GitHub Pages
color 0A

echo.
echo ========================================
echo   🚀 Deploying Aishwary's Portfolio
echo   🌐 GitHub Pages Deployment
echo ========================================
echo.

REM Check if git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Git not found!
    echo.
    echo 💡 Please install Git from: https://git-scm.com
    echo.
    pause
    exit /b 1
)

echo ✅ Git found!
echo.

REM Initialize git if not already done
if not exist ".git" (
    echo 📁 Initializing git repository...
    git init
    git branch -M main
)

REM Add all files
echo 📝 Adding files to git...
git add .

REM Commit changes
echo 💾 Committing changes...
set commit_msg=Deploy portfolio %date% %time%
git commit -m "%commit_msg%"

REM Check if remote exists
git remote get-url origin >nul 2>&1
if errorlevel 1 (
    echo 🔗 Setting up GitHub remote...
    echo.
    echo 📋 Instructions:
    echo 1. Go to https://github.com
    echo 2. Create a new repository named: Aishwary-11.github.io
    echo 3. Make it public
    echo 4. Don't initialize with README
    echo.
    pause
    git remote add origin https://github.com/Aishwary-11/Aishwary-11.github.io.git
)

REM Push to GitHub
echo 🌐 Pushing to GitHub Pages...
git push -u origin main

echo.
echo ✅ Deployment complete!
echo.
echo 🌍 Your portfolio will be live at:
echo    https://Aishwary-11.github.io
echo.
echo ⏰ It may take 5-10 minutes to go live
echo.
echo 📋 Next steps:
echo 1. Wait for GitHub Pages to build
echo 2. Visit your live site
echo 3. Update LinkedIn with portfolio URL
echo 4. Add to resume and job applications
echo.
echo 🎉 Congratulations on your live portfolio!
pause