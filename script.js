document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // prevent form from submitting

  // Clear previous messages
  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('messageError').textContent = '';
  document.getElementById('successMessage').textContent = '';

  // Get input values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  let isValid = true;

  // Validate name
  if (name === '') {
    document.getElementById('nameError').textContent = 'Name is required.';
    isValid = false;
  }

  // Validate email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '') {
    document.getElementById('emailError').textContent = 'Email is required.';
    isValid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById('emailError').textContent = 'Enter a valid email.';
    isValid = false;
  }

  // Validate message
  if (message === '') {
    document.getElementById('messageError').textContent = 'Message is required.';
    isValid = false;
  }

  // If all valid, show success
  if (isValid) {
    document.getElementById('successMessage').textContent = 'Message sent successfully!';
    document.getElementById('contactForm').reset();
  }
});
