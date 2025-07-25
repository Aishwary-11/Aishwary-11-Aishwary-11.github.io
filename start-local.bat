@echo off
title Portfolio Local Server
color 0A

echo.
echo ========================================
echo   🎨 Aishwary Anand Portfolio
echo   🔧 Local Development Server
echo ========================================
echo.

REM Check if Python is installed
python --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Python not found!
    echo.
    echo 💡 Please install Python from: https://python.org
    echo    Make sure to check "Add Python to PATH" during installation
    echo.
    pause
    exit /b 1
)

echo ✅ Python found!
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
echo 🚀 Starting local server...
echo.
python local-server.py

echo.
echo 👋 Server stopped. Thanks for testing!
pause