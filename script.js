const restartButton = document.querySelector(".restart");
const hiddenNumber = document.querySelector(".show-hidden-number");
const checkButton = document.querySelector(".check-button");
const showResultMessage = document.querySelector(".show-result-msg");
const showScore = document.querySelector(".show-score-number");
const showHighScore = document.querySelector(".show-highScore-number");

let randoNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const showRandomNumber = (rando) =>
  (document.querySelector(".show-hidden-number").textContent = rando);
showRandomNumber("?");

const flushUserInput = () => (document.querySelector(".user-input").value = "");
flushUserInput();

const showResult = (message) =>
  (document.querySelector(".show-result-msg").textContent = message);

const showUpdatedScore = (score) =>
  (document.querySelector(".show-score-number").textContent = score);

const clickedCheckButton = () => {
  const userInput = Number(document.querySelector(".user-input").value);

  if (score > 1) {
    if (!userInput) {
      showResult("no input were found");
    } else if (userInput === randoNumber) {
      showResult("Correct Result!");
      showRandomNumber(randoNumber);

      document.querySelector(".show-box").classList.add("win");
      document.querySelector(".show-hidden-number").classList.add("win-elem");
      document.querySelector("body").classList.add("winning");
      if (score > highScore) {
        // highScore functionality
        highScore = score;
        document.querySelector(".show-highScore-number").textContent =
          highScore;
      }
    } else if (userInput !== randoNumber) {
      userInput > randoNumber
        ? showResult("Too High!")
        : showResult("Too Low!");

      score -= 1;
      showUpdatedScore(score);
    }
  } else {
    showResult("You Lost The Game!");
    showUpdatedScore(0);
  }
};

// when the gamer press "check" button
checkButton.addEventListener("click", function () {
  clickedCheckButton();
});

// when gamer press the "restart" button
restartButton.addEventListener("click", function () {
  score = 20;
  randoNumber = Math.trunc(Math.random() * 20) + 1;
  showRandomNumber("?");
  showResult("Start Guessing...");
  showUpdatedScore(score);
  flushUserInput();

  document.querySelector(".show-box").classList.remove("win");
  document.querySelector(".show-hidden-number").classList.remove("win-elem");
  document.querySelector("body").classList.remove("winning");
});

// handling "enter key"
document.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    if (document.querySelector(".user-input").value) {
      console.log("enter");
      clickedCheckButton();
    }
  }
});
