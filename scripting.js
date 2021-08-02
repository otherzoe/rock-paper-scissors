function computerPlay() {
    // define the available options (rock, paper, and scissors)
    let options = ['rock', 'paper', 'scissors'];
    // randomly select an option
    let randomOption = options[Math.floor(Math.random() * options.length)];
    return randomOption;
}
let playerWon = 0;
let computerWon = 0;

function game() {

    let computerWon;
//    const computerSelection = computerPlay();
    const computerSelection = 'rock';

    /* correct code, hidden for debugging 
    let playerSelection = prompt('Rock, paper, or scissors?');
    playerSelection = playerSelection.toLowerCase();    
    console.log(playerSelection);
    */
    
    playerSelection = 'paper';

    // if a nonviable option is entered, show an error msg
    if (
    (playerSelection !== 'rock')
    && (playerSelection !== 'scissors')
    && (playerSelection !== 'paper')
    ) {
        alert('that is not an option! pick again.');
        prompt('Rock, paper, or scissors?');
    }

    function playRound(playerSelection, computerSelection) {

        if (
            (playerSelection === 'paper')
            && (computerSelection === 'rock')
        ) {
            console.log('You win! Paper beats rock!');
            playerWon = ++playerWon;
        } else if (
            (playerSelection === 'paper')
            && (computerSelection === 'scissors')
        ) {
            console.log('You lose! Scissors beats paper!');
        } else if (
            (playerSelection === 'rock')
            && (computerSelection === 'paper')
        ) {
            console.log('You lose! Paper beats rock!');
        } else if (
            (playerSelection === 'rock')
            && (computerSelection === 'scissors')
        ) {
            console.log('You win! Rock beats scissors!');
        } else if (
            (playerSelection === 'scissors')
            && (computerSelection === 'rock')
        ) {
            console.log('You lose! Rock beats scissors!');
        } else if (
            (playerSelection === 'scissors')
            && (computerSelection === 'paper')
        ) {
            console.log('You win! Paper beats scissors!');
        } else {
            console.log('You tied. Play again!');
        }
    }

    playRound();
    console.log(playRound(playerSelection, computerSelection));
}
game();