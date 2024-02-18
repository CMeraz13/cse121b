const characterElement = document.querySelector("#characters");
let defaultCharacter = [];

const displayCharacters = (characters) => {
    characters.forEach(charactersChart => {
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        h3.textContent = charactersChart.className;
        
        const gridCharacter = document.createElement("div");
        gridCharacter.classList.add("grid-character");
        //gridCharacter.textContent = `${charactersChart.className}, ${charactersChart.strengthStat}`;

        const h3strengthStat = document.createElement("h3");
        h3strengthStat.textContent = `${charactersChart.strengthStat}`;
        const h3dexterityStat = document.createElement("h3");
        h3dexterityStat.textContent = `${charactersChart.dexterityStat}`;
        const h3enduranceStat = document.createElement("h3");
        h3enduranceStat.textContent = `${charactersChart.enduranceStat}`;
        const h3magicStat = document.createElement("h3");
        h3magicStat.textContent = `${charactersChart.magicStat}`;
        const h3manaStat = document.createElement("h3");
        h3manaStat.textContent = `${charactersChart.manaStat}`;

        article.appendChild(h3);
        article.appendChild(gridCharacter);
        article.appendChild(h3strengthStat);
        article.appendChild(h3dexterityStat);
        article.appendChild(h3enduranceStat);
        article.appendChild(h3magicStat);
        article.appendChild(h3manaStat);

        const img = document.createElement("img");
        img.src = charactersChart.imgUrl;
        article.appendChild(img);

        characterElement.appendChild(article);
    });
}

const getDefaultCharacter = async () => {
    const response = await fetch("https://run.mocky.io/v3/5b23fe71-5e24-43bb-aa22-fc853214b61f");
    if (response.ok) {
        const data = await response.json();
        defaultCharacter = data;
        displayCharacters(defaultCharacter);
    } else {
        console.error('Failed to fetch data');
    }
};

function calculateStats() {
    // Get the input values
    const strengthValue = parseFloat(document.getElementById('strength').value);
    const dexterityValue = parseFloat(document.getElementById('dexterity').value);
    const enduranceValue = parseFloat(document.getElementById('endurance').value);
    const magicValue = parseFloat(document.getElementById('magic').value);
    const manaValue = parseFloat(document.getElementById('mana').value);

    // Check if the input values are valid numbers
    if (isNaN(strengthValue) || isNaN(dexterityValue) || isNaN(enduranceValue) || isNaN(magicValue) || isNaN(manaValue)){
        alert('Please enter valid numbers.');
        return;
    };
    
    // Calculate the total value
    const health = (strengthValue + dexterityValue + magicValue + manaValue + enduranceValue) * 100;
    const physicalAttack = (strengthValue + dexterityValue) * 20;
    const physicalDefense = (strengthValue + dexterityValue) * 8;
    const endurance = enduranceValue * 10;
    const magicalAttack = magicValue * 20;
    const magicalDefense = (magicValue + manaValue) * 8;
    const mana = manaValue * 15;
 
    // Display the results
    document.getElementById('statsResults').innerHTML = `<p>Health: ${health}</p>
    <p>Endurance: ${endurance}</p>
    <p>Physical Attack: ${physicalAttack}</p>
    <p>Physical Defense: ${physicalDefense}</p>
    <p>Magical Attack: ${magicalAttack}</p>
    <p>Magical Defense: ${magicalDefense}</p>
    <p>Mana: ${mana}</p>`;
}
getDefaultCharacter();
