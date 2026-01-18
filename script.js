// Smooth Scrolling untuk navigasi
document.querySelectorAll('.nav-list a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        
        if (href !== '#') {
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Typing Effect untuk nama
const typingText = document.querySelector('.about-me-left h1');
if (typingText) {
    const text = typingText.textContent;
    typingText.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            typingText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    setTimeout(typeWriter, 500);
}

// Animasi fade-in saat scroll
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

// Terapkan animasi ke elemen-elemen
const animatedElements = document.querySelectorAll('article, .content-skill, .social-media, aside, .riwayat-pendidikan, .riwayat-organisasi');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar-container');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Tambah shadow saat scroll
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.boxShadow = 'none';
        navbar.style.background = '#fff';
    }
    
    lastScroll = currentScroll;
});

// Skill icons hover animation
const skillIcons = document.querySelectorAll('.icon-skill > div');
skillIcons.forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.2) rotate(5deg)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    icon.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Social media icons animation
const socialIcons = document.querySelectorAll('.icon-social-media a');
socialIcons.forEach((icon, index) => {
    icon.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.1}s`;
    icon.style.opacity = '0';
});

// Tambahkan keyframes animation via JavaScript
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Parallax effect untuk gambar profil
const profileImage = document.querySelector('.content-image img');
window.addEventListener('scroll', () => {
    if (profileImage) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.3;
        profileImage.style.transform = `translateY(${rate}px)`;
    }
});

// Counter animation untuk tahun pengalaman
function animateCounter(element, target, duration) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Hire me button effect
const hireButton = document.querySelector('#hire');
if (hireButton) {
    hireButton.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Animasi ripple effect
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.width = '10px';
        ripple.style.height = '10px';
        ripple.style.background = 'rgba(255, 255, 255, 0.5)';
        ripple.style.borderRadius = '50%';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s ease-out';
        
        hireButton.style.position = 'relative';
        hireButton.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
        
        // Scroll ke section kontak
        const contactSection = document.querySelector('.social-media');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Tambahkan ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(20);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Text reveal animation saat hover di paragraf
const paragraphs = document.querySelectorAll('article p');
paragraphs.forEach(p => {
    p.addEventListener('mouseenter', function() {
        this.style.letterSpacing = '0.5px';
        this.style.transition = 'letter-spacing 0.3s ease';
    });
    
    p.addEventListener('mouseleave', function() {
        this.style.letterSpacing = '0px';
    });
});

// Loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Cursor effect (opsional - bisa dihapus jika terlalu banyak)
const cursor = document.createElement('div');
cursor.style.width = '20px';
cursor.style.height = '20px';
cursor.style.border = '2px solid #3498db';
cursor.style.borderRadius = '50%';
cursor.style.position = 'fixed';
cursor.style.pointerEvents = 'none';
cursor.style.zIndex = '9999';
cursor.style.transition = 'transform 0.1s ease';
cursor.style.display = 'none'; // Hidden by default, akan muncul saat mouse move
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.display = 'block';
    cursor.style.left = e.clientX - 10 + 'px';
    cursor.style.top = e.clientY - 10 + 'px';
});

// Scale cursor saat hover ke link
const links = document.querySelectorAll('a, button');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
        cursor.style.background = 'rgba(52, 152, 219, 0.2)';
    });
    
    link.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.background = 'transparent';
    });
});

console.log('Portfolio Interactive Features Loaded Successfully! 🚀');