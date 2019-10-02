// usernameTextbox = 'form#login_form table.login input#username'
// passwordTextbox = 'form#login_form table.login input#password'
// loginButton = 'form#login_form table.login input#login'
// forgotPasswordLink = 'form#login_form table.login div.login_forgot>a'
// registerLink = 'form#login_form table.login td.login_register>a'

const LoginPageObjects = {
    usernameTextbox = "[id='username'][name='username'][type='text']",
    passwordTextbox = "[id='password'][name='password'][type='password']",
    loginButton = "[id='login'][name='login'][type='Submit']",
    forgotPasswordLink = "[href='ForgotPassword.php'][text()='Forgot Password?']",
    registerLink = "[href='Register.php'][text()='New User Register Here']"
}


function loginExistingUser(username, password) {
    inputTextElement(LoginPageObjects.usernameTextbox, username)
    inputTextElement(LoginPageObjects.passwordTextbox, password)
    clickOnElement(LoginPageObjects.loginButton)
}

function clickRegisterNewUserLink() {
    clickOnElement(LoginPageObjects.registerLink)
}

function clickForgotPasswordLink() {
    clickOnElement(LoginPageObjects.forgotPasswordLink)
}