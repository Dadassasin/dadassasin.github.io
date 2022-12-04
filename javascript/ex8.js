// window.addEventListener("DOMContentLoaded", function () {
//     let form = document.getElementById("modalForm");
//     history.pushState("activeForm", null, "#contact-form");
//     history.back();
//     form.addEventListener("show.bs.modal", function () {
//         history.forward();
//     });
//     form.addEventListener("hide.bs.modal", function () {
//         history.back();
//     });
//     let formName = document.getElementById("nameInput");
//     let formEmail = document.getElementById("emailInput");
//     let formMessage = document.getElementById("messageInput");
//     formName.value = localStorage.getItem("nameInput");
//     formEmail.value = localStorage.getItem("emailInput");
//     formMessage.value = localStorage.getItem("messageInput");
//     formName.addEventListener("input", function () {
//         localStorage.setItem("nameInput", formName.value);
//         console.log(localStorage.getItem("nameInput"));
//     });
//     formEmail.addEventListener("input", function () {
//         localStorage.setItem("emailInput", formEmail.value);
//         console.log(localStorage.getItem("emailInput"));
//     });
//     formMessage.addEventListener("input", function () {
//         localStorage.setItem("messageInput", formMessage.value);
//         console.log(localStorage.getItem("messageInput"));
//     });
//     window.addEventListener("popstate", function () {
//         if (history.state === "activeForm")
//             $("#modalForm").modal("show");
//         else if (history.state === null)
//             $("#modalForm").modal("hide");
//     });
//     form.addEventListener("submit", event => {
//         history.back();
//         const data = new FormData(document.getElementById("contactForm"));
//         fetch("https://formcarry.com/s/pjSn1OU3r",{
//             method: "POST",
//             body: data
//         })
//             .then((result) => {
//                 return result.text();
//             })
//             .then((txt)=>{
//                 alert("Сообщение успешно отправлено!");
//                 formName.value = "";
//                 formEmail.value = "";
//                 formMessage.value = "";
//                 localStorage.setItem("nameInput", formName.value);
//                 localStorage.setItem("emailInput", formEmail.value);
//                 localStorage.setItem("messageInput", formMessage.value);
//             })
//             .catch((error)=>{
//                 alert("При отправке сообщения произошла неизвестная ошибка. Попробуйте еще раз.");
//             });
//         event.preventDefault();
//     });
// });


// window.addEventListener("DOMContentLoaded", function () {
//     const formModal = document.getElementById("modalForm");
//     window.history.pushState("FORM", "form", "#FORM");
//     history.back();
//     formModal.addEventListener("show.bs.modal", event => {
//         this.window.history.go(1);
//     });
//     var f = true;
//     formModal.addEventListener("hide.bs.modal", event => {
//         if (f){
//             f = false;
//             window.history.back();
//             f = true;
//         }
//     });
//     window.addEventListener("popstate", event => {
//         if (f){
//             f = false;
//             if (location.hash == "#FORM"){
//                 $("#modalForm").modal("show");
//             }
//             else {
//                 $("#modalForm").modal("hide");
//             }
//             f = true;
//         }
//     });
//
//     var name = document.getElementById("nameInput");
//     var email = document.getElementById("emailInput");
//     var message = document.getElementById("messageInput");
//     let ar = [[name,"nameInput"],[email,"emailInput"],[message,"messageInput"]];
//     ar.forEach(el => {
//         el[0].value = localStorage.getItem(el[1]);
//         el[0].addEventListener("change",event =>{
//             localStorage.setItem(el[1],el[0].value);
//         });
//     });
//     var form = document.getElementById("contactForm");
//     form.addEventListener("submit", event=>{
//         history.back();
//         const url = "https://formcarry.com/s/pjSn1OU3r";
//         const data = new FormData(form);
//         fetch(url,{method: "POST", body: data})
//             .then((res)=>{return res.text();})
//             .then((txt)=>{
//                 alert("Данные были отправлены. Успех!");
//                 ar.forEach(el => {
//                     localStorage.setItem(el[1],"");
//                     el[0].value = "";
//                 });
//             })
//             .catch((err)=>{
//                 alert("Данные не были отправлены. Попробуйте еще раз");
//             });
//         event.preventDefault();
//     });
// });

window.addEventListener("DOMContentLoaded", function () {

    // Добавляем в историю новый раздел и сразу возвращаемся обратно
    history.pushState("activeForm", null, "#contact-form");
    history.back();

               // Находим по id все input тега form
    let nameInput = document.getElementById("nameInput");
    let emailInput = document.getElementById("emailInput");
    let messageInput = document.getElementById("messageInput");

        // Добавляем значения input в localStorage по вводу
    nameInput.addEventListener("input", function () {
        localStorage.setItem("nameInput", nameInput.value);
    });
    emailInput.addEventListener("input", function () {
        localStorage.setItem("emailInput", emailInput.value);
    });
    messageInput.addEventListener("input", function () {
        localStorage.setItem("messageInput", messageInput.value);
    });

        // Задаем для всех input значения из localStorage
    nameInput.value = localStorage.getItem("nameInput");
    emailInput.value = localStorage.getItem("emailInput");
    messageInput.value = localStorage.getItem("messageInput");

       // Находим по id кнопки открытия и закрытия формы и сам тег form
    let openFormButton = document.getElementById("openFormButton");
    let closeFormButton = document.getElementById("closeFormButton");
    let contactForm = document.getElementById("contactForm");

    // По клику на кнопку открытия движемся вперед по истории, по клику на кнопку закрытия движемся назад по истории и убираем флажок с чекбокса
    openFormButton.addEventListener("click", function () {
        history.forward();
    });
    closeFormButton.addEventListener("click", function () {
        history.back();
        document.getElementById("checkbox").checked = false;
    });

    // Отправляем данные формы на formcarry форму по событию submit тега form с is contactForm.
    // Уходим назад по истории и предотвращаем событие submit, чтобы страница не перезагрузилась
    contactForm.addEventListener("submit", function (event) {
        history.back();
        let formData = new FormData(contactForm);
        fetch("https://formcarry.com/s/pjSn1OU3r", {
            method: "POST",
            body: formData
        })
            .then((result) => {
                return result.text();
            })
            .then((txt) => {
                alert("Сообщение успешно отправлено!");
                nameInput.value = "";
                emailInput.value = "";
                messageInput.value = "";
                localStorage.setItem("nameInput", nameInput.value);
                localStorage.setItem("emailInput", emailInput.value);
                localStorage.setItem("messageInput", messageInput.value);
            })
            .catch((error)=>{
                alert("Сообщение не отправлено по неизвестной ошибке. Попробуйте еще раз.");
            });
        event.preventDefault();
    });

    // Проверяем текущее состояние истории. Если state = activeForm - открываем modalForm, если state = null - закрываем modalForm и убираем флажок с чекбокса
    window.addEventListener("popstate", function () {
        if (history.state === "activeForm")
            $("#modalForm").modal("show");
        else if (history.state === null) {
            $("#modalForm").modal("hide");
            document.getElementById("checkbox").checked = false;
        }
    });
});