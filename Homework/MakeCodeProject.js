input.onButtonPressed(Button.A, function () {
    array1 = [diceRoll1, diceRoll2, diceRoll3]
    diceRoll1 = randint(1, 6)
    diceRoll2 = randint(1, 6)
    diceRoll3 = randint(1, 6)
    if (diceRoll1 == diceRoll2) {
        nebula1Score += diceRoll3
        basic.showNumber(diceRoll3)
        nebula1.move(1)
    } else if (diceRoll1 == diceRoll3) {
        nebula1Score += diceRoll2
        basic.showNumber(diceRoll2)
        nebula1.move(1)
    } else if (diceRoll2 == diceRoll3) {
        nebula1Score += diceRoll1
        basic.showNumber(diceRoll1)
        nebula1.move(1)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    array2 = [diceRoll1, diceRoll2, diceRoll3]
    diceRoll1 = randint(1, 6)
    diceRoll2 = randint(1, 6)
    diceRoll3 = randint(1, 6)
    if (diceRoll1 == diceRoll2) {
        nebula2Score += diceRoll3
        basic.showNumber(diceRoll3)
        nebula2.move(1)
    } else if (diceRoll1 == diceRoll3) {
        nebula2Score += diceRoll2
        basic.showNumber(diceRoll2)
        nebula2.move(1)
    } else if (diceRoll2 == diceRoll3) {
        nebula2Score += diceRoll1
        basic.showNumber(diceRoll1)
        nebula2.move(1)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
function scoreGame () {
	
}
let nebula2Score = 0
let array2: number[] = []
let nebula1Score = 0
let diceRoll3 = 0
let diceRoll2 = 0
let diceRoll1 = 0
let array1: number[] = []
let nebula2: game.LedSprite = null
let nebula1: game.LedSprite = null
nebula1 = game.createSprite(1, 1)
nebula2 = game.createSprite(1, 3)
basic.forever(function () {
    music.playMelody("C5 A B G A F G E ", 120)
    if (nebula1.isTouchingEdge() || nebula2.isTouchingEdge() && nebula1Score > nebula2Score) {
        basic.showString("P1 Wins!")
        basic.showNumber(nebula1Score)
        game.setScore(nebula1Score)
        game.gameOver()
    } else if (nebula1.isTouchingEdge() || nebula2.isTouchingEdge() && nebula2Score > nebula1Score) {
        basic.showString("P2 Wins!")
        game.setScore(nebula2Score)
        game.gameOver()
    } else if (nebula1.isTouchingEdge() || nebula2.isTouchingEdge() && nebula2Score == nebula1Score) {
        basic.showString("Tie!")
        game.setScore(nebula1Score)
        game.gameOver()
    }
})
