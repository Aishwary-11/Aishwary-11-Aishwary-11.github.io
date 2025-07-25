// Additional interactive features for the portfolio

// Theme toggle functionality
function initThemeToggle() {
    const themeToggle = document.createElement('button');
    themeToggle.className = 'fixed bottom-6 right-6 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition duration-300 z-40';
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.onclick = toggleTheme;
    document.body.appendChild(themeToggle);
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const themeToggle = document.querySelector('.fixed.bottom-6.right-6');
    const icon = themeToggle.querySelector('i');
    
    if (document.body.classList.contains('dark-mode')) {
        icon.className = 'fas fa-sun';
        localStorage.setItem('theme', 'dark');
    } else {
        icon.className = 'fas fa-moon';
        localStorage.setItem('theme', 'light');
    }
}

// Load saved theme
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
}

// Scroll to top button
function initScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.className = 'fixed bottom-6 left-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 z-40 opacity-0 pointer-events-none';
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.appendChild(scrollBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollBtn.classList.remove('opacity-0', 'pointer-events-none');
        } else {
            scrollBtn.classList.add('opacity-0', 'pointer-events-none');
        }
    });
}

// Cursor trail effect
function initCursorTrail() {
    const trail = [];
    const trailLength = 10;

    for (let i = 0; i < trailLength; i++) {
        const dot = document.createElement('div');
        dot.className = 'cursor-trail';
        dot.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: rgba(59, 130, 246, ${0.8 - i * 0.08});
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: all 0.1s ease;
        `;
        document.body.appendChild(dot);
        trail.push(dot);
    }

    document.addEventListener('mousemove', (e) => {
        trail.forEach((dot, index) => {
            setTimeout(() => {
                dot.style.left = e.clientX + 'px';
                dot.style.top = e.clientY + 'px';
            }, index * 20);
        });
    });
}

// Preloader
function initPreloader() {
    const preloader = document.createElement('div');
    preloader.className = 'fixed inset-0 bg-white flex items-center justify-center z-50';
    preloader.innerHTML = `
        <div class="text-center">
            <div class="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p class="text-gray-600 font-semibold">Loading Portfolio...</p>
        </div>
    `;
    document.body.appendChild(preloader);

    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => preloader.remove(), 500);
        }, 1000);
    });
}

// Easter egg - Konami code
function initKonamiCode() {
    const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    let konamiIndex = 0;

    document.addEventListener('keydown', (e) => {
        if (e.keyCode === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                activateEasterEgg();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
}

function activateEasterEgg() {
    const message = document.createElement('div');
    message.className = 'fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50';
    message.innerHTML = `
        <div class="text-center text-white">
            <h2 class="text-4xl font-bold mb-4">🎉 Easter Egg Activated! 🎉</h2>
            <p class="text-xl mb-6">You found the secret! Thanks for exploring my portfolio thoroughly.</p>
            <button onclick="this.closest('.fixed').remove()" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                Awesome!
            </button>
        </div>
    `;
    document.body.appendChild(message);
    
    // Add confetti effect
    for (let i = 0; i < 100; i++) {
        createConfetti();
    }
}

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        background: hsl(${Math.random() * 360}, 100%, 50%);
        left: ${Math.random() * 100}vw;
        top: -10px;
        z-index: 1000;
        animation: confetti-fall 3s linear forwards;
    `;
    document.body.appendChild(confetti);
    
    setTimeout(() => confetti.remove(), 3000);
}

// Add confetti animation
const confettiStyle = document.createElement('style');
confettiStyle.textContent = `
    @keyframes confetti-fall {
        to {
            transform: translateY(100vh) rotate(360deg);
        }
    }
    
    .dark-mode {
        background-color: #0f172a;
        color: #e2e8f0;
        transition: all 0.3s ease;
    }
    
    .dark-mode .bg-white {
        background-color: #1e293b !important;
        border-color: #334155 !important;
    }
    
    .dark-mode .bg-gray-50 {
        background-color: #0f172a !important;
    }
    
    .dark-mode .bg-gray-100 {
        background-color: #1e293b !important;
    }
    
    .dark-mode .text-gray-900 {
        color: #f1f5f9 !important;
    }
    
    .dark-mode .text-gray-800 {
        color: #e2e8f0 !important;
    }
    
    .dark-mode .text-gray-700 {
        color: #cbd5e1 !important;
    }
    
    .dark-mode .text-gray-600 {
        color: #94a3b8 !important;
    }
    
    .dark-mode .text-gray-500 {
        color: #64748b !important;
    }
`;
document.head.appendChild(confettiStyle);

// Initialize all features
document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initThemeToggle();
    initScrollToTop();
    initCursorTrail();
    initKonamiCode();
    loadTheme();
});

// Performance monitoring
function initPerformanceMonitoring() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log(`Page load time: ${perfData.loadEventEnd - perfData.loadEventStart}ms`);
        });
    }
}

initPerformanceMonitoring();

// Service Worker for offline functionality
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('SW registered'))
            .catch(error => console.log('SW registration failed'));
    });
}