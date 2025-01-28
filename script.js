// Global Functions

    // Styles
    document.body.style.backgroundColor = '#56A0D3';

    // Function for proper formatting of results
    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

// Initialize global variables for scores and round count
let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

// Function for a single round of the game
function playRound(humanChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = Math.floor(Math.random() * 3); // Get computer's random choice

    // Calculate result
    const result = (choices.indexOf(humanChoice) - computerChoice + 3) % 3;
    let roundResult = `You chose: ${capitalizeFirstLetter(humanChoice)}.\nI chose: ${capitalizeFirstLetter(choices[computerChoice])}.`;

    if (result === 0) {
        roundResult += " It's a tie!";
    } else if (result === 1) {
        roundResult += " You win this round!";
        humanScore++;
    } else {
        roundResult += " I'll take that extra point!";
        computerScore++;
    }

    // Update DOM with results
    document.getElementById("round-result").textContent = roundResult;
    document.getElementById("scores").textContent = `Scores: You - ${humanScore} | Computer - ${computerScore}`;
    roundCount++;

    // Check if 5 rounds are complete
    if (roundCount === 5) {
        let finalResult = humanScore > computerScore
            ? "You win the game! I will have my revenge."
            : humanScore < computerScore
            ? "I win the game! Only now does your torment TRULY begin."
            : "It's a tie! Your punishment is delayed... for now.";

        // Show final result and reset game
        document.getElementById("round-result").textContent = finalResult;
        humanScore = 0;
        computerScore = 0;
        roundCount = 0; // Reset round count for a new game
    }
}

// Add event listeners for buttons
document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));
