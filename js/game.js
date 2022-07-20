'use strict'

const WALL = '#'
const FOOD = '.'
const EMPTY = ' '

const gGame = {
    score: 0,
    isOn: false
}
var gBoard

function init() {
    console.log('hello pacman')

    gBoard = buildBoard()
    createPacman(gBoard)
    createGhosts(gBoard)
    
    printMat(gBoard, '.board-container')
    gGame.isOn = true
}

function buildBoard() {
    const size = 10
    const board = []

    for (var i = 0; i < size; i++) {
        board.push([]) // board[i] = []

        for (var j = 0; j < size; j++) {
            board[i][j] = FOOD
            
            if (i === 0 || i === size - 1 ||
                j === 0 || j === size - 1 ||
                (j === 3 && i > 4 && i < size - 2)) {
                board[i][j] = WALL
            }
        }
    }
    return board
}

function updateScore(diff) {
    // TODO: update model and dom
    // model
    gGame.score += diff

    // DOM
    const elScore = document.querySelector('h2 span')
    elScore.innerText = gGame.score
}

function gameOver() {
    console.log('Game Over')
    // TODO
    gGame.isOn = false
    clearInterval(gIntervalGhosts)
}