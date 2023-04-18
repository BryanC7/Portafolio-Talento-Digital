const cardName = document.querySelector('#card-name')
const cardNumber = document.querySelector('#card-number')
const expiry1 = document.querySelector('#expiry-1')
const expiry2 = document.querySelector('#expiry-2')
const expiry3 = document.querySelector('#expiry-3')
const cvc = document.querySelector('#cvc')
const inputs = document.querySelectorAll('#form-pay input')
const form = document.querySelector('#form-pay')

inputs.forEach(input => {
	input.addEventListener('blur', validations)
})

const expressions = {
    nameCard: /^[a-zA-ZÀ-ÿ\s]{10,40}$/,
    numberCard: /^\d{16,19}$/,
    cvc: /^\d{3}$/,
    expiryDate: /^\d{2}$/
}

function validations(e) {
    switch (e.target.name) {
        case "card-name":
            validateField(expressions.nameCard, e.target)
        break
		case "card-number":
			validateField(expressions.numberCard, e.target)
		break
        case "expiry-1":
            validateField(expressions.expiryDate, e.target)
        break
		case "expiry-2":
			validateField(expressions.expiryDate, e.target)
		break
		case "expiry-3":
			validateField(expressions.expiryDate, e.target)
		break
		case "cvc":
			validateField(expressions.cvc, e.target)
		break
	}
}

function validateField(expression, input) {
    if(expression.test(input.value)){
        input.classList.remove('border-danger')
		input.classList.add('border', 'border-success')
	} else {
        input.classList.remove('border-success')
		input.classList.add('border', 'border-danger')
	}
}

form.addEventListener('submit', e => {
    e.preventDefault()
    let array = []
    for(let i = 0; i < inputs.length; i++) {
        array.push(inputs[i].value)
    }
})