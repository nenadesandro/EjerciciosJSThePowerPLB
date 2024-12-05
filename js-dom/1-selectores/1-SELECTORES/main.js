console.log("Hola");
const title = document.querySelector("h1");
title.innerText = "aprendemos selectores con JS";
// const secondTitle = document.querySelector("h2:last-of-type")
const studyTitle = document.getElementById("study");
const technologies = document.getElementsByClassName("technology")
for (let i = 0; < technologies.length; i++) {
  const technology = technologies[i];
  const prevText = technology.innerText;
  technology.innertext = `${i + 1} - ${prevText}`;

}
const thepower_url = "https://www.google.com/maps?authuser=0"
const titlelink = document.querySelector("h2.title-link > a")