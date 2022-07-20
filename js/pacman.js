'use strict'

const PACMAN = '😷'
var gPacman

function createPacman(board) {
    // TODO: initialize gPacman...
    gPacman = {
        location: { i: 5, j: 7 },
        isSuper: false,
    }
    board[gPacman.location.i][gPacman.location.j] = PACMAN
}

function movePacman(ev) {

    if(!gGame.isOn) return
    
    // TODO: use getNextLocation(), nextCell
    const nextLocation = getNextLocation(ev)
    const nextCell = gBoard[nextLocation.i][nextLocation.j]

    // TODO: return if cannot move
    if(nextCell === WALL) return

    // TODO: hitting a ghost? call gameOver
    if(nextCell === GHOST ) {
        gameOver()
        return
    }

    // TODO: moving from current location:
    // TODO: update the model
    gBoard[gPacman.location.i][gPacman.location.j] = EMPTY
    
    // TODO: update the DOM
    renderCell(gPacman.location, EMPTY)
    
    // TODO: Move the pacman to new location:
    // TODO: update the model
    if(nextCell === FOOD) updateScore(1)
    
    gPacman.location = nextLocation
    gBoard[gPacman.location.i][gPacman.location.j] = PACMAN
    
    // TODO: update the DOM
    renderCell(gPacman.location, PACMAN)
}

function getNextLocation(ev) {

    var nextLocation = {
        i: gPacman.location.i,
        j: gPacman.location.j,
    }

    switch (ev.key) {
        case 'ArrowUp':
            nextLocation.i--
            break;
        case 'ArrowDown':
            nextLocation.i++
            break;
        case 'ArrowLeft':
            nextLocation.j--
            break;
        case 'ArrowRight':
            nextLocation.j++
            break;
    }
    // TODO: figure out nextLocation
    return nextLocation
}