function computerPlay() {
    // define the available options (rock, paper, and scissors)
    let options = ['rock', 'paper', 'scissors'];
    // randomly select an option
    let randomOption = options[Math.floor(Math.random() * options.length)];
    // log for debugging purposes
    console.log(randomOption);
}