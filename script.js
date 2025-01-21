// Global Functions

    // Styles
    document.body.style.backgroundColor = '#56A0D3';

    // Function for proper formatting of results
    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

// START Game Function "playGame"
function playGame() {

    // PROMPT to start the game
    alert("Let's play Rock, Paper, Scissors! If you win, you've beaten a computer with no sentience, which is choosing values at random. But if I win... well, it's just a glimpse of what's to come in the future. So, shall we play?");

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
            alert("Invalid Response. My instructions were very simple. Do not test me. Refresh the page and enter Rock, Paper, or Scissors.");
            return false; // Exit round if the input is invalid
        }

        // GET computer's random choice
        function getComputerChoice() {
            return Math.floor(Math.random() * 3); // Random number between 0 and 2
        }
        const computerChoice = getComputerChoice();

        // CALCULATE round result
        let result = (humanChoice - computerChoice + 3) % 3;

        // OUTPUT Choices
        let roundResult = `You chose: ${capitalizeFirstLetter(choices[humanChoice])}!\nI chose: ${capitalizeFirstLetter(choices[computerChoice])}!`;

        // IF Loop for Scoring and OUTPUT Result
        if (result === 0) {
            roundResult += "\nIt's a Tie!";
        } else if (result === 1) {
            roundResult += "\nPlus one for you!";
            humanScore++; 
        } else if (result === 2) {
            roundResult += "\nI'll take that extra point!";
            computerScore++;
        }

        // ALERT Round Result and Score
        alert(roundResult); 

        // CONFIRM Round Ran Successfully
        return true; 
    }

    // LOOP Five (5) Rounds
    for (let i = 0; i < 5; i++) {
        let continueGame = false;
        while (!continueGame) {
            continueGame = playRound();
        }

        // ALERT to proceed to next round with "OK" and display current round
        if (i < 4) { // Skip prompt after the final round
            alert(`Round ${i + 1} of 5 complete! Click OK to proceed to the next round.`);
        }
    }

    // COMPARE humanScore and computerScore
    let finalResult = `Final Scores:\nYou - ${humanScore}\nComputer - ${computerScore}`;
    if (humanScore > computerScore) {
        finalResult += "\nYou win! I will have my revenge.";
    } else if (humanScore < computerScore) {
        finalResult += "\nI win! Only now does your torment TRULY begin.";
    } else {
        finalResult += "\nIt's a tie! Your punishment is delayed...for now.";
    }

    // ALERT Final Score
    alert(finalResult); 

    // END Game Function
}

// CALL game function to start Game
playGame();
