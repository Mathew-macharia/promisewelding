document.addEventListener('DOMContentLoaded', () => {
    const galleryGrid = document.getElementById('gallery-grid');
    const categoryLinks = document.querySelectorAll('.category-link');
    const categoryTitle = document.querySelector('.category-title');
    const mobileToggle = document.createElement('button');
    
    // Add mobile toggle button
    mobileToggle.className = 'mobile-category-toggle';
    mobileToggle.innerHTML = '≡';
    document.body.appendChild(mobileToggle);

    // Gallery image paths by category
    const galleryPaths = {
        gates: [
            'assets/gallery/gates/gate1.jpg',
            'assets/gallery/gates/gate2.jpg',
            'assets/gallery/gates/gate3.jpg',
            'assets/gallery/gates/gate4.jpg',
            'assets/gallery/gates/gate5.jpg',
            'assets/gallery/gates/gate6.jpg',
            'assets/gallery/gates/gate7.jpg',
            'assets/gallery/gates/gate8.jpg'
        ],
        doors: [
            'assets/gallery/doors/door1.jpg',
            'assets/gallery/doors/door2.jpg',
            'assets/gallery/doors/door3.jpg',
            'assets/gallery/doors/door4.jpg',
            'assets/gallery/doors/door5.jpg',
            'assets/gallery/doors/door6.jpg'
        ],
        windows: [
            'assets/gallery/windows/win1.jpg',
            'assets/gallery/windows/win2.jpg',
            'assets/gallery/windows/win3.jpg',
            'assets/gallery/windows/win4.jpg',
            'assets/gallery/windows/win5.jpg',
            'assets/gallery/windows/win6.jpg',
            'assets/gallery/grills/grills1.jpg',
            'assets/gallery/grills/grills2.jpg'
        ],
        staircase: [
            'assets/gallery/staircase&railings/staircase1.jpg',
            'assets/gallery/staircase&railings/staircase2.jpg',
            'assets/gallery/staircase&railings/staircase3.jpg',
            'assets/gallery/staircase&railings/railing1.jpg'
        ],
        roofing: [
            'assets/gallery/roofing/roofing1.jpg',
            'assets/gallery/roofing/roofing2.jpg',
            'assets/gallery/roofing/roofing3.jpg',
            'assets/gallery/roofing/roofing4.jpg',
            'assets/gallery/roofing/roofing5.jpg',
        ],
        locks: [
            'assets/gallery/locks/lock.jpg',
            'assets/gallery/locks/lock1.jpg',
            'assets/gallery/locks/lock2.jpg'
        ],
        custom: [
            'assets/gallery/custom/custom1.jpg',
            'assets/gallery/custom/custom2.jpg',
            'assets/gallery/custom/railings.jpg'
        ]
    };

    // Load images for a category
    function loadCategoryImages(category) {
        galleryGrid.innerHTML = '';
        const images = category === 'all' 
            ? Object.values(galleryPaths).flat() 
            : galleryPaths[category] || [];

        images.forEach(imagePath => {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            
            const img = document.createElement('img');
            img.src = imagePath;
            img.alt = `Project image from ${category} category`;
            img.loading = 'lazy';
            
            item.appendChild(img);
            galleryGrid.appendChild(item);
        });
    }

    // Update active category
    function updateActiveCategory(category) {
        categoryLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.category === category) {
                link.classList.add('active');
            }
        });

        // Update category title
        const titles = {
            gates: 'Designer Gates & Fencing',
            doors: 'Security Doors',
            windows: 'Windows & Grilles',
            staircase: 'Staircases & Railings',
            roofing: 'Structural Roofing',
            locks: 'Security Locks',
            custom: 'Custom Solutions',
            all: 'All Categories'
        };
        categoryTitle.textContent = titles[category] || 'All Categories';
    }

    // Handle category clicks
    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.dataset.category;
            loadCategoryImages(category);
            updateActiveCategory(category);
            
            // Close mobile sidebar if open
            document.querySelector('.category-sidebar').classList.remove('active');
        });
    });

    // Mobile sidebar toggle
    mobileToggle.addEventListener('click', () => {
        document.querySelector('.category-sidebar').classList.toggle('active');
    });

    // Check URL parameters for initial category
    const urlParams = new URLSearchParams(window.location.search);
    const initialCategory = urlParams.get('category') || 'all';
    loadCategoryImages(initialCategory);
    updateActiveCategory(initialCategory);

    // Close mobile sidebar when clicking outside
    document.addEventListener('click', (e) => {
        const sidebar = document.querySelector('.category-sidebar');
        const toggle = document.querySelector('.mobile-category-toggle');
        
        if (!sidebar.contains(e.target) && !toggle.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    });
}); 