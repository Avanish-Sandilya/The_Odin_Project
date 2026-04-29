const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

// Generate computer choice

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomIndex=Math.floor(Math.random()*3);
    return choices[randomIndex];
}

// Decide winner
function playRound(playerChoice) {
    const computerChoice = getComputerChoice();

    console.log("You:", playerChoice);
    console.log("Computer:", computerChoice);

    if (playerChoice === computerChoice) {
        console.log("It's a draw!");
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win! 🎉");
    } else {
        console.log("You lose! 😢");
    }
}

// Event listeners
rock.addEventListener("click", () => playRound("rock"));
paper.addEventListener("click", () => playRound("paper"));
scissors.addEventListener("click", () => playRound("scissors"));