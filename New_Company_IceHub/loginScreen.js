function loginUser() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  // Retrieve saved users from localStorage
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Find matching account
  const match = users.find(u => u.email === email && u.password === password);

  if (match) {
    alert("Login successful!");
 
    window.location.href = "New Main.html";
  } else {
    alert("Invalid email or password.");
  }
}
