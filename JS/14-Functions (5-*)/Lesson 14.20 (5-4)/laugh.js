/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function (num) {
    var laughStore = "";
    var ha = "ha"
    for (var i ="1"; i <= num; i++) {
        laughStore += ha;
    }
    return laughStore + "!";
}

console.log(laugh(10));
