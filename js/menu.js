// Function to initialize the menu
function initializeMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            navToggle.classList.toggle('active'); // Toggle active class on the button
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
                navToggle.classList.remove('active'); // Remove active class from button
            }
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                navToggle.classList.remove('active'); // Remove active class from button
            });
        });
    }
}

// Wait for navigation to be loaded
document.addEventListener('DOMContentLoaded', () => {
    // Check if nav is already loaded
    if (document.querySelector('.nav-toggle')) {
        initializeMenu();
    } else {
        // If nav is not loaded yet, wait for changes in the DOM
        const observer = new MutationObserver((mutations, obs) => {
            if (document.querySelector('.nav-toggle')) {
                initializeMenu();
                obs.disconnect(); // Stop observing once we initialize
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
}); 