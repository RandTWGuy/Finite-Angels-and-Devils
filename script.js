//canvas margin on all four sides
let margin = 50;

let canvasWidth = canvas.width;//width = height

let boardWidth = canvasWidth - (2 * margin);//Width of the actual board

//drawing a cell
const drawCell = function(xCell, yCell, cellSize){
	let x_corner = margin + (xCell * cellSize);//top-left corner's x
  let y_corner = margin + (yCell * cellSize);//top-left corner's y
  //draw the (colorless) rect
  ctx.strokeRect(x_corner,y_corner,cellSize,cellSize);
}

//drawing/initializing the board
const drawBoard = function(boardSize){
  //clear the canvas
  ctx.clearRect(0,0,canvasWidth,canvasWidth);

  //Size (width, length) of a single cell
  let cellSize = boardWidth / boardSize;
  
  //i in horizontal (x axis)
  for (let i = 0; i < boardSize; i++){
    //j is vertical (y axis)
    for (let j = 0; j < boardSize; j++){
			//draw this cell
      drawCell(i, j, cellSize);
    }
  }
};

//Cursor coord to board coord ( 1 DIMENSIONAL VERSION)
const cursorCoordToBoardCoord = function(mouseDim, boardSize){
	if (mouseDim < margin || mouseDim > canvasWidth - margin){
		return undefined;
	} else {
		let boardDim = (mouseDim - margin) / boardSize;
		return boardDim;
	}
}

// When starting a new game:
const newGame = function(boardSize, arsenal){
  //draw board
  drawBoard(boardSize);
	
	//When does the cursor move?
	canvas.addEventListener('mousemove', function(e) {
    //log the x/y of mouse
    const mouseX = e.offsetX;
    const mouseY = e.offsetY;
		
		//translate that to board coordinates
		//undefined means out of bounds
		const boardX = cursorCoordToBoardCoord(mouseX, boardSize);
		const boardY = cursorCoordToBoardCoord(mouseY, boardSize);
	});
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
