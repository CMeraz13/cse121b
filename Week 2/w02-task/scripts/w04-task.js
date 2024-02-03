/* LESSON 3 - Programming Tasks */

/* Profile Object  */

const myProfile = {
    name: "Cesar Meraz",

/* Populate Profile Object with placesLive objects */

    placesLived: [
        {
            place: "San Lorenzo Valle, HN",
            length: "5 Years"
        },
        {
            place: "Ardmore, PA",
            length: "14 Years"
        },
        {
            place: "Louisville, KY",
            length: "6 Months"
        },
        {
            place: "Provo, UT",
            length: "2 Years~"
        }
    ],
    favoriteFoods: [
        "Rice",
        "Steak",
        "Chicken",
        "Apple Pie",
        "Cherry Danish",
        "Pasta"
    ],
    myHobbies: [
        "Reading",
        "Writing",
        "Playing Video Games",
        "Hanging out with friends",
        "Playing Soccer"
    ]
};

/* DOM Manipulation - Output */

/* Name */
document.getElementById("name").textContent = myProfile.name;

/* Photo with attributes */
const profilePicture = "../images/pfp.png"; // Assuming this path is correct
const imageElement = document.querySelector('#photo');
imageElement.setAttribute('src', profilePicture);

/* Favorite Foods List */
let ul = document.querySelector("#favorite-foods");
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    ul.appendChild(li);
});

/* Hobbies List */
ul = document.querySelector("#hobbies");
myProfile.myHobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    ul.appendChild(li);
});

/* Places Lived DataList */
const dl = document.querySelector("#places-lived");
myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    dl.appendChild(dt);
    let dd = document.createElement("dd");
    dd.textContent = place.length;
    dl.appendChild(dd);
});