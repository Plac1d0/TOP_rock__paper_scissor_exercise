let playerScore = 0;
computerScore = 0;

for (rounds = 1; rounds <= 5 ; rounds++){
console.log("ROUND: "+ rounds);
console.log("Player Score :" + playerScore + " vs " + "Computer Score : " + computerScore);
play();
}

if (playerScore > computerScore){
console.log ("Player wins the game");
}

else if (playerScore == computerScore){
console.log ("Draw");
}

else {
console.log ("Computer wins the game");
}


////---------------------------------------------------------FUNCTION BANK-------------------------------------------------------------/////

//The main gameplay
function play () {

//Determine the player's hand.
let playerChoice = prompt("Choose your hand, type your answer");
playerChoice = playerChoice.toUpperCase();
console.log("Player has chosen: " + playerChoice);


//Determine the computer's hand.    
let computerChoice = computerChoose();

//Determine who wins and add the score.
decideWhoWins(playerChoice,computerChoice);
}

//A function that decides the computer's hand randomly.
function computerChoose() { 
        var choices = [1,2,3];
        var hands = ["SCISSOR","PAPER", "ROCK"]   
        var index = Math.floor(Math.random() * choices.length); //Math.random yields
        console.log(index);
        console.log("Computer has chosen: "+hands[index]);
        return hands[index];
}

//A function that takes the player and computer choice and decides the outcome
function decideWhoWins(playerChoice, computerChoice) {
if (playerChoice == computerChoice){
        console.log("DRAW");
    }

    else{
        switch (playerChoice){
            case "SCISSOR":
                if (computerChoice == "ROCK"){
                    console.log("you LOOSE");
                    computerScore++;
                }
                else {
                    console.log("you WIN");
                    playerScore++;
                }
                break;

            case "ROCK":
                if (computerChoice == "PAPER"){
                    console.log("you LOOSE");
                    computerScore++;
                }
                else {
                    console.log("you WIN");
                    playerScore++;
                }
                break;

            case "PAPER":
                if (computerChoice == "SCISSOR"){
                    console.log("you LOOSE");
                    computerScore++;
                }
                else {
                    console.log("you WIN");
                    playerScore++;
                }
                break;
        
        }

    }
}


