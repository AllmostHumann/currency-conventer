{
    const currencySelected = (select) => {
        const form__currencyElement = document.querySelector(".js-currency");

        switch (select) {

            case "5.00":
                form__currencyElement.innerText = "EURO";
                break;

            case "4.90":
                form__currencyElement.innerText = "USD";
                break;

            case "0.49":
                form__currencyElement.innerText = "NOK";
                break;

            default:
                form__currencyElement.innerText = "Nie wybrano";

        }
    };

    const onSumbmitClick = (event) => {
        event.preventDefault();

        const form__calcValueElement = document.querySelector(".js-calcValue");
        const form__inputValueElement = document.querySelector(".js-inputValue");
        const form__selectValueElement = document.querySelector(".js-selectValue");

        const select = form__selectValueElement.value;
        const input = form__inputValueElement.value;
        const calc = input / select;

        form__calcValueElement.innerText = calc.toFixed(2), currencySelected(select)
    };

    const onResetClick = () => {
        const form__calcValueElement = document.querySelector(".js-calcValue");
        const form__currencyElement = document.querySelector(".js-currency");

        form__calcValueElement.innerText = "N/A";
        form__currencyElement.innerText = "";
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onSumbmitClick);
        formElement.addEventListener("reset", onResetClick);
    }

    init();

}