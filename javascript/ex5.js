function click1() {
    let f1 = document.getElementById("price");
    let f2 = document.getElementById("count");
    let r = document.getElementById("result");
    let reg = new RegExp(/^\d+$/);
    if (reg.test(f1[0].value) && reg.test(f2[0].value)) {
        let result = Number(f1[0].value) * Number(f2[0].value);
        if (result % 10 === 1)
            r.innerHTML = "Итоговая цена: " + result + " рубль";
        if (result % 10 > 1 && result % 10 < 5)
            r.innerHTML = "Итоговая цена: " + result + " рубля";
        if (result % 10 === 0 || result % 10 > 4 && result % 10 <= 9)
            r.innerHTML = "Итоговая цена: " + result + " рублей";
        return false;
    }
    r.innerHTML = "ПРОВЕРЬ СВОЙ ВВОД >:("
    return false;
}