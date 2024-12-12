const animals = ["panda", "nutria", "rana"];

for (let i = 0; i < animals.length; i++) {
  const animal = animals[i]
}
const getAnimalFood = (animal) => {
  let food;
  if (animal === "panda") {
    food = "bambu";
  } else if (animal === "nutria") {
    food = "pez";
  } else if (animal === "rana") { food = "bichos"; }
  return food;
}
const animalFood = animals.map((animal, index) => {
  const food = getAnimalFood(animal)
  return food;
})