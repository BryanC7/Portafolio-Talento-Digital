const inputs = document.querySelectorAll('#form-pay input')
const btnPay = document.querySelector('#btn-pay')

const cardData = {
    cardName: '',
    cardNumber: '',
    expiry1: '',
    expiry2: '',
    expiry3: '',
    cvc: ''
}

const expressions = {
    nameCard: /^[a-zA-ZÀ-ÿ\s]{10,40}$/,
    numberCard: /^\d{16,19}$/,
    cvc: /^\d{3}$/,
    expiryDate: /^\d{2}$/
}

document.addEventListener('DOMContentLoaded', checkObj)

inputs.forEach(input => {
    input.addEventListener('blur', validations)
})

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

function checkObj() {
    if(Object.values(cardData).includes('')) {
        btnPay.disabled = true
        return
    } 
    btnPay.disabled = false
}