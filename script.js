const screenValuesDOM = document.querySelector('.values');
const screenResultDOM = document.querySelector('.result');
const devideDOM = document.querySelector('#devide');
const deleteAllDOM = document.querySelector('delete-all');
let buttonsDOM = document.querySelectorAll('.buttons');

let numberOne = [];
let numberTwo = [];
let operator = '';


const add = function (numberOne, numberTwo) {
    return numberOne + numberTwo;
};

const subtract = function (numberOne, numberTwo) {
    return numberOne - numberTwo;
};

const multiply = function (numberOne, numberTwo) {
    return numberOne * numberTwo
};

const devide = function (numberOne, numberTwo) {
    return numberOne / numberTwo
};

const percentage = function (numberOne, numberTwo) {
    return (numberOne / 100) * numberTwo;
};

const operate = function () {
    if (operator === "+") numberOne = add(numberOne, numberTwo).toFixed(3);
    else if (operator === "-") numberOne = subtract(numberOne, numberTwo).toFixed(3);
    else if (operator === "x") numberOne = multiply(numberOne, numberTwo).toFixed(3);
    else if (operator === "/") numberOne = devide(numberOne, numberTwo).toFixed(3);
    else if (operator === "%") numberOne = percentage(numberOne, numberTwo).toFixed(3);
    
    if (numberOne.length > 15) numberOne.toFixed(6);
    screenResultDOM.innerHTML = numberOne;
    screenValuesDOM.innerHTML = numberOne;
    operator = "";
    numberTwo = [];
    numberOne = [numberOne];
    console.log(typeof numberOne[0])
};

const deleteAll = function () {
    numberOne = [];
    numberTwo = [];
    operator = "";
    screenResultDOM.innerHTML = "";
    screenValuesDOM.innerHTML = "";
}


buttonsDOM.forEach(button => button.addEventListener('click', (e) => {
    let inputValue = e.target.innerText;

    if (inputValue === 'C') deleteAll();
    else if (isNaN(inputValue) !== true) {
        if (operator === "") numberOne.push(inputValue);
        else if(typeof numberOne[0] === "number"){
            deleteAll()
            numberOne.push(inputValue)
        }
        else numberTwo.push(inputValue);
    }
    else if (inputValue === "=") {
        numberOne = Number(numberOne.join(''));
        numberTwo = Number(numberTwo.join(''));
        operate();
    }
    else if (inputValue === "+" || inputValue === "-" || inputValue === "x" || inputValue === "/" || inputValue === "%") {
        if (operator === "") {
            operator = inputValue;
        }
        else if(numberTwo !== [] || numberOne !== [] || operator !== "") {
            numberOne = Number(numberOne.join(''));
            numberTwo = Number(numberTwo.join(''));
            operate();
            operator = inputValue;
        }
    }
    if (inputValue === "=" || inputValue === "C"){
     return
     }  
     else{screenValuesDOM.innerHTML += inputValue;} 
})) 