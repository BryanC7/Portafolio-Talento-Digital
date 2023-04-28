// Variables con elementos del DOM
const buttons = document.querySelectorAll('.rounded')
const divPalettes = document.querySelector('#rectangle')
const btnView = document.querySelector('#switchView')
const btnFinish = document.querySelector('#btnFinish')
const desktopView = document.querySelector('#preview')
const views = document.querySelector('#views')
const phoneView = document.querySelector('.phone')
const contentPhone = document.querySelector('.content')
const headers = document.querySelector('#header')
const bodys = document.querySelector('#body')
const footers = document.querySelector('#footer')

// Array con colores
const colours = [
    {header: '#142d4c', body: '#ececec', footer: '#385170'},
    {header: '#2f1b41', body: '#fecd51', footer: '#613864'},
    {header: '#2c786c', body: '#faf5e4', footer: '#004445'},
    {header: '#0881a3', body: '#fde9df', footer: '#ffd6a4'},
    {header: '#4ecca3', body: '#eeeeee', footer: '#393e46'}
]

// Eventos asociados
window.addEventListener('DOMContentLoaded', loadContent)
divPalettes.addEventListener('click', changeColor)
btnView.addEventListener('click', changeView)

/**
 * Función que apenas se carga la página bloquea el submit de botones y pinta de forma dinámica botones con colores
 */
function loadContent() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', e => e.preventDefault())
    }

    colours.forEach(colour => {
        const divRectangles = document.createElement('div')
        divRectangles.classList.add('d-flex', 'justify-content-center')
        const rectangleH = document.createElement('div')
        const rectangleB = document.createElement('div')
        const rectangleF = document.createElement('div')
        rectangleH.classList.add('rectangle', 'mb-4')
        rectangleB.classList.add('rectangle', 'mb-4')
        rectangleF.classList.add('rectangle', 'mb-4')
        rectangleH.style.background = colour.header
        rectangleB.style.background = colour.body
        rectangleF.style.background = colour.footer
    
        divRectangles.appendChild(rectangleH)
        divRectangles.appendChild(rectangleB)
        divRectangles.appendChild(rectangleF)
        divPalettes.appendChild(divRectangles)
    })
}

/**
 * 
 * Muestra el componente en pantalla de acuerdo a lo que presione el usuario
 * @param {string} id Nombre único de cada componente
 */
function showComponent(id) {
    id.removeAttribute('hidden')
    const divChildren = id.parentNode.children
    for(let i = 0; i < divChildren.length; i++) {
        if(divChildren[i].id !== id.id) {
            divChildren[i].setAttribute('hidden', '')
        }
    }
    activateSwitch()
}

/**
 * 
 * Cambia el color de todos los componentes mostrados en pantalla de acuerdo a su id  
 * @param e Evento de la función
 */
function changeColor(e) {
    const divColours = e.target.parentNode.children
    let colours = []

    for (let i = 0; i < divColours.length; i++) {
        colours.push(divColours[i].style.background)
    }

    validateElements().forEach(element => {
        if(element.id.includes('header')) {
            element.firstChild.style.backgroundColor = colours[0]
        } else if (element.id.includes('body')) {
            element.style.background = colours[1]
        } else {
            element.firstElementChild.style.backgroundColor = colours[2]
        }
    })
}

/**
 * Busca los elementos que el usuario presionó y dejó en pantalla
 * @returns Un array con los elementos encontrados
 */
function validateElements() {
    const header = headers.children
    const body = bodys.children
    const footer = footers.children

    const elements = [...header, ...body, ...footer]
    let elementsFound = []

    for (let i = 0; i < elements.length; i++) {
        if(!elements[i].hasAttribute('hidden')) {
            elementsFound.push(elements[i])
        }
    }
    
    return elementsFound
}

/**
 * Activa los botones para el cambio de vista y finalizar template
 */
function activateSwitch() {
    if(validateElements().length === 3) {
        btnView.removeAttribute('disabled')
        btnFinish.removeAttribute('disabled')
    }
}

/**
 * Cambia el div en donde se muestran los elementos que presionó el usuario de vista escritorio a móvil
 * @param e Evento de la función 
 */
function changeView(e) {
    if(e.target.checked) {
        desktopView.style.display = 'none'
        phoneView.removeAttribute('hidden')
        validateElements().forEach(element => contentPhone.appendChild(element))
    } else {
        for(let i = 0; i < contentPhone.children.length; i++) {
            if(contentPhone.children[i].id.includes('header')) {
                headers.appendChild(contentPhone.children[i])
            }
            if(contentPhone.children[i].id.includes('body')) {
                bodys.appendChild(contentPhone.children[i])
            }
            if(contentPhone.children[i].id.includes('footer')) {
                footers.appendChild(contentPhone.children[i])
            }
        }
        phoneView.setAttribute('hidden', '')
        desktopView.style.display = 'block'
    }
}