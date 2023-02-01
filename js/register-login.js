const users = [
    {email: 'bryan@correo.com', username: 'bryan', password: '123456', id: 1},
    {email: 'pablo@correo.com', username: 'pablo', password: '789012', id: 2},
    {email: 'christopher@correo.com', username: 'christopher', password: '654321', id: 3}
]

// Buttons
const btnLogin = document.querySelector('#btn-login')
const btnRegister = document.querySelector('#btn-register')

// Another elements
const modalLogin = document.querySelector('#modal-login')
const body = document.querySelector('#body')

// Inputs
const loginEmail = document.querySelector('#login-email')
const loginPassword = document.querySelector('#login-password')
const registerUsername = document.querySelector('#register-username')
const registerEmail = document.querySelector('#register-email')
const registerPassword = document.querySelector('#register-password')
const registerRepeatPassword = document.querySelector('#register-repeat-password')

// Events
btnLogin.addEventListener('click', login)

function login() {
    const findUser = users.filter(user => {
        if(loginEmail.value === user.email && loginPassword.value === user.password) {
            modalLogin.style.display = 'none'
            body.style = 'none'
            const shadow = document.querySelector('.modal-backdrop')
            if(shadow) {
                shadow.remove()
            }
        }
    })
    console.log('Has ingresado a tu cuenta correctamente')
}