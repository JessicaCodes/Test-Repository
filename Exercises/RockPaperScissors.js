// Write a function that uppercases the first letter of each word

/* 
    Rock Paper Scissors (using functions, conditionals, Math, variables, data type)
    Player VS Computer

        Possible outcomes:
            - Rock smashes Scissors
            - Scissors cuts paper
            - Paper covers Rock
            - There could also be a tie
        
        How should we break up our program?
            - Get the users choice
            - Get the computers choice
            - Compare the two choices and find out who won
            - Start the game and console.log the choices made & the winner

        Possible functions:
            getUserChoice();
            getComputerChoice();
            determineWinner();
            playGame();
            
*/ 

let userName = "Jessica"
let userChoice = "RocK";

function getUserChoice(choice){
    return choice.toUpperCase()
}

//console.log(getUserChoice("rock"))


function convertUserChoice(){
    if (getUserChoice(userChoice) === "ROCK"){
        return 0
    }
        else
            if (getUserChoice(userChoice) === "PAPER"){
                return 1
            }
            else
                if (getUserChoice(userChoice) === "SCISSORS"){
                    return 2
                }//took else out
}

//console.log(convertUserChoice())




function compRandomNumber(){
    let randomNumber = Math.floor(Math.random()*3);
    return randomNumber
}


//console.log(compRandomNumber())

let compChoice = compRandomNumber()

function compSelection(compChoice){
if (compChoice === 0){
    return  "ROCK"
}
    else
        if  (compChoice === 1){
            return "PAPER"   
        }
        else
            if  (compChoice === 2){
                return  "SCISSORS"   
            }//took else out
        }

//console.log(compSelection())

function winnerIs(winner){
    if (convertUserChoice() === compChoice){
    return winner = "Tie!"
    }
        else if (convertUserChoice() === compChoice){
        return winner = "Tie!"
        }
            else if (convertUserChoice() === compChoice){
            return winner = "Tie!"
            }
                else if (convertUserChoice() === 0 && compChoice === 2){
                    return winner = ("Winner is " + userName + "!")
                }
                    else if (convertUserChoice() === 1 && compChoice === 0){
                        return winner = ("Winner is " + userName + "!")
                    }
                        else if (convertUserChoice() === 2 && compChoice === 1){
                            return winner = ("Winner is " + userName + "!")
                        }
                            else if (convertUserChoice() === 2 && compChoice === 0){
                                return winner = ("Winner is Computer!")
                            }
                                else if (convertUserChoice() === 0 && compChoice === 1){
                                    return winner = ("Winner is Computer!")
                                }
                                    else if (convertUserChoice() === 1 && compChoice === 2){
                                        return winner = ("Winner is Computer!")
                                    }
}

console.log(userName + " chooses " + userChoice)
console.log("Computer chooses " + compSelection(compChoice))
console.log(winnerIs())


/*function convertCompNum(randomNumber){ 
    if (convertNum === 1){
        return convertNum = "Rock"
    }
    else 
        if (convertNum === 2){
        return convertNum = "Paper"
    } else {
        return convertNum = "Scissors"
}
}
*/
