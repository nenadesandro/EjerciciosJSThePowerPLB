const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((acc, next) => {
  return acc + next;
});
const words = ["hola", "que", "tal", "?"]
const sentence = words.reduce((acc, next) => {
  return acc + next
})
const animals = [
  { String: "panda", herb: true },
  { String: "pollo", herb: false },
  { string: "vaca", herb: true },
  { string: "leon", herb: false },

]
const herbAnimals = animals.reduce((acc, next) => {
  if (next.herb) {
    acc.push(next);
  }
  return acc;
}, [])