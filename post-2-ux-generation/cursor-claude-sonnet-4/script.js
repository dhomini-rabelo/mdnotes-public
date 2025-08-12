// MD Notes Landing Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation links
    function initSmoothScrolling() {
        const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // Header scroll effect
    function initHeaderScrollEffect() {
        const header = document.querySelector('.header');
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
                header.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = 'none';
            }
            
            lastScrollY = currentScrollY;
        });
    }
    
    // Get Started button functionality
    function initGetStartedButton() {
        const getStartedBtn = document.getElementById('getStartedBtn');
        
        if (getStartedBtn) {
            getStartedBtn.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Add loading state
                const originalText = this.innerHTML;
                this.innerHTML = `
                    <svg class="btn-icon animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" stroke-dasharray="32" stroke-dashoffset="32">
                            <animate attributeName="stroke-dasharray" dur="2s" values="0 32;16 16;0 32;0 32" repeatCount="indefinite"/>
                            <animate attributeName="stroke-dashoffset" dur="2s" values="0;-16;-32;-32" repeatCount="indefinite"/>
                        </circle>
                    </svg>
                    Getting started...
                `;
                this.style.pointerEvents = 'none';
                
                // Simulate loading and redirect to signup
                setTimeout(() => {
                    // In a real application, this would redirect to the signup page
                    // For now, we'll show a placeholder alert
                    alert('Welcome to MD Notes! Redirecting to sign up...');
                    
                    // Reset button state
                    this.innerHTML = originalText;
                    this.style.pointerEvents = 'auto';
                    
                    // In production, redirect to signup:
                    // window.location.href = '/signup';
                }, 1500);
            });
        }
    }
    
    // Typing animation for the code preview
    function initTypingAnimation() {
        const codeLines = document.querySelectorAll('.code-line');
        const typingTexts = [
            '# Project Overview',
            '',
            '## Key Features',
            '- [x] Real-time editing',
            '- [x] Cloud sync',
            '- [ ] Team sharing'
        ];
        
        // Clear initial content
        codeLines.forEach((line, index) => {
            if (typingTexts[index] !== undefined) {
                line.textContent = '';
            }
        });
        
        // Typing animation with delay
        function typeText(element, text, delay = 0) {
            setTimeout(() => {
                let i = 0;
                const interval = setInterval(() => {
                    if (i < text.length) {
                        element.textContent += text.charAt(i);
                        i++;
                    } else {
                        clearInterval(interval);
                    }
                }, 50);
            }, delay);
        }
        
        // Start typing animation after a delay
        setTimeout(() => {
            codeLines.forEach((line, index) => {
                if (typingTexts[index] !== undefined) {
                    typeText(line, typingTexts[index], index * 800);
                }
            });
        }, 1000);
    }
    
    // Intersection Observer for animations
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Observe elements for scroll animations
        const animatedElements = document.querySelectorAll('.hero-content > *, .note-preview');
        animatedElements.forEach(el => {
            observer.observe(el);
        });
    }
    
    // Feature item hover effects
    function initFeatureHoverEffects() {
        const featureItems = document.querySelectorAll('.feature-item');
        
        featureItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                const icon = this.querySelector('.feature-icon');
                icon.style.transform = 'scale(1.2)';
                icon.style.color = 'var(--primary-hover)';
                this.style.color = 'var(--text-primary)';
            });
            
            item.addEventListener('mouseleave', function() {
                const icon = this.querySelector('.feature-icon');
                icon.style.transform = 'scale(1)';
                icon.style.color = 'var(--primary-color)';
                this.style.color = 'var(--text-secondary)';
            });
        });
    }
    
    // Mobile menu functionality (for future expansion)
    function initMobileMenu() {
        // This would be implemented when adding a mobile hamburger menu
        // For now, navigation links are hidden on mobile
    }
    
    // Keyboard navigation improvements
    function initKeyboardNavigation() {
        // Enhanced keyboard navigation for accessibility
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });
        
        document.addEventListener('mousedown', function() {
            document.body.classList.remove('keyboard-navigation');
        });
    }
    
    // Performance monitoring
    function initPerformanceMonitoring() {
        // Log page load performance
        window.addEventListener('load', function() {
            const navigationStart = performance.timing.navigationStart;
            const loadEventEnd = performance.timing.loadEventEnd;
            const loadTime = loadEventEnd - navigationStart;
            
            console.log(`Page loaded in ${loadTime}ms`);
        });
    }
    
    // Initialize all features
    function init() {
        initSmoothScrolling();
        initHeaderScrollEffect();
        initGetStartedButton();
        initScrollAnimations();
        initFeatureHoverEffects();
        initKeyboardNavigation();
        initPerformanceMonitoring();
        
        // Start typing animation after other initializations
        setTimeout(initTypingAnimation, 500);
        
        console.log('MD Notes landing page initialized successfully!');
    }
    
    // Start initialization
    init();
});

// Add CSS for keyboard navigation
const style = document.createElement('style');
style.textContent = `
    .keyboard-navigation *:focus {
        outline: 2px solid var(--primary-color) !important;
        outline-offset: 2px !important;
    }
    
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    
    .animate-spin {
        animation: spin 1s linear infinite;
    }
    
    .feature-item {
        transition: all 0.2s ease;
    }
    
    .feature-icon {
        transition: all 0.2s ease;
    }
`;
document.head.appendChild(style);
