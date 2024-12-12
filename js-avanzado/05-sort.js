const numbers = [1, 5, 10, 4, 5, 3, 6];
numbers.sort((a, b) => {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  return 0;
});
console.log(numbers)
const orderNumbersAscending = (a, b) => a - b;
const orderNumbersDescending = (a, b) => b - a;
numbers.sort(orderNumbersDescending);
