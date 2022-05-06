/*
Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.

laugh(3);
Returns: hahaha!
*/

let laugh = function(num) {
    let x = "";
    for (let i = 0; i < num; i++) {
        x += "ha";
    }
    return x + "!";
}

console.log(laugh(3));
