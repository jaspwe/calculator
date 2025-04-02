function add(origin, number){
    return origin + number;
}

function subtract(origin, number){
    return origin - number;
}

function multiply(origin, number){
    return origin * number;
}

function divide(origin, number){
    return origin / number;
}

function operate(operator, num1, num2){
    if (operator == '+'){
        add(num1, num2);
    } else if (operator == '-'){
        subtract(num1, num2)
    } else if (operator == '*'){
        multiply(num1, num2)
    } else if (operator == '/'){
        divide(num1, num2)
    }
}

let num1 = 0
let operator = '+'
let num2 = 0

const display = document.querySelector(".display")
const buttons = document.querySelectorAll("button")