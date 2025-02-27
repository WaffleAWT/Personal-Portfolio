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
    
    // Create the content HTML
    const contentHTML = `
        <div class="music-players">
            ${data.tracks.map(track => `
                <div class="music-player">
                    <div class="visualizer">
                        ${Array(data.visualizerBars).fill().map(() => `
                            <div class="visualizer-bar"></div>
                        `).join('')}
                    </div>
                    <div class="player-container">
                        <div class="custom-audio-player">
                            <audio class="audio-element">
                                <source src="${track.audioSource}" type="${track.type}">
                                Your browser does not support the audio element.
                            </audio>
                            <div class="player-controls">
                                <button class="play-btn">
                                    <i class="fas fa-play"></i>
                                </button>
                                <div class="timeline">
                                    <div class="progress"></div>
                                </div>
                                <div class="time">
                                    <span class="current">0:00</span>
                                    <span class="duration">0:00</span>
                                </div>
                            </div>
                            <div class="track-info">
                                <h3>${track.title}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    // Set the content
    contentContainer.innerHTML = contentHTML;
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