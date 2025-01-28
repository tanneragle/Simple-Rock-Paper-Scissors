
// Styles
document.body.style.backgroundColor = '#56A0D3';

// Proper Formatting of Results
function capitalizeFirstLetter(str) {
return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Game
let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

function playRound(humanChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = Math.floor(Math.random() * 3);

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

    
    document.getElementById("round-result").textContent = roundResult;
    document.getElementById("scores").textContent = `Scores: You - ${humanScore} | Computer - ${computerScore}`;
    roundCount++;

    if (roundCount === 5) {
        let finalResult = humanScore > computerScore
            ? "GAME OVER: You win the game! I will have my revenge."
            : humanScore < computerScore
            ? "GAME OVER: I win the game! Only now does your torment TRULY begin."
            : "GAME OVER: It's a tie! Your punishment is delayed... for now.";

        
        document.getElementById("round-result").textContent = finalResult;
        humanScore = 0;
        computerScore = 0;
        roundCount = 0; 
    }
}

document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));
