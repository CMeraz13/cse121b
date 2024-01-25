

// Adding two numbers together

let x = 7;
let y = 13;

let z = x + y;
console.log(z);

// Multipy two numbers together

z = x *y ;
console.log(z);

// Subtracting two numbers from each other

z = y - x;
console.log(z);

// Using Strings to create a sentence

let w1 = "Welcome ";
let w2 = "User!";
w1 += w2;
console.log(w1);

// Assigning variable

let e = 6;

// Incrementing a variable by three
let q = e;
q += 3;
console.log(q);

// Comparing Values

if(x === e){
    comparison_equal_true = "They are the same!";
    console.log(comparison_equal_true);
} else {
    comparison_equal_false = "They are not the same!";
    console.log(comparison_equal_false);
}

// Checking if a number is less than another number

if(q < y){
    comparison_less_than_true = "Variable "+ q + " is less than Variable " + y;
    console.log(comparison_less_than_true);
} else {
    comparison_less_than_false = "Variable " + y + " is greater than Variable "+ q;
    console.log(comparison_less_than_false);
}

// Checking if two numbers are NOT equal

if(z !== e){
    comparison_not_equal_true = "Variable " + z + " is not equal to Variable " + e;
    console.log(comparison_not_equal_true);
} else {
    comparison_not_equal_false = "Variable " + z + " is equal to Variable " + e;
    console.log(comparison_not_equal_false)
}

// Checking to see if a value is LESS than ten AND GREATER than 0

if(e < 10 && e > 0){
    comparison_less_than_and_greater_than_true = "Variable " + e + " is less than 10 and greater than 0!";
    console.log(comparison_less_than_and_greater_than_true);
} else {
    comparison_less_than_and_greater_than_false = "Variable " + e + " is not less than 10 and greater than 0!";
    console.log(comparison_less_than_and_greater_than_false);
}
