// const game = document.getElementById("game")

// const grid = document.createElement("section");

// grid.setAttribute("class", "grid");

// game.appendChild(grid);

// cardsArray.forEach((item) => {
//   const card = document.createElement("div");
//   card.classList.add("card");

//   card.dataset.name = item.pic;

//   card.style.backgroundImage= `url(${item.img})`;

//   grid.appendChild(card);
// })
let count_div = document.querySelector(".count_div");
let gameGrid = cardsArray.concat(cardsArray);
gameGrid.sort(() => 0.5 - Math.random());

let firstGuess = "";
let secondGuess = "";
let count = 0;
let previousTarget = null;
let delay = 1200;

const game = document.getElementById("game");

const grid = document.createElement("section");
grid.classList.add("grid");

game.append(grid);

gameGrid.forEach((item) => {
  let card = document.createElement("div");
  card.classList.add("card");
  card.dataset.name = item.name;

  let front = document.createElement("div");
  front.classList.add("front");

  let back = document.createElement("div");
  back.classList.add("back");
  back.style.backgroundImage = `url(${item.img})`;

  grid.append(card);
  card.append(front);
  card.append(back);
});

const match = () => {
  let selected = document.querySelectorAll(".selected");
  selected.forEach((card) => {
    card.classList.add("match");
  });
};

const resetGuesses = () => {
  firstGuess = "";
  
  secondGuess = "";
  count = 0;

  var selected = document.querySelectorAll(".selected");
  selected.forEach((card) => {
    card.classList.remove("selected");
  });
};

let count_clicks = 0;

grid.addEventListener("click", function (event) {
  let clicked = event.target;

  count_clicks++;

  count_div.innerHTML = `Moves - ${count_clicks}`;

  if (
    clicked.nodeName === "SECTION" ||
    clicked === previousTarget ||
    clicked.parentNode.classList.contains("selected")
  ) {
    return;
  }

  if (count < 2) {
    count++;
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      console.log(firstGuess);
      clicked.parentNode.classList.add("selected");
    } else {
      secondGuess = clicked.parentNode.dataset.name;
      console.log(secondGuess);
      clicked.parentNode.classList.add("selected");
    }
    if (firstGuess !== "" && secondGuess !== "") {
      if (firstGuess === secondGuess) {
        setTimeout(match, delay);
        setTimeout(resetGuesses, delay);
      } else {
        setTimeout(resetGuesses, delay);
      }
    }
    previousTarget = clicked;
  }
});
