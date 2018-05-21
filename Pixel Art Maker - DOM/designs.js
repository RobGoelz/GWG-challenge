// Set consts for commonly used IDs
const sizePicker = document.querySelector('#sizePicker');
const pixelCanvas = document.querySelector('#pixelCanvas');
const colorPicker = document.querySelector('#colorPicker');

// Declare makeGrid function as variable
const makeGrid = function (event) {
  if (document.querySelector('table tr')) {
    document.getElementsByTagName('tr').remove();
  }
  // Select size input
  const tRows = document.querySelector('#inputHeight').value;
  const tCols = document.querySelector('#inputWidth').value;
  // Iterate over selected grid size
  for (let i = 0; i < tRows; i++) {
    pixelCanvas.insertRow(i);
    for (let j = 0; j < tCols; j++) {
      let row = document.querySelector('tr:last-of-type');
      row.insertCell(j);
    }
  }
  event.preventDefault();
};

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', makeGrid);
// Select color input
pixelCanvas.addEventListener('click', function (event) {
  const paint = colorPicker.value;
  event.target.setAttribute('style', `background-color: ${paint}`);
});
