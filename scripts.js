// This is the declaration of the human's score

let humanScore = 0;
let computerScore = 0;

// This is the end of the declaration of the human's score

// This is the start of the the section that gets the computer choice.

function getComputerChoice () {
    const randomNumber = Math.floor(Math.random() * 3);
     if (randomNumber === 0) {
        return "ROCK";
    } else if (randomNumber === 1) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}

// This is the end of the section that gets the computer choice.

// This is the start of the section that gets the human choice.

function getHumanChoice () {
let humanInput = prompt ("Enter your choice!", "");
return humanInput.toUpperCase();
}

// This is the end of the section that gets the human choice.

// This is the start of the section that plays a round.

function playRound(humanChoice, computerChoice) {
    console.log(`Human chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "ROCK" && computerChoice === "SCISSORS") || 
        (humanChoice === "PAPER" && computerChoice === "ROCK") ||
        (humanChoice === "SCISSORS" && computerChoice === "PAPER")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        ++humanScore;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        ++computerScore;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

// This is the end of the section that plays a round.