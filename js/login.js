function saveLoginInfo() {
    const username = document.getElementById("username").value;
    const email = username + "@gmail.com";

    localStorage.setItem("user_name", username);
    localStorage.setItem("user_email", email);

    window.location.href = "main.html";
}