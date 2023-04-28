// Variables con elementos del DOM
const inputs = document.querySelectorAll('form input')
const btnForm = document.querySelector('[type="submit"]')

// Objeto con los datos de la tarjeta
const dataForm = {
    name: '',
    lastName: '',
    email: '',
    password: ''
}

// Expresiones regulares
const expressions = {
    name: /^[a-zA-ZÀ-ÿ\s]{3,20}$/, 
	lastName: /^[a-zA-ZÀ-ÿ\s]{3,20}$/, 
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	password: /^.{4,12}$/, 
}

// Cuando carga el sitio web checkea el objeto con datos 
document.addEventListener('DOMContentLoaded', checkObj)

// A cada input se le da el evento para validar después de salir del input
inputs.forEach(input => {
    input.addEventListener('input', validations)
})



function validations(e) {
    switch (e.target.name) {
        case "name":
            validateField(expressions.name, e.target)
        break
		case "lastName":
			validateField(expressions.lastName, e.target)
		break
        case "email":
            validateField(expressions.email, e.target)
        break
		case "password":
			validateField(expressions.password, e.target)
		break
	}
}

// Si el campo pasa o no la validación con la expresión regular se le da ciertas clases
function validateField(expression, input) {
    if(!expression.test(input.value) || input.value === ''){
        input.classList.remove('border-success')
		input.classList.add('border', 'border-danger')
        dataForm[input.name] = ''
        checkObj()
        return
	} else {
        input.classList.remove('border-danger')
		input.classList.add('border', 'border-success')
        dataForm[input.name] = input.value.trim().toLowerCase()
        checkObj()
	}
}

// Función donde se checkea cada cambio al objeto, cuando el objeto esté lleno se libera el botón para poder realizar el registro del pedido
function checkObj() {
    if(Object.values(dataForm).includes('')) {
        btnForm.disabled = true
        return
    } 
    btnForm.disabled = false
}