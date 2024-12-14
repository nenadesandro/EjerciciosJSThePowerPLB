// 4.1 
const users = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' },
];
const userNames = users.map(user => user.name);
console.log(userNames);

// 4.2 
const modifiedNames = users.map(user => ({
  user,
  name: user.name.startsWith('A') ? 'Anacleto' : user.name,
}));
console.log(modifiedNames);

// 4.3 
const cities = [
  { isVisited: true, name: 'Tokyo' },
  { isVisited: false, name: 'Madagascar' },
  { isVisited: true, name: 'Amsterdam' },
  { isVisited: false, name: 'Seul' },
];
const visitedCities = cities.map(city => ({
  city,
  name: city.isVisited ? `${city.name} (Visitado)` : city.name,
}));
console.log(visitedCities);
