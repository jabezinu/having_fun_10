// Future JavaScript functionality can be added here.
// For example, handling the search bar, mobile navigation, or interactive elements.

document.addEventListener('DOMContentLoaded', () => {
    console.log('Landing page loaded and scripts are ready.');

    // Example: Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('header nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Example: CTA button alert (can be replaced with actual functionality)
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            alert('Consultation scheduling feature coming soon!');
        });
    }

    // Example: Search button alert (can be replaced with actual search functionality)
    const searchButton = document.querySelector('.search-bar button');
    if (searchButton) {
        searchButton.addEventListener('click', () => {
            const searchTerm = document.querySelector('.search-bar input').value;
            if (searchTerm) {
                alert(`Searching for: "${searchTerm}" (Search functionality coming soon!)`);
            }
        });
    }
}); 