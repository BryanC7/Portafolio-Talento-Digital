function timeOutPage() {
    setTimeout(() => {
        showPage()
    }, 3000);
}

function showPage() {
    document.querySelector("#loader").style.display = "none";
    document.querySelector("#divSpinner").style.display = "block";
}