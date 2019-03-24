window.addEventListener('DOMContentLoaded', () => {
    [...document.querySelectorAll("li")]
        .forEach((li, index) => {
            li.style.animationDelay = `${index * 0.25}s`;
        }); 
});