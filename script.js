// Display the current year
const year = new Date().getFullYear();

document.getElementById("year").textContent = year;


// Welcome message
function showMessage() {
    alert("Welcome to my portfolio! Thank you for visiting.");
}


// Change button text when clicked
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