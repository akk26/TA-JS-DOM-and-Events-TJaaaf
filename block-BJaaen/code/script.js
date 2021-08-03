
let rock = document.querySelector(".rock");

let paper = document.querySelector(".paper");

let scissor = document.querySelector(".scissor");

let playerChoice_Span = document.querySelector(".user-choice");

let computerChoice_Span = document.querySelector(".computer-choice");

let computer = document.querySelector(".computer");

let result = document.querySelector(".result");

let reset = document.querySelector(".reset");

let playerScore = 0;
let computerScore = 0;

const playerScore_Span = document.querySelector(".player-score");

const computerScore_Span = document.querySelector(".computer-score");

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber]; 
};

function game(userChoice) {
  let computerChoice = getComputerChoice();
  computerChoice_Span.innerText = computerChoice;
  switch (userChoice + computerChoice) {
    case "paperRock":
    case "rockScissors":
    case "scissorsPaper":
      result.innerText = "Hurrah! You Won!";
      result.style.color = "green";
      playerScore += 1;
      playerScore_Span.innerText = playerScore;
      break;

    case "rockPaper":
    case "paperScissors ":
    case "scissorsRock":
      result.innerText = "Hey! You Lost!";
      result.style.color = "red";
      computerScore += 1;
      computerScore_Span.innerText = computerScore;
      break;

    case "rockRock":
    case "paperPaper":
    case "scissorsScissors":
      result.innerText = "It's A tie!";
      result.style.color = "rgb(34,142,251)";
      break;
  }

}

function main() {
  rock.addEventListener("click", () => {
    playerChoice_Span.innerText = " choose Rock";
    game("rock");
  });

  paper.addEventListener("click", () => {
    playerChoice_Span.innerText = " choose Paper";
    game("paper");
  });
  scissor.addEventListener("click", () => {
    playerChoice_Span.innerText = " choose Scissors";
    game("scissors");
  });
  reset.addEventListener("click", () => {
    let playerScore = 0;
    playerChoice_Span.innerText = "";
    playerScore_Span.innerText = playerScore;
    let computerScore = 0;
    computerChoice_Span.innerText = "";
    computerScore_Span.innerText = computerScore;
    result.innerText = "";
  });
}
main();











