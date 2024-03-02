document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
    
    // Get the username and password values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Check if the username and password are correct
    if (username === "user" && password === "password") {
      alert("Login successful!");
    } else {
      alert("Invalid username or password!");
    }
  });
  