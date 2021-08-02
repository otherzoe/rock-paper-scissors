function computerPlay() {
    // define the available options (rock, paper, and scissors)
    let options = ['rock', 'paper', 'scissors'];
    // randomly select an option
    let randomOption = options[Math.floor(Math.random() * options.length)];
    return randomOption;
}

function playRound(playerSelection, computerSelection) {
    if (
        (playerSelection === 'paper')
        && (computerSelection === 'rock')
    ) {
        return 'You win! Paper beats rock!';
    } else if (
        (playerSelection === 'paper')
        && (computerSelection === 'scissors')
    ) {
        return 'You lose! Scissors beats paper!';
    } else if (
        (playerSelection === 'rock')
        && (computerSelection === 'paper')
    ) {
        return 'You lose! Paper beats rock!';
    } else if (
        (playerSelection === 'rock')
        && (computerSelection === 'scissors')
    ) {
        return 'You win! Rock beats scissors!';
    } else if (
        (playerSelection === 'scissors')
        && (computerSelection === 'rock')
    ) {
        return 'You lose! Rock beats scissors!';
    } else if (
        (playerSelection === 'scissors')
        && (computerSelection === 'paper')
    ) {
        return 'You win! Paper beats scissors!';
    } else {
        return 'You tied. Play again!';
    }
}

function game() {
let playerSelection = prompt('Rock, paper, or scissors?');
    playerSelection = playerSelection.toLowerCase();    
    console.log(playerSelection);

const computerSelection = computerPlay();

}
game();