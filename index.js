console.log("Hello world");

const text = "Pratham Shetty";
const question = "What do I do?";
const desc = "I’m a web developer turning ideas into sleek, interactive websites and apps. With a passion for creativity and the latest tech, I build digital experiences that truly shine.";
const work = "Let’s make the web a more beautiful, functional, and exciting place, one line of code at a time.";

// Typing speed and font size adjusted based on screen size
let speed = window.innerWidth < 768 ? 200 : 150; // Slower speed for smaller screens
let descSpeed = window.innerWidth < 768 ? 2 : 1; // Adjusted speed for description
let i = 0, x = 0, y = 0;
let hasTyped = false;

// Adjust font sizes for mobile vs desktop
if (window.innerWidth < 768) {
    document.getElementById("Name").style.fontSize = "50px"; // Smaller font size for mobile
    document.getElementById("about").style.fontSize = "1.5em";
    document.getElementById("description").style.fontSize = "1.2em";
} else {
    document.getElementById("Name").style.fontSize = "130px"; // Default size for larger screens
    document.getElementById("about").style.fontSize = "2em";
    document.getElementById("description").style.fontSize = "1.5em";
}

// Function for typing the name
const typeName = () => {
    if (i < text.length) {
        document.getElementById("Name").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeName, speed);
    } else {
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
const typedesc = async () => {
    if (y < desc.length) {
        document.getElementById("description").innerHTML += desc.charAt(y);
        y++;
        setTimeout(typedesc, descSpeed);
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
        typedesc();
    }
});
