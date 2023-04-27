// Set time-out para quitar el mensaje de error pasados 3 segundos en formulario login
const msgError = document.querySelector('#msgError')
const registerForm = document.querySelector('#register-form')
const loginForm = document.querySelector('#login-form')

if(msgError) {
    setTimeout(() => {
        msgError.classList.add('d-none')
    }, 3000)
}

// if(registerForm) {
//     registerForm.addEventListener('submit', e => {
//         e.preventDefault()
//         registerSuccess()
//     })
// }

// if(loginForm) {
//     loginForm.addEventListener('submit', e => {
//         e.preventDefault()
//         loginSuccess()
//     })
// }

// function loginSuccess() {
//     Swal.fire({
//         position: 'center',
//         icon: 'success',
//         title: 'Inicio de sesión exitoso',
//         showConfirmButton: false,
//         timer: 3000,
//     }).then(result => {
//         if(result.isDismissed) {
//             loginForm.submit()
//         }
//     })
// }

// function registerSuccess() {
//     Swal.fire({
//         position: 'center',
//         icon: 'success',
//         title: 'Registro exitoso',
//         text: 'Ahora puedes iniciar sesión',
//         showConfirmButton: false,
//         timer: 3000,
//     }).then(result => {
//         if(result.isDismissed) {
//             registerForm.submit()
//         }
//     })
// }