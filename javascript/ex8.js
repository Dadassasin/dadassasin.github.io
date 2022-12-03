window.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("activateFormButton");
    button.addEventListener("click", function () {
        history.pushState(null, null, "contact-form");
    })
})