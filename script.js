//your JS code here. If required.
window.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const rememberCheckbox = document.getElementById('checkbox');
  const existingBtn = document.getElementById('existing');

  // Check localStorage and show "existing user" button if credentials exist
  const savedUsername = localStorage.getItem('username');
  const savedPassword = localStorage.getItem('password');

  if (savedUsername && savedPassword) {
    existingBtn.style.display = 'inline-block';
  }

  // Form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    alert(`Logged in as ${username}`);

    if (rememberCheckbox.checked) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
    } else {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    }
  });

  // Login as existing user
  existingBtn.addEventListener('click', () => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      alert(`Logged in as ${storedUsername}`);
    }
  });
});
