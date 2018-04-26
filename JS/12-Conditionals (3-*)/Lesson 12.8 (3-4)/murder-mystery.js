/*
 * Programming Quiz: Murder Mystery (3-4)
 */

// change the value of `room` and `suspect` to test your code
var room = "ballroom";
var suspect = "Mr. Kalehoff";

var weapon = "";
var solved = false;

if (room === "ballroom" && suspect === "Mr. Kalehoff") {
    var weapon = "poison";
    var solved = true;
} else if (room === "gallery" && suspect === "Ms. Van Cleve") {
    var weapon = "trophy";
    var solved = true;
} else if (room === "billiards room" && suspect === "Mrs. Sparr") {
    var weapon = "pool stick";
    var solved = true;
} else {
    var weapon = "knife";
    var solved = true;
}

if (solved) {
	console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}
