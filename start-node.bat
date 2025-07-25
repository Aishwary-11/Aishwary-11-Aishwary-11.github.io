@echo off
title Portfolio Local Server (Node.js)
color 0A

echo.
echo ========================================
echo   🎨 Aishwary Anand Portfolio
echo   🔧 Local Development Server (Node.js)
echo ========================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js not found!
    echo.
    echo 💡 Please install Node.js from: https://nodejs.org
    echo.
    pause
    exit /b 1
)

echo ✅ Node.js found!
echo.

REM Check if portfolio files exist
if not exist "index.html" (
    echo ❌ index.html not found!
    echo 💡 Make sure you're running this from the portfolio directory
    pause
    exit /b 1
)

echo ✅ Portfolio files found!
echo.

REM Start the server
echo 🚀 Starting Node.js server...
echo.
node server.js

echo.
echo 👋 Server stopped. Thanks for testing!
pause