const allowedUsers = [
    { email: "dinmail@gmail.com", password: "1234" },
    { email: "test@test.com", password: "test123" },
    { email: "bruger@bruger.dk", password: "bruger123" }
];

function validateLogin() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    
    for (let i = 0; i < allowedUsers.length; i++) {
        const user = allowedUsers[i];
        
        if (email === user.email && password === user.password) {
            window.location.href = 'index.html';
            return; 
        }
    }

    
    alert("Forkert e-mail eller adgangskode. Prøv igen.");
}

function registerAlert() {
    alert("E-mail findes allerede");
}

