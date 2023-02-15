/**
 * These will hold cpu and player scores to determine winner.
 */
var playerScore = 0;
var compScore = 0;

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

    console.log(`You shoot: ${playerSelection}, Computer shoots: ${computerSelection}`);

    if (
        playerSelection == 'ROCK' && computerSelection == 'SCISSORS' ||
        playerSelection == 'PAPER' && computerSelection == 'ROCK' ||
        playerSelection == 'SCISSORS' && computerSelection == 'PAPER'
    ) {
        console.log(`${playerSelection} beats ${computerSelection}`) 
        playerScore++
        console.log(`Player gets a point! (${playerScore})`)

    } else if (playerSelection == computerSelection) {
        console.log(`${playerSelection} ties ${computerSelection}`)
        playerScore++
        compScore++
        console.log('Both get a point!')
        
    } else {
        console.log(`${computerSelection} beats ${playerSelection}`)
        compScore++
        console.log(`Computer gets a point! (${compScore})`)
    }
}

/**
 * Main RPS game. Choose Rounds and play
 * 
 * @returns {string} Message indicating winner
 */
let game = () => {

    let rounds = parseInt(prompt('How many rounds would you like to play?'));

    for (let i = 0; i < rounds; i++) {
        let playerChoice = prompt('What will you shoot?').toUpperCase();
        let compChoice = getComputerChoice();

        playRound(playerChoice, compChoice);
    }

    console.log("Player Score: " + playerScore, "CPU Score: " + compScore);

    if (playerScore > compScore) {
        console.log('You win!');
    } else if (playerScore == compScore) {
        console.log('It\'s a tie!');
    } else {
        console.log('Computer Wins!');
    }

    playerScore = 0;
    compScore = 0;
}