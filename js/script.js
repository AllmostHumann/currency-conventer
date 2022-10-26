{
    const getResult = (amount, currency) => {

        const rateEUR = 4.7723;
        const rateUSD = 4.7538;
        const rateNOK = 0.4604;

        switch (currency) {

            case "EUR":
                return amount / rateEUR;

            case "USD":
                return amount / rateUSD;

            case "NOK":
                return amount / rateNOK;

        }
    };

    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-resultValue");
        resultElement.innerText = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;

    };


    const onSubmitClick = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amountValue");
        const currencyElement = document.querySelector(".js-currencyValue");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = getResult(amount, currency);

        updateResultText(amount, result, currency);

    };

    const onResetClick = () => {
        const resultElement = document.querySelector(".js-resultValue");
        const currencyElement = document.querySelector(".js-currency");

        resultElement.innerText = "N/A";
        currencyElement.innerText = "";
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onSubmitClick);
        formElement.addEventListener("reset", onResetClick);
    };

    init();

}