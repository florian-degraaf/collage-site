window.addEventListener("scroll", function() {circleScroll(), scrollProgress()});
window.addEventListener("resize", function() {windowHeight()});

var darkModeBtn = document.getElementById("dark-mode-btn");
var circle = document.getElementById("circle");
var scrollProgressBar = document.getElementById("scroll-progress");

function darkModeToggle () {
    document.body.classList.toggle("dark-mode");
    darkModeBtn.classList.toggle("button");
}

function circleScroll() {
    circle.style.transform = "rotate("+scrollY/2+"deg)";
}

// Calculates the height of the body minus the window height
function windowHeight() {
    const heightBody = document.body.offsetHeight;
    const heightWindow = window.innerHeight;
    var scrollHeight = heightBody - heightWindow;
    return scrollHeight;
}

// Calculates the remaining scroll progress (top of window in corrolation to top of body)
function scrollProgress() {
    var scrollRemaining = scrollY/windowHeight()*100;
    scrollProgressBar.style.width = scrollRemaining + "%";   
}