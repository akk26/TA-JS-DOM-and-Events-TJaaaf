let form = document.querySelector("form");

let allLists = document.querySelector("ul");

function all(event) {
  event.preventDefault();

  let elements = event.target.elements.movie.value;

  let list = document.createElement("li");
  list.classList.add("list");

  let checkbox = document.createElement("input");
  checkbox.classList.add("checkbox");
  checkbox.type = "checkbox";

  let inputName = document.createElement("h3");
  inputName.classList.add("inputName");
  inputName.innerText = elements;

  let cross = document.createElement("p");
  cross.classList.add("cross");
  cross.innerHTML = "❌";

  cross.addEventListener("click", () => {
    list.innerText = "";
  });

  allLists.append(list);
  list.append(checkbox, inputName, cross);

  event.target.elements.movie.value = ""; 

}

form.addEventListener("submit", all);


