/**
 * Elimina un usuario mediante un sweetalert
 * @param {number} id del usuario
 * @param {string} name | Nombre del usuario
 * @param {string} lastName | Apellido del usuario 
 */
function deleteUser(id, name , lastName) {
    Swal.fire({
        title: `¿Estás seguro de eliminar a ${name} ${lastName} del listado?`,
        showCancelButton: true,
        cancelButtonColor: '#6e7881',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#d33',
        confirmButtonText: `<a class="text-decoration-none text-light" href="/tableUsers/${id}?_method=delete">Confirmar</a>`
    }).then(result => {
        console.log(result)
    })
}

/**
 * Elimina un pedido desde vista administrador mediante un sweetalert
 * @param {number} id del pedido 
 */
function deleteOrder(id) {
    Swal.fire({
        title: `¿Estás seguro de eliminar este pedido?`,
        showCancelButton: true,
        cancelButtonColor: '#6e7881',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#d33',
        confirmButtonText: `<a class="text-decoration-none text-light" href="/tableOrders/${id}?_method=delete">Confirmar</a>`,
    }).then(result => {
        console.log(result)
    })
}

/**
 * Elimina un pedido de cierto usuario mediante un sweetalert
 * @param {number} id del pedido 
 */
function deleteUserOrder(id) {
    Swal.fire({
        title: `¿Estás seguro de eliminar este pedido?`,
        showCancelButton: true,
        cancelButtonColor: '#6e7881',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#d33',
        confirmButtonText: `<a class="text-decoration-none text-light" href="/ordersUser/${id}?_method=delete">Confirmar</a>`,
    }).then(result => {
        console.log(result)
    })
}

// Variable que rescata el formulario de pago.
const formPay = document.querySelector('#form-pay')

// Valida si existe el formulario para evitar errores en otras páginas y si existe ejecuta el evento
if(formPay) {
    formPay.addEventListener('submit', e => {
        e.preventDefault()
        confirmPay()
    })
}

function confirmPay() {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Se ha autorizado el pago y se ha almacenado correctamente tu pedido',
        showConfirmButton: false,
        timer: 5000,
    }).then(result => {
        if(result.isDismissed) {
            formPay.submit()
        }
    })  
}