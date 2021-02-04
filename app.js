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

// console.log(theTetrominoes);

// Establish the starting position of the Tetrominoes
let currentPosition = 4;
let currentRotation = 0; // This is the first  

// Randomly select a Tetromino
let random = Math.floor(Math.random() * theTetrominoes.length); // Randomly select a tetronomino from the selection of tetromino
let current = theTetrominoes[random][currentRotation]; // Assign a Tetromino shape to a variable

// Functions

// Draw the Tetromino
function draw(){
  current.forEach(index => { // you can name 'index' anything and JavaScript will know you mean the items in the array
    squares[currentPosition + index].classList.add('tetromino'); // squares are attached to the div tags in the html 
  })
} 

// Undraw function - this undrawns the tetrominoes in the grid
function undraw(){
  current.forEach(index => {
    squares[currentPosition + index].classList.remove('tetromino');
  })
}

// Freeze function - this stops the tetronminoes when they get in contact with one another 
function freeze(){
  if(current.some(index => squares[currentPosition + index + width].classList.contains('taken'))){
    current.forEach(index => squares[currentPosition + index].classList.add('taken'));
    // start a new tetromino falling
    random = Math.floor(Math.random() * theTetrominoes.length);
    current = theTetrominoes[random][currentRotation];
    currentPosition = 4;
    draw();  
  }
} 

// Move the Tetromino down every single second
timeId = setInterval(moveDown, 1000);

//assign functions to keyCodes

function control(e) {
  if(e.keyCode === 37){
    moveLeft()
  } else if (e.keyCode === 38) {
    rotate();
  } else if (e.keyCode === 39) {
    moveRight();
  } else if (e.keyCode === 40) {
    moveDown();
  }
}
document.addEventListener('keyup', control);

// move down function  - this moves the tetrominoes down the grid based on the width
function moveDown(){
  undraw();
  currentPosition += width;
  draw();
  freeze();
}

// move left function, 
function moveLeft(){
  undraw();
  const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0);

  if(!isAtLeftEdge) currentPosition -= 1;
  if(current.some(index => squares[currentPosition + index ].classList.contains)('taken')){
    currentPosition += 1; 
  }
  draw();
}  

// move right function
function moveRight(){
  undraw();
  const isAtRightEdge = current.some(index => (currentPosition + index) % width === width -1);
  if(!isAtRightEdge) currentPosition += 1;
  if(current.some(index => squares[currentPosition + index].classList.contains('taken'))){
    currentPosition -= 1;
  }
  draw();
}

// rotate the tetromino
 function rotate(){
   undraw();
   currentRotation ++;
   if(currentRotation === current.length) {
     currentRotation = 0;
   }
   current = theTetrominoes[random][currentRotation];
   draw();

 }

}); // This fires of this line of code when the page is loading 