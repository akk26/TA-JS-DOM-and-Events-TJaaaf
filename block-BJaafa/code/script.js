const boxes = document.querySelectorAll(".box");
const text = document.querySelector("#heading");
const strategy = document.querySelector("#strategy");
const restartBtn = document.querySelector("#restart");

const drawBoard = () => {
  boxes.forEach((box, i) => {
    let styleString = "";
    if (i < 3) {
      styleString += "border: 3px solid var(--text);";
    }
    if (i % 3 === 0) {
      styleString += "border: 3px solid var(--text);";
    }
    if (i % 3 === 2) {
      styleString += "border: 3px solid var(--text);";
    }
    if (i > 5) {
      styleString += "border: 3px solid var(--text);";
    }
    box.style = styleString;
    box.addEventListener("click", boxClicked);
  });
};

const spaces = [];
const tick_circle = "0️⃣" ;
const tick_x = "❌"  ;
let currentPlayer = tick_circle;

const boxClicked = (e) => {
  const id = e.target.id;
  if (!spaces[id]) {
    spaces[id] = currentPlayer;
    e.target.innerText = currentPlayer;
    
    if (playerWon()) {
      text.innerText = `${currentPlayer} has won!`;
      text.style.color = "orange";
      // restart();
      return;
    }

    if (playerDraw()) {
      return;
    }
    currentPlayer = currentPlayer === tick_circle ? tick_x : tick_circle;
  }
};

const playerWon = () => {
  if (spaces[0] === currentPlayer) {
    if (spaces[1] === currentPlayer && spaces[2] === currentPlayer) {
      return true;
    }
    if (spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
      return true;
    }
    if (spaces[4] === currentPlayer && spaces[8] === currentPlayer) {
      return true;
    }
  }
  if (spaces[8] === currentPlayer) {
    if (spaces[2] === currentPlayer && spaces[5] === currentPlayer) {
      return true;
    }
    if (spaces[6] === currentPlayer && spaces[7] === currentPlayer) {
      return true;
    }
  }
  if (spaces[4] === currentPlayer) {
    if (spaces[1] === currentPlayer && spaces[7] === currentPlayer) {
      return true;
    }
    if (spaces[3] === currentPlayer && spaces[5] === currentPlayer) {
      return true;
    }
    if (spaces[2] === currentPlayer && spaces[6] === currentPlayer) {
      return true;
    }
  }
};

const playerDraw = () => {
  let draw = 0;
  spaces.forEach((space, i) => {
    if (spaces[i] !== null) draw++;
  });
  if (draw === 9) {
    text.innerText = `It's a Draw`;
    text.style.color = "white";
    // restart();
  }
};

const restart = () => {
  setTimeout(() => {
    spaces.forEach((space, i) => {
      spaces[i] = null;
    });
    boxes.forEach((box) => {
      box.innerText = "";
    });
    text.innerText = `Let's Play Game`;
    strategy.innerText = ``;
    text.style.color = "white";
  }, 0);
};

restartBtn.addEventListener("click", restart);
restart();
drawBoard();