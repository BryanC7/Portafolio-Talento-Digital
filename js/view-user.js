// Variables
const menuSidebar = document.querySelector('#menu')
const titleMenu = document.querySelector('#title-menu')
const redirectLink = document.querySelector('#redirect-link')
const currentUrl = window.location.pathname.slice(1)

// Evento que cuando cargue la págia verifica el pathname de la url y carga componentes de vista cliente o administrador 
document.addEventListener('DOMContentLoaded', () => {
    if(currentUrl === 'clientView' || currentUrl === 'editInfo' || currentUrl === 'ordersUser') {
        createComponentsClient()
    } else if(currentUrl === 'adminView') {
        createComponentsAdmin()
        calculateProfits()
    } else {
        createComponentsAdmin()
    }
})

// Función que crea componentes en vista cliente
function createComponentsClient() {
    titleMenu.textContent = 'Información cliente'
    redirectLink.setAttribute('href', '/clientView')
    menuSidebar.innerHTML += `
    <li class="mb-3">
        <a href="/ordersUser" class="nav-link px-0 align-middle text-icon">
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

// Función que crea componentes en vista administrador
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

// Función que en vista administrador calcula las ganancias de la página para su visualización
function calculateProfits() {
    const profitDiv = document.querySelector('#profits')
    const profitValue = parseInt(profitDiv.textContent)
    profitDiv.textContent = '$' + profitValue * 250000
}

function confirmDelete(id, name , lastName) {
    Swal.fire({
        title: `¿Estás seguro de eliminar a ${name} ${lastName} del listado?`,
        showCancelButton: true,
        confirmButtonText: `<a class="text-decoration-none text-light" href="/tableUsers/${id}?_method=delete">Confirmar</a>`,
    }).then(result => {
        console.log(result)
    })
}