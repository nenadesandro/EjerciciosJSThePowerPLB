const POKEMON_URL = `https://pokeapi.co/api/v2/`
let currentPokemonId = 1;
let currentPokemon;
const pokemonContainer = document.querySelector(`#pokemon-container`)
const getPokemonTemplate = () => {
  `
  <div class="pokemon">
  <span>ID:${pokemonData.id}</span>
  <h3>${pokemonData.name}</h3>
  <img src="${pokemonData.image}" alt="${pokemonData.name}" />
  </div>
  `;
}
const renderPokemon = () => {
  const template = getPokemonTemplate();
  pokemonContainer.innerHTML += template;
};
const fetchPokemon = () => {
  fetch(POKEMON_URL + 1).then((res) => res.json()).then(() => {
    console.log(response);
    currentPokemon = {
      id: response.id,
      name: response.name,
      image: response.sprites.front_default,
    };
    renderPokemon();
  });
}
const handleSearch = (event) => {
  const inputValue = event.target.valueAsNumber;
  currentPokemonId = inputValue;
  fetchPokemon()
};
searchInput.value = currentPokemonId;
fetchPokemon();
searchInput.addEventListener("input", handleSearch);