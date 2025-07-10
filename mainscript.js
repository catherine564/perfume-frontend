// Add subtle animation when the page loads
window.addEventListener('DOMContentLoaded', function() {
    const trustItems = document.querySelectorAll('.trust-item');

    trustItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';

        setTimeout(() => {
            item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 150);
    });
});

// Add click interactions
document.querySelectorAll('.trust-item').forEach(item => {
    item.addEventListener('click', function() {
        // Add a subtle pulse effect
        this.style.transform = 'scale(1.05)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
});

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        const focusedElement = document.activeElement;
        if (focusedElement.classList.contains('trust-item')) {
            focusedElement.style.outline = '2px solid #4CAF50';
            focusedElement.style.outlineOffset = '2px';
        }
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect
// window.addEventListener('scroll', function() {
//     const header = document.querySelector('.header');
//     if (window.scrollY > 100) {
//         header.style.background = 'rgba(255, 255, 255, 0.98)';
//         header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
//     } else {
//         header.style.background = 'rgba(255, 255, 255, 0.95)';
//         header.style.boxShadow = 'none';
//     }
// });

// Button click animations
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255,255,255,0.3)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.pointerEvents = 'none';

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    button {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);

// Parallax effect for hero section
// window.addEventListener('scroll', function() {
//     const scrolled = window.pageYOffset;
//     const hero = document.querySelector('.hero');
//     if (hero) {
//         hero.style.transform = `translateY(${scrolled * 0.5}px)`;
//     }
// });

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }

        if (element.textContent.includes('K')) {
            element.textContent = Math.floor(current / 1000) + 'K+';
        } else if (element.textContent.includes('x')) {
            element.textContent = Math.floor(current) + 'x';
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Trigger counter animation when stats come into view
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                if (stat.textContent.includes('10x')) {
                    animateCounter(stat, 10);
                } else if (stat.textContent.includes('9')) {
                    animateCounter(stat, 9);
                } else if (stat.textContent.includes('20K+')) {
                    animateCounter(stat, 20000);
                }
            });
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const statsSection = document.querySelector('.stats');
if (statsSection) {
    observer.observe(statsSection);
}
// botanical
document.addEventListener('DOMContentLoaded', function() {
    const botanicalElements = document.querySelectorAll('.botanical-element');

    // Add hover effects to botanical elements
    botanicalElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.3)';
            this.style.opacity = '0.9';
            this.style.transition = 'all 0.3s ease';
        });

        element.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.opacity = '1';
            this.style.transition = 'all 0.3s ease';
        });
    });

    // Add floating animation to botanical elements
    botanicalElements.forEach((element, index) => {
        const delay = index * 0.5;
        const duration = 3 + Math.random() * 2; // Random duration between 3-5 seconds

        element.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
    });

    // Optional: Add click interaction for botanical elements
    botanicalElements.forEach(element => {
        element.addEventListener('click', function() {
            this.style.transform = 'scale(1.5) rotate(15deg)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });
});
//page 4 starts 
function tryRiskFree_page4() {
    alert('Thank you for your interest! Risk-free trial coming soon.');
}

// Add animation on scroll
function animateOnScroll_page4() {
    const elements = document.querySelectorAll('.stat-item-page4, .table-row-page4');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        } else {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
        }
    });
}

// Initialize animation styles
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.stat-item-page4, .table-row-page4');
    elements.forEach(element => {
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
    });

    // Trigger initial animation
    setTimeout(animateOnScroll_page4, 100);
});

window.addEventListener('scroll', animateOnScroll_page4);

// Counter animation for statistics
function animateCounters_page4() {
    const counters = document.querySelectorAll('.stat-number-page4');

    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        const increment = target / 100;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = target + '%';
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current) + '%';
            }
        }, 20);
    });
}

// Trigger counter animation when page loads
window.addEventListener('load', animateCounters_page4);

{
    let currentSlideIndex = 0;
    const totalSlides = 2; // We have 6 testimonials, showing 3 at a time = 2 slides

    function playVideo_page5() {
        alert('Video would play here in a real implementation');
    }

    function updateSlide_page5() {
        const grid = document.getElementById('testimonialsGrid-page5');
        const translateX = -currentSlideIndex * 50; // Move by 50% instead of 100%
        grid.style.transform = `translateX(${translateX}%)`;

        // Update dots
        const dots = document.querySelectorAll('.dot-page5');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlideIndex);
        });
    }

    function nextSlide_page5() {
        currentSlideIndex = (currentSlideIndex + 1) % 2; // Toggle between 0 and 1
        updateSlide_page5();
    }

    function previousSlide_page5() {
        currentSlideIndex = currentSlideIndex === 0 ? 1 : 0; // Toggle between 0 and 1
        updateSlide_page5();
    }

    function currentSlide_page5(index) {
        currentSlideIndex = index - 1;
        updateSlide_page5();
    }

    // Auto-slide functionality
    setInterval(nextSlide_page5, 5000);

    // Add smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add scroll animations
    function animateOnScroll_page5() {
        const elements = document.querySelectorAll('.testimonial-card-page5, .founders-text-page5, .founders-description-page5');

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < window.innerHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }

    // Initialize scroll animations
    document.addEventListener('DOMContentLoaded', function() {
        const elements = document.querySelectorAll('.testimonial-card-page5, .founders-text-page5, .founders-description-page5');
        elements.forEach(element => {
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
        });

        setTimeout(animateOnScroll_page5, 100);
    });

    window.addEventListener('scroll', animateOnScroll_page5);
}

{
    // FAQ Toggle Functionality
    document.querySelectorAll('.faq-question-page6').forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isActive = question.classList.contains('active');

            // Close all other FAQs
            document.querySelectorAll('.faq-question-page6').forEach(q => {
                q.classList.remove('active');
                q.nextElementSibling.classList.remove('active');
            });

            // Toggle current FAQ
            if (!isActive) {
                question.classList.add('active');
                answer.classList.add('active');
            }
        });
    });

    // Newsletter Form Submission
    document.querySelector('.newsletter-form-page6').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('.newsletter-input-page6').value;
        if (email) {
            alert('Thank you for subscribing!');
            this.reset();
        }
    });

    // Footer Newsletter Form Submission
    document.querySelector('.footer-newsletter-form-page6').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('.footer-newsletter-input-page6').value;
        if (email) {
            alert('Thank you for subscribing!');
            this.reset();
        }
    });

    // Get in Touch Button
    document.querySelector('.get-in-touch-page6').addEventListener('click', function() {
        alert('Contact us at info@gtg.com or call (555) 123-4567');
    });
}
// page 3
{
    function toggleAccordion_page3(element) {
        const accordionItem = element.parentElement;
        const accordionContent = accordionItem.querySelector('.accordion-content-page3');
        const accordionIcon = accordionItem.querySelector('.accordion-icon-page3');

        // Close all other accordion items
        const allAccordionItems = document.querySelectorAll('.accordion-item-page3');
        allAccordionItems.forEach(item => {
            if (item !== accordionItem) {
                item.classList.remove('active');
                item.querySelector('.accordion-icon-page3').textContent = '+';
            }
        });

        // Toggle current item
        accordionItem.classList.toggle('active');

        if (accordionItem.classList.contains('active')) {
            accordionIcon.textContent = '−';
        } else {
            accordionIcon.textContent = '+';
        }
    }

    // Add subscription button functionality
    document.querySelector('.subscribe-btn-page3').addEventListener('click', function() {
        alert('Thank you for your interest! Subscription feature coming soon.');
    });
}


// page 2
{
    function selectImage_page2(index) {
        currentImageIndex = index;
        updateMainImage();
        updateThumbnails();
    }

    function previousImage_page2() {
        currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
        updateMainImage();
        updateThumbnails();
    }

    function nextImage_page2() {
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        updateMainImage();
        updateThumbnails();
    }

    function updateMainImage_page2() {
        const perfumeBottle = document.querySelector('.perfume-bottle-page2');
        perfumeBottle.style.background = colors[currentImageIndex];
    }

    function updateThumbnails_page2() {
        const thumbnails = document.querySelectorAll('.thumbnail-page2');
        thumbnails.forEach((thumb, index) => {
            thumb.classList.toggle('active', index === currentImageIndex);
        });
    }

    function selectSubscription_page2(element) {
        document.querySelectorAll('.subscription-option-page2').forEach(option => {
            option.classList.remove('selected');
            option.querySelector('input').checked = false;
        });
        element.classList.add('selected');
        element.querySelector('input').checked = true;
    }

    function selectColor_page2(element) {
        document.querySelectorAll('.color-option-page2').forEach(option => {
            option.classList.remove('selected');
        });
        element.classList.add('selected');

        // Update bottle display
        const bottles = document.querySelectorAll('.bottle-display-page2');
        bottles.forEach(bottle => bottle.classList.remove('selected'));

        const colorIndex = Array.from(element.parentNode.children).indexOf(element);
        bottles[colorIndex].classList.add('selected');
    }
    document.querySelectorAll('.fragrance-option-page2 input[type="radio"]').forEach(input => {
        input.addEventListener('change', () => {
            document.querySelectorAll('.fragrance-option-page2').forEach(option => option.classList.remove('selected'));
            input.closest('.fragrance-option-page2').classList.add('selected');
        });
    });

    function addToCart_page2() {
        const selectedSubscription = document.querySelector('.subscription-option-page2.selected');
        const selectedColor = document.querySelector('.color-option-page2.selected');

        if (selectedSubscription && selectedColor) {
            alert('Added to cart successfully!');
        } else {
            alert('Please select a subscription and fragrance color first.');
        }
    }


    // Initialize
    updateThumbnails();
}