// Load shared navigation and footer
document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Fetch and load the navigation component
        const navResponse = await fetch('/components/nav.html');
        const navHtml = await navResponse.text();
        
        // Insert the navigation
        const navPlaceholder = document.querySelector('#nav-placeholder');
        if (navPlaceholder) {
            navPlaceholder.innerHTML = navHtml;
        }

        // Fetch and load the footer component
        const footerResponse = await fetch('/components/footer.html');
        const footerHtml = await footerResponse.text();
        
        // Insert the footer
        const footerPlaceholder = document.querySelector('#footer-placeholder');
        if (footerPlaceholder) {
            footerPlaceholder.innerHTML = footerHtml;
        }

        // Set active nav item based on current page
        const currentPath = window.location.pathname;
        const pageName = currentPath.split('/').pop().replace('.html', '');
        
        const navLinks = document.querySelectorAll('[data-nav]');
        navLinks.forEach(link => {
            if (link.getAttribute('data-nav') === (pageName || 'home')) {
                link.classList.add('active');
            }
        });
        
        // Initialize smooth scroll functionality
        initializeSmoothScroll();

        // Initialize service image interaction after navigation is loaded
        initServiceImageInteraction();

        // Initialize testimonials slider if we're on a page with testimonials
        if (document.querySelector('.testimonials-slider')) {
            const swiper = new Swiper('.testimonials-slider', {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        }

        // Add click handler for service cards
        document.addEventListener('click', smoothScrollToSection);
        
        // Handle scroll on page load
        handleServicesPageScroll();
    } catch (error) {
        console.error('Error loading components:', error);
    }
});

// Initialize smooth scroll functionality
function initializeSmoothScroll() {
    // Get all links that have a hash (#) in their href
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            // Only handle links that point to an ID
            if (link.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Get the navbar height
                    const navbar = document.querySelector('.nav-container');
                    const navbarHeight = navbar ? navbar.offsetHeight : 0;
                    
                    // Calculate the target position with offset
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                    
                    // Smooth scroll to target
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Handle initial page load with hash in URL
    if (window.location.hash) {
        setTimeout(() => {
            const targetElement = document.querySelector(window.location.hash);
            if (targetElement) {
                const navbar = document.querySelector('.nav-container');
                const navbarHeight = navbar ? navbar.offsetHeight : 0;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }, 100);
    }
}

// Smooth scroll to section function
function smoothScrollToSection(e) {
    // Only handle service card links
    if (!e.target.closest('.service-card')) return;
    
    const href = e.target.closest('.service-card').getAttribute('href');
    // Only handle internal links to services page
    if (!href || !href.includes('services.html#')) return;

    e.preventDefault();
    const sectionId = href.split('#')[1];
    
    // Navigate to services page if not already there
    if (!window.location.pathname.includes('services.html')) {
        sessionStorage.setItem('scrollToSection', sectionId);
        window.location.href = `services.html#${sectionId}`;
        return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Handle scroll on services page load
function handleServicesPageScroll() {
    if (window.location.pathname.includes('services.html')) {
        const sectionId = sessionStorage.getItem('scrollToSection');
        if (sectionId) {
            sessionStorage.removeItem('scrollToSection');
            setTimeout(() => {
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }
}

// Handle service image clicks on mobile
function initServiceImageInteraction() {
    const serviceImages = document.querySelectorAll('.service-image');
    let activeImage = null;

    // Function to handle image click
    function handleImageClick(e) {
        const image = e.currentTarget;
        
        // If clicking the same image that's active, let the link work
        if (image === activeImage) {
            return;
        }

        // Prevent link click on first tap
        e.preventDefault();

        // Remove active class from previous image
        if (activeImage) {
            activeImage.classList.remove('active');
        }

        // Add active class to clicked image
        image.classList.add('active');
        activeImage = image;
    }

    // Add click handlers to all service images
    serviceImages.forEach(image => {
        image.addEventListener('click', handleImageClick);
    });

    // Close overlay when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.service-image') && activeImage) {
            activeImage.classList.remove('active');
            activeImage = null;
        }
    });
} 