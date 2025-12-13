MainDex = null;
TypeDex = null;
dictionary = new Map(); //To prevent excessive calls

async function accessAPI(url) {
    if (dictionary.has(url)) return dictionary.get(url);
    try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = JSON.parse(await response.text());
    dictionary.set(url, data);
    return data;
  } catch (error) {
    console.error("Error fetching or parsing JSON:", error);
  }
}

async function startUp(){
    MainDex = await accessAPI("https://pokeapi.co/api/v2/pokedex/1");
    console.log(MainDex.pokemon_entries);
    console.log(MainDex);
    TypeDex = await accessAPI("https://pokeapi.co/api/v2/type");
    TypeDex = TypeDex.results;
    let randomNum = Math.floor(Math.random() * MainDex.pokemon_entries.length);
    //console.log(MainDex.pokemon_entries[randomNum].pokemon_species.url);
    renderCard(await accessAPI(MainDex.pokemon_entries[randomNum].pokemon_species.url));

    randomNum = Math.floor(Math.random() * MainDex.pokemon_entries.length);
    renderCard(await accessAPI(MainDex.pokemon_entries[randomNum].pokemon_species.url));
}


let mainContainer = document.querySelector("#results");
let buttonboy = document.querySelector("button");
let searchBar = document.querySelector("#searchparameters");

startUp();


async function typeTemplate(pokemon){
    types = (await accessAPI(pokemon.varieties[0].pokemon.url)).types;
    console.log(types);
    return types.map((tag)=> `<p>${uppercase(tag.type.name)}</p>`).join(' ');
}

function getFlavor(pokemon){
    let enEntries = pokemon.flavor_text_entries.filter(function(flav){
        return(flav.language.name == "en")
    });

    let randomNum = Math.floor(Math.random() * enEntries.length);
    return(enEntries[randomNum].flavor_text)
}
function uppercase(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
}

async function pokemonTemplate(pokemon){
    console.log(await accessAPI(pokemon.varieties[0].pokemon.url));
    return await `<div class="card">
            <img src="${(await accessAPI(pokemon.varieties[0].pokemon.url)).sprites.front_default}" alt="${pokemon.name}">
            <div class="pokemonDetails">
                <div class="types">
                    ${await typeTemplate(pokemon)}
                </div>
                <h2>${uppercase(pokemon.name)}</h2>
                <div class="pokemonDescription">
                    <p>${getFlavor(pokemon)}</p>
                </div>
            </div>
        </div>`;
}


async function search() {

    let query = searchBar.value;
    // console.log(MainDex);
    let filteredPokemon = MainDex.pokemon_entries.filter(function(buddy){
        return ( 
            buddy.entry_number.toString().includes(query.toLowerCase().trim()) ||
            buddy.pokemon_species.name.toLowerCase().includes(query.toLowerCase().trim())
        )
    });
    mainContainer.innerHTML = '';
    filteredPokemon.forEach(async buddy => { 
        card = await accessAPI(buddy.pokemon_species.url)
        //console.log(card);
        renderCard(card);
    });
}

async function renderCard(card) {
    //console.log(card);
    let html = await pokemonTemplate(card);
    mainContainer.innerHTML += html;
}

buttonboy.addEventListener('click', search);

const results = document.querySelector('#results');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');
const modalDesc = modal.querySelector('#Mdescription');
const modalTypes = modal.querySelector('#Mtypes');
const modalName = modal.querySelector('#Mname');

// Event listener for opening the modal
results.addEventListener('click', openModal);

function openModal(e) {
// Code to show modal  - Use event parameter 'e'   
    console.log(e.target);
    a = e.target;
    if (e.target.parentElement.getAttribute("class") == "card") a = e.target.parentElement;
    else if (e.target.parentElement.parentElement.getAttribute("class") == "card") a = e.target.parentElement.parentElement;
    if (a.getAttribute("class") != "card"){
        console.log(a);
        return;
    }
    const img = a.querySelector('img');
    let src = img.getAttribute('src');
    let alt = img.getAttribute('alt');

    modalImage.src = src;
    modalImage.alt = alt;

    modalDesc.innerHTML = a.querySelector('.pokemonDescription').innerHTML;
    modalTypes.innerHTML = a.querySelector('.types').innerHTML;
    modalName.innerHTML = a.querySelector('h2').innerHTML;

    modal.showModal();
    modal.style.display = "grid";
}
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
    modal.style.display = "none";
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    modal.style.display = "none";
    }
});
      