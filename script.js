const screenValuesDOM = document.querySelector('.values');
const screenResultDOM = document.querySelector('.result');
const devideDOM = document.querySelector('#devide');
const deleteAllDOM = document.querySelector('delete-all');
let buttonsDOM = document.querySelectorAll('.buttons');

let numberOne = [];
let numberTwo = [];
let operator = '';
let lastActionEqual = false;


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

    if(numberOne.length >= 15){
        var replaceNumber = numberOne = Number(numberOne).toExponential(2);
        screenResultDOM.innerHTML = (numberOne,replaceNumber);
        screenValuesDOM.innerHTML = (numberOne,replaceNumber);
    }
    else{
        screenResultDOM.innerHTML = numberOne;
        screenValuesDOM.innerHTML = numberOne;
    }

    operator = "";
    numberTwo = [];
    numberOne = [numberOne];
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
    else if (isNaN(inputValue) !== true || inputValue === ".") {
        if (lastActionEqual) {
            deleteAll()
            numberOne.push(inputValue)
            lastActionEqual = false;
        }
        else if (operator === "") numberOne.push(inputValue);
        else numberTwo.push(inputValue);
    }
    else if (inputValue === "=") {
        lastActionEqual = true;
        numberOne = Number(numberOne.join(''));
        numberTwo = Number(numberTwo.join(''));
        operate();
    }
    else if (inputValue === "+" || inputValue === "-" || inputValue === "x" || inputValue === "/" || inputValue === "%") {
        lastActionEqual = false;
        if (operator === "") {
            operator = inputValue;
        }
        else if (numberTwo.length !== 0 && numberOne !== [] && operator !== "") {
            numberOne = Number(numberOne.join(''));
            numberTwo = Number(numberTwo.join(''));
            operate();
            operator = inputValue;
        }
        else{
            operator = inputValue;
            screenValuesDOM.innerHTML = screenResultDOM.innerHTML;
        }
    }
    if (inputValue === "=" || inputValue === "C") {
        return
    }
    else { screenValuesDOM.innerHTML += inputValue; }
})) 