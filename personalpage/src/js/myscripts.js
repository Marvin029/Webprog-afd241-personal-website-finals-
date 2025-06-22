// Get cursor light element
const cursorLight = document.querySelector('.cursor-light');

// Track mouse position and update cursor light
document.addEventListener('mousemove', (e) => {
  if (document.body.classList.contains('dark-mode')) {
    // Show custom cursor only in dark mode
    cursorLight.style.display = 'block';
    
    // Position the flashlight at mouse coordinates
    cursorLight.style.left = e.clientX + 'px';
    cursorLight.style.top = e.clientY + 'px';
    
    // Add subtle movement to make the light feel more natural
    const randomX = Math.random() * 2 - 1; // Random value between -1 and 1
    const randomY = Math.random() * 2 - 1;
    
    // Apply subtle random movement to make light feel more natural
    cursorLight.style.transform = `translate(-50%, -50%) translate(${randomX}px, ${randomY}px)`;
  } else {
    // Hide custom cursor in light mode
    cursorLight.style.display = 'none';
  }
});

// Handle cursor when leaving/entering the window
document.addEventListener('mouseleave', () => {
  cursorLight.style.display = 'none';
});

document.addEventListener('mouseenter', (e) => {
  if (document.body.classList.contains('dark-mode')) {
    cursorLight.style.display = 'block';
  }
});

// Add special effect when hovering over interactive elements
const interactiveElements = document.querySelectorAll('a, button, input, .glass-card');
interactiveElements.forEach(element => {
  element.addEventListener('mouseenter', () => {
    if (document.body.classList.contains('dark-mode')) {
      // Make the light brighter when hovering over interactive elements
      cursorLight.style.background = `radial-gradient(
        circle at center,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(255, 255, 255, 0.25) 20%,
        rgba(255, 255, 255, 0.1) 40%,
        rgba(255, 255, 255, 0.05) 60%,
        rgba(0, 0, 0, 0) 70%
      )`;
    }
  });
  
  element.addEventListener('mouseleave', () => {
    if (document.body.classList.contains('dark-mode')) {
      // Return to normal brightness
      cursorLight.style.background = `radial-gradient(
        circle at center,
        rgba(255, 255, 255, 0.25) 0%,
        rgba(255, 255, 255, 0.15) 20%,
        rgba(255, 255, 255, 0.05) 40%,
        rgba(255, 255, 255, 0.02) 60%,
        rgba(0, 0, 0, 0) 70%
      )`;
    }
  });
});

// Dark mode toggle
document.getElementById("darkModeToggle").addEventListener("change", function () {
  document.body.classList.toggle("dark-mode", this.checked);
  
  // Show/hide custom cursor based on dark mode state
  if (this.checked) {
    cursorLight.style.display = 'block';
  } else {
    cursorLight.style.display = 'none';
  }
});

// Original page functionality
function myFunction() {
  const demo = document.getElementById("demo");
  const p2 = document.getElementById("p2");

  demo.innerHTML = "Paragraph changed.";
  p2.style.color = "cyan";
  p2.style.fontFamily = "Poppins";
  p2.style.fontSize = "larger";
}

function changeHeading() {
  document.getElementById("mainHeading").innerHTML = "Personalized Web Page";
}

function toggleIntro() {
  const intro = document.getElementById("intro");
  intro.style.display = intro.style.display === "none" ? "block" : "none";
}

function showDateTime() {
  const dateTime = new Date();
  document.getElementById("dateTime").innerHTML = dateTime;
}

function updateGoal() {
  const goal = document.getElementById("goalInput").value;
  if (goal) {
    document.getElementById("goalText").innerHTML = goal;
  }
}

function addHobby() {
  const hobbyInput = document.getElementById("newHobby");
  if (hobbyInput.value.trim()) {
    const hobbyList = document.getElementById("hobbyList");
    const newHobby = document.createElement("li");
    newHobby.textContent = hobbyInput.value;
    hobbyList.appendChild(newHobby);
    hobbyInput.value = "";
  }
}