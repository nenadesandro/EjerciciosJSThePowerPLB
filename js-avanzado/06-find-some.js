const fridgeFood = [
  { food: "fideos", id: "1" },
  { food: "hamburguesa", id: "2" },
  { food: "apio", id: "3" },
  { food: "pollo", id: "4" }]
const chicken = fridgeFood.find((food, index) => {
  if (food === "pollo") {
    return true;
  }
});
const people = [
  { person: "A", age: "10" },
  { person: "B", age: "20" },
  { person: "C", age: "30" },
  { person: "D", age: "40" }];
const hasPersonOver30 = (peopleArr) => {
  const personOver30 = peopleArr.find((person) => {
    if (person.age > 30) {
      return true;
    }
  });
  return !!personOver30;
}
console.log(hasPersonOver30(people));
const personOver30 = people.some((person) => {
  if (person.age > 30) {
    return true;
  }
});
