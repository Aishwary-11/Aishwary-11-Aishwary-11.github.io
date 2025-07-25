const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const PORT = 8000;
const HOST = 'localhost';

// MIME types for different file extensions
const mimeTypes = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.pdf': 'application/pdf',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.eot': 'application/vnd.ms-fontobject'
};

function checkRequiredFiles() {
    const requiredFiles = ['index.html', 'script.js', 'blog.html', 'resume.pdf'];
    const missingFiles = requiredFiles.filter(file => !fs.existsSync(file));
    
    if (missingFiles.length > 0) {
        console.log('❌ Missing files:', missingFiles.join(', '));
        return false;
    }
    
    console.log('✅ All required files found!');
    return true;
}

function serveFile(res, filePath) {
    const extname = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[extname] || 'application/octet-stream';
    
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // File not found
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end(`
                    <h1>404 - File Not Found</h1>
                    <p>The requested file <code>${filePath}</code> was not found.</p>
                    <a href="/">← Back to Portfolio</a>
                `);
            } else {
                // Server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            // Success
            res.writeHead(200, { 
                'Content-Type': contentType,
                'Access-Control-Allow-Origin': '*'
            });
            res.end(content, 'utf-8');
        }
    });
}

const server = http.createServer((req, res) => {
    let filePath = '.' + req.url;
    
    // Default to index.html for root
    if (filePath === './') {
        filePath = './index.html';
    }
    
    // Remove query parameters
    filePath = filePath.split('?')[0];
    
    console.log(`📄 Serving: ${filePath}`);
    serveFile(res, filePath);
});

function openBrowser(url) {
    const start = (process.platform === 'darwin' ? 'open' : 
                  process.platform === 'win32' ? 'start' : 'xdg-open');
    exec(`${start} ${url}`);
}

function startServer() {
    if (!checkRequiredFiles()) {
        console.log('Please ensure all portfolio files are in the current directory.');
        return;
    }
    
    server.listen(PORT, HOST, () => {
        const serverUrl = `http://${HOST}:${PORT}`;
        
        console.log('\n🚀 Portfolio Local Server Starting...');
        console.log('='.repeat(50));
        console.log(`📍 Server running at: ${serverUrl}`);
        console.log(`📁 Serving files from: ${process.cwd()}`);
        console.log('='.repeat(50));
        console.log('📋 Available pages:');
        console.log(`   🏠 Portfolio: ${serverUrl}/`);
        console.log(`   📝 Blog: ${serverUrl}/blog.html`);
        console.log(`   📄 Sample Post: ${serverUrl}/blog-post-1.html`);
        console.log('='.repeat(50));
        console.log('💡 Tips:');
        console.log('   • Press Ctrl+C to stop the server');
        console.log('   • Refresh browser to see changes');
        console.log('   • Check browser console for any errors');
        console.log('='.repeat(50));
        
        // Open browser
        try {
            openBrowser(serverUrl);
            console.log('🌐 Opening browser automatically...');
        } catch (error) {
            console.log('⚠️  Please open your browser and go to:', serverUrl);
        }
        
        console.log('\n🎯 Testing Checklist:');
        console.log('   □ Navigation works between pages');
        console.log('   □ All animations load properly');
        console.log('   □ Mobile responsive design');
        console.log('   □ Contact form displays correctly');
        console.log('   □ Resume downloads successfully');
        console.log('   □ Project demos open in modals');
        console.log('   □ Blog posts load with syntax highlighting');
        console.log('   □ Dark/light theme toggle works');
        console.log('   □ All interactive features function');
        console.log('\n🔄 Server is running... (Press Ctrl+C to stop)\n');
    });
    
    server.on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            console.log(`❌ Port ${PORT} is already in use!`);
            console.log('💡 Try stopping other servers or use a different port');
            
            // Try alternative ports
            const altPorts = [8001, 8080, 3000, 5000];
            for (const altPort of altPorts) {
                try {
                    server.listen(altPort, HOST, () => {
                        const serverUrl = `http://${HOST}:${altPort}`;
                        console.log(`✅ Using alternative port: ${altPort}`);
                        console.log(`🌐 Server running at: ${serverUrl}`);
                        openBrowser(serverUrl);
                    });
                    break;
                } catch (error) {
                    continue;
                }
            }
        } else {
            console.log('❌ Server error:', err);
        }
    });
}

// Handle graceful shutdown
process.on('SIGINT', () => {
    console.log('\n\n🛑 Server stopped by user');
    console.log('✅ Thanks for testing your portfolio!');
    process.exit(0);
});

console.log('🎨 Aishwary Anand - Portfolio Local Server');
console.log('🔧 Local Development Environment (Node.js)');
console.log('');

startServer();