const form = document.getElementById('contact-form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let isValid = true;

  // Clear previous errors
  document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const password = document.getElementById('password');

  // Name validation
  if (name.value.trim() === '') {
    showError('name-error', 'Name is required');
    isValid = false;
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email.value.trim())) {
    showError('email-error', 'Enter a valid email');
    isValid = false;
  }

  // Password validation
  if (password.value.length < 6) {
    showError('password-error', 'Password must be at least 6 characters');
    isValid = false;
  }

  if (isValid) {
    alert('✅ Form submitted successfully!');
    form.reset();
  }
});

function showError(id, message) {
  document.getElementById(id).textContent = message;
}
