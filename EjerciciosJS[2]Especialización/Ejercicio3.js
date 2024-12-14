// 3.1 
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsCopy = [...pointsList];
console.log(pointsCopy);

// 3.2 
const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' };
const toyCopy = { ...toy };
console.log(toyCopy);

// 3.3 
const pointsList2 = [54, 87, 99, 65, 32];
const mergedPoints = [...pointsList, ...pointsList2];
console.log(mergedPoints);

// 3.4 Fusionar
const toyUpdate = { lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk'] };
const mergedToy = { toy, toyUpdate };
console.log(mergedToy);

// 3.5 
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const colorsWithoutSecond = [colors.slice(0, 2), colors.slice(3)];
console.log(colorsWithoutSecond);