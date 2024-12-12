const places = [
  {
    title: "Random title",
    imgUrl:
      "https://images.unsplash.com/photo-1506466010722-395aa2bef877?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bG9yZCUyMG9mJTIwdGhlJTIwcmluZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Random title",
    imgUrl:
      "https://images.unsplash.com/photo-1570610155223-66279ba81b41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bG9yZCUyMG9mJTIwdGhlJTIw",
  },
  {
    title: "Random title",
    imgUrl:
      "https://images.unsplash.com/photo-1570888233388-35d777042d9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGxvcmQlMjBvZiUyMHRoZSUy",
  },
  {
    title: "Random title",
    imgUrl:
      "https://images.unsplash.com/photo-1490440101319-4c8eb3880432?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGxvcmQlMjBvZiUyMHRoZSUy",
  },
  {
    title: "Random title",
    imgUrl:
      "https://images.unsplash.com/photo-1460453429228-912eec8be349?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGxvcmQlMjBvZiUyMHRoZSUy",
  },
];


const targetContainer = document.querySelector("body");


places.forEach(place => {
  const div = document.createElement("div");

  const h4 = document.createElement("h4");
  h4.textContent = place.title;
  div.appendChild(h4);

  const img = document.createElement("img");
  img.src = place.imgUrl;
  img.alt = place.title;
  div.appendChild(img);

  targetContainer.appendChild(div);
});
const removeButton = document.createElement("button");
removeButton.textContent = "Remove last element";
removeButton.addEventListener("click", () => {
  const lastElement = targetContainer.lastElementChild;
  if (lastElement && lastElement.tagName === "DIV") {
    targetContainer.removeChild(lastElement);
  }
});

targetContainer.appendChild(removeButton);
