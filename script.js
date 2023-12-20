const square = [];
const container = document.querySelector('.container');
let n = 16;

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  n = prompt("How many squares per side?")
  makeGrid(n);
})

function makeGrid(n) {
  for (let i = 0; i < n * n; i++) {
    square[i] = document.createElement('div');
    square[i].classList.add('square');
    square[i].addEventListener('mouseover', () => {
      square[i].style.backgroundColor = 'black';
    })
    container.appendChild(square[i]);
    square[i].style.width = `calc(${100 / n}%)`;
    square[i].style.height = 0;
    square[i].style.paddingBottom = `calc(${100 / n}%)`; 
  };
}