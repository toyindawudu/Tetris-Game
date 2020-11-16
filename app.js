document.addEventListener('DOMContentLoaded', () => {

  // Select the elements in the DOM
 const grid  = document.querySelector('.grid'); 
 let squares = document.querySelectorAll('.grid div');
 const scoreDisplay = document.querySelector('#score');
 const startBtn = document.querySelector('#start-btn');
 
 const width = 10;
 const height = 0;


// The Tetrominoes

const lTetromino = [
  [1, width+1, width*2+1, 2],
  [width, width+1, width+2, width*2+2],
  [1, width+1, width*2+1, width*2],
  [width, width*2, width*2+1, width*2+2]
]

const zTetromino = [
  [0, width, width+1, width*2+1],
  [width+1, width+2, width*2, width*2+1],
  [0, width, width+1, width*2+1],
  [width+1, width+2, width*2, width*2+1]
]

const tTetromino = [
  [1, width, width+1, width+2],
  [1, width+1, width+2, width*2+1],
  [width, width+1, width+2, width*2+1],
  [1, width, width+1, width*2+1]
]

const oTetromino = [
  [0,1,width, width+1],
  [0,1,width, width+1],
  [0,1,width, width+1],
  [0,1,width, width+1]
]

const iTetromino = [
  [1,width+1,width*2+1,width*3+1],
  [width,width+1,width+2,width+3],
  [1,width+1,width*2+1,width*3+1],
  [width,width+1,width+2,width+3]
]


const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]

// Establish the starting position of the Tetrominoes

// Assign a Tetromino shape to a variable


// Create a function that draws the first rotation in the first tetromino



}); // This fires of this line of code when the page is loading 