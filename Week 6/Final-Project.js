/* W06: Final Project */

const characterElement = document.querySelector("#characters");
let defaultCharacter = [];

const displayCharacters = (characters) => {
    characters.forEach(charactersChart => {
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        h3.textContent = charactersChart.className;
        //const img = document.createElement("img");
        //img.src = templeItem.imUrl;
        //img.alt = templeItem.location;
        article.appendChild(h3);
        //article.appendChild(img);
        characterElement.appendChild(article);
    });
}

const getDefaultCharacter = async () => {
    const response = await fetch ("https://run.mocky.io/v3/f9b28274-da42-4d9c-8e3d-a603a7a4a8ca")
    if (response.ok) {
       const data = await response.json();
       defaultCharacter = data;
       displayCharacters(defaultCharacter);
    };

};



getDefaultCharacter();