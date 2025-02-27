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
    shapesData 
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
        homeData
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
                document.querySelectorAll('nav a').forEach(a => {
                    a.classList.remove('active');
                    if (a.getAttribute('href').substring(1) === entry.target.id) {
                        a.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
    
    // Music visualizer animation
    const visualizers = document.querySelectorAll('.visualizer');
    visualizers.forEach(visualizer => {
        visualizer.querySelectorAll('.visualizer-bar').forEach(bar => {
            bar.style.height = Math.random() * 100 + '%';
        });
    });

    // Custom Audio Player Functionality
    const players = document.querySelectorAll('.custom-audio-player');
    
    players.forEach(player => {
        const audio = player.querySelector('.audio-element');
        const playBtn = player.querySelector('.play-btn');
        const playIcon = playBtn.querySelector('i');
        const timeline = player.querySelector('.timeline');
        const progress = player.querySelector('.progress');
        const currentTime = player.querySelector('.current');
        const duration = player.querySelector('.duration');
        const visualizer = player.parentElement.querySelector('.visualizer');
        const visualizerBars = visualizer.querySelectorAll('.visualizer-bar');
        
        // Format time in minutes and seconds
        const formatTime = (seconds) => {
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = Math.floor(seconds % 60);
            return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
        };
        
        // Update progress bar and time display
        const updateProgress = () => {
            const percent = (audio.currentTime / audio.duration) * 100;
            progress.style.width = `${percent}%`;
            currentTime.textContent = formatTime(audio.currentTime);
            
            // Animate visualizer bars when playing
            if (!audio.paused) {
                visualizerBars.forEach(bar => {
                    const randomHeight = 15 + Math.random() * 85;
                    bar.style.height = `${randomHeight}%`;
                });
            }
        };
        
        // Set up event listeners
        audio.addEventListener('loadedmetadata', () => {
            duration.textContent = formatTime(audio.duration);
        });
        
        audio.addEventListener('timeupdate', updateProgress);
        
        audio.addEventListener('ended', () => {
            playIcon.className = 'fas fa-play';
            progress.style.width = '0%';
            currentTime.textContent = '0:00';
            
            // Reset visualizer bars
            visualizerBars.forEach(bar => {
                bar.style.height = '15%';
            });
        });
        
        playBtn.addEventListener('click', () => {
            if (audio.paused) {
                // Pause all other audio elements first
                document.querySelectorAll('.audio-element').forEach(a => {
                    if (a !== audio && !a.paused) {
                        a.pause();
                        const otherPlayBtn = a.closest('.custom-audio-player').querySelector('.play-btn i');
                        otherPlayBtn.className = 'fas fa-play';
                    }
                });
                
                audio.play();
                playIcon.className = 'fas fa-pause';
            } else {
                audio.pause();
                playIcon.className = 'fas fa-play';
                
                // Reset visualizer bars
                visualizerBars.forEach(bar => {
                    bar.style.height = '15%';
                });
            }
        });
        
        timeline.addEventListener('click', (e) => {
            const timelineWidth = timeline.clientWidth;
            const clickPosition = e.offsetX;
            const clickPercent = (clickPosition / timelineWidth);
            const seekTime = clickPercent * audio.duration;
            
            audio.currentTime = seekTime;
        });
    });

    // Formspree form handling
    const contactForm = document.querySelector('.new-contact-form');
    
    if (contactForm) {
        // Create success message element
        const successMessage = document.createElement('div');
        successMessage.className = 'form-success';
        successMessage.innerHTML = '<p>Thank you for your message! I\'ll get back to you soon.</p>';
        contactForm.parentNode.insertBefore(successMessage, contactForm.nextSibling);
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const form = e.target;
            const formData = new FormData(form);
            const formAction = form.getAttribute('action');
            
            // Submit form data to Formspree
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
                    form.reset();
                    successMessage.classList.add('visible');
                    
                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        successMessage.classList.remove('visible');
                    }, 5000);
                    
                    return response.json();
                } else {
                    throw new Error('Form submission failed');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Oops! There was a problem submitting your form. Please try again later.');
            });
        });
    }
}); 