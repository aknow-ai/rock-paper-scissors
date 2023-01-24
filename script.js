//DOM MANIPULATION UI 
const Paper = document.querySelector('.choice1');
const Scissors = document.querySelector('.choice2');
const Rock = document.querySelector('.choice3');

const scoreBox = document.getElementById('#scoreBox');
const score = document.querySelector('.score');
const ResultOfRound = document.querySelector('.res');


function choicePaper() {
    playRound("paper");
    countOfPoints();

}
function choiceRock() {   
    playRound("rock");
    countOfPoints();
   
}
function choiceScissors() {
    playRound("scissors");
    countOfPoints();
    
}
function countOfPoints() {
      if (wins == 5 ) {
        score.innerText = 'You won';
        loses = 0;
        wins = 0;
    } else if (loses == 5) {
        score.innerText = 'you lost'
        loses = 0;
        wins = 0;
    } else {
        score.innerText =  `YOU ${wins} vs ${loses} IA`   
    }    
}

Paper.addEventListener('click', choicePaper);
Rock.addEventListener('click', choiceRock);
Scissors.addEventListener('click', choiceScissors);



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
function playRound (playerSelection) {
    
    getComputerChoice();
    if (iaChoice == "rock" && playerSelection == "rock") {
        ResultOfRound.innerText =  'its a tie, rock vs rock';
    } else if (iaChoice == "paper" && playerSelection == "paper") {
        ResultOfRound.innerText = 'its a tie, paper vs paper';
    } else if (iaChoice == "scissors" && playerSelection == "scissors") {
        ResultOfRound.innerText = 'its a tie, scissors vs scissors';
    } else if (iaChoice == "rock" && playerSelection == "paper") {
        wins +=  1;
        ResultOfRound.innerText = 'you win paper beat rock';
    } else if (iaChoice == "rock" && playerSelection == "scissors") {
        loses += 1;
        ResultOfRound.innerText = 'you lose rock beat scissors';
    } else if (iaChoice == "paper" && playerSelection == "rock") {
        loses += 1;
        ResultOfRound.innerText = 'you lose paper beat rock'
    } else if (iaChoice == "paper" && playerSelection == "scissors") {
        wins +=  1;
        ResultOfRound.innerText = 'you win scissors beat paper';
    } else if (iaChoice == "scissors" && playerSelection == "rock") {
        wins +=  1;
        ResultOfRound.innerText =  'you win rock beat scissors';
    } else if (iaChoice == "scissors" && playerSelection == "paper") {
        loses += 1;
        ResultOfRound.innerText = 'you lose scissors beat paper';
    }
};


