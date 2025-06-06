console.log("ComputerGuess:");

function getComputerChoice() {
    const computerRandomNumber = Math.random() * 100;
    // console.log(computerRandomNumber);
    if (computerRandomNumber < 33 ) {
    console.log("Rock");
} else if (computerRandomNumber < 66 ) {
    console.log("Paper");
} else {
    console.log("Scissors");
}
}

getComputerChoice();

console.log("HumanGuess:")

function getHumanChoice() {
    let humanGuess = prompt ("Enter your guess");
    console.log(humanGuess);
}

getHumanChoice();

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
if (humanChoice == computerChoice) {
    console.log("Tie! Play Again.")
} else if (humanChoice == "Paper" && computerChoice == "Paper") {
    console.log("Tie! Guess Again.")
} else if (humanChoice == "Scissors" && computerChoice == "Scissors") {
    console.log("Tie! Guess Again.")
} else if (humanChoice == "Rock" && computerChoice == "Rock" || "") {
    console.log("Tie! Guess Again.")
} else if (humanChoice == "Rock" && computerChoice == "Rock") {
    console.log("Tie! Guess Again.")
} else if (humanChoice == "Rock" && computerChoice == "Rock") {
    console.log("Tie! Guess Again.")
} else if (humanChoice == "Rock" && computerChoice == "Rock") {
    console.log("Tie! Guess Again.")
} else if (humanChoice == "Rock" && computerChoice == "Rock") {
    console.log("Tie! Guess Again.")
} else {
    console.log("Tie! Guess Again.");
}
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log("You:" + humanScore);
console.log("Computer:" + computerScore);