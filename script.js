

/*this function generate a random num between 3 and 1, after that, gives a value like paper if it return 2, or rock if its 1. */

function getComputerChoice () {
    var x = Math.floor(Math.random() * 3) + 1;
    if (x == 1) {
        iaChoice = "rock";
    } else if (x == 2) {
        iaChoice = "paper";
    } else {
        iaChoice = "scissors";
    }
    
}




/*variables to store the score*/
let wins = 0;
let loses = 0;

/*one round of rps.*/
function playRound () {
    
    playerSelection = prompt("rps");
    getComputerChoice();
    if (iaChoice == "rock" && playerSelection == "rock") {
        console.log("empate r");
    } else if (iaChoice == "paper" && playerSelection == "paper") {
        console.log("empate p");
    } else if (iaChoice == "scissors" && playerSelection == "scissors") {
        console.log("empate s");
    } else if (iaChoice == "rock" && playerSelection == "paper") {

        wins +=  1;
        console.log("you win paper beat rock");
    } else if (iaChoice == "rock" && playerSelection == "scissors") {

        loses += 1;
        console.log("you lose rock beat scissors");
    } else if (iaChoice == "paper" && playerSelection == "rock") {

        loses += 1;
        console.log("you lose paper beat rock");
    } else if (iaChoice == "paper" && playerSelection == "scissors") {

        wins +=  1;
        console.log("you win scissors beat paper");
    } else if (iaChoice == "scissors" && playerSelection == "rock") {

        wins +=  1;
        console.log("you win rock beat scissors");
    } else if (iaChoice == "scissors" && playerSelection == "paper") {

        loses += 1;
        console.log("you lose scissors beat paper");
    }
    console.log(wins);
    console.log(loses);
}


/*calling 5 times playRound*/
function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
        
    }   
    if (wins > loses) {
        console.log(`you won, ${wins} vs ${loses}`)
    } else if (loses > wins) {
        console.log(`you lose ${loses} vs ${wins}`)
    } else {
        console.log(`its a tie ${wins} vs ${loses}`)
    }
} 
game();
