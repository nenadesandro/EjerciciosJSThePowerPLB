// Ejercicio 1.1: Mostrar el botón con clase .showme
const buttonShowMe = document.querySelector('.showme');
console.log(buttonShowMe);

// Ejercicio 1.2: Mostrar el h1 con id #pillado
const h1Pillado = document.querySelector('#pillado');
console.log(h1Pillado);

// Ejercicio 1.3: Mostrar todos los elementos <p>
const paragraphs = document.querySelectorAll('p');
console.log(paragraphs);

// Ejercicio 1.4: Mostrar todos los elementos con clase .pokemon
const pokemons = document.querySelectorAll('.pokemon');
console.log(pokemons);

// Ejercicio 1.5: Mostrar todos los elementos con el atributo data-function="testMe"
const testMeElements = document.querySelectorAll('[data-function="testMe"]');
console.log(testMeElements);

// Ejercicio 1.6: Mostrar el tercer elemento con el atributo data-function="testMe"
const thirdTestMe = document.querySelectorAll('[data-function="testMe"]')[2];
console.log(thirdTestMe);
