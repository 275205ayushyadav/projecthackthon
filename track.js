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
function submitApplicationId() {
    // Get the application ID from the input field
    const applicationId = document.querySelector(".num").value;
  
    // Define the data object containing applicant information
    const applicantData = {
      4589: {
        name: "Rohit Kumar",
        department: "Electrical",
        registrationDate: "23/10/2023",
        status: "Application Approved"
      },
      5896: {
        name: "Mohit Kumar",
        department: "Cyber Security Department",
        registrationDate: "21/01/2023",
        status: "Paper Submission"
      },
      1256: {
        name: "Ankit Kumar",
        department: "Finance Department",
        registrationDate: "13/05/2023",
        status: "Sucess"
      },
      6696: { // duplicate id
        name: "Saloni Kumari",
        department: "Chemical Department",
        registrationDate: "11/02/2023",
        status: "Paper Submission"
      },
    };
  
    // Check if the application ID is valid
    if (!applicantData[applicationId]) {
      alert("Invalid application ID!");
      return;
    }
  
    // Get the applicant information based on the ID
    const applicant = applicantData[applicationId];
  
    // Update the UI with the applicant information
    document.querySelector(".details").innerHTML = `
      <div class="d-table-row">
        <div class="d-table-cell">Name:</div>
        <div class="d-table-cell">${applicant.name}</div>
      </div>
      <div class="d-table-row">
        <div class="d-table-cell">Department:</div>
        <div class="d-table-cell">${applicant.department}</div>
      </div>
      <div class="d-table-row">
        <div class="d-table-cell">Registration Date:</div>
        <div class="d-table-cell">${applicant.registrationDate}</div>
      </div>
      <div class="d-table-row">
        <div class="d-table-cell">Status :</div>
        <div class="d-table-cell">${applicant.status}</div>
      </div>`;
  }
  
  // Add event listener to the submit button
  document.querySelector(".close").addEventListener("click", submitApplicationId);
  


//   function updateProgressBar(applicationId) {
//     // Define the progress bar steps and their corresponding application IDs
//     const progressSteps = {
//       "Aplication Approved": [4589],
//       "In Process": [5896],
//       "Paper Submission": [1256, 5896], // Duplicate ID handled by considering first occurrence
//       "Sucess": [],
//     };
  
//     // Get the current progress bar steps
//     const steps = document.querySelectorAll("#progressbar li");
  
//     // Reset all steps to inactive
//     steps.forEach((step) => step.classList.remove("active"));
  
//     // Find the matching progress step for the given application ID
//     const matchingStep = Object.entries(progressSteps).find(([stepName, ids]) => ids.includes(applicationId));
  
//     if (!matchingStep) {
//       // No matching step found, so do nothing
//       return;
//     }
  
//     // Get the index of the matching step
//     const stepIndex = progressSteps.keys().indexOf(matchingStep[0]);
  
//     // Activate all steps up to and including the matching step
//     for (let i = 0; i <= stepIndex; i++) {
//       steps[i].classList.add("active");
//     }
  
//     // Add green color to the active steps
//     const activeSteps = document.querySelectorAll("#progressbar li.active");
//     activeSteps.forEach((step) => step.style.backgroundColor = "blue");
//   }
  
//   // Add event listener to the submit button
//   document.querySelector(".close").addEventListener("click", () => {
//     const applicationId = document.querySelector(".num").value;
//     updateProgressBar(applicationId);
//   });
  