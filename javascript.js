let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

const resultDis = document.getElementById("resultDis");

// Subproblem #2
function getComputerChoice() {
    const computerChoice = ["rock", "paper", "scissors"];
    return computerChoice[Math.floor(Math.random() * 3)];
}

// Subproblem #4
function playRound(humanChoice) {
    // Check if game is already over before continuing with the round
    if (humanScore === 5 || computerScore === 5) {
        resultDis.innerHTML = `Game Over! Final score: You: ${humanScore} | Computer: ${computerScore}`;
        return;
    }

    if (roundsPlayed >= 5) { 
        resultDis.innerHTML = `Game Over! Final score: You: ${humanScore} | Computer: ${computerScore}`;
        return;
    }

    const computerChoice = getComputerChoice();

    resultDis.innerHTML = `You chose: ${humanChoice}<br>Computer chose: ${computerChoice}<br>`;

    if (humanChoice === computerChoice) {
        resultDis.innerHTML += "It's a tie!<br>";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        alert("You Win!");
        humanScore++;
    } else {
        alert("You Lose!");
        computerScore++;
    }

    roundsPlayed++;

    resultDis.innerHTML += `Your Score: ${humanScore} | Computer's Score: ${computerScore}<br>`;

    // Check if the game is won after each round
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
            resultDis.innerHTML += "You win the game!<br>";
        } else if (humanScore < computerScore) {
            resultDis.innerHTML += "Computer wins the game!<br>";
        } else {
            resultDis.innerHTML += "It's a tie game!<br>";
        }
        resultDis.innerHTML += "Game Over!<br>";
        return;
    }
}

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

rockBtn.addEventListener("click", function () {
    playRound("rock");
});

paperBtn.addEventListener("click", function () {
    playRound("paper");
});

scissorsBtn.addEventListener("click", function () {
    playRound("scissors");
});




// Subproblem #3
/* humanScore = 0;
computerScore = 0;

// Subproblem #1
function getHumanChoice() {

    let humanChoice = prompt( "rock paper or scissors?" )

    if( humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors" ) {

        alert( "You chose " + humanChoice );
        return humanChoice;

    } else {

        alert( "Invalid Option" );

    };

};

// Subproblem #2
function getComputerChoice() {

    const computerChoice = [ "rock", "paper", "scissors" ];
    
    return computerChoice[ Math.floor( Math.random() * 3 ) ];

};

// Subproblem #5
function playGame( rounds ) {

    //Subproblem #4
    function playRound() {

        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        console.log( "You chose: " + humanChoice );
        console.log( "Computer chose: " + computerChoice );

        if ( humanChoice === computerChoice ) {

            alert( "It's a tie!" );

        } else if (

            ( humanChoice === "rock" && computerChoice === "scissors" ) ||
            ( humanChoice === "paper" && computerChoice === "rock" ) ||
            ( humanChoice === "scissors" && computerChoice === "paper" )

        ) {

            alert( "You Win!" );
            humanScore++;

        } else {

            alert( "You Lose!" );
            computerScore++;

        };

        console.log( "You: " + humanScore + ", Computer: " + computerScore );

        if ( rounds > 1 ) {

            playGame( rounds - 1 );

        } else {

            alert( "Game Over!" )

        };

        if ( humanScore > computerScore ) {

            alert( "You Win the Game!" );

        } else {

            alert("Game Over!");

        };

    }; 

    playRound();

};

// playGame(5); */



