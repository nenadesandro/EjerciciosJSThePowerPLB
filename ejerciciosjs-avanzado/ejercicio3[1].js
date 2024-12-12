// 1.1 
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul = document.createElement('ul');
countries.forEach(country => {
  const li = document.createElement('li');
  li.textContent = country;
  ul.appendChild(li);
});
document.body.appendChild(ul);

// 1.2 
const elementToRemove = document.querySelector('.fn-remove-me');
if (elementToRemove) {
  elementToRemove.remove();
}

// 1.3 
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const divPrintHere = document.querySelector('[data-function="printHere"]');
const ulCars = document.createElement('ul');
cars.forEach(car => {
  const li = document.createElement('li');
  li.textContent = car;
  ulCars.appendChild(li);
});
divPrintHere.appendChild(ulCars);

// 1.4 
const countryImages = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];

const divContainer = document.getElementById('countries-divs');
countryImages.forEach(item => {
  const div = document.createElement('div');
  const h4 = document.createElement('h4');
  h4.textContent = item.title;
  const img = document.createElement('img');
  img.src = item.imgUrl;
  img.alt = item.title;
  div.appendChild(h4);
  div.appendChild(img);
  divContainer.appendChild(div);
});

// 1.5 
const removeLastBtn = document.createElement('button');
removeLastBtn.textContent = 'Eliminar último div';
removeLastBtn.addEventListener('click', () => {
  const divs = divContainer.querySelectorAll('div');
  if (divs.length > 0) {
    divContainer.removeChild(divs[divs.length - 1]);
  }
});
document.body.appendChild(removeLastBtn);

// 1.6 
const divs = divContainer.querySelectorAll('div');
divs.forEach(div => {
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Eliminar este div';
  removeBtn.addEventListener('click', () => {
    divContainer.removeChild(div);
  });
  div.appendChild(removeBtn);
});