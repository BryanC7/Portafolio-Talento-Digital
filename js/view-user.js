const menuSidebar = document.querySelector('#menu')
const titleMenu = document.querySelector('#title-menu')
const redirectLink = document.querySelector('#redirect-link')

document.addEventListener('DOMContentLoaded', () => {
    if(window.location.pathname.slice(1) === 'clientView') {
        createComponentsClient()
    } else {
        createComponentsAdmin()
    }
})

function createComponentsClient() {
    titleMenu.textContent = 'Información cliente'
    redirectLink.setAttribute('href', '/clientView')
    menuSidebar.innerHTML += `
    <li class="mb-3">
        <a href="#" class="nav-link px-0 align-middle text-icon">
            <i class="fa-solid fa-list fa-lg"></i><span class="ms-3 d-none d-sm-inline text-light">Mis pedidos</span>
        </a>
    </li>
    <li class="mb-3">
        <a href="/editInfo" class="nav-link px-0 align-middle text-icon">
            <i class="fa-solid fa-pen-to-square fa-lg"></i><span class="ms-3 d-none d-sm-inline text-light">Editar datos personales</span>
        </a>
    </li>
    `
}

function createComponentsAdmin() {
    titleMenu.textContent = 'Menú administrador'
    redirectLink.setAttribute('href', '/adminView')
    menuSidebar.innerHTML += `
    <li class="mb-3">
        <a href="/tableOrders" class="nav-link px-0 align-middle text-icon">
            <i class="fa-regular fa-calendar-days fa-lg"></i><span class="ms-3 d-none d-sm-inline text-light">Pedidos realizados</span>
        </a>
    </li>
    <li class="mb-3">
        <a href="/tableUsers" class="nav-link px-0 align-middle text-icon">
            <i class="fa-solid fa-users-line fa-lg"></i><span class="ms-3 d-none d-sm-inline text-light">Listado de clientes</span> 
        </a>
    </li>
    `
}

// function editarProducto(id) {
//     productoFiltrado = productos.filter(producto => producto.id === id)[0]

//     const { nombre, idCategoria, precio, link, stock, idSucursal, etiqueta, descripcion} = productoFiltrado
//     inputNombre.value = nombre
//     selectCategorias.value = idCategoria
//     inputPrecio.value = precio
//     inputImagen.value = link
//     inputStock.value = stock
//     inputDescripcion.value = descripcion
//     inputEtiqueta.value = etiqueta
//     inputId.value = id
//     inputIdCategoria.value = idCategoria
//     inputIdSucursal.value = idSucursal
// }

// function eliminarProducto(id){
//     const confirmar = confirm('¿Estás seguro de eliminar este producto?')
//     if(confirmar) {
//         producto.eliminarProductoApi(id)
//     } 
// }