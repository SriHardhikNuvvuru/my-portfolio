// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Remove active class from all links
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
            });
            // Add active class to clicked link
            this.classList.add('active');
            
            // Calculate the position to scroll to, accounting for the navbar height
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Set initial active state
document.addEventListener('DOMContentLoaded', () => {
    const homeLink = document.querySelector('.nav-links a[href="#home"]');
    if (homeLink) {
        homeLink.classList.add('active');
    }
});

// Intersection Observer for animations
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

// Apply animation to sections
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.6s ease-out';
    observer.observe(section);
});

// Enhanced hover effects for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.borderLeftWidth = '6px';
        this.style.borderLeftColor = '#667eea';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.borderLeftWidth = '4px';
    });
});

// Tech item interactive effects
document.querySelectorAll('.tech-item').forEach(item => {
    item.addEventListener('click', function() {
        this.style.transform = 'translateY(-5px) scale(1.05)';
        setTimeout(() => {
            this.style.transform = 'translateY(-5px) scale(1)';
        }, 200);
    });
});