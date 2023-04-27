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
