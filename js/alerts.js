function deleteUser(id, name , lastName) {
    Swal.fire({
        title: `¿Estás seguro de eliminar a ${name} ${lastName} del listado?`,
        showCancelButton: true,
        confirmButtonText: `<a class="text-decoration-none text-light" href="/tableUsers/${id}?_method=delete">Confirmar</a>`,
    }).then(result => {
        console.log(result)
    })
}

function deleteOrder(id) {
    Swal.fire({
        title: `¿Estás seguro de eliminar este pedido?`,
        showCancelButton: true,
        confirmButtonText: `<a class="text-decoration-none text-light" href="/tableOrders/${id}?_method=delete">Confirmar</a>`,
    }).then(result => {
        console.log(result)
    })
}