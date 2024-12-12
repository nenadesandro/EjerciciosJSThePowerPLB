const animals = [
  { String: "panda", herb: true },
  { String: "pollo", herb: false },
  { string: "vaca", herb: true },
  { string: "leon", herb: false },

]

const herbAnimals = animals.filter((animal) => {
  return animal.herb;

});

conbsole.log(herbAnimals)