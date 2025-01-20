// START Game Function "playGame"
function playGame() {

    // INITIALIZE humanScore and computerScore to zero
    let humanScore = 0;
    let computerScore = 0;

    // START Round Function
    function playRound() {
        // GET player's choice via Prompt
        let humanChoice = prompt("Please enter your choice: Rock, Paper, or Scissors:").toLowerCase();

        // CHECK if valid, if not, EXIT round
        let choices = ["rock", "paper", "scissors"];
        humanChoice = choices.indexOf(humanChoice);
        if (humanChoice === -1) {
            console.log("Invalid Response. My instructions were very simple. Do not test me. Refresh the page and enter Rock, Paper, or Scissors.");
            return; // Exit round if the input is invalid
        }

        // GET computer's random choice 

        // CALCULATE round result

        // OUTPUT choices and result

        // UPDATE scores (INCREMENT humanScore or computerScore, or no change)


    // END Round Function
    }
    // Loop Five (5) Rounds
    for (let i = 0; i < 5; i++) {
        playRound(); // Call playRound function for each of the 5 rounds
    }

    //  COMPARE humanScore and computerScore

    // OUTPUT final scores and DECLARE winner


// END Game Function
}

// Call playGame to start the game
playGame();