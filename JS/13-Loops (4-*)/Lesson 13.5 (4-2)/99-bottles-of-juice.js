/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

var num = 99;
var line1 = " bottles of juice on the wall! ";
var line2 = ' bottles of juice! Take one down, pass it around... ';
var line3 = " bottles of juice on the wall!";

var single1 = " bottle of juice on the wall! ";
var single2 = ' bottle of juice! Take one down, pass it around... ';
var single3 = " bottles of juice on the wall!";
var single4 = " bottle of juice on the wall!";

// check value of num
while (num > 0) {
    // print lyrics using num
    // don't forget to check pluralization on the last line!
    if (num === 1) {
        console.log(num + single1 + num + single2 + (num - 1) + single3);
    } else if (num === 2) {
        console.log(num + line1 + num + line2 + (num - 1) + single4);
    }
    else {
        console.log(num + line1 + num + line2 + (num - 1) + line3);
    }
    num = num - 1; // decrement num
}
