var num = 99;
var line1 = " bottles of juice on the wall! ";
var line2 = ' bottles of juice! Take one down, pass it around... ';
var line3 = " bottles of juice on the wall!";
var line4 = " bottle of juice on the wall! ";
var line5 = " bottles of juice on the wall!";
var line6 = " bottle of juice on the wall!";
var line7 = ' bottle of juice! Take one down, pass it around... ';

while (num > 0){

if ( num === 1){
    console.log(num + line4 + num + line7 + (num - 1) + line5);
} else if( num ===2){
    console.log(num + line1 + num + line2 + (num - 1) + line6);
} else {
   console.log(num + line1 + num + line2 + (num - 1) + line3);
}
num = num -1;
}
