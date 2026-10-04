//canvas margin on all four sides
let margin = 50;
//drawing/initializing the board
const drawBoard = function(boardSize){
  //needed vars
  let canvasWidth = canvas.width;//width = height
  let boardWidth = canvasWidth - (2 * margin);//Width of the actual board

  //clear the canvas
  ctx.clearRect(0,0,canvasWidth,canvasWidth);

  //Size (width, length) of a single cell
  let cellSize = boardWidth / boardSize;
  
  //i in horizontal (x axis)
  for (let i = 0; i < boardSize; i++){
    //j is vertical (y axis)
    for (let j = 0; j < boardSize; j++){
      let x_corner = margin + (i * cellSize);//top-left corner's x
      let y_corner = margin + (j * cellSize);//top-left corner's y
      //draw the (colorless) rect
      ctx.strokeRect(x_corner,y_corner,cellSize,cellSize);
    }
  }
};
// When starting a new game:
const newGame = function(boardSize, arsenal){
  //draw board
  drawBoard(boardSize);
};
// When input Button is pressed:
document.getElementById('inputBtn').addEventListener('click', function() {
    // board side length
    const boardSize = Number(document.getElementById('boardSize').value);
    //Arsenal size
    const arsenal = Number(document.getElementById('arsenal').value);
    // Start a new game
    newGame(boardSize, arsenal);
});
