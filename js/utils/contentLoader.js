/**
 * Utility functions for dynamically loading content from data files
 */

/**
 * Loads the about section content from data
 * @param {Object} data - The about section data
 */
export function loadAboutContent(data) {
    const aboutSection = document.getElementById('about');
    if (!aboutSection) return;
    
    // Find or create the content container
    let contentContainer = aboutSection.querySelector('.about-content');
    if (!contentContainer) {
        contentContainer = document.createElement('div');
        contentContainer.className = 'about-content';
        aboutSection.appendChild(contentContainer);
    }
    
    // Set the section title
    const titleElement = aboutSection.querySelector('h2') || document.createElement('h2');
    titleElement.textContent = data.title;
    if (!titleElement.parentNode) {
        aboutSection.insertBefore(titleElement, contentContainer);
    }
    
    // Create the content HTML
    const contentHTML = `
        <div class="about-image">
            <img src="${data.image}" alt="${data.imageAlt}" />
        </div>
        <div class="about-text">
            ${data.paragraphs.map(paragraph => `<p>${paragraph}</p>`).join('')}
        </div>
    `;
    
    // Set the content
    contentContainer.innerHTML = contentHTML;
}

/**
 * Loads the projects section content from data
 * @param {Object} data - The projects section data
 */
export function loadProjectsContent(data) {
    const projectsSection = document.getElementById('projects');
    if (!projectsSection) return;
    
    // Find or create the content container
    let contentContainer = projectsSection.querySelector('.projects-content');
    if (!contentContainer) {
        contentContainer = document.createElement('div');
        contentContainer.className = 'projects-content';
        projectsSection.appendChild(contentContainer);
    }
    
    // Set the section title
    const titleElement = projectsSection.querySelector('h2') || document.createElement('h2');
    titleElement.textContent = data.title;
    if (!titleElement.parentNode) {
        projectsSection.insertBefore(titleElement, contentContainer);
    }
    
    // Create the content HTML
    const contentHTML = `
        <div class="projects-grid">
            ${data.projects.map(project => `
                <div class="project-card">
                    <div class="project-image">
                        <img src="${project.image}" alt="${project.title}" />
                        <div class="project-overlay">
                            <a href="${project.url}" target="_blank" class="project-link">
                                <i class="fas fa-external-link-alt"></i>
                            </a>
                        </div>
                    </div>
                    <div class="project-info">
                        <h3>${project.title}</h3>
                        <span class="project-category">${project.category}</span>
                        <p>${project.description}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    // Set the content
    contentContainer.innerHTML = contentHTML;
}

/**
 * Loads the music section content from data
 * @param {Object} data - The music section data
 */
export function loadMusicContent(data) {
    const musicSection = document.getElementById('music');
    if (!musicSection) return;
    
    // Find or create the content container
    let contentContainer = musicSection.querySelector('.music-content');
    if (!contentContainer) {
        contentContainer = document.createElement('div');
        contentContainer.className = 'music-content';
        musicSection.appendChild(contentContainer);
    }
    
    // Set the section title
    const titleElement = musicSection.querySelector('h2') || document.createElement('h2');
    titleElement.textContent = data.title;
    if (!titleElement.parentNode) {
        musicSection.insertBefore(titleElement, contentContainer);
    }
    
    // Clear existing content
    contentContainer.innerHTML = '';
    
    // Create container
    const musicContainer = document.createElement('div');
    musicContainer.className = 'music-container';
    contentContainer.appendChild(musicContainer);
    
    // Create music players
    data.tracks.forEach(track => {
        // Create music player container
        const musicPlayer = document.createElement('div');
        musicPlayer.className = 'music-player';
        
        // Add title
        const title = document.createElement('h3');
        title.textContent = track.title;
        musicPlayer.appendChild(title);
        
        // Create player container
        const playerContainer = document.createElement('div');
        playerContainer.className = 'player-container';
        
        // Create custom audio player
        const customAudioPlayer = document.createElement('div');
        customAudioPlayer.className = 'custom-audio-player';
        
        // Create audio element with direct src
        const audio = document.createElement('audio');
        audio.className = 'audio-element';
        audio.preload = 'metadata';
        audio.src = track.audioSource; // Set src directly
        
        // Add fallback text
        audio.textContent = 'Your browser does not support the audio element.';
        
        // Create player controls
        const playerControls = document.createElement('div');
        playerControls.className = 'player-controls';
        
        // Create play button
        const playBtn = document.createElement('button');
        playBtn.className = 'play-btn';
        playBtn.setAttribute('aria-label', `Play ${track.title}`);
        
        // Create play icon
        const playIcon = document.createElement('i');
        playIcon.className = 'fas fa-play';
        playBtn.appendChild(playIcon);
        
        // Create timeline container
        const timelineContainer = document.createElement('div');
        timelineContainer.className = 'timeline-container';
        
        // Create timeline
        const timeline = document.createElement('div');
        timeline.className = 'timeline';
        
        // Create progress
        const progress = document.createElement('div');
        progress.className = 'progress';
        timeline.appendChild(progress);
        
        // Create time display
        const timeDisplay = document.createElement('div');
        timeDisplay.className = 'time';
        
        // Create current time
        const currentTime = document.createElement('span');
        currentTime.className = 'current';
        currentTime.textContent = '0:00';
        
        // Create duration
        const duration = document.createElement('span');
        duration.className = 'duration';
        duration.textContent = '0:00';
        
        // Assemble time display
        timeDisplay.appendChild(currentTime);
        timeDisplay.appendChild(duration);
        
        // Assemble timeline container
        timelineContainer.appendChild(timeline);
        timelineContainer.appendChild(timeDisplay);
        
        // Assemble player controls
        playerControls.appendChild(playBtn);
        playerControls.appendChild(timelineContainer);
        
        // Assemble custom audio player
        customAudioPlayer.appendChild(audio);
        customAudioPlayer.appendChild(playerControls);
        
        // Assemble player container
        playerContainer.appendChild(customAudioPlayer);
        
        // Create visualizer
        const visualizer = document.createElement('div');
        visualizer.className = 'visualizer';
        
        // Create visualizer bars
        for (let i = 0; i < data.visualizerBars; i++) {
            const bar = document.createElement('div');
            bar.className = 'visualizer-bar';
            bar.style.setProperty('--i', i);
            visualizer.appendChild(bar);
        }
        
        // Assemble music player
        musicPlayer.appendChild(title);
        musicPlayer.appendChild(playerContainer);
        musicPlayer.appendChild(visualizer);
        
        // Add to container
        musicContainer.appendChild(musicPlayer);
    });
    
    // Initialize audio players after they're added to the DOM
    setTimeout(() => {
        initAudioPlayers(musicSection);
    }, 100);
}

/**
 * Initializes audio players with event listeners
 * @param {HTMLElement} container - The container element with audio players
 */
function initAudioPlayers(container) {
    const players = container.querySelectorAll('.custom-audio-player');
    
    players.forEach(player => {
        const audio = player.querySelector('.audio-element');
        const playBtn = player.querySelector('.play-btn');
        const playIcon = playBtn.querySelector('i');
        const timeline = player.querySelector('.timeline');
        const progress = player.querySelector('.progress');
        const currentTime = player.querySelector('.current');
        const duration = player.querySelector('.duration');
        const musicPlayer = player.closest('.music-player');
        const visualizer = musicPlayer.querySelector('.visualizer');
        const visualizerBars = visualizer.querySelectorAll('.visualizer-bar');
        
        // Set crossOrigin to anonymous to avoid CORS issues
        audio.crossOrigin = "anonymous";
        
        // Force load the audio metadata
        audio.load();
        
        // Format time in minutes and seconds
        const formatTime = (seconds) => {
            if (isNaN(seconds) || seconds === Infinity) return '0:00';
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = Math.floor(seconds % 60);
            return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
        };
        
        // Update progress bar and time display
        const updateProgress = () => {
            if (isNaN(audio.duration)) return;
            
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
            console.log('Audio metadata loaded:', audio.src);
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
        
        // Log any errors that occur during audio loading or playback
        audio.addEventListener('error', (e) => {
            console.error('Audio error:', e);
            console.error('Audio error code:', audio.error ? audio.error.code : 'unknown');
            console.error('Audio source:', audio.src);
        });
        
        // Direct play button click handler
        playBtn.onclick = function() {
            console.log('Play button clicked directly');
            
            if (audio.paused) {
                // Pause all other audio elements first
                document.querySelectorAll('.audio-element').forEach(a => {
                    if (a !== audio && !a.paused) {
                        a.pause();
                        const otherPlayBtn = a.closest('.custom-audio-player').querySelector('.play-btn i');
                        otherPlayBtn.className = 'fas fa-play';
                    }
                });
                
                // Try to play the audio
                console.log('Attempting to play:', audio.src);
                
                try {
                    // First, try to load the audio again
                    audio.load();
                    
                    // Then play after a short delay
                    setTimeout(() => {
                        const playPromise = audio.play();
                        
                        if (playPromise !== undefined) {
                            playPromise.then(() => {
                                console.log('Audio playback started successfully');
                                playIcon.className = 'fas fa-pause';
                            }).catch(error => {
                                console.error('Audio playback failed:', error);
                                playIcon.className = 'fas fa-play';
                                
                                // Try a different approach for autoplay restrictions
                                alert('Please click play again to start audio playback. Some browsers require user interaction before playing audio.');
                            });
                        }
                    }, 100);
                } catch (error) {
                    console.error('Error playing audio:', error);
                }
            } else {
                console.log('Pausing audio');
                audio.pause();
                playIcon.className = 'fas fa-play';
                
                // Reset visualizer bars
                visualizerBars.forEach(bar => {
                    bar.style.height = '15%';
                });
            }
            
            return false; // Prevent default
        };
        
        // Timeline click handler
        timeline.addEventListener('click', (e) => {
            if (isNaN(audio.duration)) return;
            
            const timelineWidth = timeline.clientWidth;
            const clickPosition = e.offsetX;
            const clickPercent = (clickPosition / timelineWidth);
            const seekTime = clickPercent * audio.duration;
            
            audio.currentTime = seekTime;
        });
    });
}

/**
 * Loads the web projects section content from data
 * @param {Object} data - The web projects section data
 */
export function loadWebContent(data) {
    const webSection = document.getElementById('web');
    if (!webSection) return;
    
    // Find or create the content container
    let contentContainer = webSection.querySelector('.web-content');
    if (!contentContainer) {
        contentContainer = document.createElement('div');
        contentContainer.className = 'web-content';
        webSection.appendChild(contentContainer);
    }
    
    // Set the section title
    const titleElement = webSection.querySelector('h2') || document.createElement('h2');
    titleElement.textContent = data.title;
    if (!titleElement.parentNode) {
        webSection.insertBefore(titleElement, contentContainer);
    }
    
    // Create the content HTML
    const contentHTML = `
        <div class="web-projects-grid">
            ${data.projects.map(project => `
                <div class="web-project-card">
                    <div class="web-project-image">
                        <img src="${project.image}" alt="${project.title}" />
                        <div class="web-project-overlay">
                            <a href="${project.url}" target="_blank" class="web-project-link">
                                <i class="fas fa-external-link-alt"></i>
                            </a>
                        </div>
                    </div>
                    <div class="web-project-info">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    // Set the content
    contentContainer.innerHTML = contentHTML;
}

/**
 * Loads the services section content from data
 * @param {Object} data - The services section data
 */
export function loadServicesContent(data) {
    const servicesSection = document.getElementById('services');
    if (!servicesSection) return;
    
    // Find or create the content container
    let contentContainer = servicesSection.querySelector('.services-content');
    if (!contentContainer) {
        contentContainer = document.createElement('div');
        contentContainer.className = 'services-content';
        servicesSection.appendChild(contentContainer);
    }
    
    // Set the section title
    const titleElement = servicesSection.querySelector('h2') || document.createElement('h2');
    titleElement.textContent = data.title;
    if (!titleElement.parentNode) {
        servicesSection.insertBefore(titleElement, contentContainer);
    }
    
    // Create the content HTML
    const contentHTML = `
        <div class="services-grid">
            ${data.services.map(service => `
                <div class="service-card">
                    <div class="service-icon">
                        <i class="${service.icon}"></i>
                    </div>
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                    <ul class="service-features">
                        ${service.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
            `).join('')}
        </div>
    `;
    
    // Set the content
    contentContainer.innerHTML = contentHTML;
}

/**
 * Loads the tools section content from data
 * @param {Object} data - The tools section data
 */
export function loadToolsContent(data) {
    const toolsSection = document.getElementById('tools');
    if (!toolsSection) return;
    
    // Find or create the content container
    let contentContainer = toolsSection.querySelector('.tools-content');
    if (!contentContainer) {
        contentContainer = document.createElement('div');
        contentContainer.className = 'tools-content';
        toolsSection.appendChild(contentContainer);
    }
    
    // Set the section title
    const titleElement = toolsSection.querySelector('h2') || document.createElement('h2');
    titleElement.textContent = data.title;
    if (!titleElement.parentNode) {
        toolsSection.insertBefore(titleElement, contentContainer);
    }
    
    // Create the content HTML
    const contentHTML = `
        <div class="tools-grid">
            ${data.tools.map(tool => `
                <div class="tool-card">
                    <div class="tool-image">
                        <img src="${tool.image}" alt="${tool.name}" />
                    </div>
                    <div class="tool-info">
                        <h3>${tool.name}</h3>
                        <p>${tool.description}</p>
                        <a href="${tool.url}" target="_blank" class="tool-link">Learn More</a>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    // Set the content
    contentContainer.innerHTML = contentHTML;
}

/**
 * Loads the contact section content from data
 * @param {Object} data - The contact section data
 */
export function loadContactContent(data) {
    const contactSection = document.getElementById('contact');
    if (!contactSection) return;
    
    // Find or create the content container
    let contentContainer = contactSection.querySelector('.contact-content');
    if (!contentContainer) {
        contentContainer = document.createElement('div');
        contentContainer.className = 'contact-content';
        contactSection.appendChild(contentContainer);
    }
    
    // Set the section title
    const titleElement = contactSection.querySelector('h2') || document.createElement('h2');
    titleElement.textContent = data.title;
    if (!titleElement.parentNode) {
        contactSection.insertBefore(titleElement, contentContainer);
    }
    
    // Create the content HTML
    const contentHTML = `
        <div class="contact-description">
            <p>${data.description}</p>
        </div>
        <div class="contact-info">
            <div class="contact-email">
                <a href="mailto:${data.email}">${data.email}</a>
            </div>
            <div class="social-links">
                ${data.socialMedia.map(social => `
                    <a href="${social.url}" target="_blank" title="${social.name}">
                        <i class="${social.icon}"></i>
                    </a>
                `).join('')}
            </div>
        </div>
        <form class="new-contact-form" action="https://formspree.io/f/xpzgkwzj" method="POST">
            ${data.formFields.map(field => {
                if (field.type === 'textarea') {
                    return `
                        <div class="form-group">
                            <textarea id="${field.id}" name="${field.name}" placeholder="${field.placeholder}" rows="${field.rows}" ${field.required ? 'required' : ''}></textarea>
                        </div>
                    `;
                } else {
                    return `
                        <div class="form-group">
                            <input type="${field.type}" id="${field.id}" name="${field.name}" placeholder="${field.placeholder}" ${field.required ? 'required' : ''}>
                        </div>
                    `;
                }
            }).join('')}
            <button type="submit" class="submit-btn">
                <i class="${data.submitButton.icon}"></i> ${data.submitButton.text}
            </button>
        </form>
    `;
    
    // Set the content
    contentContainer.innerHTML = contentHTML;
}

/**
 * Loads the navigation menu content from data
 * @param {Object} data - The navigation menu data
 */
export function loadNavContent(data) {
    const nav = document.querySelector('nav');
    if (!nav) return;
    
    // Create the content HTML
    const contentHTML = `
        <div class="logo">
            <a href="${data.logo.link}" class="logo-link">${data.logo.text}</a>
        </div>
        <div class="menu-toggle">
            <i class="${data.mobileMenuButton.openIcon}"></i>
        </div>
        <ul class="menu">
            ${data.menuItems.map(item => `
                <li>
                    <a href="${item.link}">
                        <i class="${item.icon}"></i> ${item.text}
                    </a>
                </li>
            `).join('')}
            <li class="social-icons">
                ${data.socialIcons.map(social => `
                    <a href="${social.url}" target="_blank" title="${social.name}">
                        <i class="${social.icon}"></i>
                    </a>
                `).join('')}
            </li>
        </ul>
    `;
    
    // Set the content
    nav.innerHTML = contentHTML;
    
    // Set up mobile menu toggle
    const menuToggle = nav.querySelector('.menu-toggle');
    const menu = nav.querySelector('.menu');
    
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        
        if (menu.classList.contains('active')) {
            icon.className = data.mobileMenuButton.closeIcon;
        } else {
            icon.className = data.mobileMenuButton.openIcon;
        }
    });
}

/**
 * Loads the home section content from data
 * @param {Object} data - The home section data
 */
export function loadHomeContent(data) {
    const homeSection = document.getElementById('home');
    if (!homeSection) return;
    
    // Find or create the content container
    let contentContainer = homeSection.querySelector('.hero-content');
    if (!contentContainer) {
        contentContainer = document.createElement('div');
        contentContainer.className = 'hero-content';
        homeSection.appendChild(contentContainer);
    }
    
    // Create the content HTML
    const contentHTML = `
        <div class="hero-text">
            <p class="greeting">${data.greeting}</p>
            <h1>${data.name} <span class="highlight">${data.nickname}</span></h1>
            <div class="typing-container">
                <span class="typing"></span>
            </div>
            <p class="description">${data.description}</p>
            <div class="cta-buttons">
                ${data.ctaButtons.map(button => `
                    <a href="${button.link}" class="btn ${button.primary ? 'primary' : 'secondary'}">
                        <i class="${button.icon}"></i> ${button.text}
                    </a>
                `).join('')}
            </div>
        </div>
        <div class="social-icons">
            ${data.socialIcons.map(social => `
                <a href="${social.url}" target="_blank" title="${social.name}">
                    <i class="${social.icon}"></i>
                </a>
            `).join('')}
        </div>
        <div class="scroll-down">
            <a href="#about">
                <span>${data.scrollDownText}</span>
                <i class="${data.scrollDownIcon}"></i>
            </a>
        </div>
    `;
    
    // Set the content
    contentContainer.innerHTML = contentHTML;
    
    // Set up typing animation
    const typingElement = contentContainer.querySelector('.typing');
    if (typingElement && data.titles.length > 0) {
        let currentTitleIndex = 0;
        let currentCharIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;
        
        function type() {
            const currentTitle = data.titles[currentTitleIndex];
            
            if (isDeleting) {
                typingElement.textContent = currentTitle.substring(0, currentCharIndex - 1);
                currentCharIndex--;
                typingSpeed = 50;
            } else {
                typingElement.textContent = currentTitle.substring(0, currentCharIndex + 1);
                currentCharIndex++;
                typingSpeed = 100;
            }
            
            if (!isDeleting && currentCharIndex === currentTitle.length) {
                isDeleting = true;
                typingSpeed = 1000; // Pause at the end
            } else if (isDeleting && currentCharIndex === 0) {
                isDeleting = false;
                currentTitleIndex = (currentTitleIndex + 1) % data.titles.length;
                typingSpeed = 500; // Pause before starting new word
            }
            
            setTimeout(type, typingSpeed);
        }
        
        // Start the typing animation
        setTimeout(type, 1000);
    }
}

/**
 * Initializes all content loaders
 * @param {Object} allData - Object containing all section data
 */
export function initAllContent(allData) {
    loadHomeContent(allData.homeData);
    loadNavContent(allData.navData);
    loadAboutContent(allData.aboutData);
    loadProjectsContent(allData.projectsData);
    loadMusicContent(allData.musicData);
    loadWebContent(allData.webData);
    loadServicesContent(allData.servicesData);
    loadToolsContent(allData.toolsData);
    loadContactContent(allData.contactData);
} 