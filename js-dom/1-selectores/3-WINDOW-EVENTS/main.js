const pTextList = []
const onMouseMove = (event) => {
  console.log(event.target);
  if (event.target.tagName === "P") {
    if (pTextList.includes(event.target.className)) {
      pTextList.push(event.target.className);
    }
    if (pTextList.length === 5) {
      document.body.style.height = "200vh";
    }
  }
  let enteredPassword = false;
  const onScroll = () => {
    console.log("Scroll")
    if (window.scrollY > window.outerHeight / 2) {
      console.log("Has scrolleado más de la mitad");
      const password = prompt("introduce la contraseña");
      if (password === "1234") {
        buttonElement.styule.display = "block";
        enteredPassword = true;
      }
    }
  }
};
const onCompletegame =
  window.addEventListener("mousemove")
window.addEventListener("scroll",)
const buttonElement = document.querySelector("#complete-game")
