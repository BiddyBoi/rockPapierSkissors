/*returns computers input by flooring the Math.Random multiplied by the max minus the min plus the min and adding one*/
function getComputerChoice () {
    RandomNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    if (RandomNumber === 3) {
        return "rock"
    };
    if (RandomNumber === 2) {
        return "paper"
    };
    if (RandomNumber === 1) {
        return "scissors"
    };
};

rockButton = document.getElementById("rock");
paperButton = document.getElementById("paper");
scissorsButton = document.getElementById("scissors");
ShowResults = document.getElementById("showResults")
playerChoice = ""

rockButton.addEventListener("click", function () {
    playerChoice = "rock"
    Game()
})

paperButton.addEventListener("click", function () {
    playerChoice = "paper"
    Game()
})

scissorsButton.addEventListener("click", function () {
    playerChoice = "scissors"
    Game()
})

ComputerPoints = 0;
PlayerPoints = 0;

function Game () {

    /*keeps track of the score*/



    /*repeats until number of rounds are completed.*/

        ComputerChoice = getComputerChoice();



        /*checks if its a tie*/
        if (playerChoice === ComputerChoice) {
            showResults.textContent = "Tie! no points have been added!"
        };

        /*checks if computer won*/
        if (playerChoice === "rock" && ComputerChoice === "paper" || playerChoice === "scissors" && ComputerChoice === "rock" || playerChoice === "paper" && ComputerChoice === "scisscors") {
            showResults.textContent =  "RIP! better luck next time!"
            /*if it isn't a loss, it will otherwise be true regardless, thus in the event of a win, we do not need to recheck, just use a "else" statement*/
            ComputerPoints++
        }else {
            showResults.textContent =  "GGS! you have won!"
            PlayerPoints++
        };
        document.getElementById("score").textContent = `${ComputerPoints} - ${PlayerPoints}`
    }
    
