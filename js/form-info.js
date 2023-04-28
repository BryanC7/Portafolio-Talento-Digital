// Variables con elementos del DOM
const editForm = document.querySelector('#edit-form')
const inputName = document.querySelector('#name')
const inputLastName = document.querySelector('#last-name')
const inputEmail = document.querySelector('#email')
const inputPassword = document.querySelector('#password')
const inputImg = document.querySelector('#img-profile')
const inputFile = document.querySelector('#image')

function loadInfo(name, lastName, email, password, img) {
    inputName.value = name
    inputLastName.value = lastName
    inputEmail.value = email
    inputPassword.value = password
    inputImg.src = img
}

// Evento que al seleccionar una imágen con el input file cambie de forma dinámica en el div donde se encuentre.
inputFile.addEventListener('change', () => {
    const file = inputFile.files[0]
    const reader = new FileReader()

    reader.addEventListener('load', () => {
        inputImg.src = reader.result
    })

    reader.readAsDataURL(file)
})

// Evento para evitar el submit del formulario y activar la alerta
editForm.addEventListener('submit', e => {
    e.preventDefault()
    saveSuccess()
})

function saveSuccess() {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Información actualizada correctamente, no olvides tus nuevas credenciales para iniciar sesión',
        showConfirmButton: false,
        timer: 5000,
    }).then(result => {
        if(result.isDismissed) {
            editForm.submit()
        }
    })
}