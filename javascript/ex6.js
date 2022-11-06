let products = [
    {"price": 400},
    {"price": 150, "options": [30, 45, 25]},
    {"price": [140, 120, 130]}
]

function updateH1(price) {
    let result = document.getElementById("result");
    if (price % 10 === 1)
        result.innerHTML = "Итоговая цена: " + price + " рубль";
    else if (price % 10 > 1 && result % 10 < 5)
        result.innerHTML = "Итоговая цена: " + price + " рубля";
    else
        result.innerHTML = "Итоговая цена: " + price + " рублей";
    console.log(price);
}

function update() {
    let result = document.getElementById("result");
    let select = document.getElementById("sel");
    let count = document.getElementById("count");
    let radio_div = document.getElementById("sandw");
    let check_div = document.getElementById("shaw");
    let price;
    let reg = new RegExp(/^\d+$/);
    if (select.value === "1") {
        check_div.style.display = "block";
        radio_div.style.display = "none";
    } else if (select.value === "2") {
        check_div.style.display = "none";
        radio_div.style.display = "block";
    } else {
        check_div.style.display = "none";
        radio_div.style.display = "none";
    }
    if (reg.test(count.value)) {
        if (select.value === "0") {
            let checks = document.getElementsByName("check");
            for (let i = 0; i < checks.length; i++)
                checks[i].checked = false;
            let radios = document.getElementsByName("rad");
            radios[0].checked = true;
            price = products[select.value].price * count.value;
            updateH1(price);
        }
        if (select.value === "1") {
            let radios = document.getElementsByName("rad");
            radios[0].checked = true;
            price = products[select.value].price;
            let selected = document.getElementsByName("check");
            for(let i = 0; i < selected.length; i++)
                if (selected[i].checked === true)
                    price += products[select.value].options[selected[i].value];
            price *= count.value;
            updateH1(price)
        }
        if (select.value === "2") {
            price = 0;
            let checks = document.getElementsByName("check");
            for (let i = 0; i < checks.length; i++)
                checks[i].checked = false;
            let selected = document.querySelector('input[name="rad"]:checked');
            if (selected.value !== null)
                price = products[select.value].price[selected.value] * count.value;
            updateH1(price);
        }
    }
    else {
        result.innerHTML = "ПРОВЕРЬ СВОЙ ВВОД >:(";
    }
}

window.addEventListener("DOMContentLoaded", function () {
    let select = document.getElementById("sel");
    let count = document.getElementById("count");
    let radios = document.getElementsByName('rad');
    let checkBoxes = document.getElementsByName('check');
    select.addEventListener("change", function() {
        update();
    });
    count.addEventListener("change", function() {
        update();
    });
    radios.forEach(r => {
        r.addEventListener("click",function(){
            update();
        });
    });
    checkBoxes.forEach(r => {
        r.addEventListener("click",function(){
            update();
        });
    });
    update();
});
