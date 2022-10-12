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

/*returns players input without capitalization*/
function getPlayerChoice () {
    UserInput = "Rock";
    return UserInput.toLowerCase();
};

function Game () {

    /*keeps track of the score*/

    ComputerPoints = 0;
    PlayerPoints = 0;

    /*repeats until number of rounds are completed.*/
    for (rounds = 0;rounds <= 5; rounds++) {
        PlayerChoice = getPlayerChoice();
        ComputerChoice = getComputerChoice();

        /*checks if its a tie*/
        if (PlayerChoice === ComputerChoice) {
            return "Tie! no points have been added!";
        };

        /*checks if computer won*/
        if (PlayerChoice === "rock" && ComputerChoice === "paper" || PlayerChoice === "scissors" && ComputerChoice === "rock" || PlayerChoice === "paper" && ComputerChoice === "scisscors") {
            return "RIP! better luck next time!";
            /*if it isn't a loss, it will otherwise be true regardless, thus in the event of a win, we do not need to recheck, just use a "else" statement*/
        }else {
            return "GGS! you have won!";
        };
    }
};
console.log(Game());