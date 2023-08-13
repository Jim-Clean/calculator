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
        return console.log(number.value);
    });
});

