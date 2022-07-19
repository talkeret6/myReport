'use strict'

const WALL = '🧱'
const FOOD = '.'
const EMPTY = ' '
const superFood = '🍔'


var gGame = {
    score: 0,
    isOn: false
}
var gBoard

function init() {
    console.log('hello')

    gBoard = buildBoard()
    createPacman(gBoard)
    createGhosts(gBoard)

    printMat(gBoard, '.board-container')
    gGame.isOn = true
    togglModal()
}

function buildBoard() {
    const SIZE = 10
    const board = []

    for (var i = 0; i < SIZE; i++) {
        board.push([])

        for (var j = 0; j < SIZE; j++) {
            board[i][j] = FOOD

            if (i === 0 || i === SIZE - 1 ||
                j === 0 || j === SIZE - 1 ||
                (j === 3 && i > 4 && i < SIZE - 2)) {
                board[i][j] = WALL
            }

            if (i === 1 && j === 8 || i === 1 && j === 1 ||
                j === 1 && i === 8 || i === 8 && j === 8) {
                board[i][j] = superFood
            }

        }
    }
    return board
}


function updateScore(diff) {
    gGame.score += diff
    document.querySelector('h2 span').innerText = gGame.score
}

function gameOver() {
    console.log('Game Over')
    gGame.isOn = false
    clearInterval(gIntervalGhosts)
}


function restart() {

    togglModal()

}


function victory() {

    togglModal()


}


function togglModal() {

    var elModal = document.querySelector('.modal')
    elModal.classList.toggle('.hidden')
}