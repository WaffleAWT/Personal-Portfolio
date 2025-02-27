// Import data and utilities
import { 
    aboutData, 
    projectsData, 
    musicData, 
    webData, 
    servicesData, 
    toolsData, 
    contactData, 
    navData, 
    homeData, 
    shapesData,
    footerData
} from './data/index.js';

import { initAllShapes } from './utils/shapeGenerator.js';
import { initAllContent } from './utils/contentLoader.js';

// Initialize all content and shapes when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all content from data files
    initAllContent({
        aboutData, 
        projectsData, 
        musicData, 
        webData, 
        servicesData, 
        toolsData, 
        contactData, 
        navData, 
        homeData,
        footerData
    });
    
    // Initialize all shapes
    initAllShapes(shapesData);
    
    // Enhanced smooth scrolling
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            document.querySelectorAll('nav a').forEach(link => {
                link.classList.remove('active');
            });
            
            // Add active class to clicked link
            if (this.getAttribute('href') === '#home' || this.classList.contains('logo-link')) {
                document.querySelector('nav a[href="#home"]').classList.add('active');
            } else {
                this.classList.add('active');
            }
            
            const section = document.querySelector(this.getAttribute('href'));
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Update active link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });
        
        document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Enhanced active section detection
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                document.querySelectorAll('nav a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
    
    // Music visualizer animation - Initial state only
    const visualizers = document.querySelectorAll('.visualizer');
    visualizers.forEach(visualizer => {
        visualizer.querySelectorAll('.visualizer-bar').forEach(bar => {
            bar.style.height = Math.random() * 30 + 15 + '%';
        });
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    const overlay = document.querySelector('.overlay');
    
    if (menuToggle && navMenu && overlay) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            overlay.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
            
            // Toggle icon
            const icon = menuToggle.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close menu when clicking on overlay
        overlay.addEventListener('click', () => {
            navMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.classList.remove('no-scroll');
            
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
        
        // Close menu when clicking on a nav link
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                overlay.classList.remove('active');
                document.body.classList.remove('no-scroll');
                
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

    // Formspree form handling
    const contactForm = document.querySelector('.new-contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const formAction = contactForm.getAttribute('action');
            
            fetch(formAction, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    // Show success message
                    const formSuccess = document.querySelector('.form-success');
                    formSuccess.classList.add('visible');
                    
                    // Reset form
                    contactForm.reset();
                    
                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        formSuccess.classList.remove('visible');
                    }, 5000);
                } else {
                    throw new Error('Form submission failed');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was a problem submitting your form. Please try again later.');
            });
        });
    }
}); 