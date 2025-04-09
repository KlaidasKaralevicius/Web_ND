const username = localStorage.getItem("user_name") || "MusicIO";
const email = localStorage.getItem("user_email") || "musicIO@gmail.com";
const password = localStorage.getItem("password");

// replace content
document.getElementById("profile-username").textContent = username;
document.getElementById("profile-email").textContent = email;