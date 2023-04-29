// Variables
const form = document.querySelector('#contact-form')
const inputs = document.querySelectorAll('#contact-form input')

// Expresiones regulares para validar inputs
const expressions = {
	name: /^[a-zA-ZÀ-ÿ\s]{3,20}$/, 
	lastname: /^[a-zA-ZÀ-ÿ\s]{3,20}$/, 
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	password: /^.{4,12}$/, 
	phone: /^\d{8,14}$/
}

// Objeto con campos en falso
const fields = {
	name: false,
	lastname: false,
	email: false,
	password: false,
	phone: false
}

// Función que valida por campos dependiendo del atributo name
const validateForm = e => {
	switch (e.target.name) {
        case "name":
            validateField(expressions.name, e.target, 'name')
        break
		case "lastname":
			validateField(expressions.lastname, e.target, 'lastname')
		break
        case "email":
            validateField(expressions.email, e.target, 'email')
        break
		case "password":
			validateField(expressions.password, e.target, 'password')
		break
		case "phone":
			validateField(expressions.phone, e.target, 'phone')
		break
	}
}

// Si el campo pasa o no la validación con la expresión regular se le da ciertas clases
const validateField = (expresion, input, field) => {
	if(expresion.test(input.value)){
		document.querySelector(`#group-${field}`).classList.remove('form_group_incorrect')
		document.querySelector(`#group-${field}`).classList.add('form_group_correct')
		document.querySelector(`#group-${field} i`).classList.add('fa-check-circle')
		document.querySelector(`#group-${field} i`).classList.remove('fa-times-circle')
		document.querySelector(`#group-${field} .form_input_error`).classList.remove('form_input_error_active')
		fields[field] = true
	} else {
		document.querySelector(`#group-${field}`).classList.add('form_group_incorrect')
		document.querySelector(`#group-${field}`).classList.remove('form_group_correct')
		document.querySelector(`#group-${field} i`).classList.add('fa-times-circle')
		document.querySelector(`#group-${field} i`).classList.remove('fa-check-circle')
		document.querySelector(`#group-${field} .form_input_error`).classList.add('form_input_error_active')
		fields[field] = false
	}
}

// A cada input se le da el evento para validar después de salir del input
inputs.forEach(input => {
	input.addEventListener('input', validateForm)
})

// Evento submit del formulario
form.addEventListener('submit', e => {
	e.preventDefault()

	// Si los campos están con la información validada por las exp. regulares remueve los estilos de mensaje correcto y resetea el formulario
	if(fields.name && fields.lastname && fields.email && fields.password && fields.phone){
		document.querySelectorAll('.form_group_correct').forEach(icon => icon.classList.remove('form_group_correct'))
		document.querySelector('#form-message-success').classList.add('form_message_success_active')
		fields.name = false
		fields.lastname = false
		fields.email = false
		fields.password = false
		fields.phone = false
		form.reset()
		
		setTimeout(() => {
			document.querySelector('#form-message-success').classList.remove('form_message_success_active')
		}, 5000)
	} else {
        document.querySelector('#form-message').classList.add('form_message_active')
		setTimeout(() => {
			document.querySelector('#form-message').classList.remove('form_message_active')
		}, 3000)
	}
})