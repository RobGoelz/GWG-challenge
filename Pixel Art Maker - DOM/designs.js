// Set consts for commonly used IDs
const sizePicker = document.querySelector('#sizePicker');
const pixelCanvas = document.querySelector('#pixelCanvas');
// Select color
const paint = document.querySelector('#colorPicker').value;

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', function makeGrid (event) {
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
});

// Select color input
pixelCanvas.addEventListener('click', function () {
  document.querySelector('td').style.color = paint;
});
