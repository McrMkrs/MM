// script.js

document.getElementById('toggle-dark-mode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

function showContent(section) {
    const sections = document.querySelectorAll('main section');
    sections.forEach((sec) => {
        sec.style.display = 'none';
    });
    document.getElementById(section).style.display = 'block';
}

// Show home content by default
window.addEventListener('load', () => showContent('home'));
