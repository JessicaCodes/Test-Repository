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

let userName = ("Jessica")
//let Rock = 1
//let Paper = 2
//let Scissors = 3

//let tie = [1,1][2,2][3,3]
//let letsPlay = function()


//function upperCaser(word){
//    return word[0].toUpperCase(word.slice(1))
//    return word
//}

function getUserChoice(choice){
    choice = "paper"
    return choice.toUpperCase()
}

//console.log(getUserChoice("rock"))


function convertUserChoice(chosen){
    if (getUserChoice === "ROCK"){
        return chosen = 1
    }
        else
            if (getUserChoice === "PAPER"){
                return chosen = 2
            }
            else
                if (getUserChoice === "SCISSORS"){
                    return chosen = 3
                }
                else {return chosen = 4}   
}

function winnerIs(winner){
    if (convertUserChoice(1) === compRandomNumber(1)){
    return winner = "Tie!"
    }
        else if (convertUserChoice(2) === compRandomNumber(2)){
        return winner = "Tie!"
        }
            else if (convertUserChoice(3) === compRandomNumber(3)){
            return winner = "Tie!"
            }
                else if (convertUserChoice(1),compRandomNumber(3)){
                    return winner = ("Winner is " + userName + "!")
                }
                    else if (convertUserChoice(2),compRandomNumber(1)){
                        return winner = ("Winner is " + userName + "!")
                    }
                        else if (convertUserChoice(3),compRandomNumber(2)){
                            return winner = ("Winner is " + userName + "!")
                        }
                            else if (convertUserChoice(3),compRandomNumber(1)){
                                return winner = ("Winner is Computer!")
                            }
                                else if (convertUserChoice(1),compRandomNumber(2)){
                                    return winner = ("Winner is Computer!")
                                }
                                    else if (convertUserChoice(2),compRandomNumber(3)){
                                        return winner = ("Winner is Computer!")
                                    }
                            }
                        console.log(winnerIs())

console.log(convertUserChoice())

function compRandomNumber(randomNumber){
randomNumber = Math.floor(Math.random()*3);
return randomNumber
}


console.log(compRandomNumber())

let num1 = compRandomNumber()

function compSelection(compChoice){
if (num1 === 1){
    return compChoice = "Rock"  
}
    else
        if  (num1 === 2){
            return compChoice = "Paper"   
        }
        else
            if  (num1 === 3){
                return compChoice = "Scissors"   
            }
            else {
                return compChoice = "Try Again"
            }
        }

console.log(compSelection())

function convertCompNum(randomNumber){ 
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

