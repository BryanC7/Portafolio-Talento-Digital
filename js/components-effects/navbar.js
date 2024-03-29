// Evento que al momento de cargar la página y hacer scroll en el sitio web la barra de navegación pasa de transparente a color sólido
window.addEventListener('DOMContentLoaded', () => {
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav')
        if (!navbarCollapsible) {
            return
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
    }
 
    navbarShrink()
    document.addEventListener('scroll', navbarShrink)

    const mainNav = document.body.querySelector('#mainNav')
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        })
    }

    const navbarToggler = document.body.querySelector('.navbar-toggler')
    const responsiveNavItems = [].slice.call(document.querySelectorAll('#navbarResponsive .nav-link'))
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click()
            }
        })
    })
})