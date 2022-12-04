window.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("modalForm");
    history.pushState("activeForm", null, "#contact-form");
    history.back();
    form.addEventListener("show.bs.modal", function () {
        history.forward();
    });
    form.addEventListener("hide.bs.modal", function () {
        history.back();
    });
    let formName = document.getElementById("nameInput");
    let formEmail = document.getElementById("emailInput");
    let formMessage = document.getElementById("messageInput");
    formName.value = localStorage.getItem("nameInput");
    formEmail.value = localStorage.getItem("emailInput");
    formMessage.value = localStorage.getItem("messageInput");
    formName.addEventListener("input", function () {
        localStorage.setItem("nameInput", formName.value);
        console.log(localStorage.getItem("nameInput"));
    });
    formEmail.addEventListener("input", function () {
        localStorage.setItem("emailInput", formEmail.value);
        console.log(localStorage.getItem("emailInput"));
    });
    formMessage.addEventListener("input", function () {
        localStorage.setItem("messageInput", formMessage.value);
        console.log(localStorage.getItem("messageInput"));
    });
    window.addEventListener("popstate", function () {
        if (history.state === "activeForm")
            $("#modalForm").modal("show");
        else if (history.state === null)
            $("#modalForm").modal("hide");
    });
    form.addEventListener("submit", event => {
        history.back();
        const data = new FormData(document.getElementById("contactForm"));
        fetch("https://formcarry.com/s/pjSn1OU3r",{
            method: "POST",
            body: data
        })
            .then((result) => {
                return result.text();
            })
            .then((txt)=>{
                alert("Сообщение успешно отправлено!");
                formName.value = "";
                formEmail.value = "";
                formMessage.value = "";
                localStorage.setItem("nameInput", formName.value);
                localStorage.setItem("emailInput", formEmail.value);
                localStorage.setItem("messageInput", formMessage.value);
            })
            .catch((error)=>{
                alert("При отправке сообщения произошла неизвестная ошибка. Попробуйте еще раз.");
            });
        event.preventDefault();
    });
});
