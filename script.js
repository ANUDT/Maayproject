const panels = document.querySelectorAll ('.panel')

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    removeActiveClasses()
panel.classList.add('active')
})
})

function removeActiveClasses (){
    panels.forEach(panel => {
      panel.classList.remove('active')
        })
    }

    // script.js
function displayGreeting() {
  const now = new Date();
  const hours = now.getHours();
  let greetingMessage;

  if (hours < 12) {
      greetingMessage = "Good morning!";
  } else if (hours < 18) {
      greetingMessage = "Good afternoon!";
  } else {
      greetingMessage = "Good evening!";
  }

  document.getElementById("greeting").textContent = greetingMessage;
}

// script.js
function validateForm() {
  // Get the form elements
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  
  // Get the error display elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  
  // Reset previous errors
  nameError.style.display = "none";
  emailError.style.display = "none";
  messageError.style.display = "none";
  
  // Simple validation checks
  let isValid = true;
  
  // Validate name
  if (name === "") {
      nameError.textContent = "Please enter your name.";
      nameError.style.display = "block";
      isValid = false;
  }
  
  // Validate email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
      emailError.textContent = "Please enter your email.";
      emailError.style.display = "block";
      isValid = false;
  } else if (!emailPattern.test(email)) {
      emailError.textContent = "Please enter a valid email address.";
      emailError.style.display = "block";
      isValid = false;
  }
  
  // Validate message
  if (message === "") {
      messageError.textContent = "Please enter your message.";
      messageError.style.display = "block";
      isValid = false;
  }
  
  // If the form is valid, display success message
  if (isValid) {
      const successMessage = document.getElementById("successMessage");
      successMessage.textContent = "Thank you for contacting us! We will get back to you soon.";
      successMessage.style.display = "block";
      
      // Reset the form after showing success
      document.getElementById("contactForm").reset();
  }
  
  // Prevent form submission (for demo purposes)
  return false;
}
