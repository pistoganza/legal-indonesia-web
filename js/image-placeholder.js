// This script would generate placeholder images for development purposes
// In a production environment, you would replace these with actual images

const placeholderImages = [
    'logo.png',
    'en-flag.png',
    'telegram.png',
    'whatsapp.png',
    'email.png',
    'hero-image.jpg',
    'visa-arrival.jpg',
    'family-kitas.jpg',
    'work-kitas.jpg',
    'investor-kitas.jpg',
    'second-home.jpg',
    'remote-worker.jpg',
    'business-visa.jpg',
    'other-visa.jpg',
    'tourist-visa.jpg',
    'blog-1.jpg',
    'blog-2.jpg',
    'blog-3.jpg',
    'telegram-white.png',
    'whatsapp-white.png',
    'instagram.png',
    'facebook.png',
    'twitter.png',
    'linkedin.png'
];

// In a real project, you would use this list to ensure all needed images are available
console.log('Required images:', placeholderImages.join(', '));

// Function to create placeholder image elements that look similar to those in the design
function createPlaceholderImages() {
    // Check if we're in a development environment without images
    const checkImage = document.querySelector('.hero__image img');
    if (checkImage && checkImage.naturalWidth === 0) {
        // Images failed to load, replace with placeholders
        placeholderImages.forEach(imgPath => {
            const fileExtension = imgPath.split('.').pop();
            const isJpg = fileExtension.toLowerCase() === 'jpg' || fileExtension.toLowerCase() === 'jpeg';
            const bgColor = isJpg ? '#d1e6ff' : 'transparent'; 
            
            // Find all img elements with this src
            const imgElements = document.querySelectorAll(`img[src$="${imgPath}"]`);
            
            imgElements.forEach(img => {
                // Get parent dimensions
                const parent = img.parentElement;
                const width = img.width || parent.offsetWidth || 300;
                const height = img.height || parent.offsetHeight || 200;
                
                // Create canvas as placeholder
                const canvas = document.createElement('canvas');
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                
                // Fill background
                ctx.fillStyle = bgColor;
                ctx.fillRect(0, 0, width, height);
                
                // Add image name as text
                ctx.fillStyle = '#333';
                ctx.font = '14px Arial';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(imgPath, width / 2, height / 2);
                
                // Replace original image with canvas
                img.src = canvas.toDataURL();
            });
        });
    }
}

// Wait until all content is loaded
window.addEventListener('load', createPlaceholderImages);