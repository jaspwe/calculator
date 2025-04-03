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
        return add(num1, num2);
    } else if (operator == '-'){
        return subtract(num1, num2);
    } else if (operator == '*'){
        return multiply(num1, num2);
    } else if (operator == '/'){
        return divide(num1, num2);
    }
}

let num1 = 0;
let operator = '';
let num2 = 0;

const display = document.querySelector(".display");
const numberPad = document.querySelector(".number-pad");

const backspace = document.createElement("button")
backspace.textContent = 'C';
backspace.id = 'C';
backspace.addEventListener("click", function(){
    display.textContent = display.textContent.slice(0, display.textContent.length - 1)
})
numberPad.appendChild(backspace);

const decimal = document.createElement("button")
decimal.textContent = '.';
decimal.id = '.';
decimal.addEventListener("click", function(){
    if (display.textContent.length < 15){
        display.textContent = display.textContent + button.id;
    }
})
numberPad.appendChild(decimal);

//number buttons
for (i = 1; i < 10; i++){
    const button = document.createElement("button")
    button.textContent = i;
    button.id = i;
    button.addEventListener("click", function(){
        if (display.textContent.length < 15){
            display.textContent = display.textContent + button.id;
        }
    })
    numberPad.appendChild(button);
}
const button = document.createElement("button")
    button.textContent = 0;
    button.id = 0;
    button.addEventListener("click", function(){
        if (display.textContent.length < 15){
            display.textContent = display.textContent + button.id;
        }
    })
    numberPad.appendChild(button);

//clear button
const clear = document.querySelector("#clear");
clear.addEventListener("click", function(){
    display.textContent = "";
    num1 = 0;
    num2 = 0;
})

//add
const addition = document.querySelector("#plus");
addition.addEventListener("click", function(){
    if (display.textContent !== "") {
        num1 = operator ? operate(operator, num1, Number(display.textContent)) : Number(display.textContent);
        display.textContent = "";
        operator = '+';
    }
});


//subtract
const subtraction = document.querySelector("#minus");
subtraction.addEventListener("click", function(){
    if (display.textContent !== "") {
        num1 = operator ? operate(operator, num1, Number(display.textContent)) : Number(display.textContent);
        display.textContent = "";
        operator = '-';
    }
});

//multiply
const multiplication = document.querySelector("#multiply");
multiplication.addEventListener("click", function(){
    if (display.textContent !== "") {
        num1 = operator ? operate(operator, num1, Number(display.textContent)) : Number(display.textContent);
        display.textContent = "";
        operator = '*';
    }
});

//divide
const division = document.querySelector("#divide");
division.addEventListener("click", function(){
    if (display.textContent !== "") {
        num1 = operator ? operate(operator, num1, Number(display.textContent)) : Number(display.textContent);
        display.textContent = "";
        operator = '/';
    }
});

//equals
const equals = document.querySelector("#equals");
equals.addEventListener("click", function(){
    if (operator && display.textContent !== "" && !isNaN(Number(display.textContent))) {
        num1 = operate(operator, num1, Number(display.textContent));
        if (num1.toString().length > 14){
            if (num1 % 1 != 0){
                display.textContent = num1.toPrecision(15);
            } else{
                display.textContent = "NUM TOO LONG"
                console.log("Answer: " + num1);
            }
        } else {
            display.textContent = num1;
        }
        operator = "";
    }
});