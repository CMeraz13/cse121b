/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

const fullName = ' Cesar Meraz';
const currentYear = new Date().getFullYear();
const profilePicture = `images/pfp.png`;


/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.getElementById('profile');


/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `profile image of ${fullName}`);


/* Step 5 - Array */

const favFood = ["Rice", "Chicken", "Stake", "Apple Pie", "Cherry Danish"];
foodElement.textContent = favFood.join(', ');
const newFood = "Ice Cream";
favFood.push(newFood);
foodElement.innerHTML += `<br> ${favFood.join(', ')}`;
favFood.shift();
foodElement.innerHTML += `<br> ${favFood.join(', ')}`;
favFood.pop();
foodElement.innerHTML += `<br> ${favFood.join(', ')}`;

