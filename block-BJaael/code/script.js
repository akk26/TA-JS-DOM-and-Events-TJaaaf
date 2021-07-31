let boxContainer = document.createElement("section");
document.body.append(boxContainer);
let classContainer = document.querySelector("section");
classContainer.setAttribute("class", "eachBox");
let selectedBox = document.querySelector(".eachBox");


for (let i = 1; i <= 500; i++) {
  let box = document.createElement("div");
  selectedBox.append(box);
  let className = document.querySelectorAll("div");
  className.forEach((elm) => {
    elm.setAttribute("class", "smallBox");
  });
}

function randomColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
}

function randomNumber() {
  let number = Math.floor(Math.random() * 500);
  return number;
}

function firstBox() {
  let colorCode = document.querySelectorAll(`.smallBox`);
  colorCode.forEach(elm => {
    elm.style.backgroundColor = randomColor();
    elm.innerText = randomNumber();
  }) 
}

let firstElm = document.querySelector(".eachBox");
firstElm.addEventListener("mousemove", firstBox);

