// script.js
function handleLogin(event) {
  event.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    alert("Please enter both username and password.");
    return;
  }

  // Simulate phishing -> redirect to awareness page
  window.location.href = "warning.html";
}
