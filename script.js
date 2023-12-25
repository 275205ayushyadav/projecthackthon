
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
document.querySelector('.rules-button').addEventListener('click', function() {
    window.location.href = 'rules.html';
  });
  

document.querySelector('.location-button').addEventListener('click', function() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log('Latitude:', position.coords.latitude);
        console.log('Longitude:', position.coords.longitude);
        
      }, function(error) {
        console.error('Error getting location:', error.message);
      });
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  });
  document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const slideItems = slides.querySelectorAll('img, iframe');
    const bullets = document.querySelector('.bullets');
    let currentIndex = 0;
  
    slideItems.forEach((_, index) => {
      const bullet = document.createElement('li');
      bullet.classList.add('bullet');
      bullet.addEventListener('click', () => {
        goToSlide(index);
      });
      bullets.appendChild(bullet);
    });
  
    function goToSlide(index) {
      slides.style.transform = `translateX(-${index * 100}%)`;
      currentIndex = index;
      updateBullets();
    }
  
    function updateBullets() {
      const bulletItems = bullets.querySelectorAll('li');
      bulletItems.forEach((bullet, index) => {
        if (index === currentIndex) {
          bullet.classList.add('active');
        } else {
          bullet.classList.remove('active');
        }
      });
    }
  
    function nextSlide() {
      if (currentIndex === slideItems.length - 1) {
        goToSlide(0);
      } else {
        goToSlide(currentIndex + 1);
      }
    }
  
    setInterval(nextSlide, 5000);
  });
  document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
  
    
    cards.forEach(card => {
      card.classList.add(`${getColorClass(card)}-enter`);
    });
  
    
    function getColorClass(card) {
      if (card.classList.contains('upper-left')) return 'red';
      if (card.classList.contains('upper-right')) return 'blue';
      if (card.classList.contains('lower-left')) return 'green';
      if (card.classList.contains('lower-right')) return 'orange';
      return '';
    }
  });
  document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
  
    cards.forEach(card => {
      card.addEventListener('click', function() {
        cards.forEach(c => c.classList.remove('clicked'));
        this.classList.add('clicked');
      });
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.getElementById('submitBtn');
    const userIdDisplay = document.getElementById('userIdDisplay');
    const userIdSpan = document.getElementById('userId');
  
    submitBtn.addEventListener('click', function() {

      const userId = Math.floor(10000000 + Math.random() * 90000000);
      
    
      userIdSpan.textContent = userId;
      userIdDisplay.style.display = 'block';
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.getElementById('submitBtn');
    const userIdDisplay = document.getElementById('userIdDisplay');
    const userIdSpan = document.getElementById('userId');
  
    submitBtn.addEventListener('click', function() {

      const userId = Math.floor(10000000 + Math.random() * 90000000);
      
      
      userIdSpan.textContent = userId;
      userIdDisplay.style.display = 'block';
    });
  
    const trackComplainCard = document.getElementById('trackComplainCard');
    const mainContent = document.querySelector('.main-content');
  
    trackComplainCard.addEventListener('click', function() {
      
      mainContent.scrollIntoView({ behavior: 'smooth' });
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const registerComplainCard = document.getElementById('registerComplainCard');
    const writeComplaintSection = document.getElementById('writeComplaintSection');
  
    registerComplainCard.addEventListener('click', function() {
      writeComplaintSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.getElementById('submitBtn');
    const userIdSpan = document.getElementById('userId');
    const departmentSpan = document.getElementById('department');
  
    const departments = [
      'Department of Energy',
      'Department of Information Technology & Communication',
      'Directorate of Petroleum',
      'Public Works Department',
      'Public Health & Engineering Department',
      'Urban Local Bodies',
      'Urban Development & Housing',
      'Colonization',
      'Mines & Geology',
      'Industries',
      'Factory and Boiler',
      'State Enterprises',
      'State Motor Garage',
      'Civil Aviation',
      'Science and Technology',
      'Environment',
      'Forest',
      'Transport Department'
    ];
  
    let departmentIndex = 0; 
  
    submitBtn.addEventListener('click', function() {
      const userId = Math.floor(10000000 + Math.random() * 90000000);
      
      userIdSpan.textContent = userId;
      
      if (departmentIndex < departments.length) {
        departmentSpan.textContent = departments[departmentIndex];
        departmentIndex++; 
      } else {
        departmentIndex = 0; 
        departmentSpan.textContent = departments[departmentIndex];
        departmentIndex++;
      }

      const userIdDisplay = document.getElementById('userIdDisplay');
      userIdDisplay.style.display = 'block';
    });
  });
  

