const menuSidebar = document.querySelector('#menu')
const titleMenu = document.querySelector('#title-menu')
const redirectLink = document.querySelector('#redirect-link')
const message = document.querySelector('#msg')
const currentUrl = window.location.pathname.slice(1)

document.addEventListener('DOMContentLoaded', () => {
    if(currentUrl === 'clientView' || currentUrl === 'editInfo' || currentUrl === 'ordersUser') {
        createComponentsClient()
    } else {
        createComponentsAdmin()
    }

    if(message) {
        setTimeout(() => {
            message.classList.add('d-none')
        }, 3000)
    }
})

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
    calculateProfits()
}

function calculateProfits() {
    const profitDiv = document.querySelector('#profits')
    const profitValue = parseInt(profitDiv.textContent)
    profitDiv.textContent = '$' + profitValue * 250000
}