document.getElementById('profile-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const profilePic = document.getElementById('profile-pic').files[0];
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const address = document.getElementById('address').value;

    if (profilePic) {
        const reader = new FileReader();
        reader.onload = function (event) {
            localStorage.setItem('profilePic', event.target.result); 
        };
        reader.readAsDataURL(profilePic);
    }

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('address', address);


    window.location.href = 'index.html';
});
const sidenav = document.querySelector('.sidenav');
const toggleBtn = document.querySelector('.hamburger');
const pageTitle = document.querySelector('.page-title');

toggleBtn.addEventListener('click', () => {
    sidenav.classList.toggle('hidden');
});

function setPageTitle(title) {
    pageTitle.textContent = title;
}
const navLinks = document.querySelectorAll('.sidenav-list a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        setPageTitle(link.textContent);
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const storedProfilePic = localStorage.getItem('profilePic');
    const storedUsername = localStorage.getItem('username');

    const profilePicElement = document.querySelector('.sidenav-header img');
    if (storedProfilePic) {
        profilePicElement.src = storedProfilePic; 
    }

    const usernameElement = document.querySelector('.sidenav-header span');
    if (storedUsername) {
        usernameElement.textContent = storedUsername; 
    }
});