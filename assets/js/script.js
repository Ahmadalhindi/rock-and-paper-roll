// Get the choices and button elements and add event listener
let buttons = document.getElementsByClassName("hero");
let choices = ["rock", "paper", "scissors"];

for (let button of buttons) {
    button.addEventListener("click", function () {
        let userChoice = this.getAttribute("data-choice");

        alert(`You clicked ${choices[userChoice]}`);

        playGame(userChoice);
    });
}

function playGame(userChoice) {

    let userImage = document.getElementById("user-image");
    let computerImage = document.getElementById("computer-image");

    let computerChoice = Math.floor(Math.random() * 3);

    userImage.src = `assets/images/${choices[userChoice]}.webp`;
    userImage.alt = choices[userChoice];

    computerImage.src = `assets/images/${choices[computerChoice]}.webp`;
    computerImage.alt = choices[computerChoice];

    resultAndScore(choices[computerChoice], choices[userChoice]);

    console.log(result, "<===result")
}


function resultAndScore(computerChoice, userChoice) {
}

