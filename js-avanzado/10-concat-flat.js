const animals = ["perro", "gato", "toro", "gallo"];
const newAnimals = ["lagartija", "pez"];
const updatedAnimals = animals.concat(newAnimals)

const batchOfAnimals = [
  ["lagartija", "pez"],
  ["lagartija", "pez"],
  ["lagartija", "pez"],
];
const fullAnimalList = batchOfAnimals.flat();
console.log(fullAnimalList)