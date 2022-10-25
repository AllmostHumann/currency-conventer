{
    const currencySelected = () => {
        const formCurrencyElement = document.querySelector(".js-currency");
        const formSelectValueElement = document.querySelector(".js-selectValue");

        formCurrencyElement.innerText =  formSelectValueElement.innerText

    };

    const onSumbmitClick = (event) => {
        event.preventDefault();

        const formCalcValueElement = document.querySelector(".js-calcValue");
        const formInputValueElement = document.querySelector(".js-inputValue");
        const formSelectValueElement = document.querySelector(".js-selectValue");

        const select = formSelectValueElement.value;
        const input = formInputValueElement.value;
        const calc = input / select;

        formCalcValueElement.innerText = calc.toFixed(2), currencySelected()
    };

    const onResetClick = () => {
        const formCalcValueElement = document.querySelector(".js-calcValue");
        const formCurrencyElement = document.querySelector(".js-currency");

        formCalcValueElement.innerText = "N/A";
        formCurrencyElement.innerText = "";
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onSumbmitClick);
        formElement.addEventListener("reset", onResetClick);
    }

    init();

}