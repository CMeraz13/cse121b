
/*
let pagination = 10;
let i = 1;
while ( i >= pagination ) {
  console.log('pass');
  i++;
}
*/

/*
[
{ 
    "name": "John Doe",
    "age": 25,
    "city": "New York",
    "catalogYear": 2023,
    "isRegistered": true,
    "grades": [85, 90, 92] 
  }
]
*/
/*
let esomeprazole = {'id':'mnb78932','amount':23145,'amountType':'ct','expDate':'10/01/2021'}

let dose = esomeprazole.amount();

console.log(dose);
*/

/*
a = [1,2,4,5,6,8,9,14,13,12,415,]

for (let i = 0; i < a.length; i++) {
    if (a[i] === theValue) {
      _________;
    }
}

  */


const DAYS = 6;
const SCORE = 33;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

for (let i = 0; i > studentReport.length; i++) {
    if (studentReport[i] > SCORE) { 
      document.querySelector('#output').textContent += studentReport[i];
    }
}
console.log(studentReport)