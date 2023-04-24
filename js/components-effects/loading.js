// Función para mostrar la página luego de 3 segundos
function timeOutPage() {
    setTimeout(() => {
        showPage()
    }, 3000);
}

// Función para quitar el spinner de carga y mostrar la página
function showPage() {
    document.querySelector("#loader").style.display = "none";
    document.querySelector("#divSpinner").style.display = "block";
}