// function storeEmailAndPassword() {
//     // Get the entered email value
//     var email = document.getElementById("int").value;

//     // Check if the email is not empty
//     if (email.checkValidity() != "true") {
//         // Store the email in local storage
//         localStorage.setItem("userEmail", email);
//         redirectToPasswordPage()
        
//     } else {
//         alert("Please enter a valid email address.");
//     }
// }
// function redirectToPasswordPage() {
//     //Add your logic here if needed
//     //For now, simply redirect to the password.html page
//     alert("Button clicked! Add your custom functionality here.");
//     window.location.href = "password.html";
// }
// 
function handleFormSubmission(event) {
    // Prevent the form from submitting normally (which would cause a page reload)
    event.preventDefault();

    // Get the entered email value
    var email = document.getElementById("email").value;

    // Check if the email is not empty
    if (email.trim() != "") {
        // Store the email in local storage
        localStorage.setItem("userEmail", email);

        // Redirect to the password.html page or perform other actions as needed
        window.location.href = "password.html";
    } else {
        alert("Please enter a valid email address.");
    }
}
function register() {
    var username = document.getElementById('registerUsername').value;
    var password = document.getElementById('registerPassword').value;

    // Check if the username or password is empty
    if (email.trim() == "" || password.trim() == "") {
        alert('Please enter both username and password.');
        return;
    }

    // Check if the username already exists in local storage
    if (localStorage.getItem(username)) {
        alert('Username already exists. Please choose a different one.');
        return;
    }

    // Store the registration information in local storage
    localStorage.setItem(username, password);

    alert('Registration successful');
    showLoginForm();
}
function showRegistrationForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registrationForm').style.display = 'block';
}

function showLoginForm() {
    document.getElementById('registrationForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
    window.location.href="sign up.html"
}

function mySubmitFunction(e) {
    e.preventDefault();
    someBug();
    return false;
}

function login() {
    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;

    // Simulate local storage check (replace this with server-side authentication)
    var storedUsername = localStorage.getItem('username');
    var storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        window.location.href = 'home.html';

    } else {
        alert('Invalid username or password');
    }
}


function register() {
    var username = document.getElementById('registerEmailid').value;
    var password = document.getElementById('registerPassword').value;

    // Simulate local storage registration (replace this with server-side registration)
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Registration successful');
    showLoginForm();
}