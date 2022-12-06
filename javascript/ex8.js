window.addEventListener("DOMContentLoaded", function () {

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

    // По клику на кнопку открытия создаем новое состояние истории #contact-form, по клику на кнопку закрытия движемся назад по истории и убираем флажок с чекбокса
    openFormButton.addEventListener("click", function () {
        history.pushState("activeForm", null, "#contact-form");
        // history.forward();
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
