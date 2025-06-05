function getComputerChoice() {
    const computerRandomNumber = Math.random() * 100;
    console.log(computerRandomNumber + "Computer");
}

function getHumanChoice() {
    const humanRandomNumber = Math.random() * 100;
    console.log(humanRandomNumber + "Human");
}

getComputerChoice();
getHumanChoice();