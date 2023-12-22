const square = [];
const container = document.querySelector('.container');
const grid = document.createElement('div');
grid.classList.add('grid');
let n = 16;

const changeSize = document.querySelector('#btn');

let isPainting = false;


changeSize.addEventListener('click', () => {
  removeGrid(n);
  do {
    n = prompt("How many squares per side? (max: 100)");
  } while (n > 100 || isNaN(n));
  if (n === null) makeGrid(16);
  makeGrid(n);
});

makeGrid(n);

function makeGrid(n) {
  for (let i = 0; i < n * n; i++) {
    square[i] = document.createElement('div');
    square[i].classList.add('square');
    square[i].addEventListener('mousedown', () => {
      isPainting = true;
    });
    square[i].addEventListener('mouseup', () => {
      isPainting = false;
    });
    square[i].addEventListener('mousemove', () => {
      if (isPainting) {
        square[i].style.backgroundColor = 'black';
      }
    });
    grid.appendChild(square[i]);
    square[i].style.width = `calc(${100 / n}%)`;
    square[i].style.height = 0;
    square[i].style.paddingBottom = `calc(${100 / n}%)`; 
  };
  container.appendChild(grid);
}

function removeGrid() {
  for (let i = 0; i < n * n; i++) {
    grid.removeChild(square[i]);
  }
}