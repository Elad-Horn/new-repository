'use strict'

const GHOST = '&#9781'
const GHOST_COUNT = 3
const gGhosts = []

var gIntervalGhosts

function createGhosts(board) {
    // TODO: 3 ghosts and an interval
    for(var i = 0; i < GHOST_COUNT; i++){
        createGhost(board)
    }
    gIntervalGhosts = setInterval(moveGhosts, 1000)
}

function createGhost(board) {
    // TODO
    const ghost = {
        location: { i: 3, j: 3 },
        currCellContent: FOOD,
    }
    gGhosts.push(ghost)
    board[ghost.location.i][ghost.location.j] = GHOST
}

function moveGhosts() {
    // TODO: loop through ghosts
    for(var i = 0; i < gGhosts.length; i++){
        moveGhost(gGhosts[i])
    }
}

function moveGhost(ghost) {

    // TODO: figure out moveDiff, nextLocation & nextCell
    const diff = getMoveDiff()
    const nextLocation = {
        i: ghost.location.i + diff.i, 
        j: ghost.location.j + diff.j, 
    }
    const nextCell = gBoard[nextLocation.i][nextLocation.j]

    // TODO: return if cannot move
    if(nextCell === WALL || nextCell === GHOST ) return
    
    // TODO: hitting a pacman?  call gameOver
    if(nextCell === PACMAN ) {
        gameOver()
        return
    }

    // TODO: moving from current location:
    // TODO: update the model
    gBoard[ghost.location.i][ghost.location.j] = ghost.currCellContent
    
    // TODO: update the DOM
    renderCell(ghost.location, ghost.currCellContent)
    
    // TODO: Move the ghost to new location:
    // TODO: update the model
    ghost.location = nextLocation
    ghost.currCellContent = gBoard[ghost.location.i][ghost.location.j]
    
    gBoard[ghost.location.i][ghost.location.j] = GHOST

    // TODO: update the DOM
    renderCell(ghost.location, getGhostHTML(ghost))
}

function getMoveDiff() {
    const randNum = getRandomIntInclusive(1, 100)

    if (randNum <= 25) {
        return { i: 0, j: 1 }
    } else if (randNum <= 50) {
        return { i: -1, j: 0 }
    } else if (randNum <= 75) {
        return { i: 0, j: -1 }
    } else {
        return { i: 1, j: 0 }
    }
}

function getGhostHTML(ghost) {
    return `<span>${GHOST}</span>`
}