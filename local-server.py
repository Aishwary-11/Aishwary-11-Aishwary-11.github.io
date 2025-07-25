#!/usr/bin/env python3
"""
Simple HTTP server for local portfolio development
Run this script to serve your portfolio locally
"""

import http.server
import socketserver
import webbrowser
import os
import sys
from pathlib import Path

# Configuration
PORT = 8001
HOST = 'localhost'

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    """Custom handler to serve files with proper MIME types"""
    
    def end_headers(self):
        # Add CORS headers for local development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()
    
    def guess_type(self, path):
        """Override to handle additional file types"""
        mimetype, encoding = super().guess_type(path)
        
        # Handle specific file types
        if path.endswith('.js'):
            return 'application/javascript', encoding
        elif path.endswith('.css'):
            return 'text/css', encoding
        elif path.endswith('.json'):
            return 'application/json', encoding
        elif path.endswith('.pdf'):
            return 'application/pdf', encoding
        
        return mimetype, encoding

def check_files():
    """Check if required files exist"""
    required_files = [
        'index.html',
        'script.js',
        'blog.html',
        'resume.pdf'
    ]
    
    missing_files = []
    for file in required_files:
        if not os.path.exists(file):
            missing_files.append(file)
    
    if missing_files:
        print(f"❌ Missing files: {', '.join(missing_files)}")
        return False
    
    print("✅ All required files found!")
    return True

def start_server():
    """Start the local development server"""
    
    # Check if files exist
    if not check_files():
        print("Please ensure all portfolio files are in the current directory.")
        return
    
    # Create server
    try:
        with socketserver.TCPServer((HOST, PORT), CustomHTTPRequestHandler) as httpd:
            server_url = f"http://{HOST}:{PORT}"
            
            print("🚀 Portfolio Local Server Starting...")
            print("=" * 50)
            print(f"📍 Server running at: {server_url}")
            print(f"📁 Serving files from: {os.getcwd()}")
            print("=" * 50)
            print("📋 Available pages:")
            print(f"   🏠 Portfolio: {server_url}/")
            print(f"   📝 Blog: {server_url}/blog.html")
            print(f"   📄 Sample Post: {server_url}/blog-post-1.html")
            print("=" * 50)
            print("💡 Tips:")
            print("   • Press Ctrl+C to stop the server")
            print("   • Refresh browser to see changes")
            print("   • Check browser console for any errors")
            print("=" * 50)
            
            # Open browser automatically
            try:
                webbrowser.open(server_url)
                print("🌐 Opening browser automatically...")
            except:
                print("⚠️  Please open your browser and go to:", server_url)
            
            print("\n🎯 Testing Checklist:")
            print("   □ Navigation works between pages")
            print("   □ All animations load properly")
            print("   □ Mobile responsive design")
            print("   □ Contact form displays correctly")
            print("   □ Resume downloads successfully")
            print("   □ Project demos open in modals")
            print("   □ Blog posts load with syntax highlighting")
            print("   □ Dark/light theme toggle works")
            print("   □ All interactive features function")
            print("\n🔄 Server is running... (Press Ctrl+C to stop)")
            
            # Start serving
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print("\n\n🛑 Server stopped by user")
        print("✅ Thanks for testing your portfolio!")
        
    except OSError as e:
        if e.errno == 48:  # Address already in use
            print(f"❌ Port {PORT} is already in use!")
            print(f"💡 Try a different port or stop the existing server")
            
            # Try alternative ports
            for alt_port in [8001, 8080, 3000, 5000]:
                try:
                    with socketserver.TCPServer((HOST, alt_port), CustomHTTPRequestHandler) as httpd:
                        server_url = f"http://{HOST}:{alt_port}"
                        print(f"✅ Using alternative port: {alt_port}")
                        print(f"🌐 Server running at: {server_url}")
                        webbrowser.open(server_url)
                        httpd.serve_forever()
                        break
                except OSError:
                    continue
        else:
            print(f"❌ Server error: {e}")

if __name__ == "__main__":
    print("🎨 Aishwary Anand - Portfolio Local Server")
    print("🔧 Local Development Environment")
    print()
    
    # Check Python version
    if sys.version_info < (3, 6):
        print("❌ Python 3.6+ required")
        sys.exit(1)
    
    start_server()