document.querySelector(".form-btn").addEventListener("click", function (e) {
    e.preventDefault(); // Prevent form from submitting and reloading the page

    // Get email and password input values
    const email = document.querySelector(".input[type='email']").value;
    const password = document.querySelector(".input[type='password']").value;

    // Hardcoded credentials
    if (email === "admin@123" && password === "admin@321") {
        // Redirect to nextpage.html
        window.location.href = "backend4bro.html";
    } else {
        // Show an error message
        alert("Invalid email or password. Please try again.");
    }
});
