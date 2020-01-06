class Login {
    constructor() {
        this.initloginModal()
    }

    initloginModal() {
        this.myBody = document.body;
        this.myLogin = document.createElement('div');
        this.myBody.appendChild(this.myLogin);
        this.myLogin.id = 'myLogin';
        this.myLogin.style.display = 'flex';

        this.loginBtn = document.createElement('button');
        this.myLogin.appendChild(this.loginBtn);
        this.loginBtn.innerHTML = 'Cancel';
        this.loginBtn.style.borderRadius = '3px';
        this.loginBtn.style.marginTop = '10px';
        this.loginBtn.style.width = '100%';
        this.loginBtn.style.color = 'black'
        this.loginBtn.style.height = '30px';
        this.loginBtn.addEventListener('click', function () {
            this.myBody.removeChild(this.myLogin)
            this.loginrefBtn.addEventListener('click', login)
        })

        var loginBtn = document.createElement('button');
        myLogin.appendChild(loginBtn);
        loginBtn.innerHTML = 'Login';
        loginBtn.style.borderRadius = '3px';
        loginBtn.style.marginTop = '25px';
        loginBtn.style.width = '100%';
        loginBtn.style.background = '#007bff';
        loginBtn.style.color = 'white'
        loginBtn.style.height = '30px';
        loginBtn.addEventListener('click', function () {
            userInput.style.borderColor = 'white';
            passwordInput.style.borderColor = 'white';
            checkForm()
            loginrefBtn.addEventListener('click', login)
        })

        // New password-input
        var passwordInput = document.createElement('input');
        myLogin.appendChild(passwordInput);
        passwordInput.type = 'password';
        passwordInput.value = 'Password';
        passwordInput.name = 'password:';
        passwordInput.style.width = '166px';
        passwordInput.className = 'input';
        passwordInput.style.borderColor = 'white';
        passwordInput.addEventListener('click', function () {
            passwordInput.value = '';
        })
        var passwordText = document.createElement('p');
        passwordText.innerHTML = 'Password:';
        myLogin.appendChild(passwordText);
        passwordText.style.margin = '0';
        passwordText.style.marginTop = '7px';

        // New e-mail input
        var userInput = document.createElement('input');
        myLogin.appendChild(userInput);
        userInput.type = 'e-mail';
        userInput.value = 'enter e-mail'
        userInput.name = 'e-mail';
        userInput.style.width = '166px';
        userInput.className = 'input';
        userInput.style.borderColor = 'white';
        userInput.addEventListener('click', function () {
            userInput.value = '';
        })
        var userText = document.createElement('p');
        userText.innerHTML = 'E-mail:';
        userText.style.margin = '0';
        myLogin.appendChild(userText);
    }
}


// !! all objects in this container is set to flex-reverse !!
// Create new Container for login objects


// Login-button


loginrefBtn.removeEventListener('click', login)

function checkForm() {
    atSign = /[@]/
    if (!atSign.test(userInput.value)) {
        alert("Error: email has to consist of a @!");
        userInput.focus();
        userInput.style.borderColor = 'red';
        return false;
    }
    needNumber = /[0-9]/;
    if (!needNumber.test(passwordInput.value)) {
        alert("Error: password must consist of atleast 1 letter & 1 character!");
        passwordInput.focus();
        passwordInput.style.borderColor = 'red';
        return false;
    }
    needNumber = /[a-z]/;
    if (!needNumber.test(passwordInput.value)) {
        alert("Error: password must consist of atleast 1 letter & 1 character!");
        passwordInput.focus();
        return false;
    }
    acceptedUsers = fetch('https://jsonplaceholder.typicode.com/users/');
    if (!acceptedUsers.test(userInput.value)) {
        alert("Welcome user!");
        userInput.focus();
        return true;
    }
}