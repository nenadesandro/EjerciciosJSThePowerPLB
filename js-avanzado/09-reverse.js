const people = [
  { person: "A", age: "10" },
  { person: "B", age: "20" },
  { person: "C", age: "30" },
  { person: "D", age: "40" },
  { person: "C", age: "30" },
  { person: "C", age: "50" },
  { person: "C", age: "30" },
];
const newPeople = people.slice()
people.reverse();
console.log(newPeople)