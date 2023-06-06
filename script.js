const scoreDiv = document.getElementById("player-score");
const resultDiv = document.getElementById("result");
const handsDiv = document.getElementById("hands");

const totalScore = { computerScore: 0, playerScore: 0 };

function getComputerChoice() {
  const rpsChoice = ["Rock", "Paper", "Scissors"];
  const randomValue = Math.floor(Math.random() * 3);
  // console.log(randomValue)
  return rpsChoice[randomValue];
}

function getResult(playerChoice, computerChoice) {
  let score = 0;
  if (playerChoice == computerChoice) {
    score = 0;
  } else if (playerChoice == "Rock" && computerChoice == "Scissors") {
    score = 1;
  } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
    score = 1;
  } else if (playerChoice == "Paper" && computerChoice == "Rock") {
    score = 1;
  } else {
    score = -1;
  }
  return score;
}

function showResult(score, playerChoice, computerChoice) {
  if (score == 0) {
    resultDiv.innerHTML = "It's a Draw!";
    resultDiv.style.color = "yellow";
  } else if (score == -1) {
    resultDiv.innerHTML = "You Lose!";
    resultDiv.style.color = "red";
  } else {
    resultDiv.innerHTML = "You Win!";
    resultDiv.style.color = "green";
  }
  handsDiv.innerText = `${playerChoice} vs ${computerChoice}`;
  scoreDiv.style.fontWeight = "bold";
  scoreDiv.innerText = `👩${totalScore["playerScore"]} : 🤖${totalScore["computerScore"]}`;
}

function onClickRPS(playerChoice) {
  // console.log(playerChoice)
  const compChoice = getComputerChoice();
  const currScore = getResult(playerChoice, compChoice);
  if (currScore == 1) {
    totalScore["playerScore"] += 1;
    // scoreDiv.style.color = "green";
  } else if (currScore == -1) {
    totalScore["computerScore"] += 1;
    // scoreDiv.style.color = "red";
  } else {
    totalScore["computerScore"] += 0;
    totalScore["playerScore"] += 0;
    // scoreDiv.style.color = "yellow";
  }
  // console.log(currScore)
  showResult(currScore, playerChoice, compChoice);
}

function playGame() {
  const btns = document.querySelectorAll(".rpsButton");
  // console.log(btns)
  btns.forEach((btn) => {
    // console.log(btn)
    btn.onclick = () => onClickRPS(btn.value);
  });
  const endBtn = document.getElementById("endGameButton");
  endBtn.onclick = () => endGame();
}

function endGame() {
  totalScore["computerScore"] = 0;
  totalScore["playerScore"] = 0;
  scoreDiv.innerText = "";
  resultDiv.innerText = "";
  handsDiv.innerText = "";
}
playGame();
