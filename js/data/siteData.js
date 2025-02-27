// Site-wide data
const siteData = {
    title: "WaffleAWT",
    author: "Ali (WaffleAWT)",
    description: "Game Developer & Music Producer. Explore my portfolio of games, music, and web projects.",
    keywords: "game development, music production, web development, portfolio, WaffleAWT",
    copyright: "© 2025 Ali (WaffleAWT). All rights reserved.",
    logo: "Assets/Logo.png",
    social: [
        {
            name: "GitHub",
            url: "https://github.com/WaffleAWT",
            icon: "fab fa-github"
        },
        {
            name: "Itch.io",
            url: "https://waffleawt.itch.io",
            icon: "fab fa-itch-io"
        },
        {
            name: "Spotify",
            url: "https://open.spotify.com/artist/5GsLX8FUmc1JmJf9ente7x",
            icon: "fab fa-spotify"
        },
        {
            name: "Discord",
            url: "https://discord.gg/sahJj245CC",
            icon: "fab fa-discord"
        },
        {
            name: "YouTube",
            url: "https://www.youtube.com/@waffleawt-production",
            icon: "fab fa-youtube"
        }
    ],
    navigation: [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Tools", href: "#tools" },
        { name: "Games", href: "#projects" },
        { name: "Music", href: "#music" },
        { name: "Web", href: "#web" },
        { name: "Services", href: "#services" },
        { name: "Contact", href: "#contact" }
    ],
    hero: {
        title: "WaffleAWT",
        subtitle: "Programmer & Music Producer",
        description: "Welcome to my portfolio! Explore my projects, music, and get in touch.",
        buttons: [
            { text: "View My Projects", href: "#projects" },
            { text: "Listen to My Music", href: "#music" }
        ]
    },
    contactForm: {
        action: "https://formspree.io/f/manqgrdp",
        method: "POST",
        fields: [
            { id: "name", label: "Your Name", type: "text", required: true },
            { id: "email", label: "Your Email", type: "email", required: true },
            { id: "subject", label: "Subject", type: "text", required: true },
            { id: "message", label: "Your Message", type: "textarea", rows: 6, required: true }
        ],
        submitButton: "Send Message"
    }
};

export default siteData; 