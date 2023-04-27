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

inputFile.addEventListener('change', () => {
    const file = inputFile.files[0]
    const reader = new FileReader()

    reader.addEventListener('load', () => {
        inputImg.src = reader.result
    })

    reader.readAsDataURL(file)
})