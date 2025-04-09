// Initialize profile info from local storage
let username = localStorage.getItem("user_name") || "MusicIO";
let email = localStorage.getItem("user_email") || "musicIO@gmail.com";
let password = localStorage.getItem("password") || "defaultPassword"; // Default if none exists

document.getElementById("profile-username").textContent = username;
document.getElementById("profile-email").textContent = email;

// Helper function for messages
function showMessage(elementId, message, isError = false) {
  const element = document.getElementById(elementId);
  element.textContent = message;
  element.style.color = isError ? 'red' : 'green';
  setTimeout(() => element.textContent = '', 3000);
}

// Name change form (no password needed)
document.querySelector('form:nth-of-type(1)').addEventListener('submit', function(e) {
  e.preventDefault();
  const newName = document.getElementById('nameChange').value.trim();
  
  if (newName) {
    username = newName;
    localStorage.setItem("user_name", username);
    document.getElementById("profile-username").textContent = username;
    document.getElementById('nameChange').value = '';
    showMessage('nameChange-message', 'Username updated successfully!');
  } else {
    showMessage('nameChange-message', 'Please enter a valid username', true);
  }
});

// Password change form
document.querySelector('form:nth-of-type(2)').addEventListener('submit', function(e) {
  e.preventDefault();
  const newPass = document.getElementById('changePass').value;
  const confirmPass = document.getElementById('changePassSecond').value;
  const currentPass = document.getElementById('changePassConfirm').value;
  const storedPassword = localStorage.getItem("password") || password;
  
  if (currentPass !== storedPassword) {
    showMessage('passwordChange-message', 'Incorrect current password', true);
    return;
  }
  
  if (newPass !== confirmPass) {
    showMessage('passwordChange-message', 'New passwords do not match', true);
    return;
  }
  
  if (newPass.length < 6) {
    showMessage('passwordChange-message', 'Password must be at least 6 characters', true);
    return;
  }
  
  password = newPass;
  localStorage.setItem("password", password);
  document.getElementById('changePass').value = '';
  document.getElementById('changePassSecond').value = '';
  document.getElementById('changePassConfirm').value = '';
  showMessage('passwordChange-message', 'Password updated successfully!');
});

// Email change form (now checks updated password)
document.querySelector('form:nth-of-type(3)').addEventListener('submit', function(e) {
  e.preventDefault();
  const newEmail = document.getElementById('changeEmail').value.trim();
  const currentPass = document.getElementById('changeEmailPass').value;
  const storedPassword = localStorage.getItem("password") || password;
  
  if (currentPass !== storedPassword) {
    showMessage('emailChange-message', 'Incorrect password', true);
    return;
  }
  
  if (!newEmail.includes('@') || !newEmail.includes('.')) {
    showMessage('emailChange-message', 'Please enter a valid email', true);
    return;
  }
  
  email = newEmail;
  localStorage.setItem("user_email", email);
  document.getElementById("profile-email").textContent = email;
  document.getElementById('changeEmail').value = '';
  document.getElementById('changeEmailPass').value = '';
  showMessage('emailChange-message', 'Email updated successfully!');
});