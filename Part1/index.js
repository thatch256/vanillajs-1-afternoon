console.log("Come on and slam, and welcome to the jam");

const board = []


function play(clickedId) {
    const playerSpan = document.getElementById('player')
    const clickedBox = document.getElementById(clickedId)

    if (playerSpan.innerText === 'X') {
            playerSpan.innerText = 'O'
            clickedBox.innerText = 'X'
            board[clickedId] = 'X' 
        } else {
        playerSpan.innerText = 'X'
        clickedBox.innerText = 'O'
        board[clickedId] = 'O'
        } console.log(board)
     

     let topLeft = board[0]
     let topCenter = board[1]
     let topRight = board[2]
     let middleLeft = board[3]
     let middleCenter = board[4]
     let middleRight = board[5]
     let bottomLeft = board[6]
     let bottomCenter = board[7]
     let bottomRight = board[8]

     if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
         alert(`${topLeft} is the winner`)
         return;
     }
     if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
         alert(`${topCenter} is the winner`)
         return;
     }
     if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
         alert(`${topRight} is the winner`)
     }
     if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
         alert(`${middleLeft} is the winner`)
     }
     if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
         alert(`${topLeft} is the winner`)
     }
     if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
         alert(`${bottomLeft} is the winner`)
     }
     if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
         alert(`${topLeft} is the winner`)
     }
     if (topRight !== undefined && topRight === middleCenter && topRight === bottomLeft) {
         alert(`${topRight} is the winner`)
     }

     let boardFull = true
        for(i = 0; i <= 8; i++) {
            if (board[i] === undefined) {
                boardFull = false
            }  
                } if (boardFull === true) {
                    alert(`CAT's game`)
                }
            }

function gameReset() {
    
}