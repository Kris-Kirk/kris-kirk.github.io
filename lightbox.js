/* lightbox.js */

// 1. Inject the Lightbox HTML into the bottom of the body
document.body.insertAdjacentHTML('beforeend', `
    <div id="lightbox" onclick="closeLightbox()">
        <img id="lightbox-img" src="">
    </div>
`);

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

// 2. Function to Open
function openLightbox(src) {
    lightboxImg.src = src;
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Disable scrolling
}

// 3. Function to Close
function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// 4. Close on 'Escape' key
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") closeLightbox();
});

// 5. AUTO-APPLY: Find all project images and make them clickable
// We target .project-hero-img and .gallery-media only. 
// We generally avoid .card-image because those are links to other pages.
const images = document.querySelectorAll('.project-hero-img, .gallery-media');

images.forEach(img => {
    img.style.cursor = 'zoom-in'; // Change mouse cursor to magnifying glass
    img.onclick = function() {
        openLightbox(this.src);
    };
});