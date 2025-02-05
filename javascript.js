// Subproblem #1

/* let getHumanChoice = prompt("Rock Paper or Scissors?");

if (getHumanChoice.toLowerCase() === "Rock" ||  "Paper" || "Scissors") {
    alert("You chose " + getHumanChoice); 
};

console.log(getHumanChoice); */




// Subproblem #2

function getComputerChoice(max) {
    return Math.floor(Math.random() * max);
};

console.log(getComputerChoice(3));