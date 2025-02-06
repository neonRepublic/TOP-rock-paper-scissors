// Subproblem #3
humanScore = 0;
computerScore = 0;

// Subproblem #1
function getHumanScore() {

    let humanChoice = prompt("Rock Paper or Scissors?")

    if(humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        alert("You chose " + humanChoice);
        return humanChoice;
    } else {
        alert("Invalid Option");
    };

};

// Subproblem #2
function getComputerChoice() {

    const computerChoice = ["Rock", "Paper", "Scissors"];
    return computerChoice[Math.floor(Math.random() * 3)];

};

