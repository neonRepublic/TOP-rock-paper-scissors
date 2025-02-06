// Subproblem #3
humanScore = 0;
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

playGame(5);

