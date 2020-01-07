class Login {
    constructor() {
        this.initloginModal()
        this.addEventListeners()
        this.loginBTNRef = document.getElementById('loginBTNRef')
    }
    // !! all objects in this container is set to flex-reverse !!
    initloginModal() {
        this.myBody = document.body;
        this.myLogin = document.createElement('div');
        this.myBody.appendChild(this.myLogin);
        this.myLogin.id = 'myLogin';
        this.myLogin.style.display = 'flex';

        this.cancelBtn = document.createElement('button');
        this.myLogin.appendChild(this.cancelBtn);
        this.cancelBtn.innerHTML = 'Cancel';
        this.cancelBtn.style.borderRadius = '3px';
        this.cancelBtn.style.marginTop = '10px';
        this.cancelBtn.style.width = '100%';
        this.cancelBtn.style.color = 'black'
        this.cancelBtn.style.height = '30px';

        this.loginBtn = document.createElement('button');
        this.myLogin.appendChild(this.loginBtn);
        this.loginBtn.innerHTML = 'Login';
        this.loginBtn.style.borderRadius = '3px';
        this.loginBtn.style.marginTop = '20px';
        this.loginBtn.style.width = '100%';
        this.loginBtn.style.background = '#007bff';
        this.loginBtn.style.color = 'white'
        this.loginBtn.style.height = '30px';

        this.passwordInput = document.createElement('input');
        myLogin.appendChild(this.passwordInput);
        this.passwordInput.type = 'password';
        this.passwordInput.value = 'Password';
        this.passwordInput.name = 'password:';
        this.passwordInput.style.height = '20px';
        this.passwordInput.style.width = '96%';
        this.passwordInput.className = 'input';
        this.passwordInput.style.borderColor = 'white';

        var passwordText = document.createElement('p');
        passwordText.innerHTML = 'Password:';
        this.myLogin.appendChild(passwordText);
        passwordText.style.margin = '0';
        passwordText.style.marginTop = '4px';

        this.userInput = document.createElement('input');
        this.myLogin.appendChild(this.userInput);
        this.userInput.type = 'e-mail';
        this.userInput.value = 'enter e-mail'
        this.userInput.name = 'e-mail';
        this.userInput.style.height = '20px';
        this.userInput.style.width = '96%';
        this.userInput.className = 'input';
        this.userInput.style.borderColor = 'white';

        var userText = document.createElement('p');
        userText.innerHTML = 'E-mail:';
        userText.style.margin = '0';
        this.myLogin.appendChild(userText);
    }

    addEventListeners() {
        this.userInput.addEventListener('click', () => {
            this.userInput.value = '';
        })

        this.passwordInput.addEventListener('click', () => {
            this.passwordInput.value = '';
        })

        this.loginBtn.addEventListener('click', () => {
            this.userInput.style.borderColor = 'white';
            this.passwordInput.style.borderColor = 'white';
            this.checkForm()
        })

        this.cancelBtn.addEventListener('click', () => {
            this.myBody.removeChild(this.myLogin)
            //this.loginrefBtn.addEventListener('click', login)
        })
    }

    checkForm() {
        var atSign = /[@]/
        if (!atSign.test(this.userInput.value)) {
            alert("Error: email has to consist of a @!");
            this.userInput.focus();
            this.userInput.style.borderColor = 'red';
            return false;
        }
        var needNumber = /[0-9]/;
        if (!needNumber.test(this.passwordInput.value)) {
            alert("Error: password must consist of atleast 1 letter & 1 character!");
            this.passwordInput.focus();
            this.passwordInput.style.borderColor = 'red';
            return false;
        }
        var needNumber = /[a-z]/;
        if (!needNumber.test(this.passwordInput.value)) {
            alert("Error: password must consist of atleast 1 letter & 1 character!");
            this.passwordInput.focus();
            return false;
        }
        /* acceptedUsers = fetch('https://jsonplaceholder.typicode.com/users/');
        if (!acceptedUsers.test(userInput.value)) {
            alert("Welcome user!");
            userInput.focus();
            return true;
        } */
    }
}










