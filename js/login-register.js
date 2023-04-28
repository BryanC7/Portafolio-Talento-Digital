// Variables con elementos del DOM
const msgError = document.querySelector('#msgError')
const registerForm = document.querySelector('#register-form')
const loginForm = document.querySelector('#login-form')

// Set time-out para quitar el mensaje de error pasados 3 segundos en formulario login
if(msgError) {
    setTimeout(() => {
        msgError.classList.add('d-none')
    }, 3000)
}