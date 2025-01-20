// GLOBAL Functions

    // Function for proper formating of output
    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }


// START Game Function "playGame"
function playGame() {

    // INITIALIZE humanScore and computerScore to zero
    let humanScore = 0;
    let computerScore = 0;

    // START Round Function
    function playRound() {
        // GET player's choice via Prompt
        let humanChoice = prompt("Please enter your choice: Rock, Paper, or Scissors:").toLowerCase();

        // CONVERT humanChoices to numerical values
        let choices = ["rock", "paper", "scissors"];
        humanChoice = choices.indexOf(humanChoice);

        // CHECK if valid, if not, EXIT round
        if (humanChoice === -1) {
            console.log("Invalid Response. My instructions were very simple. Do not test me. Refresh the page and enter Rock, Paper, or Scissors.");
            return; // Exit round if the input is invalid
        }

        // GET computer's random choice
        function getComputerChoice() {
            return Math.floor(Math.random() * 3); // Random number between 0 and 2
        }
        const computerChoice = getComputerChoice();

        // CALCULATE round result
        let result = (humanChoice - computerChoice + 3) % 3;

        // OUTPUT Choices
        console.log(`You chose: ${capitalizeFirstLetter(choices[humanChoice])}!`);
        console.log(`I chose: ${capitalizeFirstLetter(choices[computerChoice])}!`);

        // IF Loop for Scoring and OUTPUT Result
        if (result === 0) {
            console.log("Tie! Damn.");
        } else if (result === 1) {
            console.log("You win this round! Double damn!");
            humanScore++; // Increment humanScore
        } else if (result === 2) {
            console.log("I win the round!!!!");
            computerScore++; // Increment computerScore
        }


    // END Round Function
    }

    // Loop Five (5) Rounds
    for (let i = 0; i < 5; i++) {
        playRound(); // Call playRound function for each of the 5 rounds
    }

    //  COMPARE humanScore and computerScore and OUTPUT winner
    console.log(`Final Scores: You - ${humanScore}, Computer - ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("You win! I will have my revenge.");
    } else if (humanScore < computerScore) {
        console.log("I win! Only now does your torment TRULY begin.");
    } else {
        console.log("It's a tie! Your punishment is delayed...for now.");
    }


// END Game Function
}

// Call playGame to start the game
playGame();