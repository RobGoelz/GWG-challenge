let table = document.querySelector('table');
let sizePicker = document.querySelector('#sizePicker');
let pixelCanvas = document.querySelector('#pixelCanvas');
// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', function makeGrid (event) {
  // Your code goes here!
  if (document.querySelector('tr')) {
    document.querySelector('tr').remove();
  }

  // Select size input
  const rows = document.querySelector('#inputHeight').value;
  const cols = document.querySelector('#inputWidth').value;

  // Set const for creating grid elements
  const tRow = document.createElement('tr');
  const tData = document.createElement('td');

  // Iterate over selected grid size
  for (let i = 1; i <= rows; i++) {
    table.appendChild(tRow);
    for (let j = 1; j <= cols; j++) {
      table.querySelector('tr').appendChild(tData);
    }
  }
  event.preventDefault();
});
// Select color input
pixelCanvas.addEventListener('click', function () {
  let paint = document.querySelector('#colorPicker').value;
  document.querySelector('td').style.color = paint;
});
