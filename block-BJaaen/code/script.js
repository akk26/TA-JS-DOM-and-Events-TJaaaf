
let rock = document.querySelector(".rock");

let paper = document.querySelector(".paper");

let scissor = document.querySelector(".scissor");

let playerChoice_Span = document.querySelector(".user-choice");

let computerChoice_Span = document.querySelector(".computer-choice");

let computer = document.querySelector(".computer");

let result = document.querySelector(".result");

let reset = document.querySelector(".reset");


const playerScore_Span = document.querySelector(".player-score");

const computerScore_Span = document.querySelector(".computer-score");

let playerScore = 0;
let computerScore = 0;


function random() {
  let computerChoice = ["Rock", "Paper", "Scissor"];
  let number = Math.floor(Math.random() * 3);
  return computerChoice[number];
}

function game(userChoice) {
  let computer = random();
  computerChoice_Span.innerText = computer;
  switch (userChoice + computer) {
    case "paperRock":
    case "scissorPaper":
    case "rockScissor":
      result.innerText = "You Win";
      result.style.color = "green";
      playerScore += 1;
      playerScore_Span.innerText = playerScore;
      break;

    case "rockPaper":
    case "paperScissor":
    case "scissorRock":
      result.innerText = "You lost";
      result.style.color = "red";
      computerScore += 1;
      computerScore_Span.innerText = computerScore;
      break;

    case "paperPaper":
    case "scissorScissor":
    case "rockRock":
      result.innerText = "Tie!";
      result.style.color = "blue";
      break;
  }
}

function main() {
  rock.addEventListener("click", () => {
    playerChoice_Span.innerText = " choose rock";
    game("rock");
  });

  paper.addEventListener("click", () => {
    playerChoice_Span.innerText = " choose paper";
    game("paper");
  });

  scissor.addEventListener("click", () => {
    playerChoice_Span.innerText = " choose scissor";
    game("scissor");
  });

  reset.addEventListener("click", () => {
    computerScore_Span.innerText = 0;
    playerScore_Span.innerText = 0;
    computerChoice_Span.innerText = "";
    playerChoice_Span.innerText = "";
    result.innerText = "";
  });
}
main();
