document.addEventListener("DOMContentLoaded", function() {
    const summary = document.querySelector(".calc__summary");
    const form = document.querySelector("form");
    const formList = document.querySelectorAll("form div");
    const checkbox = form.querySelectorAll(".form__checkbox");
    const prices = {
        products: 0.8,
        orders: 0.5,
        package: {
            basic: 10,
            professional: 25,
            premium: 60
        },
        accounting: 60,
        terminal: 8
    };
    formList.forEach(function(element) {
        element.addEventListener("change", onChange);
    });
    const fieldSelect = document.querySelector(".calc__select");
    fieldSelect.addEventListener("click", onClick);
    const listSelect = fieldSelect.querySelector(".select__dropdown");
    const listSelectLi = listSelect.querySelectorAll("li");
    listSelectLi.forEach(function(element) {
        element.addEventListener("click", toChose);
    });
    checkbox.forEach(function(element) {
        checkbox[0].addEventListener("change", onChecked);
        checkbox[1].addEventListener("change", onCheckedTwo);
    });
    //DODANIE LINIJ PO PRAWEJ W POMEMNCIE ZMIANY WARTOŚCI W:
    // POLU 1 (products)
    // POLU 2 (orders)
    //
    function onChange(event) {
        const value = event.target.value;
        const id = event.target.id;
        const summaryListId = summary.querySelector("[data-id=" + id + "]");
        if (value > 0) {
            summaryListId.classList.add("open");
            summaryListId.children[1].innerText = value + " * " + prices[id] + " $";
            summaryListId.children[2].innerText = Math.floor(value * prices[id]) + " $";
        } else if (value <= 0 || value === 0) summaryListId.classList.remove("open");
    }
    //
    //POJAWIENIE SIĘ ROZWIJANEJ LISTY
    // PACKAGE
    //
    function onClick(e) {
        if (listSelect.style.display === "none" || listSelect.style.display === "") {
            listSelect.style.display = "flex";
            listSelect.style.flexDirection = "column";
        } else listSelect.style.display = "none";
    }
    //
    //WYBRANIE POZYCJI Z ROZWIJANEJ LISTY
    //
    function toChose(event) {
        const value = event.target.innerText;
        const itemCalcChose = summary.firstElementChild.children[2];
        itemCalcChose.classList.add("open");
        itemCalcChose.children[1].innerText = value;
        //
        //
        //
        //
        //WYŚWIETLA UNDEFINDED!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        //
        //
        itemCalcChose.children[2].innerText = prices.package[value] + " $";
    }
    //
    //
    //    CHECKBOX 1
    //
    function onChecked(event) {
        const itemCalcChecked = summary.firstElementChild.children[3];
        if (itemCalcChecked.className === "open") itemCalcChecked.classList.remove("open");
        else {
            itemCalcChecked.classList.add("open");
            itemCalcChecked.children[1].innerText = prices.accounting + " $";
        }
    }
    function onCheckedTwo(event) {
        const checkedTerminal = summary.firstElementChild.children[4];
        checkedTerminal.classList.add("open");
        checkedTerminal.children[1].innerText = prices.terminal + " $";
    }
    //STYLOWANIE SUMY
    //TOTAL
    //
    const total = document.querySelector(".summary__total");
    total.style.display = "flex";
    total.parentElement.style.justifyContent = "flex-end";
    const summaryPrices = summary.children[0].querySelectorAll(".item__price");
    const valuePriceHelper = 0;
    for(let i = 0; i < summaryPrices.length; i++){
        const valueHelper = summaryPrices[i].innerText;
        const valueSum = valuePriceHelper + valueHelper;
        console.log(valueSum);
        total.children[1].innerText = Math.floor(valueSum);
    }
});

//# sourceMappingURL=index.938ea26f.js.map
