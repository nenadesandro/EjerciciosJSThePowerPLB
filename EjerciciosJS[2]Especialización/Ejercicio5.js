
// 5.1 
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const adults = ages.filter(age => age > 18);
console.log(adults);

// 5.2 
const evenAges = ages.filter(age => age % 2 === 0);
console.log(evenAges);

// 5.3 
const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' },
];
const lolStreamers = streamers.filter(streamer => streamer.gameMorePlayed === 'League of Legends');
console.log(lolStreamers);

// 5.4 
const streamersWithU = streamers.filter(streamer => streamer.name.includes('u'));
console.log(streamersWithU);

// 5.5 
const legendsStreamers = streamers.filter(streamer => {
  const includesLegends = streamer.gameMorePlayed.includes('Legends');
  if (includesLegends && streamer.age > 35) {
    streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
  }
  return includesLegends;
});
console.log(legendsStreamers);

// 5.6 
const input = document.querySelector('[data-function="toFilterStreamers"]');
input.addEventListener('input', event => {
  const value = event.target.value;
  const filteredStreamers = streamers.filter(streamer => streamer.name.includes(value));
  console.log(filteredStreamers);
});

// 5.7 
const button = document.querySelector('[data-function="toShowFilterStreamers"]');
button.addEventListener('click', () => {
  const value = input.value;
  const filteredStreamers = streamers.filter(streamer => streamer.name.includes(value));
  console.log(filteredStreamers);
});
