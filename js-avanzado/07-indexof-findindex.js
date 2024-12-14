const animals = ["perro", "gato", "toro", "gallo"]
const indexOfBull = animals.indexOf("toro")
console.log(indexOfBull)
const people = [
  { person: "A", age: "10" },
  { person: "B", age: "20" },
  { person: "C", age: "30" },
  { person: "D", age: "40" },
  { person: "C", age: "30" },
  { person: "C", age: "50" },
  { person: "C", age: "30" },
];
people.findIndex((person) => {
  if (person.name === "c" && person.age >= 45 && person.age <= 50) {
    return true;
  }
});
console.log(index)