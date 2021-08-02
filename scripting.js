let playerPoints = 0;
let computerPoints = 0;

function game() {
    function computerPlay() {
        // define the available options (rock, paper, and scissors)
        let options = ['rock', 'paper', 'scissors'];
        // randomly select an option
        let randomOption = options[Math.floor(Math.random() * options.length)];
        return randomOption;
    }
    const computerSelection = computerPlay();
//    const computerSelection = 'rock';


    let playerSelection = prompt('Rock, paper, or scissors?');
    playerSelection = playerSelection.toLowerCase();    
    console.log(playerSelection);

    
//    playerSelection = 'paper';

    // if a nonviable option is entered, show an error msg
    if (
    (playerSelection !== 'rock')
    && (playerSelection !== 'scissors')
    && (playerSelection !== 'paper')
    ) {
        alert('that is not an option! pick again.');
        prompt('Rock, paper, or scissors?');
    }

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
            console.log('You win! Paper beats rock!');
            playerPoints = ++playerPoints;
        } else if (
            (playerSelection === 'paper')
            && (computerSelection === 'scissors')
        ) {
            console.log('You lose! Scissors beats paper!');
            computerPoints = ++computerPoints;
        } else if (
            (playerSelection === 'rock')
            && (computerSelection === 'paper')
        ) {
            console.log('You lose! Paper beats rock!');
            computerPoints = ++computerPoints;
        } else if (
            (playerSelection === 'rock')
            && (computerSelection === 'scissors')
        ) {
            console.log('You win! Rock beats scissors!');
            playerPoints = ++playerPoints;
        } else if (
            (playerSelection === 'scissors')
            && (computerSelection === 'rock')
        ) {
            console.log('You lose! Rock beats scissors!');
            computerPoints = ++computerPoints;
        } else if (
            (playerSelection === 'scissors')
            && (computerSelection === 'paper')
        ) {
            console.log('You win! Scissors beats paper!');
            computerPoints = ++computerPoints;
        } else {
            console.log('You tied. Play again!');
        }
    }

    console.log(playRound(playerSelection, computerSelection));
}

for (let i = 0; i <= 4; i++) {
    game();
  }