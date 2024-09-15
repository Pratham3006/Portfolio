// Typing effect for the name
console.log("Hello world");

const text = "Pratham Shetty";
const question = "What do I do?";
const desc = "I'm a front-end developer passionate about crafting sleek, interactive websites and apps. While I specialize in bringing designs to life with modern tech, I'm steadily expanding my backend skills to build more complete digital experiences.";
const speed = 150;
const speed3 = 1;
let i = 0;
let x = 0;
let y = 0;
let hasTyped = false;
const audio = document.getElementById("audio");

// Function for typing the name
const typeName = () => {
    if (i == 0 && audio) {
        audio.play().catch(e => console.error('Error playing audio:', e));
    }
    if (i < text.length) {
        document.getElementById("Name").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeName, speed);
    } else if (audio) {
        audio.pause();
        audio.currentTime = 0;
        document.getElementById("Name").innerHTML += '<span class="blinking-cursor"></span>';
    }
};
// Function for typing the question
const typeQuestion = () => {
    if (x < question.length) {
        document.getElementById("about").innerHTML += question.charAt(x);
        x++;
        setTimeout(typeQuestion, speed);
    }
};

// Function for typing the description
const typeDesc = () => {
    if (y < desc.length) {
        document.getElementById("description").innerHTML += desc.charAt(y);
        y++;
        setTimeout(typeDesc, speed3);
    }
};

// Trigger typing the name on page load
window.onload = typeName;

// Trigger typing the question and description when the user scrolls down
window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition >= window.innerHeight && !hasTyped) {
        hasTyped = true; // Ensure the typing happens only once
        typeQuestion();
        typeDesc();
    }
});

// Intersection Observer for card animations
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll(".card"); // Fixed selector to .card
    const mailButton = document.getElementById("Mail");
    if (mailButton) {
        mailButton.addEventListener("click", () => {
            const recipient = "Prathamshetty71@gmail.com"; // Your email address
            const subject = "Subject of the Email";
            const body = "Hello, this is the body of the email.";
            
            // Create Gmail compose URL
            const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            
            // Open Gmail compose in a new tab
            window.open(gmailComposeUrl, '_blank');
        });
    } else {
        console.error("Element with ID 'Mail' not found");
    }
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    cards.forEach(card => {
        observer.observe(card);
    });
});
