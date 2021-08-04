
// without event delegation

let boxOne = document.querySelector(".boxes");
boxOne.children
let arr = Array.from(boxOne.children)
arr.map(elm => {
  elm.classList.add("firstBox");
});
let first = document.querySelectorAll(".firstBox");
first.forEach((elm, index) => {
  elm.addEventListener("click", function () {
    elm.innerText = index + 1;
    setTimeout(() => {
      elm.innerText = "";
    }, 5000);
  })
});

// with event delegation

let boxTwo = document.querySelectorAll(".boxes");
let two = boxTwo[1];
let number = two.querySelectorAll(".box"); number.forEach((elm, index) => {
  elm.setAttribute("data-text", `${index + 1}`)
  two.addEventListener("click", (event) => {
    let text = event.target.dataset.text;
    event.target.innerText = text
    setTimeout(() => {
      event.target.innerText = ""
    }, 5000);
  })
});
 


