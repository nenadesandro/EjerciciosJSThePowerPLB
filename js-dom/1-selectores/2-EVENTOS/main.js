const onButtonClicked = () => {
  console.log("Boton clickado")
}
let inputValue = "";
const onInputChanged = (input) => {
  console.log(input.value);
  inputValue = input.value;
  const inputTextH3 = document.querySelector("#input-text")
  inputTextH3.innerText = inputValue;
}
const buttonElement = document.querySelector("button")
buttonElement.addEventListener("click", onButtonClicked);
inputElement.addEventListener("input", onInputChanged);