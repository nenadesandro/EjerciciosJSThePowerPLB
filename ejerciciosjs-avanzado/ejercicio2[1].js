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

// Ejercicio 2.1: Insertar un div vacío
document.body.appendChild(document.createElement('div'));

// Ejercicio 2.2: Insertar un div que contiene una p
const divWithP = document.createElement('div');
const pInDiv = document.createElement('p');
divWithP.appendChild(pInDiv);
document.body.appendChild(divWithP);

// Ejercicio 2.3: Insertar un div que contiene 6 p usando un loop
const divWithSixP = document.createElement('div');
for (let i = 0; i < 6; i++) {
  const p = document.createElement('p');
  divWithSixP.appendChild(p);
}
document.body.appendChild(divWithSixP);

// Ejercicio 2.4: Insertar una p con el texto 'Soy dinámico!'
const dynamicP = document.createElement('p');
dynamicP.textContent = 'Soy dinámico!';
document.body.appendChild(dynamicP);

// Ejercicio 2.5: Insertar texto en el h2 con la clase .fn-insert-here
const h2InsertHere = document.querySelector('.fn-insert-here');
h2InsertHere.textContent = 'Wubba Lubba dub dub';

// Ejercicio 2.6: Crear una lista ul > li con los textos del array
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement('ul');
apps.forEach(app => {
  const li = document.createElement('li');
  li.textContent = app;
  ul.appendChild(li);
});
document.body.appendChild(ul);

// Ejercicio 2.7: Eliminar todos los nodos con la clase .fn-remove-me
document.querySelectorAll('.fn-remove-me').forEach(node => node.remove());

// Ejercicio 2.8: Insertar una p con el texto 'Voy en medio!' entre los dos div
const allDivs = document.querySelectorAll('div');
if (allDivs.length >= 2) {
  const middleP = document.createElement('p');
  middleP.textContent = 'Voy en medio!';
  allDivs[0].after(middleP);
}

// Ejercicio 2.9: Insertar una p con el texto 'Voy dentro!' dentro de los div con la clase .fn-insert-here
document.querySelectorAll('.fn-insert-here').forEach(div => {
  const innerP = document.createElement('p');
  innerP.textContent = 'Voy dentro!';
  div.appendChild(innerP);
});
