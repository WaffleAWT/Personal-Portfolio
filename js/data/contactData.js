// Contact section data
const contactData = {
    title: "Get In Touch",
    description: "Feel free to reach out for collaborations, questions, or just to say hello!",
    email: "waffleawt@gmail.com",
    socialMedia: [
        {
            name: "GitHub",
            icon: "fab fa-github",
            url: "https://github.com/WaffleAWT"
        },
        {
            name: "Itch.io",
            icon: "fab fa-itch-io",
            url: "https://waffleawt.itch.io/"
        },
        {
            name: "Twitter",
            icon: "fab fa-twitter",
            url: "https://twitter.com/WaffleAWT"
        },
        {
            name: "Instagram",
            icon: "fab fa-instagram",
            url: "https://www.instagram.com/waffleawt/"
        },
        {
            name: "LinkedIn",
            icon: "fab fa-linkedin",
            url: "https://www.linkedin.com/in/ali-najjar-b1b5b5237/"
        }
    ],
    formFields: [
        {
            type: "text",
            id: "name",
            name: "name",
            placeholder: "Your Name",
            required: true
        },
        {
            type: "email",
            id: "email",
            name: "email",
            placeholder: "Your Email",
            required: true
        },
        {
            type: "text",
            id: "subject",
            name: "subject",
            placeholder: "Subject",
            required: true
        },
        {
            type: "textarea",
            id: "message",
            name: "message",
            placeholder: "Your Message",
            required: true,
            rows: 5
        }
    ],
    submitButton: {
        text: "Send Message",
        icon: "fas fa-paper-plane"
    }
};

export default contactData; 