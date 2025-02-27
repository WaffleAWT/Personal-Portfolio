/**
 * Utility functions for generating and animating floating shapes
 */

/**
 * Generates floating shapes for a section based on the provided data
 * @param {string} sectionId - The ID of the section to add shapes to
 * @param {Array} shapesData - Array of shape data objects
 */
export function generateShapes(sectionId, shapesData) {
    const section = document.getElementById(sectionId);
    if (!section) return;
    
    // Find or create the shapes container
    let shapesContainer = section.querySelector('.floating-shapes');
    if (!shapesContainer) {
        shapesContainer = document.createElement('div');
        shapesContainer.className = 'floating-shapes';
        section.appendChild(shapesContainer);
    }
    
    // Clear any existing shapes
    shapesContainer.innerHTML = '';
    
    // Generate shapes based on the data
    shapesData.forEach((shapeData, index) => {
        const shape = document.createElement('div');
        
        // Set base classes
        shape.className = `shape ${shapeData.type} ${shapeData.size}`;
        
        // Add hollow class if specified
        if (shapeData.hollow) {
            shape.classList.add('hollow');
        }
        
        // Set animation direction
        shape.setAttribute('data-direction', shapeData.direction);
        
        // Set position and other styles
        shape.setAttribute('style', shapeData.style);
        
        // Add a small delay based on index for staggered animation
        shape.style.animationDelay = `${index * 0.1}s`;
        
        // Add the shape to the container
        shapesContainer.appendChild(shape);
    });
}

/**
 * Initializes intersection observers for animating shapes when sections come into view
 */
export function initShapeAnimations() {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const shapes = entry.target.querySelectorAll('.shape');
                shapes.forEach((shape, index) => {
                    // Add a small delay based on index
                    setTimeout(() => {
                        shape.classList.add('animate');
                    }, index * 50);
                });
            } else {
                // Optional: remove animation when section is out of view
                const shapes = entry.target.querySelectorAll('.shape');
                shapes.forEach(shape => {
                    shape.classList.remove('animate');
                });
            }
        });
    }, {
        threshold: 0.1 // Trigger when at least 10% of the section is visible
    });
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

/**
 * Randomizes shape properties for more organic movement
 * @param {HTMLElement} shape - The shape element to randomize
 */
export function randomizeShapeProperties(shape) {
    // Randomize opacity within a range
    const baseOpacity = shape.classList.contains('hollow') ? 0.13 : 0.05;
    const opacityVariation = shape.classList.contains('hollow') ? 0.05 : 0.1;
    const opacity = baseOpacity + (Math.random() * opacityVariation);
    shape.style.opacity = opacity.toFixed(2);
    
    // Randomize animation duration
    const baseDuration = 20;
    const durationVariation = 10;
    const duration = baseDuration + (Math.random() * durationVariation);
    shape.style.animationDuration = `${duration.toFixed(1)}s`;
    
    // Add slight rotation
    const rotation = Math.random() * 360;
    shape.style.transform = `rotate(${rotation}deg)`;
    
    // Randomize animation direction if not already set
    if (!shape.getAttribute('data-direction')) {
        const direction = Math.floor(Math.random() * 5) + 1;
        shape.setAttribute('data-direction', direction.toString());
    }
}

/**
 * Applies all shape generation and animation to a page
 * @param {Object} allShapesData - Object containing shape data for all sections
 */
export function initAllShapes(allShapesData) {
    // Generate shapes for each section
    Object.keys(allShapesData).forEach(sectionId => {
        generateShapes(sectionId, allShapesData[sectionId]);
    });
    
    // Apply random properties to all shapes
    document.querySelectorAll('.shape').forEach(shape => {
        randomizeShapeProperties(shape);
    });
    
    // Initialize animations
    initShapeAnimations();
} 