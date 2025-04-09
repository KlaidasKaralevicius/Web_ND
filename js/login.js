function saveLoginInfo() {
    const username = document.getElementById("username").value;
    const email = username + "@gmail.com";
    const password = document.getElementById("password").value;

    localStorage.setItem("user_name", username);
    localStorage.setItem("user_email", email);
    localStorage.setItem("password", password)

    window.location.href = "main.html";
}