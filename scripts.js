function getComputerChoice() {
    const computerRandomNumber = Math.random() * 100;
    console.log(computerRandomNumber);
    if (computerRandomNumber < 33 ) {
    console.log("Rock");
} else if (computerRandomNumber < 66 ) {
    console.log("Paper");
} else {
    console.log("Scissors");
}
}

getComputerChoice();

