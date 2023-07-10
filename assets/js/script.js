// Get the choices and button elements and add event listener
let buttons = document.getElementsByClassName("hero");
let choices = ["rock", "paper", "scissors"];

for (let button of buttons) {
    button.addEventListener("click", function () {
        let userChoice = this.getAttribute("data-choice");

        playGame(userChoice);
    });
}

/** 
* The main game called when select the buttons
* Declare and alter user and computer images according to choice 
*/
function playGame(userChoice) {

    let userImage = document.getElementById("user-image");
    let computerImage = document.getElementById("computer-image");

    let computerChoice = Math.floor(Math.random() * 3);

    userImage.src = `assets/images/${choices[userChoice]}.webp`;
    userImage.alt = choices[userChoice];

    computerImage.src = `assets/images/${choices[computerChoice]}.webp`;
    computerImage.alt = choices[computerChoice];

    resultAndScore(choices[computerChoice], choices[userChoice]);
}

/**Declare the user and cumputer choices and the result
* Rtuern the result and score 
* Alter the value of result, get the value of scores and increment it according to the conditions
*/
function resultAndScore(computerChoice, userChoice) {

    let userScore = document.getElementById("user-score");
    let computerScore = document.getElementById("computer-score");
    let result = document.getElementById("result");

    if (
        userChoice === "paper" && computerChoice === "rock" ||
        userChoice === "rock" && computerChoice === "scissors" ||
        userChoice === "scissors" && computerChoice === "paper"
    ) {
        result.innerHTML = `You Score, ${userChoice} beats ${computerChoice}`;
        return (userScore.innerText)++ + 1;
    } else if (
        computerChoice === "paper" && userChoice === "rock" ||
        computerChoice === "rock" && userChoice === "scissors" ||
        computerChoice === "scissors" && userChoice === "paper"
    ) {
        result.innerHTML = `Computer Scores, ${computerChoice} beats ${userChoice}`;
        return (computerScore.innerText)++ + 1;
    } else {
        result.innerText = "Show Mercy";
    }
}

