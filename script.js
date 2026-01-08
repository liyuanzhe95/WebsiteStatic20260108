// Photo Gallery JavaScript Functions

// Function to open modal with clicked image
function openModal(imgElement) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    
    modal.style.display = 'block';
    modalImg.src = imgElement.src;
    modalImg.alt = imgElement.alt;
    modalCaption.textContent = imgElement.alt;
    
    // Add fade-in animation
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
    
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
}

// Function to close modal
function closeModal() {
    const modal = document.getElementById('imageModal');
    
    // Add fade-out animation
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

// Close modal when clicking outside the image
window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modal = document.getElementById('imageModal');
        if (modal.style.display === 'block') {
            closeModal();
        }
    }
});

// Smooth scrolling for any anchor links (if added later)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Add loading animation to images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.photo-item img');
    
    images.forEach(img => {
        // Add loading class initially
        img.classList.add('loading');
        
        img.addEventListener('load', function() {
            // Remove loading class when image loads
            this.classList.remove('loading');
            this.style.opacity = '1';
        });
        
        img.addEventListener('error', function() {
            // Handle image load errors
            this.classList.remove('loading');
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNzUgMTAwSDIyNVYxNTBIMTc1VjEwMFoiIGZpbGw9IiM5Q0EzQUYiLz4KPHA+CiAgPHRzcGFuIHg9IjIwMCIgeT0iMTgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNjg3NThmIiBmb250LXNpemU9IjE0Ij5JbWFnZSBub3QgZm91bmQ8L3RzcGFuPgo8L3A+Cjwvc3ZnPg==';
            this.alt = 'Image not found';
        });
    });
});

// Function to dynamically load local images (for when users add their own photos)
function loadLocalImages() {
    // This function can be extended to automatically scan for local image files
    // For now, it provides a framework for future enhancement
    
    const supportedFormats = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp'];
    const gallery = document.getElementById('gallery');
    
    // Note: Due to browser security restrictions, we can't automatically
    // scan local directories. Users will need to manually update the HTML
    // with their image paths, or use a local server setup.
    
    console.log('Gallery initialized. Supported formats:', supportedFormats.join(', '));
}

// Add some visual feedback for interactions
document.addEventListener('DOMContentLoaded', function() {
    // Add ripple effect to photo items when clicked
    const photoItems = document.querySelectorAll('.photo-item');
    
    photoItems.forEach(item => {
        item.addEventListener('click', function(e) {
            const ripple = document.createElement('div');
            ripple.classList.add('ripple');
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Initialize gallery when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadLocalImages();
    console.log('Photo Gallery loaded successfully!');
});
