/*
const msg = document.querySelector('');


//
add
*/
/*
recordedSpeed = 10;

let speed = recordedSpeed;

speed -= 5;
console.log (speed);
*/

/*
let scores = [56, 78, 95, 77, 65, 86];
let target = scores.indexOf(78);

console.log(target);
*/
/*
let pagination = 10;
let i = 1;
while ( i >= pagination ) {
  console.log(`pass ${i}`);
  i++;
}
*/
/*
const scores = [99, 88, 93, 70, 84, 69];
const outreach = scores.filter(total => total < 70);

console.log(outreach);
*/
/*
let product = {'id':'455689A','price':23.99,'cost':15,'shelfDate':'10/01/2024'}
let itemcost = product['cost'];
console.log(itemcost);
*/
/*
let speed = 5;
const computeWindChill = function(windSpeed, temperature) {
    // Fahrenheit Only
    return 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
  };


computeWindChill(speed, temp);

*/
/*
const countries = ["Canada", "Chili", "Colombia", "Croatia", "Costa Rica"];
const countriesLong = countries.filter((country) => country.length > 7);
*/

/* a = [1, 2,3,4,5,6,7,8,9,13];
for (let i = 0; i < a.length; i++) {
    if (a[i] === theValue) {
      break;
    }
};
*/
/*
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 34,
    eyeColor: "brown"
};

console.log(person);
*/


/*
function process(aval, bval) {
    return aval / 2 + bval;
};

a = 100;
b = 45;
result = process(b, a);
console.log(result);

//122.5

*/


const msg = document.querySelector("#message");
msg.textContent = "You win!";
msg.appendChild(msg);