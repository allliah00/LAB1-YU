// Display the current year
const year = new Date().getFullYear();
document.getElementById("year").textContent = year;


// Welcome message
function showMessage() {
    alert("Welcome to my portfolio! Thank you for visiting.");
}

const welcomeButton = document.getElementById("welcomeButton");

welcomeButton.addEventListener("click", function () {
    showMessage();
});


// Simple project interaction
const projects = document.querySelectorAll("article");

projects.forEach(function (project) {
    project.addEventListener("click", function () {
        project.style.transform = "scale(1.02)";

        setTimeout(function () {
            project.style.transform = "scale(1)";
        }, 200);
    });
});


// Highlight the current section's nav link while scrolling
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-link");

const highlightNav = () => {
    let currentId = sections[0].id;

    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120) {
            currentId = section.id;
        }
    });

    navLinks.forEach((link) => {
        link.classList.toggle(
            "is-active",
            link.getAttribute("href") === `#${currentId}`
        );
    });
};

window.addEventListener("scroll", highlightNav);
highlightNav();