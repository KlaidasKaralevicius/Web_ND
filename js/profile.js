const username = localStorage.getItem("user_name") || "MusicIO";
const email = localStorage.getItem("user_email") || "musicIO@gmail.com";

// replace content
document.getElementById("profile-username").textContent = username;
document.getElementById("profile-email").textContent = email;