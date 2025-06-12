// This is the start of the the section that gets the computer choice.

function getComputerChoice () {
return Math.floor(Math.random() * 3) +1;
}

getComputerChoice();

let computerNumber = getComputerChoice();

console.log(computerNumber);

let computerChoice;

if (computerNumber === 1) {
    computerChoice = "Rock";
} else if (computerNumber === 2) {
    computerChoice = "Paper";
} else {
    computerChoice = "Scissors"
}

console.log(computerChoice);

// This is the end of the section that gets the computer choice.