// Set time-out para quitar el mensaje de error pasados 3 segundos en formulario login
const msgError = document.querySelector('#msgError')

if(msgError) {
    setTimeout(() => {
        msgError.classList.add('d-none')
    }, 3000)
}