async function fetchFacts() {
    const fetchData = await fetch("https://catfact.ninja/facts")
    // console.log(fetchData);

    const data = await fetchData.json();
    // console.log(data);
    // console.log(data.data);
    // console.log(data.data[1]);
    // console.log(data.data[1].fact);

    return data
}

// fetchFacts()

async function displayFacts() {
    const response = await fetchFacts()
    // console.log(response)
    
    const catFacts = response.data
    // console.log(catFacts);

    const factsList = document.getElementById("factsList") 

    catFacts.forEach(item => {
        const listItem = document.createElement("li")

        const factItem = item.fact
        listItem.textContent = factItem

        factsList.appendChild(listItem)
    });
}

displayFacts()

// 
// 

async function fetchPokemon(id) {
    const fetchData = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    console.log(fetchData);

    const data = await fetchData.json();
    console.log(data);

    return data
}

// fetchPokemon(132)

async function displayPokemon() {
    const id = 132
    const response = await fetchPokemon(id)

    const pokemon = await response
    console.log(pokemon);
    console.log(pokemon.name);
    console.log(pokemon.id);
    console.log(pokemon.sprites.front_shiny);

    const card = `
        <h1>${pokemon.name}</h1>
        <h2>${pokemon.id}</h1>
        <img src="${pokemon.sprites.front_shiny}" alt= "Pokemon shiny card" />
    `

    const pokeCard = document.getElementById("pokeCard")
    pokeCard.innerHTML = card
}

displayPokemon()