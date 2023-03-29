const buttons = document.querySelectorAll('.rounded')
const divPalettes = document.querySelector('#rectangle')
const btnView = document.querySelector('#switchView')
const divView = document.querySelector('#preview')
const divViews = document.querySelector('#views')

const colours = [
    {header: '#142d4c', body: '#ececec', footer: '#385170'},
    {header: '#2f1b41', body: '#fecd51', footer: '#613864'},
    {header: '#2c786c', body: '#faf5e4', footer: '#004445'}
]

window.addEventListener('DOMContentLoaded', loadContent)
divPalettes.addEventListener('click', changeColor)
btnView.addEventListener('click', changeView)

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

function showComponent(id) {
    id.removeAttribute('hidden')
    const divChildren = id.parentNode.children
    for(let i = 0; i < divChildren.length; i++) {
        if(divChildren[i].id !== id.id) {
            divChildren[i].setAttribute('hidden', '')
        }
    }
}

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

function validateElements() {
    const header = document.querySelector('#header').children
    const body = document.querySelector('#body').children
    const footer = document.querySelector('#footer').children

    const elements = [...header, ...body, ...footer]
    let elementsFound = []

    for (let i = 0; i < elements.length; i++) {
        if(!elements[i].hasAttribute('hidden')) {
            elementsFound.push(elements[i])
        }
    }
    
    return elementsFound
}

function changeView(e) {
    if(e.target.checked) {
        const phone = document.querySelector('.phone')
        if(phone) {
            phone.style.display = 'flex'
            preview.style.display = 'none'
        } else {
            const divPhone = document.createElement('div')
            const divContent = document.createElement('div')
            const headerPhone = document.createElement('div')
            const bodyPhone = document.createElement('div')
            const footerPhone = document.createElement('div')
            divPhone.classList.add('phone', 'mx-auto', 'mt-3')
            divContent.classList.add('content')
            console.log(validateElements()[0])
            console.log(validateElements()[1])
            console.log(validateElements()[2])
            divPhone.appendChild(divContent)
            preview.style.display = 'none'
            divViews.appendChild(divPhone)
        }
    } else {
        document.querySelector('.phone').style.display = 'none'
        preview.style.display = 'block'
    }
}

// Object.values(section).forEach(colour => {
//     const divRectangle = document.createElement('div')
//     divRectangle.classList.add('rectangle', 'mb-4')
//     divRectangle.style.background = colour
//     divPalettes.appendChild(divRectangle)
// })