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
let currentPosition = 4;
let currentRotation = 0;

// Randomly select a Tetromino
let random = Math.floor(Math.random() *theTetrominoes.length);
// Assign a Tetromino shape to a variable
let current = theTetrominoes[random][currentRotation];


// Functions

// Draw the Tetromino
function draw(){
  current.forEach(index => { // you can name 'index' anything and JavaScript will know you mean the items in the array
    squares[currentPosition + index].classList.add('tetromino');
  })
}

// Undraw function
function undraw(){
  current.forEach(index => {
    squares[currentPosition + index].classList.remove('tetromino');
  })
}


// Move the Tetromino down every single
timeId = setInterval(moveDown, 1000);
 
function moveDown(){
  undraw();
  currentPosition = currentPosition + width;
  draw()
}








}); // This fires of this line of code when the page is loading 