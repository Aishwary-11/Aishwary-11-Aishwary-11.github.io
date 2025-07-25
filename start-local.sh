#!/bin/bash

# Portfolio Local Server Startup Script
# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}"
echo "========================================"
echo "  🎨 Aishwary Anand Portfolio"
echo "  🔧 Local Development Server"
echo "========================================"
echo -e "${NC}"

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    if ! command -v python &> /dev/null; then
        echo -e "${RED}❌ Python not found!${NC}"
        echo ""
        echo -e "${YELLOW}💡 Please install Python from: https://python.org${NC}"
        exit 1
    else
        PYTHON_CMD="python"
    fi
else
    PYTHON_CMD="python3"
fi

echo -e "${GREEN}✅ Python found!${NC}"
echo ""

# Check if portfolio files exist
if [ ! -f "index.html" ]; then
    echo -e "${RED}❌ index.html not found!${NC}"
    echo -e "${YELLOW}💡 Make sure you're running this from the portfolio directory${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Portfolio files found!${NC}"
echo ""

# Make the script executable
chmod +x "$0"

# Start the server
echo -e "${BLUE}🚀 Starting local server...${NC}"
echo ""
$PYTHON_CMD local-server.py

echo ""
echo -e "${GREEN}👋 Server stopped. Thanks for testing!${NC}"