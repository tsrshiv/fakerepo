function redirectToSignup() {
    window.location.href = "signup.html";
}

function redirectToLogin() {
    window.location.href = "index.html";
}

// Create - Signup Function
async function signup() {
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    try {
        const response = await fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password }),
        });

        const data = await response.json();
        if (response.ok) {
            alert(data.message);
            window.location.href = "index.html"; // Redirect to login
        } else {
            alert(data.error);
        }
    } catch (err) {
        alert("Error signing up");
    }
}

// Read - Login Function
async function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    try {
        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        if (response.ok) {
            alert(data.message);
            localStorage.setItem("authToken", data.token);
        } else {
            alert(data.error);
        }
    } catch (err) {
        alert("Error logging in");
    }
}

// Delete Function
async function deleteUser() {
    const email = document.getElementById('deleteEmail').value;

    try {
        const response = await fetch('http://localhost:5000/delete', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email }),
        });

        const data = await response.json();
        if (response.ok) {
            alert(data.message);
        } else {
            alert(data.error);
        }
    } catch (err) {
        alert("Error deleting user");
    }
}

// Read Function - Get User Details
async function getUser() {
    const email = document.getElementById('getEmail').value;

    try {
        const response = await fetch(`http://localhost:5000/user/${email}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });

        const data = await response.json();
        if (response.ok) {
            alert(`User found: ${JSON.stringify(data)}`);
        } else {
            alert(data.error);
        }
    } catch (err) {
        alert("Error fetching user");
    }
}
