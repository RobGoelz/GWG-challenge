let table = $('table');

const addRow = function () {
  table.append("<tr></tr>");
};

const addCol = function () {
  $( 'tr:last' ).append("<td></td>");
      $('td').attr('class','pixel');
};

const clearCanvas = function () {
   $('table tr').remove();
};

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function makeGrid(event) {
  clearCanvas();

  const rows=$('#inputHeight').val();
  const cols=$('#inputWeight').val();

  for (let i = 1; i <= rows; i++) {
    // $('table').append("<tr></tr>");
    addRow();
    for (let j = 1; j <= cols; j++) {
      // $( 'tr:last' ).append("<td></td>");
      // $('td').attr('class','pixel');
      addCol();
    }
  }
    event.preventDefault();
});

// Select color input
$("#pixelCanvas").on('click','.pixel',function(){
  let paint=$("#colorPicker").val();
  $( this ).css("background-color",paint);
});

// $("#pixelCanvas").drag('.pixel',function(event){
//   let paint=$("#colorPicker").val();
//   $( this ).css("background-color",paint);
// });
