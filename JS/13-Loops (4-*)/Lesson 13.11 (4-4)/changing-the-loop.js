/*
 * Programming Quiz: Changing the Loop (4-4)
 */

// rewrite the while loop as a for loop

//Before:
// var x = 9;
// while (x >= 1) {
//     console.log("hello " + x);
//     x = x - 1;
// }

//After:
for (var x = 9; x >= 1; x--)  {
    console.log("hello " + x);
}
