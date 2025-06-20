
    function handleLogin(event) {
      event.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      if (email && password.length >= 6) {
        alert(`Welcome, ${email.split('@')[0]}!`);
      } else {
        alert("Please enter valid credentials.");
      }
    }

    function showSection(id) {
      const sections = document.querySelectorAll('.home-section, .login-section, .profile-section, .transaction-section, .contact-section');
      sections.forEach(sec => sec.style.display = 'none');
      document.getElementById(id).style.display = 'block';
    }
 