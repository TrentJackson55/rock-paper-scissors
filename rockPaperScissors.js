/**
 * Return a random choice (Rock, Paper or Scissors).
 * 
 * @returns {string} Computer's choice
 */
let getComputerChoice = () => {
    let choices = ['ROCK', 'PAPER', 'SCISSORS'];
    return choices[parseInt(Math.random() * choices.length)];
}

/**
 * Play a single round of RPS.
 * 
 * @param {string} playerSelection: Player's Choice
 * @param {string} computerSelection: Computer's Choice
 * @returns {string} Message indicating win or loss
 */
let playRound = (playerSelection, computerSelection) => {
    
}

let game = () => {
    let rounds = parseInt(prompt('How many rounds would you like to play?'));

    for (let i = 0; i < rounds; i++) {
        let playerChoice = prompt('What will you shoot?').toUpperCase();
        let compChoice = getComputerChoice();
        playRound(playerChoice, compChoice);
    }
}