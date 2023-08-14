const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const multiply = function(a, b) {
   return a*b;
};

const divide = function(a, b) {
    return a/b;
};

const operate = function(num1,operator,num2,) {
    if (operator === "+") {
        return add(num1,num2);
    } else if (operator === "-") {
        return subtract(num1,num2);
    } else if (operator === "*") {
        return multiply(num1,num2);
    } else if (operator === "/") {
        return divide(num1,num2);
    };
};

const buttons = document.querySelectorAll('button');
    // we use the .forEach method to iterate through each button
    buttons.forEach((button) => {

  // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        return document.getElementById("display").innerHTML += button.value;
    });
});


const numbers = document.querySelectorAll('button.num');
    // we use the .forEach method to iterate through each button
    numbers.forEach((number) => {

  // and for each one we add a 'click' listener
    number.addEventListener('click', () => {
        if ("ops" in window) { 
            console.log(number.value);
            num2 = parseInt(number.value);
            return num2
        } else {
            console.log(number.value);
            num1 = parseInt(number.value);
            return num1   
        }
    });
});


const operators = document.querySelectorAll('button.operator');
    // we use the .forEach method to iterate through each button
    operators.forEach((operator) => {

  // and for each one we add a 'click' listener
    operator.addEventListener('click', () => {
        console.log(operator.getAttribute('op'));
        ops = operator.getAttribute('op');
        return ops
    });
});

const calc = function() {
    return console.log(add(num1, num2));
}