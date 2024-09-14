// Typing effect for the name
console.log("Hello world");

const text = "Pratham Shetty";
const question = "What do I do?";
const desc="I’m a web developer turning ideas into sleek, interactive websites and apps. With a passion for creativity and the latest tech, I build digital experiences that truly shine."
const work="Let’s make the web a more beautiful, functional, and exciting place, one line of code at a time."
const speed = 150;
const speed3=1;
let i = 0;
let x = 0;
let y=0;
let z=0;
let hasTyped = false;

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
const typedesc=async()=>{
    if(y<desc.length){
        document.getElementById("description").innerHTML+=desc.charAt(y);
        y++;
        setTimeout(typedesc,speed3);
    }
}

// Trigger typing the name on page load
window.onload = typeName;

// Trigger typing the question when the user scrolls down
window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition >= window.innerHeight && !hasTyped) {
        hasTyped = true; // Ensure the typing happens only once
        typeQuestion();
        typedesc();
    }
});

