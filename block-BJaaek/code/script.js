function randomColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};

function firstBox() {
  let colorCode = document.querySelector(`.first`);
  colorCode.style.backgroundColor = randomColor();

}

function secondBox() {
  let colorCodeTwo = document.querySelector(`.second`);
  colorCodeTwo.style.backgroundColor = randomColor();

}

let firstElm = document.querySelector(".first");
firstElm.addEventListener('click', firstBox);

let secondElm = document.querySelector(".second");
secondElm.addEventListener('mousemove', secondBox);


