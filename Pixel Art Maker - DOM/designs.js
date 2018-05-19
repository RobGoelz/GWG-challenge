const sizePicker = document.querySelector('#sizePicker');
const pixelCanvas = document.querySelector('#pixelCanvas');
const colorPicker = document.querySelector('#colorPicker');
// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', function makeGrid (event) {
  // Your code goes here!
  // if (document.querySelector('tr')) {
  //   document.querySelector('tr').remove();
  // }

  // Select size input
  const tRows = document.querySelector('#inputHeight').value;
  const tCols = document.querySelector('#inputWidth').value;
  // Set const for creating grid elements
  // const tRow = document.createElement('tr');
  // const tData = document.createElement('td');

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
  let paint = colorPicker.value;
  document.querySelector('td').style.color = paint;
});
