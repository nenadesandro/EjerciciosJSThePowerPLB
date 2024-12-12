// 1.1 
const btnToClick = document.getElementById('btnToClick');
btnToClick.addEventListener('click', (event) => {
  console.log('Click event:', event);
});

// 1.2 
const inputFocus = document.querySelector('.focus');
inputFocus.addEventListener('focus', () => {
  console.log('Input value (focus):', inputFocus.value);
});

// 1.3 
const inputValue = document.querySelector('.value');
inputValue.addEventListener('input', () => {
  console.log('Input value (input):', inputValue.value);
});