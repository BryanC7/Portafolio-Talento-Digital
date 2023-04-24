// Set time-out para quitar el mensaje de error pasados 3 segundos en formulario login
setTimeout(() => {
    document.querySelector('#msgError').classList.add('d-none')
}, 3000)