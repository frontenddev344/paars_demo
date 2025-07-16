// Open/Close Nav
function openNav() {
    document.getElementById("mySidenavs").classList.add("open");
    document.getElementById("menuOverlay").classList.add("active");
}

function closeNav() {
    document.getElementById("mySidenavs").classList.remove("open");
    document.getElementById("menuOverlay").classList.remove("active");
}

// Ripple effect on button
document.addEventListener('DOMContentLoaded', function () {
    const contactBtn = document.querySelector('.btn-contact');
    if (contactBtn) {
        contactBtn.addEventListener('click', function (e) {
            e.preventDefault();
            const button = e.currentTarget;
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255,255,255,0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            button.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    }

    // Scroll animation for service cards
    const cards = document.querySelectorAll('.our_service_card');
    if (cards.length > 0) {
        function revealOnScroll() {
            const trigger = window.innerHeight * 0.92;
            cards.forEach((card, i) => {
                const rect = card.getBoundingClientRect();
                if (rect.top < trigger) {
                    setTimeout(() => card.classList.add('animated'), i * 120);
                }
            });
        }
        window.addEventListener('scroll', revealOnScroll);
        revealOnScroll(); // initial
    }

    // Enhanced scroll animations for all sections
    const animatedElements = document.querySelectorAll('.section-fade-in, .section-fade-in-left, .section-fade-in-right, .section-slide-up, .section-scale-in, .section-bounce-in, .section-zoom-in, .fade-in-on-scroll');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Add staggered animation for child elements
                const children = entry.target.querySelectorAll('.stagger-animation > *');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.style.opacity = '1';
                    }, index * 100);
                });
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Parallax effect
    const parallaxElements = document.querySelectorAll('.parallax');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });

    // Typing animation
    const typingElements = document.querySelectorAll('.typing-animation');
    typingElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        element.style.width = '0';

        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };

        // Start typing animation when element is visible
        const typingObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    typeWriter();
                    typingObserver.unobserve(entry.target);
                }
            });
        });
        typingObserver.observe(element);
    });

    // Hover animations
    const hoverElements = document.querySelectorAll('.hover-lift, .hover-scale, .card-animate');
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', function () {
            this.style.transition = 'all 0.3s ease';
        });
    });

    // Button shine effect
    const btnAnimateElements = document.querySelectorAll('.btn-animate');
    btnAnimateElements.forEach(button => {
        button.addEventListener('mouseenter', function () {
            this.style.overflow = 'hidden';
        });
    });

    // Glow effect for important elements
    const glowElements = document.querySelectorAll('.glow');
    glowElements.forEach(element => {
        element.addEventListener('mouseenter', function () {
            this.style.animation = 'glow 1s ease-in-out infinite alternate';
        });
        element.addEventListener('mouseleave', function () {
            this.style.animation = 'glow 2s ease-in-out infinite alternate';
        });
    });

    // Shake animation for notifications or alerts
    const shakeElements = document.querySelectorAll('.shake');
    shakeElements.forEach(element => {
        element.addEventListener('click', function () {
            this.style.animation = 'shake 0.5s ease-in-out';
            setTimeout(() => {
                this.style.animation = '';
            }, 500);
        });
    });

    // Rotate animation for loading spinners
    const rotateElements = document.querySelectorAll('.rotate');
    rotateElements.forEach(element => {
        element.addEventListener('mouseenter', function () {
            this.style.animation = 'rotate 1s linear infinite';
        });
        element.addEventListener('mouseleave', function () {
            this.style.animation = 'rotate 2s linear infinite';
        });
    });

    // Pulse animation for loading states
    const pulseElements = document.querySelectorAll('.pulse');
    pulseElements.forEach(element => {
        element.addEventListener('click', function () {
            this.style.animation = 'pulse 1s ease-in-out';
            setTimeout(() => {
                this.style.animation = 'pulse 2s infinite';
            }, 1000);
        });
    });

    // Grid animations
    const gridElements = document.querySelectorAll('.grid-fade-in');
    gridElements.forEach(grid => {
        const gridObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const children = entry.target.children;
                    Array.from(children).forEach((child, index) => {
                        setTimeout(() => {
                            child.style.opacity = '1';
                        }, index * 150);
                    });
                    gridObserver.unobserve(entry.target);
                }
            });
        });
        gridObserver.observe(grid);
    });

    // Text reveal animation
    const textRevealElements = document.querySelectorAll('.text-reveal');
    textRevealElements.forEach(element => {
        const textObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const children = entry.target.children;
                    Array.from(children).forEach((child, index) => {
                        setTimeout(() => {
                            child.style.animation = 'slideInFromLeft 1s ease-out both';
                        }, index * 200);
                    });
                    textObserver.unobserve(entry.target);
                }
            });
        });
        textObserver.observe(element);
    });

    // Image animations
    const imageElements = document.querySelectorAll('.image-fade-in, .image-scale-in');
    imageElements.forEach(image => {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = entry.target.classList.contains('image-fade-in')
                        ? 'fadeInRight 1s ease-out 0.5s both'
                        : 'scaleIn 1s ease-out 0.5s both';
                    imageObserver.unobserve(entry.target);
                }
            });
        });
        imageObserver.observe(image);
    });


    // Add animation classes to existing elements
    function addAnimationClasses() {
        // Add section animations
        const sections = document.querySelectorAll('section');
        sections.forEach((section, index) => {
            if (!section.classList.contains('hero-section')) {
                section.classList.add('section-fade-in');
            }
        });

        // Add card animations
        const cards = document.querySelectorAll('.our_service_card, .building-better-card, .scale_box');
        cards.forEach(card => {
            card.classList.add('card-animate');
        });

        // Add hover effects to buttons
        const buttons = document.querySelectorAll('.btn-contact');
        buttons.forEach(button => {
            button.classList.add('btn-animate');
        });

        // Add image animations
        const images = document.querySelectorAll('.image-section img, .hero-content-right img');
        images.forEach(image => {
            image.classList.add('image-fade-in');
        });
    }

    // Call the function after a short delay to ensure DOM is ready
    setTimeout(addAnimationClasses, 100);
});

//  header sticky js start  
const header = document.querySelector("header");
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 40) {
        header.classList.add(toggleClass);
    } else {
        header.classList.remove(toggleClass);
    }
});
//  header sticky js end



// Show modal on every .getInTouch click (all matching buttons)
document.querySelectorAll('.getInTouch').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.getElementById('contactModal').style.display = 'flex';
    });
  });
  
  // Close modal on X (close button) click
  document.getElementById('closeModal').addEventListener('click', function () {
    document.getElementById('contactModal').style.display = 'none';
  });
  
  // Close modal when clicking outside the modal content
  document.getElementById('contactModal').addEventListener('click', function (e) {
    if (e.target === this) {
      this.style.display = 'none';
    }
  });
  