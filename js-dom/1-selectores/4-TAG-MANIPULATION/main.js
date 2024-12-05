const TECHNOLOGIES = [
  "javascript",
  "HTML",
  "CSS",
  "React",
  "Vite",
  "Typescript",
];

const listElement = document.createElement("ul")
listElement.className = "technologies"

for (i = 0; i < TECHNOLOGIES.length; i++) {
  const technology = TECHNOLOGIES[i];
  document.createElement("li")
  liElement.innerText = technology
  listElement.append.liElement
}
document.body.append(listElement)