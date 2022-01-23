let userPlayInput = prompt("Rock - Paper - Scissor? ", `eg. Rock`);
let userPlay = userPlayInput.toUpperCase();
console.log("You selected", userPlay);

const computerPlay = () => {
    let number = Math.floor(Math.random() * 3 + 1);
    if (number == 1) {
        number = "ROCK";
    } else if (number == 2) {
        number = "SCISSOR";
    } else
        number = "PAPER";
    console.log("Computer chooses:", number);
    return number;
};


const whoWins = (pc, user) => {
    let victory;
    if (pc == "ROCK" && user == "SCISSOR") {
        console.log("You Lose! Rock beats Scissor");
        victory = "pc";
    } else if (pc == "SCISSOR" && user == "ROCK") {
        console.log("Computer loses! Rock beats SCISSOR");
        victory = "user";
    } else if (pc == "PAPER" && user == "ROCK") {
        console.log("You Lose! Paper beats Rock");
        victory = "pc";
    } else if (pc == "PAPER" && user == "SCISSOR") {
        console.log("Computer loses! Scissor beats Paper");
        victory = "user";
    } else if (pc == user) {
        console.log("Tie Game!");
        victory = "nobody";
    }
    console.log("the winner is:", victory);
    return victory;
};



const game = () => {
    for (i = 0; i < 5; i++) {
        whoWins(computerPlay(), userPlay);
    }
}

game();