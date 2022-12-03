window.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("contactForm");
    let flag = false;
    form.addEventListener("show.bs.modal", function () {
        history.pushState("activeForm", null, "#contact-form");
    });
    form.addEventListener("hide.bs.modal", function () {
        history.back();
    });
    let formNameInput = document.getElementById("nameInput");
    let formEmailInput = document.getElementById("emailInput");
    let formMessageInput = document.getElementById("messageInput");
    formNameInput.value = localStorage.getItem("nameInput");
    formEmailInput.value = localStorage.getItem("emailInput");
    formMessageInput.value = localStorage.getItem("messageInput");
    formNameInput.addEventListener("input", function () {
        localStorage.setItem("nameInput", formNameInput.value);
    });
    formEmailInput.addEventListener("input", function () {
        localStorage.setItem("emailInput", formEmailInput.value);
    });
    formMessageInput.addEventListener("input", function () {
        localStorage.setItem("messageInput", formMessageInput.value);
    });
    window.addEventListener("popstate", function () {
        console.log(history.state);
        if (history.state === "activeForm")
            $("#contactForm").modal("show");
        else if (history.state === null)
            $("#contactForm").modal("hide");
    });
    form.addEventListener("submit", function (event) {
        history.back();
        let formData = new FormData(form);
        fetch("https://formcarry.com/s/pjSn1OU3r", {
            method: "POST",
            body: formData
        })
            .then((result) => {
                return result.text();
            })
            .then((txt) => {
                alert("Сообщение успешно отправлено!");
                formNameInput.value = "";
                formEmailInput.value = "";
                formMessageInput.value = "";
                localStorage.setItem("nameInput", formNameInput.value);
                localStorage.setItem("emailInput", formEmailInput.value);
                localStorage.setItem("messageInput", formMessageInput.value);
            })
            .catch((error) => {
                alert("Во время отправки сообщения произошла неизвестная ошибка. Попробуйте еще раз.");
            });
        event.preventDefault();
    });
});