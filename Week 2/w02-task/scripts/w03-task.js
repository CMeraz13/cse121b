/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1 + number2;
}
function addNumbers(){
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/*Function Expression - Subtract Numbers */

function subtract(number1, number2){
    return number1 - number2;
}
function subtractNumbers(){
    var subtract1 = document.querySelector("#subtract1").value;
    var subtract2 = document.querySelector("#subtract2").value;
    document.querySelector("#difference").value = subtract(subtract1, subtract2);
}
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);


/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => number1 * number2;

function multiplyNumbers() {
    var factor1 = document.querySelector("#factor1").value;
    var factor2 = document.querySelector("#factor2").value;
    document.querySelector("#product").value = multiply(factor1, factor2);
}
document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);



/* Open Function Use - Divide Numbers */

function divide(number1, number2){
    return number1 / number2;
}
function divideNumbers(){
    var dividend = document.querySelector("#dividend").value;
    var divisor = document.querySelector("#divisor").value;
    document.querySelector("#quotient").value = divide(dividend, divisor);
}
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */

document.querySelector("#getTotal").addEventListener("click", function(){
    let subTotal = parseFloat(document.querySelector("#subtotal").value);
    console.log("Subtotal", subTotal);
    let applyDiscount = document.querySelector("#member").checked;
    if (applyDiscount){
        subTotal *= 0.8; // Applying 20% discount
    }

    let totalDue = `$${subTotal.toFixed(2)}`; // Template literal for string interpolation
    document.querySelector("#total").textContent = totalDue;
    console.log(totalDue);
});

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector("#array").textContent = `[${arrayNumbers.join(', ')}]`

/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = arrayNumbers.filter(number => number % 2 !== 0);

/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = arrayNumbers.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = arrayNumbers.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").innerHTML = arrayNumbers.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */
document.querySelector("#sumOfMultiplied").innerHTML = arrayNumbers.map(number => number * 2).reduce((sum, number) => sum + number, 0);
