/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];
/* async displayTemples Function */
const displayTemples = (temple) => {
    temple.forEach(templeItem => {
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        h3.textContent = templeItem.templeName;
        const img = document.createElement("img");
        img.src = templeItem.imageUrl;
        img.alt = templeItem.location;
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        const data = await response.json();
        templeList = data;
        displayTemples(templeList);
    };
};

/* reset Function */
const reset = () => {
    const articles = document.querySelectorAll("article");
    articles.forEach(article =>{
        article.remove()
    });
}

/* filterTemples Function */
const filterTemples = (temples) => {
    reset();
    const filter = document.querySelector("#filtered").value;
    switch (filter){
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter(temple => new Date(temple.dedicated)< new Date(1950, 0, 1)));
            break;
        case "all":
            displayTemples(temples);
            break;
    }
};

//getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {filterTemples (templeList) });

getTemples();