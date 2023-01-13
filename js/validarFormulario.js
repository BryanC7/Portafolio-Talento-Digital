const formulario = document.querySelector('#formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	apellidos: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	password: /^.{4,12}$/, // 4 a 12 digitos.
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
	nombre: false,
	apellidos: false,
	correo: false,
	password: false,
	telefono: false
}

const validarFormulario = e => {
	switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
        break;
		case "apellidos":
			validarCampo(expresiones.apellidos, e.target, 'apellidos');
		break;
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo');
        break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.querySelector(`#grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.querySelector(`#grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.querySelector(`#grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.querySelector(`#grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

inputs.forEach(input => {
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', e => {
	e.preventDefault();

	if(campos.nombre && campos.apellidos && campos.correo && campos.password && campos.telefono){
		formulario.reset();

		document.querySelector('#formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.querySelector('#formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach(icono => icono.classList.remove('formulario__grupo-correcto'));
	} else {
        setTimeout(() => {
            document.querySelector('#formulario__mensaje').classList.add('formulario__mensaje-activo');
        }, 3000);
	}
});