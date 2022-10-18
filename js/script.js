console.log("Kalkulejted!")

let formElement = document.querySelector(".js-form");
let form__inputValueElement = document.querySelector(".js-inputValue");
let form__calcValueElement = document.querySelector(".js-calcValue");
let form__calcButtonElement = document.querySelector(".js-calcButton");
let form__resetButtonElement = document.querySelector(".js-resetButton");
let form__selectValueElement = document.querySelector(".js-selectValue");
let form__currencyElement = document.querySelector(".js-currency");
let form__EUROElement = document.querySelector(".js-formEURO");
let form__USDElement = document.querySelector(".js-formUSD");
let form__NOKElement = document.querySelector(".js-formNOK");
let select = document.querySelector(".js-selectValue").value;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let select = form__selectValueElement.value;
    let input = form__inputValueElement.value;


    let calc = input / select;


    form__calcValueElement.innerText = calc.toFixed(2);

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
  
});

formElement.addEventListener("reset", () => {
    form__calcValueElement.innerText = "N/A";
    form__currencyElement.innerText = "";
})

