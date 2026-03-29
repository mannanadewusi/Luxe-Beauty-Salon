document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. Navbar Scroll Effect
       ========================================================================== */
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    /* ==========================================================================
       2. Reveal Animations on Scroll
       ========================================================================== */
    const fadeElements = document.querySelectorAll('.fade-in-scroll');
    
    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once revealed
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.15, // Trigger when 15% visible
        rootMargin: "0px 0px -50px 0px" // Start a bit earlier
    });

    fadeElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    /* ==========================================================================
       3. Form Submission Handling (Placeholder)
       ========================================================================== */
    const bookingForm = document.querySelector('.quick-form');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get the submit button
            const btn = bookingForm.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            
            // Simple visual feedback
            btn.textContent = 'Request Sent Successfully!';
            btn.style.backgroundColor = '#A4C639'; // Green success color
            btn.style.color = '#fff';
            
            // Reset form after a delay
            setTimeout(() => {
                bookingForm.reset();
                btn.textContent = originalText;
                btn.style.backgroundColor = 'var(--color-gold)';
                btn.style.color = 'var(--color-white)';
            }, 3000);
        });
    }

    /* ==========================================================================
       4. Mobile Menu Toggle
       ========================================================================== */
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('is-active');
            navLinks.classList.toggle('active');
        });
        
        // Close menu when a link is clicked
        const navItems = document.querySelectorAll('.nav-link');
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                mobileMenu.classList.remove('is-active');
                navLinks.classList.remove('active');
            });
        });
    }

});
