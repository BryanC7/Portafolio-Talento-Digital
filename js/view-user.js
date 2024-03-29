// Variables con elementos del DOM
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

/**
 * Muestra textos y componentes en el DOM de vista cliente
 */
function createComponentsClient() {
    titleMenu.textContent = 'Información cliente'
    redirectLink.setAttribute('href', '/clientView')
    menuSidebar.innerHTML += `
    <li class="mb-3">
        <a href="/ordersUser" class="nav-link px-0 align-middle text-icon">
            <i class="fa-solid fa-list fa-lg"></i><span class="ms-3 d-none d-lg-inline text-light">Mis pedidos</span>
        </a>
    </li>
    <li class="mb-3">
        <a href="/editInfo" class="nav-link px-0 align-middle text-icon">
            <i class="fa-solid fa-pen-to-square fa-lg"></i><span class="ms-3 d-none d-lg-inline text-light">Editar datos personales</span>
        </a>
    </li>
    `
}

/**
 * Muestra textos y componentes en el DOM de vista administrador
 */
function createComponentsAdmin() {
    titleMenu.textContent = 'Menú administrador'
    redirectLink.setAttribute('href', '/adminView')
    menuSidebar.innerHTML += `
    <li class="mb-3">
        <a href="/tableOrders" class="nav-link px-0 align-middle text-icon">
            <i class="fa-regular fa-calendar-days fa-lg"></i><span class="ms-3 d-none d-lg-inline text-light">Pedidos realizados</span>
        </a>
    </li>
    <li class="mb-3">
        <a href="/tableUsers" class="nav-link px-0 align-middle text-icon">
            <i class="fa-solid fa-users-line fa-lg"></i><span class="ms-3 d-none d-lg-inline text-light">Listado de clientes</span> 
        </a>
    </li>
    `
}

/**
 * Calcula las ventas totales de la página
 */
function calculateProfits() {
    const profitDiv = document.querySelector('#profits')
    const profitValue = parseInt(profitDiv.textContent)
    profitDiv.textContent = '$' + profitValue * 250000
}