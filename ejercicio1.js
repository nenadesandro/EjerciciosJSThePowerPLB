// Ejercicio 1
 // 1.1 Crea una variable llamada myFavoriteHero, asigna el valor Hulk a ella.
// 1.2 Crea una variable llamada x, asigna el valor 50 a ella.
// 1.3 Crea una variable llamada 'h' con el valor 5 y otra 'y' con el valor 10. 
// 1.4 Crea una otra variable 'z' y asignale el valor de 'h' + 'y'. 

const myFavoriteHero = "Hulk"
let x = 50 
let h = 5
let y = 10
let z = (h + y)
console.log(z)
// Ejercicio 2
//1.1 Dado el siguiente objeto, cambia el valor de la propiedad age a 25.
// const character = {name: 'Jack Sparrow', age: 10};
const character = { name:'Jack Sparrow', age: 25 }

// 1.2 Declara 3 variables con los nombres y valores siguientes 
let	firstName = 'Jon'; 
let lastName = 'Snow'; 
let age = 24; 
//Muestralos por consola de esta forma: 
	//'Soy Jon Snow, tengo 24 años y me gustan los lobos.'
console.log(`Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos.`)
//1.3 Dado el siguiente código, imprime con un console.log la suma del precio de ambos juguetes.
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};
const totalPrice = toy1.price + toy2.price;

console.log('La suma del precio de ambos juguetes es:', totalPrice);
// 1.4 Dado el siguiente código, actualiza el valor de la variable globalBasePrice a 25000 
// y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad 
// basePrice más el valor de la variable globalBasePrice.
// let globalBasePrice = 10000;
//const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
// const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

globalBasePrice = 25000;

const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

console.log(`${car1.name} tiene un precio final de: ${car1.finalPrice}`);
console.log(`${car2.name} tiene un precio final de: ${car2.finalPrice}`);
//1.1 Multiplica 10 por 5 y muestra el resultado mediante console.
let resultMult = 10*5
console.log(resultMult)
//1.2 Divide 10 por 2 y muestra el resultado en un console.
console.log(10 / 2);
//1.3 Muestra mediante un console el resto de dividir 15 por 9.
console.log(15 / 9);
//1.4 Usa el correcto operador de asignación que resultará en o = 15, 
//teniendo dos variables p = 10 y j = 5.
let p = 10;
let j = 5;

let o = p + j; 

console.log(o); 
//1.5 Usa el correcto operador de asignación que resultará en i = 50,
//teniendo dos variables c = 10 y m = 5.
let c = 10;
let m = 5;

let i = c * m;

console.log(i); 
//1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);
//1.2 Cambia el primer elemento de avengers a "IRONMAN"
const advengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
advengers[0] = "IRONMAN";
console.log(advengers);
//1.3 console numero de elementos en el array usando la propiedad correcta de Array.
const advengers1 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(advengers1.length);
//1.4 Añade 2 elementos al array: "Morty" y "Summer". 
//Muestra en consola el último personaje del array
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty");
rickAndMortyCharacters.push("Summer");
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1]);

//1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters1 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters1.pop();
const firstCharacter = rickAndMortyCharacters1[0];
const lastCharacter = rickAndMortyCharacters1[rickAndMortyCharacters1.length - 1]; 
console.log("Primer personaje:", firstCharacter); 
console.log("Último personaje:", lastCharacter); 

//1.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters2.splice(1, 1);
console.log(rickAndMortyCharacters2);
const number1 = 10;
const number2 = 20;
const number3 = 2;

// ejemplo
if(number1 === 10){
    console.log('number1 es estrictamente igual a 10')
}

if ((number2/number1)==2) {
  console.log("number2 dividido entre number1 es igual a 2");
}

if (number1!==number2) {
  console.log("number1 es estrictamente distinto a number2");
}

if (number3 != number1) {
  console.log("number3 es distinto number1");
}

if ((number3*5)==number1) {
  console.log("number3 por 5 es igual a number1");
}

if (number3*5==number1 && number1 * 2 == number2) {
  console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

if (number2/2==number1 || number1/5== number3) {
  console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}
//1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.
for (let i = 0; i < 10; i++) {
    console.log(i);
}
//1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
//cuando el resto del numero dividido entre 2 sea 0.
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
//1.3 Crea un bucle para conseguir dormir contando ovejas. 
//Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
//Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle 
//y cambia el mensaje en la décima vuelta a 'Dormido!'.
for (let i = 1; i <= 10; i++) {
    if (i < 10) {
        console.log('Intentando dormir 🐑');
    } else {
        console.log('Dormido!');
    }
}
// Ejercicio 7
function sum(numberOne, numberTwo) {
   return numberOne > numberTwo ? numberOne : numberTwo;
}
// Ejercicio 8
function findLongestWord(param) {
    let longestWord = '';

    for (let word of param) {
        if (word.length > longestWord.length) {
            longestWord = word; 
        }
    }

    return longestWord;
}

const avengers3 = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

console.log(findLongestWord(avengers3)); 

// Ejercicio 9
function sumAll(param) {
    let total = 0; 

    
    for (let number of param) {
        total += number;
    }

    return total; 
}


const numbers = [1, 2, 3, 5, 45, 37, 58];

console.log(sumAll(numbers)); 
// Ejercicio 10
function average(param) {
    let total = 0; 

    for (let numberr of param) {
        total += numberr;
    }

    const avg = total / param.length;

    return avg; 
}

const numbers1 = [12, 21, 38, 5, 45, 37, 6];

console.log(average(numbers1)); 
// Ejercicio 11
function averageWord(param) {
    let total = 0; 
    let count = 0; 

    
    for (let element of param) {
        if (typeof element === 'number') {
            total += element; 
            count++; 
        } else if (typeof element === 'string') {
            total += element.length; 
            count++; 
        }
    }

    
    if (count === 0) {
        return 0; 
    }

    
    const avg = total / count;

    return avg; 
}

// Array para probar la función
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

console.log(averageWord(mixedElements)); 
// Ejercicio 12
function removeDuplicates(param) {
    const uniqueElements = []; 


    for (let element of param) {
    
        if (!uniqueElements.includes(element)) {
            uniqueElements.push(element); 
        }
    }

    return uniqueElements; 
}


const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
];

console.log(removeDuplicates(duplicates)); 
// Ejercicio 13
function finderName(param, name) {
    
    const index = param.findIndex(element => element === name);

   
    if (index !== -1) {
        return { found: true, position: index }; 
    } else {
        return { found: false }; 
    }
}


const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
];
console.log(finderName(nameFinder, 'Tony'));
// Ejercicio 14
function repeatCounter(param) {
    const count = {}; 
    for (let word of param) {
        if (count[word]) {
            count[word] += 1;
        } else {
            count[word] = 1; 
        }
    }

    return count; 
}

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
];

console.log(repeatCounter(counterWords)); 
// Ejercicio 15
const products = [
    'Camiseta de Pokemon',
    'Pantalón coquinero',
    'Gorra de gansta',
    'Camiseta de Basket',
    'Cinrurón de Orión',
    'AC/DC Camiseta'
];

for (let product of products) {
    if (product.includes('Camiseta')) {
        console.log(product); 
    }
}
// Ejercicio 16
const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar'];

for (let place of placesToTravel) {
    console.log(place); 
}
// Ejercicio 17
const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
};

for (let key in alien) {
    console.log(`${key}: ${alien[key]}`); 
}

// Ejercicio 18
const placesToTravell = [
    {id: 5, name: 'Japan'},
    {id: 11, name: 'Venecia'},
    {id: 23, name: 'Murcia'},
    {id: 40, name: 'Santander'},
    {id: 44, name: 'Filipinas'},
    {id: 59, name: 'Madagascar'}
];


for (let i = placesToTravell.length - 1; i >= 0; i--) {
    if (placesToTravell[i].id === 11 || placesToTravell[i].id === 40) {
        placesToTravell.splice(i, 1); 
    }
}

console.log(placesToTravell); 
// Ejercicio 19
const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
];

for (let i = toys.length - 1; i >= 0; i--) {
   
    if (toys[i].name.includes('gato')) {
        toys.splice(i, 1); 
    }
}

console.log(toys); 
// Ejercicio 20
const popularToys = [];
const toys1 = [
    {id: 5, name: 'Buzz MyYear', sellCount: 10}, 
    {id: 11, name: 'Action Woman', sellCount: 24}, 
    {id: 23, name: 'Barbie Man', sellCount: 15}, 
    {id: 40, name: 'El gato con Guantes', sellCount: 8},
    {id: 40, name: 'El gato felix', sellCount: 35}
];

// Usamos un bucle for...of para recorrer todos los juguetes
for (let toy of toys1) {
    // Comprobamos si el sellCount es mayor a 15
    if (toy.sellCount > 15) {
        popularToys.push(toy); // Añadimos el juguete al array popularToys
    }
}

console.log(popularToys); // Imprime el array de juguetes populares
//Ejercicio 21
const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
];


const minors = [];
const adults = [];


for (let user of users) {
    if (user.years < 18) {
        minors.push(user.name); 
    } else {
        adults.push(user.name); 
    }
}

console.log("Usuarios menores de edad:", minors);
console.log("Usuarios mayores de edad:", adults);
//Ejercicio 22
const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
    { name: "Heura", isVegan: true },
    { name: "Salmon", isVegan: false },
    { name: "Tofu", isVegan: true },
    { name: "Burger", isVegan: false },
    { name: "Rice", isVegan: true },
    { name: "Pasta", isVegan: true },
];

let fruitIndex = 0;


for (let i = 0; i < foodSchedule.length; i++) {
    if (!foodSchedule[i].isVegan) {
     
        if (fruitIndex < fruits.length) {
            foodSchedule[i].name = fruits[fruitIndex];
            fruitIndex++; 
    }
}

console.log(foodSchedule);
}
// Ejercicio 23
const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
];


const smallMovies = [];
const mediumMovies = [];
const largeMovies = [];


for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    
    if (movie.durationInMinutes < 100) {
        smallMovies.push(movie); 
    } else if (movie.durationInMinutes >= 100 && movie.durationInMinutes < 200) {
        mediumMovies.push(movie);
    } else {
        largeMovies.push(movie); 
    }
}

console.log("Películas pequeñas:", smallMovies);
console.log("Películas medianas:", mediumMovies);
console.log("Películas grandes:", largeMovies);
// Ejercicio 24
const products3 = [
    { name: "Funko Dr. Strange", sellCount: 10 },
    { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
    { name: "Sable laser FX", sellCount: 23 },
    { name: "Varita de Voldemort", sellCount: 6 },
];


let totalSales = 0;


for (let i = 0; i < products3.length; i++) {
    totalSales += products3[i].sellCount; 
}

console.log("Total de ventas:", totalSales);
// Ejercicio 25
const products4 = [
    { name: "Funko Dr. Strange", sellCount: 10 },
    { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
    { name: "Sable laser FX", sellCount: 23 },
    { name: "Varita de Voldemort", sellCount: 6 },
];

let totalSales1 = 0;


for (let i = 0; i < products.length; i++) {
    totalSales1 += products[i].sellCount; 
}

const averageSales = totalSales1 / products.length;


console.log("Total de ventas:", totalSales1);
console.log("Media de ventas:", averageSales);
// Ejercicio 26
const goodProducts = [];
const badProducts = [];
const products5 = [
    { name: "Funko Dr. Strange", sellCount: 10 },
    { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
    { name: "Sable laser FX", sellCount: 23 },
    { name: "Varita de Voldemort", sellCount: 6 },
];


for (let i = 0; i < products5.length; i++) {
    if (products5[i].sellCount > 20) {
        goodProducts.push(products5[i]); 
    } else {
        badProducts.push(products5[i]); 
    }
}

console.log("Good Products:", goodProducts);
console.log("Bad Products:", badProducts);

