function registerUser() {
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;
  const confirm = document.getElementById("regConfirm").value;

  // Validation
  if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    return;
  }
  if (password !== confirm) {
    alert("Passwords do not match!");
    return;
  }

  // Get existing users
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if email already exists
  const exists = users.find(u => u.email === email);
  if (exists) {
    alert("This email is already registered.");
    return;
  }

  // Save new user
  users.push({ email: email, password: password });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Account created successfully!");
  window.location.href = "Password.html";
}
