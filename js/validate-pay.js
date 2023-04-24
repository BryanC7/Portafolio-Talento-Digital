// Variables
const inputs = document.querySelectorAll('#form-pay input')
const btnPay = document.querySelector('#btn-pay')

// Objeto con los datos de la tarjeta
const cardData = {
    cardName: '',
    cardNumber: '',
    expiry1: '',
    expiry2: '',
    expiry3: '',
    cvc: ''
}

// Expresiones regulares
const expressions = {
    nameCard: /^[a-zA-ZÀ-ÿ\s]{10,40}$/,
    numberCard: /^\d{16,19}$/,
    cvc: /^\d{3}$/,
    expiryDate: /^\d{2}$/
}

// Cuando carga el sitio web checkea el objeto con datos 
document.addEventListener('DOMContentLoaded', checkObj)

// A cada input se le da el evento para validar después de salir del input
inputs.forEach(input => {
    input.addEventListener('blur', validations)
})

// Función que valida por campos dependiendo del atributo name
function validations(e) {
    switch (e.target.name) {
        case "cardName":
            validateField(expressions.nameCard, e.target)
        break
		case "cardNumber":
			validateField(expressions.numberCard, e.target)
		break
        case "expiry1":
            validateField(expressions.expiryDate, e.target)
        break
		case "expiry2":
			validateField(expressions.expiryDate, e.target)
		break
		case "expiry3":
			validateField(expressions.expiryDate, e.target)
		break
		case "cvc":
			validateField(expressions.cvc, e.target)
		break
	}
}

// Si el campo pasa o no la validación con la expresión regular se le da ciertas clases
function validateField(expression, input) {
    if(!expression.test(input.value) || input.value === ''){
        input.classList.remove('border-success')
		input.classList.add('border', 'border-danger')
        cardData[input.name] = ''
        checkObj()
        return
	} else {
        input.classList.remove('border-danger')
		input.classList.add('border', 'border-success')
        cardData[input.name] = input.value.trim().toLowerCase()
        checkObj()
	}
}

// Función donde se checkea cada cambio al objeto, cuando el objeto esté lleno se libera el botón para poder realizar el registro del pedido
function checkObj() {
    if(Object.values(cardData).includes('')) {
        btnPay.disabled = true
        return
    } 
    btnPay.disabled = false
}