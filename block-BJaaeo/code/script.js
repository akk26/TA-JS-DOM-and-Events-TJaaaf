let input = document.querySelector(".first-section");
let numbers = document.querySelector(".first-raw");
let calc = document.querySelector(".second");

let equal = document.querySelector(".equal");


let str = "";
function handle(event) {
  if (event.target.innerText == "C") {
    input.innerText = "";
    str = "";
  } else {
     str = str + event.target.innerText;
     input.innerText = str;
  }
}

equal.addEventListener("click", function ()  {
 input.innerText = eval(str);
});

numbers.addEventListener("click", handle);
calc.addEventListener("click", handle);


