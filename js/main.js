// Main JavaScript file

document.addEventListener('DOMContentLoaded', function() {
    // Reviews slider functionality
    const reviewsSlider = document.querySelector('.reviews__slider');
    const prevButton = document.querySelector('.slider-nav__prev');
    const nextButton = document.querySelector('.slider-nav__next');
    const reviewItems = document.querySelectorAll('.reviews__item');
    
    let currentIndex = 0;
    const itemWidth = reviewItems[0].offsetWidth + 30; // Including gap
    
    // Review slider navigation
    nextButton.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            // In mobile view, slide one item at a time
            currentIndex = (currentIndex + 1) % reviewItems.length;
        } else {
            // In desktop view, slide one page at a time
            const visibleItems = Math.floor(reviewsSlider.offsetWidth / itemWidth);
            currentIndex = Math.min(currentIndex + visibleItems, reviewItems.length - visibleItems);
        }
        updateSliderPosition();
    });
    
    prevButton.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            // In mobile view, slide one item at a time
            currentIndex = (currentIndex - 1 + reviewItems.length) % reviewItems.length;
        } else {
            // In desktop view, slide one page at a time
            const visibleItems = Math.floor(reviewsSlider.offsetWidth / itemWidth);
            currentIndex = Math.max(currentIndex - visibleItems, 0);
        }
        updateSliderPosition();
    });
    
    function updateSliderPosition() {
        let translateValue;
        
        if (window.innerWidth <= 768) {
            // In mobile view, center the current item
            translateValue = -currentIndex * 100 + '%';
            reviewsSlider.style.transform = `translateY(${translateValue})`;
        } else {
            // In desktop view, slide horizontally
            translateValue = -currentIndex * itemWidth + 'px';
            reviewsSlider.style.transform = `translateX(${translateValue})`;
        }
    }
    
    // Show more functionality for review text
    const showMoreButtons = document.querySelectorAll('.review__more');
    
    showMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const reviewText = this.previousElementSibling;
            
            if (reviewText.classList.contains('expanded')) {
                reviewText.classList.remove('expanded');
                this.textContent = 'Show more';
            } else {
                reviewText.classList.add('expanded');
                this.textContent = 'Show less';
            }
        });
    });
    
    // Dropdown menu functionality
    const dropdownLinks = document.querySelectorAll('.dropdown-link');
    
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Logic for dropdown menus would go here
            console.log('Dropdown clicked:', this.textContent.trim());
        });
    });
    
    // Responsive adjustments
    window.addEventListener('resize', function() {
        // Reset slider position on resize
        currentIndex = 0;
        updateSliderPosition();
    });
});